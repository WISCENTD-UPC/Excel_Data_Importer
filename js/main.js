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
var eventDataValues;
var errorString = "";
var hasErrors = false;

var orgUnitIdScheme = "UID";
var dataElementIdScheme = "UID";
var idScheme = "UID";

var preImportValidationSummary = [];
var importSummary = [];
var numberOfEvents;
var dEOfThisSheet, cocuidOfThisSheet;

var isEventDataAvaialble = false;

var isAggDataAvailable = false;
var excelHeaders = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "AA",
    "AB",
    "AC",
    "AD",
    "AE",
    "AF",
    "AG",
    "AH",
    "AI",
    "AJ",
    "AK",
    "AL",
    "AM",
    "AN",
    "AO",
    "AP",
    "AQ",
    "AR",
    "AS",
    "AT",
    "AU",
    "AV",
    "AW",
    "AX",
    "AY",
    "AZ",
    "BA",
    "BB",
    "BC",
    "BD",
    "BE",
    "BF",
    "BG",
    "BH"
];

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
                //console.log(sheet.sheet_type);
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
        console.log("Xiv");
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
    else orgUnitIdScheme = "CODE";

    //alert(orgUnitIdScheme);
}

//Processing the data in the excel sheets
function processExcelSheet() {
    dataValues = [];
    eventDataValues = {};
    eventDataValues.events = [];
    errorString = "";
    hasErrors = false;
    isEventDataAvaialble = false;
    isAggDataAvailable = false;

    console.log("before for processExcelSheet");
    //ResultArray is defined and populated in funcxl.js

    var length, modelSelector;
    if (templateObject.sheet_mode == "SAME_MODEL_SHEETS") {
        length = resultArray.length;
        modelSelector = 0;
    } else {
        length = templateObject.sheets.length;
        modelSelector = 1;
    }

    for (var t = 0; t < length; t++) {
        console.log("one sheet");
        $("#loaderMsg").html("Fetching data from the sheets...");

        if (!hasErrors) {
            var sheet = templateObject.sheets[t * modelSelector]; //TODO: Any other ideas ?

            if (sheet.sheet_no > resultArray.length) {
                hasErrors = true;
                errorString +=
                    "<tr><td></td><td> Sheet " +
                    sheet.sheet_no +
                    " was not found. Please download template excel to verify or contact admin.</td></tr>";
            }

            if (
                sheet.sheet_type == "AGGREGATE_EVENT" ||
                sheet.sheet_type == "AGGREGATE_STATIC"
            ) {
                var orgUnit = getCellData(sheet.sheet_no, sheet.oucode_cell);
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
                console.log("No errors in the sheet");
                if (
                    sheet.sheet_type == "AGGREGATE_EVENT" ||
                    sheet.sheet_type == "AGGREGATE_STATIC"
                ) {
                    isAggDataAvailable = true;
                    for (var x = 0; x < sheet.agg_des.length; x++) {
                        var ds = sheet.agg_des[x];
                        var dataValue = {};
                        dataValue.period = dYear + "" + dMonth;
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
                    var rowEnd = parseInt(getLastRowNumber(sheet.sheet_no)) - 1;
                    var found = false;
                    for (
                        var lastRow = rowEnd;
                        lastRow >= rowStart && !found;
                        lastRow--
                    ) {
                        console.log(
                            sheet.key_column +
                                getCellData(
                                    sheet.sheet_no,
                                    sheet.key_column + "" + lastRow
                                )
                        );
                        if (
                            getCellData(
                                sheet.sheet_no,
                                sheet.key_column + "" + lastRow
                            ) == "-"
                        ) {
                            rowEnd = lastRow - 1;
                            found = true;
                        }
                    }
                    console.log("Row end " + rowEnd);
                    //console.log( "$$$$$$$$$$$$$$$");
                    //console.log( sheetEndRows );
                    //orgUnitIdScheme = sheet.orgUnitIdScheme;
                    dataElementIdScheme = sheet.dataElementIdScheme;

                    //console.log( "RowStart: " + rowStart +" - RowEnd: " + rowEnd );
                    //console.log(rowEnd);

                    for (var r = rowStart; r <= rowEnd; r++) {
                        for (var x = 0; x < sheet.agg_des.length; x++) {
                            if (
                                getCellData(
                                    sheet.sheet_no,
                                    sheet.key_column + "" + r
                                ) != ""
                            ) {
                                var ds = sheet.agg_des[x];
                                var dataValue = {};
                                var dMonth = "";
                                if (sheet.month_col != "A")
                                    dMonth = getCellData(
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

                                if (sheet.month_col == "A")
                                    dataValue.period = dYear;
                                else dataValue.period = dYear + "" + dMonth;

                                dataValue.dataElement = ds.deuid;
                                dataValue.categoryOptionCombo = ds.cocuid;
                                dataValue.attributeOptionCombo = sheet.attr_oc;
                                dataValue.orgUnit = getCellData(
                                    sheet.sheet_no,
                                    sheet.oucode_col + "" + 3
                                );
                                var colN = ds.col_no;
                                var array = [];
                                array = colN.split(",");
                                var numericalValue = 0;
                                if (array.length == 1)
                                    dataValue.value = getCellData(
                                        sheet.sheet_no,
                                        array[0] + "" + r
                                    );
                                else {
                                    for (
                                        var factorColumn = 0;
                                        factorColumn < array.length;
                                        factorColumn++
                                    ) {
                                        var factorColumnValue = getCellData(
                                            sheet.sheet_no,
                                            array[factorColumn] + "" + r
                                        );
                                        if (factorColumnValue != "")
                                            numericalValue += parseInt(
                                                factorColumnValue
                                            );
                                    }
                                    console.log(numericalValue);
                                    dataValue.value = numericalValue.toString();
                                }
                                dataValues.push(dataValue);
                            }
                            //console.log(dataValue);
                        }
                    }
                }

                //Making the payload for event data
                if (sheet.sheet_type == "AGGREGATE_EVENT") {
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
                                sheet.key_column + "" + r
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

                if (sheet.sheet_type == "EVENTS") {
                    console.log("Events type");
                    var rowStart = parseInt(sheet.data_starting_row);
                    var rowEnd = parseInt(getLastRowNumber(sheet.sheet_no));
                    isEventDataAvaialble = true;

                    console.log(sheet.sheet_no + " : " + rowStart);

                    //Event rows
                    numberOfEvents = 0;
                    for (var r = rowStart; r <= rowEnd; r++) {
                        if (
                            getCellData(
                                sheet.sheet_no,
                                sheet.key_column + "" + r
                            ) != ""
                        ) {
                            var eventDataValue = {};
                            eventDataValue.orgUnit = getCellData(
                                sheet.sheet_no,
                                sheet.ou_col + "" + r
                            );
                            eventDataValue.program = sheet.program;
                            eventDataValue.eventDate = getCellData(
                                sheet.sheet_no,
                                sheet.event_date_col + "" + r
                            );
                            //eventDataValue.orgUnitIdScheme = orgUnitIdScheme;
                            eventDataValue.dataValues = [];
                            var columnOfData = parseInt(
                                sheet.data_starting_col
                            );
                            var columnOfDataLetter = getColumnName(
                                columnOfData
                            );

                            var dv = {};
                            while (
                                (dv.dataElement = getCellData(
                                    sheet.sheet_no,
                                    columnOfDataLetter + "" + 1
                                ))
                            ) {
                                dv.value = getCellData(
                                    sheet.sheet_no,
                                    columnOfDataLetter + "" + r
                                );

                                columnOfDataLetter = nextLetter(
                                    columnOfDataLetter
                                );
                                eventDataValue.dataValues.push(dv);
                                dv = {};
                            }
                            /*
							for( var x=0; x<sheet.event_des_length; x++ )
							{
								var dv = {};
								var ds = sheet.event_des[x];

								dv.dataElement = getCellData( sheet.sheet_no, columnOfDataString + "" + 1 );
								//dv.categoryOptionCombo = ds.cocuid;
								dv.value = getCellData( sheet.sheet_no, columnOfDataString + "" + r );
								eventDataValue.dataValues.push(dv);
								++columnOfData;
								
							}
							*/
                            //console.log(eventDataValue);
                            ++numberOfEvents;
                            eventDataValues.events.push(eventDataValue);
                        }
                    }
                }

                if (sheet.sheet_type == "MULTIPLE_FLEXIBLE") {
                    //console.log("MULTIPLE_FLEXIBLE"+" type");
                    isAggDataAvailable = true;
                    dataElementIdScheme = sheet.dataElementIdScheme;

                    // for each sheet in the list
                    var sheet_no = t + 1;
                    var orgUnit = getCellData(sheet_no, sheet.ou);

                    if (orgUnit !== "") {
                        //console.log("Hoja numero " + t);

                        var year = getCellData(sheet_no, sheet.year);

                        var period;
                        var dataValue;

                        // for each month
                        var dim1 = sheet.period_dim_1_first;
                        for (var i = 0; i < sheet.period_dim_1_length; i++) {
                            period =
                                year +
                                getPeriodNumber(
                                    sheet.period_type,
                                    sheet_no,
                                    dim1,
                                    sheet.period_dim_2
                                );
                            //console.log("Dim1: "+dim1+"  - dim2 : "+sheet.period_dim_2);
                            //console.log("period" + period);

                            // localize and get each dataElement-category
                            for (var x = 0; x < sheet.data_des.length; x++) {
                                var ds = sheet.data_des[x];
                                dataValue = {};

                                dataValue.period = period;
                                dataValue.dataElement = ds.de_code;
                                dataValue.categoryOptionCombo = ds.cocuid;
                                dataValue.orgUnit = orgUnit;
                                dataValue.value = getCellDataRC(
                                    sheet_no,
                                    dim1,
                                    ds.dim
                                );

                                //console.log(dataValue);

                                dataValues.push(dataValue);
                            }
                            dim1 = nextDim(dim1, 1);
                        }
                    }
                    //console.log(dataValues);
                }

                if (sheet.sheet_type == "UNLIMITED_DE_OU_PE") {
                    console.log("UNLIMITED_DE_OU_PE" + " type");
                    isAggDataAvailable = true;
                    dataElementIdScheme = sheet.dataElementIdScheme;

                    // for each sheet in the list
                    var sheet_no = t + 1;

                    var year = getCellData(sheet_no, sheet.year);

                    if (year.length == 0 || parseInt(year) > 1900) {
                        var period;
                        var dataValue;

                        // for each month
                        var dim1 = sheet.period_dim_1;
                        var de_per_period = sheet.data_des.length;

                        var lastColumn;
                        //		if (sheet.period_type == "YEARLY_PERIOD") {
                        lastColumn = distanceBetween(
                            sheet.period_dim_1,
                            lastColumnForRow(
                                resultArray[sheet_no - 1],
                                sheet.period_dim_2
                            )
                        );
                        //	} else {
                        //		lastColumn = sheet.period_length;
                        //	}
                        var lastRow = lastRowForColumn(
                            resultArray[sheet_no - 1],
                            sheet.orgUnit_dim
                        );
                        var nbOfPeriods =
                            (lastColumn + de_per_period) / de_per_period;

                        for (var i = 0; i < nbOfPeriods; i++) {
                            period =
                                year +
                                getPeriodNumber(
                                    sheet.period_type,
                                    sheet_no,
                                    dim1,
                                    sheet.period_dim_2
                                );
                            //console.log("Dim1: "+dim1+"  - dim2 : "+sheet.period_dim_2);
                            //console.log("period" + period);

                            for (
                                var row = sheet.data_starting_row;
                                row <= lastRow;
                                row++
                            ) {
                                orgUnit = getCellDataRC(
                                    sheet_no,
                                    sheet.orgUnit_dim,
                                    row
                                );
                                if (orgUnit.length == 11) {
                                    for (
                                        var de_idx = 0;
                                        de_idx < de_per_period;
                                        de_idx++
                                    ) {
                                        var de = sheet.data_des[de_idx];
                                        dataValue = {};
                                        dataValue.period = period;
                                        dataValue.dataElement = de.de_code;
                                        dataValue.categoryOptionCombo =
                                            de.cocuid;
                                        dataValue.orgUnit = orgUnit;
                                        var testDim = nextDim(dim1, de_idx);
                                        dataValue.value = getCellDataRC(
                                            sheet_no,
                                            nextDim(dim1, de_idx),
                                            row
                                        );
                                        console.log(dataValue);
                                        dataValues.push(dataValue);
                                    }
                                }
                            }
                            dim1 = nextDim(dim1, de_per_period);
                        }
                    } else {
                        console.log("TODO: print error");
                    }
                    console.log("dataValues");
                    console.log(dataValues);
                }

                if (sheet.sheet_type == "UNLIMITED_FLEXIBLE") {
                    console.log("UNLIMITED_FLEXIBLE" + " type");
                    isAggDataAvailable = true;
                    dataElementIdScheme = sheet.dataElementIdScheme;

                    // for each sheet in the list
                    var sheet_no = t + 1;

                    var year = getCellData(
                        sheet_no,
                        sheet.year_column + sheet.year_row
                    );

                    if (year.length == 0 || parseInt(year) > 1900) {
                        var period;
                        var dataValue;
                        var getPeriod, getDE;
                        // for each month
                        var de_row;

                        var data_starting_row;

                        if (
                            getCellData(sheet_no, "A1").localeCompare(
                                "MULTIPLE_DE"
                            ) == 0
                        ) {
                            data_starting_row =
                                sheet.data_starting_row_advanced;
                            getDE = getCellDataRC;
                            getCOCUID = getCellDataRC;
                            de_row = sheet.de_advanced_row;
                            cocuid_row = sheet.cocuid_advanced_row;
                        } else {
                            data_starting_row = sheet.data_starting_row;
                            de_row = sheet.de_simple_row;
                            cocuid_row = sheet.cocuid_simple_row;
                            dEOfThisSheet = getCellDataRC(
                                sheet_no,
                                sheet.de_simple_col,
                                de_row
                            );
                            cocuidOfThisSheet = getCellDataRC(
                                sheet_no,
                                sheet.cocuid_simple_col,
                                cocuid_row
                            );
                            getDE = getDESimple;
                            getCOCUID = getCOCUIDSimple;
                        }

                        if (sheet.period_type == "YEARLY_PERIOD") {
                            getPeriod = getYearlyPeriod;
                        } else if (sheet.period_type == "MONTHLY") {
                            getPeriod = getMonthlyPeriod;
                        } else {
                            console.log(
                                "WARNING. PERIOD IS NOT MONTHLY NEITHER YEARLY. YEARLY APPLIED"
                            );
                            getPeriod = getYearlyPeriod;
                        }

                        var lastRow = lastRowForColumn(
                            resultArray[sheet_no - 1],
                            sheet.orgUnit_dim
                        );

                        var de, cocuid;
                        var firstColumn = sheet.period_dim_1;
                        // set lastColumn to next one so it is also included in the loop
                        var lastColumn = nextDim(
                            getLastColumn(resultArray[sheet_no - 1]),
                            1
                        );
                        var thisCol = firstColumn;

                        do {
                            // For each column, retrieves the period, the dataElement code and the cocuid
                            period = getPeriod(
                                period,
                                year,
                                sheet_no,
                                thisCol,
                                sheet.period_dim_2
                            );
                            de = getDE(sheet_no, thisCol, de_row);
                            cocuid = getCOCUID(sheet_no, thisCol, cocuid_row);
                            for (
                                var row = data_starting_row;
                                row <= lastRow;
                                row++
                            ) {
                                // for each row, retrieves the value
                                dataValue = {};
                                dataValue.value = getCellDataRC(
                                    sheet_no,
                                    thisCol,
                                    row
                                );

                                // only adds for import if there's a value
                                if (dataValue.value.length > 0) {
                                    orgUnit = getCellDataRC(
                                        sheet_no,
                                        sheet.orgUnit_dim,
                                        row
                                    );

                                    dataValue.period = period;
                                    dataValue.dataElement = de;
                                    dataValue.categoryOptionCombo = cocuid;
                                    dataValue.orgUnit = orgUnit;

                                    dataValues.push(dataValue);
                                }
                            }
                            thisCol = nextDim(thisCol, 1);
                        } while (thisCol.localeCompare(lastColumn) != 0);
                    } else {
                        console.log("TODO: print error");
                    }
                    console.log("dataValues");
                    console.log(dataValues);
                }
            }
        }
    }

    function getDESimple(sheet_no, col, row) {
        return dEOfThisSheet;
    }

    function getCOCUIDSimple(sheet_no, col, row) {
        return cocuidOfThisSheet;
    }

    function getMonthlyPeriod(lastPeriod, year, sheet_no, col, row) {
        if (getPeriodNumber("MONTHLY", sheet_no, col, row).length == 0) {
            // for advanced templates it uses this line n-1 times per period where n is number of columns.
            return lastPeriod;
        } else {
            return year + getPeriodNumber("MONTHLY", sheet_no, col, row);
        }
    }

    function getYearlyPeriod(lastPeriod, year, sheet_no, col, row) {
        return getCellDataRC(sheet_no, col, row) || year;
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
        if (!isAggDataAvailable) importEventData();
        else importData();
    } else {
        circulateFiles();
    }
}

/***************************************************************************************************
 *******************************         AUXILIARY FUNCTIONS        ********************************
 ***************************************************************************************************/

/**
 * Gets the object with only the keys starting with some string.
 * It removes this part of the string in the new object
 */
function getObjectWithKeys(
    object,
    theString,
    parseFunctionKeys,
    parseFunctionValues
) {
    var theMatchingString = String(theString);
    var z = Object.keys(object)
        .filter(function(k) {
            // If starting with the search string and next is a number (when searching letter) OR
            // if it's a number AND there's nothing after the string AND the previous character is not a number
            return (
                (k.indexOf(theMatchingString) == 0 &&
                    !isNaN(k.charAt(theMatchingString.length))) ||
                (!isNaN(theMatchingString) &&
                    k.indexOf(theMatchingString) ==
                        Math.abs(k.length - theMatchingString.length) &&
                    isNaN(
                        k.charAt(
                            Math.abs(k.length - theMatchingString.length - 1)
                        )
                    ))
            );
        })
        .reduce(function(newData, k) {
            newData[
                parseFunctionKeys(
                    k.replace(new RegExp(theMatchingString, "g"), "")
                )
            ] = parseFunctionValues(object[k]);
            return newData;
        }, {});

    return z;
}

function getBiggestColumn(array, length) {
    var differentSizes = false;
    var newArray = new Array();
    for (var i = 0; i < array.length; i++) {
        if (array[i].length == length) {
            newArray.push(array[i]);
        } else if (array[i].length < length) {
        } else {
            differentSizes = true;
            i = array.length;
        }
    }

    if (differentSizes) {
        // order only strings of same size (since B > AB in sort())
        return getBiggestColumn(array, length + 1);
    } else {
        return newArray.sort().pop();
    }
}

function doNothing(param) {
    return param;
}

function lastRowForColumn(data, column) {
    var z = getObjectWithKeys(data, column, parseInt, parseInt);
    var valuesArray = Object.keys(z);
    return Math.max.apply(null, valuesArray);
}

function getLastColumn(sheet) {
    // When getting "A1:CK37" and returns "CK"
    return sheet["!ref"].split(":")[1].replace(/[0-9]/g, "");
}

// DEPRECATED
function lastColumnForRow(data, column) {
    var z = getObjectWithKeys(data, column, doNothing, parseInt);
    var valuesArray = Object.keys(z);

    return getBiggestColumn(valuesArray, 1);
}

function getPeriodNumber(period_type, sheet_no, dim1, dim2) {
    var period = getCellDataRC(sheet_no, dim1, dim2);
    if (period.length == 0) {
        console.log("WARN. Got empty period");
        return period;
    } else {
        if (period_type === "WEEKLY_PERIOD") {
            return "W" + (period < 10 ? "0" : "") + period;
        } else if (period_type === "MONTHLY") {
            return months[period.toLowerCase()];
        } else if (period_type === "YEARLY_PERIOD") {
            return period;
        }
    }
}
/**
 * returns dim+1 if number or next letter if string (AZ -> BA)
 * dim : either a string or a number
 */
function nextDim(dim, rounds) {
    if (rounds <= 0) {
        return dim;
    } else if (rounds == 1) {
        if (isNaN(dim)) {
            return nextLetter(dim);
        } else {
            return dim + 1;
        }
    } else {
        return nextDim(nextDim(dim, 1), rounds - 1);
    }
}

function distanceBetween(letter1, letter2) {
    var count = 0;

    while (
        letter1.toLowerCase().localeCompare(letter2.toLowerCase()) < 0 ||
        letter1.length < letter2.length
    ) {
        letter1 = nextLetter(letter1);
        count++;
    }
    return count;
}

/**
 * Return next letter. A->B, AB->AC, Z->AA
 * @param {string} key a string [a-zA-Z]+
 */

function nextLetter(key) {
    if (key === "Z" || key === "z") {
        return (
            String.fromCharCode(key.charCodeAt() - 25) +
            String.fromCharCode(key.charCodeAt() - 25)
        ); // AA or aa
    } else {
        var lastChar = key.slice(-1);
        var sub = key.slice(0, -1);
        if (lastChar === "Z" || lastChar === "z") {
            // If a string of length > 1 ends in Z/z,
            // increment the string (excluding the last Z/z) recursively,
            // and append A/a (depending on casing) to it
            return (
                nextLetter(sub) +
                String.fromCharCode(lastChar.charCodeAt() - 25)
            );
        } else {
            // (take till last char) append with (increment last char)
            return sub + String.fromCharCode(lastChar.charCodeAt() + 1);
        }
    }
    return key;
}

//function to get the row number of the last row in a sheet
function getLastRowNumber(sheetNum) {
    /*var addressOfTheLastData = resultArray[sheetNum-1][resultArray[sheetNum-1].length - 1].split("=")[0];
	var numberPotion = addressOfTheLastData.match(/\d/g);
	numberPotion = numberPotion.join("");*/

    if (sheetEndRows.length >= sheetNum) return sheetEndRows[sheetNum - 1];
    else return 2000;
}

function getColumnName(num) {
    for (var ret = "", a = 1, b = 26; (num -= a) >= 0; a = b, b *= 26) {
        ret = String.fromCharCode(parseInt((num % b) / a) + 65) + ret;
    }
    return ret;
}

chr = function(codePt) {
    if (codePt > 0xffff) {
        codePt -= 0x10000;
        return String.fromCharCode(
            0xd800 + (codePt >> 10),
            0xdc00 + (codePt & 0x3ff)
        );
    }
    return String.fromCharCode(codePt);
};

/**
 * Calls getCellData. Use it when you dont know which of the dims is the column and the row.
 * @param {*} sheetNum
 * @param {string/Number} dim1 One of the dimension (row or column)
 * @param {string/Number} dim2 One of the dimension (row or column)
 */
function getCellDataRC(sheetNum, dim1, dim2) {
    if (isNaN(dim1)) {
        return getCellData(sheetNum, dim1 + dim2);
    } else {
        return getCellData(sheetNum, dim2 + dim1);
    }
}

/* Returns the data in the cell address of the target sheet
	sheetNum : the sheet number of the woorkbook (starting at 1)
	address : the cell number in text. i.e. A12
*/
function getCellData(sheetNum, address) {
    var val = "";
    address = address.toUpperCase(); //making addresses with simple letters into capital

    try {
        var data = resultArray[sheetNum - 1][address];

        if (data != undefined) {
            if (typeof data === "string") {
                val = $.trim(data);
            } else {
                val = data;
            }
            // workaround, excel put these values automatically in UPPERCASE and DHIS2 does not accept as boolean
            if (val == "TRUE" || val == "FALSE") {
                val = val.toLowerCase();
            }
        }
    } catch (ex) {
        hasErrors = true;
        errorString += "</br>Something went wrong. Err:" + ex.message;
    }

    return val;
}

//Importing data
var eventHtmlString = "";

function countEventConflicts(importSummaries) {
    register_start();

    for (var i = 0; i < importSummaries.length; i++) {
        if (typeof importSummaries[i].conflicts !== "undefined") {
            for (var j = 0; j < importSummaries[i].conflicts.length; j++) {
                register_add_pair(
                    importSummaries[i].conflicts[j].object,
                    importSummaries[i].conflicts[j].value
                );
            }
        }

        if (importSummaries[i].status.localeCompare("ERROR") == 0) {
            register_add_pair(
                importSummaries[i].status,
                importSummaries[i].description
            );
        }
    }
    console.log(register_get());
}

function importEventData() {
    $("#loader").show();

    if (isEventDataAvaialble) {
        //eventDataValues.orgUnitIdScheme = orgUnitIdScheme;
        var eventDataJSON = JSON.stringify(eventDataValues);
        console.log(eventDataValues);

        //alert(orgUnitIdScheme);
        var url =
            "../../events?dataElementIdScheme=code&orgUnitIdScheme=" +
            orgUnitIdScheme;
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

                var imEventCount = numberOfEvents;

                countEventConflicts(res.response.importSummaries);

                isum.summary =
                    "<b>Imported Events:</b>" +
                    imEventCount +
                    ", <b>Imported Fields:</b>" +
                    res.response.imported +
                    ", <b>Not Imported Fields:</b>" +
                    res.response.ignored +
                    "<br> Total types of conflicts : " +
                    register_get_total_unique() +
                    "<br> Total conflicts : " +
                    register_get_total();

                importSummary.push(isum);
                importData();
            })
            .fail(function(request, textStatus, errorThrown) {
                try {
                    console.log("Event data import response");
                    console.log(request);
                    var response = request.responseJSON.response;
                    console.log(response);

                    var isum = {};
                    isum.fileNum = currentFileNum;
                    isum.importType = "Event Data";
                    isum.hasErrors = true;
                    isum.status = "Error";
                    isum.message = "";

                    countEventConflicts(response.importSummaries);

                    isum.summary = isum.summary =
                        "<b>Imported Events:</b>" +
                        numberOfEvents +
                        "<br> Total types of conflicts : " +
                        register_get_total_unique() +
                        "<br> Total conflicts : " +
                        register_get_total();

                    importSummary.push(isum);
                } catch (ex) {
                    console.log(ex);
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
            htmlStr += "<td> <img src='img/right.png' width='64' /> </td>";
        else htmlStr += "<td> <img src='img/wrong.png' width='64' /> </td>";

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
                "<td colspan='3' style='background:#FFC8B6;text-align:center' >" +
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

            // event details
            htmlMsgStr += getSummaryAsTableTR();
        }
        $("#imSumTable").append(htmlStr);
        $("#errSumTable").append(htmlMsgStr);
    }

    $("#loader").hide();
    $("#imModelAlert").modal("show");
}

function formatDate(date) {
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
