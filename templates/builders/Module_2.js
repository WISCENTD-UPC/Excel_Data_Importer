// This script is meant to be executed with a window object (JS document)
// You can run it in the Chrome Development Console and retrieve the results in JSON

const rawMetadata = await (await fetch(
  "/api/dataSets/m5MiTPdlK17/metadata.json"
)).json();

const metadata = new Map();

for (const type in rawMetadata) {
  const elements = rawMetadata[type];
  if (Array.isArray(elements))
    elements.map(element => metadata.set(element.id, element));
}

function getDataElements(
  tabSelector,
  letters,
  dataRowStart,
  type = "input.entryfield"
) {
  return Array.from(
    document.querySelector(tabSelector).querySelectorAll(`${type}`)
  ).map((input, i) => {
    const id = input.getAttribute("id");
    const data = id.split("-");
    return {
      deuid: data[0],
      cocuid: data[1],
      cell_no: `${letters[i % letters.length]}${parseInt(i / letters.length) +
        dataRowStart}`,
      total: input.disabled,
      name: `${metadata.get(data[0]).name} ${metadata.get(data[1]).name}`
    };
  });
}

const dataElementsSheet1 = getDataElements(
  "#tab0",
  ["D", "E", "F", "G", "H", "I", "J", "K", "L"],
  8
);

const dataElementsTab2 = getDataElements(
  "#tab1",
  ["D", "E", "F", "G", "H", "I", "J", "K"],
  12
);

const yesPartialNoTab2 = getDataElements(
  "#tab2",
  ["R", "S", "T"],
  6,
  "input.entrytrueonly"
);

const commentsTab2 = getDataElements("#tab2", ["F"], 8, "textarea.entryfield");

const dataElementsTab3 = getDataElements("#tab2", ["J", "K", "L"], 12);

const dataElementsSheet2 = [
  ...dataElementsTab2,
  ...yesPartialNoTab2,
  ...commentsTab2,
  ...dataElementsTab3
];

const dataElementsSheet3 = getDataElements(
  "#tab0",
  ["P", "Q", "R", "S"],
  8,
  "input.entrytrueonly"
);

const sheet1 = {
  sheet_type: "AGGREGATE_STATIC",
  sheet_no: 1,
  sheet_name: "Input",
  orgUnitIdScheme: "UID",
  dataElementIdScheme: "UID",
  idScheme: "UID",
  oucode_cell: "V2",
  year_cell: "L4",
  last_data_column: "ZZ",
  agg_des: dataElementsSheet1
};

const sheet2 = {
  sheet_type: "AGGREGATE_STATIC",
  sheet_no: 2,
  sheet_name: "Input",
  orgUnitIdScheme: "UID",
  dataElementIdScheme: "UID",
  idScheme: "UID",
  oucode_cell: "P2",
  year_cell: "L4",
  last_data_column: "ZZ",
  agg_des: dataElementsSheet2
};

const sheet3 = {
  sheet_type: "AGGREGATE_STATIC",
  sheet_no: 3,
  sheet_name: "Sourcetype",
  orgUnitIdScheme: "UID",
  dataElementIdScheme: "UID",
  idScheme: "UID",
  oucode_cell: "P2",
  year_cell: "I4",
  last_data_column: "ZZ",
  agg_des: dataElementsSheet3
};

const module2 = {
  name: "Module 2 Template",
  file: "NHWA_Module_2.xlsx",
  sheets: [sheet1, sheet2, sheet3]
};

JSON.stringify(module2);
