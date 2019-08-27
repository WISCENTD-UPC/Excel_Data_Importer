/**

**/
var templateObject = {}; //check template.js
var sheetEndColumns = []; //end columns of all sheets
var sheetEndRows = []; // collected in xlsx.js

//Startup Routines
var isStartUpSuccessful = true;
var startUpMsg = "Everything is perfect";

var dataCells = []; //formatted excel data cells

var dataValues = [];
var eventDataValues = [];
var errorString = "";
var hasErrors = false;

var orgUnitIdScheme = "UID";
var dataElementIdScheme = "UID";
var idScheme = "UID";

var preImportValidationSummary = [];
var importSummary = [];

var isEventDataAvaialble = false;

var isAggDataAvailable = false;

$(document).ready(function() {
    try {
        var templates = data.templates;
        var res = validateJSON(templates);
        isStartUpSuccessful = res.isValidated;
        startUpMsg = res.msg;

        var htmlStr = "";

        if (isStartUpSuccessful) {
            for (var t = 0; t < templates.length; t++) {
                htmlStr += "<option value='" + t + "'>";
                htmlStr += templates[t].name;
                htmlStr += "</option>";
            }

            $("#temSelectBox").html(htmlStr);
            changeTemplate();

            for (var t = 0; t < templateObject.sheets.length; t++) {
                var sheet = templateObject.sheets[t];

                try {
                    sheetEndColumns.push(sheet.last_data_column);
                } catch (ex) {
                    sheetEndColumns.push("ZZZZ"); //a very large column number
                }
            }
        }
    } catch (ex) {
        isStartUpSuccessful = false;
        startUpMsg = "Please check the template JSON. Error : " + ex.message;
        printError(startUpMsg);
        $("#uploadLogo").off("click");
        $("#uploadFile").off("click");
    }

    $("#loader").hide();

    if (isStartUpSuccessful) {
        //printSuccess("Everything is ready");
    } else {
        printError(startUpMsg);
        $("#uploadLogo").off("click");
        $("#uploadFile").off("click");
    }
});

function changeTemplate() {
    $("#loader").show();
    sheetEndColumns = [];
    sheetEndRows = [];

    try {
        var selectedTemIndex = parseInt($("#temSelectBox").val());
        templateObject = data.templates[selectedTemIndex];
        var href = "";

        if (templateObject.file != "")
            href = "templates/" + templateObject.file;

        $("#downloadLogo").attr({ target: "_blank", href: href });
    } catch (ex) {
        isStartUpSuccessful = false;
        startUpMsg = "Please check the template JSON. Error : " + ex.message;
        printError(startUpMsg);
        $("#uploadLogo").off("click");
        $("#uploadFile").off("click");
    }

    $("#loader").hide();

    if (isStartUpSuccessful) {
        //printSuccess("Everything is ready");
    } else {
        printError(startUpMsg);
        $("#uploadLogo").off("click");
        $("#uploadFile").off("click");
    }
}

function changeOUScheme() {
    var ous = $("#ousSelectBox").val();

    if (ous == 1) orgUnitIdScheme = "UID";
    else orgUnitIdScheme = "Code";

    //alert(orgUnitIdScheme);
}

//Processing the data in the excel sheets
function processExcelSheet() {
    dataValues = [];
    eventDataValues = {};
    errorString = "";
    hasErrors = false;
    isEventDataAvaialble = false;
    isAggDataAvailable = false;

    //ResultArray is defined and populated in funcxl.js
    for (var t = 0; t < templateObject.sheets.length; t++) {
        $("#loaderMsg").html("Fetching data from the sheets...");

        if (!hasErrors) {
            var sheet = templateObject.sheets[t];

            if (sheet.sheet_no > resultArray.length) {
                hasErrors = true;
                errorString +=
                    "<tr><td></td><td> Sheet " +
                    sheet.sheet_no +
                    "," +
                    resultArray.length +
                    " was not found. Please download template excel to verify or contact admin.</td></tr>";
            }

            if (
                sheet.sheet_type == "AGGREGATE_EVENT" ||
                sheet.sheet_type == "AGGREGATE_STATIC" ||
                sheet.sheet_type == "AGGREGATE_STATIC_BOOLEAN" ||
                sheet.sheet_type == "AGGREGATE_STATIC_YES_ONLY"
            ) {
                var orgUnit = getCellData(sheet.sheet_no, sheet.oucode_cell);
                //var dMonth = getCellData( sheet.sheet_no, sheet.month_cell );
                var dYear = getCellData(sheet.sheet_no, sheet.year_cell);
                //orgUnitIdScheme = sheet.orgUnitIdScheme;

                //validating month and year
                //var mResult = validateMonth(dMonth);
                var yResult = validateYear(dYear);
                //if(mResult.isErr) { hasErrors = true; errorString += "<tr><td></td><td> " + mResult.msg + "</td></tr>"; } else dMonth = mResult.month;
                if (yResult.isErr) {
                    hasErrors = true;
                    errorString +=
                        "<tr><td></td><td> " + yResult.msg + "</td></tr>";
                } else dYear = yResult.year;
            }

            if (
                sheet.sheet_type == "MULTIPLE_DE_OU" ||
                sheet.sheet_type == "MULTIPLE_DE_OU DESA"
            ) {
                //var orgUnit = getCellData( sheet.sheet_no, sheet.oucode_cell );
                var dMonth = getCellData(sheet.sheet_no, sheet.month_cell);
                var dYear = getCellData(sheet.sheet_no, sheet.year_cell);
                //orgUnitIdScheme = sheet.orgUnitIdScheme;

                //validating month and year
                var mResult = validateMonth(dMonth);
                var yResult = validateYear(dYear);
                if (mResult.isErr) {
                    hasErrors = true;
                    errorString +=
                        "<tr><td></td><td> " + mResult.msg + "</td></tr>";
                } else dMonth = mResult.month;
                if (yResult.isErr) {
                    hasErrors = true;
                    errorString +=
                        "<tr><td></td><td> " + yResult.msg + "</td></tr>";
                } else dYear = yResult.year;
            }

            if (!hasErrors) {
                if (
                    sheet.sheet_type == "AGGREGATE_EVENT" ||
                    sheet.sheet_type == "AGGREGATE_STATIC"
                ) {
                    isAggDataAvailable = true;
                    for (var x = 0; x < sheet.agg_des.length; x++) {
                        var ds = sheet.agg_des[x];
                        var dataValue = {};
                        dataValue.period = dYear;
                        dataValue.dataElement = ds.deuid;
                        dataValue.categoryOptionCombo = ds.cocuid;
                        dataValue.orgUnit = orgUnit;
                        var tempValue = getCellData(sheet.sheet_no, ds.cell_no);
                        if (tempValue != "" && !ds.total) {
                            dataValue.value = tempValue;
                            dataValues.push(dataValue);
                        }
                    }
                }

                if (sheet.sheet_type == "AGGREGATE_STATIC_YES_ONLY") {
                    isAggDataAvailable = true;
                    for (var x = 0; x < sheet.agg_des.length; x++) {
                        var ds = sheet.agg_des[x];
                        var dataValue = {};
                        dataValue.period = dYear;
                        dataValue.dataElement = ds.deuid;
                        dataValue.categoryOptionCombo = ds.cocuid;
                        dataValue.orgUnit = orgUnit;
                        dataValue.value = getCellData(
                            sheet.sheet_no,
                            ds.cell_no
                        );
                        if (dataValue.value == "TRUE" && !ds.total) {
                            dataValue.value = "true";
                            dataValues.push(dataValue);
                        }
                    }
                }
                if (sheet.sheet_type == "AGGREGATE_STATIC_BOOLEAN") {
                    isAggDataAvailable = true;
                    for (var x = 0; x < sheet.agg_des.length; x++) {
                        var ds = sheet.agg_des[x];
                        var dataValue = {};
                        dataValue.period = dYear;
                        dataValue.dataElement = ds.deuid;
                        dataValue.categoryOptionCombo = ds.cocuid;
                        dataValue.orgUnit = orgUnit;
                        dataValue.value = getCellData(
                            sheet.sheet_no,
                            ds.cell_no
                        );
                        dataValues.push(dataValue);
                    }
                }

                if (sheet.sheet_type == "MULTIPLE_DE_OU_PE") {
                    isAggDataAvailable = true;

                    var rowStart = parseInt(sheet.data_starting_row);
                    var rowEnd = parseInt(getLastRowNumber(sheet.sheet_no));
                    //console.log( "$$$$$$$$$$$$$$$");
                    //console.log( sheetEndRows );
                    //orgUnitIdScheme = sheet.orgUnitIdScheme;
                    dataElementIdScheme = sheet.dataElementIdScheme;
                    idScheme = sheet.idScheme;

                    //console.log( "RowStart: " + rowStart +" - RowEnd: " + rowEnd );
                    //console.log(rowEnd);

                    for (var r = rowStart; r <= rowEnd; r++) {
                        for (var x = 0; x < sheet.agg_des.length; x++) {
                            if (
                                getCellData(
                                    sheet.sheet_no,
                                    sheet.key_coulmn + "" + r
                                ) != ""
                            ) {
                                var ds = sheet.agg_des[x];
                                var dataValue = {};
                                var dMonth = getCellData(
                                    sheet.sheet_no,
                                    sheet.month_col + "" + r
                                );
                                var dYear = getCellData(
                                    sheet.sheet_no,
                                    sheet.year_col + "" + r
                                );

                                //validating month and year
                                var mResult = validateMonth(dMonth);
                                var yResult = validateYear(dYear);
                                if (mResult.isErr) {
                                    hasErrors = true;
                                    errorString +=
                                        "<tr><td></td><td> " +
                                        mResult.msg +
                                        "</td></tr>";
                                } else dMonth = mResult.month;
                                if (yResult.isErr) {
                                    hasErrors = true;
                                    errorString +=
                                        "<tr><td></td><td> " +
                                        yResult.msg +
                                        "</td></tr>";
                                } else dYear = yResult.year;

                                dataValue.period = dYear + "" + dMonth;

                                dataValue.dataElement = ds.deuid;
                                dataValue.categoryOptionCombo = ds.cocuid;
                                dataValue.orgUnit = getCellData(
                                    sheet.sheet_no,
                                    sheet.oucode_col + "" + r
                                );
                                dataValue.value = getCellData(
                                    sheet.sheet_no,
                                    ds.col_no + "" + r
                                );
                                dataValue.comment = currentFileName;
                                dataValues.push(dataValue);
                            }
                            //console.log(dataValue);
                        }
                    }
                }

                if (sheet.sheet_type == "MULTIPLE_DE_OU") {
                    isAggDataAvailable = true;
                    console.log("what is going one?");

                    var rowStart = parseInt(sheet.data_starting_row);
                    var rowEnd = parseInt(getLastRowNumber(sheet.sheet_no));
                    //console.log( "$$$$$$$$$$$$$$$");
                    //console.log( sheetEndRows );
                    //orgUnitIdScheme = sheet.orgUnitIdScheme;
                    dataElementIdScheme = sheet.dataElementIdScheme;
                    idScheme = sheet.idScheme;

                    //console.log( "RowStart: " + rowStart +" - RowEnd: " + rowEnd );
                    //console.log(rowEnd);

                    for (var r = rowStart; r <= rowEnd; r++) {
                        for (var x = 0; x < sheet.agg_des.length; x++) {
                            if (
                                getCellData(
                                    sheet.sheet_no,
                                    sheet.key_coulmn + "" + r
                                ) != ""
                            ) {
                                var ds = sheet.agg_des[x];
                                var dataValue = {};
                                //var dMonth = getCellData( sheet.sheet_no, sheet.month_col + "" + r );
                                //var dYear = getCellData( sheet.sheet_no, sheet.year_col + "" + r );

                                //validating month and year
                                //var mResult = validateMonth(dMonth);
                                //var yResult = validateYear(dYear);
                                //if(mResult.isErr) { hasErrors = true; errorString += "<tr><td></td><td> " + mResult.msg + "</td></tr>"; } else dMonth = mResult.month;
                                //if(yResult.isErr) { hasErrors = true; errorString += "<tr><td></td><td> " + yResult.msg + "</td></tr>"; } else dYear = yResult.year;

                                dataValue.period = dYear + "" + dMonth;

                                dataValue.dataElement = ds.deuid;
                                dataValue.categoryOptionCombo = ds.cocuid;
                                dataValue.orgUnit = getCellData(
                                    sheet.sheet_no,
                                    sheet.oucode_col + "" + r
                                );
                                dataValue.value = getCellData(
                                    sheet.sheet_no,
                                    ds.col_no + "" + r
                                );
                                dataValue.comment = currentFileName;
                                dataValues.push(dataValue);
                            }
                            //console.log(dataValue);
                        }
                    }
                }

                //Making the payload for event data
                if (sheet.sheet_type == "AGGREGATE_EVENT") {
                    eventDataValues.events = [];
                    //orgUnitIdScheme = sheet.orgUnitIdScheme;
                    var rowStart = parseInt(sheet.data_starting_row);
                    var rowEnd = parseInt(getLastRowNumber(sheet.sheet_no));
                    isEventDataAvaialble = true;

                    //console.log( sheet.sheet_no + " : " + rowEnd );

                    //Event rows
                    for (var r = rowStart; r < rowEnd; r++) {
                        if (
                            getCellData(
                                sheet.sheet_no,
                                sheet.key_coulmn + "" + r
                            ) != ""
                        ) {
                            var eventDataValue = {};
                            eventDataValue.orgUnit = orgUnit;
                            eventDataValue.program = sheet.program;
                            eventDataValue.eventDate = formatDate(
                                getCellData(
                                    sheet.sheet_no,
                                    sheet.event_date_col + "" + r
                                )
                            );
                            //eventDataValue.orgUnitIdScheme = orgUnitIdScheme;
                            eventDataValue.dataValues = [];

                            for (var x = 0; x < sheet.event_des.length; x++) {
                                var dv = {};
                                var ds = sheet.event_des[x];
                                dv.dataElement = ds.deuid;
                                //dv.categoryOptionCombo = ds.cocuid;
                                var dataType = ds.detype;
                                dv.value = getCellData(
                                    sheet.sheet_no,
                                    ds.column + "" + r
                                );

                                if (dataType == "DATE") {
                                    dv.value = formatDate(dv.value);
                                }

                                var result = validateEventData(
                                    dv.value,
                                    dataType,
                                    ds.isMandatory
                                );

                                if (!result.hasError)
                                    eventDataValue.dataValues.push(dv);
                                else {
                                    hasErrors = true;
                                    errorString +=
                                        "<tr><td></td><td> " +
                                        result.msg +
                                        " in " +
                                        ds.column +
                                        "" +
                                        r +
                                        " of sheet " +
                                        sheet.sheet_no +
                                        " </td></tr>";
                                }
                            }
                            //console.log(eventDataValue);
                            eventDataValues.events.push(eventDataValue);
                        }
                    }
                }
            }
        }
    }

    //saving validation summary
    var vs = {};
    vs.fileNum = currentFileNum;
    vs.hasErrors = hasErrors;

    if (hasErrors)
        vs.msg =
            errorString +
            "<tr><td></td><td> - <b> Hence, the import request was declined.</b> </td></tr>";
    else vs.msg = "Everything was perfect";

    preImportValidationSummary.push(vs);

    if (!hasErrors) {
        importEventData();
    } else {
        circulateFiles();
    }
}

//function to get the row number of the last row in a sheet
function getLastRowNumber(sheetNum) {
    /*var addressOfTheLastData = resultArray[sheetNum-1][resultArray[sheetNum-1].length - 1].split("=")[0];
	var numberPotion = addressOfTheLastData.match(/\d/g);
	numberPotion = numberPotion.join("");*/

    if (sheetEndRows.length >= sheetNum) return sheetEndRows[sheetNum - 1];
    else return 2000;
}

//Function to get data with the cell address
function getCellData(sheetNum, address) {
    var val = "";
    address = address.toUpperCase(); //making addresses with simple letters into capital

    try {
        var data = resultArray[sheetNum - 1][address];

        if (data != undefined) val = data;
    } catch (ex) {
        hasErrors = true;
        errorString += "</br>Something went wrong. Err:" + ex.message;
    }

    return val;
}

//Function to get Summation of data with the cell address
function getSummationCellData(sheetNum, column, startAddress, endAddress) {
    //var data = "";
    var Sum = "";
    var address = ""; //the first address cell

    //startAddress = startAddress.toUpperCase(); //making addresses with simple letters into capital
    //endAddress = endAddress.toUpperCase(); //making addresses with simple letters into capital

    try {
        for (var x = startAddress; x <= endAddress; x++) {
            address = column + "" + x;
            console.log("address=" + address);
            var data = resultArray[sheetNum - 1][address.toUpperCase()];
            console.log("data=" + data);

            if (data != undefined) Sum = Sum + parseInt(data);
        }
    } catch (ex) {
        hasErrors = true;
        errorString += "</br>Something went wrong. Err:" + ex.message;
    }
    console.log("Sum=" + Sum);
    return Sum;
}

//Importing data
var eventHtmlString = "";

function importEventData() {
    $("#loader").show();

    if (isEventDataAvaialble) {
        //eventDataValues.orgUnitIdScheme = orgUnitIdScheme;
        var eventDataJSON = JSON.stringify(eventDataValues);
        //console.log(eventDataValues);
        //console.log(eventDataJSON);

        //alert(orgUnitIdScheme);
        var url = "../../events?orgUnitIdScheme=" + orgUnitIdScheme;
        //var url = "../../events";

        $.ajax({
            method: "POST",
            type: "post",
            url: url,
            contentType: "application/json; charset=utf-8",
            data: eventDataJSON,
            dataType: "json",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .done(function(res) {
                console.log("Event data import response");
                console.log(res);

                var isum = {};
                isum.fileNum = currentFileNum;
                isum.importType = "Event Data";
                isum.hasErrors = false;
                isum.status = res.status;
                isum.message = res.message;

                var imEventCount = "";
                try {
                    imEventCount = res.response.importSummaries.length;
                } catch (ex) {
                    imEventCount = "Couldn't fetch";
                }

                isum.summary =
                    "<b>Imported Events:</b>" +
                    imEventCount +
                    ", <b>Imported Fields:</b>" +
                    res.response.imported +
                    ", <b>Not Imported Fields:</b>" +
                    res.response.ignored;
                importSummary.push(isum);
                importData();
            })
            .fail(function(request, textStatus, errorThrown) {
                try {
                    console.log("Event data import response");
                    var response = request.responseJSON.response;
                    console.log(response);

                    var isum = {};
                    isum.fileNum = currentFileNum;
                    isum.importType = "Event Data";
                    isum.hasErrors = true;
                    isum.status = "Error";
                    isum.message = "";

                    for (var c = 0; c < response.importSummaries.length; c++) {
                        isum.message +=
                            "<tr><td></td><td>" +
                            response.importSummaries[c].description +
                            "</td></tr>";
                    }

                    isum.summary = request.responseJSON.message;
                    importSummary.push(isum);
                } catch (ex) {
                    console.log(
                        "Something went wrong while fetching event import error summary"
                    );
                }

                importData();
            });
    } else {
        var isum = {};
        isum.fileNum = currentFileNum;
        isum.importType = "Event Data";
        isum.hasErrors = false;
        isum.status = "NA";
        isum.message = "NA";
        isum.summary = "NA";
        importSummary.push(isum);

        importData();
    }
}

function importData() {
    if (isAggDataAvailable) {
        //alert(orgUnitIdScheme);
        var dataValueSet = {};
        dataValueSet.dataElementIdScheme = dataElementIdScheme;
        dataValueSet.orgUnitIdScheme = orgUnitIdScheme;
        dataValueSet.idScheme = idScheme;
        dataValueSet.dataValues = dataValues;
        var dataJSON = JSON.stringify(dataValueSet);

        console.log("-------------------------------");
        console.log("DataValueSet : ");
        console.log(dataValueSet);

        //console.log( dataJSON );
        console.log("-------------------------------");

        var url = "../../dataValueSets";

        $.ajax({
            method: "POST",
            type: "post",
            url: url,
            contentType: "application/json; charset=utf-8",
            data: dataJSON,
            dataType: "json",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            success: function(res) {
                console.log("Aggregated data import response");
                console.log(res);

                var isum = {};
                isum.fileNum = currentFileNum;
                isum.importType = "Aggregated Data";
                isum.hasErrors = false;
                isum.status = res.status;

                try {
                    var imMsg = "Ignored data msg : ";
                    for (var c = 0; c < res.conflicts.length; c++) {
                        var conf = res.conflicts[c];
                        imMsg +=
                            "<tr><td></td><td>" +
                            conf.value +
                            " - " +
                            conf.object +
                            "</td></tr>";
                    }
                    isum.message = imMsg;

                    if (res.conflicts.length > 0) isum.hasErrors = true;
                } catch (ex) {
                    isum.message = res.description;
                }

                isum.summary =
                    "<b>Imported:</b>" +
                    res.importCount.imported +
                    ", <b>Updated:</b>" +
                    res.importCount.updated +
                    ", <b>Not Imported:</b>" +
                    res.importCount.ignored;
                importSummary.push(isum);
                circulateFiles();
            },
            error: function(request, error) {
                console.log("Aggregated data import response");
                console.log(error);

                var isum = {};
                isum.fileNum = currentFileNum;
                isum.importType = "Aggregated Data";
                isum.hasErrors = true;
                isum.status = "Error";
                isum.message = error;
                isum.summary = "-";
                importSummary.push(isum);
                //importData();
                circulateFiles();
            }
        });
    } else {
        var isum = {};
        isum.fileNum = currentFileNum;
        isum.importType = "Aggregated Data";
        isum.hasErrors = false;
        isum.status = "NA";
        isum.message = "NA";
        isum.summary = "NA";
        importSummary.push(isum);
        circulateFiles();
    }
}

function printSummary() {
    var htmlStr = "";
    var htmlMsgStr = "";
    //var summaryText = "";

    $("#imSumTable").html("");
    $("#errSumTable").html("");

    for (var f = 0; f < uploadedFiles.length; f++) {
        var hasValidationErrors = false;
        var hasEventImportErrors = false;
        var hasDataValueImportErrors = false;
        htmlStr = "";
        htmlMsgStr = "";
        //console.log(preImportValidationSummary);
        //console.log(importSummary);

        //Pre import validation msg
        var pimv = "";
        for (var v = 0; v < preImportValidationSummary.length; v++) {
            var pv = preImportValidationSummary[v];

            if (pv.fileNum == f + 1) {
                pimv = pv.msg;
                hasValidationErrors = pv.hasErrors;
            }
        }

        //Event Import summary
        var eis = {};
        eis.status = "-";
        eis.message = "-";
        eis.summary = "-";
        for (var v = 0; v < importSummary.length; v++) {
            var ism = importSummary[v];

            if (ism.fileNum == f + 1 && ism.importType == "Event Data") {
                eis = ism;

                if (ism.hasErrors) hasEventImportErrors = true;
            }
        }

        //Aggregated Import summary
        var dis = {};
        dis.status = "-";
        dis.message = "-";
        dis.summary = "-";
        for (var v = 0; v < importSummary.length; v++) {
            var ism = importSummary[v];

            if (ism.fileNum == f + 1 && ism.importType == "Aggregated Data") {
                dis = ism;

                if (ism.hasErrors) hasDataValueImportErrors = true;
            }
        }

        //making summary layout
        htmlStr += "<tr>";

        if (
            !(
                hasValidationErrors ||
                hasEventImportErrors ||
                hasDataValueImportErrors
            )
        )
            htmlStr += "<td> <img src='images/right.jpg' width='20' /> </td>";
        else htmlStr += "<td> <img src='images/wrong.jpg' width='20' /> </td>";

        htmlStr += "<td>" + uploadedFiles[f].name + "</td>";
        htmlStr += "<td>" + eis.summary + "</td>";
        htmlStr += "<td>" + dis.summary + "</td>";
        htmlStr += "</tr>";

        //making message layout for download
        if (
            !(
                hasValidationErrors ||
                hasEventImportErrors ||
                hasDataValueImportErrors
            )
        ) {
            //if success
            //name
            htmlMsgStr += "<tr>";
            htmlMsgStr +=
                "<td colspan='2' style='background:#B7FFB6;text-align:center' >" +
                uploadedFiles[f].name +
                "</td>";
            htmlMsgStr += "</tr>";

            //event status
            htmlMsgStr += "<tr>";
            htmlMsgStr += "<td>Event Data</td>";
            htmlMsgStr += "<td>" + eis.summary + "</td>";
            htmlMsgStr += "</tr>";

            //data value status
            htmlMsgStr += "<tr>";
            htmlMsgStr += "<td>Data Values</td>";
            htmlMsgStr += "<td>" + dis.summary + "</td>";
            htmlMsgStr += "</tr>";
        } else {
            //name
            htmlMsgStr += "<tr>";
            htmlMsgStr +=
                "<td colspan='2' style='background:#FFC8B6;text-align:center' >" +
                uploadedFiles[f].name +
                "</td>";
            htmlMsgStr += "</tr>";

            //Pre Import messages
            htmlMsgStr += "<tr>";
            htmlMsgStr += "<td>Pre-Import Validations</td>";
            htmlMsgStr += "<td></td>";
            htmlMsgStr += "</tr>" + pimv;

            //event status
            htmlMsgStr += "<tr>";
            htmlMsgStr += "<td>Event Data Summary</td>";
            htmlMsgStr += "<td>" + eis.summary + "</td>";
            htmlMsgStr += "</tr>";

            //event messages
            htmlMsgStr += "<tr>";
            htmlMsgStr += "<td>Event Data Message</td>";
            htmlMsgStr += "<td></td>";
            htmlMsgStr += "</tr>" + eis.message;

            //dv status
            htmlMsgStr += "<tr>";
            htmlMsgStr += "<td>Data Value Summary</td>";
            htmlMsgStr += "<td>" + dis.summary + "</td>";
            htmlMsgStr += "</tr>";

            //dv messages
            htmlMsgStr += "<tr>";
            htmlMsgStr += "<td>Data Value Message</td>";
            htmlMsgStr += "<td></td>";
            htmlMsgStr += "</tr>" + dis.message;
        }
        $("#imSumTable").append(htmlStr);
        $("#errSumTable").append(htmlMsgStr);
    }

    $("#loader").hide();
    $("#imModelAlert").modal("show");
}

function formatDate(date) {
    var months = [];
    months["jan"] = "01";
    months["feb"] = "02";
    months["mar"] = "03";
    months["apr"] = "04";
    months["may"] = "05";
    months["jun"] = "06";
    months["jul"] = "07";
    months["aug"] = "08";
    months["sep"] = "09";
    months["oct"] = "10";
    months["nov"] = "11";
    months["dec"] = "12";

    var components = date.split("/");
    if (components.length != 3) return null;
    else
        return (
            components[2] +
            "-" +
            months[components[1].toLowerCase()] +
            "-" +
            components[0]
        );
}
