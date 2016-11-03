var data_VLaggregated_monthly = 
{
	templates: [
				{
					name: "VLaggregated_monthly",
					file:"VLaggregated_monthly.xlsx",
					sheets: [
								{
									sheet_type: "MULTIPLE_DE_OU_PE",
									sheet_no: 1,
									orgUnitIdScheme: "UID",
									dataElementIdScheme: "CODE",
									idScheme: "CODE",
									ouuid_col: "A",
									month_col: "G", 
									year_col: "F",
									data_starting_row : 5,
									last_data_column : "BZ",
									key_coulmn: "A",
									
									agg_des: 
										[			
											{ deuid: "[ VL_EPI_Type New ]", cocuid: "default", col_no: "H"},
											{ deuid: "[ VL_EPI_Type Relapse ]", cocuid: "default", col_no: "I"},
											{ deuid: "[ VL_EPI_Type Type unspecified ]", cocuid: "default", col_no: "J"},
											{ deuid: "[ VL_EPI_Origin-Type New, Autochthonous ]", cocuid: "default", col_no: "K"},
											{ deuid: "[ VL_EPI_Origin-Type New, Imported ]", cocuid: "default", col_no: "L"},
											{ deuid: "[ VL_EPI_Origin-Type New, Origin unknown ]", cocuid: "default", col_no: "M"},
											{ deuid: "[ VL_EPI_Origin-Type Relapse, Autochthonous ]", cocuid: "default", col_no: "N"},
											{ deuid: "[ VL_EPI_Origin-Type Relapse, Imported ]", cocuid: "default", col_no: "O"},
											{ deuid: "[ VL_EPI_Origin-Type Relapse, Origin unknown ]", cocuid: "default", col_no: "P"},
											{ deuid: "[ VL_EPI_Origin-Type Type unspecified, Autochthonous ]", cocuid: "default", col_no: "Q"},
											{ deuid: "[ VL_EPI_Origin-Type Type unspecified, Imported ]", cocuid: "default", col_no: "R"},
											{ deuid: "[ VL_EPI_Origin-Type Type unspecified, Origin unknown ]", cocuid: "default", col_no: "S"},
											{ deuid: "[ VL_EPI_Gender-Type New, Male ]", cocuid: "default", col_no: "T"},
											{ deuid: "[ VL_EPI_Gender-Type New, Female ]", cocuid: "default", col_no: "U"},
											{ deuid: "[ VL_EPI_Gender-Type New, Gender Unknown ]", cocuid: "default", col_no: "V"},
											{ deuid: "[ VL_EPI_Gender-Type Relapse, Male ]", cocuid: "default", col_no: "W"},
											{ deuid: "[ VL_EPI_Gender-Type Relapse, Female ]", cocuid: "default", col_no: "X"},
											{ deuid: "[ VL_EPI_Gender-Type Relapse, Gender Unknown ]", cocuid: "default", col_no: "Y"},
											{ deuid: "[ VL_EPI_Gender-Type Type unspecified, Male ]", cocuid: "default", col_no: "Z"},
											{ deuid: "[ VL_EPI_Gender-Type Type unspecified, Female ]", cocuid: "default", col_no: "AA"},
											{ deuid: "[ VL_EPI_Gender-Type Type unspecified, Gender Unknown ]", cocuid: "default", col_no: "AB"}
										]
								}
							]
				}
			]
}