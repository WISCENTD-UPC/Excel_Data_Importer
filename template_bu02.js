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
            name: "BU02 data template",
            file:"BU02_template.xlsx",
            sheet_mode : DIFFERENT_MODEL_SHEETS,
            sheets: [
                {
                    sheet_type: EVENTS,
                    sheet_no: 1,
                    data_starting_row : "5",
                    key_column : "B",
                    ou_col : "B",
                    program : "lAu94BiaY5s",
                    event_date_col: "C", //should be a letter

                    event_des: [
                        {deuid: "GEN_FirstName_T", column: "D"},
                        {deuid: "GEN_Registry Number_T", column: "E"},
                        {deuid: "GEN_Age_T", column: "F"},
                        {deuid: "GEN_Sexe_T", column: "G"},
                        {deuid: "GEN_Address_T", column: "H"},
                        {deuid: "GEN_Locality_T", column: "I"},
                        {deuid: "Skin_Cl_Classif_T", column: "J"},
                        {deuid: "Skin_Cl_Nodule_T", column: "K"},
                        {deuid: "Skin_Cl_Oedema_T", column: "L"},
                        {deuid: "Skin_Cl_Osteomyelitis_T", column: "M"},
                        {deuid: "Skin_Cl_Papule_T", column: "N"},
                        {deuid: "Skin_Cl_Ulcer_T", column: "O"},
                        {deuid: "Skin_Cl_Plaque_T", column: "P"},
                        {deuid: "Skin_Cl_Eye_T", column: "Q"},
                        {deuid: "Skin_Cl_Breast_T", column: "R"},
                        {deuid: "Skin_Cl_Genitalia_T", column: "S"},
                        {deuid: "Skin_Cl_Abdomen_T", column: "T"},
                        {deuid: "Skin_Cl_Back_T", column: "U"},
                        {deuid: "Skin_Cl_Buttocks perineum_T", column: "V"},
                        {deuid: "Skin_Cl_Head Neck_T", column: "W"},
                        {deuid: "Skin_Cl_Lower Limb_T", column: "X"},
                        {deuid: "Skin_Cl_Thorax_T", column: "Y"},
                        {deuid: "Skin_Cl_Upper limb_T", column: "Z"},
                        {deuid: "BU_Cl_category_T", column: "AA"},
                        {deuid: "BU_Cl_jointLimitation_T", column: "AB"},
                        {deuid: "BU_Spe_T", column: "AC"},
                        {deuid: "BU_Tx_AB_T", column: "AD"}
                    ]
                }
            ]
        },
        {
            name: "VL register template",
            file:"VL_register_template.xlsx",
            sheet_mode : DIFFERENT_MODEL_SHEETS,
            sheets: [
                {
                    sheet_type: EVENTS,
                    sheet_no: 1,
                    data_starting_row : "5",
		            data_starting_col : "4",
                    key_column : "B",
                    ou_col : "B",
                    program : "TFTLPseQEgi",
                    event_date_col: "C", //should be a letter
                    event_des_length : 33,

                    event_des: [
                        {deuid: "GEN_ID Number_T", column: "D"},
                        {deuid: "GEN_FirstName_T", column: "E"},
                        {deuid: "GEN_Family name_T", column: "F"},
                        {deuid: "GEN_CountryOfInfection_T", column: "G"},
                        {deuid: "GEN_imported_T", column: "H"},
                        {deuid: "GEN_PlaceOfInfection_T", column: "I"},
                        {deuid: "GEN_Sexe_T", column: "J"},
                        {deuid: "GEN_DayOfBirth_T", column: "K"},
                        {deuid: "GEN_YearOfBirth_T", column: "L"},
                        {deuid: "GEN_Age_T", column: "M"},
                        {deuid: "VL_Type_T", column: "N"},
                        {deuid: "GEN_HIV_status_T", column: "O"},
                        {deuid: "GEN_Cl_patientDelay_day_T", column: "P"},
                        {deuid: "VL_Lab_RDT_T", column: "Q"},
                        {deuid: "VL_Lab_DAT_T", column: "R"},
                        {deuid: "VL_Lab_Micro_result_T", column: "S"},
                        {deuid: "VL_Conf_type_T", column: "T"},
                        {deuid: "VL_Tx_start_T", column: "U"},
                        {deuid: "VL_Tx_regimen_T", column: "V"},
                        {deuid: "VL_Tx_adverseEvent_T", column: "W"},
                        {deuid: "VL_TREAT_completion_T", column: "X"},
                        {deuid: "VL_TxO_Date_T", column: "Y"},
                        {deuid: "VL_TxO_T", column: "Z"},
                        {deuid: "VL_FU_Date_T", column: "AA"},
                        {deuid: "VL_FU_outcome_T", column: "AB"}
                    ]
                }
            ]
        },
        {
            name: "VL register template + From Village",
            file:"VL_register_template.xlsx",
            sheet_mode : DIFFERENT_MODEL_SHEETS,
            sheets: [
                {
                    sheet_type: EVENTS,
                    sheet_no: 1,
                    data_starting_row : "5",
		            data_starting_col : "4",
                    key_column : "B",
                    ou_col : "B",
                    program : "TFTLPseQEgi",
                    event_date_col: "C", //should be a letter
                    event_des_length : 33,

                    event_des: [
                        {deuid: "GEN_ID Number_T", column: "D"},
                        {deuid: "GEN_FirstName_T", column: "E"},
                        {deuid: "GEN_Family name_T", column: "F"},
                        {deuid: "GEN_CountryOfInfection_T", column: "G"},
                        {deuid: "GEN_imported_T", column: "H"},
                        {deuid: "GEN_PlaceOfInfection_T", column: "I"},
                        {deuid: "GEN_Sexe_T", column: "J"},
                        {deuid: "GEN_DayOfBirth_T", column: "K"},
                        {deuid: "GEN_YearOfBirth_T", column: "L"},
                        {deuid: "GEN_Age_T", column: "M"},
                        {deuid: "VL_Type_T", column: "N"},
                        {deuid: "GEN_HIV_status_T", column: "O"},
                        {deuid: "GEN_Cl_patientDelay_day_T", column: "P"},
                        {deuid: "VL_Lab_RDT_T", column: "Q"},
                        {deuid: "VL_Lab_DAT_T", column: "R"},
                        {deuid: "VL_Lab_Micro_result_T", column: "S"},
                        {deuid: "VL_Conf_type_T", column: "T"},
                        {deuid: "VL_Tx_start_T", column: "U"},
                        {deuid: "VL_Tx_regimen_T", column: "V"},
                        {deuid: "VL_Tx_adverseEvent_T", column: "W"},
                        {deuid: "VL_TREAT_completion_T", column: "X"},
                        {deuid: "VL_TxO_Date_T", column: "Y"},
                        {deuid: "VL_TxO_T", column: "Z"},
                        {deuid: "VL_FU_Date_T", column: "AA"},
                        {deuid: "VL_FU_outcome_T", column: "AB"}
                    ]
                },
                {
                    sheet_type: EVENTS,
                    sheet_no: 2,
                    data_starting_row : "5",
		            data_starting_col : "4",
                    key_column : "F",
                    ou_col : "F",
                    program : "dBAcTWcDpbO",
                    event_date_col: "C", //should be a letter
                    event_des_length : 33,

                    event_des: [
                        {deuid: "GEN_ID Number_T", column: "D"},
                        {deuid: "GEN_FirstName_T", column: "E"},
                        {deuid: "GEN_Family name_T", column: "B"},
                        {deuid: "GEN_CountryOfInfection_T", column: "G"},
                        {deuid: "GEN_imported_T", column: "H"},
                        {deuid: "GEN_PlaceOfInfection_T", column: "I"},
                        {deuid: "GEN_Sexe_T", column: "J"},
                        {deuid: "GEN_DayOfBirth_T", column: "K"},
                        {deuid: "GEN_YearOfBirth_T", column: "L"},
                        {deuid: "GEN_Age_T", column: "M"},
                        {deuid: "VL_Type_T", column: "N"},
                        {deuid: "GEN_HIV_status_T", column: "O"},
                        {deuid: "GEN_Cl_patientDelay_day_T", column: "P"},
                        {deuid: "VL_Lab_RDT_T", column: "Q"},
                        {deuid: "VL_Lab_DAT_T", column: "R"},
                        {deuid: "VL_Lab_Micro_result_T", column: "S"},
                        {deuid: "VL_Conf_type_T", column: "T"},
                        {deuid: "VL_Tx_start_T", column: "U"},
                        {deuid: "VL_Tx_regimen_T", column: "V"},
                        {deuid: "VL_Tx_adverseEvent_T", column: "W"},
                        {deuid: "VL_TREAT_completion_T", column: "X"},
                        {deuid: "VL_TxO_Date_T", column: "Y"},
                        {deuid: "VL_TxO_T", column: "Z"},
                        {deuid: "VL_FU_Date_T", column: "AA"},
                        {deuid: "VL_FU_outcome_T", column: "AB"}
                    ]
                }
            ]
        },
	{
            name: "Kenya VL case management form",
            file:"VL_case_form_template.xlsx",
            sheet_mode : DIFFERENT_MODEL_SHEETS,
            sheets: [
                {
                    sheet_type: EVENTS,
                    sheet_no: 1,
                    data_starting_row : "6",
		            data_starting_col : "7",
		            data_ending_row : "99",
                    key_column : "E",       // Health faciltiy
                    ou_col : "E",
                    program : "uYKG1KOUIy1",
                    event_date_col: "F", //should be a letter
                    event_des_length : 93,

                    event_des: []
                }
            ]
        },
	{
            name: "Kenya VL laboratory log",
            file:"VL_lab_log.xlsx",
            sheet_mode : DIFFERENT_MODEL_SHEETS,
            sheets: [
                {
                    sheet_type: EVENTS,
                    sheet_no: 1,
                    data_starting_row : "6",
		            data_starting_col : "8",
		            data_ending_row : "",
                    key_column : "F",       // Health faciltiy code
                    ou_col : "F",
                    program : "h1KVXwrpKKf",
                    event_date_col: "G",    //should be a letter
                    event_des_length : 10,

                    event_des: []
                }
            ]
        },
        {
            name: "HAT sentinel sites",
            file:"HAT_template.xlsx",
            sheet_mode : DIFFERENT_MODEL_SHEETS,
            sheets: [
                {
                    sheet_type: EVENTS,
                    sheet_no: 1,
                    data_starting_row : "5",
                    key_column : "B",
                    ou_col : "B",
                    program : "QFe138xdQcq",
                    event_date_col: "C", //should be a letter

                    event_des: [
                        {deuid: "HAT_ID_T", column: "D"},
                        {deuid: "GEN_Sexe_T", column: "E"},
                        {deuid: "GEN_Age_T", column: "F"},
                        {deuid: "GEN_Address_T", column: "G"},
                        {deuid: "GEN_CountryOfResidence_T", column: "H"},
                        {deuid: "HAT_test_date_T", column: "I"},
                        {deuid: "HAT_serological_test_type_T", column: "J"},
                        {deuid: "HAT_TDR_type_T", column: "K"},
                        {deuid: "HAT_CATT_dilution_T", column: "L"},
                        {deuid: "HAT_Serological_test_result", column: "M"},
                        {deuid: "HAT_Trypanolyse_T", column: "N"},
                        {deuid: "HAT_trypanolysis_date_performed_T", column: "O"},
                        {deuid: "HAT_Trypanolyse_result_T", column: "P"}
                    ]
                }
            ]
        },
        {
            name: "Rabies template",
            file: "rabies_template.xlsx",
            sheet_mode : DIFFERENT_MODEL_SHEETS,
            sheets: [
                {
                    sheet_type: MULTIPLE_DE_OU_PE,
                    sheet_no: 1,
                    orgUnitIdScheme: ORG_CODE_SCHEME,
                    dataElementIdScheme: ORG_UID_SCHEME,
                    idScheme: ORG_UID_SCHEME,
                    oucode_col: "B",
                    month_col: "A",
                    year_col: "A",
                    data_starting_row: 11,
                    data_ending_row: 13,
                    last_data_column: "M",
                    key_column: "A",
                    attr_oc: "QIFdMRrb22m",

                    agg_des: [
                        //HUMAN CASES, AGE, DIAGNOSIS, GENDER AND TRANSMISSION
                        //AGE UNKNOWN
                        {deuid: "Ujm8qoGj0fo", cocuid: "kek1YXjDq70", col_no: "B"},
                        //DIAGNOSIS UNKNOWN
                        {deuid: "it8UvG94yDu", cocuid: "a14nFkqYZ9i", col_no: "B"},
                        //GENDER UNKNOWN
                        {deuid: "wJvwACm3zzR", cocuid: "jNbFhhnUsQv", col_no: "B"},
                        //TRANSMISSION UNKNOWN
                        {deuid: "RmmNGZSrcLa", cocuid: "U8blRfoPG9x", col_no: "B"},

                        //BITE CASES IN HUMANS, GENDER, AGE, CATEGORIES AND ANIMAL
                        //GENDER UNKNOWN
                        {deuid: "UgOTAOvaLbD", cocuid: "jNbFhhnUsQv", col_no: "D,E,F,G"},
                        //AGE UNKNOWN
                        {deuid: "nnCmUHUtUCS", cocuid: "kek1YXjDq70", col_no: "D,E,F,G"},
                        //CATEGORY UNKNOWN
                        {deuid: "JqYTE1umB52", cocuid: "rETDBf8DCmm", col_no: "F,G"},
                        //CATEGORY III
                        {deuid: "JqYTE1umB52", cocuid: "SboJeqG5PSr", col_no: "E"},
                        //CATEGORY II
                        {deuid: "JqYTE1umB52", cocuid: "C0llASltiUa", col_no: "D"},
                        //BITES BY OTHER ANIMALS
                        {deuid: "WgTepCvygAx", cocuid: "fZaOiqxlprE", col_no: "G"},
                        //BITES BY DOG
                        {deuid: "WgTepCvygAx", cocuid: "I5JayMgNxQW", col_no: "D,E,F"},

                        //PEOPLE RECEIVING PEP GENDER, AGE AND CATEGORIES
                        //GENDER UNKNOWN
                        {deuid: "T6o3ZYK1GT2", cocuid: "jNbFhhnUsQv", col_no: "H"},
                        //AGE UNKNOWN
                        {deuid: "MWT1th6SDRs", cocuid: "kek1YXjDq70", col_no: "H"},
                        //CATEGORY UNKNOWN
                        {deuid: "lksAZeJRTfu", cocuid: "rETDBf8DCmm", col_no: "H"},

                        //DOG POPULATION
                        //OWNERSHIP UNKNOWN
                        {deuid: "FQfEkbg7ock", cocuid: "ckYrXbtH54K", col_no: "L"},

                        //DOG VACCINATION COVERAGE
                        {deuid: "xIcL7DltKft", cocuid: "ckYrXbtH54K", col_no: "M"},

                        //RABIES CASES IN ANIMALS
                        //DOG CASES UNKNOWN DIAGNOSIS
                        {deuid: "OUeYAMsNtG4", cocuid: "p8VX4jTyOIz", col_no: "J"},
                        //UNKNOWN ANIMAL UNKNOWN DIAGNOSIS

                        {deuid: "OUeYAMsNtG4", cocuid: "gYSXz9bTehK", col_no: "K"}

                    ]
                }
            ]
        },
        {
            name: "South Sudan Monthly template",
            file:"SOUTH_SUDAN_KA_TREATMENT_MONTHLY_SUMMARY.xlsx",
            sheet_mode : SAME_MODEL_SHEETS,
            sheets: [
                {
                    sheet_type: MULTIPLE_PERIODS_AND_FACILITIES,
                    period_type : MONTHLY_PERIOD,
                    year : "A3",
                    ou : "L1",
                    sheet_no: 1,
                    dataElementIdScheme: ORG_CODE_SCHEME,
                    period_dim_1_first : "B",
                    period_dim_1_length : 12,
                    period_dim_2 : 3,
                    data_des: [
                        {de_code: "VL_EPI_Type", cocuid:"psVSPLclyFj", dim: "5"}, // New
                        {de_code: "VL_EPI_Type", cocuid:"KPn9RHNrd8R", dim: "6"}, // Relapse
                        {de_code: "PKDL_GEN_EPID_cases", cocuid:"Xr12mI7VPn3", dim: "7"}, // PKDL
                        {de_code: "VL_LAB_HIVstatus_Type", cocuid:"YXktM46YiXo", dim: "8"}, // Type unspecified, Positive
                        {de_code: "VL_INIT_ITxO_Drug_Type", cocuid:"kT60pxOR9DT", dim: "12"}, // Drug unspecified, New, Initial Cure
                        {de_code: "VL_INIT_ITxO_Drug_Type", cocuid:"IDinKF2U3Ck", dim: "13"}, // Drug unspecified, New, Failure
                        {de_code: "VL_INIT_ITxO_Drug_Type", cocuid:"TaxNA8fHbey", dim: "14"}, // Drug unspecified, New, Death
                        {de_code: "VL_INIT_ITxO_Drug_Type", cocuid:"ukcVceryxyL", dim: "17"}, // Drug unspecified, Relapse, Initial Cure
                        {de_code: "VL_INIT_ITxO_Drug_Type", cocuid:"KpStyHyHmxT", dim: "18"}, // Drug unspecified, Relapse, Failure
                        {de_code: "VL_INIT_ITxO_Drug_Type", cocuid:"WSeGCvVl5vq", dim: "19"}, // Drug unspecified, Relapse, Death
                        {de_code: "VL_EPI_Gender-Type", cocuid:"aWWYWv6buzp", dim: "33"}, // Type unspecified, Male
                        {de_code: "VL_EPI_Gender-Type", cocuid:"wGED4K5Bs37", dim: "34"}, // Type unspecified, Female
                        {de_code: "VL_EPI_Age-Type", cocuid:"rZwYGlqR8GG", dim: "36"}, // Type unspecified, Under 5y
                        {de_code: "VL_EPI_Age-Type", cocuid:"P6R9XEaqQbz", dim: "37"}, // Type unspecified, 5 to 14 y
                        {de_code: "VL_EPI_Age-Type", cocuid:"UQMTeRPY2U0", dim: "38"} // Type unspecified, 15 y and over
                    
                    ]
                }
            ]
        },
        {
            name: "South Sudan Weekly template",
            file:"SOUTH_SUDAN_KA_TREATMENT_WEEKLY_SUMMARY.xlsx",
            sheet_mode : SAME_MODEL_SHEETS,
            sheets: [
                {
                    sheet_type: MULTIPLE_PERIODS_AND_FACILITIES,
                    period_type : WEEKLY_PERIOD,
                    year : "B8",
                    ou : "M6",
                    sheet_no: 1,
                    dataElementIdScheme: ORG_CODE_SCHEME,
                    period_dim_1_first : 13,
                    period_dim_1_length : 52,
                    period_dim_2 : "C",
                    data_des: [
                        {de_code: "VL_EPI_Type", cocuid:"psVSPLclyFj", dim: "D"}, // New
                        {de_code: "VL_EPI_Type", cocuid:"KPn9RHNrd8R", dim: "F"}, // Relapse
                        {de_code: "PKDL_GEN_EPID_cases", cocuid:"Xr12mI7VPn3", dim: "E"}, // PKDL
                        {de_code: "VL_INIT_ITxO_Drug_Type", cocuid:"LAkANoW73LV", dim: "L"}, // Drug unspecified, Type unspecified, Initial Cure
                        {de_code: "VL_INIT_ITxO_Drug_Type", cocuid:"IDinKF2U3Ck", dim: "N"}, // Drug unspecified, New, Failure
                        {de_code: "VL_INIT_ITxO_Drug_Type", cocuid:"tpW0Oiuo0Sh", dim: "M"}, // Drug unspecified, Type unspecified, Death
                        {de_code: "VL_INIT_ITxO_Drug_Type", cocuid:"KpStyHyHmxT", dim: "O"}, // Drug unspecified, Relapse, Failure
                        {de_code: "VL_EPI_Gender-Type", cocuid:"aWWYWv6buzp", dim: "G"}, // Type unspecified, Male
                        {de_code: "VL_EPI_Gender-Type", cocuid:"wGED4K5Bs37", dim: "H"}, // Type unspecified, Female
                        {de_code: "VL_EPI_Age-Type", cocuid:"rZwYGlqR8GG", dim: "I"}, // Type unspecified, Under 5y
                        {de_code: "VL_EPI_Age-Type", cocuid:"P6R9XEaqQbz", dim: "J"}, // Type unspecified, 5 to 14 y
                        {de_code: "VL_EPI_Age-Type", cocuid:"UQMTeRPY2U0", dim: "K"} // Type unspecified, 15 y and over
                    
                    ]
                }
            ]
        },
        {
            name: "Unlimited VL Monthly template",
            file:"unlimited_monthly_template.xlsx",
            sheet_mode : SAME_MODEL_SHEETS,
            sheets: [
                {
                    sheet_type: UNLIMITED_ORGUNITS_PERIODS_DATAELEMENTS,
                    period_type : MONTHLY_PERIOD,
                    year : "B2",
                    sheet_no: 1,
                    dataElementIdScheme: ORG_CODE_SCHEME,

                    orgUnit_dim : "B",
                    data_starting_row : 7,
                    period_dim_1 : "E",
                    period_dim_2 : 3,
              //      period_length : 12,
                    data_des: [
                        {de_code: "VL_EPI_Type", cocuid:"psVSPLclyFj"}, // Case
                        {de_code: "VL_FU_M6_FTxO_Type", cocuid:"SWQatS9z4sL"} // Relapse
                    ]
                }
            ]
        },
        {
            name: "Unlimited VL Yearly template",
            file:"unlimited_annual_template.xlsx",
            sheet_mode : SAME_MODEL_SHEETS,
            sheets: [
                {
                    sheet_type: UNLIMITED_ORGUNITS_PERIODS_DATAELEMENTS,
                    period_type : YEARLY_PERIOD,
                    year : "B2",
                    sheet_no: 1,
                    dataElementIdScheme: ORG_CODE_SCHEME,

                    orgUnit_dim : "B",
                    data_starting_row : 7,
                    period_dim_1 : "E",
                    period_dim_2 : 3,
                 //   period_length : 12,
                    data_des: [
                        {de_code: "VL_EPI_Type", cocuid:"psVSPLclyFj"}, // Case
                        {de_code: "VL_FU_M6_FTxO_Type", cocuid:"SWQatS9z4sL"} // Relapse
                    ]
                }
            ]
        },
        {
            name: "Unlimited AmBisome Balance Monthly Template",
            file:"ambisome_balance_monthly_template.xlsx",
            sheet_mode : SAME_MODEL_SHEETS,
            sheets: [
                {
                    sheet_type: UNLIMITED_ORGUNITS_PERIODS_DATAELEMENTS,
                    period_type : MONTHLY_PERIOD,
                    year : "F2",
                    sheet_no: 1,
                    dataElementIdScheme: ORG_CODE_SCHEME,

                    orgUnit_dim : "B",
                    data_starting_row : 4,
                    period_dim_1 : "F",
                    period_dim_2 : 3,
               //     period_length : 12,
                    data_des: [
                        {de_code: "Drug_Ambisome_end", cocuid:"Xr12mI7VPn3"}, // Ambisome at the end of the month
                    ]
                }
            ]
        },
        {
            name: "Unlimited AmBisome 5 Monthly template",
            file:"unlimited_ambisome_monthly_template.xlsx",
            sheet_mode : SAME_MODEL_SHEETS,
            sheets: [
                {
                    sheet_type: UNLIMITED_ORGUNITS_PERIODS_DATAELEMENTS,
                    period_type : MONTHLY_PERIOD,
                    year : "B2",
                    sheet_no: 1,
                    dataElementIdScheme: ORG_CODE_SCHEME,

                    orgUnit_dim : "E",
                    data_starting_row : 4,
                    period_dim_1 : "F",
                    period_dim_2 : 2,
                  //  period_length : 12,
                    data_des: [
                        {de_code: "Drug_Ambisome_start", cocuid:"Xr12mI7VPn3"}, // Ambisome at the begining of the month
                        {de_code: "Drug_Ambisome_received", cocuid:"Xr12mI7VPn3"}, // Ambisome received
                        {de_code: "Drug_Ambisome_dispatched", cocuid:"Xr12mI7VPn3"}, // Ambisome used
                        {de_code: "Drug_Ambisome_VLcases_treated", cocuid:"Xr12mI7VPn3"}, // Nb of patients trated (VL)
                        {de_code: "Drug_Ambisome_end", cocuid:"Xr12mI7VPn3"}, // Ambisome at the end of the month
                    ]
                }
            ]
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
                    orgUnit_dim : "B",
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
                    orgUnit_dim : "B",
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
        }
    ]
}
