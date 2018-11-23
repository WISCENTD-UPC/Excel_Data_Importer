var data_ntd =
{
    templates: [
        {
            name: "Select an option",
            file:"empty.xlsx",
            sheet_mode : DIFFERENT_MODEL_SHEETS,
            sheets: []
        },
        {
            name: "Unlimited Flexible Monthly - Different Model",
            file:"unlimited_flexible_monthly_templates.zip",
            sheet_mode : DIFFERENT_MODEL_SHEETS,
            sheets: [
                {
                    sheet_type: UNLIMITED_FLEXIBLE,
                    period_type : MONTHLY_PERIOD,
                    year_column : "D",
                    year_row : 1,
                    sheet_no: 1,
                    dataElementIdScheme: ORG_CODE_SCHEME,
                    orgUnit_dim : "A",
                    data_starting_row : 4,
                    data_starting_row_advanced : 7,
                    period_dim_1 : "G",
                    period_dim_2 : 3,
                    de_simple_col : "A",
                    de_simple_row : 1,
                    de_advanced_row : 5,
                    cocuid_simple_col : "C",
                    cocuid_simple_row : 1,
                    cocuid_advanced_row : 4
 
                }
            ]
        },
        {
            name: "Unlimited Flexible Monthly - Same Model ",
            file:"unlimited_flexible_monthly_templates.zip",
            sheet_mode : SAME_MODEL_SHEETS,
            sheets: [
                {
                    sheet_type: UNLIMITED_FLEXIBLE,
                    period_type : MONTHLY_PERIOD,
                    year_column : "D",
                    year_row : 1,
                    sheet_no: 1,
                    dataElementIdScheme: ORG_CODE_SCHEME,
                    orgUnit_dim : "A",
                    data_starting_row : 4,
                    data_starting_row_advanced : 7,
                    period_dim_1 : "G",
                    period_dim_2 : 3,
                    de_simple_col : "A",
                    de_simple_row : 1,
                    de_advanced_row : 5,
                    cocuid_simple_col : "C",
                    cocuid_simple_row : 1,
                    cocuid_advanced_row : 4
 
                }
            ]
        },
        {
            name: "Unlimited Flexible Yearly - Same Model ",
            file:"unlimited_flexible_yearly_template_simple.zip",
            sheet_mode : SAME_MODEL_SHEETS,
            sheets: [
                {
                    sheet_type: UNLIMITED_FLEXIBLE,
                    period_type : YEARLY_PERIOD,
                    year_column : "D",
                    year_row : 1,
                    sheet_no: 1,
                    dataElementIdScheme: ORG_UID_SCHEME,
                    orgUnit_dim : "A",
                    data_starting_row : 4,
                    data_starting_row_advanced : 7,
                    period_dim_1 : "G",
                    period_dim_2 : 3,
                    de_simple_col : "A",
                    de_simple_row : 1,
                    de_advanced_row : 5,
                    cocuid_simple_col : "C",
                    cocuid_simple_row : 1,
                    cocuid_advanced_row : 4
 
                }
            ]
        },
    ]
}
