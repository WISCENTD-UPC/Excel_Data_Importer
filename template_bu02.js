var data_ntd =
{
    templates: [
        {
            name: "Select an option",
            file:"empty.xlsx",
            sheets: []
        },
        {
            name: "BU02 data template",
            file:"BU02_template.xlsx",
            sheets: [
                {
                    sheet_type: "EVENTS",
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
            sheets: [
                {
                    sheet_type: "EVENTS",
                    sheet_no: 1,
                    data_starting_row : "5",
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
            name: "HAT sentinel sites",
            file:"HAT_template.xlsx",
            sheets: [
                {
                    sheet_type: "EVENTS",
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
            sheets: [
                {
                    sheet_type: "MULTIPLE_DE_OU_PE",
                    sheet_no: 1,
                    orgUnitIdScheme: "CODE",
                    dataElementIdScheme: "UID",
                    idScheme: "UID",
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
            sheets: [
                {
                    sheet_type: "MULTIPLE_PERIODS_AND_FACILITIES",
                    sheet_no: 1,
                    sheet_list : [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],
                    period_data_by : "columns",
                    year : "A3",
                    ou : "L1",
                    dataElementIdScheme: "Code",
                    period_dim_1 : ["B","C","D","E","F","G","H","I","J","K","L","M"],
                    period_dim_2 : 3,
                    data_des: [
                        {de_code: "VL_EPI_Type", cocuid:"psVSPLclyFj", dim: "5"}, // New
                        {de_code: "VL_EPI_Type", cocuid:"KPn9RHNrd8R", dim: "6"}, // Relapse
                        {de_code: "PKDL_GEN_EPID_cases", cocuid:"Xr12mI7VPn3", dim: "7"}, // PKDL
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
    ]
}