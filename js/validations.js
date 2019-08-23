/**

**/

function printError(msg) {
    $("#notificationMsg").html(msg);
    $("#notificationPanel").removeClass("alert-info");
    $("#notificationPanel").removeClass("alert-danger");
    $("#notificationPanel").addClass("alert-danger");
    $("#notificationPanel").slideDown();
}

function printSuccess(msg) {
    $("#notificationMsg").html(msg);
    $("#notificationPanel").removeClass("alert-info");
    $("#notificationPanel").removeClass("alert-danger");
    $("#notificationPanel").addClass("alert-info");
    $("#notificationPanel").slideDown();
}

//validating month and year
function validateMonth(monthString) {
    var result = {};
    result.month = 0;
    result.isErr = false;
    result.msg = "";

    try {
        result.month = parseInt(monthString);
    } catch (ex) {
        result.isErr = true;
        result.msg = "Invalid Month String";
        return result;
    }

    if (result.month < 1 || result.month > 12) {
        result.isErr = true;
        result.msg = "Invalid Month String";
    }

    result.month = result.month > 9 ? result.month : "0" + result.month;
    return result;
}

function validateYear(yearString) {
    var result = {};
    result.year = 0;
    result.isErr = false;
    result.msg = "";

    try {
        result.year = parseInt(yearString);
    } catch (ex) {
        result.isErr = true;
        result.msg = "Invalid Year String";
        return result;
    }

    if (result.year < 1900 || result.year > 2100) {
        result.isErr = true;
        result.msg = "Invalid Year String";
    }

    return result;
}

//validating the json
function validateJSON(templates) {
    var result = {};
    result.isValidated = true;
    result.msg = "";

    for (var t = 0; t < templates.length; t++) {
        currentTemplate = templates[t];

        if (!currentTemplate.hasOwnProperty("name")) {
            result.isValidated = false;
            result.msg +=
                "</br>" +
                "Name (name) is not provided for template : " +
                (t + 1);
        }

        if (!currentTemplate.hasOwnProperty("file")) {
            result.isValidated = false;
            result.msg +=
                "</br>" +
                "File path (file) is not provided for template : " +
                (t + 1);
        }

        if (!currentTemplate.hasOwnProperty("sheet_mode")) {
            result.isValidated = false;
            result.msg +=
                "</br>" +
                "Sheet_mode (sheet_mode) is not provided for template : " +
                (t + 1);
        }

        for (var x = 0; x < currentTemplate.sheets.length; x++) {
            var sheet = currentTemplate.sheets[x];

            //checking if all required properties exist
            if (!sheet.hasOwnProperty("sheet_no")) {
                result.isValidated = false;
                result.msg +=
                    "</br>" +
                    "'sheet_no' is not provided for sheet object-" +
                    (x + 1) +
                    " of template : " +
                    (t + 1);
            }

            if (!sheet.hasOwnProperty("sheet_type")) {
                result.isValidated = false;
                result.msg +=
                    "</br>" +
                    "'sheet_type' is not provided for sheet object-" +
                    (x + 1) +
                    " of template : " +
                    (t + 1);
            } else {
                if (
                    sheet.sheet_type == "AGGREGATE_EVENT" &&
                    !sheet.hasOwnProperty("event_des")
                ) {
                    result.isValidated = false;
                    result.msg +=
                        "</br>" +
                        "'event_des' is not provided for sheet object-" +
                        (x + 1) +
                        " of template : " +
                        (t + 1);
                } else if (
                    (sheet.sheet_type == "AGGREGATE_STATIC" ||
                        sheet.sheet_type == "AGGREGATE_STATIC_YEARLY" ||
                        sheet.sheet_type == "AGGREGATE_STATIC_BOOLEAN" ||
                        sheet.sheet_type == "AGGREGATE_STATIC_YES_ONLY" ||
                        sheet.sheet_type == "MULTIPLE_DE_OU_PE") &&
                    !sheet.hasOwnProperty("agg_des")
                ) {
                    result.isValidated = false;
                    result.msg +=
                        "</br>" +
                        "'agg_des' is not provided for sheet object-" +
                        (x + 1) +
                        " of template : " +
                        (t + 1);
                } else if (
                    !(
                        sheet.sheet_type == "EVENTS" ||
                        sheet.sheet_type == "MULTIPLE_DE_OU_PE" ||
                        sheet.sheet_type == "MULTIPLE_FLEXIBLE" ||
                        sheet.sheet_type == "UNLIMITED_DE_OU_PE" ||
                        sheet.sheet_type == "UNLIMITED_FLEXIBLE" ||
                        sheet.sheet_type == "AGGREGATE_EVENT" ||
                        sheet.sheet_type == "AGGREGATE_STATIC" ||
                        sheet.sheet_type == "AGGREGATE_STATIC_YEARLY" ||
                        sheet.sheet_type == "AGGREGATE_STATIC_BOOLEAN" ||
                        sheet.sheet_type == "AGGREGATE_STATIC_YES_ONLY"
                    )
                ) {
                    result.isValidated = false;
                    result.msg +=
                        "</br>" +
                        "'sheet_type' can be either 'AGGREGATE_EVENT' or 'AGGREGATE_STATIC' for sheet object-" +
                        (x + 1) +
                        " of template : " +
                        (t + 1);
                }
            }

            if (
                sheet.sheet_type == "AGGREGATE_EVENT" ||
                sheet.sheet_type == "AGGREGATE_STATIC"
            ) {
                if (!sheet.hasOwnProperty("oucode_cell")) {
                    result.isValidated = false;
                    result.msg +=
                        "</br>" +
                        "'oucode_cell' is not provided for sheet object-" +
                        (x + 1) +
                        " of template : " +
                        (t + 1);
                }

                if (!sheet.hasOwnProperty("month_cell")) {
                    result.isValidated = false;
                    result.msg +=
                        "</br>" +
                        "'month_cell' is not provided for sheet object-" +
                        (x + 1) +
                        " of template : " +
                        (t + 1);
                }

                if (!sheet.hasOwnProperty("year_cell")) {
                    result.isValidated = false;
                    result.msg +=
                        "</br>" +
                        "'year_cell' is not provided for sheet object-" +
                        (x + 1) +
                        " of template : " +
                        (t + 1);
                }
            } else if (
                sheet.sheet_type == "AGGREGATE_STATIC_YEARLY" ||
                sheet.sheet_type == "AGGREGATE_STATIC_BOOLEAN" ||
                sheet.sheet_type == "AGGREGATE_STATIC_YES_ONLY"
            ) {
                if (!sheet.hasOwnProperty("oucode_cell")) {
                    result.isValidated = false;
                    result.msg +=
                        "</br>" +
                        "'oucode_cell' is not provided for sheet object-" +
                        (x + 1) +
                        " of template : " +
                        (t + 1);
                }

                if (!sheet.hasOwnProperty("year_cell")) {
                    result.isValidated = false;
                    result.msg +=
                        "</br>" +
                        "'year_cell' is not provided for sheet object-" +
                        (x + 1) +
                        " of template : " +
                        (t + 1);
                }
            } else if (sheet.sheet_type == "MULTIPLE_DE_OU_PE") {
                if (!sheet.hasOwnProperty("oucode_col")) {
                    result.isValidated = false;
                    result.msg +=
                        "</br>" +
                        "'oucode_cell' is not provided for sheet object-" +
                        (x + 1) +
                        " of template : " +
                        (t + 1);
                }

                if (!sheet.hasOwnProperty("month_col")) {
                    result.isValidated = false;
                    result.msg +=
                        "</br>" +
                        "'month_cell' is not provided for sheet object-" +
                        (x + 1) +
                        " of template : " +
                        (t + 1);
                }

                if (!sheet.hasOwnProperty("year_col")) {
                    result.isValidated = false;
                    result.msg +=
                        "</br>" +
                        "'year_cell' is not provided for sheet object-" +
                        (x + 1) +
                        " of template : " +
                        (t + 1);
                }
            } else if (sheet.sheet_type == "MULTIPLE_FLEXIBLE") {
                if (!sheet.hasOwnProperty("period_type")) {
                    result.isValidated = false;
                    result.msg +=
                        "</br>" +
                        "'period_type' is not provided for sheet object-" +
                        (x + 1) +
                        " of template : " +
                        (t + 1);
                }

                if (!sheet.hasOwnProperty("year")) {
                    result.isValidated = false;
                    result.msg +=
                        "</br>" +
                        "'year' is not provided for sheet object-" +
                        (x + 1) +
                        " of template : " +
                        (t + 1);
                }

                if (!sheet.hasOwnProperty("ou")) {
                    result.isValidated = false;
                    result.msg +=
                        "</br>" +
                        "'ou' is not provided for sheet object-" +
                        (x + 1) +
                        " of template : " +
                        (t + 1);
                }

                if (!sheet.hasOwnProperty("period_dim_1_first")) {
                    result.isValidated = false;
                    result.msg +=
                        "</br>" +
                        "'period_dim_1_first' is not provided for sheet object-" +
                        (x + 1) +
                        " of template : " +
                        (t + 1);
                }
                if (!sheet.hasOwnProperty("period_dim_1_length")) {
                    result.isValidated = false;
                    result.msg +=
                        "</br>" +
                        "'period_dim_1_length' is not provided for sheet object-" +
                        (x + 1) +
                        " of template : " +
                        (t + 1);
                }
                if (!sheet.hasOwnProperty("period_dim_2")) {
                    result.isValidated = false;
                    result.msg +=
                        "</br>" +
                        "'period_dim_2' is not provided for sheet object-" +
                        (x + 1) +
                        " of template : " +
                        (t + 1);
                }
                if (!sheet.hasOwnProperty("data_des")) {
                    result.isValidated = false;
                    result.msg +=
                        "</br>" +
                        "'data_des' is not provided for sheet object-" +
                        (x + 1) +
                        " of template : " +
                        (t + 1);
                }
            }
        }
    }

    return result;
}

//event data type validation
function validateEventData(data, type, isMandatory) {
    var result = {};
    result.hasError = false;
    result.msg = "";

    if (type == "NUMBER") return validateNumber(data, isMandatory);
    else if (type == "DATE") return validateDate(data, isMandatory);
    else if (type == "TEXT") return validateText(data, isMandatory);
    else return result;
}

function validateNumber(data, isMandatory) {
    var result = {};
    result.hasError = false;
    result.msg = "";

    if (!isFinite(data)) {
        result.hasError = true;
        result.msg = "Invalid number";
    }

    if (data == "" && isMandatory) {
        result.hasError = true;
        result.msg = "Number value cannot be null";
    }

    return result;
}

function validateDate(data, isMandatory) {
    var result = {};
    result.hasError = false;
    result.msg = "";

    var components = [];

    if (data != null) components = data.split("-");

    if (data == "" && isMandatory) {
        result.hasError = true;
        result.msg = "Date value cannot be null";
    }

    if (components.length != 3) {
        result.hasError = true;
        result.msg = "Number value cannot be null";
    } else if (
        !(
            parseInt(components[0]) > 1900 &&
            (parseInt(components[1]) > 0 && parseInt(components[1]) < 13) &&
            (parseInt(components[2]) > 0 && parseInt(components[2]) < 31)
        )
    ) {
        result.hasError = true;
        result.msg = "Invalid date format; follow dd-mm-yyyy";
    }

    return result;
}

function validateText(data, isMandatory) {
    var result = {};
    result.hasError = false;
    result.msg = "";

    if (data == "" && isMandatory) {
        result.hasError = true;
        result.msg = "Date value cannot be null";
    }

    return result;
}
