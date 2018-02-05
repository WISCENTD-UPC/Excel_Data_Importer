var data_indonesia = 
{
	templates: [
				{
					name: "Malaria Template",
					file:"Malaria_Template.xlsx",
					sheets: [
								{
									sheet_type: "AGGREGATE_STATIC",
									sheet_no: 3,
									oucode_cell: "F8",
									month_cell: "M6", 
									year_cell: "M5",
									orgUnitIdScheme: "CODE",
									last_data_column : "I",
									
									agg_des: 
										[			
											{ deuid: "EaISNtwxqUl", cocuid: "uYZQLtLcdDX", cell_no: "I13"},
											{ deuid: "EaISNtwxqUl", cocuid: "c0GDxLW2XD4", cell_no: "B13"}							
										]
								},
								{
									sheet_type: "AGGREGATE_EVENT",
									sheet_no: 2,
									oucode_cell: "D7",
									month_cell: "I5", 
									year_cell: "I4",
									orgUnitIdScheme: "CODE",
									last_data_column : "AG",
									
									agg_des: 
										[
											{ deuid: "EaISNtwxqUl", cocuid: "TKUeFoc6Ogt", cell_no: "E9"}
										],
									
									program: "Km4KB0dcgxu",
									key_coulmn: "A", //for validation
									event_date_col: "O", //should be a letter
									data_starting_row: "39", //should be a number
									
									event_des: 
										[
											{ deuid: "R6TMiedD6Vt", cocuid: "SdOUI2yT46H", column: "B", detype: "TEXT", isMandatory : false }, //Case number
											{ deuid: "CxxjS8wT5jY", cocuid: "S34ULMcHMca", column: "C", detype: "TEXT", isMandatory : false }, //Method of detection
											{ deuid: "iBlf6ogCGDH", cocuid: "jOkIbJVhECg", column: "D", detype: "TEXT", isMandatory : false }, //Name of patient
											{ deuid: "wIPyAwQxTQu", cocuid: "jOkIbJVhECg", column: "E", detype: "NUMBER", isMandatory : false }, //Age
											{ deuid: "tNGoFv0dubE", cocuid: "jOkIbJVhECg", column: "G", detype: "TEXT", isMandatory : false }, //Gender
											{ deuid: "zb7X1Eox29L", cocuid: "jOkIbJVhECg", column: "I", detype: "TEXT", isMandatory : false }, //Habitat
											{ deuid: "T9xjhBcnHWj", cocuid: "jOkIbJVhECg", column: "J", detype: "TEXT", isMandatory : false }, //Village
											{ deuid: "mcy38mXqYdg", cocuid: "jOkIbJVhECg", column: "M", detype: "DATE", isMandatory : false }, //Prev postive date
											{ deuid: "wz6S9437XqM", cocuid: "jOkIbJVhECg", column: "N", detype: "DATE", isMandatory : false }, //Current symptom start date
											{ deuid: "OlUqS7Eez5r", cocuid: "jOkIbJVhECg", column: "O", detype: "DATE", isMandatory : false }, //Bloodslide tested date
											{ deuid: "CtcnOqovRA4", cocuid: "jOkIbJVhECg", column: "P", detype: "DATE", isMandatory : false }, //Date of treatment
											{ deuid: "OQ0ibs8Pm66", cocuid: "jOkIbJVhECg", column: "Q", detype: "TEXT", isMandatory : false }, //Occupation
											{ deuid: "yMBWzrouZIS", cocuid: "jOkIbJVhECg", column: "R", detype: "TEXT", isMandatory : false }, //Confirmation method
											{ deuid: "zNl82IeDwqz", cocuid: "jOkIbJVhECg", column: "S", detype: "TEXT", isMandatory : false } //Type of Malaria
											
										]
								}
							]
				},
				{
					name: "HIV Template",
					file:"HIV_Template.xlsx",
					sheets: [
								{
									sheet_type: "AGGREGATE_STATIC",
									sheet_no: 3,
									oucode_cell: "F8",
									month_cell: "M6", 
									year_cell: "M5",
									last_data_column : "ZZ",
									//orgUnitIdScheme: "CODE",
									
									agg_des: 
										[			
											{ deuid: "EaISNtwxqUl", cocuid: "uYZQLtLcdDX", cell_no: "I13"},
											{ deuid: "EaISNtwxqUl", cocuid: "c0GDxLW2XD4", cell_no: "B13"}							
										]
								},
								{
									sheet_type: "AGGREGATE_EVENT",
									sheet_no: 2,
									oucode_cell: "D7",
									month_cell: "I5", 
									year_cell: "I4",
									last_data_column : "ZZ",
									
									agg_des: 
										[
											{ deuid: "EaISNtwxqUl", cocuid: "TKUeFoc6Ogt", cell_no: "E9"}
										],
									
									program: "Km4KB0dcgxu",
									key_coulmn: "A", //for validation
									event_date_col: "O", //should be a letter
									data_starting_row: "39", //should be a number
									event_des: 
										[
											{ deuid: "R6TMiedD6Vt", cocuid: "SdOUI2yT46H", column: "B"},
											{ deuid: "CxxjS8wT5jY", cocuid: "S34ULMcHMca", column: "C"},
											{ deuid: "iBlf6ogCGDH", cocuid: "jOkIbJVhECg", column: "D"}
										]
								}
							]
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
						{deuid: "Xii6gy92ebp", column: "D"},
						{deuid: "Z8W89lDV4IL", column: "E"},
						{deuid: "HAt5fbygnrg", column: "F"},
						{deuid: "xkt9nkHj5CA", column: "G"},
						{deuid: "RETdv2kznbH", column: "H"},
						{deuid: "QzAHATV8EWv", column: "I"},
						{deuid: "nidn593FWAF", column: "J"},
						{deuid: "mTyzapAF9iT", column: "K"},
						{deuid: "qJOXKn3wSLS", column: "L"},
						{deuid: "qafL6BdLAkH", column: "M"},
						{deuid: "GqDsjatLQXl", column: "N"},
						{deuid: "QEFiXRZu7jY", column: "O"},
						{deuid: "Sieb79556d6", column: "P"},
						{deuid: "PRaonbusSOU", column: "Q"},
						{deuid: "UY4A4oRdvqT", column: "R"},
						{deuid: "j9OfhXT92Ej", column: "S"},
						{deuid: "TqqxE4hmd6Q", column: "T"},
						{deuid: "UCXRQtdD8K5", column: "U"},
						{deuid: "UwC7RVH9Bwv", column: "V"},
						{deuid: "DHmAP1MjEoK", column: "W"},
						{deuid: "nTmXYDATwHw", column: "X"},
						{deuid: "COtqliXo7tU", column: "Y"}
					]
				}
			]
		}
			]
}