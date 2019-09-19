// This script is meant to be executed with a window object (JS document)
// You can run it in the Chrome Development Console and retrieve the results in JSON

let rawMetadata = await(await fetch("/api/dataSets/HtZb6Cg7TXo/metadata.json")).json();
let metadata = new Map();
for (const type in rawMetadata) {
    const elements = rawMetadata[type];
    if (Array.isArray(elements)) elements.map(element => metadata.set(element.id, element));
}

let getDataElements = (tabSelector, letters, dataRowStart, type = "entryfield") => {
    return Array.from(document.querySelector(tabSelector).querySelectorAll(`input.${type}`)).map((input, i) => {
        const id = input.getAttribute("id");
        const data = id.split("-");

        return {
            deuid: data[0],
            cocuid: data[1],
            cell_no: `${letters[i % letters.length]}${parseInt(i / letters.length) + dataRowStart}`,
            total: input.disabled,
            name: `${metadata.get(data[0]).name} ${metadata.get(data[1]).name}`
        };
    });
};

let dataTab0Numeric = getDataElements("#tab0", ["D", "E", "F", "G"], 9);

let dataTab0Checks = getDataElements("#tab0", [ "Q", "R", "S"], 18, "entrytrueonly");

let dataElementsSheet1 = [...dataTab0Numeric, ...dataTab0Checks]

let sheet1 = {
    sheet_type: "AGGREGATE_STATIC",
    sheet_no: 1,
    sheet_name: "Entry into Labour Market",
    orgUnitIdScheme: "UID",
    dataElementIdScheme: "UID",
    idScheme: "UID",
    oucode_cell: "V2",
    year_cell: "I4",
    last_data_column: "ZZ",
    agg_des: dataElementsSheet1
};


let dataElementsSheet2 = getDataElements("#tab1", ["D", "E", "F", "G"], 9);

let sheet2 = {
    sheet_type: "AGGREGATE_STATIC",
    sheet_no: 2,
    sheet_name: "Cost per program",
    orgUnitIdScheme: "UID",
    dataElementIdScheme: "UID",
    idScheme: "UID",
    oucode_cell: "N2",
    year_cell: "I4",
    last_data_column: "ZZ",
    agg_des: dataElementsSheet2
};


let dataElementsSheet3 = getDataElements("#tab2", ["D", "E", "F", "G", "H"], 9);

let sheet3 = {
    sheet_type: "AGGREGATE_STATIC",
    sheet_no: 3,
    sheet_name: "Specialist Costs",
    orgUnitIdScheme: "UID",
    dataElementIdScheme: "UID",
    idScheme: "UID",
    oucode_cell: "P2",
    year_cell: "I4",
    last_data_column: "ZZ",
    agg_des: dataElementsSheet3
};

let dataElementsSheet4 = getDataElements("#tab3", ["D", "E", "F", "G"], 11);

let sheet4 = {
    sheet_type: "AGGREGATE_STATIC",
    sheet_no: 4,
    sheet_name: "Lifelong Learning",
    orgUnitIdScheme: "UID",
    dataElementIdScheme: "UID",
    idScheme: "UID",
    oucode_cell: "N2",
    year_cell: "I4",
    last_data_column: "ZZ",
    agg_des: dataElementsSheet4
};


let module4 = {
    name: "Module 4 Template",
    file: "Module_4_Template.xlsx",
    sheets: [sheet1,sheet2,sheet3,sheet4],
};

JSON.stringify(module4);
