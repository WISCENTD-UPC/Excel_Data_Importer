// This script is meant to be executed with a window object (JS document)
// You can run it in the Chrome Development Console and retrieve the results in JSON

let rawMetadata = await (await fetch("/api/dataSets/Tu81BTLUuCT/metadata.json")).json();
let metadata = new Map();
for (const type in rawMetadata) {
    const elements = rawMetadata[type];
    if (Array.isArray(elements)) elements.map(element => metadata.set(element.id, element));
}

let getDataElements = (tabSelector, letters, dataRowStart, type = "entryfield") => Array.from(document.querySelector(tabSelector).querySelectorAll(`input.${type}`)).map((input, i) => {
    const id = input.getAttribute("id");
    const data = id.split("-");

    return {
        deuid: data[0],
        cocuid: data[1],
        cell_no: `${letters[i % letters.length]}${parseInt(i / letters.length) + dataRowStart}`,
        row: parseInt(i / letters.length) + dataRowStart,
        column: letters[i % letters.length],
        total: input.disabled,
        name: `${metadata.get(data[0]).name} ${metadata.get(data[1]).name}`
    };
});

let dataTab0 = getDataElements("#tab0", ["D", "E", "F", "G"], 8);

let dataTab1 = getDataElements("#tab1", ["H", "I", "J", "K", "L", "M", "N", "O"], 8);

let dataTab2 = getDataElements("#tab2", ["P", "Q", "R", "S", "T"], 8);

let dataElementsSheet1 = [...dataTab0, ...dataTab1, ...dataTab2].sort((e1, e2) => {
    const a = e1.cell_no;
    const b = e2.cell_no;

    if (a.substr(1) === b.substr(1)) {
        return a.substr(0, 1) - b.substr(0, 1)
    } else {
        return a.substr(1) - b.substr(1);
    }
});

let sheet1 = {
    sheet_type: "AGGREGATE_STATIC",
    sheet_no: 1,
    sheet_name: "Demographic sheet",
    orgUnitIdScheme: "UID",
    dataElementIdScheme: "UID",
    idScheme: "UID",
    oucode_cell: "V2",
    year_cell: "Q4",
    last_data_column: "ZZ",
    agg_des: dataElementsSheet1
};

let dataTab4 = getDataElements("#tab4 div#cde:nth-child(4)", ["E", "F", "G", "H", "I", "J", "K", "L", "M"], 13);

let dataTab4b = getDataElements("#tab4 div#cde:nth-child(2)", ["D"], 8);

let dataElementsSheet2 = [...dataTab4, ...dataTab4b];

let sheet2 = {
    sheet_type: "AGGREGATE_STATIC",
    sheet_no: 2,
    sheet_name: "Other sheet",
    orgUnitIdScheme: "UID",
    dataElementIdScheme: "UID",
    idScheme: "UID",
    oucode_cell: "N2",
    year_cell: "M4",
    last_data_column: "ZZ",
    agg_des: dataElementsSheet2
};

let dataTab3 = getDataElements("#tab3", ["D", "E"], 8);

let dataElementsSheet3 = [...dataTab3];

let sheet3 = {
    sheet_type: "AGGREGATE_STATIC",
    sheet_no: 3,
    sheet_name: "Foreign Trained",
    orgUnitIdScheme: "UID",
    dataElementIdScheme: "UID",
    idScheme: "UID",
    oucode_cell: "Q2",
    year_cell: "O4",
    last_data_column: "ZZ",
    agg_des: dataElementsSheet3
};

let dataTab0b = getDataElements("#tab0", ["P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "AA"], 8, "entrytrueonly");

let dataElementsSheet4 = [...dataTab0b];

let sheet4 = {
    sheet_type: "AGGREGATE_STATIC_YES_ONLY",
    sheet_no: 4,
    sheet_name: "Source type",
    orgUnitIdScheme: "UID",
    dataElementIdScheme: "UID",
    idScheme: "UID",
    oucode_cell: "P2",
    year_cell: "M4",
    last_data_column: "ZZ",
    agg_des: dataElementsSheet4
};

let module1 = {
    name: "Module 1 Template",
    file: "Module_1_Template.xlsx",
    sheets: [sheet1, sheet2, sheet3, sheet4],
};

JSON.stringify(module1);

/**
 * Script to link the Excel checkboxes with data entry fields in VBA
    Sub LinkChecks()
        i = 0
        Row = 8
        Dim letters As Variant
        letters = Array("P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "AA")
        For Each cb In ActiveSheet.CheckBoxes
        cb.LinkedCell = Cells(Row, letters(i Mod 12)).Address
        i = i + 1
        If (i Mod 12) = 0 Then Row = Row + 1
        Next cb
    End Sub
 */

/**
 * Script to remove password protection from Excel spreadsheet files in VBA
    Sub PasswordRecovery()
        Dim i As Integer, j As Integer, k As Integer
        Dim l As Integer, m As Integer, n As Integer
        Dim i1 As Integer, i2 As Integer, i3 As Integer
        Dim i4 As Integer, i5 As Integer, i6 As Integer
        On Error Resume Next
        For i = 65 To 66: For j = 65 To 66: For k = 65 To 66
        For l = 65 To 66: For m = 65 To 66: For i1 = 65 To 66
        For i2 = 65 To 66: For i3 = 65 To 66: For i4 = 65 To 66
        For i5 = 65 To 66: For i6 = 65 To 66: For n = 32 To 126
        ActiveSheet.Unprotect Chr(i) & Chr(j) & Chr(k) & _
        Chr(l) & Chr(m) & Chr(i1) & Chr(i2) & Chr(i3) & _
        Chr(i4) & Chr(i5) & Chr(i6) & Chr(n)
        If ActiveSheet.ProtectContents = False Then
        MsgBox "One usable password is " & Chr(i) & Chr(j) & _
        Chr(k) & Chr(l) & Chr(m) & Chr(i1) & Chr(i2) & _
        Chr(i3) & Chr(i4) & Chr(i5) & Chr(i6) & Chr(n)
        Exit Sub
        End If
        Next: Next: Next: Next: Next: Next
        Next: Next: Next: Next: Next: Next
    End Sub
 */