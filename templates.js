var data_ntd =
{
    templates: [

        {
            name: "VL register NPL template",
            file:"VL_register_NPL_20190329.xlsx",
            sheet_mode : DIFFERENT_MODEL_SHEETS,
            sheets: [
                {
                    sheet_type: EVENTS,
                    sheet_no: 1,
                    data_starting_row : "5",
		            data_starting_col : "4",
                    key_column : "B",
                    ou_col : "B",
                    program : "HEZrq4XNFA0",
                    last_data_column: "BE",
                    event_date_col: "C" //should be a letter
                }
            ]
        }
    ]
}
