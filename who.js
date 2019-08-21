var whoTemplate = {
    templates: [
        {
            name: "Module 1 Template",
            file: "Module_1_Template.xlsx",
            sheets: [
                {
                    sheet_type: "AGGREGATE_STATIC",
                    sheet_no: 1, //Demographic sheet
                    orgUnitIdScheme: "UID",
                    dataElementIdScheme: "UID",
                    idScheme: "UID",
                    oucode_cell: "V2",
                    year_cell: "Q4",
                    last_data_column: "ZZ",

                    agg_des: [
                        {
                            deuid: "mxdCGM6msAR",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D8"
                        }, //Medical Doctors Total
                        {
                            deuid: "mxdCGM6msAR",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E8"
                        }, //Medical Doctors Practising
                        {
                            deuid: "mxdCGM6msAR",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F8"
                        }, //Medical Doctors Professionally Active
                        {
                            deuid: "mxdCGM6msAR",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G8"
                        }, //Medical Doctors Licensed to practice
                        {
                            deuid: "mxdCGM6msAR",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H8"
                        }, //Medical Doctors Male
                        {
                            deuid: "mxdCGM6msAR",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I8"
                        }, //Medical Doctors Female
                        {
                            deuid: "mxdCGM6msAR",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J8"
                        }, //Medical Doctors <25 yrs
                        {
                            deuid: "mxdCGM6msAR",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K8"
                        }, //Medical Doctors 25-34 yrs
                        {
                            deuid: "mxdCGM6msAR",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L8"
                        }, //Medical Doctors 35-44 yrs
                        {
                            deuid: "mxdCGM6msAR",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M8"
                        }, //Medical Doctors 45-54 yrs
                        {
                            deuid: "mxdCGM6msAR",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N8"
                        }, //Medical Doctors 55-64 yrs
                        {
                            deuid: "mxdCGM6msAR",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O8"
                        }, //Medical Doctors > 65 yrs
                        {
                            deuid: "mxdCGM6msAR",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P8"
                        }, //Medical Doctors Domestically Trained
                        {
                            deuid: "mxdCGM6msAR",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q8"
                        }, //Medical Doctors Foreign Trained
                        {
                            deuid: "mxdCGM6msAR",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R8"
                        }, //Medical Doctors Unknown place of training
                        {
                            deuid: "mxdCGM6msAR",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S8"
                        }, //Medical Doctors National Born
                        {
                            deuid: "mxdCGM6msAR",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T8"
                        }, //Medical Doctors Foreign Born
                        {
                            deuid: "y67a0RW6wUa",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D9"
                        }, //Generalist Medical Practitioners Total
                        {
                            deuid: "y67a0RW6wUa",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E9"
                        }, //Generalist Medical Practitioners Practising
                        {
                            deuid: "y67a0RW6wUa",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F9"
                        }, //Generalist Medical Practitioners Professionally Active
                        {
                            deuid: "y67a0RW6wUa",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G9"
                        }, //Generalist Medical Practitioners Licensed to practice
                        {
                            deuid: "y67a0RW6wUa",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H9"
                        }, //Generalist Medical Practitioners Male
                        {
                            deuid: "y67a0RW6wUa",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I9"
                        }, //Generalist Medical Practitioners Female
                        {
                            deuid: "y67a0RW6wUa",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J9"
                        }, //Generalist Medical Practitioners <25 yrs
                        {
                            deuid: "y67a0RW6wUa",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K9"
                        }, //Generalist Medical Practitioners 25-34 yrs
                        {
                            deuid: "y67a0RW6wUa",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L9"
                        }, //Generalist Medical Practitioners 35-44 yrs
                        {
                            deuid: "y67a0RW6wUa",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M9"
                        }, //Generalist Medical Practitioners 45-54 yrs
                        {
                            deuid: "y67a0RW6wUa",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N9"
                        }, //Generalist Medical Practitioners 55-64 yrs
                        {
                            deuid: "y67a0RW6wUa",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O9"
                        }, //Generalist Medical Practitioners > 65 yrs
                        {
                            deuid: "y67a0RW6wUa",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P9"
                        }, //Generalist Medical Practitioners Domestically Trained
                        {
                            deuid: "y67a0RW6wUa",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q9"
                        }, //Generalist Medical Practitioners Foreign Trained
                        {
                            deuid: "y67a0RW6wUa",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R9"
                        }, //Generalist Medical Practitioners Unknown place of training
                        {
                            deuid: "y67a0RW6wUa",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S9"
                        }, //Generalist Medical Practitioners National Born
                        {
                            deuid: "y67a0RW6wUa",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T9"
                        }, //Generalist Medical Practitioners Foreign Born
                        {
                            deuid: "SeU3FMqECnf",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D10"
                        }, //Specialist Medical Practitioners Total
                        {
                            deuid: "SeU3FMqECnf",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E10"
                        }, //Specialist Medical Practitioners Practising
                        {
                            deuid: "SeU3FMqECnf",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F10"
                        }, //Specialist Medical Practitioners Professionally Active
                        {
                            deuid: "SeU3FMqECnf",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G10"
                        }, //Specialist Medical Practitioners Licensed to practice
                        {
                            deuid: "SeU3FMqECnf",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H10"
                        }, //Specialist Medical Practitioners Male
                        {
                            deuid: "SeU3FMqECnf",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I10"
                        }, //Specialist Medical Practitioners Female
                        {
                            deuid: "SeU3FMqECnf",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J10"
                        }, //Specialist Medical Practitioners <25 yrs
                        {
                            deuid: "SeU3FMqECnf",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K10"
                        }, //Specialist Medical Practitioners 25-34 yrs
                        {
                            deuid: "SeU3FMqECnf",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L10"
                        }, //Specialist Medical Practitioners 35-44 yrs
                        {
                            deuid: "SeU3FMqECnf",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M10"
                        }, //Specialist Medical Practitioners 45-54 yrs
                        {
                            deuid: "SeU3FMqECnf",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N10"
                        }, //Specialist Medical Practitioners 55-64 yrs
                        {
                            deuid: "SeU3FMqECnf",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O10"
                        }, //Specialist Medical Practitioners > 65 yrs
                        {
                            deuid: "SeU3FMqECnf",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P10"
                        }, //Specialist Medical Practitioners Domestically Trained
                        {
                            deuid: "SeU3FMqECnf",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q10"
                        }, //Specialist Medical Practitioners Foreign Trained
                        {
                            deuid: "SeU3FMqECnf",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R10"
                        }, //Specialist Medical Practitioners Unknown place of training
                        {
                            deuid: "SeU3FMqECnf",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S10"
                        }, //Specialist Medical Practitioners National Born
                        {
                            deuid: "SeU3FMqECnf",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T10"
                        }, //Specialist Medical Practitioners Foreign Born
                        {
                            deuid: "caegWa7kQkh",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D11"
                        }, //General Paediatricians Practitioners Total
                        {
                            deuid: "caegWa7kQkh",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E11"
                        }, //General Paediatricians Practitioners Practising
                        {
                            deuid: "caegWa7kQkh",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F11"
                        }, //General Paediatricians Practitioners Professionally Active
                        {
                            deuid: "caegWa7kQkh",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G11"
                        }, //General Paediatricians Practitioners Licensed to practice
                        {
                            deuid: "caegWa7kQkh",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H11"
                        }, //General Paediatricians Practitioners Male
                        {
                            deuid: "caegWa7kQkh",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I11"
                        }, //General Paediatricians Practitioners Female
                        {
                            deuid: "caegWa7kQkh",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J11"
                        }, //General Paediatricians Practitioners <25 yrs
                        {
                            deuid: "caegWa7kQkh",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K11"
                        }, //General Paediatricians Practitioners 25-34 yrs
                        {
                            deuid: "caegWa7kQkh",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L11"
                        }, //General Paediatricians Practitioners 35-44 yrs
                        {
                            deuid: "caegWa7kQkh",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M11"
                        }, //General Paediatricians Practitioners 45-54 yrs
                        {
                            deuid: "caegWa7kQkh",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N11"
                        }, //General Paediatricians Practitioners 55-64 yrs
                        {
                            deuid: "caegWa7kQkh",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O11"
                        }, //General Paediatricians Practitioners > 65 yrs
                        {
                            deuid: "caegWa7kQkh",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P11"
                        }, //General Paediatricians Practitioners Domestically Trained
                        {
                            deuid: "caegWa7kQkh",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q11"
                        }, //General Paediatricians Practitioners Foreign Trained
                        {
                            deuid: "caegWa7kQkh",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R11"
                        }, //General Paediatricians Practitioners Unknown place of training
                        {
                            deuid: "caegWa7kQkh",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S11"
                        }, //General Paediatricians Practitioners National Born
                        {
                            deuid: "caegWa7kQkh",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T11"
                        }, //General Paediatricians Practitioners Foreign Born
                        {
                            deuid: "gNfIYju3TGx",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D12"
                        }, //Obstetricians and Gynaecologists Practitioners Total
                        {
                            deuid: "gNfIYju3TGx",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E12"
                        }, //Obstetricians and Gynaecologists Practitioners Practising
                        {
                            deuid: "gNfIYju3TGx",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F12"
                        }, //Obstetricians and Gynaecologists Practitioners Professionally Active
                        {
                            deuid: "gNfIYju3TGx",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G12"
                        }, //Obstetricians and Gynaecologists Practitioners Licensed to practice
                        {
                            deuid: "gNfIYju3TGx",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H12"
                        }, //Obstetricians and Gynaecologists Practitioners Male
                        {
                            deuid: "gNfIYju3TGx",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I12"
                        }, //Obstetricians and Gynaecologists Practitioners Female
                        {
                            deuid: "gNfIYju3TGx",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J12"
                        }, //Obstetricians and Gynaecologists Practitioners <25 yrs
                        {
                            deuid: "gNfIYju3TGx",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K12"
                        }, //Obstetricians and Gynaecologists Practitioners 25-34 yrs
                        {
                            deuid: "gNfIYju3TGx",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L12"
                        }, //Obstetricians and Gynaecologists Practitioners 35-44 yrs
                        {
                            deuid: "gNfIYju3TGx",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M12"
                        }, //Obstetricians and Gynaecologists Practitioners 45-54 yrs
                        {
                            deuid: "gNfIYju3TGx",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N12"
                        }, //Obstetricians and Gynaecologists Practitioners 55-64 yrs
                        {
                            deuid: "gNfIYju3TGx",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O12"
                        }, //Obstetricians and Gynaecologists Practitioners > 65 yrs
                        {
                            deuid: "gNfIYju3TGx",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P12"
                        }, //Obstetricians and Gynaecologists Practitioners Domestically Trained
                        {
                            deuid: "gNfIYju3TGx",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q12"
                        }, //Obstetricians and Gynaecologists Practitioners Foreign Trained
                        {
                            deuid: "gNfIYju3TGx",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R12"
                        }, //Obstetricians and Gynaecologists Practitioners Unknown place of training
                        {
                            deuid: "gNfIYju3TGx",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S12"
                        }, //Obstetricians and Gynaecologists Practitioners National Born
                        {
                            deuid: "gNfIYju3TGx",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T12"
                        }, //Obstetricians and Gynaecologists Practitioners Foreign Born
                        {
                            deuid: "c1RM22xq3EV",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D13"
                        }, //Psychiatrists Practitioners Total
                        {
                            deuid: "c1RM22xq3EV",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E13"
                        }, //Psychiatrists Practitioners Practising
                        {
                            deuid: "c1RM22xq3EV",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F13"
                        }, //Psychiatrists Practitioners Professionally Active
                        {
                            deuid: "c1RM22xq3EV",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G13"
                        }, //Psychiatrists Practitioners Licensed to practice
                        {
                            deuid: "c1RM22xq3EV",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H13"
                        }, //Psychiatrists Practitioners Male
                        {
                            deuid: "c1RM22xq3EV",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I13"
                        }, //Psychiatrists Practitioners Female
                        {
                            deuid: "c1RM22xq3EV",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J13"
                        }, //Psychiatrists Practitioners <25 yrs
                        {
                            deuid: "c1RM22xq3EV",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K13"
                        }, //Psychiatrists Practitioners 25-34 yrs
                        {
                            deuid: "c1RM22xq3EV",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L13"
                        }, //Psychiatrists Practitioners 35-44 yrs
                        {
                            deuid: "c1RM22xq3EV",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M13"
                        }, //Psychiatrists Practitioners 45-54 yrs
                        {
                            deuid: "c1RM22xq3EV",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N13"
                        }, //Psychiatrists Practitioners 55-64 yrs
                        {
                            deuid: "c1RM22xq3EV",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O13"
                        }, //Psychiatrists Practitioners > 65 yrs
                        {
                            deuid: "c1RM22xq3EV",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P13"
                        }, //Psychiatrists Practitioners Domestically Trained
                        {
                            deuid: "c1RM22xq3EV",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q13"
                        }, //Psychiatrists Practitioners Foreign Trained
                        {
                            deuid: "c1RM22xq3EV",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R13"
                        }, //Psychiatrists Practitioners Unknown place of training
                        {
                            deuid: "c1RM22xq3EV",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S13"
                        }, //Psychiatrists Practitioners National Born
                        {
                            deuid: "c1RM22xq3EV",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T13"
                        }, //Psychiatrists Practitioners Foreign Born
                        {
                            deuid: "szTSFmcna7O",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D14"
                        }, //Medical group of Specialists Practitioners Total
                        {
                            deuid: "szTSFmcna7O",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E14"
                        }, //Medical group of Specialists Practitioners Practising
                        {
                            deuid: "szTSFmcna7O",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F14"
                        }, //Medical group of Specialists Practitioners Professionally Active
                        {
                            deuid: "szTSFmcna7O",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G14"
                        }, //Medical group of Specialists Practitioners Licensed to practice
                        {
                            deuid: "szTSFmcna7O",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H14"
                        }, //Medical group of Specialists Practitioners Male
                        {
                            deuid: "szTSFmcna7O",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I14"
                        }, //Medical group of Specialists Practitioners Female
                        {
                            deuid: "szTSFmcna7O",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J14"
                        }, //Medical group of Specialists Practitioners <25 yrs
                        {
                            deuid: "szTSFmcna7O",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K14"
                        }, //Medical group of Specialists Practitioners 25-34 yrs
                        {
                            deuid: "szTSFmcna7O",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L14"
                        }, //Medical group of Specialists Practitioners 35-44 yrs
                        {
                            deuid: "szTSFmcna7O",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M14"
                        }, //Medical group of Specialists Practitioners 45-54 yrs
                        {
                            deuid: "szTSFmcna7O",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N14"
                        }, //Medical group of Specialists Practitioners 55-64 yrs
                        {
                            deuid: "szTSFmcna7O",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O14"
                        }, //Medical group of Specialists Practitioners > 65 yrs
                        {
                            deuid: "szTSFmcna7O",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P14"
                        }, //Medical group of Specialists Practitioners Domestically Trained
                        {
                            deuid: "szTSFmcna7O",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q14"
                        }, //Medical group of Specialists Practitioners Foreign Trained
                        {
                            deuid: "szTSFmcna7O",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R14"
                        }, //Medical group of Specialists Practitioners Unknown place of training
                        {
                            deuid: "szTSFmcna7O",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S14"
                        }, //Medical group of Specialists Practitioners National Born
                        {
                            deuid: "szTSFmcna7O",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T14"
                        }, //Medical group of Specialists Practitioners Foreign Born
                        {
                            deuid: "rzSycgkn9X0",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D15"
                        }, //Surgical group of Specialists Practitioners Total
                        {
                            deuid: "rzSycgkn9X0",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E15"
                        }, //Surgical group of Specialists Practitioners Practising
                        {
                            deuid: "rzSycgkn9X0",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F15"
                        }, //Surgical group of Specialists Practitioners Professionally Active
                        {
                            deuid: "rzSycgkn9X0",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G15"
                        }, //Surgical group of Specialists Practitioners Licensed to practice
                        {
                            deuid: "rzSycgkn9X0",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H15"
                        }, //Surgical group of Specialists Practitioners Male
                        {
                            deuid: "rzSycgkn9X0",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I15"
                        }, //Surgical group of Specialists Practitioners Female
                        {
                            deuid: "rzSycgkn9X0",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J15"
                        }, //Surgical group of Specialists Practitioners <25 yrs
                        {
                            deuid: "rzSycgkn9X0",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K15"
                        }, //Surgical group of Specialists Practitioners 25-34 yrs
                        {
                            deuid: "rzSycgkn9X0",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L15"
                        }, //Surgical group of Specialists Practitioners 35-44 yrs
                        {
                            deuid: "rzSycgkn9X0",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M15"
                        }, //Surgical group of Specialists Practitioners 45-54 yrs
                        {
                            deuid: "rzSycgkn9X0",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N15"
                        }, //Surgical group of Specialists Practitioners 55-64 yrs
                        {
                            deuid: "rzSycgkn9X0",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O15"
                        }, //Surgical group of Specialists Practitioners > 65 yrs
                        {
                            deuid: "rzSycgkn9X0",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P15"
                        }, //Surgical group of Specialists Practitioners Domestically Trained
                        {
                            deuid: "rzSycgkn9X0",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q15"
                        }, //Surgical group of Specialists Practitioners Foreign Trained
                        {
                            deuid: "rzSycgkn9X0",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R15"
                        }, //Surgical group of Specialists Practitioners Unknown place of training
                        {
                            deuid: "rzSycgkn9X0",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S15"
                        }, //Surgical group of Specialists Practitioners National Born
                        {
                            deuid: "rzSycgkn9X0",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T15"
                        }, //Surgical group of Specialists Practitioners Foreign Born
                        {
                            deuid: "gArgUMQ0JUa",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D16"
                        }, //Other Specialists Practitioners Total
                        {
                            deuid: "gArgUMQ0JUa",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E16"
                        }, //Other Specialists Practitioners Practising
                        {
                            deuid: "gArgUMQ0JUa",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F16"
                        }, //Other Specialists Practitioners Professionally Active
                        {
                            deuid: "gArgUMQ0JUa",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G16"
                        }, //Other Specialists Practitioners Licensed to practice
                        {
                            deuid: "gArgUMQ0JUa",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H16"
                        }, //Other Specialists Practitioners Male
                        {
                            deuid: "gArgUMQ0JUa",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I16"
                        }, //Other Specialists Practitioners Female
                        {
                            deuid: "gArgUMQ0JUa",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J16"
                        }, //Other Specialists Practitioners <25 yrs
                        {
                            deuid: "gArgUMQ0JUa",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K16"
                        }, //Other Specialists Practitioners 25-34 yrs
                        {
                            deuid: "gArgUMQ0JUa",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L16"
                        }, //Other Specialists Practitioners 35-44 yrs
                        {
                            deuid: "gArgUMQ0JUa",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M16"
                        }, //Other Specialists Practitioners 45-54 yrs
                        {
                            deuid: "gArgUMQ0JUa",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N16"
                        }, //Other Specialists Practitioners 55-64 yrs
                        {
                            deuid: "gArgUMQ0JUa",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O16"
                        }, //Other Specialists Practitioners > 65 yrs
                        {
                            deuid: "gArgUMQ0JUa",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P16"
                        }, //Other Specialists Practitioners Domestically Trained
                        {
                            deuid: "gArgUMQ0JUa",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q16"
                        }, //Other Specialists Practitioners Foreign Trained
                        {
                            deuid: "gArgUMQ0JUa",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R16"
                        }, //Other Specialists Practitioners Unknown place of training
                        {
                            deuid: "gArgUMQ0JUa",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S16"
                        }, //Other Specialists Practitioners National Born
                        {
                            deuid: "gArgUMQ0JUa",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T16"
                        }, //Other Specialists Practitioners Foreign Born
                        {
                            deuid: "bGv5noQTa4j",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D17"
                        }, //Nursing General Personnel Total
                        {
                            deuid: "bGv5noQTa4j",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E17"
                        }, //Nursing General Personnel Practising
                        {
                            deuid: "bGv5noQTa4j",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F17"
                        }, //Nursing General Personnel Professionally Active
                        {
                            deuid: "bGv5noQTa4j",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G17"
                        }, //Nursing General Personnel Licensed to practice
                        {
                            deuid: "bGv5noQTa4j",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H17"
                        }, //Nursing General Personnel Male
                        {
                            deuid: "bGv5noQTa4j",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I17"
                        }, //Nursing General Personnel Female
                        {
                            deuid: "bGv5noQTa4j",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J17"
                        }, //Nursing General Personnel <25 yrs
                        {
                            deuid: "bGv5noQTa4j",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K17"
                        }, //Nursing General Personnel 25-34 yrs
                        {
                            deuid: "bGv5noQTa4j",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L17"
                        }, //Nursing General Personnel 35-44 yrs
                        {
                            deuid: "bGv5noQTa4j",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M17"
                        }, //Nursing General Personnel 45-54 yrs
                        {
                            deuid: "bGv5noQTa4j",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N17"
                        }, //Nursing General Personnel 55-64 yrs
                        {
                            deuid: "bGv5noQTa4j",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O17"
                        }, //Nursing General Personnel > 65 yrs
                        {
                            deuid: "bGv5noQTa4j",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P17"
                        }, //Nursing General Personnel Domestically Trained
                        {
                            deuid: "bGv5noQTa4j",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q17"
                        }, //Nursing General Personnel Foreign Trained
                        {
                            deuid: "bGv5noQTa4j",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R17"
                        }, //Nursing General Personnel Unknown place of training
                        {
                            deuid: "bGv5noQTa4j",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S17"
                        }, //Nursing General Personnel National Born
                        {
                            deuid: "bGv5noQTa4j",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T17"
                        }, //Nursing General Personnel Foreign Born
                        {
                            deuid: "mED3GxEO9og",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D18"
                        }, //Nursing Professionals Total
                        {
                            deuid: "mED3GxEO9og",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E18"
                        }, //Nursing Professionals Practising
                        {
                            deuid: "mED3GxEO9og",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F18"
                        }, //Nursing Professionals Professionally Active
                        {
                            deuid: "mED3GxEO9og",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G18"
                        }, //Nursing Professionals Licensed to practice
                        {
                            deuid: "mED3GxEO9og",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H18"
                        }, //Nursing Professionals Male
                        {
                            deuid: "mED3GxEO9og",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I18"
                        }, //Nursing Professionals Female
                        {
                            deuid: "mED3GxEO9og",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J18"
                        }, //Nursing Professionals <25 yrs
                        {
                            deuid: "mED3GxEO9og",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K18"
                        }, //Nursing Professionals 25-34 yrs
                        {
                            deuid: "mED3GxEO9og",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L18"
                        }, //Nursing Professionals 35-44 yrs
                        {
                            deuid: "mED3GxEO9og",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M18"
                        }, //Nursing Professionals 45-54 yrs
                        {
                            deuid: "mED3GxEO9og",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N18"
                        }, //Nursing Professionals 55-64 yrs
                        {
                            deuid: "mED3GxEO9og",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O18"
                        }, //Nursing Professionals > 65 yrs
                        {
                            deuid: "mED3GxEO9og",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P18"
                        }, //Nursing Professionals Domestically Trained
                        {
                            deuid: "mED3GxEO9og",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q18"
                        }, //Nursing Professionals Foreign Trained
                        {
                            deuid: "mED3GxEO9og",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R18"
                        }, //Nursing Professionals Unknown place of training
                        {
                            deuid: "mED3GxEO9og",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S18"
                        }, //Nursing Professionals National Born
                        {
                            deuid: "mED3GxEO9og",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T18"
                        }, //Nursing Professionals Foreign Born
                        {
                            deuid: "WAoZKKHmAcj",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D19"
                        }, //Nursing Associate Professionals Total
                        {
                            deuid: "WAoZKKHmAcj",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E19"
                        }, //Nursing Associate Professionals Practising
                        {
                            deuid: "WAoZKKHmAcj",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F19"
                        }, //Nursing Associate Professionals Professionally Active
                        {
                            deuid: "WAoZKKHmAcj",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G19"
                        }, //Nursing Associate Professionals Licensed to practice
                        {
                            deuid: "WAoZKKHmAcj",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H19"
                        }, //Nursing Associate Professionals Male
                        {
                            deuid: "WAoZKKHmAcj",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I19"
                        }, //Nursing Associate Professionals Female
                        {
                            deuid: "WAoZKKHmAcj",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J19"
                        }, //Nursing Associate Professionals <25 yrs
                        {
                            deuid: "WAoZKKHmAcj",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K19"
                        }, //Nursing Associate Professionals 25-34 yrs
                        {
                            deuid: "WAoZKKHmAcj",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L19"
                        }, //Nursing Associate Professionals 35-44 yrs
                        {
                            deuid: "WAoZKKHmAcj",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M19"
                        }, //Nursing Associate Professionals 45-54 yrs
                        {
                            deuid: "WAoZKKHmAcj",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N19"
                        }, //Nursing Associate Professionals 55-64 yrs
                        {
                            deuid: "WAoZKKHmAcj",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O19"
                        }, //Nursing Associate Professionals > 65 yrs
                        {
                            deuid: "WAoZKKHmAcj",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P19"
                        }, //Nursing Associate Professionals Domestically Trained
                        {
                            deuid: "WAoZKKHmAcj",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q19"
                        }, //Nursing Associate Professionals Foreign Trained
                        {
                            deuid: "WAoZKKHmAcj",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R19"
                        }, //Nursing Associate Professionals Unknown place of training
                        {
                            deuid: "WAoZKKHmAcj",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S19"
                        }, //Nursing Associate Professionals National Born
                        {
                            deuid: "WAoZKKHmAcj",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T19"
                        }, //Nursing Associate Professionals Foreign Born
                        {
                            deuid: "L1afctF08GD",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D20"
                        }, //Midwifery personnel Total
                        {
                            deuid: "L1afctF08GD",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E20"
                        }, //Midwifery personnel Practising
                        {
                            deuid: "L1afctF08GD",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F20"
                        }, //Midwifery personnel Professionally Active
                        {
                            deuid: "L1afctF08GD",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G20"
                        }, //Midwifery personnel Licensed to practice
                        {
                            deuid: "L1afctF08GD",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H20"
                        }, //Midwifery personnel Male
                        {
                            deuid: "L1afctF08GD",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I20"
                        }, //Midwifery personnel Female
                        {
                            deuid: "L1afctF08GD",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J20"
                        }, //Midwifery personnel <25 yrs
                        {
                            deuid: "L1afctF08GD",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K20"
                        }, //Midwifery personnel 25-34 yrs
                        {
                            deuid: "L1afctF08GD",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L20"
                        }, //Midwifery personnel 35-44 yrs
                        {
                            deuid: "L1afctF08GD",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M20"
                        }, //Midwifery personnel 45-54 yrs
                        {
                            deuid: "L1afctF08GD",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N20"
                        }, //Midwifery personnel 55-64 yrs
                        {
                            deuid: "L1afctF08GD",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O20"
                        }, //Midwifery personnel > 65 yrs
                        {
                            deuid: "L1afctF08GD",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P20"
                        }, //Midwifery personnel Domestically Trained
                        {
                            deuid: "L1afctF08GD",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q20"
                        }, //Midwifery personnel Foreign Trained
                        {
                            deuid: "L1afctF08GD",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R20"
                        }, //Midwifery personnel Unknown place of training
                        {
                            deuid: "L1afctF08GD",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S20"
                        }, //Midwifery personnel National Born
                        {
                            deuid: "L1afctF08GD",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T20"
                        }, //Midwifery personnel Foreign Born
                        {
                            deuid: "oFFxlqJwPh9",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D21"
                        }, //Midwifery Professionals Total
                        {
                            deuid: "oFFxlqJwPh9",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E21"
                        }, //Midwifery Professionals Practising
                        {
                            deuid: "oFFxlqJwPh9",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F21"
                        }, //Midwifery Professionals Professionally Active
                        {
                            deuid: "oFFxlqJwPh9",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G21"
                        }, //Midwifery Professionals Licensed to practice
                        {
                            deuid: "oFFxlqJwPh9",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H21"
                        }, //Midwifery Professionals Male
                        {
                            deuid: "oFFxlqJwPh9",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I21"
                        }, //Midwifery Professionals Female
                        {
                            deuid: "oFFxlqJwPh9",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J21"
                        }, //Midwifery Professionals <25 yrs
                        {
                            deuid: "oFFxlqJwPh9",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K21"
                        }, //Midwifery Professionals 25-34 yrs
                        {
                            deuid: "oFFxlqJwPh9",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L21"
                        }, //Midwifery Professionals 35-44 yrs
                        {
                            deuid: "oFFxlqJwPh9",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M21"
                        }, //Midwifery Professionals 45-54 yrs
                        {
                            deuid: "oFFxlqJwPh9",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N21"
                        }, //Midwifery Professionals 55-64 yrs
                        {
                            deuid: "oFFxlqJwPh9",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O21"
                        }, //Midwifery Professionals > 65 yrs
                        {
                            deuid: "oFFxlqJwPh9",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P21"
                        }, //Midwifery Professionals Domestically Trained
                        {
                            deuid: "oFFxlqJwPh9",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q21"
                        }, //Midwifery Professionals Foreign Trained
                        {
                            deuid: "oFFxlqJwPh9",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R21"
                        }, //Midwifery Professionals Unknown place of training
                        {
                            deuid: "oFFxlqJwPh9",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S21"
                        }, //Midwifery Professionals National Born
                        {
                            deuid: "oFFxlqJwPh9",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T21"
                        }, //Midwifery Professionals Foreign Born
                        {
                            deuid: "cbKXNee3ph3",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D22"
                        }, //Midwifery Associate Professionals Total
                        {
                            deuid: "cbKXNee3ph3",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E22"
                        }, //Midwifery Associate Professionals Practising
                        {
                            deuid: "cbKXNee3ph3",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F22"
                        }, //Midwifery Associate Professionals Professionally Active
                        {
                            deuid: "cbKXNee3ph3",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G22"
                        }, //Midwifery Associate Professionals Licensed to practice
                        {
                            deuid: "cbKXNee3ph3",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H22"
                        }, //Midwifery Associate Professionals Male
                        {
                            deuid: "cbKXNee3ph3",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I22"
                        }, //Midwifery Associate Professionals Female
                        {
                            deuid: "cbKXNee3ph3",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J22"
                        }, //Midwifery Associate Professionals <25 yrs
                        {
                            deuid: "cbKXNee3ph3",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K22"
                        }, //Midwifery Associate Professionals 25-34 yrs
                        {
                            deuid: "cbKXNee3ph3",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L22"
                        }, //Midwifery Associate Professionals 35-44 yrs
                        {
                            deuid: "cbKXNee3ph3",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M22"
                        }, //Midwifery Associate Professionals 45-54 yrs
                        {
                            deuid: "cbKXNee3ph3",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N22"
                        }, //Midwifery Associate Professionals 55-64 yrs
                        {
                            deuid: "cbKXNee3ph3",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O22"
                        }, //Midwifery Associate Professionals > 65 yrs
                        {
                            deuid: "cbKXNee3ph3",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P22"
                        }, //Midwifery Associate Professionals Domestically Trained
                        {
                            deuid: "cbKXNee3ph3",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q22"
                        }, //Midwifery Associate Professionals Foreign Trained
                        {
                            deuid: "cbKXNee3ph3",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R22"
                        }, //Midwifery Associate Professionals Unknown place of training
                        {
                            deuid: "cbKXNee3ph3",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S22"
                        }, //Midwifery Associate Professionals National Born
                        {
                            deuid: "cbKXNee3ph3",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T22"
                        }, //Midwifery Associate Professionals Foreign Born
                        {
                            deuid: "Fu7dDl4ppl7",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D23"
                        }, //Dentists Total
                        {
                            deuid: "Fu7dDl4ppl7",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E23"
                        }, //Dentists Practising
                        {
                            deuid: "Fu7dDl4ppl7",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F23"
                        }, //Dentists Professionally Active
                        {
                            deuid: "Fu7dDl4ppl7",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G23"
                        }, //Dentists Licensed to practice
                        {
                            deuid: "Fu7dDl4ppl7",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H23"
                        }, //Dentists Male
                        {
                            deuid: "Fu7dDl4ppl7",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I23"
                        }, //Dentists Female
                        {
                            deuid: "Fu7dDl4ppl7",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J23"
                        }, //Dentists <25 yrs
                        {
                            deuid: "Fu7dDl4ppl7",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K23"
                        }, //Dentists 25-34 yrs
                        {
                            deuid: "Fu7dDl4ppl7",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L23"
                        }, //Dentists 35-44 yrs
                        {
                            deuid: "Fu7dDl4ppl7",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M23"
                        }, //Dentists 45-54 yrs
                        {
                            deuid: "Fu7dDl4ppl7",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N23"
                        }, //Dentists 55-64 yrs
                        {
                            deuid: "Fu7dDl4ppl7",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O23"
                        }, //Dentists > 65 yrs
                        {
                            deuid: "Fu7dDl4ppl7",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P23"
                        }, //Dentists Domestically Trained
                        {
                            deuid: "Fu7dDl4ppl7",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q23"
                        }, //Dentists Foreign Trained
                        {
                            deuid: "Fu7dDl4ppl7",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R23"
                        }, //Dentists Unknown place of training
                        {
                            deuid: "Fu7dDl4ppl7",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S23"
                        }, //Dentists National Born
                        {
                            deuid: "Fu7dDl4ppl7",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T23"
                        }, //Dentists Foreign Born
                        {
                            deuid: "VSGJ4q08rpF",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D24"
                        }, //Dental Assistants and Therapists Total
                        {
                            deuid: "VSGJ4q08rpF",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E24"
                        }, //Dental Assistants and Therapists Practising
                        {
                            deuid: "VSGJ4q08rpF",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F24"
                        }, //Dental Assistants and Therapists Professionally Active
                        {
                            deuid: "VSGJ4q08rpF",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G24"
                        }, //Dental Assistants and Therapists Licensed to practice
                        {
                            deuid: "VSGJ4q08rpF",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H24"
                        }, //Dental Assistants and Therapists Male
                        {
                            deuid: "VSGJ4q08rpF",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I24"
                        }, //Dental Assistants and Therapists Female
                        {
                            deuid: "VSGJ4q08rpF",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J24"
                        }, //Dental Assistants and Therapists <25 yrs
                        {
                            deuid: "VSGJ4q08rpF",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K24"
                        }, //Dental Assistants and Therapists 25-34 yrs
                        {
                            deuid: "VSGJ4q08rpF",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L24"
                        }, //Dental Assistants and Therapists 35-44 yrs
                        {
                            deuid: "VSGJ4q08rpF",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M24"
                        }, //Dental Assistants and Therapists 45-54 yrs
                        {
                            deuid: "VSGJ4q08rpF",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N24"
                        }, //Dental Assistants and Therapists 55-64 yrs
                        {
                            deuid: "VSGJ4q08rpF",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O24"
                        }, //Dental Assistants and Therapists > 65 yrs
                        {
                            deuid: "VSGJ4q08rpF",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P24"
                        }, //Dental Assistants and Therapists Domestically Trained
                        {
                            deuid: "VSGJ4q08rpF",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q24"
                        }, //Dental Assistants and Therapists Foreign Trained
                        {
                            deuid: "VSGJ4q08rpF",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R24"
                        }, //Dental Assistants and Therapists Unknown place of training
                        {
                            deuid: "VSGJ4q08rpF",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S24"
                        }, //Dental Assistants and Therapists National Born
                        {
                            deuid: "VSGJ4q08rpF",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T24"
                        }, //Dental Assistants and Therapists Foreign Born
                        {
                            deuid: "yxxg9fnb8Wn",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D25"
                        }, //Dental Prosthetic Technicians Total
                        {
                            deuid: "yxxg9fnb8Wn",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E25"
                        }, //Dental Prosthetic Technicians Practising
                        {
                            deuid: "yxxg9fnb8Wn",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F25"
                        }, //Dental Prosthetic Technicians Professionally Active
                        {
                            deuid: "yxxg9fnb8Wn",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G25"
                        }, //Dental Prosthetic Technicians Licensed to practice
                        {
                            deuid: "yxxg9fnb8Wn",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H25"
                        }, //Dental Prosthetic Technicians Male
                        {
                            deuid: "yxxg9fnb8Wn",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I25"
                        }, //Dental Prosthetic Technicians Female
                        {
                            deuid: "yxxg9fnb8Wn",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J25"
                        }, //Dental Prosthetic Technicians <25 yrs
                        {
                            deuid: "yxxg9fnb8Wn",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K25"
                        }, //Dental Prosthetic Technicians 25-34 yrs
                        {
                            deuid: "yxxg9fnb8Wn",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L25"
                        }, //Dental Prosthetic Technicians 35-44 yrs
                        {
                            deuid: "yxxg9fnb8Wn",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M25"
                        }, //Dental Prosthetic Technicians 45-54 yrs
                        {
                            deuid: "yxxg9fnb8Wn",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N25"
                        }, //Dental Prosthetic Technicians 55-64 yrs
                        {
                            deuid: "yxxg9fnb8Wn",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O25"
                        }, //Dental Prosthetic Technicians > 65 yrs
                        {
                            deuid: "yxxg9fnb8Wn",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P25"
                        }, //Dental Prosthetic Technicians Domestically Trained
                        {
                            deuid: "yxxg9fnb8Wn",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q25"
                        }, //Dental Prosthetic Technicians Foreign Trained
                        {
                            deuid: "yxxg9fnb8Wn",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R25"
                        }, //Dental Prosthetic Technicians Unknown place of training
                        {
                            deuid: "yxxg9fnb8Wn",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S25"
                        }, //Dental Prosthetic Technicians National Born
                        {
                            deuid: "yxxg9fnb8Wn",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T25"
                        }, //Dental Prosthetic Technicians Foreign Born
                        {
                            deuid: "u6TBGqwClnr",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D26"
                        }, //Pharmacists Total
                        {
                            deuid: "u6TBGqwClnr",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E26"
                        }, //Pharmacists Practising
                        {
                            deuid: "u6TBGqwClnr",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F26"
                        }, //Pharmacists Professionally Active
                        {
                            deuid: "u6TBGqwClnr",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G26"
                        }, //Pharmacists Licensed to practice
                        {
                            deuid: "u6TBGqwClnr",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H26"
                        }, //Pharmacists Male
                        {
                            deuid: "u6TBGqwClnr",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I26"
                        }, //Pharmacists Female
                        {
                            deuid: "u6TBGqwClnr",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J26"
                        }, //Pharmacists <25 yrs
                        {
                            deuid: "u6TBGqwClnr",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K26"
                        }, //Pharmacists 25-34 yrs
                        {
                            deuid: "u6TBGqwClnr",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L26"
                        }, //Pharmacists 35-44 yrs
                        {
                            deuid: "u6TBGqwClnr",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M26"
                        }, //Pharmacists 45-54 yrs
                        {
                            deuid: "u6TBGqwClnr",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N26"
                        }, //Pharmacists 55-64 yrs
                        {
                            deuid: "u6TBGqwClnr",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O26"
                        }, //Pharmacists > 65 yrs
                        {
                            deuid: "u6TBGqwClnr",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P26"
                        }, //Pharmacists Domestically Trained
                        {
                            deuid: "u6TBGqwClnr",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q26"
                        }, //Pharmacists Foreign Trained
                        {
                            deuid: "u6TBGqwClnr",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R26"
                        }, //Pharmacists Unknown place of training
                        {
                            deuid: "u6TBGqwClnr",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S26"
                        }, //Pharmacists National Born
                        {
                            deuid: "u6TBGqwClnr",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T26"
                        }, //Pharmacists Foreign Born
                        {
                            deuid: "LDcUDhFFhPE",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D27"
                        }, //Pharmaceutical Technicians and Assistants Total
                        {
                            deuid: "LDcUDhFFhPE",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E27"
                        }, //Pharmaceutical Technicians and Assistants Practising
                        {
                            deuid: "LDcUDhFFhPE",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F27"
                        }, //Pharmaceutical Technicians and Assistants Professionally Active
                        {
                            deuid: "LDcUDhFFhPE",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G27"
                        }, //Pharmaceutical Technicians and Assistants Licensed to practice
                        {
                            deuid: "LDcUDhFFhPE",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H27"
                        }, //Pharmaceutical Technicians and Assistants Male
                        {
                            deuid: "LDcUDhFFhPE",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I27"
                        }, //Pharmaceutical Technicians and Assistants Female
                        {
                            deuid: "LDcUDhFFhPE",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J27"
                        }, //Pharmaceutical Technicians and Assistants <25 yrs
                        {
                            deuid: "LDcUDhFFhPE",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K27"
                        }, //Pharmaceutical Technicians and Assistants 25-34 yrs
                        {
                            deuid: "LDcUDhFFhPE",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L27"
                        }, //Pharmaceutical Technicians and Assistants 35-44 yrs
                        {
                            deuid: "LDcUDhFFhPE",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M27"
                        }, //Pharmaceutical Technicians and Assistants 45-54 yrs
                        {
                            deuid: "LDcUDhFFhPE",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N27"
                        }, //Pharmaceutical Technicians and Assistants 55-64 yrs
                        {
                            deuid: "LDcUDhFFhPE",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O27"
                        }, //Pharmaceutical Technicians and Assistants > 65 yrs
                        {
                            deuid: "LDcUDhFFhPE",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P27"
                        }, //Pharmaceutical Technicians and Assistants Domestically Trained
                        {
                            deuid: "LDcUDhFFhPE",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q27"
                        }, //Pharmaceutical Technicians and Assistants Foreign Trained
                        {
                            deuid: "LDcUDhFFhPE",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R27"
                        }, //Pharmaceutical Technicians and Assistants Unknown place of training
                        {
                            deuid: "LDcUDhFFhPE",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S27"
                        }, //Pharmaceutical Technicians and Assistants National Born
                        {
                            deuid: "LDcUDhFFhPE",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T27"
                        }, //Pharmaceutical Technicians and Assistants Foreign Born
                        {
                            deuid: "rC0WqacbfQH",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D28"
                        }, //Paramedical Practitioners Total
                        {
                            deuid: "rC0WqacbfQH",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E28"
                        }, //Paramedical Practitioners Practising
                        {
                            deuid: "rC0WqacbfQH",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F28"
                        }, //Paramedical Practitioners Professionally Active
                        {
                            deuid: "rC0WqacbfQH",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G28"
                        }, //Paramedical Practitioners Licensed to practice
                        {
                            deuid: "rC0WqacbfQH",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H28"
                        }, //Paramedical Practitioners Male
                        {
                            deuid: "rC0WqacbfQH",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I28"
                        }, //Paramedical Practitioners Female
                        {
                            deuid: "rC0WqacbfQH",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J28"
                        }, //Paramedical Practitioners <25 yrs
                        {
                            deuid: "rC0WqacbfQH",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K28"
                        }, //Paramedical Practitioners 25-34 yrs
                        {
                            deuid: "rC0WqacbfQH",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L28"
                        }, //Paramedical Practitioners 35-44 yrs
                        {
                            deuid: "rC0WqacbfQH",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M28"
                        }, //Paramedical Practitioners 45-54 yrs
                        {
                            deuid: "rC0WqacbfQH",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N28"
                        }, //Paramedical Practitioners 55-64 yrs
                        {
                            deuid: "rC0WqacbfQH",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O28"
                        }, //Paramedical Practitioners > 65 yrs
                        {
                            deuid: "rC0WqacbfQH",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P28"
                        }, //Paramedical Practitioners Domestically Trained
                        {
                            deuid: "rC0WqacbfQH",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q28"
                        }, //Paramedical Practitioners Foreign Trained
                        {
                            deuid: "rC0WqacbfQH",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R28"
                        }, //Paramedical Practitioners Unknown place of training
                        {
                            deuid: "rC0WqacbfQH",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S28"
                        }, //Paramedical Practitioners National Born
                        {
                            deuid: "rC0WqacbfQH",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T28"
                        }, //Paramedical Practitioners Foreign Born
                        {
                            deuid: "ZCSyNruyHGx",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D29"
                        }, //Medical and Pathology Laboratory scientists Total
                        {
                            deuid: "ZCSyNruyHGx",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E29"
                        }, //Medical and Pathology Laboratory scientists Practising
                        {
                            deuid: "ZCSyNruyHGx",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F29"
                        }, //Medical and Pathology Laboratory scientists Professionally Active
                        {
                            deuid: "ZCSyNruyHGx",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G29"
                        }, //Medical and Pathology Laboratory scientists Licensed to practice
                        {
                            deuid: "ZCSyNruyHGx",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H29"
                        }, //Medical and Pathology Laboratory scientists Male
                        {
                            deuid: "ZCSyNruyHGx",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I29"
                        }, //Medical and Pathology Laboratory scientists Female
                        {
                            deuid: "ZCSyNruyHGx",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J29"
                        }, //Medical and Pathology Laboratory scientists <25 yrs
                        {
                            deuid: "ZCSyNruyHGx",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K29"
                        }, //Medical and Pathology Laboratory scientists 25-34 yrs
                        {
                            deuid: "ZCSyNruyHGx",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L29"
                        }, //Medical and Pathology Laboratory scientists 35-44 yrs
                        {
                            deuid: "ZCSyNruyHGx",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M29"
                        }, //Medical and Pathology Laboratory scientists 45-54 yrs
                        {
                            deuid: "ZCSyNruyHGx",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N29"
                        }, //Medical and Pathology Laboratory scientists 55-64 yrs
                        {
                            deuid: "ZCSyNruyHGx",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O29"
                        }, //Medical and Pathology Laboratory scientists > 65 yrs
                        {
                            deuid: "ZCSyNruyHGx",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P29"
                        }, //Medical and Pathology Laboratory scientists Domestically Trained
                        {
                            deuid: "ZCSyNruyHGx",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q29"
                        }, //Medical and Pathology Laboratory scientists Foreign Trained
                        {
                            deuid: "ZCSyNruyHGx",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R29"
                        }, //Medical and Pathology Laboratory scientists Unknown place of training
                        {
                            deuid: "ZCSyNruyHGx",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S29"
                        }, //Medical and Pathology Laboratory scientists National Born
                        {
                            deuid: "ZCSyNruyHGx",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T29"
                        }, //Medical and Pathology Laboratory scientists Foreign Born
                        {
                            deuid: "HB5zWlG33mm",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D30"
                        }, //Medical Imaging and Therapeutic Equipment Technicians Total
                        {
                            deuid: "HB5zWlG33mm",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E30"
                        }, //Medical Imaging and Therapeutic Equipment Technicians Practising
                        {
                            deuid: "HB5zWlG33mm",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F30"
                        }, //Medical Imaging and Therapeutic Equipment Technicians Professionally Active
                        {
                            deuid: "HB5zWlG33mm",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G30"
                        }, //Medical Imaging and Therapeutic Equipment Technicians Licensed to practice
                        {
                            deuid: "HB5zWlG33mm",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H30"
                        }, //Medical Imaging and Therapeutic Equipment Technicians Male
                        {
                            deuid: "HB5zWlG33mm",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I30"
                        }, //Medical Imaging and Therapeutic Equipment Technicians Female
                        {
                            deuid: "HB5zWlG33mm",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J30"
                        }, //Medical Imaging and Therapeutic Equipment Technicians <25 yrs
                        {
                            deuid: "HB5zWlG33mm",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K30"
                        }, //Medical Imaging and Therapeutic Equipment Technicians 25-34 yrs
                        {
                            deuid: "HB5zWlG33mm",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L30"
                        }, //Medical Imaging and Therapeutic Equipment Technicians 35-44 yrs
                        {
                            deuid: "HB5zWlG33mm",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M30"
                        }, //Medical Imaging and Therapeutic Equipment Technicians 45-54 yrs
                        {
                            deuid: "HB5zWlG33mm",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N30"
                        }, //Medical Imaging and Therapeutic Equipment Technicians 55-64 yrs
                        {
                            deuid: "HB5zWlG33mm",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O30"
                        }, //Medical Imaging and Therapeutic Equipment Technicians > 65 yrs
                        {
                            deuid: "HB5zWlG33mm",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P30"
                        }, //Medical Imaging and Therapeutic Equipment Technicians Domestically Trained
                        {
                            deuid: "HB5zWlG33mm",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q30"
                        }, //Medical Imaging and Therapeutic Equipment Technicians Foreign Trained
                        {
                            deuid: "HB5zWlG33mm",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R30"
                        }, //Medical Imaging and Therapeutic Equipment Technicians Unknown place of training
                        {
                            deuid: "HB5zWlG33mm",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S30"
                        }, //Medical Imaging and Therapeutic Equipment Technicians National Born
                        {
                            deuid: "HB5zWlG33mm",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T30"
                        }, //Medical Imaging and Therapeutic Equipment Technicians Foreign Born
                        {
                            deuid: "ODDLeZOcCSb",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D31"
                        }, //Medical and Pathology Laboratory Technicians Total
                        {
                            deuid: "ODDLeZOcCSb",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E31"
                        }, //Medical and Pathology Laboratory Technicians Practising
                        {
                            deuid: "ODDLeZOcCSb",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F31"
                        }, //Medical and Pathology Laboratory Technicians Professionally Active
                        {
                            deuid: "ODDLeZOcCSb",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G31"
                        }, //Medical and Pathology Laboratory Technicians Licensed to practice
                        {
                            deuid: "ODDLeZOcCSb",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H31"
                        }, //Medical and Pathology Laboratory Technicians Male
                        {
                            deuid: "ODDLeZOcCSb",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I31"
                        }, //Medical and Pathology Laboratory Technicians Female
                        {
                            deuid: "ODDLeZOcCSb",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J31"
                        }, //Medical and Pathology Laboratory Technicians <25 yrs
                        {
                            deuid: "ODDLeZOcCSb",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K31"
                        }, //Medical and Pathology Laboratory Technicians 25-34 yrs
                        {
                            deuid: "ODDLeZOcCSb",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L31"
                        }, //Medical and Pathology Laboratory Technicians 35-44 yrs
                        {
                            deuid: "ODDLeZOcCSb",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M31"
                        }, //Medical and Pathology Laboratory Technicians 45-54 yrs
                        {
                            deuid: "ODDLeZOcCSb",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N31"
                        }, //Medical and Pathology Laboratory Technicians 55-64 yrs
                        {
                            deuid: "ODDLeZOcCSb",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O31"
                        }, //Medical and Pathology Laboratory Technicians > 65 yrs
                        {
                            deuid: "ODDLeZOcCSb",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P31"
                        }, //Medical and Pathology Laboratory Technicians Domestically Trained
                        {
                            deuid: "ODDLeZOcCSb",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q31"
                        }, //Medical and Pathology Laboratory Technicians Foreign Trained
                        {
                            deuid: "ODDLeZOcCSb",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R31"
                        }, //Medical and Pathology Laboratory Technicians Unknown place of training
                        {
                            deuid: "ODDLeZOcCSb",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S31"
                        }, //Medical and Pathology Laboratory Technicians National Born
                        {
                            deuid: "ODDLeZOcCSb",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T31"
                        }, //Medical and Pathology Laboratory Technicians Foreign Born
                        {
                            deuid: "Txswej5dG2x",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D32"
                        }, //Environmental and Occupational Health and Hygiene Professionals Total
                        {
                            deuid: "Txswej5dG2x",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E32"
                        }, //Environmental and Occupational Health and Hygiene Professionals Practising
                        {
                            deuid: "Txswej5dG2x",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F32"
                        }, //Environmental and Occupational Health and Hygiene Professionals Professionally Active
                        {
                            deuid: "Txswej5dG2x",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G32"
                        }, //Environmental and Occupational Health and Hygiene Professionals Licensed to practice
                        {
                            deuid: "Txswej5dG2x",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H32"
                        }, //Environmental and Occupational Health and Hygiene Professionals Male
                        {
                            deuid: "Txswej5dG2x",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I32"
                        }, //Environmental and Occupational Health and Hygiene Professionals Female
                        {
                            deuid: "Txswej5dG2x",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J32"
                        }, //Environmental and Occupational Health and Hygiene Professionals <25 yrs
                        {
                            deuid: "Txswej5dG2x",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K32"
                        }, //Environmental and Occupational Health and Hygiene Professionals 25-34 yrs
                        {
                            deuid: "Txswej5dG2x",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L32"
                        }, //Environmental and Occupational Health and Hygiene Professionals 35-44 yrs
                        {
                            deuid: "Txswej5dG2x",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M32"
                        }, //Environmental and Occupational Health and Hygiene Professionals 45-54 yrs
                        {
                            deuid: "Txswej5dG2x",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N32"
                        }, //Environmental and Occupational Health and Hygiene Professionals 55-64 yrs
                        {
                            deuid: "Txswej5dG2x",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O32"
                        }, //Environmental and Occupational Health and Hygiene Professionals > 65 yrs
                        {
                            deuid: "Txswej5dG2x",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P32"
                        }, //Environmental and Occupational Health and Hygiene Professionals Domestically Trained
                        {
                            deuid: "Txswej5dG2x",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q32"
                        }, //Environmental and Occupational Health and Hygiene Professionals Foreign Trained
                        {
                            deuid: "Txswej5dG2x",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R32"
                        }, //Environmental and Occupational Health and Hygiene Professionals Unknown place of training
                        {
                            deuid: "Txswej5dG2x",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S32"
                        }, //Environmental and Occupational Health and Hygiene Professionals National Born
                        {
                            deuid: "Txswej5dG2x",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T32"
                        }, //Environmental and Occupational Health and Hygiene Professionals Foreign Born
                        {
                            deuid: "TxLHP8S50Fn",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D33"
                        }, //Environmental and Occupational Health Inspectors and Associates Total
                        {
                            deuid: "TxLHP8S50Fn",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E33"
                        }, //Environmental and Occupational Health Inspectors and Associates Practising
                        {
                            deuid: "TxLHP8S50Fn",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F33"
                        }, //Environmental and Occupational Health Inspectors and Associates Professionally Active
                        {
                            deuid: "TxLHP8S50Fn",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G33"
                        }, //Environmental and Occupational Health Inspectors and Associates Licensed to practice
                        {
                            deuid: "TxLHP8S50Fn",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H33"
                        }, //Environmental and Occupational Health Inspectors and Associates Male
                        {
                            deuid: "TxLHP8S50Fn",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I33"
                        }, //Environmental and Occupational Health Inspectors and Associates Female
                        {
                            deuid: "TxLHP8S50Fn",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J33"
                        }, //Environmental and Occupational Health Inspectors and Associates <25 yrs
                        {
                            deuid: "TxLHP8S50Fn",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K33"
                        }, //Environmental and Occupational Health Inspectors and Associates 25-34 yrs
                        {
                            deuid: "TxLHP8S50Fn",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L33"
                        }, //Environmental and Occupational Health Inspectors and Associates 35-44 yrs
                        {
                            deuid: "TxLHP8S50Fn",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M33"
                        }, //Environmental and Occupational Health Inspectors and Associates 45-54 yrs
                        {
                            deuid: "TxLHP8S50Fn",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N33"
                        }, //Environmental and Occupational Health Inspectors and Associates 55-64 yrs
                        {
                            deuid: "TxLHP8S50Fn",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O33"
                        }, //Environmental and Occupational Health Inspectors and Associates > 65 yrs
                        {
                            deuid: "TxLHP8S50Fn",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P33"
                        }, //Environmental and Occupational Health Inspectors and Associates Domestically Trained
                        {
                            deuid: "TxLHP8S50Fn",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q33"
                        }, //Environmental and Occupational Health Inspectors and Associates Foreign Trained
                        {
                            deuid: "TxLHP8S50Fn",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R33"
                        }, //Environmental and Occupational Health Inspectors and Associates Unknown place of training
                        {
                            deuid: "TxLHP8S50Fn",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S33"
                        }, //Environmental and Occupational Health Inspectors and Associates National Born
                        {
                            deuid: "TxLHP8S50Fn",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T33"
                        }, //Environmental and Occupational Health Inspectors and Associates Foreign Born
                        {
                            deuid: "jVLDy3aFtFT",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D34"
                        }, //Traditional and Complementary Medicine Professionals Total
                        {
                            deuid: "jVLDy3aFtFT",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E34"
                        }, //Traditional and Complementary Medicine Professionals Practising
                        {
                            deuid: "jVLDy3aFtFT",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F34"
                        }, //Traditional and Complementary Medicine Professionals Professionally Active
                        {
                            deuid: "jVLDy3aFtFT",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G34"
                        }, //Traditional and Complementary Medicine Professionals Licensed to practice
                        {
                            deuid: "jVLDy3aFtFT",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H34"
                        }, //Traditional and Complementary Medicine Professionals Male
                        {
                            deuid: "jVLDy3aFtFT",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I34"
                        }, //Traditional and Complementary Medicine Professionals Female
                        {
                            deuid: "jVLDy3aFtFT",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J34"
                        }, //Traditional and Complementary Medicine Professionals <25 yrs
                        {
                            deuid: "jVLDy3aFtFT",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K34"
                        }, //Traditional and Complementary Medicine Professionals 25-34 yrs
                        {
                            deuid: "jVLDy3aFtFT",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L34"
                        }, //Traditional and Complementary Medicine Professionals 35-44 yrs
                        {
                            deuid: "jVLDy3aFtFT",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M34"
                        }, //Traditional and Complementary Medicine Professionals 45-54 yrs
                        {
                            deuid: "jVLDy3aFtFT",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N34"
                        }, //Traditional and Complementary Medicine Professionals 55-64 yrs
                        {
                            deuid: "jVLDy3aFtFT",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O34"
                        }, //Traditional and Complementary Medicine Professionals > 65 yrs
                        {
                            deuid: "jVLDy3aFtFT",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P34"
                        }, //Traditional and Complementary Medicine Professionals Domestically Trained
                        {
                            deuid: "jVLDy3aFtFT",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q34"
                        }, //Traditional and Complementary Medicine Professionals Foreign Trained
                        {
                            deuid: "jVLDy3aFtFT",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R34"
                        }, //Traditional and Complementary Medicine Professionals Unknown place of training
                        {
                            deuid: "jVLDy3aFtFT",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S34"
                        }, //Traditional and Complementary Medicine Professionals National Born
                        {
                            deuid: "jVLDy3aFtFT",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T34"
                        }, //Traditional and Complementary Medicine Professionals Foreign Born
                        {
                            deuid: "opYyTkO07JI",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D35"
                        }, //Traditional and Complementary Medicine Associate Professionals Total
                        {
                            deuid: "opYyTkO07JI",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E35"
                        }, //Traditional and Complementary Medicine Associate Professionals Practising
                        {
                            deuid: "opYyTkO07JI",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F35"
                        }, //Traditional and Complementary Medicine Associate Professionals Professionally Active
                        {
                            deuid: "opYyTkO07JI",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G35"
                        }, //Traditional and Complementary Medicine Associate Professionals Licensed to practice
                        {
                            deuid: "opYyTkO07JI",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H35"
                        }, //Traditional and Complementary Medicine Associate Professionals Male
                        {
                            deuid: "opYyTkO07JI",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I35"
                        }, //Traditional and Complementary Medicine Associate Professionals Female
                        {
                            deuid: "opYyTkO07JI",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J35"
                        }, //Traditional and Complementary Medicine Associate Professionals <25 yrs
                        {
                            deuid: "opYyTkO07JI",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K35"
                        }, //Traditional and Complementary Medicine Associate Professionals 25-34 yrs
                        {
                            deuid: "opYyTkO07JI",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L35"
                        }, //Traditional and Complementary Medicine Associate Professionals 35-44 yrs
                        {
                            deuid: "opYyTkO07JI",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M35"
                        }, //Traditional and Complementary Medicine Associate Professionals 45-54 yrs
                        {
                            deuid: "opYyTkO07JI",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N35"
                        }, //Traditional and Complementary Medicine Associate Professionals 55-64 yrs
                        {
                            deuid: "opYyTkO07JI",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O35"
                        }, //Traditional and Complementary Medicine Associate Professionals > 65 yrs
                        {
                            deuid: "opYyTkO07JI",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P35"
                        }, //Traditional and Complementary Medicine Associate Professionals Domestically Trained
                        {
                            deuid: "opYyTkO07JI",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q35"
                        }, //Traditional and Complementary Medicine Associate Professionals Foreign Trained
                        {
                            deuid: "opYyTkO07JI",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R35"
                        }, //Traditional and Complementary Medicine Associate Professionals Unknown place of training
                        {
                            deuid: "opYyTkO07JI",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S35"
                        }, //Traditional and Complementary Medicine Associate Professionals National Born
                        {
                            deuid: "opYyTkO07JI",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T35"
                        }, //Traditional and Complementary Medicine Associate Professionals Foreign Born
                        {
                            deuid: "xhYksqRC3Mq",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D36"
                        }, //Community Health Workers Total
                        {
                            deuid: "xhYksqRC3Mq",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E36"
                        }, //Community Health Workers Practising
                        {
                            deuid: "xhYksqRC3Mq",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F36"
                        }, //Community Health Workers Professionally Active
                        {
                            deuid: "xhYksqRC3Mq",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G36"
                        }, //Community Health Workers Licensed to practice
                        {
                            deuid: "xhYksqRC3Mq",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H36"
                        }, //Community Health Workers Male
                        {
                            deuid: "xhYksqRC3Mq",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I36"
                        }, //Community Health Workers Female
                        {
                            deuid: "xhYksqRC3Mq",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J36"
                        }, //Community Health Workers <25 yrs
                        {
                            deuid: "xhYksqRC3Mq",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K36"
                        }, //Community Health Workers 25-34 yrs
                        {
                            deuid: "xhYksqRC3Mq",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L36"
                        }, //Community Health Workers 35-44 yrs
                        {
                            deuid: "xhYksqRC3Mq",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M36"
                        }, //Community Health Workers 45-54 yrs
                        {
                            deuid: "xhYksqRC3Mq",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N36"
                        }, //Community Health Workers 55-64 yrs
                        {
                            deuid: "xhYksqRC3Mq",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O36"
                        }, //Community Health Workers > 65 yrs
                        {
                            deuid: "xhYksqRC3Mq",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P36"
                        }, //Community Health Workers Domestically Trained
                        {
                            deuid: "xhYksqRC3Mq",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q36"
                        }, //Community Health Workers Foreign Trained
                        {
                            deuid: "xhYksqRC3Mq",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R36"
                        }, //Community Health Workers Unknown place of training
                        {
                            deuid: "xhYksqRC3Mq",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S36"
                        }, //Community Health Workers National Born
                        {
                            deuid: "xhYksqRC3Mq",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T36"
                        }, //Community Health Workers Foreign Born
                        {
                            deuid: "TwMqJkdt6AV",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D37"
                        }, //Personal care workers Total
                        {
                            deuid: "TwMqJkdt6AV",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E37"
                        }, //Personal care workers Practising
                        {
                            deuid: "TwMqJkdt6AV",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F37"
                        }, //Personal care workers Professionally Active
                        {
                            deuid: "TwMqJkdt6AV",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G37"
                        }, //Personal care workers Licensed to practice
                        {
                            deuid: "TwMqJkdt6AV",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H37"
                        }, //Personal care workers Male
                        {
                            deuid: "TwMqJkdt6AV",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I37"
                        }, //Personal care workers Female
                        {
                            deuid: "TwMqJkdt6AV",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J37"
                        }, //Personal care workers <25 yrs
                        {
                            deuid: "TwMqJkdt6AV",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K37"
                        }, //Personal care workers 25-34 yrs
                        {
                            deuid: "TwMqJkdt6AV",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L37"
                        }, //Personal care workers 35-44 yrs
                        {
                            deuid: "TwMqJkdt6AV",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M37"
                        }, //Personal care workers 45-54 yrs
                        {
                            deuid: "TwMqJkdt6AV",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N37"
                        }, //Personal care workers 55-64 yrs
                        {
                            deuid: "TwMqJkdt6AV",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O37"
                        }, //Personal care workers > 65 yrs
                        {
                            deuid: "TwMqJkdt6AV",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P37"
                        }, //Personal care workers Domestically Trained
                        {
                            deuid: "TwMqJkdt6AV",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q37"
                        }, //Personal care workers Foreign Trained
                        {
                            deuid: "TwMqJkdt6AV",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R37"
                        }, //Personal care workers Unknown place of training
                        {
                            deuid: "TwMqJkdt6AV",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S37"
                        }, //Personal care workers National Born
                        {
                            deuid: "TwMqJkdt6AV",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T37"
                        }, //Personal care workers Foreign Born
                        {
                            deuid: "JyiJRmOLy5X",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D38"
                        }, //Health Care Assistants Total
                        {
                            deuid: "JyiJRmOLy5X",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E38"
                        }, //Health Care Assistants Practising
                        {
                            deuid: "JyiJRmOLy5X",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F38"
                        }, //Health Care Assistants Professionally Active
                        {
                            deuid: "JyiJRmOLy5X",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G38"
                        }, //Health Care Assistants Licensed to practice
                        {
                            deuid: "JyiJRmOLy5X",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H38"
                        }, //Health Care Assistants Male
                        {
                            deuid: "JyiJRmOLy5X",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I38"
                        }, //Health Care Assistants Female
                        {
                            deuid: "JyiJRmOLy5X",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J38"
                        }, //Health Care Assistants <25 yrs
                        {
                            deuid: "JyiJRmOLy5X",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K38"
                        }, //Health Care Assistants 25-34 yrs
                        {
                            deuid: "JyiJRmOLy5X",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L38"
                        }, //Health Care Assistants 35-44 yrs
                        {
                            deuid: "JyiJRmOLy5X",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M38"
                        }, //Health Care Assistants 45-54 yrs
                        {
                            deuid: "JyiJRmOLy5X",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N38"
                        }, //Health Care Assistants 55-64 yrs
                        {
                            deuid: "JyiJRmOLy5X",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O38"
                        }, //Health Care Assistants > 65 yrs
                        {
                            deuid: "JyiJRmOLy5X",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P38"
                        }, //Health Care Assistants Domestically Trained
                        {
                            deuid: "JyiJRmOLy5X",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q38"
                        }, //Health Care Assistants Foreign Trained
                        {
                            deuid: "JyiJRmOLy5X",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R38"
                        }, //Health Care Assistants Unknown place of training
                        {
                            deuid: "JyiJRmOLy5X",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S38"
                        }, //Health Care Assistants National Born
                        {
                            deuid: "JyiJRmOLy5X",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T38"
                        }, //Health Care Assistants Foreign Born
                        {
                            deuid: "ggvVrPZWZkH",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D39"
                        }, //Home-based Personal Care Workers Total
                        {
                            deuid: "ggvVrPZWZkH",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E39"
                        }, //Home-based Personal Care Workers Practising
                        {
                            deuid: "ggvVrPZWZkH",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F39"
                        }, //Home-based Personal Care Workers Professionally Active
                        {
                            deuid: "ggvVrPZWZkH",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G39"
                        }, //Home-based Personal Care Workers Licensed to practice
                        {
                            deuid: "ggvVrPZWZkH",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H39"
                        }, //Home-based Personal Care Workers Male
                        {
                            deuid: "ggvVrPZWZkH",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I39"
                        }, //Home-based Personal Care Workers Female
                        {
                            deuid: "ggvVrPZWZkH",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J39"
                        }, //Home-based Personal Care Workers <25 yrs
                        {
                            deuid: "ggvVrPZWZkH",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K39"
                        }, //Home-based Personal Care Workers 25-34 yrs
                        {
                            deuid: "ggvVrPZWZkH",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L39"
                        }, //Home-based Personal Care Workers 35-44 yrs
                        {
                            deuid: "ggvVrPZWZkH",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M39"
                        }, //Home-based Personal Care Workers 45-54 yrs
                        {
                            deuid: "ggvVrPZWZkH",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N39"
                        }, //Home-based Personal Care Workers 55-64 yrs
                        {
                            deuid: "ggvVrPZWZkH",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O39"
                        }, //Home-based Personal Care Workers > 65 yrs
                        {
                            deuid: "ggvVrPZWZkH",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P39"
                        }, //Home-based Personal Care Workers Domestically Trained
                        {
                            deuid: "ggvVrPZWZkH",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q39"
                        }, //Home-based Personal Care Workers Foreign Trained
                        {
                            deuid: "ggvVrPZWZkH",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R39"
                        }, //Home-based Personal Care Workers Unknown place of training
                        {
                            deuid: "ggvVrPZWZkH",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S39"
                        }, //Home-based Personal Care Workers National Born
                        {
                            deuid: "ggvVrPZWZkH",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T39"
                        }, //Home-based Personal Care Workers Foreign Born
                        {
                            deuid: "MPXGGAuhL0X",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D40"
                        }, //Personal care workers in health services n.e.c Total
                        {
                            deuid: "MPXGGAuhL0X",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E40"
                        }, //Personal care workers in health services n.e.c Practising
                        {
                            deuid: "MPXGGAuhL0X",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F40"
                        }, //Personal care workers in health services n.e.c Professionally Active
                        {
                            deuid: "MPXGGAuhL0X",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G40"
                        }, //Personal care workers in health services n.e.c Licensed to practice
                        {
                            deuid: "MPXGGAuhL0X",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H40"
                        }, //Personal care workers in health services n.e.c Male
                        {
                            deuid: "MPXGGAuhL0X",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I40"
                        }, //Personal care workers in health services n.e.c Female
                        {
                            deuid: "MPXGGAuhL0X",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J40"
                        }, //Personal care workers in health services n.e.c <25 yrs
                        {
                            deuid: "MPXGGAuhL0X",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K40"
                        }, //Personal care workers in health services n.e.c 25-34 yrs
                        {
                            deuid: "MPXGGAuhL0X",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L40"
                        }, //Personal care workers in health services n.e.c 35-44 yrs
                        {
                            deuid: "MPXGGAuhL0X",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M40"
                        }, //Personal care workers in health services n.e.c 45-54 yrs
                        {
                            deuid: "MPXGGAuhL0X",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N40"
                        }, //Personal care workers in health services n.e.c 55-64 yrs
                        {
                            deuid: "MPXGGAuhL0X",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O40"
                        }, //Personal care workers in health services n.e.c > 65 yrs
                        {
                            deuid: "MPXGGAuhL0X",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P40"
                        }, //Personal care workers in health services n.e.c Domestically Trained
                        {
                            deuid: "MPXGGAuhL0X",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q40"
                        }, //Personal care workers in health services n.e.c Foreign Trained
                        {
                            deuid: "MPXGGAuhL0X",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R40"
                        }, //Personal care workers in health services n.e.c Unknown place of training
                        {
                            deuid: "MPXGGAuhL0X",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S40"
                        }, //Personal care workers in health services n.e.c National Born
                        {
                            deuid: "MPXGGAuhL0X",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T40"
                        }, //Personal care workers in health services n.e.c Foreign Born
                        {
                            deuid: "a8439elcS8L",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D41"
                        }, //Physiotherapists Total
                        {
                            deuid: "a8439elcS8L",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E41"
                        }, //Physiotherapists Practising
                        {
                            deuid: "a8439elcS8L",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F41"
                        }, //Physiotherapists Professionally Active
                        {
                            deuid: "a8439elcS8L",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G41"
                        }, //Physiotherapists Licensed to practice
                        {
                            deuid: "a8439elcS8L",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H41"
                        }, //Physiotherapists Male
                        {
                            deuid: "a8439elcS8L",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I41"
                        }, //Physiotherapists Female
                        {
                            deuid: "a8439elcS8L",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J41"
                        }, //Physiotherapists <25 yrs
                        {
                            deuid: "a8439elcS8L",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K41"
                        }, //Physiotherapists 25-34 yrs
                        {
                            deuid: "a8439elcS8L",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L41"
                        }, //Physiotherapists 35-44 yrs
                        {
                            deuid: "a8439elcS8L",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M41"
                        }, //Physiotherapists 45-54 yrs
                        {
                            deuid: "a8439elcS8L",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N41"
                        }, //Physiotherapists 55-64 yrs
                        {
                            deuid: "a8439elcS8L",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O41"
                        }, //Physiotherapists > 65 yrs
                        {
                            deuid: "a8439elcS8L",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P41"
                        }, //Physiotherapists Domestically Trained
                        {
                            deuid: "a8439elcS8L",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q41"
                        }, //Physiotherapists Foreign Trained
                        {
                            deuid: "a8439elcS8L",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R41"
                        }, //Physiotherapists Unknown place of training
                        {
                            deuid: "a8439elcS8L",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S41"
                        }, //Physiotherapists National Born
                        {
                            deuid: "a8439elcS8L",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T41"
                        }, //Physiotherapists Foreign Born
                        {
                            deuid: "OZJdy5ZrHQA",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D42"
                        }, //Physiotherapy Technicians and Assistants Total
                        {
                            deuid: "OZJdy5ZrHQA",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E42"
                        }, //Physiotherapy Technicians and Assistants Practising
                        {
                            deuid: "OZJdy5ZrHQA",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F42"
                        }, //Physiotherapy Technicians and Assistants Professionally Active
                        {
                            deuid: "OZJdy5ZrHQA",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G42"
                        }, //Physiotherapy Technicians and Assistants Licensed to practice
                        {
                            deuid: "OZJdy5ZrHQA",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H42"
                        }, //Physiotherapy Technicians and Assistants Male
                        {
                            deuid: "OZJdy5ZrHQA",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I42"
                        }, //Physiotherapy Technicians and Assistants Female
                        {
                            deuid: "OZJdy5ZrHQA",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J42"
                        }, //Physiotherapy Technicians and Assistants <25 yrs
                        {
                            deuid: "OZJdy5ZrHQA",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K42"
                        }, //Physiotherapy Technicians and Assistants 25-34 yrs
                        {
                            deuid: "OZJdy5ZrHQA",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L42"
                        }, //Physiotherapy Technicians and Assistants 35-44 yrs
                        {
                            deuid: "OZJdy5ZrHQA",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M42"
                        }, //Physiotherapy Technicians and Assistants 45-54 yrs
                        {
                            deuid: "OZJdy5ZrHQA",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N42"
                        }, //Physiotherapy Technicians and Assistants 55-64 yrs
                        {
                            deuid: "OZJdy5ZrHQA",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O42"
                        }, //Physiotherapy Technicians and Assistants > 65 yrs
                        {
                            deuid: "OZJdy5ZrHQA",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P42"
                        }, //Physiotherapy Technicians and Assistants Domestically Trained
                        {
                            deuid: "OZJdy5ZrHQA",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q42"
                        }, //Physiotherapy Technicians and Assistants Foreign Trained
                        {
                            deuid: "OZJdy5ZrHQA",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R42"
                        }, //Physiotherapy Technicians and Assistants Unknown place of training
                        {
                            deuid: "OZJdy5ZrHQA",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S42"
                        }, //Physiotherapy Technicians and Assistants National Born
                        {
                            deuid: "OZJdy5ZrHQA",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T42"
                        }, //Physiotherapy Technicians and Assistants Foreign Born
                        {
                            deuid: "oxd7sTFC9BS",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D43"
                        }, //Dieticians Total
                        {
                            deuid: "oxd7sTFC9BS",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E43"
                        }, //Dieticians Practising
                        {
                            deuid: "oxd7sTFC9BS",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F43"
                        }, //Dieticians Professionally Active
                        {
                            deuid: "oxd7sTFC9BS",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G43"
                        }, //Dieticians Licensed to practice
                        {
                            deuid: "oxd7sTFC9BS",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H43"
                        }, //Dieticians Male
                        {
                            deuid: "oxd7sTFC9BS",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I43"
                        }, //Dieticians Female
                        {
                            deuid: "oxd7sTFC9BS",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J43"
                        }, //Dieticians <25 yrs
                        {
                            deuid: "oxd7sTFC9BS",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K43"
                        }, //Dieticians 25-34 yrs
                        {
                            deuid: "oxd7sTFC9BS",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L43"
                        }, //Dieticians 35-44 yrs
                        {
                            deuid: "oxd7sTFC9BS",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M43"
                        }, //Dieticians 45-54 yrs
                        {
                            deuid: "oxd7sTFC9BS",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N43"
                        }, //Dieticians 55-64 yrs
                        {
                            deuid: "oxd7sTFC9BS",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O43"
                        }, //Dieticians > 65 yrs
                        {
                            deuid: "oxd7sTFC9BS",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P43"
                        }, //Dieticians Domestically Trained
                        {
                            deuid: "oxd7sTFC9BS",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q43"
                        }, //Dieticians Foreign Trained
                        {
                            deuid: "oxd7sTFC9BS",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R43"
                        }, //Dieticians Unknown place of training
                        {
                            deuid: "oxd7sTFC9BS",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S43"
                        }, //Dieticians National Born
                        {
                            deuid: "oxd7sTFC9BS",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T43"
                        }, //Dieticians Foreign Born
                        {
                            deuid: "vgh8zEz1WpS",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D44"
                        }, //Nutritionists Total
                        {
                            deuid: "vgh8zEz1WpS",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E44"
                        }, //Nutritionists Practising
                        {
                            deuid: "vgh8zEz1WpS",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F44"
                        }, //Nutritionists Professionally Active
                        {
                            deuid: "vgh8zEz1WpS",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G44"
                        }, //Nutritionists Licensed to practice
                        {
                            deuid: "vgh8zEz1WpS",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H44"
                        }, //Nutritionists Male
                        {
                            deuid: "vgh8zEz1WpS",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I44"
                        }, //Nutritionists Female
                        {
                            deuid: "vgh8zEz1WpS",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J44"
                        }, //Nutritionists <25 yrs
                        {
                            deuid: "vgh8zEz1WpS",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K44"
                        }, //Nutritionists 25-34 yrs
                        {
                            deuid: "vgh8zEz1WpS",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L44"
                        }, //Nutritionists 35-44 yrs
                        {
                            deuid: "vgh8zEz1WpS",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M44"
                        }, //Nutritionists 45-54 yrs
                        {
                            deuid: "vgh8zEz1WpS",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N44"
                        }, //Nutritionists 55-64 yrs
                        {
                            deuid: "vgh8zEz1WpS",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O44"
                        }, //Nutritionists > 65 yrs
                        {
                            deuid: "vgh8zEz1WpS",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P44"
                        }, //Nutritionists Domestically Trained
                        {
                            deuid: "vgh8zEz1WpS",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q44"
                        }, //Nutritionists Foreign Trained
                        {
                            deuid: "vgh8zEz1WpS",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R44"
                        }, //Nutritionists Unknown place of training
                        {
                            deuid: "vgh8zEz1WpS",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S44"
                        }, //Nutritionists National Born
                        {
                            deuid: "vgh8zEz1WpS",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T44"
                        }, //Nutritionists Foreign Born
                        {
                            deuid: "FhXwIMSsSe6",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D45"
                        }, //Audiologists and Speech Therapists Total
                        {
                            deuid: "FhXwIMSsSe6",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E45"
                        }, //Audiologists and Speech Therapists Practising
                        {
                            deuid: "FhXwIMSsSe6",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F45"
                        }, //Audiologists and Speech Therapists Professionally Active
                        {
                            deuid: "FhXwIMSsSe6",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G45"
                        }, //Audiologists and Speech Therapists Licensed to practice
                        {
                            deuid: "FhXwIMSsSe6",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H45"
                        }, //Audiologists and Speech Therapists Male
                        {
                            deuid: "FhXwIMSsSe6",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I45"
                        }, //Audiologists and Speech Therapists Female
                        {
                            deuid: "FhXwIMSsSe6",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J45"
                        }, //Audiologists and Speech Therapists <25 yrs
                        {
                            deuid: "FhXwIMSsSe6",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K45"
                        }, //Audiologists and Speech Therapists 25-34 yrs
                        {
                            deuid: "FhXwIMSsSe6",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L45"
                        }, //Audiologists and Speech Therapists 35-44 yrs
                        {
                            deuid: "FhXwIMSsSe6",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M45"
                        }, //Audiologists and Speech Therapists 45-54 yrs
                        {
                            deuid: "FhXwIMSsSe6",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N45"
                        }, //Audiologists and Speech Therapists 55-64 yrs
                        {
                            deuid: "FhXwIMSsSe6",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O45"
                        }, //Audiologists and Speech Therapists > 65 yrs
                        {
                            deuid: "FhXwIMSsSe6",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P45"
                        }, //Audiologists and Speech Therapists Domestically Trained
                        {
                            deuid: "FhXwIMSsSe6",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q45"
                        }, //Audiologists and Speech Therapists Foreign Trained
                        {
                            deuid: "FhXwIMSsSe6",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R45"
                        }, //Audiologists and Speech Therapists Unknown place of training
                        {
                            deuid: "FhXwIMSsSe6",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S45"
                        }, //Audiologists and Speech Therapists National Born
                        {
                            deuid: "FhXwIMSsSe6",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T45"
                        }, //Audiologists and Speech Therapists Foreign Born
                        {
                            deuid: "UsC3BMF3UfH",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D46"
                        }, //Optometrists and Ophthalmic Opticians Total
                        {
                            deuid: "UsC3BMF3UfH",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E46"
                        }, //Optometrists and Ophthalmic Opticians Practising
                        {
                            deuid: "UsC3BMF3UfH",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F46"
                        }, //Optometrists and Ophthalmic Opticians Professionally Active
                        {
                            deuid: "UsC3BMF3UfH",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G46"
                        }, //Optometrists and Ophthalmic Opticians Licensed to practice
                        {
                            deuid: "UsC3BMF3UfH",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H46"
                        }, //Optometrists and Ophthalmic Opticians Male
                        {
                            deuid: "UsC3BMF3UfH",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I46"
                        }, //Optometrists and Ophthalmic Opticians Female
                        {
                            deuid: "UsC3BMF3UfH",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J46"
                        }, //Optometrists and Ophthalmic Opticians <25 yrs
                        {
                            deuid: "UsC3BMF3UfH",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K46"
                        }, //Optometrists and Ophthalmic Opticians 25-34 yrs
                        {
                            deuid: "UsC3BMF3UfH",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L46"
                        }, //Optometrists and Ophthalmic Opticians 35-44 yrs
                        {
                            deuid: "UsC3BMF3UfH",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M46"
                        }, //Optometrists and Ophthalmic Opticians 45-54 yrs
                        {
                            deuid: "UsC3BMF3UfH",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N46"
                        }, //Optometrists and Ophthalmic Opticians 55-64 yrs
                        {
                            deuid: "UsC3BMF3UfH",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O46"
                        }, //Optometrists and Ophthalmic Opticians > 65 yrs
                        {
                            deuid: "UsC3BMF3UfH",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P46"
                        }, //Optometrists and Ophthalmic Opticians Domestically Trained
                        {
                            deuid: "UsC3BMF3UfH",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q46"
                        }, //Optometrists and Ophthalmic Opticians Foreign Trained
                        {
                            deuid: "UsC3BMF3UfH",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R46"
                        }, //Optometrists and Ophthalmic Opticians Unknown place of training
                        {
                            deuid: "UsC3BMF3UfH",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S46"
                        }, //Optometrists and Ophthalmic Opticians National Born
                        {
                            deuid: "UsC3BMF3UfH",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T46"
                        }, //Optometrists and Ophthalmic Opticians Foreign Born
                        {
                            deuid: "zTdT8BRGwE2",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D47"
                        }, //Dispensing Opticians Total
                        {
                            deuid: "zTdT8BRGwE2",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E47"
                        }, //Dispensing Opticians Practising
                        {
                            deuid: "zTdT8BRGwE2",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F47"
                        }, //Dispensing Opticians Professionally Active
                        {
                            deuid: "zTdT8BRGwE2",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G47"
                        }, //Dispensing Opticians Licensed to practice
                        {
                            deuid: "zTdT8BRGwE2",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H47"
                        }, //Dispensing Opticians Male
                        {
                            deuid: "zTdT8BRGwE2",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I47"
                        }, //Dispensing Opticians Female
                        {
                            deuid: "zTdT8BRGwE2",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J47"
                        }, //Dispensing Opticians <25 yrs
                        {
                            deuid: "zTdT8BRGwE2",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K47"
                        }, //Dispensing Opticians 25-34 yrs
                        {
                            deuid: "zTdT8BRGwE2",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L47"
                        }, //Dispensing Opticians 35-44 yrs
                        {
                            deuid: "zTdT8BRGwE2",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M47"
                        }, //Dispensing Opticians 45-54 yrs
                        {
                            deuid: "zTdT8BRGwE2",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N47"
                        }, //Dispensing Opticians 55-64 yrs
                        {
                            deuid: "zTdT8BRGwE2",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O47"
                        }, //Dispensing Opticians > 65 yrs
                        {
                            deuid: "zTdT8BRGwE2",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P47"
                        }, //Dispensing Opticians Domestically Trained
                        {
                            deuid: "zTdT8BRGwE2",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q47"
                        }, //Dispensing Opticians Foreign Trained
                        {
                            deuid: "zTdT8BRGwE2",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R47"
                        }, //Dispensing Opticians Unknown place of training
                        {
                            deuid: "zTdT8BRGwE2",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S47"
                        }, //Dispensing Opticians National Born
                        {
                            deuid: "zTdT8BRGwE2",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T47"
                        }, //Dispensing Opticians Foreign Born
                        {
                            deuid: "WbKGNRLpmwG",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D48"
                        }, //Medical Prosthetic Technicians Total
                        {
                            deuid: "WbKGNRLpmwG",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E48"
                        }, //Medical Prosthetic Technicians Practising
                        {
                            deuid: "WbKGNRLpmwG",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F48"
                        }, //Medical Prosthetic Technicians Professionally Active
                        {
                            deuid: "WbKGNRLpmwG",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G48"
                        }, //Medical Prosthetic Technicians Licensed to practice
                        {
                            deuid: "WbKGNRLpmwG",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H48"
                        }, //Medical Prosthetic Technicians Male
                        {
                            deuid: "WbKGNRLpmwG",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I48"
                        }, //Medical Prosthetic Technicians Female
                        {
                            deuid: "WbKGNRLpmwG",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J48"
                        }, //Medical Prosthetic Technicians <25 yrs
                        {
                            deuid: "WbKGNRLpmwG",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K48"
                        }, //Medical Prosthetic Technicians 25-34 yrs
                        {
                            deuid: "WbKGNRLpmwG",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L48"
                        }, //Medical Prosthetic Technicians 35-44 yrs
                        {
                            deuid: "WbKGNRLpmwG",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M48"
                        }, //Medical Prosthetic Technicians 45-54 yrs
                        {
                            deuid: "WbKGNRLpmwG",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N48"
                        }, //Medical Prosthetic Technicians 55-64 yrs
                        {
                            deuid: "WbKGNRLpmwG",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O48"
                        }, //Medical Prosthetic Technicians > 65 yrs
                        {
                            deuid: "WbKGNRLpmwG",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P48"
                        }, //Medical Prosthetic Technicians Domestically Trained
                        {
                            deuid: "WbKGNRLpmwG",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q48"
                        }, //Medical Prosthetic Technicians Foreign Trained
                        {
                            deuid: "WbKGNRLpmwG",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R48"
                        }, //Medical Prosthetic Technicians Unknown place of training
                        {
                            deuid: "WbKGNRLpmwG",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S48"
                        }, //Medical Prosthetic Technicians National Born
                        {
                            deuid: "WbKGNRLpmwG",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T48"
                        }, //Medical Prosthetic Technicians Foreign Born
                        {
                            deuid: "PDaxfrOTNbP",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D49"
                        }, //Medical Records and Health Information Technicians Total
                        {
                            deuid: "PDaxfrOTNbP",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E49"
                        }, //Medical Records and Health Information Technicians Practising
                        {
                            deuid: "PDaxfrOTNbP",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F49"
                        }, //Medical Records and Health Information Technicians Professionally Active
                        {
                            deuid: "PDaxfrOTNbP",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G49"
                        }, //Medical Records and Health Information Technicians Licensed to practice
                        {
                            deuid: "PDaxfrOTNbP",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H49"
                        }, //Medical Records and Health Information Technicians Male
                        {
                            deuid: "PDaxfrOTNbP",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I49"
                        }, //Medical Records and Health Information Technicians Female
                        {
                            deuid: "PDaxfrOTNbP",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J49"
                        }, //Medical Records and Health Information Technicians <25 yrs
                        {
                            deuid: "PDaxfrOTNbP",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K49"
                        }, //Medical Records and Health Information Technicians 25-34 yrs
                        {
                            deuid: "PDaxfrOTNbP",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L49"
                        }, //Medical Records and Health Information Technicians 35-44 yrs
                        {
                            deuid: "PDaxfrOTNbP",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M49"
                        }, //Medical Records and Health Information Technicians 45-54 yrs
                        {
                            deuid: "PDaxfrOTNbP",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N49"
                        }, //Medical Records and Health Information Technicians 55-64 yrs
                        {
                            deuid: "PDaxfrOTNbP",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O49"
                        }, //Medical Records and Health Information Technicians > 65 yrs
                        {
                            deuid: "PDaxfrOTNbP",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P49"
                        }, //Medical Records and Health Information Technicians Domestically Trained
                        {
                            deuid: "PDaxfrOTNbP",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q49"
                        }, //Medical Records and Health Information Technicians Foreign Trained
                        {
                            deuid: "PDaxfrOTNbP",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R49"
                        }, //Medical Records and Health Information Technicians Unknown place of training
                        {
                            deuid: "PDaxfrOTNbP",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S49"
                        }, //Medical Records and Health Information Technicians National Born
                        {
                            deuid: "PDaxfrOTNbP",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T49"
                        }, //Medical Records and Health Information Technicians Foreign Born
                        {
                            deuid: "AdDFDID6k9W",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D50"
                        }, //Medical Assistants Total
                        {
                            deuid: "AdDFDID6k9W",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E50"
                        }, //Medical Assistants Practising
                        {
                            deuid: "AdDFDID6k9W",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F50"
                        }, //Medical Assistants Professionally Active
                        {
                            deuid: "AdDFDID6k9W",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G50"
                        }, //Medical Assistants Licensed to practice
                        {
                            deuid: "AdDFDID6k9W",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H50"
                        }, //Medical Assistants Male
                        {
                            deuid: "AdDFDID6k9W",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I50"
                        }, //Medical Assistants Female
                        {
                            deuid: "AdDFDID6k9W",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J50"
                        }, //Medical Assistants <25 yrs
                        {
                            deuid: "AdDFDID6k9W",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K50"
                        }, //Medical Assistants 25-34 yrs
                        {
                            deuid: "AdDFDID6k9W",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L50"
                        }, //Medical Assistants 35-44 yrs
                        {
                            deuid: "AdDFDID6k9W",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M50"
                        }, //Medical Assistants 45-54 yrs
                        {
                            deuid: "AdDFDID6k9W",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N50"
                        }, //Medical Assistants 55-64 yrs
                        {
                            deuid: "AdDFDID6k9W",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O50"
                        }, //Medical Assistants > 65 yrs
                        {
                            deuid: "AdDFDID6k9W",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P50"
                        }, //Medical Assistants Domestically Trained
                        {
                            deuid: "AdDFDID6k9W",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q50"
                        }, //Medical Assistants Foreign Trained
                        {
                            deuid: "AdDFDID6k9W",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R50"
                        }, //Medical Assistants Unknown place of training
                        {
                            deuid: "AdDFDID6k9W",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S50"
                        }, //Medical Assistants National Born
                        {
                            deuid: "AdDFDID6k9W",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T50"
                        }, //Medical Assistants Foreign Born
                        {
                            deuid: "AwitV0Jocja",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D51"
                        }, //Ambulance Workers Total
                        {
                            deuid: "AwitV0Jocja",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E51"
                        }, //Ambulance Workers Practising
                        {
                            deuid: "AwitV0Jocja",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F51"
                        }, //Ambulance Workers Professionally Active
                        {
                            deuid: "AwitV0Jocja",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G51"
                        }, //Ambulance Workers Licensed to practice
                        {
                            deuid: "AwitV0Jocja",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H51"
                        }, //Ambulance Workers Male
                        {
                            deuid: "AwitV0Jocja",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I51"
                        }, //Ambulance Workers Female
                        {
                            deuid: "AwitV0Jocja",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J51"
                        }, //Ambulance Workers <25 yrs
                        {
                            deuid: "AwitV0Jocja",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K51"
                        }, //Ambulance Workers 25-34 yrs
                        {
                            deuid: "AwitV0Jocja",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L51"
                        }, //Ambulance Workers 35-44 yrs
                        {
                            deuid: "AwitV0Jocja",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M51"
                        }, //Ambulance Workers 45-54 yrs
                        {
                            deuid: "AwitV0Jocja",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N51"
                        }, //Ambulance Workers 55-64 yrs
                        {
                            deuid: "AwitV0Jocja",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O51"
                        }, //Ambulance Workers > 65 yrs
                        {
                            deuid: "AwitV0Jocja",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P51"
                        }, //Ambulance Workers Domestically Trained
                        {
                            deuid: "AwitV0Jocja",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q51"
                        }, //Ambulance Workers Foreign Trained
                        {
                            deuid: "AwitV0Jocja",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R51"
                        }, //Ambulance Workers Unknown place of training
                        {
                            deuid: "AwitV0Jocja",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S51"
                        }, //Ambulance Workers National Born
                        {
                            deuid: "AwitV0Jocja",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T51"
                        }, //Ambulance Workers Foreign Born
                        {
                            deuid: "PYdi9KKaylg",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D52"
                        }, //Social work and counselling professionals Total
                        {
                            deuid: "PYdi9KKaylg",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E52"
                        }, //Social work and counselling professionals Practising
                        {
                            deuid: "PYdi9KKaylg",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F52"
                        }, //Social work and counselling professionals Professionally Active
                        {
                            deuid: "PYdi9KKaylg",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G52"
                        }, //Social work and counselling professionals Licensed to practice
                        {
                            deuid: "PYdi9KKaylg",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H52"
                        }, //Social work and counselling professionals Male
                        {
                            deuid: "PYdi9KKaylg",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I52"
                        }, //Social work and counselling professionals Female
                        {
                            deuid: "PYdi9KKaylg",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J52"
                        }, //Social work and counselling professionals <25 yrs
                        {
                            deuid: "PYdi9KKaylg",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K52"
                        }, //Social work and counselling professionals 25-34 yrs
                        {
                            deuid: "PYdi9KKaylg",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L52"
                        }, //Social work and counselling professionals 35-44 yrs
                        {
                            deuid: "PYdi9KKaylg",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M52"
                        }, //Social work and counselling professionals 45-54 yrs
                        {
                            deuid: "PYdi9KKaylg",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N52"
                        }, //Social work and counselling professionals 55-64 yrs
                        {
                            deuid: "PYdi9KKaylg",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O52"
                        }, //Social work and counselling professionals > 65 yrs
                        {
                            deuid: "PYdi9KKaylg",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P52"
                        }, //Social work and counselling professionals Domestically Trained
                        {
                            deuid: "PYdi9KKaylg",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q52"
                        }, //Social work and counselling professionals Foreign Trained
                        {
                            deuid: "PYdi9KKaylg",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R52"
                        }, //Social work and counselling professionals Unknown place of training
                        {
                            deuid: "PYdi9KKaylg",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S52"
                        }, //Social work and counselling professionals National Born
                        {
                            deuid: "PYdi9KKaylg",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T52"
                        }, //Social work and counselling professionals Foreign Born
                        {
                            deuid: "FjX1rlm2TtA",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D53"
                        }, //Social work associate professionals Total
                        {
                            deuid: "FjX1rlm2TtA",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E53"
                        }, //Social work associate professionals Practising
                        {
                            deuid: "FjX1rlm2TtA",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F53"
                        }, //Social work associate professionals Professionally Active
                        {
                            deuid: "FjX1rlm2TtA",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G53"
                        }, //Social work associate professionals Licensed to practice
                        {
                            deuid: "FjX1rlm2TtA",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H53"
                        }, //Social work associate professionals Male
                        {
                            deuid: "FjX1rlm2TtA",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I53"
                        }, //Social work associate professionals Female
                        {
                            deuid: "FjX1rlm2TtA",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J53"
                        }, //Social work associate professionals <25 yrs
                        {
                            deuid: "FjX1rlm2TtA",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K53"
                        }, //Social work associate professionals 25-34 yrs
                        {
                            deuid: "FjX1rlm2TtA",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L53"
                        }, //Social work associate professionals 35-44 yrs
                        {
                            deuid: "FjX1rlm2TtA",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M53"
                        }, //Social work associate professionals 45-54 yrs
                        {
                            deuid: "FjX1rlm2TtA",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N53"
                        }, //Social work associate professionals 55-64 yrs
                        {
                            deuid: "FjX1rlm2TtA",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O53"
                        }, //Social work associate professionals > 65 yrs
                        {
                            deuid: "FjX1rlm2TtA",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P53"
                        }, //Social work associate professionals Domestically Trained
                        {
                            deuid: "FjX1rlm2TtA",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q53"
                        }, //Social work associate professionals Foreign Trained
                        {
                            deuid: "FjX1rlm2TtA",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R53"
                        }, //Social work associate professionals Unknown place of training
                        {
                            deuid: "FjX1rlm2TtA",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S53"
                        }, //Social work associate professionals National Born
                        {
                            deuid: "FjX1rlm2TtA",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T53"
                        }, //Social work associate professionals Foreign Born
                        {
                            deuid: "o6gD9w1myBu",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D54"
                        }, //Biomedical engineer Total
                        {
                            deuid: "o6gD9w1myBu",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E54"
                        }, //Biomedical engineer Practising
                        {
                            deuid: "o6gD9w1myBu",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F54"
                        }, //Biomedical engineer Professionally Active
                        {
                            deuid: "o6gD9w1myBu",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G54"
                        }, //Biomedical engineer Licensed to practice
                        {
                            deuid: "o6gD9w1myBu",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H54"
                        }, //Biomedical engineer Male
                        {
                            deuid: "o6gD9w1myBu",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I54"
                        }, //Biomedical engineer Female
                        {
                            deuid: "o6gD9w1myBu",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J54"
                        }, //Biomedical engineer <25 yrs
                        {
                            deuid: "o6gD9w1myBu",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K54"
                        }, //Biomedical engineer 25-34 yrs
                        {
                            deuid: "o6gD9w1myBu",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L54"
                        }, //Biomedical engineer 35-44 yrs
                        {
                            deuid: "o6gD9w1myBu",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M54"
                        }, //Biomedical engineer 45-54 yrs
                        {
                            deuid: "o6gD9w1myBu",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N54"
                        }, //Biomedical engineer 55-64 yrs
                        {
                            deuid: "o6gD9w1myBu",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O54"
                        }, //Biomedical engineer > 65 yrs
                        {
                            deuid: "o6gD9w1myBu",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P54"
                        }, //Biomedical engineer Domestically Trained
                        {
                            deuid: "o6gD9w1myBu",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q54"
                        }, //Biomedical engineer Foreign Trained
                        {
                            deuid: "o6gD9w1myBu",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R54"
                        }, //Biomedical engineer Unknown place of training
                        {
                            deuid: "o6gD9w1myBu",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S54"
                        }, //Biomedical engineer National Born
                        {
                            deuid: "o6gD9w1myBu",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T54"
                        }, //Biomedical engineer Foreign Born
                        {
                            deuid: "j2ZNUH6erBa",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D55"
                        }, //Psychologists Total
                        {
                            deuid: "j2ZNUH6erBa",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E55"
                        }, //Psychologists Practising
                        {
                            deuid: "j2ZNUH6erBa",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F55"
                        }, //Psychologists Professionally Active
                        {
                            deuid: "j2ZNUH6erBa",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G55"
                        }, //Psychologists Licensed to practice
                        {
                            deuid: "j2ZNUH6erBa",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H55"
                        }, //Psychologists Male
                        {
                            deuid: "j2ZNUH6erBa",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I55"
                        }, //Psychologists Female
                        {
                            deuid: "j2ZNUH6erBa",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J55"
                        }, //Psychologists <25 yrs
                        {
                            deuid: "j2ZNUH6erBa",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K55"
                        }, //Psychologists 25-34 yrs
                        {
                            deuid: "j2ZNUH6erBa",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L55"
                        }, //Psychologists 35-44 yrs
                        {
                            deuid: "j2ZNUH6erBa",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M55"
                        }, //Psychologists 45-54 yrs
                        {
                            deuid: "j2ZNUH6erBa",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N55"
                        }, //Psychologists 55-64 yrs
                        {
                            deuid: "j2ZNUH6erBa",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O55"
                        }, //Psychologists > 65 yrs
                        {
                            deuid: "j2ZNUH6erBa",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P55"
                        }, //Psychologists Domestically Trained
                        {
                            deuid: "j2ZNUH6erBa",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q55"
                        }, //Psychologists Foreign Trained
                        {
                            deuid: "j2ZNUH6erBa",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R55"
                        }, //Psychologists Unknown place of training
                        {
                            deuid: "j2ZNUH6erBa",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S55"
                        }, //Psychologists National Born
                        {
                            deuid: "j2ZNUH6erBa",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T55"
                        }, //Psychologists Foreign Born
                        {
                            deuid: "hUEUvVTNJ9P",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D56"
                        }, //Medical secretaries Total
                        {
                            deuid: "hUEUvVTNJ9P",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E56"
                        }, //Medical secretaries Practising
                        {
                            deuid: "hUEUvVTNJ9P",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F56"
                        }, //Medical secretaries Professionally Active
                        {
                            deuid: "hUEUvVTNJ9P",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G56"
                        }, //Medical secretaries Licensed to practice
                        {
                            deuid: "hUEUvVTNJ9P",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H56"
                        }, //Medical secretaries Male
                        {
                            deuid: "hUEUvVTNJ9P",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I56"
                        }, //Medical secretaries Female
                        {
                            deuid: "hUEUvVTNJ9P",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J56"
                        }, //Medical secretaries <25 yrs
                        {
                            deuid: "hUEUvVTNJ9P",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K56"
                        }, //Medical secretaries 25-34 yrs
                        {
                            deuid: "hUEUvVTNJ9P",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L56"
                        }, //Medical secretaries 35-44 yrs
                        {
                            deuid: "hUEUvVTNJ9P",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M56"
                        }, //Medical secretaries 45-54 yrs
                        {
                            deuid: "hUEUvVTNJ9P",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N56"
                        }, //Medical secretaries 55-64 yrs
                        {
                            deuid: "hUEUvVTNJ9P",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O56"
                        }, //Medical secretaries > 65 yrs
                        {
                            deuid: "hUEUvVTNJ9P",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P56"
                        }, //Medical secretaries Domestically Trained
                        {
                            deuid: "hUEUvVTNJ9P",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q56"
                        }, //Medical secretaries Foreign Trained
                        {
                            deuid: "hUEUvVTNJ9P",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R56"
                        }, //Medical secretaries Unknown place of training
                        {
                            deuid: "hUEUvVTNJ9P",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S56"
                        }, //Medical secretaries National Born
                        {
                            deuid: "hUEUvVTNJ9P",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T56"
                        }, //Medical secretaries Foreign Born
                        {
                            deuid: "BGrgjrIX5Ri",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D57"
                        }, //Managerial staff Total
                        {
                            deuid: "BGrgjrIX5Ri",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E57"
                        }, //Managerial staff Practising
                        {
                            deuid: "BGrgjrIX5Ri",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F57"
                        }, //Managerial staff Professionally Active
                        {
                            deuid: "BGrgjrIX5Ri",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G57"
                        }, //Managerial staff Licensed to practice
                        {
                            deuid: "BGrgjrIX5Ri",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H57"
                        }, //Managerial staff Male
                        {
                            deuid: "BGrgjrIX5Ri",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I57"
                        }, //Managerial staff Female
                        {
                            deuid: "BGrgjrIX5Ri",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J57"
                        }, //Managerial staff <25 yrs
                        {
                            deuid: "BGrgjrIX5Ri",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K57"
                        }, //Managerial staff 25-34 yrs
                        {
                            deuid: "BGrgjrIX5Ri",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L57"
                        }, //Managerial staff 35-44 yrs
                        {
                            deuid: "BGrgjrIX5Ri",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M57"
                        }, //Managerial staff 45-54 yrs
                        {
                            deuid: "BGrgjrIX5Ri",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N57"
                        }, //Managerial staff 55-64 yrs
                        {
                            deuid: "BGrgjrIX5Ri",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O57"
                        }, //Managerial staff > 65 yrs
                        {
                            deuid: "BGrgjrIX5Ri",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P57"
                        }, //Managerial staff Domestically Trained
                        {
                            deuid: "BGrgjrIX5Ri",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q57"
                        }, //Managerial staff Foreign Trained
                        {
                            deuid: "BGrgjrIX5Ri",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R57"
                        }, //Managerial staff Unknown place of training
                        {
                            deuid: "BGrgjrIX5Ri",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S57"
                        }, //Managerial staff National Born
                        {
                            deuid: "BGrgjrIX5Ri",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T57"
                        }, //Managerial staff Foreign Born
                        {
                            deuid: "SVNenUYsHL8",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D58"
                        }, //Administrative staff Total
                        {
                            deuid: "SVNenUYsHL8",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E58"
                        }, //Administrative staff Practising
                        {
                            deuid: "SVNenUYsHL8",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F58"
                        }, //Administrative staff Professionally Active
                        {
                            deuid: "SVNenUYsHL8",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G58"
                        }, //Administrative staff Licensed to practice
                        {
                            deuid: "SVNenUYsHL8",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H58"
                        }, //Administrative staff Male
                        {
                            deuid: "SVNenUYsHL8",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I58"
                        }, //Administrative staff Female
                        {
                            deuid: "SVNenUYsHL8",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J58"
                        }, //Administrative staff <25 yrs
                        {
                            deuid: "SVNenUYsHL8",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K58"
                        }, //Administrative staff 25-34 yrs
                        {
                            deuid: "SVNenUYsHL8",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L58"
                        }, //Administrative staff 35-44 yrs
                        {
                            deuid: "SVNenUYsHL8",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M58"
                        }, //Administrative staff 45-54 yrs
                        {
                            deuid: "SVNenUYsHL8",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N58"
                        }, //Administrative staff 55-64 yrs
                        {
                            deuid: "SVNenUYsHL8",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O58"
                        }, //Administrative staff > 65 yrs
                        {
                            deuid: "SVNenUYsHL8",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P58"
                        }, //Administrative staff Domestically Trained
                        {
                            deuid: "SVNenUYsHL8",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q58"
                        }, //Administrative staff Foreign Trained
                        {
                            deuid: "SVNenUYsHL8",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R58"
                        }, //Administrative staff Unknown place of training
                        {
                            deuid: "SVNenUYsHL8",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S58"
                        }, //Administrative staff National Born
                        {
                            deuid: "SVNenUYsHL8",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T58"
                        }, //Administrative staff Foreign Born
                        {
                            deuid: "NARmt1jLp0H",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D59"
                        }, //Health information systems personnel Total
                        {
                            deuid: "NARmt1jLp0H",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E59"
                        }, //Health information systems personnel Practising
                        {
                            deuid: "NARmt1jLp0H",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F59"
                        }, //Health information systems personnel Professionally Active
                        {
                            deuid: "NARmt1jLp0H",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G59"
                        }, //Health information systems personnel Licensed to practice
                        {
                            deuid: "NARmt1jLp0H",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H59"
                        }, //Health information systems personnel Male
                        {
                            deuid: "NARmt1jLp0H",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I59"
                        }, //Health information systems personnel Female
                        {
                            deuid: "NARmt1jLp0H",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J59"
                        }, //Health information systems personnel <25 yrs
                        {
                            deuid: "NARmt1jLp0H",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K59"
                        }, //Health information systems personnel 25-34 yrs
                        {
                            deuid: "NARmt1jLp0H",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L59"
                        }, //Health information systems personnel 35-44 yrs
                        {
                            deuid: "NARmt1jLp0H",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M59"
                        }, //Health information systems personnel 45-54 yrs
                        {
                            deuid: "NARmt1jLp0H",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N59"
                        }, //Health information systems personnel 55-64 yrs
                        {
                            deuid: "NARmt1jLp0H",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O59"
                        }, //Health information systems personnel > 65 yrs
                        {
                            deuid: "NARmt1jLp0H",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P59"
                        }, //Health information systems personnel Domestically Trained
                        {
                            deuid: "NARmt1jLp0H",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q59"
                        }, //Health information systems personnel Foreign Trained
                        {
                            deuid: "NARmt1jLp0H",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R59"
                        }, //Health information systems personnel Unknown place of training
                        {
                            deuid: "NARmt1jLp0H",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S59"
                        }, //Health information systems personnel National Born
                        {
                            deuid: "NARmt1jLp0H",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T59"
                        }, //Health information systems personnel Foreign Born
                        {
                            deuid: "xJURWgPOCWP",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D60"
                        }, //Engineering and maintenance staff Total
                        {
                            deuid: "xJURWgPOCWP",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E60"
                        }, //Engineering and maintenance staff Practising
                        {
                            deuid: "xJURWgPOCWP",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F60"
                        }, //Engineering and maintenance staff Professionally Active
                        {
                            deuid: "xJURWgPOCWP",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G60"
                        }, //Engineering and maintenance staff Licensed to practice
                        {
                            deuid: "xJURWgPOCWP",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H60"
                        }, //Engineering and maintenance staff Male
                        {
                            deuid: "xJURWgPOCWP",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I60"
                        }, //Engineering and maintenance staff Female
                        {
                            deuid: "xJURWgPOCWP",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J60"
                        }, //Engineering and maintenance staff <25 yrs
                        {
                            deuid: "xJURWgPOCWP",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K60"
                        }, //Engineering and maintenance staff 25-34 yrs
                        {
                            deuid: "xJURWgPOCWP",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L60"
                        }, //Engineering and maintenance staff 35-44 yrs
                        {
                            deuid: "xJURWgPOCWP",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M60"
                        }, //Engineering and maintenance staff 45-54 yrs
                        {
                            deuid: "xJURWgPOCWP",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N60"
                        }, //Engineering and maintenance staff 55-64 yrs
                        {
                            deuid: "xJURWgPOCWP",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O60"
                        }, //Engineering and maintenance staff > 65 yrs
                        {
                            deuid: "xJURWgPOCWP",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P60"
                        }, //Engineering and maintenance staff Domestically Trained
                        {
                            deuid: "xJURWgPOCWP",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q60"
                        }, //Engineering and maintenance staff Foreign Trained
                        {
                            deuid: "xJURWgPOCWP",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R60"
                        }, //Engineering and maintenance staff Unknown place of training
                        {
                            deuid: "xJURWgPOCWP",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S60"
                        }, //Engineering and maintenance staff National Born
                        {
                            deuid: "xJURWgPOCWP",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T60"
                        }, //Engineering and maintenance staff Foreign Born
                        {
                            deuid: "U9S9LefGuER",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D61"
                        }, //Other non-medical professional staff Total
                        {
                            deuid: "U9S9LefGuER",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E61"
                        }, //Other non-medical professional staff Practising
                        {
                            deuid: "U9S9LefGuER",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F61"
                        }, //Other non-medical professional staff Professionally Active
                        {
                            deuid: "U9S9LefGuER",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G61"
                        }, //Other non-medical professional staff Licensed to practice
                        {
                            deuid: "U9S9LefGuER",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H61"
                        }, //Other non-medical professional staff Male
                        {
                            deuid: "U9S9LefGuER",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I61"
                        }, //Other non-medical professional staff Female
                        {
                            deuid: "U9S9LefGuER",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J61"
                        }, //Other non-medical professional staff <25 yrs
                        {
                            deuid: "U9S9LefGuER",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K61"
                        }, //Other non-medical professional staff 25-34 yrs
                        {
                            deuid: "U9S9LefGuER",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L61"
                        }, //Other non-medical professional staff 35-44 yrs
                        {
                            deuid: "U9S9LefGuER",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M61"
                        }, //Other non-medical professional staff 45-54 yrs
                        {
                            deuid: "U9S9LefGuER",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N61"
                        }, //Other non-medical professional staff 55-64 yrs
                        {
                            deuid: "U9S9LefGuER",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O61"
                        }, //Other non-medical professional staff > 65 yrs
                        {
                            deuid: "U9S9LefGuER",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P61"
                        }, //Other non-medical professional staff Domestically Trained
                        {
                            deuid: "U9S9LefGuER",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q61"
                        }, //Other non-medical professional staff Foreign Trained
                        {
                            deuid: "U9S9LefGuER",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R61"
                        }, //Other non-medical professional staff Unknown place of training
                        {
                            deuid: "U9S9LefGuER",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S61"
                        }, //Other non-medical professional staff National Born
                        {
                            deuid: "U9S9LefGuER",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T61"
                        }, //Other non-medical professional staff Foreign Born
                        {
                            deuid: "ZP7hy3u68BE",
                            cocuid: "eHaz9Q3lZLd",
                            cell_no: "D62"
                        }, //Other non-medical support staff Total
                        {
                            deuid: "ZP7hy3u68BE",
                            cocuid: "YOZwz1YiXw3",
                            cell_no: "E62"
                        }, //Other non-medical support staff Practising
                        {
                            deuid: "ZP7hy3u68BE",
                            cocuid: "mlP1VIKDhAB",
                            cell_no: "F62"
                        }, //Other non-medical support staff Professionally Active
                        {
                            deuid: "ZP7hy3u68BE",
                            cocuid: "k7Sf0C7kOUm",
                            cell_no: "G62"
                        }, //Other non-medical support staff Licensed to practice
                        {
                            deuid: "ZP7hy3u68BE",
                            cocuid: "Cdnp37HXBuW",
                            cell_no: "H62"
                        }, //Other non-medical support staff Male
                        {
                            deuid: "ZP7hy3u68BE",
                            cocuid: "oJnH6dMmSlZ",
                            cell_no: "I62"
                        }, //Other non-medical support staff Female
                        {
                            deuid: "ZP7hy3u68BE",
                            cocuid: "zP9vN3kIkCS",
                            cell_no: "J62"
                        }, //Other non-medical support staff <25 yrs
                        {
                            deuid: "ZP7hy3u68BE",
                            cocuid: "rUTQylkIqmR",
                            cell_no: "K62"
                        }, //Other non-medical support staff 25-34 yrs
                        {
                            deuid: "ZP7hy3u68BE",
                            cocuid: "vfYnv3I3FDV",
                            cell_no: "L62"
                        }, //Other non-medical support staff 35-44 yrs
                        {
                            deuid: "ZP7hy3u68BE",
                            cocuid: "P6MDj0TTH0l",
                            cell_no: "M62"
                        }, //Other non-medical support staff 45-54 yrs
                        {
                            deuid: "ZP7hy3u68BE",
                            cocuid: "DD4iF67QMRr",
                            cell_no: "N62"
                        }, //Other non-medical support staff 55-64 yrs
                        {
                            deuid: "ZP7hy3u68BE",
                            cocuid: "RDx8Bc7ogyB",
                            cell_no: "O62"
                        }, //Other non-medical support staff > 65 yrs
                        {
                            deuid: "ZP7hy3u68BE",
                            cocuid: "YBO4NTK8IVj",
                            cell_no: "P62"
                        }, //Other non-medical support staff Domestically Trained
                        {
                            deuid: "ZP7hy3u68BE",
                            cocuid: "jJhzlGR2SlX",
                            cell_no: "Q62"
                        }, //Other non-medical support staff Foreign Trained
                        {
                            deuid: "ZP7hy3u68BE",
                            cocuid: "M8PdBNFmpS0",
                            cell_no: "R62"
                        }, //Other non-medical support staff Unknown place of training
                        {
                            deuid: "ZP7hy3u68BE",
                            cocuid: "sD0jTXBQqCk",
                            cell_no: "S62"
                        }, //Other non-medical support staff National Born
                        {
                            deuid: "ZP7hy3u68BE",
                            cocuid: "WLYREfmGgG6",
                            cell_no: "T62"
                        } //Other non-medical support staff Foreign Born
                    ]
                },
                {
                    sheet_type: "AGGREGATE_STATIC",
                    sheet_no: 2, //Other Sheet
                    orgUnitIdScheme: "UID",
                    dataElementIdScheme: "UID",
                    idScheme: "UID",
                    oucode_cell: "N2",
                    year_cell: "M4",
                    last_data_column: "ZZ",

                    agg_des: [
                        {
                            deuid: "mxdCGM6msAR",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E13"
                        }, //Medical Doctors Public
                        {
                            deuid: "mxdCGM6msAR",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F13"
                        }, //Medical Doctors Not for Profit
                        {
                            deuid: "mxdCGM6msAR",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G13"
                        }, //Medical Doctors For Profit
                        {
                            deuid: "mxdCGM6msAR",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H13"
                        }, //Medical Doctors HP.1
                        {
                            deuid: "mxdCGM6msAR",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I13"
                        }, //Medical Doctors HP.2
                        {
                            deuid: "mxdCGM6msAR",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J13"
                        }, //Medical Doctors HP.3
                        {
                            deuid: "mxdCGM6msAR",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K13"
                        }, //Medical Doctors HP.4
                        {
                            deuid: "mxdCGM6msAR",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L13"
                        }, //Medical Doctors HP.5
                        {
                            deuid: "mxdCGM6msAR",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M13"
                        }, //Medical Doctors HP.6
                        {
                            deuid: "y67a0RW6wUa",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E14"
                        }, //Generalist Medical Practitioners Public
                        {
                            deuid: "y67a0RW6wUa",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F14"
                        }, //Generalist Medical Practitioners Not for Profit
                        {
                            deuid: "y67a0RW6wUa",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G14"
                        }, //Generalist Medical Practitioners For Profit
                        {
                            deuid: "y67a0RW6wUa",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H14"
                        }, //Generalist Medical Practitioners HP.1
                        {
                            deuid: "y67a0RW6wUa",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I14"
                        }, //Generalist Medical Practitioners HP.2
                        {
                            deuid: "y67a0RW6wUa",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J14"
                        }, //Generalist Medical Practitioners HP.3
                        {
                            deuid: "y67a0RW6wUa",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K14"
                        }, //Generalist Medical Practitioners HP.4
                        {
                            deuid: "y67a0RW6wUa",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L14"
                        }, //Generalist Medical Practitioners HP.5
                        {
                            deuid: "y67a0RW6wUa",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M14"
                        }, //Generalist Medical Practitioners HP.6
                        {
                            deuid: "SeU3FMqECnf",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E15"
                        }, //Specialist Medical Practitioners Public
                        {
                            deuid: "SeU3FMqECnf",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F15"
                        }, //Specialist Medical Practitioners Not for Profit
                        {
                            deuid: "SeU3FMqECnf",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G15"
                        }, //Specialist Medical Practitioners For Profit
                        {
                            deuid: "SeU3FMqECnf",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H15"
                        }, //Specialist Medical Practitioners HP.1
                        {
                            deuid: "SeU3FMqECnf",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I15"
                        }, //Specialist Medical Practitioners HP.2
                        {
                            deuid: "SeU3FMqECnf",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J15"
                        }, //Specialist Medical Practitioners HP.3
                        {
                            deuid: "SeU3FMqECnf",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K15"
                        }, //Specialist Medical Practitioners HP.4
                        {
                            deuid: "SeU3FMqECnf",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L15"
                        }, //Specialist Medical Practitioners HP.5
                        {
                            deuid: "SeU3FMqECnf",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M15"
                        }, //Specialist Medical Practitioners HP.6
                        {
                            deuid: "caegWa7kQkh",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E16"
                        }, //General Paediatricians Practitioners Public
                        {
                            deuid: "caegWa7kQkh",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F16"
                        }, //General Paediatricians Practitioners Not for Profit
                        {
                            deuid: "caegWa7kQkh",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G16"
                        }, //General Paediatricians Practitioners For Profit
                        {
                            deuid: "caegWa7kQkh",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H16"
                        }, //General Paediatricians Practitioners HP.1
                        {
                            deuid: "caegWa7kQkh",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I16"
                        }, //General Paediatricians Practitioners HP.2
                        {
                            deuid: "caegWa7kQkh",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J16"
                        }, //General Paediatricians Practitioners HP.3
                        {
                            deuid: "caegWa7kQkh",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K16"
                        }, //General Paediatricians Practitioners HP.4
                        {
                            deuid: "caegWa7kQkh",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L16"
                        }, //General Paediatricians Practitioners HP.5
                        {
                            deuid: "caegWa7kQkh",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M16"
                        }, //General Paediatricians Practitioners HP.6
                        {
                            deuid: "gNfIYju3TGx",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E17"
                        }, //Obstetricians and Gynaecologists Practitioners Public
                        {
                            deuid: "gNfIYju3TGx",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F17"
                        }, //Obstetricians and Gynaecologists Practitioners Not for Profit
                        {
                            deuid: "gNfIYju3TGx",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G17"
                        }, //Obstetricians and Gynaecologists Practitioners For Profit
                        {
                            deuid: "gNfIYju3TGx",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H17"
                        }, //Obstetricians and Gynaecologists Practitioners HP.1
                        {
                            deuid: "gNfIYju3TGx",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I17"
                        }, //Obstetricians and Gynaecologists Practitioners HP.2
                        {
                            deuid: "gNfIYju3TGx",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J17"
                        }, //Obstetricians and Gynaecologists Practitioners HP.3
                        {
                            deuid: "gNfIYju3TGx",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K17"
                        }, //Obstetricians and Gynaecologists Practitioners HP.4
                        {
                            deuid: "gNfIYju3TGx",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L17"
                        }, //Obstetricians and Gynaecologists Practitioners HP.5
                        {
                            deuid: "gNfIYju3TGx",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M17"
                        }, //Obstetricians and Gynaecologists Practitioners HP.6
                        {
                            deuid: "c1RM22xq3EV",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E18"
                        }, //Psychiatrists Practitioners Public
                        {
                            deuid: "c1RM22xq3EV",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F18"
                        }, //Psychiatrists Practitioners Not for Profit
                        {
                            deuid: "c1RM22xq3EV",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G18"
                        }, //Psychiatrists Practitioners For Profit
                        {
                            deuid: "c1RM22xq3EV",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H18"
                        }, //Psychiatrists Practitioners HP.1
                        {
                            deuid: "c1RM22xq3EV",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I18"
                        }, //Psychiatrists Practitioners HP.2
                        {
                            deuid: "c1RM22xq3EV",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J18"
                        }, //Psychiatrists Practitioners HP.3
                        {
                            deuid: "c1RM22xq3EV",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K18"
                        }, //Psychiatrists Practitioners HP.4
                        {
                            deuid: "c1RM22xq3EV",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L18"
                        }, //Psychiatrists Practitioners HP.5
                        {
                            deuid: "c1RM22xq3EV",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M18"
                        }, //Psychiatrists Practitioners HP.6
                        {
                            deuid: "szTSFmcna7O",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E19"
                        }, //Medical group of Specialists Practitioners Public
                        {
                            deuid: "szTSFmcna7O",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F19"
                        }, //Medical group of Specialists Practitioners Not for Profit
                        {
                            deuid: "szTSFmcna7O",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G19"
                        }, //Medical group of Specialists Practitioners For Profit
                        {
                            deuid: "szTSFmcna7O",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H19"
                        }, //Medical group of Specialists Practitioners HP.1
                        {
                            deuid: "szTSFmcna7O",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I19"
                        }, //Medical group of Specialists Practitioners HP.2
                        {
                            deuid: "szTSFmcna7O",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J19"
                        }, //Medical group of Specialists Practitioners HP.3
                        {
                            deuid: "szTSFmcna7O",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K19"
                        }, //Medical group of Specialists Practitioners HP.4
                        {
                            deuid: "szTSFmcna7O",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L19"
                        }, //Medical group of Specialists Practitioners HP.5
                        {
                            deuid: "szTSFmcna7O",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M19"
                        }, //Medical group of Specialists Practitioners HP.6
                        {
                            deuid: "rzSycgkn9X0",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E20"
                        }, //Surgical group of Specialists Practitioners Public
                        {
                            deuid: "rzSycgkn9X0",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F20"
                        }, //Surgical group of Specialists Practitioners Not for Profit
                        {
                            deuid: "rzSycgkn9X0",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G20"
                        }, //Surgical group of Specialists Practitioners For Profit
                        {
                            deuid: "rzSycgkn9X0",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H20"
                        }, //Surgical group of Specialists Practitioners HP.1
                        {
                            deuid: "rzSycgkn9X0",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I20"
                        }, //Surgical group of Specialists Practitioners HP.2
                        {
                            deuid: "rzSycgkn9X0",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J20"
                        }, //Surgical group of Specialists Practitioners HP.3
                        {
                            deuid: "rzSycgkn9X0",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K20"
                        }, //Surgical group of Specialists Practitioners HP.4
                        {
                            deuid: "rzSycgkn9X0",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L20"
                        }, //Surgical group of Specialists Practitioners HP.5
                        {
                            deuid: "rzSycgkn9X0",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M20"
                        }, //Surgical group of Specialists Practitioners HP.6
                        {
                            deuid: "gArgUMQ0JUa",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E21"
                        }, //Other Specialists Practitioners Public
                        {
                            deuid: "gArgUMQ0JUa",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F21"
                        }, //Other Specialists Practitioners Not for Profit
                        {
                            deuid: "gArgUMQ0JUa",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G21"
                        }, //Other Specialists Practitioners For Profit
                        {
                            deuid: "gArgUMQ0JUa",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H21"
                        }, //Other Specialists Practitioners HP.1
                        {
                            deuid: "gArgUMQ0JUa",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I21"
                        }, //Other Specialists Practitioners HP.2
                        {
                            deuid: "gArgUMQ0JUa",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J21"
                        }, //Other Specialists Practitioners HP.3
                        {
                            deuid: "gArgUMQ0JUa",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K21"
                        }, //Other Specialists Practitioners HP.4
                        {
                            deuid: "gArgUMQ0JUa",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L21"
                        }, //Other Specialists Practitioners HP.5
                        {
                            deuid: "gArgUMQ0JUa",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M21"
                        }, //Other Specialists Practitioners HP.6
                        {
                            deuid: "bGv5noQTa4j",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E22"
                        }, //Nursing General Personnel Public
                        {
                            deuid: "bGv5noQTa4j",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F22"
                        }, //Nursing General Personnel Not for Profit
                        {
                            deuid: "bGv5noQTa4j",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G22"
                        }, //Nursing General Personnel For Profit
                        {
                            deuid: "bGv5noQTa4j",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H22"
                        }, //Nursing General Personnel HP.1
                        {
                            deuid: "bGv5noQTa4j",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I22"
                        }, //Nursing General Personnel HP.2
                        {
                            deuid: "bGv5noQTa4j",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J22"
                        }, //Nursing General Personnel HP.3
                        {
                            deuid: "bGv5noQTa4j",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K22"
                        }, //Nursing General Personnel HP.4
                        {
                            deuid: "bGv5noQTa4j",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L22"
                        }, //Nursing General Personnel HP.5
                        {
                            deuid: "bGv5noQTa4j",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M22"
                        }, //Nursing General Personnel HP.6
                        {
                            deuid: "mED3GxEO9og",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E23"
                        }, //Nursing Professionals Public
                        {
                            deuid: "mED3GxEO9og",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F23"
                        }, //Nursing Professionals Not for Profit
                        {
                            deuid: "mED3GxEO9og",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G23"
                        }, //Nursing Professionals For Profit
                        {
                            deuid: "mED3GxEO9og",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H23"
                        }, //Nursing Professionals HP.1
                        {
                            deuid: "mED3GxEO9og",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I23"
                        }, //Nursing Professionals HP.2
                        {
                            deuid: "mED3GxEO9og",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J23"
                        }, //Nursing Professionals HP.3
                        {
                            deuid: "mED3GxEO9og",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K23"
                        }, //Nursing Professionals HP.4
                        {
                            deuid: "mED3GxEO9og",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L23"
                        }, //Nursing Professionals HP.5
                        {
                            deuid: "mED3GxEO9og",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M23"
                        }, //Nursing Professionals HP.6
                        {
                            deuid: "WAoZKKHmAcj",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E24"
                        }, //Nursing Associate Professionals Public
                        {
                            deuid: "WAoZKKHmAcj",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F24"
                        }, //Nursing Associate Professionals Not for Profit
                        {
                            deuid: "WAoZKKHmAcj",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G24"
                        }, //Nursing Associate Professionals For Profit
                        {
                            deuid: "WAoZKKHmAcj",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H24"
                        }, //Nursing Associate Professionals HP.1
                        {
                            deuid: "WAoZKKHmAcj",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I24"
                        }, //Nursing Associate Professionals HP.2
                        {
                            deuid: "WAoZKKHmAcj",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J24"
                        }, //Nursing Associate Professionals HP.3
                        {
                            deuid: "WAoZKKHmAcj",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K24"
                        }, //Nursing Associate Professionals HP.4
                        {
                            deuid: "WAoZKKHmAcj",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L24"
                        }, //Nursing Associate Professionals HP.5
                        {
                            deuid: "WAoZKKHmAcj",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M24"
                        }, //Nursing Associate Professionals HP.6
                        {
                            deuid: "L1afctF08GD",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E25"
                        }, //Midwifery personnel Public
                        {
                            deuid: "L1afctF08GD",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F25"
                        }, //Midwifery personnel Not for Profit
                        {
                            deuid: "L1afctF08GD",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G25"
                        }, //Midwifery personnel For Profit
                        {
                            deuid: "L1afctF08GD",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H25"
                        }, //Midwifery personnel HP.1
                        {
                            deuid: "L1afctF08GD",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I25"
                        }, //Midwifery personnel HP.2
                        {
                            deuid: "L1afctF08GD",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J25"
                        }, //Midwifery personnel HP.3
                        {
                            deuid: "L1afctF08GD",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K25"
                        }, //Midwifery personnel HP.4
                        {
                            deuid: "L1afctF08GD",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L25"
                        }, //Midwifery personnel HP.5
                        {
                            deuid: "L1afctF08GD",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M25"
                        }, //Midwifery personnel HP.6
                        {
                            deuid: "oFFxlqJwPh9",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E26"
                        }, //Midwifery Professionals Public
                        {
                            deuid: "oFFxlqJwPh9",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F26"
                        }, //Midwifery Professionals Not for Profit
                        {
                            deuid: "oFFxlqJwPh9",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G26"
                        }, //Midwifery Professionals For Profit
                        {
                            deuid: "oFFxlqJwPh9",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H26"
                        }, //Midwifery Professionals HP.1
                        {
                            deuid: "oFFxlqJwPh9",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I26"
                        }, //Midwifery Professionals HP.2
                        {
                            deuid: "oFFxlqJwPh9",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J26"
                        }, //Midwifery Professionals HP.3
                        {
                            deuid: "oFFxlqJwPh9",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K26"
                        }, //Midwifery Professionals HP.4
                        {
                            deuid: "oFFxlqJwPh9",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L26"
                        }, //Midwifery Professionals HP.5
                        {
                            deuid: "oFFxlqJwPh9",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M26"
                        }, //Midwifery Professionals HP.6
                        {
                            deuid: "cbKXNee3ph3",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E27"
                        }, //Midwifery Associate Professionals Public
                        {
                            deuid: "cbKXNee3ph3",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F27"
                        }, //Midwifery Associate Professionals Not for Profit
                        {
                            deuid: "cbKXNee3ph3",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G27"
                        }, //Midwifery Associate Professionals For Profit
                        {
                            deuid: "cbKXNee3ph3",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H27"
                        }, //Midwifery Associate Professionals HP.1
                        {
                            deuid: "cbKXNee3ph3",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I27"
                        }, //Midwifery Associate Professionals HP.2
                        {
                            deuid: "cbKXNee3ph3",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J27"
                        }, //Midwifery Associate Professionals HP.3
                        {
                            deuid: "cbKXNee3ph3",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K27"
                        }, //Midwifery Associate Professionals HP.4
                        {
                            deuid: "cbKXNee3ph3",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L27"
                        }, //Midwifery Associate Professionals HP.5
                        {
                            deuid: "cbKXNee3ph3",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M27"
                        }, //Midwifery Associate Professionals HP.6
                        {
                            deuid: "Fu7dDl4ppl7",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E28"
                        }, //Dentists Public
                        {
                            deuid: "Fu7dDl4ppl7",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F28"
                        }, //Dentists Not for Profit
                        {
                            deuid: "Fu7dDl4ppl7",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G28"
                        }, //Dentists For Profit
                        {
                            deuid: "Fu7dDl4ppl7",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H28"
                        }, //Dentists HP.1
                        {
                            deuid: "Fu7dDl4ppl7",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I28"
                        }, //Dentists HP.2
                        {
                            deuid: "Fu7dDl4ppl7",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J28"
                        }, //Dentists HP.3
                        {
                            deuid: "Fu7dDl4ppl7",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K28"
                        }, //Dentists HP.4
                        {
                            deuid: "Fu7dDl4ppl7",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L28"
                        }, //Dentists HP.5
                        {
                            deuid: "Fu7dDl4ppl7",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M28"
                        }, //Dentists HP.6
                        {
                            deuid: "VSGJ4q08rpF",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E29"
                        }, //Dental Assistants and Therapists Public
                        {
                            deuid: "VSGJ4q08rpF",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F29"
                        }, //Dental Assistants and Therapists Not for Profit
                        {
                            deuid: "VSGJ4q08rpF",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G29"
                        }, //Dental Assistants and Therapists For Profit
                        {
                            deuid: "VSGJ4q08rpF",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H29"
                        }, //Dental Assistants and Therapists HP.1
                        {
                            deuid: "VSGJ4q08rpF",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I29"
                        }, //Dental Assistants and Therapists HP.2
                        {
                            deuid: "VSGJ4q08rpF",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J29"
                        }, //Dental Assistants and Therapists HP.3
                        {
                            deuid: "VSGJ4q08rpF",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K29"
                        }, //Dental Assistants and Therapists HP.4
                        {
                            deuid: "VSGJ4q08rpF",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L29"
                        }, //Dental Assistants and Therapists HP.5
                        {
                            deuid: "VSGJ4q08rpF",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M29"
                        }, //Dental Assistants and Therapists HP.6
                        {
                            deuid: "yxxg9fnb8Wn",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E30"
                        }, //Dental Prosthetic Technicians Public
                        {
                            deuid: "yxxg9fnb8Wn",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F30"
                        }, //Dental Prosthetic Technicians Not for Profit
                        {
                            deuid: "yxxg9fnb8Wn",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G30"
                        }, //Dental Prosthetic Technicians For Profit
                        {
                            deuid: "yxxg9fnb8Wn",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H30"
                        }, //Dental Prosthetic Technicians HP.1
                        {
                            deuid: "yxxg9fnb8Wn",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I30"
                        }, //Dental Prosthetic Technicians HP.2
                        {
                            deuid: "yxxg9fnb8Wn",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J30"
                        }, //Dental Prosthetic Technicians HP.3
                        {
                            deuid: "yxxg9fnb8Wn",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K30"
                        }, //Dental Prosthetic Technicians HP.4
                        {
                            deuid: "yxxg9fnb8Wn",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L30"
                        }, //Dental Prosthetic Technicians HP.5
                        {
                            deuid: "yxxg9fnb8Wn",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M30"
                        }, //Dental Prosthetic Technicians HP.6
                        {
                            deuid: "u6TBGqwClnr",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E31"
                        }, //Pharmacists Public
                        {
                            deuid: "u6TBGqwClnr",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F31"
                        }, //Pharmacists Not for Profit
                        {
                            deuid: "u6TBGqwClnr",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G31"
                        }, //Pharmacists For Profit
                        {
                            deuid: "u6TBGqwClnr",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H31"
                        }, //Pharmacists HP.1
                        {
                            deuid: "u6TBGqwClnr",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I31"
                        }, //Pharmacists HP.2
                        {
                            deuid: "u6TBGqwClnr",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J31"
                        }, //Pharmacists HP.3
                        {
                            deuid: "u6TBGqwClnr",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K31"
                        }, //Pharmacists HP.4
                        {
                            deuid: "u6TBGqwClnr",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L31"
                        }, //Pharmacists HP.5
                        {
                            deuid: "u6TBGqwClnr",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M31"
                        }, //Pharmacists HP.6
                        {
                            deuid: "LDcUDhFFhPE",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E32"
                        }, //Pharmaceutical Technicians and Assistants Public
                        {
                            deuid: "LDcUDhFFhPE",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F32"
                        }, //Pharmaceutical Technicians and Assistants Not for Profit
                        {
                            deuid: "LDcUDhFFhPE",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G32"
                        }, //Pharmaceutical Technicians and Assistants For Profit
                        {
                            deuid: "LDcUDhFFhPE",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H32"
                        }, //Pharmaceutical Technicians and Assistants HP.1
                        {
                            deuid: "LDcUDhFFhPE",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I32"
                        }, //Pharmaceutical Technicians and Assistants HP.2
                        {
                            deuid: "LDcUDhFFhPE",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J32"
                        }, //Pharmaceutical Technicians and Assistants HP.3
                        {
                            deuid: "LDcUDhFFhPE",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K32"
                        }, //Pharmaceutical Technicians and Assistants HP.4
                        {
                            deuid: "LDcUDhFFhPE",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L32"
                        }, //Pharmaceutical Technicians and Assistants HP.5
                        {
                            deuid: "LDcUDhFFhPE",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M32"
                        }, //Pharmaceutical Technicians and Assistants HP.6
                        {
                            deuid: "rC0WqacbfQH",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E33"
                        }, //Paramedical Practitioners Public
                        {
                            deuid: "rC0WqacbfQH",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F33"
                        }, //Paramedical Practitioners Not for Profit
                        {
                            deuid: "rC0WqacbfQH",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G33"
                        }, //Paramedical Practitioners For Profit
                        {
                            deuid: "rC0WqacbfQH",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H33"
                        }, //Paramedical Practitioners HP.1
                        {
                            deuid: "rC0WqacbfQH",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I33"
                        }, //Paramedical Practitioners HP.2
                        {
                            deuid: "rC0WqacbfQH",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J33"
                        }, //Paramedical Practitioners HP.3
                        {
                            deuid: "rC0WqacbfQH",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K33"
                        }, //Paramedical Practitioners HP.4
                        {
                            deuid: "rC0WqacbfQH",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L33"
                        }, //Paramedical Practitioners HP.5
                        {
                            deuid: "rC0WqacbfQH",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M33"
                        }, //Paramedical Practitioners HP.6
                        {
                            deuid: "ZCSyNruyHGx",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E34"
                        }, //Medical and Pathology Laboratory scientists Public
                        {
                            deuid: "ZCSyNruyHGx",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F34"
                        }, //Medical and Pathology Laboratory scientists Not for Profit
                        {
                            deuid: "ZCSyNruyHGx",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G34"
                        }, //Medical and Pathology Laboratory scientists For Profit
                        {
                            deuid: "ZCSyNruyHGx",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H34"
                        }, //Medical and Pathology Laboratory scientists HP.1
                        {
                            deuid: "ZCSyNruyHGx",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I34"
                        }, //Medical and Pathology Laboratory scientists HP.2
                        {
                            deuid: "ZCSyNruyHGx",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J34"
                        }, //Medical and Pathology Laboratory scientists HP.3
                        {
                            deuid: "ZCSyNruyHGx",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K34"
                        }, //Medical and Pathology Laboratory scientists HP.4
                        {
                            deuid: "ZCSyNruyHGx",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L34"
                        }, //Medical and Pathology Laboratory scientists HP.5
                        {
                            deuid: "ZCSyNruyHGx",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M34"
                        }, //Medical and Pathology Laboratory scientists HP.6
                        {
                            deuid: "HB5zWlG33mm",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E35"
                        }, //Medical Imaging and Therapeutic Equipment Technicians Public
                        {
                            deuid: "HB5zWlG33mm",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F35"
                        }, //Medical Imaging and Therapeutic Equipment Technicians Not for Profit
                        {
                            deuid: "HB5zWlG33mm",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G35"
                        }, //Medical Imaging and Therapeutic Equipment Technicians For Profit
                        {
                            deuid: "HB5zWlG33mm",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H35"
                        }, //Medical Imaging and Therapeutic Equipment Technicians HP.1
                        {
                            deuid: "HB5zWlG33mm",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I35"
                        }, //Medical Imaging and Therapeutic Equipment Technicians HP.2
                        {
                            deuid: "HB5zWlG33mm",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J35"
                        }, //Medical Imaging and Therapeutic Equipment Technicians HP.3
                        {
                            deuid: "HB5zWlG33mm",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K35"
                        }, //Medical Imaging and Therapeutic Equipment Technicians HP.4
                        {
                            deuid: "HB5zWlG33mm",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L35"
                        }, //Medical Imaging and Therapeutic Equipment Technicians HP.5
                        {
                            deuid: "HB5zWlG33mm",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M35"
                        }, //Medical Imaging and Therapeutic Equipment Technicians HP.6
                        {
                            deuid: "ODDLeZOcCSb",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E36"
                        }, //Medical and Pathology Laboratory Technicians Public
                        {
                            deuid: "ODDLeZOcCSb",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F36"
                        }, //Medical and Pathology Laboratory Technicians Not for Profit
                        {
                            deuid: "ODDLeZOcCSb",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G36"
                        }, //Medical and Pathology Laboratory Technicians For Profit
                        {
                            deuid: "ODDLeZOcCSb",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H36"
                        }, //Medical and Pathology Laboratory Technicians HP.1
                        {
                            deuid: "ODDLeZOcCSb",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I36"
                        }, //Medical and Pathology Laboratory Technicians HP.2
                        {
                            deuid: "ODDLeZOcCSb",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J36"
                        }, //Medical and Pathology Laboratory Technicians HP.3
                        {
                            deuid: "ODDLeZOcCSb",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K36"
                        }, //Medical and Pathology Laboratory Technicians HP.4
                        {
                            deuid: "ODDLeZOcCSb",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L36"
                        }, //Medical and Pathology Laboratory Technicians HP.5
                        {
                            deuid: "ODDLeZOcCSb",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M36"
                        }, //Medical and Pathology Laboratory Technicians HP.6
                        {
                            deuid: "Txswej5dG2x",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E37"
                        }, //Environmental and Occupational Health and Hygiene Professionals Public
                        {
                            deuid: "Txswej5dG2x",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F37"
                        }, //Environmental and Occupational Health and Hygiene Professionals Not for Profit
                        {
                            deuid: "Txswej5dG2x",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G37"
                        }, //Environmental and Occupational Health and Hygiene Professionals For Profit
                        {
                            deuid: "Txswej5dG2x",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H37"
                        }, //Environmental and Occupational Health and Hygiene Professionals HP.1
                        {
                            deuid: "Txswej5dG2x",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I37"
                        }, //Environmental and Occupational Health and Hygiene Professionals HP.2
                        {
                            deuid: "Txswej5dG2x",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J37"
                        }, //Environmental and Occupational Health and Hygiene Professionals HP.3
                        {
                            deuid: "Txswej5dG2x",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K37"
                        }, //Environmental and Occupational Health and Hygiene Professionals HP.4
                        {
                            deuid: "Txswej5dG2x",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L37"
                        }, //Environmental and Occupational Health and Hygiene Professionals HP.5
                        {
                            deuid: "Txswej5dG2x",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M37"
                        }, //Environmental and Occupational Health and Hygiene Professionals HP.6
                        {
                            deuid: "TxLHP8S50Fn",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E38"
                        }, //Environmental and Occupational Health Inspectors and Associates Public
                        {
                            deuid: "TxLHP8S50Fn",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F38"
                        }, //Environmental and Occupational Health Inspectors and Associates Not for Profit
                        {
                            deuid: "TxLHP8S50Fn",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G38"
                        }, //Environmental and Occupational Health Inspectors and Associates For Profit
                        {
                            deuid: "TxLHP8S50Fn",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H38"
                        }, //Environmental and Occupational Health Inspectors and Associates HP.1
                        {
                            deuid: "TxLHP8S50Fn",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I38"
                        }, //Environmental and Occupational Health Inspectors and Associates HP.2
                        {
                            deuid: "TxLHP8S50Fn",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J38"
                        }, //Environmental and Occupational Health Inspectors and Associates HP.3
                        {
                            deuid: "TxLHP8S50Fn",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K38"
                        }, //Environmental and Occupational Health Inspectors and Associates HP.4
                        {
                            deuid: "TxLHP8S50Fn",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L38"
                        }, //Environmental and Occupational Health Inspectors and Associates HP.5
                        {
                            deuid: "TxLHP8S50Fn",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M38"
                        }, //Environmental and Occupational Health Inspectors and Associates HP.6
                        {
                            deuid: "jVLDy3aFtFT",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E39"
                        }, //Traditional and Complementary Medicine Professionals Public
                        {
                            deuid: "jVLDy3aFtFT",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F39"
                        }, //Traditional and Complementary Medicine Professionals Not for Profit
                        {
                            deuid: "jVLDy3aFtFT",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G39"
                        }, //Traditional and Complementary Medicine Professionals For Profit
                        {
                            deuid: "jVLDy3aFtFT",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H39"
                        }, //Traditional and Complementary Medicine Professionals HP.1
                        {
                            deuid: "jVLDy3aFtFT",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I39"
                        }, //Traditional and Complementary Medicine Professionals HP.2
                        {
                            deuid: "jVLDy3aFtFT",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J39"
                        }, //Traditional and Complementary Medicine Professionals HP.3
                        {
                            deuid: "jVLDy3aFtFT",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K39"
                        }, //Traditional and Complementary Medicine Professionals HP.4
                        {
                            deuid: "jVLDy3aFtFT",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L39"
                        }, //Traditional and Complementary Medicine Professionals HP.5
                        {
                            deuid: "jVLDy3aFtFT",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M39"
                        }, //Traditional and Complementary Medicine Professionals HP.6
                        {
                            deuid: "opYyTkO07JI",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E40"
                        }, //Traditional and Complementary Medicine Associate Professionals Public
                        {
                            deuid: "opYyTkO07JI",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F40"
                        }, //Traditional and Complementary Medicine Associate Professionals Not for Profit
                        {
                            deuid: "opYyTkO07JI",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G40"
                        }, //Traditional and Complementary Medicine Associate Professionals For Profit
                        {
                            deuid: "opYyTkO07JI",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H40"
                        }, //Traditional and Complementary Medicine Associate Professionals HP.1
                        {
                            deuid: "opYyTkO07JI",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I40"
                        }, //Traditional and Complementary Medicine Associate Professionals HP.2
                        {
                            deuid: "opYyTkO07JI",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J40"
                        }, //Traditional and Complementary Medicine Associate Professionals HP.3
                        {
                            deuid: "opYyTkO07JI",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K40"
                        }, //Traditional and Complementary Medicine Associate Professionals HP.4
                        {
                            deuid: "opYyTkO07JI",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L40"
                        }, //Traditional and Complementary Medicine Associate Professionals HP.5
                        {
                            deuid: "opYyTkO07JI",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M40"
                        }, //Traditional and Complementary Medicine Associate Professionals HP.6
                        {
                            deuid: "xhYksqRC3Mq",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E41"
                        }, //Community Health Workers Public
                        {
                            deuid: "xhYksqRC3Mq",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F41"
                        }, //Community Health Workers Not for Profit
                        {
                            deuid: "xhYksqRC3Mq",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G41"
                        }, //Community Health Workers For Profit
                        {
                            deuid: "xhYksqRC3Mq",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H41"
                        }, //Community Health Workers HP.1
                        {
                            deuid: "xhYksqRC3Mq",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I41"
                        }, //Community Health Workers HP.2
                        {
                            deuid: "xhYksqRC3Mq",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J41"
                        }, //Community Health Workers HP.3
                        {
                            deuid: "xhYksqRC3Mq",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K41"
                        }, //Community Health Workers HP.4
                        {
                            deuid: "xhYksqRC3Mq",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L41"
                        }, //Community Health Workers HP.5
                        {
                            deuid: "xhYksqRC3Mq",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M41"
                        }, //Community Health Workers HP.6
                        {
                            deuid: "TwMqJkdt6AV",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E42"
                        }, //Personal care workers Public
                        {
                            deuid: "TwMqJkdt6AV",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F42"
                        }, //Personal care workers Not for Profit
                        {
                            deuid: "TwMqJkdt6AV",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G42"
                        }, //Personal care workers For Profit
                        {
                            deuid: "TwMqJkdt6AV",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H42"
                        }, //Personal care workers HP.1
                        {
                            deuid: "TwMqJkdt6AV",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I42"
                        }, //Personal care workers HP.2
                        {
                            deuid: "TwMqJkdt6AV",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J42"
                        }, //Personal care workers HP.3
                        {
                            deuid: "TwMqJkdt6AV",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K42"
                        }, //Personal care workers HP.4
                        {
                            deuid: "TwMqJkdt6AV",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L42"
                        }, //Personal care workers HP.5
                        {
                            deuid: "TwMqJkdt6AV",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M42"
                        }, //Personal care workers HP.6
                        {
                            deuid: "JyiJRmOLy5X",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E43"
                        }, //Health Care Assistants Public
                        {
                            deuid: "JyiJRmOLy5X",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F43"
                        }, //Health Care Assistants Not for Profit
                        {
                            deuid: "JyiJRmOLy5X",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G43"
                        }, //Health Care Assistants For Profit
                        {
                            deuid: "JyiJRmOLy5X",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H43"
                        }, //Health Care Assistants HP.1
                        {
                            deuid: "JyiJRmOLy5X",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I43"
                        }, //Health Care Assistants HP.2
                        {
                            deuid: "JyiJRmOLy5X",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J43"
                        }, //Health Care Assistants HP.3
                        {
                            deuid: "JyiJRmOLy5X",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K43"
                        }, //Health Care Assistants HP.4
                        {
                            deuid: "JyiJRmOLy5X",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L43"
                        }, //Health Care Assistants HP.5
                        {
                            deuid: "JyiJRmOLy5X",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M43"
                        }, //Health Care Assistants HP.6
                        {
                            deuid: "ggvVrPZWZkH",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E44"
                        }, //Home-based Personal Care Workers Public
                        {
                            deuid: "ggvVrPZWZkH",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F44"
                        }, //Home-based Personal Care Workers Not for Profit
                        {
                            deuid: "ggvVrPZWZkH",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G44"
                        }, //Home-based Personal Care Workers For Profit
                        {
                            deuid: "ggvVrPZWZkH",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H44"
                        }, //Home-based Personal Care Workers HP.1
                        {
                            deuid: "ggvVrPZWZkH",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I44"
                        }, //Home-based Personal Care Workers HP.2
                        {
                            deuid: "ggvVrPZWZkH",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J44"
                        }, //Home-based Personal Care Workers HP.3
                        {
                            deuid: "ggvVrPZWZkH",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K44"
                        }, //Home-based Personal Care Workers HP.4
                        {
                            deuid: "ggvVrPZWZkH",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L44"
                        }, //Home-based Personal Care Workers HP.5
                        {
                            deuid: "ggvVrPZWZkH",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M44"
                        }, //Home-based Personal Care Workers HP.6
                        {
                            deuid: "MPXGGAuhL0X",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E45"
                        }, //Personal care workers in health services n.e.c Public
                        {
                            deuid: "MPXGGAuhL0X",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F45"
                        }, //Personal care workers in health services n.e.c Not for Profit
                        {
                            deuid: "MPXGGAuhL0X",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G45"
                        }, //Personal care workers in health services n.e.c For Profit
                        {
                            deuid: "MPXGGAuhL0X",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H45"
                        }, //Personal care workers in health services n.e.c HP.1
                        {
                            deuid: "MPXGGAuhL0X",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I45"
                        }, //Personal care workers in health services n.e.c HP.2
                        {
                            deuid: "MPXGGAuhL0X",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J45"
                        }, //Personal care workers in health services n.e.c HP.3
                        {
                            deuid: "MPXGGAuhL0X",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K45"
                        }, //Personal care workers in health services n.e.c HP.4
                        {
                            deuid: "MPXGGAuhL0X",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L45"
                        }, //Personal care workers in health services n.e.c HP.5
                        {
                            deuid: "MPXGGAuhL0X",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M45"
                        }, //Personal care workers in health services n.e.c HP.6
                        {
                            deuid: "a8439elcS8L",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E46"
                        }, //Physiotherapists Public
                        {
                            deuid: "a8439elcS8L",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F46"
                        }, //Physiotherapists Not for Profit
                        {
                            deuid: "a8439elcS8L",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G46"
                        }, //Physiotherapists For Profit
                        {
                            deuid: "a8439elcS8L",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H46"
                        }, //Physiotherapists HP.1
                        {
                            deuid: "a8439elcS8L",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I46"
                        }, //Physiotherapists HP.2
                        {
                            deuid: "a8439elcS8L",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J46"
                        }, //Physiotherapists HP.3
                        {
                            deuid: "a8439elcS8L",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K46"
                        }, //Physiotherapists HP.4
                        {
                            deuid: "a8439elcS8L",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L46"
                        }, //Physiotherapists HP.5
                        {
                            deuid: "a8439elcS8L",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M46"
                        }, //Physiotherapists HP.6
                        {
                            deuid: "OZJdy5ZrHQA",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E47"
                        }, //Physiotherapy Technicians and Assistants Public
                        {
                            deuid: "OZJdy5ZrHQA",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F47"
                        }, //Physiotherapy Technicians and Assistants Not for Profit
                        {
                            deuid: "OZJdy5ZrHQA",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G47"
                        }, //Physiotherapy Technicians and Assistants For Profit
                        {
                            deuid: "OZJdy5ZrHQA",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H47"
                        }, //Physiotherapy Technicians and Assistants HP.1
                        {
                            deuid: "OZJdy5ZrHQA",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I47"
                        }, //Physiotherapy Technicians and Assistants HP.2
                        {
                            deuid: "OZJdy5ZrHQA",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J47"
                        }, //Physiotherapy Technicians and Assistants HP.3
                        {
                            deuid: "OZJdy5ZrHQA",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K47"
                        }, //Physiotherapy Technicians and Assistants HP.4
                        {
                            deuid: "OZJdy5ZrHQA",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L47"
                        }, //Physiotherapy Technicians and Assistants HP.5
                        {
                            deuid: "OZJdy5ZrHQA",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M47"
                        }, //Physiotherapy Technicians and Assistants HP.6
                        {
                            deuid: "oxd7sTFC9BS",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E48"
                        }, //Dieticians Public
                        {
                            deuid: "oxd7sTFC9BS",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F48"
                        }, //Dieticians Not for Profit
                        {
                            deuid: "oxd7sTFC9BS",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G48"
                        }, //Dieticians For Profit
                        {
                            deuid: "oxd7sTFC9BS",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H48"
                        }, //Dieticians HP.1
                        {
                            deuid: "oxd7sTFC9BS",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I48"
                        }, //Dieticians HP.2
                        {
                            deuid: "oxd7sTFC9BS",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J48"
                        }, //Dieticians HP.3
                        {
                            deuid: "oxd7sTFC9BS",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K48"
                        }, //Dieticians HP.4
                        {
                            deuid: "oxd7sTFC9BS",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L48"
                        }, //Dieticians HP.5
                        {
                            deuid: "oxd7sTFC9BS",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M48"
                        }, //Dieticians HP.6
                        {
                            deuid: "vgh8zEz1WpS",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E49"
                        }, //Nutritionists Public
                        {
                            deuid: "vgh8zEz1WpS",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F49"
                        }, //Nutritionists Not for Profit
                        {
                            deuid: "vgh8zEz1WpS",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G49"
                        }, //Nutritionists For Profit
                        {
                            deuid: "vgh8zEz1WpS",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H49"
                        }, //Nutritionists HP.1
                        {
                            deuid: "vgh8zEz1WpS",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I49"
                        }, //Nutritionists HP.2
                        {
                            deuid: "vgh8zEz1WpS",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J49"
                        }, //Nutritionists HP.3
                        {
                            deuid: "vgh8zEz1WpS",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K49"
                        }, //Nutritionists HP.4
                        {
                            deuid: "vgh8zEz1WpS",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L49"
                        }, //Nutritionists HP.5
                        {
                            deuid: "vgh8zEz1WpS",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M49"
                        }, //Nutritionists HP.6
                        {
                            deuid: "FhXwIMSsSe6",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E50"
                        }, //Audiologists and Speech Therapists Public
                        {
                            deuid: "FhXwIMSsSe6",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F50"
                        }, //Audiologists and Speech Therapists Not for Profit
                        {
                            deuid: "FhXwIMSsSe6",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G50"
                        }, //Audiologists and Speech Therapists For Profit
                        {
                            deuid: "FhXwIMSsSe6",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H50"
                        }, //Audiologists and Speech Therapists HP.1
                        {
                            deuid: "FhXwIMSsSe6",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I50"
                        }, //Audiologists and Speech Therapists HP.2
                        {
                            deuid: "FhXwIMSsSe6",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J50"
                        }, //Audiologists and Speech Therapists HP.3
                        {
                            deuid: "FhXwIMSsSe6",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K50"
                        }, //Audiologists and Speech Therapists HP.4
                        {
                            deuid: "FhXwIMSsSe6",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L50"
                        }, //Audiologists and Speech Therapists HP.5
                        {
                            deuid: "FhXwIMSsSe6",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M50"
                        }, //Audiologists and Speech Therapists HP.6
                        {
                            deuid: "UsC3BMF3UfH",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E51"
                        }, //Optometrists and Ophthalmic Opticians Public
                        {
                            deuid: "UsC3BMF3UfH",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F51"
                        }, //Optometrists and Ophthalmic Opticians Not for Profit
                        {
                            deuid: "UsC3BMF3UfH",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G51"
                        }, //Optometrists and Ophthalmic Opticians For Profit
                        {
                            deuid: "UsC3BMF3UfH",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H51"
                        }, //Optometrists and Ophthalmic Opticians HP.1
                        {
                            deuid: "UsC3BMF3UfH",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I51"
                        }, //Optometrists and Ophthalmic Opticians HP.2
                        {
                            deuid: "UsC3BMF3UfH",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J51"
                        }, //Optometrists and Ophthalmic Opticians HP.3
                        {
                            deuid: "UsC3BMF3UfH",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K51"
                        }, //Optometrists and Ophthalmic Opticians HP.4
                        {
                            deuid: "UsC3BMF3UfH",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L51"
                        }, //Optometrists and Ophthalmic Opticians HP.5
                        {
                            deuid: "UsC3BMF3UfH",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M51"
                        }, //Optometrists and Ophthalmic Opticians HP.6
                        {
                            deuid: "zTdT8BRGwE2",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E52"
                        }, //Dispensing Opticians Public
                        {
                            deuid: "zTdT8BRGwE2",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F52"
                        }, //Dispensing Opticians Not for Profit
                        {
                            deuid: "zTdT8BRGwE2",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G52"
                        }, //Dispensing Opticians For Profit
                        {
                            deuid: "zTdT8BRGwE2",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H52"
                        }, //Dispensing Opticians HP.1
                        {
                            deuid: "zTdT8BRGwE2",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I52"
                        }, //Dispensing Opticians HP.2
                        {
                            deuid: "zTdT8BRGwE2",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J52"
                        }, //Dispensing Opticians HP.3
                        {
                            deuid: "zTdT8BRGwE2",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K52"
                        }, //Dispensing Opticians HP.4
                        {
                            deuid: "zTdT8BRGwE2",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L52"
                        }, //Dispensing Opticians HP.5
                        {
                            deuid: "zTdT8BRGwE2",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M52"
                        }, //Dispensing Opticians HP.6
                        {
                            deuid: "WbKGNRLpmwG",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E53"
                        }, //Medical Prosthetic Technicians Public
                        {
                            deuid: "WbKGNRLpmwG",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F53"
                        }, //Medical Prosthetic Technicians Not for Profit
                        {
                            deuid: "WbKGNRLpmwG",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G53"
                        }, //Medical Prosthetic Technicians For Profit
                        {
                            deuid: "WbKGNRLpmwG",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H53"
                        }, //Medical Prosthetic Technicians HP.1
                        {
                            deuid: "WbKGNRLpmwG",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I53"
                        }, //Medical Prosthetic Technicians HP.2
                        {
                            deuid: "WbKGNRLpmwG",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J53"
                        }, //Medical Prosthetic Technicians HP.3
                        {
                            deuid: "WbKGNRLpmwG",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K53"
                        }, //Medical Prosthetic Technicians HP.4
                        {
                            deuid: "WbKGNRLpmwG",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L53"
                        }, //Medical Prosthetic Technicians HP.5
                        {
                            deuid: "WbKGNRLpmwG",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M53"
                        }, //Medical Prosthetic Technicians HP.6
                        {
                            deuid: "PDaxfrOTNbP",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E54"
                        }, //Medical Records and Health Information Technicians Public
                        {
                            deuid: "PDaxfrOTNbP",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F54"
                        }, //Medical Records and Health Information Technicians Not for Profit
                        {
                            deuid: "PDaxfrOTNbP",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G54"
                        }, //Medical Records and Health Information Technicians For Profit
                        {
                            deuid: "PDaxfrOTNbP",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H54"
                        }, //Medical Records and Health Information Technicians HP.1
                        {
                            deuid: "PDaxfrOTNbP",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I54"
                        }, //Medical Records and Health Information Technicians HP.2
                        {
                            deuid: "PDaxfrOTNbP",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J54"
                        }, //Medical Records and Health Information Technicians HP.3
                        {
                            deuid: "PDaxfrOTNbP",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K54"
                        }, //Medical Records and Health Information Technicians HP.4
                        {
                            deuid: "PDaxfrOTNbP",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L54"
                        }, //Medical Records and Health Information Technicians HP.5
                        {
                            deuid: "PDaxfrOTNbP",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M54"
                        }, //Medical Records and Health Information Technicians HP.6
                        {
                            deuid: "AdDFDID6k9W",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E55"
                        }, //Medical Assistants Public
                        {
                            deuid: "AdDFDID6k9W",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F55"
                        }, //Medical Assistants Not for Profit
                        {
                            deuid: "AdDFDID6k9W",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G55"
                        }, //Medical Assistants For Profit
                        {
                            deuid: "AdDFDID6k9W",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H55"
                        }, //Medical Assistants HP.1
                        {
                            deuid: "AdDFDID6k9W",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I55"
                        }, //Medical Assistants HP.2
                        {
                            deuid: "AdDFDID6k9W",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J55"
                        }, //Medical Assistants HP.3
                        {
                            deuid: "AdDFDID6k9W",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K55"
                        }, //Medical Assistants HP.4
                        {
                            deuid: "AdDFDID6k9W",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L55"
                        }, //Medical Assistants HP.5
                        {
                            deuid: "AdDFDID6k9W",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M55"
                        }, //Medical Assistants HP.6
                        {
                            deuid: "AwitV0Jocja",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E56"
                        }, //Ambulance Workers Public
                        {
                            deuid: "AwitV0Jocja",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F56"
                        }, //Ambulance Workers Not for Profit
                        {
                            deuid: "AwitV0Jocja",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G56"
                        }, //Ambulance Workers For Profit
                        {
                            deuid: "AwitV0Jocja",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H56"
                        }, //Ambulance Workers HP.1
                        {
                            deuid: "AwitV0Jocja",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I56"
                        }, //Ambulance Workers HP.2
                        {
                            deuid: "AwitV0Jocja",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J56"
                        }, //Ambulance Workers HP.3
                        {
                            deuid: "AwitV0Jocja",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K56"
                        }, //Ambulance Workers HP.4
                        {
                            deuid: "AwitV0Jocja",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L56"
                        }, //Ambulance Workers HP.5
                        {
                            deuid: "AwitV0Jocja",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M56"
                        }, //Ambulance Workers HP.6
                        {
                            deuid: "PYdi9KKaylg",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E57"
                        }, //Social work and counselling professionals Public
                        {
                            deuid: "PYdi9KKaylg",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F57"
                        }, //Social work and counselling professionals Not for Profit
                        {
                            deuid: "PYdi9KKaylg",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G57"
                        }, //Social work and counselling professionals For Profit
                        {
                            deuid: "PYdi9KKaylg",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H57"
                        }, //Social work and counselling professionals HP.1
                        {
                            deuid: "PYdi9KKaylg",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I57"
                        }, //Social work and counselling professionals HP.2
                        {
                            deuid: "PYdi9KKaylg",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J57"
                        }, //Social work and counselling professionals HP.3
                        {
                            deuid: "PYdi9KKaylg",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K57"
                        }, //Social work and counselling professionals HP.4
                        {
                            deuid: "PYdi9KKaylg",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L57"
                        }, //Social work and counselling professionals HP.5
                        {
                            deuid: "PYdi9KKaylg",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M57"
                        }, //Social work and counselling professionals HP.6
                        {
                            deuid: "FjX1rlm2TtA",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E58"
                        }, //Social work associate professionals Public
                        {
                            deuid: "FjX1rlm2TtA",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F58"
                        }, //Social work associate professionals Not for Profit
                        {
                            deuid: "FjX1rlm2TtA",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G58"
                        }, //Social work associate professionals For Profit
                        {
                            deuid: "FjX1rlm2TtA",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H58"
                        }, //Social work associate professionals HP.1
                        {
                            deuid: "FjX1rlm2TtA",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I58"
                        }, //Social work associate professionals HP.2
                        {
                            deuid: "FjX1rlm2TtA",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J58"
                        }, //Social work associate professionals HP.3
                        {
                            deuid: "FjX1rlm2TtA",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K58"
                        }, //Social work associate professionals HP.4
                        {
                            deuid: "FjX1rlm2TtA",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L58"
                        }, //Social work associate professionals HP.5
                        {
                            deuid: "FjX1rlm2TtA",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M58"
                        }, //Social work associate professionals HP.6
                        {
                            deuid: "o6gD9w1myBu",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E59"
                        }, //Biomedical engineer Public
                        {
                            deuid: "o6gD9w1myBu",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F59"
                        }, //Biomedical engineer Not for Profit
                        {
                            deuid: "o6gD9w1myBu",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G59"
                        }, //Biomedical engineer For Profit
                        {
                            deuid: "o6gD9w1myBu",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H59"
                        }, //Biomedical engineer HP.1
                        {
                            deuid: "o6gD9w1myBu",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I59"
                        }, //Biomedical engineer HP.2
                        {
                            deuid: "o6gD9w1myBu",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J59"
                        }, //Biomedical engineer HP.3
                        {
                            deuid: "o6gD9w1myBu",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K59"
                        }, //Biomedical engineer HP.4
                        {
                            deuid: "o6gD9w1myBu",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L59"
                        }, //Biomedical engineer HP.5
                        {
                            deuid: "o6gD9w1myBu",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M59"
                        }, //Biomedical engineer HP.6
                        {
                            deuid: "j2ZNUH6erBa",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E60"
                        }, //Psychologists Public
                        {
                            deuid: "j2ZNUH6erBa",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F60"
                        }, //Psychologists Not for Profit
                        {
                            deuid: "j2ZNUH6erBa",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G60"
                        }, //Psychologists For Profit
                        {
                            deuid: "j2ZNUH6erBa",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H60"
                        }, //Psychologists HP.1
                        {
                            deuid: "j2ZNUH6erBa",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I60"
                        }, //Psychologists HP.2
                        {
                            deuid: "j2ZNUH6erBa",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J60"
                        }, //Psychologists HP.3
                        {
                            deuid: "j2ZNUH6erBa",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K60"
                        }, //Psychologists HP.4
                        {
                            deuid: "j2ZNUH6erBa",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L60"
                        }, //Psychologists HP.5
                        {
                            deuid: "j2ZNUH6erBa",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M60"
                        }, //Psychologists HP.6
                        {
                            deuid: "hUEUvVTNJ9P",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E61"
                        }, //Medical secretaries Public
                        {
                            deuid: "hUEUvVTNJ9P",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F61"
                        }, //Medical secretaries Not for Profit
                        {
                            deuid: "hUEUvVTNJ9P",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G61"
                        }, //Medical secretaries For Profit
                        {
                            deuid: "hUEUvVTNJ9P",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H61"
                        }, //Medical secretaries HP.1
                        {
                            deuid: "hUEUvVTNJ9P",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I61"
                        }, //Medical secretaries HP.2
                        {
                            deuid: "hUEUvVTNJ9P",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J61"
                        }, //Medical secretaries HP.3
                        {
                            deuid: "hUEUvVTNJ9P",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K61"
                        }, //Medical secretaries HP.4
                        {
                            deuid: "hUEUvVTNJ9P",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L61"
                        }, //Medical secretaries HP.5
                        {
                            deuid: "hUEUvVTNJ9P",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M61"
                        }, //Medical secretaries HP.6
                        {
                            deuid: "BGrgjrIX5Ri",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E62"
                        }, //Managerial staff Public
                        {
                            deuid: "BGrgjrIX5Ri",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F62"
                        }, //Managerial staff Not for Profit
                        {
                            deuid: "BGrgjrIX5Ri",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G62"
                        }, //Managerial staff For Profit
                        {
                            deuid: "BGrgjrIX5Ri",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H62"
                        }, //Managerial staff HP.1
                        {
                            deuid: "BGrgjrIX5Ri",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I62"
                        }, //Managerial staff HP.2
                        {
                            deuid: "BGrgjrIX5Ri",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J62"
                        }, //Managerial staff HP.3
                        {
                            deuid: "BGrgjrIX5Ri",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K62"
                        }, //Managerial staff HP.4
                        {
                            deuid: "BGrgjrIX5Ri",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L62"
                        }, //Managerial staff HP.5
                        {
                            deuid: "BGrgjrIX5Ri",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M62"
                        }, //Managerial staff HP.6
                        {
                            deuid: "SVNenUYsHL8",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E63"
                        }, //Administrative staff Public
                        {
                            deuid: "SVNenUYsHL8",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F63"
                        }, //Administrative staff Not for Profit
                        {
                            deuid: "SVNenUYsHL8",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G63"
                        }, //Administrative staff For Profit
                        {
                            deuid: "SVNenUYsHL8",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H63"
                        }, //Administrative staff HP.1
                        {
                            deuid: "SVNenUYsHL8",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I63"
                        }, //Administrative staff HP.2
                        {
                            deuid: "SVNenUYsHL8",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J63"
                        }, //Administrative staff HP.3
                        {
                            deuid: "SVNenUYsHL8",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K63"
                        }, //Administrative staff HP.4
                        {
                            deuid: "SVNenUYsHL8",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L63"
                        }, //Administrative staff HP.5
                        {
                            deuid: "SVNenUYsHL8",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M63"
                        }, //Administrative staff HP.6
                        {
                            deuid: "NARmt1jLp0H",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E64"
                        }, //Health information systems personnel Public
                        {
                            deuid: "NARmt1jLp0H",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F64"
                        }, //Health information systems personnel Not for Profit
                        {
                            deuid: "NARmt1jLp0H",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G64"
                        }, //Health information systems personnel For Profit
                        {
                            deuid: "NARmt1jLp0H",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H64"
                        }, //Health information systems personnel HP.1
                        {
                            deuid: "NARmt1jLp0H",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I64"
                        }, //Health information systems personnel HP.2
                        {
                            deuid: "NARmt1jLp0H",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J64"
                        }, //Health information systems personnel HP.3
                        {
                            deuid: "NARmt1jLp0H",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K64"
                        }, //Health information systems personnel HP.4
                        {
                            deuid: "NARmt1jLp0H",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L64"
                        }, //Health information systems personnel HP.5
                        {
                            deuid: "NARmt1jLp0H",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M64"
                        }, //Health information systems personnel HP.6
                        {
                            deuid: "xJURWgPOCWP",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E65"
                        }, //Engineering and maintenance staff Public
                        {
                            deuid: "xJURWgPOCWP",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F65"
                        }, //Engineering and maintenance staff Not for Profit
                        {
                            deuid: "xJURWgPOCWP",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G65"
                        }, //Engineering and maintenance staff For Profit
                        {
                            deuid: "xJURWgPOCWP",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H65"
                        }, //Engineering and maintenance staff HP.1
                        {
                            deuid: "xJURWgPOCWP",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I65"
                        }, //Engineering and maintenance staff HP.2
                        {
                            deuid: "xJURWgPOCWP",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J65"
                        }, //Engineering and maintenance staff HP.3
                        {
                            deuid: "xJURWgPOCWP",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K65"
                        }, //Engineering and maintenance staff HP.4
                        {
                            deuid: "xJURWgPOCWP",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L65"
                        }, //Engineering and maintenance staff HP.5
                        {
                            deuid: "xJURWgPOCWP",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M65"
                        }, //Engineering and maintenance staff HP.6
                        {
                            deuid: "U9S9LefGuER",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E66"
                        }, //Other non-medical professional staff Public
                        {
                            deuid: "U9S9LefGuER",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F66"
                        }, //Other non-medical professional staff Not for Profit
                        {
                            deuid: "U9S9LefGuER",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G66"
                        }, //Other non-medical professional staff For Profit
                        {
                            deuid: "U9S9LefGuER",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H66"
                        }, //Other non-medical professional staff HP.1
                        {
                            deuid: "U9S9LefGuER",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I66"
                        }, //Other non-medical professional staff HP.2
                        {
                            deuid: "U9S9LefGuER",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J66"
                        }, //Other non-medical professional staff HP.3
                        {
                            deuid: "U9S9LefGuER",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K66"
                        }, //Other non-medical professional staff HP.4
                        {
                            deuid: "U9S9LefGuER",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L66"
                        }, //Other non-medical professional staff HP.5
                        {
                            deuid: "U9S9LefGuER",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M66"
                        }, //Other non-medical professional staff HP.6
                        {
                            deuid: "ZP7hy3u68BE",
                            cocuid: "in8I2tvJPMN",
                            cell_no: "E67"
                        }, //Other non-medical support staff Public
                        {
                            deuid: "ZP7hy3u68BE",
                            cocuid: "cqnAMSSOQTI",
                            cell_no: "F67"
                        }, //Other non-medical support staff Not for Profit
                        {
                            deuid: "ZP7hy3u68BE",
                            cocuid: "gqbloAW0isi",
                            cell_no: "G67"
                        }, //Other non-medical support staff For Profit
                        {
                            deuid: "ZP7hy3u68BE",
                            cocuid: "nrZJCkxLVcu",
                            cell_no: "H67"
                        }, //Other non-medical support staff HP.1
                        {
                            deuid: "ZP7hy3u68BE",
                            cocuid: "qUyuv0pANEV",
                            cell_no: "I67"
                        }, //Other non-medical support staff HP.2
                        {
                            deuid: "ZP7hy3u68BE",
                            cocuid: "mOSkWl93wE1",
                            cell_no: "J67"
                        }, //Other non-medical support staff HP.3
                        {
                            deuid: "ZP7hy3u68BE",
                            cocuid: "QNfHryvecQa",
                            cell_no: "K67"
                        }, //Other non-medical support staff HP.4
                        {
                            deuid: "ZP7hy3u68BE",
                            cocuid: "utUfP53Luzx",
                            cell_no: "L67"
                        }, //Other non-medical support staff HP.5
                        {
                            deuid: "ZP7hy3u68BE",
                            cocuid: "L73tmAA5Z6B",
                            cell_no: "M67"
                        }, //Other non-medical support staff HP.6
                        {
                            deuid: "l91qM3cJTek",
                            cocuid: "Xr12mI7VPn3",
                            cell_no: "D8"
                        }, //Working personnel in all sectors
                        {
                            deuid: "sV8cE4AX2yl",
                            cocuid: "Xr12mI7VPn3",
                            cell_no: "D9"
                        } //Working personnel in the health sector
                    ]
                },
                {
                    sheet_type: "AGGREGATE_STATIC",
                    sheet_no: 3, //Foreign Trained
                    orgUnitIdScheme: "UID",
                    dataElementIdScheme: "UID",
                    idScheme: "UID",
                    oucode_cell: "Q2",
                    year_cell: "O4",
                    last_data_column: "ZZ",

                    agg_des: [
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "i14E8ggjzvt",
                            cell_no: "D8"
                        }, //Medical Doctors trained in Afghanistan
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "i14E8ggjzvt",
                            cell_no: "E8"
                        }, //Nurses trained in Afghanistan
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "EhXjWmnNPjO",
                            cell_no: "D9"
                        }, //Medical Doctors trained in Albania
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "EhXjWmnNPjO",
                            cell_no: "E9"
                        }, //Nurses trained in Albania
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "rJ2dfIqC23R",
                            cell_no: "D10"
                        }, //Medical Doctors trained in Algeria
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "rJ2dfIqC23R",
                            cell_no: "E10"
                        }, //Nurses trained in Algeria
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "vwj0hgJQQ8O",
                            cell_no: "D11"
                        }, //Medical Doctors trained in Andorra
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "vwj0hgJQQ8O",
                            cell_no: "E11"
                        }, //Nurses trained in Andorra
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "BkdpZQISAQE",
                            cell_no: "D12"
                        }, //Medical Doctors trained in Angola
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "BkdpZQISAQE",
                            cell_no: "E12"
                        }, //Nurses trained in Angola
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "VOFBd8mUdSi",
                            cell_no: "D13"
                        }, //Medical Doctors trained in Antigua and Barbuda
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "VOFBd8mUdSi",
                            cell_no: "E13"
                        }, //Nurses trained in Antigua and Barbuda
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "K3EI0GwfkG8",
                            cell_no: "D14"
                        }, //Medical Doctors trained in Argentina
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "K3EI0GwfkG8",
                            cell_no: "E14"
                        }, //Nurses trained in Argentina
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "H8DnO52iMD9",
                            cell_no: "D15"
                        }, //Medical Doctors trained in Armenia
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "H8DnO52iMD9",
                            cell_no: "E15"
                        }, //Nurses trained in Armenia
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "mVxpfBydPB7",
                            cell_no: "D16"
                        }, //Medical Doctors trained in Australia
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "mVxpfBydPB7",
                            cell_no: "E16"
                        }, //Nurses trained in Australia
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "VjdgVLwPWfZ",
                            cell_no: "D17"
                        }, //Medical Doctors trained in Austria
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "VjdgVLwPWfZ",
                            cell_no: "E17"
                        }, //Nurses trained in Austria
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "yDEKhOz2lvV",
                            cell_no: "D18"
                        }, //Medical Doctors trained in Azerbaijan
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "yDEKhOz2lvV",
                            cell_no: "E18"
                        }, //Nurses trained in Azerbaijan
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "YDDLRoVNxAB",
                            cell_no: "D19"
                        }, //Medical Doctors trained in Bahamas (the)
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "YDDLRoVNxAB",
                            cell_no: "E19"
                        }, //Nurses trained in Bahamas (the)
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "aLiNAjoAsDt",
                            cell_no: "D20"
                        }, //Medical Doctors trained in Bahrain
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "aLiNAjoAsDt",
                            cell_no: "E20"
                        }, //Nurses trained in Bahrain
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "mQOrGsSPzBX",
                            cell_no: "D21"
                        }, //Medical Doctors trained in Bangladesh
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "mQOrGsSPzBX",
                            cell_no: "E21"
                        }, //Nurses trained in Bangladesh
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "Lpvf0YxPz6h",
                            cell_no: "D22"
                        }, //Medical Doctors trained in Barbados
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "Lpvf0YxPz6h",
                            cell_no: "E22"
                        }, //Nurses trained in Barbados
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "L3f8EEO2QTn",
                            cell_no: "D23"
                        }, //Medical Doctors trained in Belarus
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "L3f8EEO2QTn",
                            cell_no: "E23"
                        }, //Nurses trained in Belarus
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "iHzbU9M01XV",
                            cell_no: "D24"
                        }, //Medical Doctors trained in Belgium
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "iHzbU9M01XV",
                            cell_no: "E24"
                        }, //Nurses trained in Belgium
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "YuLaFfZxTwJ",
                            cell_no: "D25"
                        }, //Medical Doctors trained in Belize
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "YuLaFfZxTwJ",
                            cell_no: "E25"
                        }, //Nurses trained in Belize
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "OyaYCadoBtb",
                            cell_no: "D26"
                        }, //Medical Doctors trained in Benin
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "OyaYCadoBtb",
                            cell_no: "E26"
                        }, //Nurses trained in Benin
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "pjDDwNroUiK",
                            cell_no: "D27"
                        }, //Medical Doctors trained in Bhutan
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "pjDDwNroUiK",
                            cell_no: "E27"
                        }, //Nurses trained in Bhutan
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "Exg37zi5bC6",
                            cell_no: "D28"
                        }, //Medical Doctors trained in Bolivia (Plurinational State of)
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "Exg37zi5bC6",
                            cell_no: "E28"
                        }, //Nurses trained in Bolivia (Plurinational State of)
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "S8oIZdNn50G",
                            cell_no: "D29"
                        }, //Medical Doctors trained in Bosnia and Herzegovina
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "S8oIZdNn50G",
                            cell_no: "E29"
                        }, //Nurses trained in Bosnia and Herzegovina
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "HP50SIF4Fby",
                            cell_no: "D30"
                        }, //Medical Doctors trained in Botswana
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "HP50SIF4Fby",
                            cell_no: "E30"
                        }, //Nurses trained in Botswana
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "JgcDpU82eRk",
                            cell_no: "D31"
                        }, //Medical Doctors trained in Brazil
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "JgcDpU82eRk",
                            cell_no: "E31"
                        }, //Nurses trained in Brazil
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "V5rMEsxYhaF",
                            cell_no: "D32"
                        }, //Medical Doctors trained in Brunei Darussalam
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "V5rMEsxYhaF",
                            cell_no: "E32"
                        }, //Nurses trained in Brunei Darussalam
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "aeEH9WsPkWk",
                            cell_no: "D33"
                        }, //Medical Doctors trained in Bulgaria
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "aeEH9WsPkWk",
                            cell_no: "E33"
                        }, //Nurses trained in Bulgaria
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "HzK449Z1Mop",
                            cell_no: "D34"
                        }, //Medical Doctors trained in Burkina Faso
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "HzK449Z1Mop",
                            cell_no: "E34"
                        }, //Nurses trained in Burkina Faso
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "B3fcwYE45w6",
                            cell_no: "D35"
                        }, //Medical Doctors trained in Burundi
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "B3fcwYE45w6",
                            cell_no: "E35"
                        }, //Nurses trained in Burundi
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "ix4kFHxwYTd",
                            cell_no: "D36"
                        }, //Medical Doctors trained in Cambodia
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "ix4kFHxwYTd",
                            cell_no: "E36"
                        }, //Nurses trained in Cambodia
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "zdnpGy5G70E",
                            cell_no: "D37"
                        }, //Medical Doctors trained in Cameroon
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "zdnpGy5G70E",
                            cell_no: "E37"
                        }, //Nurses trained in Cameroon
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "ZyDNe6r8Rcu",
                            cell_no: "D38"
                        }, //Medical Doctors trained in Canada
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "ZyDNe6r8Rcu",
                            cell_no: "E38"
                        }, //Nurses trained in Canada
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "zA5RHKBta1T",
                            cell_no: "D39"
                        }, //Medical Doctors trained in Cape Verde
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "zA5RHKBta1T",
                            cell_no: "E39"
                        }, //Nurses trained in Cape Verde
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "HdwPlhpIWce",
                            cell_no: "D40"
                        }, //Medical Doctors trained in Central African Republic
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "HdwPlhpIWce",
                            cell_no: "E40"
                        }, //Nurses trained in Central African Republic
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "IttDSHJE3tY",
                            cell_no: "D41"
                        }, //Medical Doctors trained in Chad
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "IttDSHJE3tY",
                            cell_no: "E41"
                        }, //Nurses trained in Chad
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "RRV32wU5Sk1",
                            cell_no: "D42"
                        }, //Medical Doctors trained in Chile
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "RRV32wU5Sk1",
                            cell_no: "E42"
                        }, //Nurses trained in Chile
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "Nq0rzj9aWEV",
                            cell_no: "D43"
                        }, //Medical Doctors trained in China (the People"s Republic of)
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "Nq0rzj9aWEV",
                            cell_no: "E43"
                        }, //Nurses trained in China (the People"s Republic of)
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "QdpBLugMtqQ",
                            cell_no: "D44"
                        }, //Medical Doctors trained in Colombia
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "QdpBLugMtqQ",
                            cell_no: "E44"
                        }, //Nurses trained in Colombia
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "POUZYADWUp1",
                            cell_no: "D45"
                        }, //Medical Doctors trained in Comoros (the)
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "POUZYADWUp1",
                            cell_no: "E45"
                        }, //Nurses trained in Comoros (the)
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "LBtaidI5G2z",
                            cell_no: "D46"
                        }, //Medical Doctors trained in Congo (the)
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "LBtaidI5G2z",
                            cell_no: "E46"
                        }, //Nurses trained in Congo (the)
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "Y1v6mwcswYO",
                            cell_no: "D47"
                        }, //Medical Doctors trained in Cook Islands
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "Y1v6mwcswYO",
                            cell_no: "E47"
                        }, //Nurses trained in Cook Islands
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "cxRqR2lVtM7",
                            cell_no: "D48"
                        }, //Medical Doctors trained in Costa Rica
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "cxRqR2lVtM7",
                            cell_no: "E48"
                        }, //Nurses trained in Costa Rica
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "k8RfzK41pD4",
                            cell_no: "D49"
                        }, //Medical Doctors trained in Côte d"Ivoire
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "k8RfzK41pD4",
                            cell_no: "E49"
                        }, //Nurses trained in Côte d"Ivoire
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "JMWzvzwgToC",
                            cell_no: "D50"
                        }, //Medical Doctors trained in Croatia
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "JMWzvzwgToC",
                            cell_no: "E50"
                        }, //Nurses trained in Croatia
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "zexkIIZrZ3B",
                            cell_no: "D51"
                        }, //Medical Doctors trained in Cuba
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "zexkIIZrZ3B",
                            cell_no: "E51"
                        }, //Nurses trained in Cuba
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "RdP4lkM83cM",
                            cell_no: "D52"
                        }, //Medical Doctors trained in Cyprus
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "RdP4lkM83cM",
                            cell_no: "E52"
                        }, //Nurses trained in Cyprus
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "F59E3s3oEOr",
                            cell_no: "D53"
                        }, //Medical Doctors trained in Czech Republic
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "F59E3s3oEOr",
                            cell_no: "E53"
                        }, //Nurses trained in Czech Republic
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "wlPajJhqkui",
                            cell_no: "D54"
                        }, //Medical Doctors trained in Democratic People"s Republic of Korea
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "wlPajJhqkui",
                            cell_no: "E54"
                        }, //Nurses trained in Democratic People"s Republic of Korea
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "GkT2M3jxh7F",
                            cell_no: "D55"
                        }, //Medical Doctors trained in Democratic Republic of the Congo
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "GkT2M3jxh7F",
                            cell_no: "E55"
                        }, //Nurses trained in Democratic Republic of the Congo
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "sj4i9BflXvh",
                            cell_no: "D56"
                        }, //Medical Doctors trained in Denmark
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "sj4i9BflXvh",
                            cell_no: "E56"
                        }, //Nurses trained in Denmark
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "MSX2ncxe0gF",
                            cell_no: "D57"
                        }, //Medical Doctors trained in Djibouti
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "MSX2ncxe0gF",
                            cell_no: "E57"
                        }, //Nurses trained in Djibouti
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "w5pFdpuCUW7",
                            cell_no: "D58"
                        }, //Medical Doctors trained in Dominica
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "w5pFdpuCUW7",
                            cell_no: "E58"
                        }, //Nurses trained in Dominica
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "B8UngZ8uwD2",
                            cell_no: "D59"
                        }, //Medical Doctors trained in Dominican Republic
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "B8UngZ8uwD2",
                            cell_no: "E59"
                        }, //Nurses trained in Dominican Republic
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "rJSdwEyXgfh",
                            cell_no: "D60"
                        }, //Medical Doctors trained in Ecuador
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "rJSdwEyXgfh",
                            cell_no: "E60"
                        }, //Nurses trained in Ecuador
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "Uubd1dIoT4W",
                            cell_no: "D61"
                        }, //Medical Doctors trained in Egypt
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "Uubd1dIoT4W",
                            cell_no: "E61"
                        }, //Nurses trained in Egypt
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "xl2h6v1N72r",
                            cell_no: "D62"
                        }, //Medical Doctors trained in El Salvador
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "xl2h6v1N72r",
                            cell_no: "E62"
                        }, //Nurses trained in El Salvador
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "zOt4KjY6v7C",
                            cell_no: "D63"
                        }, //Medical Doctors trained in Equatorial Guinea
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "zOt4KjY6v7C",
                            cell_no: "E63"
                        }, //Nurses trained in Equatorial Guinea
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "XbTx2aGNiKd",
                            cell_no: "D64"
                        }, //Medical Doctors trained in Eritrea
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "XbTx2aGNiKd",
                            cell_no: "E64"
                        }, //Nurses trained in Eritrea
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "CduVOiDWxlt",
                            cell_no: "D65"
                        }, //Medical Doctors trained in Estonia
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "CduVOiDWxlt",
                            cell_no: "E65"
                        }, //Nurses trained in Estonia
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "z5MSkYMyUDA",
                            cell_no: "D66"
                        }, //Medical Doctors trained in Ethiopia
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "z5MSkYMyUDA",
                            cell_no: "E66"
                        }, //Nurses trained in Ethiopia
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "n1ptipI0iZU",
                            cell_no: "D67"
                        }, //Medical Doctors trained in Fiji
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "n1ptipI0iZU",
                            cell_no: "E67"
                        }, //Nurses trained in Fiji
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "H9TZE490EpE",
                            cell_no: "D68"
                        }, //Medical Doctors trained in Finland
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "H9TZE490EpE",
                            cell_no: "E68"
                        }, //Nurses trained in Finland
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "pqnXfUagaiY",
                            cell_no: "D69"
                        }, //Medical Doctors trained in France
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "pqnXfUagaiY",
                            cell_no: "E69"
                        }, //Nurses trained in France
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "LRoVMRyVmrE",
                            cell_no: "D70"
                        }, //Medical Doctors trained in Gabon
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "LRoVMRyVmrE",
                            cell_no: "E70"
                        }, //Nurses trained in Gabon
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "Z0aVan7vD82",
                            cell_no: "D71"
                        }, //Medical Doctors trained in Gambia
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "Z0aVan7vD82",
                            cell_no: "E71"
                        }, //Nurses trained in Gambia
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "hPJQaP7PdYq",
                            cell_no: "D72"
                        }, //Medical Doctors trained in Georgia
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "hPJQaP7PdYq",
                            cell_no: "E72"
                        }, //Nurses trained in Georgia
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "UTDBwK73RlG",
                            cell_no: "D73"
                        }, //Medical Doctors trained in Germany
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "UTDBwK73RlG",
                            cell_no: "E73"
                        }, //Nurses trained in Germany
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "BE32i8A9IOr",
                            cell_no: "D74"
                        }, //Medical Doctors trained in Ghana
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "BE32i8A9IOr",
                            cell_no: "E74"
                        }, //Nurses trained in Ghana
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "dplV0gzW0ea",
                            cell_no: "D75"
                        }, //Medical Doctors trained in Greece
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "dplV0gzW0ea",
                            cell_no: "E75"
                        }, //Nurses trained in Greece
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "NojSG8rZDfq",
                            cell_no: "D76"
                        }, //Medical Doctors trained in Grenada
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "NojSG8rZDfq",
                            cell_no: "E76"
                        }, //Nurses trained in Grenada
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "hjdFz4fLLzw",
                            cell_no: "D77"
                        }, //Medical Doctors trained in Guatemala
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "hjdFz4fLLzw",
                            cell_no: "E77"
                        }, //Nurses trained in Guatemala
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "GKkncWAOs8H",
                            cell_no: "D78"
                        }, //Medical Doctors trained in Guinea
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "GKkncWAOs8H",
                            cell_no: "E78"
                        }, //Nurses trained in Guinea
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "EPjTph0oE8r",
                            cell_no: "D79"
                        }, //Medical Doctors trained in Guinea-Bissau
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "EPjTph0oE8r",
                            cell_no: "E79"
                        }, //Nurses trained in Guinea-Bissau
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "Zgk5mud8930",
                            cell_no: "D80"
                        }, //Medical Doctors trained in Guyana
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "Zgk5mud8930",
                            cell_no: "E80"
                        }, //Nurses trained in Guyana
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "SlA9m2ZX9XS",
                            cell_no: "D81"
                        }, //Medical Doctors trained in Haiti
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "SlA9m2ZX9XS",
                            cell_no: "E81"
                        }, //Nurses trained in Haiti
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "hIrci8ms28E",
                            cell_no: "D82"
                        }, //Medical Doctors trained in Honduras
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "hIrci8ms28E",
                            cell_no: "E82"
                        }, //Nurses trained in Honduras
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "BKNhBq1RiwZ",
                            cell_no: "D83"
                        }, //Medical Doctors trained in Hungary
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "BKNhBq1RiwZ",
                            cell_no: "E83"
                        }, //Nurses trained in Hungary
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "uNJCzPnnWNW",
                            cell_no: "D84"
                        }, //Medical Doctors trained in Iceland
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "uNJCzPnnWNW",
                            cell_no: "E84"
                        }, //Nurses trained in Iceland
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "HvDcrobmiCy",
                            cell_no: "D85"
                        }, //Medical Doctors trained in India
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "HvDcrobmiCy",
                            cell_no: "E85"
                        }, //Nurses trained in India
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "qdxpgnOUeam",
                            cell_no: "D86"
                        }, //Medical Doctors trained in Indonesia
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "qdxpgnOUeam",
                            cell_no: "E86"
                        }, //Nurses trained in Indonesia
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "KvI6UnlCWE8",
                            cell_no: "D87"
                        }, //Medical Doctors trained in Iran (Islamic Republic of)
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "KvI6UnlCWE8",
                            cell_no: "E87"
                        }, //Nurses trained in Iran (Islamic Republic of)
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "XW4cMFJ3IPd",
                            cell_no: "D88"
                        }, //Medical Doctors trained in Iraq
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "XW4cMFJ3IPd",
                            cell_no: "E88"
                        }, //Nurses trained in Iraq
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "enrjtKkx6PG",
                            cell_no: "D89"
                        }, //Medical Doctors trained in Ireland
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "enrjtKkx6PG",
                            cell_no: "E89"
                        }, //Nurses trained in Ireland
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "JrSwky5tYzt",
                            cell_no: "D90"
                        }, //Medical Doctors trained in Israel
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "JrSwky5tYzt",
                            cell_no: "E90"
                        }, //Nurses trained in Israel
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "A8ZYkf5BTQ1",
                            cell_no: "D91"
                        }, //Medical Doctors trained in Italy
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "A8ZYkf5BTQ1",
                            cell_no: "E91"
                        }, //Nurses trained in Italy
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "IArireTHAtu",
                            cell_no: "D92"
                        }, //Medical Doctors trained in Jamaica
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "IArireTHAtu",
                            cell_no: "E92"
                        }, //Nurses trained in Jamaica
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "poDz4wDp6J0",
                            cell_no: "D93"
                        }, //Medical Doctors trained in Japan
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "poDz4wDp6J0",
                            cell_no: "E93"
                        }, //Nurses trained in Japan
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "z8JPjc7MYwc",
                            cell_no: "D94"
                        }, //Medical Doctors trained in Jordan
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "z8JPjc7MYwc",
                            cell_no: "E94"
                        }, //Nurses trained in Jordan
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "fAb4itKc1ZM",
                            cell_no: "D95"
                        }, //Medical Doctors trained in Kazakhstan
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "fAb4itKc1ZM",
                            cell_no: "E95"
                        }, //Nurses trained in Kazakhstan
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "nHiJwDVwoBi",
                            cell_no: "D96"
                        }, //Medical Doctors trained in Kenya
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "nHiJwDVwoBi",
                            cell_no: "E96"
                        }, //Nurses trained in Kenya
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "DSefi5x6sWB",
                            cell_no: "D97"
                        }, //Medical Doctors trained in Kiribati
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "DSefi5x6sWB",
                            cell_no: "E97"
                        }, //Nurses trained in Kiribati
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "QUXnEwBKOCt",
                            cell_no: "D98"
                        }, //Medical Doctors trained in Kuwait
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "QUXnEwBKOCt",
                            cell_no: "E98"
                        }, //Nurses trained in Kuwait
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "XxT1SCRuVDD",
                            cell_no: "D99"
                        }, //Medical Doctors trained in Kyrgyzstan
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "XxT1SCRuVDD",
                            cell_no: "E99"
                        }, //Nurses trained in Kyrgyzstan
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "EugP2KVsM7Q",
                            cell_no: "D100"
                        }, //Medical Doctors trained in Lao People"s Democratic Republic
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "EugP2KVsM7Q",
                            cell_no: "E100"
                        }, //Nurses trained in Lao People"s Democratic Republic
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "QUUTx1RNwpi",
                            cell_no: "D101"
                        }, //Medical Doctors trained in Latvia
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "QUUTx1RNwpi",
                            cell_no: "E101"
                        }, //Nurses trained in Latvia
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "CqGT5VjDx2p",
                            cell_no: "D102"
                        }, //Medical Doctors trained in Lebanon
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "CqGT5VjDx2p",
                            cell_no: "E102"
                        }, //Nurses trained in Lebanon
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "aoq4jeGV5NM",
                            cell_no: "D103"
                        }, //Medical Doctors trained in Lesotho
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "aoq4jeGV5NM",
                            cell_no: "E103"
                        }, //Nurses trained in Lesotho
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "JPBLCDK3H2x",
                            cell_no: "D104"
                        }, //Medical Doctors trained in Liberia
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "JPBLCDK3H2x",
                            cell_no: "E104"
                        }, //Nurses trained in Liberia
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "efCfb5edDjv",
                            cell_no: "D105"
                        }, //Medical Doctors trained in Libyan Arab Jamahiriya
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "efCfb5edDjv",
                            cell_no: "E105"
                        }, //Nurses trained in Libyan Arab Jamahiriya
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "DOa51SvSShy",
                            cell_no: "D106"
                        }, //Medical Doctors trained in Lithuania
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "DOa51SvSShy",
                            cell_no: "E106"
                        }, //Nurses trained in Lithuania
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "LE4fsk3RYza",
                            cell_no: "D107"
                        }, //Medical Doctors trained in Luxembourg
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "LE4fsk3RYza",
                            cell_no: "E107"
                        }, //Nurses trained in Luxembourg
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "zg6B0qb5NY3",
                            cell_no: "D108"
                        }, //Medical Doctors trained in Madagascar
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "zg6B0qb5NY3",
                            cell_no: "E108"
                        }, //Nurses trained in Madagascar
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "ZO5braqROk6",
                            cell_no: "D109"
                        }, //Medical Doctors trained in Malawi
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "ZO5braqROk6",
                            cell_no: "E109"
                        }, //Nurses trained in Malawi
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "Mv3kaUwZXRq",
                            cell_no: "D110"
                        }, //Medical Doctors trained in Malaysia
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "Mv3kaUwZXRq",
                            cell_no: "E110"
                        }, //Nurses trained in Malaysia
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "Ak4QGxirDXg",
                            cell_no: "D111"
                        }, //Medical Doctors trained in Maldives
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "Ak4QGxirDXg",
                            cell_no: "E111"
                        }, //Nurses trained in Maldives
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "dAREsnanSp5",
                            cell_no: "D112"
                        }, //Medical Doctors trained in Mali
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "dAREsnanSp5",
                            cell_no: "E112"
                        }, //Nurses trained in Mali
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "GVeTUYRwWNF",
                            cell_no: "D113"
                        }, //Medical Doctors trained in Malta
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "GVeTUYRwWNF",
                            cell_no: "E113"
                        }, //Nurses trained in Malta
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "gvFoQrCkLc2",
                            cell_no: "D114"
                        }, //Medical Doctors trained in Marshall Islands
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "gvFoQrCkLc2",
                            cell_no: "E114"
                        }, //Nurses trained in Marshall Islands
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "uNIgpV4l21k",
                            cell_no: "D115"
                        }, //Medical Doctors trained in Mauritania
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "uNIgpV4l21k",
                            cell_no: "E115"
                        }, //Nurses trained in Mauritania
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "LkiHwqqYnxV",
                            cell_no: "D116"
                        }, //Medical Doctors trained in Mauritius
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "LkiHwqqYnxV",
                            cell_no: "E116"
                        }, //Nurses trained in Mauritius
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "kYO6lFqgkUO",
                            cell_no: "D117"
                        }, //Medical Doctors trained in Mexico
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "kYO6lFqgkUO",
                            cell_no: "E117"
                        }, //Nurses trained in Mexico
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "LddbYuuaWf7",
                            cell_no: "D118"
                        }, //Medical Doctors trained in Micronesia (Federated States of)
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "LddbYuuaWf7",
                            cell_no: "E118"
                        }, //Nurses trained in Micronesia (Federated States of)
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "GC5rlUksCqm",
                            cell_no: "D119"
                        }, //Medical Doctors trained in Monaco
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "GC5rlUksCqm",
                            cell_no: "E119"
                        }, //Nurses trained in Monaco
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "feoDuRjZweV",
                            cell_no: "D120"
                        }, //Medical Doctors trained in Mongolia
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "feoDuRjZweV",
                            cell_no: "E120"
                        }, //Nurses trained in Mongolia
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "blA5KNE6nZO",
                            cell_no: "D121"
                        }, //Medical Doctors trained in Montenegro
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "blA5KNE6nZO",
                            cell_no: "E121"
                        }, //Nurses trained in Montenegro
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "qfXgWkacWGi",
                            cell_no: "D122"
                        }, //Medical Doctors trained in Morocco
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "qfXgWkacWGi",
                            cell_no: "E122"
                        }, //Nurses trained in Morocco
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "pbip5m1yf5Y",
                            cell_no: "D123"
                        }, //Medical Doctors trained in Mozambique
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "pbip5m1yf5Y",
                            cell_no: "E123"
                        }, //Nurses trained in Mozambique
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "RsBAd46LBnm",
                            cell_no: "D124"
                        }, //Medical Doctors trained in Myanmar
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "RsBAd46LBnm",
                            cell_no: "E124"
                        }, //Nurses trained in Myanmar
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "sHcFoPbjSrP",
                            cell_no: "D125"
                        }, //Medical Doctors trained in Namibia
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "sHcFoPbjSrP",
                            cell_no: "E125"
                        }, //Nurses trained in Namibia
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "xsXII0TZ5TD",
                            cell_no: "D126"
                        }, //Medical Doctors trained in Nauru
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "xsXII0TZ5TD",
                            cell_no: "E126"
                        }, //Nurses trained in Nauru
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "QhZPfMYBla6",
                            cell_no: "D127"
                        }, //Medical Doctors trained in Nepal
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "QhZPfMYBla6",
                            cell_no: "E127"
                        }, //Nurses trained in Nepal
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "SZ3nIBbJDHd",
                            cell_no: "D128"
                        }, //Medical Doctors trained in Netherlands
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "SZ3nIBbJDHd",
                            cell_no: "E128"
                        }, //Nurses trained in Netherlands
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "IGq57K2U3et",
                            cell_no: "D129"
                        }, //Medical Doctors trained in New Zealand
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "IGq57K2U3et",
                            cell_no: "E129"
                        }, //Nurses trained in New Zealand
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "qV0jUJzFUER",
                            cell_no: "D130"
                        }, //Medical Doctors trained in Nicaragua
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "qV0jUJzFUER",
                            cell_no: "E130"
                        }, //Nurses trained in Nicaragua
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "Wl6fGTpQ2aN",
                            cell_no: "D131"
                        }, //Medical Doctors trained in Niger
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "Wl6fGTpQ2aN",
                            cell_no: "E131"
                        }, //Nurses trained in Niger
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "EDPtZbCSShb",
                            cell_no: "D132"
                        }, //Medical Doctors trained in Nigeria
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "EDPtZbCSShb",
                            cell_no: "E132"
                        }, //Nurses trained in Nigeria
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "Jx6oc5hMVvO",
                            cell_no: "D133"
                        }, //Medical Doctors trained in Niue
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "Jx6oc5hMVvO",
                            cell_no: "E133"
                        }, //Nurses trained in Niue
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "a2xwzp8oVHw",
                            cell_no: "D134"
                        }, //Medical Doctors trained in Norway
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "a2xwzp8oVHw",
                            cell_no: "E134"
                        }, //Nurses trained in Norway
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "gsbHTvgB2ve",
                            cell_no: "D135"
                        }, //Medical Doctors trained in Oman
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "gsbHTvgB2ve",
                            cell_no: "E135"
                        }, //Nurses trained in Oman
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "jhV8D0Dvbvz",
                            cell_no: "D136"
                        }, //Medical Doctors trained in Pakistan
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "jhV8D0Dvbvz",
                            cell_no: "E136"
                        }, //Nurses trained in Pakistan
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "RJERO5G7Od7",
                            cell_no: "D137"
                        }, //Medical Doctors trained in Palau (Republic of)
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "RJERO5G7Od7",
                            cell_no: "E137"
                        }, //Nurses trained in Palau (Republic of)
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "JRUk55kvbrE",
                            cell_no: "D138"
                        }, //Medical Doctors trained in Panama
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "JRUk55kvbrE",
                            cell_no: "E138"
                        }, //Nurses trained in Panama
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "AGWxyqGhgfk",
                            cell_no: "D139"
                        }, //Medical Doctors trained in Papua New Guinea
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "AGWxyqGhgfk",
                            cell_no: "E139"
                        }, //Nurses trained in Papua New Guinea
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "b6rUObqK3w6",
                            cell_no: "D140"
                        }, //Medical Doctors trained in Paraguay
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "b6rUObqK3w6",
                            cell_no: "E140"
                        }, //Nurses trained in Paraguay
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "Y8Hqecy92p5",
                            cell_no: "D141"
                        }, //Medical Doctors trained in Peru
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "Y8Hqecy92p5",
                            cell_no: "E141"
                        }, //Nurses trained in Peru
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "dyBI6HTR04N",
                            cell_no: "D142"
                        }, //Medical Doctors trained in Philippines
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "dyBI6HTR04N",
                            cell_no: "E142"
                        }, //Nurses trained in Philippines
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "Vlqc8aT5PAo",
                            cell_no: "D143"
                        }, //Medical Doctors trained in Poland
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "Vlqc8aT5PAo",
                            cell_no: "E143"
                        }, //Nurses trained in Poland
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "gxepwyvRxbV",
                            cell_no: "D144"
                        }, //Medical Doctors trained in Portugal
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "gxepwyvRxbV",
                            cell_no: "E144"
                        }, //Nurses trained in Portugal
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "ZmHQN5npDGX",
                            cell_no: "D145"
                        }, //Medical Doctors trained in Qatar
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "ZmHQN5npDGX",
                            cell_no: "E145"
                        }, //Nurses trained in Qatar
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "fPDuFoFWUr3",
                            cell_no: "D146"
                        }, //Medical Doctors trained in Republic of Korea
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "fPDuFoFWUr3",
                            cell_no: "E146"
                        }, //Nurses trained in Republic of Korea
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "Ua4F7QDEr8y",
                            cell_no: "D147"
                        }, //Medical Doctors trained in Republic of Moldova
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "Ua4F7QDEr8y",
                            cell_no: "E147"
                        }, //Nurses trained in Republic of Moldova
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "x01fgjhSf20",
                            cell_no: "D148"
                        }, //Medical Doctors trained in Romania
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "x01fgjhSf20",
                            cell_no: "E148"
                        }, //Nurses trained in Romania
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "HankECMMB6D",
                            cell_no: "D149"
                        }, //Medical Doctors trained in Russian Federation
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "HankECMMB6D",
                            cell_no: "E149"
                        }, //Nurses trained in Russian Federation
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "ZqdYTyLLuyL",
                            cell_no: "D150"
                        }, //Medical Doctors trained in Rwanda
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "ZqdYTyLLuyL",
                            cell_no: "E150"
                        }, //Nurses trained in Rwanda
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "A7vlGlMOCQi",
                            cell_no: "D151"
                        }, //Medical Doctors trained in Saint Kitts and Nevis
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "A7vlGlMOCQi",
                            cell_no: "E151"
                        }, //Nurses trained in Saint Kitts and Nevis
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "Kr3g14QtHqR",
                            cell_no: "D152"
                        }, //Medical Doctors trained in Saint Lucia
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "Kr3g14QtHqR",
                            cell_no: "E152"
                        }, //Nurses trained in Saint Lucia
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "Agh3IhNPIxF",
                            cell_no: "D153"
                        }, //Medical Doctors trained in Saint Vincent and the Grenadines
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "Agh3IhNPIxF",
                            cell_no: "E153"
                        }, //Nurses trained in Saint Vincent and the Grenadines
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "X2GCXVmZeEF",
                            cell_no: "D154"
                        }, //Medical Doctors trained in Samoa
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "X2GCXVmZeEF",
                            cell_no: "E154"
                        }, //Nurses trained in Samoa
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "q4n8NzDkE7D",
                            cell_no: "D155"
                        }, //Medical Doctors trained in San Marino
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "q4n8NzDkE7D",
                            cell_no: "E155"
                        }, //Nurses trained in San Marino
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "rdiq6QPpJC7",
                            cell_no: "D156"
                        }, //Medical Doctors trained in Sao Tome and Principe
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "rdiq6QPpJC7",
                            cell_no: "E156"
                        }, //Nurses trained in Sao Tome and Principe
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "npSh7oFwczs",
                            cell_no: "D157"
                        }, //Medical Doctors trained in Saudi Arabia
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "npSh7oFwczs",
                            cell_no: "E157"
                        }, //Nurses trained in Saudi Arabia
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "hsNootK2YBV",
                            cell_no: "D158"
                        }, //Medical Doctors trained in Senegal
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "hsNootK2YBV",
                            cell_no: "E158"
                        }, //Nurses trained in Senegal
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "WtrglwVLwRf",
                            cell_no: "D159"
                        }, //Medical Doctors trained in Serbia
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "WtrglwVLwRf",
                            cell_no: "E159"
                        }, //Nurses trained in Serbia
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "ANELZaDsI6L",
                            cell_no: "D160"
                        }, //Medical Doctors trained in Seychelles
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "ANELZaDsI6L",
                            cell_no: "E160"
                        }, //Nurses trained in Seychelles
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "GZTChYSePoP",
                            cell_no: "D161"
                        }, //Medical Doctors trained in Sierra Leone
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "GZTChYSePoP",
                            cell_no: "E161"
                        }, //Nurses trained in Sierra Leone
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "GSwM6L4ZPsB",
                            cell_no: "D162"
                        }, //Medical Doctors trained in Singapore
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "GSwM6L4ZPsB",
                            cell_no: "E162"
                        }, //Nurses trained in Singapore
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "dkORIS1sEMv",
                            cell_no: "D163"
                        }, //Medical Doctors trained in Slovakia
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "dkORIS1sEMv",
                            cell_no: "E163"
                        }, //Nurses trained in Slovakia
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "St1b2AfFxLb",
                            cell_no: "D164"
                        }, //Medical Doctors trained in Slovenia
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "St1b2AfFxLb",
                            cell_no: "E164"
                        }, //Nurses trained in Slovenia
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "J1xdPkLQqgn",
                            cell_no: "D165"
                        }, //Medical Doctors trained in Solomon Islands
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "J1xdPkLQqgn",
                            cell_no: "E165"
                        }, //Nurses trained in Solomon Islands
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "f2XAafiQede",
                            cell_no: "D166"
                        }, //Medical Doctors trained in Somalia
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "f2XAafiQede",
                            cell_no: "E166"
                        }, //Nurses trained in Somalia
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "tsd2otYofQa",
                            cell_no: "D167"
                        }, //Medical Doctors trained in South Africa
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "tsd2otYofQa",
                            cell_no: "E167"
                        }, //Nurses trained in South Africa
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "ESi2uY4Gqn1",
                            cell_no: "D168"
                        }, //Medical Doctors trained in South Sudan
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "ESi2uY4Gqn1",
                            cell_no: "E168"
                        }, //Nurses trained in South Sudan
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "lh9mjPVQgUs",
                            cell_no: "D169"
                        }, //Medical Doctors trained in Spain
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "lh9mjPVQgUs",
                            cell_no: "E169"
                        }, //Nurses trained in Spain
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "ysEbNJwwJUO",
                            cell_no: "D170"
                        }, //Medical Doctors trained in Sri Lanka
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "ysEbNJwwJUO",
                            cell_no: "E170"
                        }, //Nurses trained in Sri Lanka
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "slhvGcmFwtM",
                            cell_no: "D171"
                        }, //Medical Doctors trained in Sudan
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "slhvGcmFwtM",
                            cell_no: "E171"
                        }, //Nurses trained in Sudan
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "ibxHVF1IOea",
                            cell_no: "D172"
                        }, //Medical Doctors trained in Suriname
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "ibxHVF1IOea",
                            cell_no: "E172"
                        }, //Nurses trained in Suriname
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "cEeWRyOhOqP",
                            cell_no: "D173"
                        }, //Medical Doctors trained in Swaziland
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "cEeWRyOhOqP",
                            cell_no: "E173"
                        }, //Nurses trained in Swaziland
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "rgozN0dmixB",
                            cell_no: "D174"
                        }, //Medical Doctors trained in Sweden
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "rgozN0dmixB",
                            cell_no: "E174"
                        }, //Nurses trained in Sweden
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "Kh9ikyodKnN",
                            cell_no: "D175"
                        }, //Medical Doctors trained in Switzerland
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "Kh9ikyodKnN",
                            cell_no: "E175"
                        }, //Nurses trained in Switzerland
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "KioZypAqUxc",
                            cell_no: "D176"
                        }, //Medical Doctors trained in Syrian Arab Republic
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "KioZypAqUxc",
                            cell_no: "E176"
                        }, //Nurses trained in Syrian Arab Republic
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "ES9xDNLOKtZ",
                            cell_no: "D177"
                        }, //Medical Doctors trained in Tajikistan
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "ES9xDNLOKtZ",
                            cell_no: "E177"
                        }, //Nurses trained in Tajikistan
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "jfXGOQwsmKq",
                            cell_no: "D178"
                        }, //Medical Doctors trained in Thailand
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "jfXGOQwsmKq",
                            cell_no: "E178"
                        }, //Nurses trained in Thailand
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "MFwYpsgHToP",
                            cell_no: "D179"
                        }, //Medical Doctors trained in The former Yugoslav Republic of Macedonia
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "MFwYpsgHToP",
                            cell_no: "E179"
                        }, //Nurses trained in The former Yugoslav Republic of Macedonia
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "oDBd4Mj0Oc2",
                            cell_no: "D180"
                        }, //Medical Doctors trained in Timor-Leste
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "oDBd4Mj0Oc2",
                            cell_no: "E180"
                        }, //Nurses trained in Timor-Leste
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "LPbH3n77lxu",
                            cell_no: "D181"
                        }, //Medical Doctors trained in Togo
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "LPbH3n77lxu",
                            cell_no: "E181"
                        }, //Nurses trained in Togo
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "rIchxlzx0E0",
                            cell_no: "D182"
                        }, //Medical Doctors trained in Tonga
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "rIchxlzx0E0",
                            cell_no: "E182"
                        }, //Nurses trained in Tonga
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "ROyKFEvDgAp",
                            cell_no: "D183"
                        }, //Medical Doctors trained in Trinidad and Tobago
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "ROyKFEvDgAp",
                            cell_no: "E183"
                        }, //Nurses trained in Trinidad and Tobago
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "c9WexKHjrHc",
                            cell_no: "D184"
                        }, //Medical Doctors trained in Tunisia
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "c9WexKHjrHc",
                            cell_no: "E184"
                        }, //Nurses trained in Tunisia
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "CFWkO0BIhm8",
                            cell_no: "D185"
                        }, //Medical Doctors trained in Turkey
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "CFWkO0BIhm8",
                            cell_no: "E185"
                        }, //Nurses trained in Turkey
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "yYCFsDkV7gN",
                            cell_no: "D186"
                        }, //Medical Doctors trained in Turkmenistan
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "yYCFsDkV7gN",
                            cell_no: "E186"
                        }, //Nurses trained in Turkmenistan
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "uIUcjj7o0UF",
                            cell_no: "D187"
                        }, //Medical Doctors trained in Tuvalu
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "uIUcjj7o0UF",
                            cell_no: "E187"
                        }, //Nurses trained in Tuvalu
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "tWMp2gMdZVY",
                            cell_no: "D188"
                        }, //Medical Doctors trained in Uganda
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "tWMp2gMdZVY",
                            cell_no: "E188"
                        }, //Nurses trained in Uganda
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "btcWCYP4hid",
                            cell_no: "D189"
                        }, //Medical Doctors trained in Ukraine
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "btcWCYP4hid",
                            cell_no: "E189"
                        }, //Nurses trained in Ukraine
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "CaEJOAbJqM8",
                            cell_no: "D190"
                        }, //Medical Doctors trained in United Arab Emirates
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "CaEJOAbJqM8",
                            cell_no: "E190"
                        }, //Nurses trained in United Arab Emirates
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "sJuInXfi09r",
                            cell_no: "D191"
                        }, //Medical Doctors trained in United Kingdom
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "sJuInXfi09r",
                            cell_no: "E191"
                        }, //Nurses trained in United Kingdom
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "JvWTmXsCHJj",
                            cell_no: "D192"
                        }, //Medical Doctors trained in United Republic of Tanzania
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "JvWTmXsCHJj",
                            cell_no: "E192"
                        }, //Nurses trained in United Republic of Tanzania
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "sjuX99wm7IZ",
                            cell_no: "D193"
                        }, //Medical Doctors trained in United States of America
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "sjuX99wm7IZ",
                            cell_no: "E193"
                        }, //Nurses trained in United States of America
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "DNEZnY8mN9a",
                            cell_no: "D194"
                        }, //Medical Doctors trained in Uruguay
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "DNEZnY8mN9a",
                            cell_no: "E194"
                        }, //Nurses trained in Uruguay
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "MaLbWT81P7Q",
                            cell_no: "D195"
                        }, //Medical Doctors trained in Uzbekistan
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "MaLbWT81P7Q",
                            cell_no: "E195"
                        }, //Nurses trained in Uzbekistan
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "sL6GUzUS18c",
                            cell_no: "D196"
                        }, //Medical Doctors trained in Vanuatu
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "sL6GUzUS18c",
                            cell_no: "E196"
                        }, //Nurses trained in Vanuatu
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "y99mLrfSDOg",
                            cell_no: "D197"
                        }, //Medical Doctors trained in Venezuela (Bolivarian Republic of)
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "y99mLrfSDOg",
                            cell_no: "E197"
                        }, //Nurses trained in Venezuela (Bolivarian Republic of)
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "jIuMMPDV6by",
                            cell_no: "D198"
                        }, //Medical Doctors trained in Viet Nam
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "jIuMMPDV6by",
                            cell_no: "E198"
                        }, //Nurses trained in Viet Nam
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "gb8YWtxeYVR",
                            cell_no: "D199"
                        }, //Medical Doctors trained in Yemen
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "gb8YWtxeYVR",
                            cell_no: "E199"
                        }, //Nurses trained in Yemen
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "g2hJEzpZfH1",
                            cell_no: "D200"
                        }, //Medical Doctors trained in Zambia
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "g2hJEzpZfH1",
                            cell_no: "E200"
                        }, //Nurses trained in Zambia
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "IzLrdmSQGZs",
                            cell_no: "D201"
                        }, //Medical Doctors trained in Zimbabwe
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "IzLrdmSQGZs",
                            cell_no: "E201"
                        }, //Nurses trained in Zimbabwe
                        {
                            deuid: "tu2P5ALJRow",
                            cocuid: "kPgF27h5Zao",
                            cell_no: "D202"
                        }, //Medical Doctors trained in OTHERS (not elsewhere classified)
                        {
                            deuid: "Ni2b6zYWjjT",
                            cocuid: "kPgF27h5Zao",
                            cell_no: "E202"
                        } //Nurses trained in OTHERS (not elsewhere classified)
                    ]
                },
                {
                    sheet_type: "AGGREGATE_STATIC_YES_ONLY",
                    sheet_no: 4, //source type
                    orgUnitIdScheme: "UID",
                    dataElementIdScheme: "UID",
                    idScheme: "UID",
                    oucode_cell: "P2",
                    year_cell: "M4",
                    last_data_column: "ZZ",

                    agg_des: [
                        {
                            deuid: "pSRNRBuOBi8",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P8"
                        }, //Ministry of Health source type for Medical Doctors
                        {
                            deuid: "pSRNRBuOBi8",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q8"
                        }, //Ministry of Labour source type for Medical Doctors
                        {
                            deuid: "pSRNRBuOBi8",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R8"
                        }, //Ministry of Internal/External Affairs source type for Medical Doctors
                        {
                            deuid: "pSRNRBuOBi8",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S8"
                        }, //National/Central Statistical Office source type for Medical Doctors
                        {
                            deuid: "pSRNRBuOBi8",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T8"
                        }, //National HRH Observatory source type for Medical Doctors
                        {
                            deuid: "pSRNRBuOBi8",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U8"
                        }, //Professional association/Council/ Chamber source type for Medical Doctors
                        {
                            deuid: "pSRNRBuOBi8",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V8"
                        }, //Regional HRH Observatory source type for Medical Doctors
                        {
                            deuid: "pSRNRBuOBi8",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W8"
                        }, //Other WHO Regional databases source type for Medical Doctors
                        {
                            deuid: "pSRNRBuOBi8",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X8"
                        }, //Academia source type for Medical Doctors
                        {
                            deuid: "pSRNRBuOBi8",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y8"
                        }, //International organisations source type for Medical Doctors
                        {
                            deuid: "pSRNRBuOBi8",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z8"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Medical Doctors
                        {
                            deuid: "pSRNRBuOBi8",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA8"
                        }, //Other multi-agency databases source type for Medical Doctors
                        {
                            deuid: "idY7moseTTD",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P9"
                        }, //Ministry of Health source type for Generalist Medical Practitioners
                        {
                            deuid: "idY7moseTTD",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q9"
                        }, //Ministry of Labour source type for Generalist Medical Practitioners
                        {
                            deuid: "idY7moseTTD",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R9"
                        }, //Ministry of Internal/External Affairs source type for Generalist Medical Practitioners
                        {
                            deuid: "idY7moseTTD",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S9"
                        }, //National/Central Statistical Office source type for Generalist Medical Practitioners
                        {
                            deuid: "idY7moseTTD",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T9"
                        }, //National HRH Observatory source type for Generalist Medical Practitioners
                        {
                            deuid: "idY7moseTTD",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U9"
                        }, //Professional association/Council/ Chamber source type for Generalist Medical Practitioners
                        {
                            deuid: "idY7moseTTD",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V9"
                        }, //Regional HRH Observatory source type for Generalist Medical Practitioners
                        {
                            deuid: "idY7moseTTD",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W9"
                        }, //Other WHO Regional databases source type for Generalist Medical Practitioners
                        {
                            deuid: "idY7moseTTD",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X9"
                        }, //Academia source type for Generalist Medical Practitioners
                        {
                            deuid: "idY7moseTTD",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y9"
                        }, //International organisations source type for Generalist Medical Practitioners
                        {
                            deuid: "idY7moseTTD",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z9"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Generalist Medical Practitioners
                        {
                            deuid: "idY7moseTTD",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA9"
                        }, //Other multi-agency databases source type for Generalist Medical Practitioners
                        {
                            deuid: "RfqYbGs8Za9",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P10"
                        }, //Ministry of Health source type for Specialist Medical Practitioners
                        {
                            deuid: "RfqYbGs8Za9",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q10"
                        }, //Ministry of Labour source type for Specialist Medical Practitioners
                        {
                            deuid: "RfqYbGs8Za9",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R10"
                        }, //Ministry of Internal/External Affairs source type for Specialist Medical Practitioners
                        {
                            deuid: "RfqYbGs8Za9",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S10"
                        }, //National/Central Statistical Office source type for Specialist Medical Practitioners
                        {
                            deuid: "RfqYbGs8Za9",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T10"
                        }, //National HRH Observatory source type for Specialist Medical Practitioners
                        {
                            deuid: "RfqYbGs8Za9",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U10"
                        }, //Professional association/Council/ Chamber source type for Specialist Medical Practitioners
                        {
                            deuid: "RfqYbGs8Za9",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V10"
                        }, //Regional HRH Observatory source type for Specialist Medical Practitioners
                        {
                            deuid: "RfqYbGs8Za9",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W10"
                        }, //Other WHO Regional databases source type for Specialist Medical Practitioners
                        {
                            deuid: "RfqYbGs8Za9",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X10"
                        }, //Academia source type for Specialist Medical Practitioners
                        {
                            deuid: "RfqYbGs8Za9",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y10"
                        }, //International organisations source type for Specialist Medical Practitioners
                        {
                            deuid: "RfqYbGs8Za9",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z10"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Specialist Medical Practitioners
                        {
                            deuid: "RfqYbGs8Za9",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA10"
                        }, //Other multi-agency databases source type for Specialist Medical Practitioners
                        {
                            deuid: "nS0ZJGJUX0u",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P11"
                        }, //Ministry of Health source type for General Paediatricians Practitioners
                        {
                            deuid: "nS0ZJGJUX0u",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q11"
                        }, //Ministry of Labour source type for General Paediatricians Practitioners
                        {
                            deuid: "nS0ZJGJUX0u",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R11"
                        }, //Ministry of Internal/External Affairs source type for General Paediatricians Practitioners
                        {
                            deuid: "nS0ZJGJUX0u",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S11"
                        }, //National/Central Statistical Office source type for General Paediatricians Practitioners
                        {
                            deuid: "nS0ZJGJUX0u",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T11"
                        }, //National HRH Observatory source type for General Paediatricians Practitioners
                        {
                            deuid: "nS0ZJGJUX0u",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U11"
                        }, //Professional association/Council/ Chamber source type for General Paediatricians Practitioners
                        {
                            deuid: "nS0ZJGJUX0u",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V11"
                        }, //Regional HRH Observatory source type for General Paediatricians Practitioners
                        {
                            deuid: "nS0ZJGJUX0u",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W11"
                        }, //Other WHO Regional databases source type for General Paediatricians Practitioners
                        {
                            deuid: "nS0ZJGJUX0u",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X11"
                        }, //Academia source type for General Paediatricians Practitioners
                        {
                            deuid: "nS0ZJGJUX0u",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y11"
                        }, //International organisations source type for General Paediatricians Practitioners
                        {
                            deuid: "nS0ZJGJUX0u",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z11"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for General Paediatricians Practitioners
                        {
                            deuid: "nS0ZJGJUX0u",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA11"
                        }, //Other multi-agency databases source type for General Paediatricians Practitioners
                        {
                            deuid: "bSvvw3Ms4BE",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P12"
                        }, //Ministry of Health source type for Obstetricians and Gynaecologists Practitioners
                        {
                            deuid: "bSvvw3Ms4BE",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q12"
                        }, //Ministry of Labour source type for Obstetricians and Gynaecologists Practitioners
                        {
                            deuid: "bSvvw3Ms4BE",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R12"
                        }, //Ministry of Internal/External Affairs source type for Obstetricians and Gynaecologists Practitioners
                        {
                            deuid: "bSvvw3Ms4BE",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S12"
                        }, //National/Central Statistical Office source type for Obstetricians and Gynaecologists Practitioners
                        {
                            deuid: "bSvvw3Ms4BE",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T12"
                        }, //National HRH Observatory source type for Obstetricians and Gynaecologists Practitioners
                        {
                            deuid: "bSvvw3Ms4BE",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U12"
                        }, //Professional association/Council/ Chamber source type for Obstetricians and Gynaecologists Practitioners
                        {
                            deuid: "bSvvw3Ms4BE",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V12"
                        }, //Regional HRH Observatory source type for Obstetricians and Gynaecologists Practitioners
                        {
                            deuid: "bSvvw3Ms4BE",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W12"
                        }, //Other WHO Regional databases source type for Obstetricians and Gynaecologists Practitioners
                        {
                            deuid: "bSvvw3Ms4BE",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X12"
                        }, //Academia source type for Obstetricians and Gynaecologists Practitioners
                        {
                            deuid: "bSvvw3Ms4BE",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y12"
                        }, //International organisations source type for Obstetricians and Gynaecologists Practitioners
                        {
                            deuid: "bSvvw3Ms4BE",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z12"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Obstetricians and Gynaecologists Practitioners
                        {
                            deuid: "bSvvw3Ms4BE",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA12"
                        }, //Other multi-agency databases source type for Obstetricians and Gynaecologists Practitioners
                        {
                            deuid: "h3kClMEpMAy",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P13"
                        }, //Ministry of Health source type for Psychiatrists Practitioners
                        {
                            deuid: "h3kClMEpMAy",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q13"
                        }, //Ministry of Labour source type for Psychiatrists Practitioners
                        {
                            deuid: "h3kClMEpMAy",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R13"
                        }, //Ministry of Internal/External Affairs source type for Psychiatrists Practitioners
                        {
                            deuid: "h3kClMEpMAy",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S13"
                        }, //National/Central Statistical Office source type for Psychiatrists Practitioners
                        {
                            deuid: "h3kClMEpMAy",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T13"
                        }, //National HRH Observatory source type for Psychiatrists Practitioners
                        {
                            deuid: "h3kClMEpMAy",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U13"
                        }, //Professional association/Council/ Chamber source type for Psychiatrists Practitioners
                        {
                            deuid: "h3kClMEpMAy",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V13"
                        }, //Regional HRH Observatory source type for Psychiatrists Practitioners
                        {
                            deuid: "h3kClMEpMAy",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W13"
                        }, //Other WHO Regional databases source type for Psychiatrists Practitioners
                        {
                            deuid: "h3kClMEpMAy",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X13"
                        }, //Academia source type for Psychiatrists Practitioners
                        {
                            deuid: "h3kClMEpMAy",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y13"
                        }, //International organisations source type for Psychiatrists Practitioners
                        {
                            deuid: "h3kClMEpMAy",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z13"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Psychiatrists Practitioners
                        {
                            deuid: "h3kClMEpMAy",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA13"
                        }, //Other multi-agency databases source type for Psychiatrists Practitioners
                        {
                            deuid: "e3ba55rLVTZ",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P14"
                        }, //Ministry of Health source type for Medical group of Specialists Practitioners
                        {
                            deuid: "e3ba55rLVTZ",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q14"
                        }, //Ministry of Labour source type for Medical group of Specialists Practitioners
                        {
                            deuid: "e3ba55rLVTZ",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R14"
                        }, //Ministry of Internal/External Affairs source type for Medical group of Specialists Practitioners
                        {
                            deuid: "e3ba55rLVTZ",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S14"
                        }, //National/Central Statistical Office source type for Medical group of Specialists Practitioners
                        {
                            deuid: "e3ba55rLVTZ",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T14"
                        }, //National HRH Observatory source type for Medical group of Specialists Practitioners
                        {
                            deuid: "e3ba55rLVTZ",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U14"
                        }, //Professional association/Council/ Chamber source type for Medical group of Specialists Practitioners
                        {
                            deuid: "e3ba55rLVTZ",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V14"
                        }, //Regional HRH Observatory source type for Medical group of Specialists Practitioners
                        {
                            deuid: "e3ba55rLVTZ",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W14"
                        }, //Other WHO Regional databases source type for Medical group of Specialists Practitioners
                        {
                            deuid: "e3ba55rLVTZ",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X14"
                        }, //Academia source type for Medical group of Specialists Practitioners
                        {
                            deuid: "e3ba55rLVTZ",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y14"
                        }, //International organisations source type for Medical group of Specialists Practitioners
                        {
                            deuid: "e3ba55rLVTZ",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z14"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Medical group of Specialists Practitioners
                        {
                            deuid: "e3ba55rLVTZ",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA14"
                        }, //Other multi-agency databases source type for Medical group of Specialists Practitioners
                        {
                            deuid: "KAU5IPKoIgx",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P15"
                        }, //Ministry of Health source type for Surgical group of Specialists Practitioners
                        {
                            deuid: "KAU5IPKoIgx",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q15"
                        }, //Ministry of Labour source type for Surgical group of Specialists Practitioners
                        {
                            deuid: "KAU5IPKoIgx",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R15"
                        }, //Ministry of Internal/External Affairs source type for Surgical group of Specialists Practitioners
                        {
                            deuid: "KAU5IPKoIgx",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S15"
                        }, //National/Central Statistical Office source type for Surgical group of Specialists Practitioners
                        {
                            deuid: "KAU5IPKoIgx",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T15"
                        }, //National HRH Observatory source type for Surgical group of Specialists Practitioners
                        {
                            deuid: "KAU5IPKoIgx",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U15"
                        }, //Professional association/Council/ Chamber source type for Surgical group of Specialists Practitioners
                        {
                            deuid: "KAU5IPKoIgx",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V15"
                        }, //Regional HRH Observatory source type for Surgical group of Specialists Practitioners
                        {
                            deuid: "KAU5IPKoIgx",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W15"
                        }, //Other WHO Regional databases source type for Surgical group of Specialists Practitioners
                        {
                            deuid: "KAU5IPKoIgx",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X15"
                        }, //Academia source type for Surgical group of Specialists Practitioners
                        {
                            deuid: "KAU5IPKoIgx",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y15"
                        }, //International organisations source type for Surgical group of Specialists Practitioners
                        {
                            deuid: "KAU5IPKoIgx",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z15"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Surgical group of Specialists Practitioners
                        {
                            deuid: "KAU5IPKoIgx",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA15"
                        }, //Other multi-agency databases source type for Surgical group of Specialists Practitioners
                        {
                            deuid: "bYXQMVmauLD",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P16"
                        }, //Ministry of Health source type for Other Specialists Practitioners
                        {
                            deuid: "bYXQMVmauLD",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q16"
                        }, //Ministry of Labour source type for Other Specialists Practitioners
                        {
                            deuid: "bYXQMVmauLD",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R16"
                        }, //Ministry of Internal/External Affairs source type for Other Specialists Practitioners
                        {
                            deuid: "bYXQMVmauLD",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S16"
                        }, //National/Central Statistical Office source type for Other Specialists Practitioners
                        {
                            deuid: "bYXQMVmauLD",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T16"
                        }, //National HRH Observatory source type for Other Specialists Practitioners
                        {
                            deuid: "bYXQMVmauLD",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U16"
                        }, //Professional association/Council/ Chamber source type for Other Specialists Practitioners
                        {
                            deuid: "bYXQMVmauLD",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V16"
                        }, //Regional HRH Observatory source type for Other Specialists Practitioners
                        {
                            deuid: "bYXQMVmauLD",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W16"
                        }, //Other WHO Regional databases source type for Other Specialists Practitioners
                        {
                            deuid: "bYXQMVmauLD",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X16"
                        }, //Academia source type for Other Specialists Practitioners
                        {
                            deuid: "bYXQMVmauLD",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y16"
                        }, //International organisations source type for Other Specialists Practitioners
                        {
                            deuid: "bYXQMVmauLD",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z16"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Other Specialists Practitioners
                        {
                            deuid: "bYXQMVmauLD",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA16"
                        }, //Other multi-agency databases source type for Other Specialists Practitioners
                        {
                            deuid: "MFUxfSaYW2e",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P17"
                        }, //Ministry of Health source type for Nursing General Personnel
                        {
                            deuid: "MFUxfSaYW2e",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q17"
                        }, //Ministry of Labour source type for Nursing General Personnel
                        {
                            deuid: "MFUxfSaYW2e",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R17"
                        }, //Ministry of Internal/External Affairs source type for Nursing General Personnel
                        {
                            deuid: "MFUxfSaYW2e",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S17"
                        }, //National/Central Statistical Office source type for Nursing General Personnel
                        {
                            deuid: "MFUxfSaYW2e",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T17"
                        }, //National HRH Observatory source type for Nursing General Personnel
                        {
                            deuid: "MFUxfSaYW2e",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U17"
                        }, //Professional association/Council/ Chamber source type for Nursing General Personnel
                        {
                            deuid: "MFUxfSaYW2e",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V17"
                        }, //Regional HRH Observatory source type for Nursing General Personnel
                        {
                            deuid: "MFUxfSaYW2e",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W17"
                        }, //Other WHO Regional databases source type for Nursing General Personnel
                        {
                            deuid: "MFUxfSaYW2e",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X17"
                        }, //Academia source type for Nursing General Personnel
                        {
                            deuid: "MFUxfSaYW2e",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y17"
                        }, //International organisations source type for Nursing General Personnel
                        {
                            deuid: "MFUxfSaYW2e",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z17"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Nursing General Personnel
                        {
                            deuid: "MFUxfSaYW2e",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA17"
                        }, //Other multi-agency databases source type for Nursing General Personnel
                        {
                            deuid: "dutH7uvTAut",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P18"
                        }, //Ministry of Health source type for Nursing Professionals
                        {
                            deuid: "dutH7uvTAut",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q18"
                        }, //Ministry of Labour source type for Nursing Professionals
                        {
                            deuid: "dutH7uvTAut",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R18"
                        }, //Ministry of Internal/External Affairs source type for Nursing Professionals
                        {
                            deuid: "dutH7uvTAut",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S18"
                        }, //National/Central Statistical Office source type for Nursing Professionals
                        {
                            deuid: "dutH7uvTAut",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T18"
                        }, //National HRH Observatory source type for Nursing Professionals
                        {
                            deuid: "dutH7uvTAut",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U18"
                        }, //Professional association/Council/ Chamber source type for Nursing Professionals
                        {
                            deuid: "dutH7uvTAut",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V18"
                        }, //Regional HRH Observatory source type for Nursing Professionals
                        {
                            deuid: "dutH7uvTAut",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W18"
                        }, //Other WHO Regional databases source type for Nursing Professionals
                        {
                            deuid: "dutH7uvTAut",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X18"
                        }, //Academia source type for Nursing Professionals
                        {
                            deuid: "dutH7uvTAut",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y18"
                        }, //International organisations source type for Nursing Professionals
                        {
                            deuid: "dutH7uvTAut",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z18"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Nursing Professionals
                        {
                            deuid: "dutH7uvTAut",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA18"
                        }, //Other multi-agency databases source type for Nursing Professionals
                        {
                            deuid: "vtidz1k9BOw",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P19"
                        }, //Ministry of Health source type for Nursing Associate Professionals
                        {
                            deuid: "vtidz1k9BOw",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q19"
                        }, //Ministry of Labour source type for Nursing Associate Professionals
                        {
                            deuid: "vtidz1k9BOw",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R19"
                        }, //Ministry of Internal/External Affairs source type for Nursing Associate Professionals
                        {
                            deuid: "vtidz1k9BOw",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S19"
                        }, //National/Central Statistical Office source type for Nursing Associate Professionals
                        {
                            deuid: "vtidz1k9BOw",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T19"
                        }, //National HRH Observatory source type for Nursing Associate Professionals
                        {
                            deuid: "vtidz1k9BOw",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U19"
                        }, //Professional association/Council/ Chamber source type for Nursing Associate Professionals
                        {
                            deuid: "vtidz1k9BOw",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V19"
                        }, //Regional HRH Observatory source type for Nursing Associate Professionals
                        {
                            deuid: "vtidz1k9BOw",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W19"
                        }, //Other WHO Regional databases source type for Nursing Associate Professionals
                        {
                            deuid: "vtidz1k9BOw",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X19"
                        }, //Academia source type for Nursing Associate Professionals
                        {
                            deuid: "vtidz1k9BOw",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y19"
                        }, //International organisations source type for Nursing Associate Professionals
                        {
                            deuid: "vtidz1k9BOw",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z19"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Nursing Associate Professionals
                        {
                            deuid: "vtidz1k9BOw",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA19"
                        }, //Other multi-agency databases source type for Nursing Associate Professionals
                        {
                            deuid: "vnulYqEDjxA",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P20"
                        }, //Ministry of Health source type for Midwifery personnel
                        {
                            deuid: "vnulYqEDjxA",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q20"
                        }, //Ministry of Labour source type for Midwifery personnel
                        {
                            deuid: "vnulYqEDjxA",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R20"
                        }, //Ministry of Internal/External Affairs source type for Midwifery personnel
                        {
                            deuid: "vnulYqEDjxA",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S20"
                        }, //National/Central Statistical Office source type for Midwifery personnel
                        {
                            deuid: "vnulYqEDjxA",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T20"
                        }, //National HRH Observatory source type for Midwifery personnel
                        {
                            deuid: "vnulYqEDjxA",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U20"
                        }, //Professional association/Council/ Chamber source type for Midwifery personnel
                        {
                            deuid: "vnulYqEDjxA",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V20"
                        }, //Regional HRH Observatory source type for Midwifery personnel
                        {
                            deuid: "vnulYqEDjxA",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W20"
                        }, //Other WHO Regional databases source type for Midwifery personnel
                        {
                            deuid: "vnulYqEDjxA",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X20"
                        }, //Academia source type for Midwifery personnel
                        {
                            deuid: "vnulYqEDjxA",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y20"
                        }, //International organisations source type for Midwifery personnel
                        {
                            deuid: "vnulYqEDjxA",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z20"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Midwifery personnel
                        {
                            deuid: "vnulYqEDjxA",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA20"
                        }, //Other multi-agency databases source type for Midwifery personnel
                        {
                            deuid: "ud6YiQ9ekgi",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P21"
                        }, //Ministry of Health source type for Midwifery Professionals
                        {
                            deuid: "ud6YiQ9ekgi",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q21"
                        }, //Ministry of Labour source type for Midwifery Professionals
                        {
                            deuid: "ud6YiQ9ekgi",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R21"
                        }, //Ministry of Internal/External Affairs source type for Midwifery Professionals
                        {
                            deuid: "ud6YiQ9ekgi",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S21"
                        }, //National/Central Statistical Office source type for Midwifery Professionals
                        {
                            deuid: "ud6YiQ9ekgi",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T21"
                        }, //National HRH Observatory source type for Midwifery Professionals
                        {
                            deuid: "ud6YiQ9ekgi",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U21"
                        }, //Professional association/Council/ Chamber source type for Midwifery Professionals
                        {
                            deuid: "ud6YiQ9ekgi",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V21"
                        }, //Regional HRH Observatory source type for Midwifery Professionals
                        {
                            deuid: "ud6YiQ9ekgi",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W21"
                        }, //Other WHO Regional databases source type for Midwifery Professionals
                        {
                            deuid: "ud6YiQ9ekgi",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X21"
                        }, //Academia source type for Midwifery Professionals
                        {
                            deuid: "ud6YiQ9ekgi",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y21"
                        }, //International organisations source type for Midwifery Professionals
                        {
                            deuid: "ud6YiQ9ekgi",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z21"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Midwifery Professionals
                        {
                            deuid: "ud6YiQ9ekgi",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA21"
                        }, //Other multi-agency databases source type for Midwifery Professionals
                        {
                            deuid: "LKiTYPmaOhj",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P22"
                        }, //Ministry of Health source type for Midwifery Associate Professionals
                        {
                            deuid: "LKiTYPmaOhj",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q22"
                        }, //Ministry of Labour source type for Midwifery Associate Professionals
                        {
                            deuid: "LKiTYPmaOhj",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R22"
                        }, //Ministry of Internal/External Affairs source type for Midwifery Associate Professionals
                        {
                            deuid: "LKiTYPmaOhj",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S22"
                        }, //National/Central Statistical Office source type for Midwifery Associate Professionals
                        {
                            deuid: "LKiTYPmaOhj",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T22"
                        }, //National HRH Observatory source type for Midwifery Associate Professionals
                        {
                            deuid: "LKiTYPmaOhj",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U22"
                        }, //Professional association/Council/ Chamber source type for Midwifery Associate Professionals
                        {
                            deuid: "LKiTYPmaOhj",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V22"
                        }, //Regional HRH Observatory source type for Midwifery Associate Professionals
                        {
                            deuid: "LKiTYPmaOhj",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W22"
                        }, //Other WHO Regional databases source type for Midwifery Associate Professionals
                        {
                            deuid: "LKiTYPmaOhj",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X22"
                        }, //Academia source type for Midwifery Associate Professionals
                        {
                            deuid: "LKiTYPmaOhj",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y22"
                        }, //International organisations source type for Midwifery Associate Professionals
                        {
                            deuid: "LKiTYPmaOhj",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z22"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Midwifery Associate Professionals
                        {
                            deuid: "LKiTYPmaOhj",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA22"
                        }, //Other multi-agency databases source type for Midwifery Associate Professionals
                        {
                            deuid: "P5RXZZXrLGM",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P23"
                        }, //Ministry of Health source type for Dentists
                        {
                            deuid: "P5RXZZXrLGM",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q23"
                        }, //Ministry of Labour source type for Dentists
                        {
                            deuid: "P5RXZZXrLGM",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R23"
                        }, //Ministry of Internal/External Affairs source type for Dentists
                        {
                            deuid: "P5RXZZXrLGM",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S23"
                        }, //National/Central Statistical Office source type for Dentists
                        {
                            deuid: "P5RXZZXrLGM",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T23"
                        }, //National HRH Observatory source type for Dentists
                        {
                            deuid: "P5RXZZXrLGM",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U23"
                        }, //Professional association/Council/ Chamber source type for Dentists
                        {
                            deuid: "P5RXZZXrLGM",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V23"
                        }, //Regional HRH Observatory source type for Dentists
                        {
                            deuid: "P5RXZZXrLGM",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W23"
                        }, //Other WHO Regional databases source type for Dentists
                        {
                            deuid: "P5RXZZXrLGM",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X23"
                        }, //Academia source type for Dentists
                        {
                            deuid: "P5RXZZXrLGM",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y23"
                        }, //International organisations source type for Dentists
                        {
                            deuid: "P5RXZZXrLGM",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z23"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Dentists
                        {
                            deuid: "P5RXZZXrLGM",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA23"
                        }, //Other multi-agency databases source type for Dentists
                        {
                            deuid: "ON8DBreBXlt",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P24"
                        }, //Ministry of Health source type for Dental Assistants and Therapists
                        {
                            deuid: "ON8DBreBXlt",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q24"
                        }, //Ministry of Labour source type for Dental Assistants and Therapists
                        {
                            deuid: "ON8DBreBXlt",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R24"
                        }, //Ministry of Internal/External Affairs source type for Dental Assistants and Therapists
                        {
                            deuid: "ON8DBreBXlt",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S24"
                        }, //National/Central Statistical Office source type for Dental Assistants and Therapists
                        {
                            deuid: "ON8DBreBXlt",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T24"
                        }, //National HRH Observatory source type for Dental Assistants and Therapists
                        {
                            deuid: "ON8DBreBXlt",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U24"
                        }, //Professional association/Council/ Chamber source type for Dental Assistants and Therapists
                        {
                            deuid: "ON8DBreBXlt",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V24"
                        }, //Regional HRH Observatory source type for Dental Assistants and Therapists
                        {
                            deuid: "ON8DBreBXlt",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W24"
                        }, //Other WHO Regional databases source type for Dental Assistants and Therapists
                        {
                            deuid: "ON8DBreBXlt",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X24"
                        }, //Academia source type for Dental Assistants and Therapists
                        {
                            deuid: "ON8DBreBXlt",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y24"
                        }, //International organisations source type for Dental Assistants and Therapists
                        {
                            deuid: "ON8DBreBXlt",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z24"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Dental Assistants and Therapists
                        {
                            deuid: "ON8DBreBXlt",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA24"
                        }, //Other multi-agency databases source type for Dental Assistants and Therapists
                        {
                            deuid: "SRSiY1qW6W8",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P25"
                        }, //Ministry of Health source type for Dental Prosthetic Technicians
                        {
                            deuid: "SRSiY1qW6W8",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q25"
                        }, //Ministry of Labour source type for Dental Prosthetic Technicians
                        {
                            deuid: "SRSiY1qW6W8",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R25"
                        }, //Ministry of Internal/External Affairs source type for Dental Prosthetic Technicians
                        {
                            deuid: "SRSiY1qW6W8",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S25"
                        }, //National/Central Statistical Office source type for Dental Prosthetic Technicians
                        {
                            deuid: "SRSiY1qW6W8",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T25"
                        }, //National HRH Observatory source type for Dental Prosthetic Technicians
                        {
                            deuid: "SRSiY1qW6W8",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U25"
                        }, //Professional association/Council/ Chamber source type for Dental Prosthetic Technicians
                        {
                            deuid: "SRSiY1qW6W8",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V25"
                        }, //Regional HRH Observatory source type for Dental Prosthetic Technicians
                        {
                            deuid: "SRSiY1qW6W8",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W25"
                        }, //Other WHO Regional databases source type for Dental Prosthetic Technicians
                        {
                            deuid: "SRSiY1qW6W8",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X25"
                        }, //Academia source type for Dental Prosthetic Technicians
                        {
                            deuid: "SRSiY1qW6W8",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y25"
                        }, //International organisations source type for Dental Prosthetic Technicians
                        {
                            deuid: "SRSiY1qW6W8",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z25"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Dental Prosthetic Technicians
                        {
                            deuid: "SRSiY1qW6W8",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA25"
                        }, //Other multi-agency databases source type for Dental Prosthetic Technicians
                        {
                            deuid: "M1hZV0c1jpw",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P26"
                        }, //Ministry of Health source type for Pharmacists
                        {
                            deuid: "M1hZV0c1jpw",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q26"
                        }, //Ministry of Labour source type for Pharmacists
                        {
                            deuid: "M1hZV0c1jpw",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R26"
                        }, //Ministry of Internal/External Affairs source type for Pharmacists
                        {
                            deuid: "M1hZV0c1jpw",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S26"
                        }, //National/Central Statistical Office source type for Pharmacists
                        {
                            deuid: "M1hZV0c1jpw",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T26"
                        }, //National HRH Observatory source type for Pharmacists
                        {
                            deuid: "M1hZV0c1jpw",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U26"
                        }, //Professional association/Council/ Chamber source type for Pharmacists
                        {
                            deuid: "M1hZV0c1jpw",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V26"
                        }, //Regional HRH Observatory source type for Pharmacists
                        {
                            deuid: "M1hZV0c1jpw",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W26"
                        }, //Other WHO Regional databases source type for Pharmacists
                        {
                            deuid: "M1hZV0c1jpw",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X26"
                        }, //Academia source type for Pharmacists
                        {
                            deuid: "M1hZV0c1jpw",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y26"
                        }, //International organisations source type for Pharmacists
                        {
                            deuid: "M1hZV0c1jpw",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z26"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Pharmacists
                        {
                            deuid: "M1hZV0c1jpw",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA26"
                        }, //Other multi-agency databases source type for Pharmacists
                        {
                            deuid: "Va9QjeOhGZa",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P27"
                        }, //Ministry of Health source type for Pharmaceutical Technicians and Assistants
                        {
                            deuid: "Va9QjeOhGZa",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q27"
                        }, //Ministry of Labour source type for Pharmaceutical Technicians and Assistants
                        {
                            deuid: "Va9QjeOhGZa",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R27"
                        }, //Ministry of Internal/External Affairs source type for Pharmaceutical Technicians and Assistants
                        {
                            deuid: "Va9QjeOhGZa",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S27"
                        }, //National/Central Statistical Office source type for Pharmaceutical Technicians and Assistants
                        {
                            deuid: "Va9QjeOhGZa",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T27"
                        }, //National HRH Observatory source type for Pharmaceutical Technicians and Assistants
                        {
                            deuid: "Va9QjeOhGZa",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U27"
                        }, //Professional association/Council/ Chamber source type for Pharmaceutical Technicians and Assistants
                        {
                            deuid: "Va9QjeOhGZa",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V27"
                        }, //Regional HRH Observatory source type for Pharmaceutical Technicians and Assistants
                        {
                            deuid: "Va9QjeOhGZa",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W27"
                        }, //Other WHO Regional databases source type for Pharmaceutical Technicians and Assistants
                        {
                            deuid: "Va9QjeOhGZa",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X27"
                        }, //Academia source type for Pharmaceutical Technicians and Assistants
                        {
                            deuid: "Va9QjeOhGZa",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y27"
                        }, //International organisations source type for Pharmaceutical Technicians and Assistants
                        {
                            deuid: "Va9QjeOhGZa",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z27"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Pharmaceutical Technicians and Assistants
                        {
                            deuid: "Va9QjeOhGZa",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA27"
                        }, //Other multi-agency databases source type for Pharmaceutical Technicians and Assistants
                        {
                            deuid: "E6yC5xp14iQ",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P28"
                        }, //Ministry of Health source type for Paramedical Practitioners
                        {
                            deuid: "E6yC5xp14iQ",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q28"
                        }, //Ministry of Labour source type for Paramedical Practitioners
                        {
                            deuid: "E6yC5xp14iQ",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R28"
                        }, //Ministry of Internal/External Affairs source type for Paramedical Practitioners
                        {
                            deuid: "E6yC5xp14iQ",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S28"
                        }, //National/Central Statistical Office source type for Paramedical Practitioners
                        {
                            deuid: "E6yC5xp14iQ",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T28"
                        }, //National HRH Observatory source type for Paramedical Practitioners
                        {
                            deuid: "E6yC5xp14iQ",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U28"
                        }, //Professional association/Council/ Chamber source type for Paramedical Practitioners
                        {
                            deuid: "E6yC5xp14iQ",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V28"
                        }, //Regional HRH Observatory source type for Paramedical Practitioners
                        {
                            deuid: "E6yC5xp14iQ",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W28"
                        }, //Other WHO Regional databases source type for Paramedical Practitioners
                        {
                            deuid: "E6yC5xp14iQ",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X28"
                        }, //Academia source type for Paramedical Practitioners
                        {
                            deuid: "E6yC5xp14iQ",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y28"
                        }, //International organisations source type for Paramedical Practitioners
                        {
                            deuid: "E6yC5xp14iQ",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z28"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Paramedical Practitioners
                        {
                            deuid: "E6yC5xp14iQ",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA28"
                        }, //Other multi-agency databases source type for Paramedical Practitioners
                        {
                            deuid: "zmJu31AVVts",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P29"
                        }, //Ministry of Health source type for Medical and Pathology Laboratory scientists
                        {
                            deuid: "zmJu31AVVts",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q29"
                        }, //Ministry of Labour source type for Medical and Pathology Laboratory scientists
                        {
                            deuid: "zmJu31AVVts",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R29"
                        }, //Ministry of Internal/External Affairs source type for Medical and Pathology Laboratory scientists
                        {
                            deuid: "zmJu31AVVts",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S29"
                        }, //National/Central Statistical Office source type for Medical and Pathology Laboratory scientists
                        {
                            deuid: "zmJu31AVVts",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T29"
                        }, //National HRH Observatory source type for Medical and Pathology Laboratory scientists
                        {
                            deuid: "zmJu31AVVts",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U29"
                        }, //Professional association/Council/ Chamber source type for Medical and Pathology Laboratory scientists
                        {
                            deuid: "zmJu31AVVts",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V29"
                        }, //Regional HRH Observatory source type for Medical and Pathology Laboratory scientists
                        {
                            deuid: "zmJu31AVVts",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W29"
                        }, //Other WHO Regional databases source type for Medical and Pathology Laboratory scientists
                        {
                            deuid: "zmJu31AVVts",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X29"
                        }, //Academia source type for Medical and Pathology Laboratory scientists
                        {
                            deuid: "zmJu31AVVts",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y29"
                        }, //International organisations source type for Medical and Pathology Laboratory scientists
                        {
                            deuid: "zmJu31AVVts",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z29"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Medical and Pathology Laboratory scientists
                        {
                            deuid: "zmJu31AVVts",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA29"
                        }, //Other multi-agency databases source type for Medical and Pathology Laboratory scientists
                        {
                            deuid: "HmC6k52OuR4",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P30"
                        }, //Ministry of Health source type for Medical Imaging and Therapeutic Equipment Technicians
                        {
                            deuid: "HmC6k52OuR4",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q30"
                        }, //Ministry of Labour source type for Medical Imaging and Therapeutic Equipment Technicians
                        {
                            deuid: "HmC6k52OuR4",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R30"
                        }, //Ministry of Internal/External Affairs source type for Medical Imaging and Therapeutic Equipment Technicians
                        {
                            deuid: "HmC6k52OuR4",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S30"
                        }, //National/Central Statistical Office source type for Medical Imaging and Therapeutic Equipment Technicians
                        {
                            deuid: "HmC6k52OuR4",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T30"
                        }, //National HRH Observatory source type for Medical Imaging and Therapeutic Equipment Technicians
                        {
                            deuid: "HmC6k52OuR4",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U30"
                        }, //Professional association/Council/ Chamber source type for Medical Imaging and Therapeutic Equipment Technicians
                        {
                            deuid: "HmC6k52OuR4",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V30"
                        }, //Regional HRH Observatory source type for Medical Imaging and Therapeutic Equipment Technicians
                        {
                            deuid: "HmC6k52OuR4",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W30"
                        }, //Other WHO Regional databases source type for Medical Imaging and Therapeutic Equipment Technicians
                        {
                            deuid: "HmC6k52OuR4",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X30"
                        }, //Academia source type for Medical Imaging and Therapeutic Equipment Technicians
                        {
                            deuid: "HmC6k52OuR4",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y30"
                        }, //International organisations source type for Medical Imaging and Therapeutic Equipment Technicians
                        {
                            deuid: "HmC6k52OuR4",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z30"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Medical Imaging and Therapeutic Equipment Technicians
                        {
                            deuid: "HmC6k52OuR4",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA30"
                        }, //Other multi-agency databases source type for Medical Imaging and Therapeutic Equipment Technicians
                        {
                            deuid: "eP4EDcfclsH",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P31"
                        }, //Ministry of Health source type for Medical and Pathology Laboratory Technicians
                        {
                            deuid: "eP4EDcfclsH",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q31"
                        }, //Ministry of Labour source type for Medical and Pathology Laboratory Technicians
                        {
                            deuid: "eP4EDcfclsH",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R31"
                        }, //Ministry of Internal/External Affairs source type for Medical and Pathology Laboratory Technicians
                        {
                            deuid: "eP4EDcfclsH",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S31"
                        }, //National/Central Statistical Office source type for Medical and Pathology Laboratory Technicians
                        {
                            deuid: "eP4EDcfclsH",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T31"
                        }, //National HRH Observatory source type for Medical and Pathology Laboratory Technicians
                        {
                            deuid: "eP4EDcfclsH",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U31"
                        }, //Professional association/Council/ Chamber source type for Medical and Pathology Laboratory Technicians
                        {
                            deuid: "eP4EDcfclsH",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V31"
                        }, //Regional HRH Observatory source type for Medical and Pathology Laboratory Technicians
                        {
                            deuid: "eP4EDcfclsH",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W31"
                        }, //Other WHO Regional databases source type for Medical and Pathology Laboratory Technicians
                        {
                            deuid: "eP4EDcfclsH",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X31"
                        }, //Academia source type for Medical and Pathology Laboratory Technicians
                        {
                            deuid: "eP4EDcfclsH",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y31"
                        }, //International organisations source type for Medical and Pathology Laboratory Technicians
                        {
                            deuid: "eP4EDcfclsH",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z31"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Medical and Pathology Laboratory Technicians
                        {
                            deuid: "eP4EDcfclsH",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA31"
                        }, //Other multi-agency databases source type for Medical and Pathology Laboratory Technicians
                        {
                            deuid: "cnxVb8H17tm",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P32"
                        }, //Ministry of Health source type for Environmental and Occupational Health and Hygiene Professionals
                        {
                            deuid: "cnxVb8H17tm",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q32"
                        }, //Ministry of Labour source type for Environmental and Occupational Health and Hygiene Professionals
                        {
                            deuid: "cnxVb8H17tm",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R32"
                        }, //Ministry of Internal/External Affairs source type for Environmental and Occupational Health and Hygiene Professionals
                        {
                            deuid: "cnxVb8H17tm",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S32"
                        }, //National/Central Statistical Office source type for Environmental and Occupational Health and Hygiene Professionals
                        {
                            deuid: "cnxVb8H17tm",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T32"
                        }, //National HRH Observatory source type for Environmental and Occupational Health and Hygiene Professionals
                        {
                            deuid: "cnxVb8H17tm",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U32"
                        }, //Professional association/Council/ Chamber source type for Environmental and Occupational Health and Hygiene Professionals
                        {
                            deuid: "cnxVb8H17tm",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V32"
                        }, //Regional HRH Observatory source type for Environmental and Occupational Health and Hygiene Professionals
                        {
                            deuid: "cnxVb8H17tm",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W32"
                        }, //Other WHO Regional databases source type for Environmental and Occupational Health and Hygiene Professionals
                        {
                            deuid: "cnxVb8H17tm",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X32"
                        }, //Academia source type for Environmental and Occupational Health and Hygiene Professionals
                        {
                            deuid: "cnxVb8H17tm",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y32"
                        }, //International organisations source type for Environmental and Occupational Health and Hygiene Professionals
                        {
                            deuid: "cnxVb8H17tm",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z32"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Environmental and Occupational Health and Hygiene Professionals
                        {
                            deuid: "cnxVb8H17tm",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA32"
                        }, //Other multi-agency databases source type for Environmental and Occupational Health and Hygiene Professionals
                        {
                            deuid: "mnfnutsHsxh",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P33"
                        }, //Ministry of Health source type for Environmental and Occupational Health Inspectors and Associates
                        {
                            deuid: "mnfnutsHsxh",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q33"
                        }, //Ministry of Labour source type for Environmental and Occupational Health Inspectors and Associates
                        {
                            deuid: "mnfnutsHsxh",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R33"
                        }, //Ministry of Internal/External Affairs source type for Environmental and Occupational Health Inspectors and Associates
                        {
                            deuid: "mnfnutsHsxh",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S33"
                        }, //National/Central Statistical Office source type for Environmental and Occupational Health Inspectors and Associates
                        {
                            deuid: "mnfnutsHsxh",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T33"
                        }, //National HRH Observatory source type for Environmental and Occupational Health Inspectors and Associates
                        {
                            deuid: "mnfnutsHsxh",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U33"
                        }, //Professional association/Council/ Chamber source type for Environmental and Occupational Health Inspectors and Associates
                        {
                            deuid: "mnfnutsHsxh",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V33"
                        }, //Regional HRH Observatory source type for Environmental and Occupational Health Inspectors and Associates
                        {
                            deuid: "mnfnutsHsxh",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W33"
                        }, //Other WHO Regional databases source type for Environmental and Occupational Health Inspectors and Associates
                        {
                            deuid: "mnfnutsHsxh",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X33"
                        }, //Academia source type for Environmental and Occupational Health Inspectors and Associates
                        {
                            deuid: "mnfnutsHsxh",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y33"
                        }, //International organisations source type for Environmental and Occupational Health Inspectors and Associates
                        {
                            deuid: "mnfnutsHsxh",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z33"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Environmental and Occupational Health Inspectors and Associates
                        {
                            deuid: "mnfnutsHsxh",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA33"
                        }, //Other multi-agency databases source type for Environmental and Occupational Health Inspectors and Associates
                        {
                            deuid: "hiSNbC7WWAb",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P34"
                        }, //Ministry of Health source type for Traditional and Complementary Medicine Professionals
                        {
                            deuid: "hiSNbC7WWAb",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q34"
                        }, //Ministry of Labour source type for Traditional and Complementary Medicine Professionals
                        {
                            deuid: "hiSNbC7WWAb",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R34"
                        }, //Ministry of Internal/External Affairs source type for Traditional and Complementary Medicine Professionals
                        {
                            deuid: "hiSNbC7WWAb",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S34"
                        }, //National/Central Statistical Office source type for Traditional and Complementary Medicine Professionals
                        {
                            deuid: "hiSNbC7WWAb",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T34"
                        }, //National HRH Observatory source type for Traditional and Complementary Medicine Professionals
                        {
                            deuid: "hiSNbC7WWAb",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U34"
                        }, //Professional association/Council/ Chamber source type for Traditional and Complementary Medicine Professionals
                        {
                            deuid: "hiSNbC7WWAb",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V34"
                        }, //Regional HRH Observatory source type for Traditional and Complementary Medicine Professionals
                        {
                            deuid: "hiSNbC7WWAb",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W34"
                        }, //Other WHO Regional databases source type for Traditional and Complementary Medicine Professionals
                        {
                            deuid: "hiSNbC7WWAb",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X34"
                        }, //Academia source type for Traditional and Complementary Medicine Professionals
                        {
                            deuid: "hiSNbC7WWAb",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y34"
                        }, //International organisations source type for Traditional and Complementary Medicine Professionals
                        {
                            deuid: "hiSNbC7WWAb",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z34"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Traditional and Complementary Medicine Professionals
                        {
                            deuid: "hiSNbC7WWAb",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA34"
                        }, //Other multi-agency databases source type for Traditional and Complementary Medicine Professionals
                        {
                            deuid: "PXZbVlkKwcw",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P35"
                        }, //Ministry of Health source type for Traditional and Complementary Medicine Associate Professionals
                        {
                            deuid: "PXZbVlkKwcw",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q35"
                        }, //Ministry of Labour source type for Traditional and Complementary Medicine Associate Professionals
                        {
                            deuid: "PXZbVlkKwcw",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R35"
                        }, //Ministry of Internal/External Affairs source type for Traditional and Complementary Medicine Associate Professionals
                        {
                            deuid: "PXZbVlkKwcw",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S35"
                        }, //National/Central Statistical Office source type for Traditional and Complementary Medicine Associate Professionals
                        {
                            deuid: "PXZbVlkKwcw",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T35"
                        }, //National HRH Observatory source type for Traditional and Complementary Medicine Associate Professionals
                        {
                            deuid: "PXZbVlkKwcw",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U35"
                        }, //Professional association/Council/ Chamber source type for Traditional and Complementary Medicine Associate Professionals
                        {
                            deuid: "PXZbVlkKwcw",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V35"
                        }, //Regional HRH Observatory source type for Traditional and Complementary Medicine Associate Professionals
                        {
                            deuid: "PXZbVlkKwcw",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W35"
                        }, //Other WHO Regional databases source type for Traditional and Complementary Medicine Associate Professionals
                        {
                            deuid: "PXZbVlkKwcw",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X35"
                        }, //Academia source type for Traditional and Complementary Medicine Associate Professionals
                        {
                            deuid: "PXZbVlkKwcw",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y35"
                        }, //International organisations source type for Traditional and Complementary Medicine Associate Professionals
                        {
                            deuid: "PXZbVlkKwcw",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z35"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Traditional and Complementary Medicine Associate Professionals
                        {
                            deuid: "PXZbVlkKwcw",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA35"
                        }, //Other multi-agency databases source type for Traditional and Complementary Medicine Associate Professionals
                        {
                            deuid: "TcSxFdjVWEh",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P36"
                        }, //Ministry of Health source type for Community Health Workers
                        {
                            deuid: "TcSxFdjVWEh",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q36"
                        }, //Ministry of Labour source type for Community Health Workers
                        {
                            deuid: "TcSxFdjVWEh",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R36"
                        }, //Ministry of Internal/External Affairs source type for Community Health Workers
                        {
                            deuid: "TcSxFdjVWEh",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S36"
                        }, //National/Central Statistical Office source type for Community Health Workers
                        {
                            deuid: "TcSxFdjVWEh",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T36"
                        }, //National HRH Observatory source type for Community Health Workers
                        {
                            deuid: "TcSxFdjVWEh",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U36"
                        }, //Professional association/Council/ Chamber source type for Community Health Workers
                        {
                            deuid: "TcSxFdjVWEh",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V36"
                        }, //Regional HRH Observatory source type for Community Health Workers
                        {
                            deuid: "TcSxFdjVWEh",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W36"
                        }, //Other WHO Regional databases source type for Community Health Workers
                        {
                            deuid: "TcSxFdjVWEh",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X36"
                        }, //Academia source type for Community Health Workers
                        {
                            deuid: "TcSxFdjVWEh",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y36"
                        }, //International organisations source type for Community Health Workers
                        {
                            deuid: "TcSxFdjVWEh",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z36"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Community Health Workers
                        {
                            deuid: "TcSxFdjVWEh",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA36"
                        }, //Other multi-agency databases source type for Community Health Workers
                        {
                            deuid: "ZtjIuqdv5S7",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P37"
                        }, //Ministry of Health source type for Personal care workers
                        {
                            deuid: "ZtjIuqdv5S7",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q37"
                        }, //Ministry of Labour source type for Personal care workers
                        {
                            deuid: "ZtjIuqdv5S7",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R37"
                        }, //Ministry of Internal/External Affairs source type for Personal care workers
                        {
                            deuid: "ZtjIuqdv5S7",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S37"
                        }, //National/Central Statistical Office source type for Personal care workers
                        {
                            deuid: "ZtjIuqdv5S7",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T37"
                        }, //National HRH Observatory source type for Personal care workers
                        {
                            deuid: "ZtjIuqdv5S7",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U37"
                        }, //Professional association/Council/ Chamber source type for Personal care workers
                        {
                            deuid: "ZtjIuqdv5S7",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V37"
                        }, //Regional HRH Observatory source type for Personal care workers
                        {
                            deuid: "ZtjIuqdv5S7",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W37"
                        }, //Other WHO Regional databases source type for Personal care workers
                        {
                            deuid: "ZtjIuqdv5S7",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X37"
                        }, //Academia source type for Personal care workers
                        {
                            deuid: "ZtjIuqdv5S7",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y37"
                        }, //International organisations source type for Personal care workers
                        {
                            deuid: "ZtjIuqdv5S7",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z37"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Personal care workers
                        {
                            deuid: "ZtjIuqdv5S7",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA37"
                        }, //Other multi-agency databases source type for Personal care workers
                        {
                            deuid: "BgJoMJEnaO1",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P38"
                        }, //Ministry of Health source type for Health Care Assistants
                        {
                            deuid: "BgJoMJEnaO1",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q38"
                        }, //Ministry of Labour source type for Health Care Assistants
                        {
                            deuid: "BgJoMJEnaO1",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R38"
                        }, //Ministry of Internal/External Affairs source type for Health Care Assistants
                        {
                            deuid: "BgJoMJEnaO1",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S38"
                        }, //National/Central Statistical Office source type for Health Care Assistants
                        {
                            deuid: "BgJoMJEnaO1",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T38"
                        }, //National HRH Observatory source type for Health Care Assistants
                        {
                            deuid: "BgJoMJEnaO1",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U38"
                        }, //Professional association/Council/ Chamber source type for Health Care Assistants
                        {
                            deuid: "BgJoMJEnaO1",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V38"
                        }, //Regional HRH Observatory source type for Health Care Assistants
                        {
                            deuid: "BgJoMJEnaO1",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W38"
                        }, //Other WHO Regional databases source type for Health Care Assistants
                        {
                            deuid: "BgJoMJEnaO1",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X38"
                        }, //Academia source type for Health Care Assistants
                        {
                            deuid: "BgJoMJEnaO1",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y38"
                        }, //International organisations source type for Health Care Assistants
                        {
                            deuid: "BgJoMJEnaO1",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z38"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Health Care Assistants
                        {
                            deuid: "BgJoMJEnaO1",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA38"
                        }, //Other multi-agency databases source type for Health Care Assistants
                        {
                            deuid: "LO5oNfvohPx",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P39"
                        }, //Ministry of Health source type for Home-based Personal Care Workers
                        {
                            deuid: "LO5oNfvohPx",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q39"
                        }, //Ministry of Labour source type for Home-based Personal Care Workers
                        {
                            deuid: "LO5oNfvohPx",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R39"
                        }, //Ministry of Internal/External Affairs source type for Home-based Personal Care Workers
                        {
                            deuid: "LO5oNfvohPx",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S39"
                        }, //National/Central Statistical Office source type for Home-based Personal Care Workers
                        {
                            deuid: "LO5oNfvohPx",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T39"
                        }, //National HRH Observatory source type for Home-based Personal Care Workers
                        {
                            deuid: "LO5oNfvohPx",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U39"
                        }, //Professional association/Council/ Chamber source type for Home-based Personal Care Workers
                        {
                            deuid: "LO5oNfvohPx",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V39"
                        }, //Regional HRH Observatory source type for Home-based Personal Care Workers
                        {
                            deuid: "LO5oNfvohPx",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W39"
                        }, //Other WHO Regional databases source type for Home-based Personal Care Workers
                        {
                            deuid: "LO5oNfvohPx",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X39"
                        }, //Academia source type for Home-based Personal Care Workers
                        {
                            deuid: "LO5oNfvohPx",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y39"
                        }, //International organisations source type for Home-based Personal Care Workers
                        {
                            deuid: "LO5oNfvohPx",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z39"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Home-based Personal Care Workers
                        {
                            deuid: "LO5oNfvohPx",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA39"
                        }, //Other multi-agency databases source type for Home-based Personal Care Workers
                        {
                            deuid: "uQe1J0rpnwS",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P40"
                        }, //Ministry of Health source type for Personal care workers in health services n.e.c
                        {
                            deuid: "uQe1J0rpnwS",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q40"
                        }, //Ministry of Labour source type for Personal care workers in health services n.e.c
                        {
                            deuid: "uQe1J0rpnwS",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R40"
                        }, //Ministry of Internal/External Affairs source type for Personal care workers in health services n.e.c
                        {
                            deuid: "uQe1J0rpnwS",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S40"
                        }, //National/Central Statistical Office source type for Personal care workers in health services n.e.c
                        {
                            deuid: "uQe1J0rpnwS",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T40"
                        }, //National HRH Observatory source type for Personal care workers in health services n.e.c
                        {
                            deuid: "uQe1J0rpnwS",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U40"
                        }, //Professional association/Council/ Chamber source type for Personal care workers in health services n.e.c
                        {
                            deuid: "uQe1J0rpnwS",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V40"
                        }, //Regional HRH Observatory source type for Personal care workers in health services n.e.c
                        {
                            deuid: "uQe1J0rpnwS",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W40"
                        }, //Other WHO Regional databases source type for Personal care workers in health services n.e.c
                        {
                            deuid: "uQe1J0rpnwS",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X40"
                        }, //Academia source type for Personal care workers in health services n.e.c
                        {
                            deuid: "uQe1J0rpnwS",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y40"
                        }, //International organisations source type for Personal care workers in health services n.e.c
                        {
                            deuid: "uQe1J0rpnwS",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z40"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Personal care workers in health services n.e.c
                        {
                            deuid: "uQe1J0rpnwS",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA40"
                        }, //Other multi-agency databases source type for Personal care workers in health services n.e.c
                        {
                            deuid: "XIHIwocWj9J",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P41"
                        }, //Ministry of Health source type for Physiotherapists
                        {
                            deuid: "XIHIwocWj9J",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q41"
                        }, //Ministry of Labour source type for Physiotherapists
                        {
                            deuid: "XIHIwocWj9J",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R41"
                        }, //Ministry of Internal/External Affairs source type for Physiotherapists
                        {
                            deuid: "XIHIwocWj9J",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S41"
                        }, //National/Central Statistical Office source type for Physiotherapists
                        {
                            deuid: "XIHIwocWj9J",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T41"
                        }, //National HRH Observatory source type for Physiotherapists
                        {
                            deuid: "XIHIwocWj9J",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U41"
                        }, //Professional association/Council/ Chamber source type for Physiotherapists
                        {
                            deuid: "XIHIwocWj9J",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V41"
                        }, //Regional HRH Observatory source type for Physiotherapists
                        {
                            deuid: "XIHIwocWj9J",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W41"
                        }, //Other WHO Regional databases source type for Physiotherapists
                        {
                            deuid: "XIHIwocWj9J",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X41"
                        }, //Academia source type for Physiotherapists
                        {
                            deuid: "XIHIwocWj9J",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y41"
                        }, //International organisations source type for Physiotherapists
                        {
                            deuid: "XIHIwocWj9J",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z41"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Physiotherapists
                        {
                            deuid: "XIHIwocWj9J",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA41"
                        }, //Other multi-agency databases source type for Physiotherapists
                        {
                            deuid: "RK9mngtJtTL",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P42"
                        }, //Ministry of Health source type for Physiotherapy Technicians and Assistants
                        {
                            deuid: "RK9mngtJtTL",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q42"
                        }, //Ministry of Labour source type for Physiotherapy Technicians and Assistants
                        {
                            deuid: "RK9mngtJtTL",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R42"
                        }, //Ministry of Internal/External Affairs source type for Physiotherapy Technicians and Assistants
                        {
                            deuid: "RK9mngtJtTL",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S42"
                        }, //National/Central Statistical Office source type for Physiotherapy Technicians and Assistants
                        {
                            deuid: "RK9mngtJtTL",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T42"
                        }, //National HRH Observatory source type for Physiotherapy Technicians and Assistants
                        {
                            deuid: "RK9mngtJtTL",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U42"
                        }, //Professional association/Council/ Chamber source type for Physiotherapy Technicians and Assistants
                        {
                            deuid: "RK9mngtJtTL",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V42"
                        }, //Regional HRH Observatory source type for Physiotherapy Technicians and Assistants
                        {
                            deuid: "RK9mngtJtTL",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W42"
                        }, //Other WHO Regional databases source type for Physiotherapy Technicians and Assistants
                        {
                            deuid: "RK9mngtJtTL",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X42"
                        }, //Academia source type for Physiotherapy Technicians and Assistants
                        {
                            deuid: "RK9mngtJtTL",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y42"
                        }, //International organisations source type for Physiotherapy Technicians and Assistants
                        {
                            deuid: "RK9mngtJtTL",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z42"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Physiotherapy Technicians and Assistants
                        {
                            deuid: "RK9mngtJtTL",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA42"
                        }, //Other multi-agency databases source type for Physiotherapy Technicians and Assistants
                        {
                            deuid: "D2MFGJKtc1Y",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P43"
                        }, //Ministry of Health source type for Dieticians
                        {
                            deuid: "D2MFGJKtc1Y",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q43"
                        }, //Ministry of Labour source type for Dieticians
                        {
                            deuid: "D2MFGJKtc1Y",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R43"
                        }, //Ministry of Internal/External Affairs source type for Dieticians
                        {
                            deuid: "D2MFGJKtc1Y",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S43"
                        }, //National/Central Statistical Office source type for Dieticians
                        {
                            deuid: "D2MFGJKtc1Y",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T43"
                        }, //National HRH Observatory source type for Dieticians
                        {
                            deuid: "D2MFGJKtc1Y",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U43"
                        }, //Professional association/Council/ Chamber source type for Dieticians
                        {
                            deuid: "D2MFGJKtc1Y",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V43"
                        }, //Regional HRH Observatory source type for Dieticians
                        {
                            deuid: "D2MFGJKtc1Y",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W43"
                        }, //Other WHO Regional databases source type for Dieticians
                        {
                            deuid: "D2MFGJKtc1Y",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X43"
                        }, //Academia source type for Dieticians
                        {
                            deuid: "D2MFGJKtc1Y",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y43"
                        }, //International organisations source type for Dieticians
                        {
                            deuid: "D2MFGJKtc1Y",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z43"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Dieticians
                        {
                            deuid: "D2MFGJKtc1Y",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA43"
                        }, //Other multi-agency databases source type for Dieticians
                        {
                            deuid: "m4eOcU1zHtL",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P44"
                        }, //Ministry of Health source type for Nutritionists
                        {
                            deuid: "m4eOcU1zHtL",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q44"
                        }, //Ministry of Labour source type for Nutritionists
                        {
                            deuid: "m4eOcU1zHtL",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R44"
                        }, //Ministry of Internal/External Affairs source type for Nutritionists
                        {
                            deuid: "m4eOcU1zHtL",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S44"
                        }, //National/Central Statistical Office source type for Nutritionists
                        {
                            deuid: "m4eOcU1zHtL",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T44"
                        }, //National HRH Observatory source type for Nutritionists
                        {
                            deuid: "m4eOcU1zHtL",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U44"
                        }, //Professional association/Council/ Chamber source type for Nutritionists
                        {
                            deuid: "m4eOcU1zHtL",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V44"
                        }, //Regional HRH Observatory source type for Nutritionists
                        {
                            deuid: "m4eOcU1zHtL",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W44"
                        }, //Other WHO Regional databases source type for Nutritionists
                        {
                            deuid: "m4eOcU1zHtL",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X44"
                        }, //Academia source type for Nutritionists
                        {
                            deuid: "m4eOcU1zHtL",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y44"
                        }, //International organisations source type for Nutritionists
                        {
                            deuid: "m4eOcU1zHtL",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z44"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Nutritionists
                        {
                            deuid: "m4eOcU1zHtL",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA44"
                        }, //Other multi-agency databases source type for Nutritionists
                        {
                            deuid: "VZnZ8xJoaIW",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P45"
                        }, //Ministry of Health source type for Audiologists and Speech Therapists
                        {
                            deuid: "VZnZ8xJoaIW",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q45"
                        }, //Ministry of Labour source type for Audiologists and Speech Therapists
                        {
                            deuid: "VZnZ8xJoaIW",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R45"
                        }, //Ministry of Internal/External Affairs source type for Audiologists and Speech Therapists
                        {
                            deuid: "VZnZ8xJoaIW",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S45"
                        }, //National/Central Statistical Office source type for Audiologists and Speech Therapists
                        {
                            deuid: "VZnZ8xJoaIW",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T45"
                        }, //National HRH Observatory source type for Audiologists and Speech Therapists
                        {
                            deuid: "VZnZ8xJoaIW",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U45"
                        }, //Professional association/Council/ Chamber source type for Audiologists and Speech Therapists
                        {
                            deuid: "VZnZ8xJoaIW",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V45"
                        }, //Regional HRH Observatory source type for Audiologists and Speech Therapists
                        {
                            deuid: "VZnZ8xJoaIW",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W45"
                        }, //Other WHO Regional databases source type for Audiologists and Speech Therapists
                        {
                            deuid: "VZnZ8xJoaIW",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X45"
                        }, //Academia source type for Audiologists and Speech Therapists
                        {
                            deuid: "VZnZ8xJoaIW",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y45"
                        }, //International organisations source type for Audiologists and Speech Therapists
                        {
                            deuid: "VZnZ8xJoaIW",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z45"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Audiologists and Speech Therapists
                        {
                            deuid: "VZnZ8xJoaIW",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA45"
                        }, //Other multi-agency databases source type for Audiologists and Speech Therapists
                        {
                            deuid: "rsmgY2HkHEf",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P46"
                        }, //Ministry of Health source type for Optometrists and Ophthalmic Opticians
                        {
                            deuid: "rsmgY2HkHEf",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q46"
                        }, //Ministry of Labour source type for Optometrists and Ophthalmic Opticians
                        {
                            deuid: "rsmgY2HkHEf",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R46"
                        }, //Ministry of Internal/External Affairs source type for Optometrists and Ophthalmic Opticians
                        {
                            deuid: "rsmgY2HkHEf",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S46"
                        }, //National/Central Statistical Office source type for Optometrists and Ophthalmic Opticians
                        {
                            deuid: "rsmgY2HkHEf",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T46"
                        }, //National HRH Observatory source type for Optometrists and Ophthalmic Opticians
                        {
                            deuid: "rsmgY2HkHEf",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U46"
                        }, //Professional association/Council/ Chamber source type for Optometrists and Ophthalmic Opticians
                        {
                            deuid: "rsmgY2HkHEf",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V46"
                        }, //Regional HRH Observatory source type for Optometrists and Ophthalmic Opticians
                        {
                            deuid: "rsmgY2HkHEf",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W46"
                        }, //Other WHO Regional databases source type for Optometrists and Ophthalmic Opticians
                        {
                            deuid: "rsmgY2HkHEf",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X46"
                        }, //Academia source type for Optometrists and Ophthalmic Opticians
                        {
                            deuid: "rsmgY2HkHEf",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y46"
                        }, //International organisations source type for Optometrists and Ophthalmic Opticians
                        {
                            deuid: "rsmgY2HkHEf",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z46"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Optometrists and Ophthalmic Opticians
                        {
                            deuid: "rsmgY2HkHEf",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA46"
                        }, //Other multi-agency databases source type for Optometrists and Ophthalmic Opticians
                        {
                            deuid: "A8qvwcGQ7oR",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P47"
                        }, //Ministry of Health source type for Dispensing Opticians
                        {
                            deuid: "A8qvwcGQ7oR",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q47"
                        }, //Ministry of Labour source type for Dispensing Opticians
                        {
                            deuid: "A8qvwcGQ7oR",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R47"
                        }, //Ministry of Internal/External Affairs source type for Dispensing Opticians
                        {
                            deuid: "A8qvwcGQ7oR",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S47"
                        }, //National/Central Statistical Office source type for Dispensing Opticians
                        {
                            deuid: "A8qvwcGQ7oR",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T47"
                        }, //National HRH Observatory source type for Dispensing Opticians
                        {
                            deuid: "A8qvwcGQ7oR",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U47"
                        }, //Professional association/Council/ Chamber source type for Dispensing Opticians
                        {
                            deuid: "A8qvwcGQ7oR",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V47"
                        }, //Regional HRH Observatory source type for Dispensing Opticians
                        {
                            deuid: "A8qvwcGQ7oR",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W47"
                        }, //Other WHO Regional databases source type for Dispensing Opticians
                        {
                            deuid: "A8qvwcGQ7oR",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X47"
                        }, //Academia source type for Dispensing Opticians
                        {
                            deuid: "A8qvwcGQ7oR",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y47"
                        }, //International organisations source type for Dispensing Opticians
                        {
                            deuid: "A8qvwcGQ7oR",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z47"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Dispensing Opticians
                        {
                            deuid: "A8qvwcGQ7oR",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA47"
                        }, //Other multi-agency databases source type for Dispensing Opticians
                        {
                            deuid: "HLgQXol1EPh",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P48"
                        }, //Ministry of Health source type for Medical Prosthetic Technicians
                        {
                            deuid: "HLgQXol1EPh",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q48"
                        }, //Ministry of Labour source type for Medical Prosthetic Technicians
                        {
                            deuid: "HLgQXol1EPh",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R48"
                        }, //Ministry of Internal/External Affairs source type for Medical Prosthetic Technicians
                        {
                            deuid: "HLgQXol1EPh",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S48"
                        }, //National/Central Statistical Office source type for Medical Prosthetic Technicians
                        {
                            deuid: "HLgQXol1EPh",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T48"
                        }, //National HRH Observatory source type for Medical Prosthetic Technicians
                        {
                            deuid: "HLgQXol1EPh",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U48"
                        }, //Professional association/Council/ Chamber source type for Medical Prosthetic Technicians
                        {
                            deuid: "HLgQXol1EPh",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V48"
                        }, //Regional HRH Observatory source type for Medical Prosthetic Technicians
                        {
                            deuid: "HLgQXol1EPh",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W48"
                        }, //Other WHO Regional databases source type for Medical Prosthetic Technicians
                        {
                            deuid: "HLgQXol1EPh",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X48"
                        }, //Academia source type for Medical Prosthetic Technicians
                        {
                            deuid: "HLgQXol1EPh",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y48"
                        }, //International organisations source type for Medical Prosthetic Technicians
                        {
                            deuid: "HLgQXol1EPh",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z48"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Medical Prosthetic Technicians
                        {
                            deuid: "HLgQXol1EPh",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA48"
                        }, //Other multi-agency databases source type for Medical Prosthetic Technicians
                        {
                            deuid: "tWmFeJagj87",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P49"
                        }, //Ministry of Health source type for Medical Records and Health Information Technicians
                        {
                            deuid: "tWmFeJagj87",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q49"
                        }, //Ministry of Labour source type for Medical Records and Health Information Technicians
                        {
                            deuid: "tWmFeJagj87",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R49"
                        }, //Ministry of Internal/External Affairs source type for Medical Records and Health Information Technicians
                        {
                            deuid: "tWmFeJagj87",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S49"
                        }, //National/Central Statistical Office source type for Medical Records and Health Information Technicians
                        {
                            deuid: "tWmFeJagj87",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T49"
                        }, //National HRH Observatory source type for Medical Records and Health Information Technicians
                        {
                            deuid: "tWmFeJagj87",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U49"
                        }, //Professional association/Council/ Chamber source type for Medical Records and Health Information Technicians
                        {
                            deuid: "tWmFeJagj87",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V49"
                        }, //Regional HRH Observatory source type for Medical Records and Health Information Technicians
                        {
                            deuid: "tWmFeJagj87",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W49"
                        }, //Other WHO Regional databases source type for Medical Records and Health Information Technicians
                        {
                            deuid: "tWmFeJagj87",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X49"
                        }, //Academia source type for Medical Records and Health Information Technicians
                        {
                            deuid: "tWmFeJagj87",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y49"
                        }, //International organisations source type for Medical Records and Health Information Technicians
                        {
                            deuid: "tWmFeJagj87",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z49"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Medical Records and Health Information Technicians
                        {
                            deuid: "tWmFeJagj87",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA49"
                        }, //Other multi-agency databases source type for Medical Records and Health Information Technicians
                        {
                            deuid: "EojH3xtSttx",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P50"
                        }, //Ministry of Health source type for Medical Assistants
                        {
                            deuid: "EojH3xtSttx",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q50"
                        }, //Ministry of Labour source type for Medical Assistants
                        {
                            deuid: "EojH3xtSttx",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R50"
                        }, //Ministry of Internal/External Affairs source type for Medical Assistants
                        {
                            deuid: "EojH3xtSttx",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S50"
                        }, //National/Central Statistical Office source type for Medical Assistants
                        {
                            deuid: "EojH3xtSttx",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T50"
                        }, //National HRH Observatory source type for Medical Assistants
                        {
                            deuid: "EojH3xtSttx",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U50"
                        }, //Professional association/Council/ Chamber source type for Medical Assistants
                        {
                            deuid: "EojH3xtSttx",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V50"
                        }, //Regional HRH Observatory source type for Medical Assistants
                        {
                            deuid: "EojH3xtSttx",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W50"
                        }, //Other WHO Regional databases source type for Medical Assistants
                        {
                            deuid: "EojH3xtSttx",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X50"
                        }, //Academia source type for Medical Assistants
                        {
                            deuid: "EojH3xtSttx",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y50"
                        }, //International organisations source type for Medical Assistants
                        {
                            deuid: "EojH3xtSttx",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z50"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Medical Assistants
                        {
                            deuid: "EojH3xtSttx",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA50"
                        }, //Other multi-agency databases source type for Medical Assistants
                        {
                            deuid: "HeI3osYsbQa",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P51"
                        }, //Ministry of Health source type for Ambulance Workers
                        {
                            deuid: "HeI3osYsbQa",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q51"
                        }, //Ministry of Labour source type for Ambulance Workers
                        {
                            deuid: "HeI3osYsbQa",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R51"
                        }, //Ministry of Internal/External Affairs source type for Ambulance Workers
                        {
                            deuid: "HeI3osYsbQa",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S51"
                        }, //National/Central Statistical Office source type for Ambulance Workers
                        {
                            deuid: "HeI3osYsbQa",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T51"
                        }, //National HRH Observatory source type for Ambulance Workers
                        {
                            deuid: "HeI3osYsbQa",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U51"
                        }, //Professional association/Council/ Chamber source type for Ambulance Workers
                        {
                            deuid: "HeI3osYsbQa",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V51"
                        }, //Regional HRH Observatory source type for Ambulance Workers
                        {
                            deuid: "HeI3osYsbQa",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W51"
                        }, //Other WHO Regional databases source type for Ambulance Workers
                        {
                            deuid: "HeI3osYsbQa",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X51"
                        }, //Academia source type for Ambulance Workers
                        {
                            deuid: "HeI3osYsbQa",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y51"
                        }, //International organisations source type for Ambulance Workers
                        {
                            deuid: "HeI3osYsbQa",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z51"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Ambulance Workers
                        {
                            deuid: "HeI3osYsbQa",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA51"
                        }, //Other multi-agency databases source type for Ambulance Workers
                        {
                            deuid: "cxmJyqa1T5C",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P52"
                        }, //Ministry of Health source type for Social work and counselling professionals
                        {
                            deuid: "cxmJyqa1T5C",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q52"
                        }, //Ministry of Labour source type for Social work and counselling professionals
                        {
                            deuid: "cxmJyqa1T5C",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R52"
                        }, //Ministry of Internal/External Affairs source type for Social work and counselling professionals
                        {
                            deuid: "cxmJyqa1T5C",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S52"
                        }, //National/Central Statistical Office source type for Social work and counselling professionals
                        {
                            deuid: "cxmJyqa1T5C",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T52"
                        }, //National HRH Observatory source type for Social work and counselling professionals
                        {
                            deuid: "cxmJyqa1T5C",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U52"
                        }, //Professional association/Council/ Chamber source type for Social work and counselling professionals
                        {
                            deuid: "cxmJyqa1T5C",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V52"
                        }, //Regional HRH Observatory source type for Social work and counselling professionals
                        {
                            deuid: "cxmJyqa1T5C",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W52"
                        }, //Other WHO Regional databases source type for Social work and counselling professionals
                        {
                            deuid: "cxmJyqa1T5C",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X52"
                        }, //Academia source type for Social work and counselling professionals
                        {
                            deuid: "cxmJyqa1T5C",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y52"
                        }, //International organisations source type for Social work and counselling professionals
                        {
                            deuid: "cxmJyqa1T5C",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z52"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Social work and counselling professionals
                        {
                            deuid: "cxmJyqa1T5C",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA52"
                        }, //Other multi-agency databases source type for Social work and counselling professionals
                        {
                            deuid: "eA4qiSbPKdb",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P53"
                        }, //Ministry of Health source type for Social work associate professionals
                        {
                            deuid: "eA4qiSbPKdb",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q53"
                        }, //Ministry of Labour source type for Social work associate professionals
                        {
                            deuid: "eA4qiSbPKdb",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R53"
                        }, //Ministry of Internal/External Affairs source type for Social work associate professionals
                        {
                            deuid: "eA4qiSbPKdb",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S53"
                        }, //National/Central Statistical Office source type for Social work associate professionals
                        {
                            deuid: "eA4qiSbPKdb",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T53"
                        }, //National HRH Observatory source type for Social work associate professionals
                        {
                            deuid: "eA4qiSbPKdb",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U53"
                        }, //Professional association/Council/ Chamber source type for Social work associate professionals
                        {
                            deuid: "eA4qiSbPKdb",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V53"
                        }, //Regional HRH Observatory source type for Social work associate professionals
                        {
                            deuid: "eA4qiSbPKdb",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W53"
                        }, //Other WHO Regional databases source type for Social work associate professionals
                        {
                            deuid: "eA4qiSbPKdb",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X53"
                        }, //Academia source type for Social work associate professionals
                        {
                            deuid: "eA4qiSbPKdb",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y53"
                        }, //International organisations source type for Social work associate professionals
                        {
                            deuid: "eA4qiSbPKdb",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z53"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Social work associate professionals
                        {
                            deuid: "eA4qiSbPKdb",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA53"
                        }, //Other multi-agency databases source type for Social work associate professionals
                        {
                            deuid: "Ngzlv0PnZHM",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P54"
                        }, //Ministry of Health source type for Biomedical engineer
                        {
                            deuid: "Ngzlv0PnZHM",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q54"
                        }, //Ministry of Labour source type for Biomedical engineer
                        {
                            deuid: "Ngzlv0PnZHM",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R54"
                        }, //Ministry of Internal/External Affairs source type for Biomedical engineer
                        {
                            deuid: "Ngzlv0PnZHM",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S54"
                        }, //National/Central Statistical Office source type for Biomedical engineer
                        {
                            deuid: "Ngzlv0PnZHM",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T54"
                        }, //National HRH Observatory source type for Biomedical engineer
                        {
                            deuid: "Ngzlv0PnZHM",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U54"
                        }, //Professional association/Council/ Chamber source type for Biomedical engineer
                        {
                            deuid: "Ngzlv0PnZHM",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V54"
                        }, //Regional HRH Observatory source type for Biomedical engineer
                        {
                            deuid: "Ngzlv0PnZHM",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W54"
                        }, //Other WHO Regional databases source type for Biomedical engineer
                        {
                            deuid: "Ngzlv0PnZHM",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X54"
                        }, //Academia source type for Biomedical engineer
                        {
                            deuid: "Ngzlv0PnZHM",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y54"
                        }, //International organisations source type for Biomedical engineer
                        {
                            deuid: "Ngzlv0PnZHM",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z54"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Biomedical engineer
                        {
                            deuid: "Ngzlv0PnZHM",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA54"
                        }, //Other multi-agency databases source type for Biomedical engineer
                        {
                            deuid: "tZ3CM9qXx2R",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P55"
                        }, //Ministry of Health source type for Psychologists
                        {
                            deuid: "tZ3CM9qXx2R",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q55"
                        }, //Ministry of Labour source type for Psychologists
                        {
                            deuid: "tZ3CM9qXx2R",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R55"
                        }, //Ministry of Internal/External Affairs source type for Psychologists
                        {
                            deuid: "tZ3CM9qXx2R",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S55"
                        }, //National/Central Statistical Office source type for Psychologists
                        {
                            deuid: "tZ3CM9qXx2R",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T55"
                        }, //National HRH Observatory source type for Psychologists
                        {
                            deuid: "tZ3CM9qXx2R",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U55"
                        }, //Professional association/Council/ Chamber source type for Psychologists
                        {
                            deuid: "tZ3CM9qXx2R",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V55"
                        }, //Regional HRH Observatory source type for Psychologists
                        {
                            deuid: "tZ3CM9qXx2R",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W55"
                        }, //Other WHO Regional databases source type for Psychologists
                        {
                            deuid: "tZ3CM9qXx2R",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X55"
                        }, //Academia source type for Psychologists
                        {
                            deuid: "tZ3CM9qXx2R",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y55"
                        }, //International organisations source type for Psychologists
                        {
                            deuid: "tZ3CM9qXx2R",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z55"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Psychologists
                        {
                            deuid: "tZ3CM9qXx2R",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA55"
                        }, //Other multi-agency databases source type for Psychologists
                        {
                            deuid: "HhQgAcNaKUv",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P56"
                        }, //Ministry of Health source type for Medical secretaries
                        {
                            deuid: "HhQgAcNaKUv",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q56"
                        }, //Ministry of Labour source type for Medical secretaries
                        {
                            deuid: "HhQgAcNaKUv",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R56"
                        }, //Ministry of Internal/External Affairs source type for Medical secretaries
                        {
                            deuid: "HhQgAcNaKUv",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S56"
                        }, //National/Central Statistical Office source type for Medical secretaries
                        {
                            deuid: "HhQgAcNaKUv",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T56"
                        }, //National HRH Observatory source type for Medical secretaries
                        {
                            deuid: "HhQgAcNaKUv",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U56"
                        }, //Professional association/Council/ Chamber source type for Medical secretaries
                        {
                            deuid: "HhQgAcNaKUv",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V56"
                        }, //Regional HRH Observatory source type for Medical secretaries
                        {
                            deuid: "HhQgAcNaKUv",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W56"
                        }, //Other WHO Regional databases source type for Medical secretaries
                        {
                            deuid: "HhQgAcNaKUv",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X56"
                        }, //Academia source type for Medical secretaries
                        {
                            deuid: "HhQgAcNaKUv",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y56"
                        }, //International organisations source type for Medical secretaries
                        {
                            deuid: "HhQgAcNaKUv",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z56"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Medical secretaries
                        {
                            deuid: "HhQgAcNaKUv",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA56"
                        }, //Other multi-agency databases source type for Medical secretaries
                        {
                            deuid: "jxUmQ1pAqyo",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P57"
                        }, //Ministry of Health source type for Managerial staff
                        {
                            deuid: "jxUmQ1pAqyo",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q57"
                        }, //Ministry of Labour source type for Managerial staff
                        {
                            deuid: "jxUmQ1pAqyo",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R57"
                        }, //Ministry of Internal/External Affairs source type for Managerial staff
                        {
                            deuid: "jxUmQ1pAqyo",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S57"
                        }, //National/Central Statistical Office source type for Managerial staff
                        {
                            deuid: "jxUmQ1pAqyo",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T57"
                        }, //National HRH Observatory source type for Managerial staff
                        {
                            deuid: "jxUmQ1pAqyo",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U57"
                        }, //Professional association/Council/ Chamber source type for Managerial staff
                        {
                            deuid: "jxUmQ1pAqyo",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V57"
                        }, //Regional HRH Observatory source type for Managerial staff
                        {
                            deuid: "jxUmQ1pAqyo",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W57"
                        }, //Other WHO Regional databases source type for Managerial staff
                        {
                            deuid: "jxUmQ1pAqyo",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X57"
                        }, //Academia source type for Managerial staff
                        {
                            deuid: "jxUmQ1pAqyo",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y57"
                        }, //International organisations source type for Managerial staff
                        {
                            deuid: "jxUmQ1pAqyo",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z57"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Managerial staff
                        {
                            deuid: "jxUmQ1pAqyo",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA57"
                        }, //Other multi-agency databases source type for Managerial staff
                        {
                            deuid: "Gi4BzUhTjYb",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P58"
                        }, //Ministry of Health source type for Administrative staff
                        {
                            deuid: "Gi4BzUhTjYb",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q58"
                        }, //Ministry of Labour source type for Administrative staff
                        {
                            deuid: "Gi4BzUhTjYb",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R58"
                        }, //Ministry of Internal/External Affairs source type for Administrative staff
                        {
                            deuid: "Gi4BzUhTjYb",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S58"
                        }, //National/Central Statistical Office source type for Administrative staff
                        {
                            deuid: "Gi4BzUhTjYb",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T58"
                        }, //National HRH Observatory source type for Administrative staff
                        {
                            deuid: "Gi4BzUhTjYb",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U58"
                        }, //Professional association/Council/ Chamber source type for Administrative staff
                        {
                            deuid: "Gi4BzUhTjYb",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V58"
                        }, //Regional HRH Observatory source type for Administrative staff
                        {
                            deuid: "Gi4BzUhTjYb",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W58"
                        }, //Other WHO Regional databases source type for Administrative staff
                        {
                            deuid: "Gi4BzUhTjYb",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X58"
                        }, //Academia source type for Administrative staff
                        {
                            deuid: "Gi4BzUhTjYb",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y58"
                        }, //International organisations source type for Administrative staff
                        {
                            deuid: "Gi4BzUhTjYb",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z58"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Administrative staff
                        {
                            deuid: "Gi4BzUhTjYb",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA58"
                        }, //Other multi-agency databases source type for Administrative staff
                        {
                            deuid: "cs7H0NFWgV1",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P59"
                        }, //Ministry of Health source type for Health information systems personnel
                        {
                            deuid: "cs7H0NFWgV1",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q59"
                        }, //Ministry of Labour source type for Health information systems personnel
                        {
                            deuid: "cs7H0NFWgV1",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R59"
                        }, //Ministry of Internal/External Affairs source type for Health information systems personnel
                        {
                            deuid: "cs7H0NFWgV1",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S59"
                        }, //National/Central Statistical Office source type for Health information systems personnel
                        {
                            deuid: "cs7H0NFWgV1",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T59"
                        }, //National HRH Observatory source type for Health information systems personnel
                        {
                            deuid: "cs7H0NFWgV1",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U59"
                        }, //Professional association/Council/ Chamber source type for Health information systems personnel
                        {
                            deuid: "cs7H0NFWgV1",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V59"
                        }, //Regional HRH Observatory source type for Health information systems personnel
                        {
                            deuid: "cs7H0NFWgV1",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W59"
                        }, //Other WHO Regional databases source type for Health information systems personnel
                        {
                            deuid: "cs7H0NFWgV1",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X59"
                        }, //Academia source type for Health information systems personnel
                        {
                            deuid: "cs7H0NFWgV1",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y59"
                        }, //International organisations source type for Health information systems personnel
                        {
                            deuid: "cs7H0NFWgV1",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z59"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Health information systems personnel
                        {
                            deuid: "cs7H0NFWgV1",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA59"
                        }, //Other multi-agency databases source type for Health information systems personnel
                        {
                            deuid: "Ls5uiJRlx9L",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P60"
                        }, //Ministry of Health source type for Engineering and maintenance staff
                        {
                            deuid: "Ls5uiJRlx9L",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q60"
                        }, //Ministry of Labour source type for Engineering and maintenance staff
                        {
                            deuid: "Ls5uiJRlx9L",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R60"
                        }, //Ministry of Internal/External Affairs source type for Engineering and maintenance staff
                        {
                            deuid: "Ls5uiJRlx9L",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S60"
                        }, //National/Central Statistical Office source type for Engineering and maintenance staff
                        {
                            deuid: "Ls5uiJRlx9L",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T60"
                        }, //National HRH Observatory source type for Engineering and maintenance staff
                        {
                            deuid: "Ls5uiJRlx9L",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U60"
                        }, //Professional association/Council/ Chamber source type for Engineering and maintenance staff
                        {
                            deuid: "Ls5uiJRlx9L",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V60"
                        }, //Regional HRH Observatory source type for Engineering and maintenance staff
                        {
                            deuid: "Ls5uiJRlx9L",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W60"
                        }, //Other WHO Regional databases source type for Engineering and maintenance staff
                        {
                            deuid: "Ls5uiJRlx9L",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X60"
                        }, //Academia source type for Engineering and maintenance staff
                        {
                            deuid: "Ls5uiJRlx9L",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y60"
                        }, //International organisations source type for Engineering and maintenance staff
                        {
                            deuid: "Ls5uiJRlx9L",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z60"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Engineering and maintenance staff
                        {
                            deuid: "Ls5uiJRlx9L",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA60"
                        }, //Other multi-agency databases source type for Engineering and maintenance staff
                        {
                            deuid: "hTbGyO8zzbu",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P61"
                        }, //Ministry of Health source type for Other non-medical professional staff
                        {
                            deuid: "hTbGyO8zzbu",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q61"
                        }, //Ministry of Labour source type for Other non-medical professional staff
                        {
                            deuid: "hTbGyO8zzbu",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R61"
                        }, //Ministry of Internal/External Affairs source type for Other non-medical professional staff
                        {
                            deuid: "hTbGyO8zzbu",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S61"
                        }, //National/Central Statistical Office source type for Other non-medical professional staff
                        {
                            deuid: "hTbGyO8zzbu",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T61"
                        }, //National HRH Observatory source type for Other non-medical professional staff
                        {
                            deuid: "hTbGyO8zzbu",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U61"
                        }, //Professional association/Council/ Chamber source type for Other non-medical professional staff
                        {
                            deuid: "hTbGyO8zzbu",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V61"
                        }, //Regional HRH Observatory source type for Other non-medical professional staff
                        {
                            deuid: "hTbGyO8zzbu",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W61"
                        }, //Other WHO Regional databases source type for Other non-medical professional staff
                        {
                            deuid: "hTbGyO8zzbu",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X61"
                        }, //Academia source type for Other non-medical professional staff
                        {
                            deuid: "hTbGyO8zzbu",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y61"
                        }, //International organisations source type for Other non-medical professional staff
                        {
                            deuid: "hTbGyO8zzbu",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z61"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Other non-medical professional staff
                        {
                            deuid: "hTbGyO8zzbu",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA61"
                        }, //Other multi-agency databases source type for Other non-medical professional staff
                        {
                            deuid: "zVBLVa1TCTI",
                            cocuid: "LvGn3KFEzvA",
                            cell_no: "P62"
                        }, //Ministry of Health source type for Other non-medical support staff
                        {
                            deuid: "zVBLVa1TCTI",
                            cocuid: "MXfWGD11wLh",
                            cell_no: "Q62"
                        }, //Ministry of Labour source type for Other non-medical support staff
                        {
                            deuid: "zVBLVa1TCTI",
                            cocuid: "wcnRf5LJrnK",
                            cell_no: "R62"
                        }, //Ministry of Internal/External Affairs source type for Other non-medical support staff
                        {
                            deuid: "zVBLVa1TCTI",
                            cocuid: "hC2N9T8F5JD",
                            cell_no: "S62"
                        }, //National/Central Statistical Office source type for Other non-medical support staff
                        {
                            deuid: "zVBLVa1TCTI",
                            cocuid: "eWjpUQpzWKX",
                            cell_no: "T62"
                        }, //National HRH Observatory source type for Other non-medical support staff
                        {
                            deuid: "zVBLVa1TCTI",
                            cocuid: "rEUC186wftQ",
                            cell_no: "U62"
                        }, //Professional association/Council/ Chamber source type for Other non-medical support staff
                        {
                            deuid: "zVBLVa1TCTI",
                            cocuid: "s5mo8EjeKiY",
                            cell_no: "V62"
                        }, //Regional HRH Observatory source type for Other non-medical support staff
                        {
                            deuid: "zVBLVa1TCTI",
                            cocuid: "IhnQTXo2sCi",
                            cell_no: "W62"
                        }, //Other WHO Regional databases source type for Other non-medical support staff
                        {
                            deuid: "zVBLVa1TCTI",
                            cocuid: "bj9TvyIDtwi",
                            cell_no: "X62"
                        }, //Academia source type for Other non-medical support staff
                        {
                            deuid: "zVBLVa1TCTI",
                            cocuid: "lcB0UtS4nuB",
                            cell_no: "Y62"
                        }, //International organisations source type for Other non-medical support staff
                        {
                            deuid: "zVBLVa1TCTI",
                            cocuid: "P5jMO9Y0SRn",
                            cell_no: "Z62"
                        }, //Multi-agency organaisation (OECD/EusroStat/WHO-EURO Joint Questionnaire) source type for Other non-medical support staff
                        {
                            deuid: "zVBLVa1TCTI",
                            cocuid: "xgbBSeyiDWp",
                            cell_no: "AA62"
                        } //Other multi-agency databases source type for Other non-medical support staff
                    ]
                }
            ]
        },
        {
            name: "Module 2 Template",
            file: "Module_2_Template.xlsx",
            sheets: [
                {
                    sheet_type: "AGGREGATE_STATIC",
                    sheet_no: 1, //Input sheet
                    orgUnitIdScheme: "UID",
                    dataElementIdScheme: "UID",
                    idScheme: "UID",
                    oucode_cell: "V2",
                    year_cell: "L4",
                    last_data_column: "P",

                    agg_des: [
                        {
                            deuid: "GZZ2BDHZX5w",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "D8"
                        }, //Medical Doctors Applications
                        {
                            deuid: "HVOexl8T1Tv",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "E8"
                        }, //Medical Doctors Applications By Male Gender
                        {
                            deuid: "ljMIY6HvkD6",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "F8"
                        }, //Medical Doctors Applications By Female Gender
                        {
                            deuid: "Ca8zQsc1xjC",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "G8"
                        }, //Medical Doctors Admissions
                        {
                            deuid: "orhcprpuyDa",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "H8"
                        }, //Medical Doctors Admissions By Male Gender
                        {
                            deuid: "xpBCkAdPXni",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "I8"
                        }, //Medical Doctors Admissions By Female Gender
                        {
                            deuid: "dOdILuGzOCT",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "J8"
                        }, //Medical Doctors Entrants
                        {
                            deuid: "OJIzrlkgQh8",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "K8"
                        }, //Medical Doctors Entrants By Male Gender
                        {
                            deuid: "utIBHSRqgVj",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "L8"
                        }, //Medical Doctors Entrants By Female Gender
                        {
                            deuid: "xW9MAkUek3E",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "M8"
                        }, //Medical Doctors Enrolled
                        {
                            deuid: "GZZ2BDHZX5w",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "D9"
                        }, //General Medical Practitioners Applications
                        {
                            deuid: "HVOexl8T1Tv",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "E9"
                        }, //General Medical Practitioners Applications By Male Gender
                        {
                            deuid: "ljMIY6HvkD6",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "F9"
                        }, //General Medical Practitioners Applications By Female Gender
                        {
                            deuid: "Ca8zQsc1xjC",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "G9"
                        }, //General Medical Practitioners Admissions
                        {
                            deuid: "orhcprpuyDa",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "H9"
                        }, //General Medical Practitioners Admissions By Male Gender
                        {
                            deuid: "xpBCkAdPXni",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "I9"
                        }, //General Medical Practitioners Admissions By Female Gender
                        {
                            deuid: "dOdILuGzOCT",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "J9"
                        }, //General Medical Practitioners Entrants
                        {
                            deuid: "OJIzrlkgQh8",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "K9"
                        }, //General Medical Practitioners Entrants By Male Gender
                        {
                            deuid: "utIBHSRqgVj",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "L9"
                        }, //General Medical Practitioners Entrants By Female Gender
                        {
                            deuid: "xW9MAkUek3E",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "M9"
                        }, //General Medical Practitioners Enrolled
                        {
                            deuid: "GZZ2BDHZX5w",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "D10"
                        }, //Specialist Medical Practitioners Applications
                        {
                            deuid: "HVOexl8T1Tv",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "E10"
                        }, //Specialist Medical Practitioners Applications By Male Gender
                        {
                            deuid: "ljMIY6HvkD6",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "F10"
                        }, //Specialist Medical Practitioners Applications By Female Gender
                        {
                            deuid: "Ca8zQsc1xjC",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "G10"
                        }, //Specialist Medical Practitioners Admissions
                        {
                            deuid: "orhcprpuyDa",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "H10"
                        }, //Specialist Medical Practitioners Admissions By Male Gender
                        {
                            deuid: "xpBCkAdPXni",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "I10"
                        }, //Specialist Medical Practitioners Admissions By Female Gender
                        {
                            deuid: "dOdILuGzOCT",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "J10"
                        }, //Specialist Medical Practitioners Entrants
                        {
                            deuid: "OJIzrlkgQh8",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "K10"
                        }, //Specialist Medical Practitioners Entrants By Male Gender
                        {
                            deuid: "utIBHSRqgVj",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "L10"
                        }, //Specialist Medical Practitioners Entrants By Female Gender
                        {
                            deuid: "xW9MAkUek3E",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "M10"
                        }, //Specialist Medical Practitioners Enrolled
                        {
                            deuid: "GZZ2BDHZX5w",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "D11"
                        }, //Nursing Professionals Applications
                        {
                            deuid: "HVOexl8T1Tv",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "E11"
                        }, //Nursing Professionals Applications By Male Gender
                        {
                            deuid: "ljMIY6HvkD6",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "F11"
                        }, //Nursing Professionals Applications By Female Gender
                        {
                            deuid: "Ca8zQsc1xjC",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "G11"
                        }, //Nursing Professionals Admissions
                        {
                            deuid: "orhcprpuyDa",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "H11"
                        }, //Nursing Professionals Admissions By Male Gender
                        {
                            deuid: "xpBCkAdPXni",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "I11"
                        }, //Nursing Professionals Admissions By Female Gender
                        {
                            deuid: "dOdILuGzOCT",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "J11"
                        }, //Nursing Professionals Entrants
                        {
                            deuid: "OJIzrlkgQh8",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "K11"
                        }, //Nursing Professionals Entrants By Male Gender
                        {
                            deuid: "utIBHSRqgVj",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "L11"
                        }, //Nursing Professionals Entrants By Female Gender
                        {
                            deuid: "xW9MAkUek3E",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "M11"
                        }, //Nursing Professionals Enrolled
                        {
                            deuid: "GZZ2BDHZX5w",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "D12"
                        }, //Midwifery Professionals Applications
                        {
                            deuid: "HVOexl8T1Tv",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "E12"
                        }, //Midwifery Professionals Applications By Male Gender
                        {
                            deuid: "ljMIY6HvkD6",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "F12"
                        }, //Midwifery Professionals Applications By Female Gender
                        {
                            deuid: "Ca8zQsc1xjC",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "G12"
                        }, //Midwifery Professionals Admissions
                        {
                            deuid: "orhcprpuyDa",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "H12"
                        }, //Midwifery Professionals Admissions By Male Gender
                        {
                            deuid: "xpBCkAdPXni",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "I12"
                        }, //Midwifery Professionals Admissions By Female Gender
                        {
                            deuid: "dOdILuGzOCT",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "J12"
                        }, //Midwifery Professionals Entrants
                        {
                            deuid: "OJIzrlkgQh8",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "K12"
                        }, //Midwifery Professionals Entrants By Male Gender
                        {
                            deuid: "utIBHSRqgVj",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "L12"
                        }, //Midwifery Professionals Entrants By Female Gender
                        {
                            deuid: "xW9MAkUek3E",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "M12"
                        }, //Midwifery Professionals Enrolled
                        {
                            deuid: "GZZ2BDHZX5w",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "D13"
                        }, //Dentists Applications
                        {
                            deuid: "HVOexl8T1Tv",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "E13"
                        }, //Dentists Applications By Male Gender
                        {
                            deuid: "ljMIY6HvkD6",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "F13"
                        }, //Dentists Applications By Female Gender
                        {
                            deuid: "Ca8zQsc1xjC",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "G13"
                        }, //Dentists Admissions
                        {
                            deuid: "orhcprpuyDa",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "H13"
                        }, //Dentists Admissions By Male Gender
                        {
                            deuid: "xpBCkAdPXni",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "I13"
                        }, //Dentists Admissions By Female Gender
                        {
                            deuid: "dOdILuGzOCT",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "J13"
                        }, //Dentists Entrants
                        {
                            deuid: "OJIzrlkgQh8",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "K13"
                        }, //Dentists Entrants By Male Gender
                        {
                            deuid: "utIBHSRqgVj",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "L13"
                        }, //Dentists Entrants By Female Gender
                        {
                            deuid: "xW9MAkUek3E",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "M13"
                        }, //Dentists Enrolled
                        {
                            deuid: "GZZ2BDHZX5w",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "D14"
                        }, //Pharmacists Applications
                        {
                            deuid: "HVOexl8T1Tv",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "E14"
                        }, //Pharmacists Applications By Male Gender
                        {
                            deuid: "ljMIY6HvkD6",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "F14"
                        }, //Pharmacists Applications By Female Gender
                        {
                            deuid: "Ca8zQsc1xjC",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "G14"
                        }, //Pharmacists Admissions
                        {
                            deuid: "orhcprpuyDa",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "H14"
                        }, //Pharmacists Admissions By Male Gender
                        {
                            deuid: "xpBCkAdPXni",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "I14"
                        }, //Pharmacists Admissions By Female Gender
                        {
                            deuid: "dOdILuGzOCT",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "J14"
                        }, //Pharmacists Entrants
                        {
                            deuid: "OJIzrlkgQh8",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "K14"
                        }, //Pharmacists Entrants By Male Gender
                        {
                            deuid: "utIBHSRqgVj",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "L14"
                        }, //Pharmacists Entrants By Female Gender
                        {
                            deuid: "xW9MAkUek3E",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "M14"
                        } //Pharmacists Enrolled
                    ]
                },
                {
                    sheet_type: "AGGREGATE_STATIC",
                    sheet_no: 2, //Output&Institutions sheet
                    orgUnitIdScheme: "UID",
                    dataElementIdScheme: "UID",
                    idScheme: "UID",
                    oucode_cell: "N2",
                    year_cell: "L4",
                    last_data_column: "O",

                    agg_des: [
                        {
                            deuid: "W3hjWF2zAkt",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "D12"
                        }, //Medical Doctors Graduates
                        {
                            deuid: "b5Y5ttOan5u",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "E12"
                        }, //Medical Doctors Male
                        {
                            deuid: "d9aRkLridyB",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "F12"
                        }, //Medical Doctors Female
                        {
                            deuid: "h0MrvKyI3Nk",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "G12"
                        }, //Medical Doctors Public
                        {
                            deuid: "bXegTxbu4XB",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "H12"
                        }, //Medical Doctors Private
                        {
                            deuid: "GAikjDurEiF",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "I12"
                        }, //Medical Doctors Students quitting
                        {
                            deuid: "AeURkaiQxjy",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "J12"
                        }, //Medical Doctors Educators
                        {
                            deuid: "RnxSxiLePqc",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "K12"
                        }, //Medical Doctors Education & training capacity (places)
                        {
                            deuid: "WBxm9A5Qkea",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "L12"
                        }, //Medical Doctors Training Duration
                        {
                            deuid: "W3hjWF2zAkt",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "D13"
                        }, //General Medical Practitioner Graduates
                        {
                            deuid: "b5Y5ttOan5u",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "E13"
                        }, //General Medical Practitioner Male
                        {
                            deuid: "d9aRkLridyB",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "F13"
                        }, //General Medical Practitioner Female
                        {
                            deuid: "h0MrvKyI3Nk",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "G13"
                        }, //General Medical Practitioner Public
                        {
                            deuid: "bXegTxbu4XB",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "H13"
                        }, //General Medical Practitioner Private
                        {
                            deuid: "GAikjDurEiF",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "I13"
                        }, //General Medical Practitioner Students quitting
                        {
                            deuid: "AeURkaiQxjy",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "J13"
                        }, //General Medical Practitioner Educators
                        {
                            deuid: "RnxSxiLePqc",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "K13"
                        }, //General Medical Practitioner Education & training capacity (places)
                        {
                            deuid: "WBxm9A5Qkea",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "L13"
                        }, //General Medical Practitioner Training Duration
                        {
                            deuid: "W3hjWF2zAkt",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "D14"
                        }, //Specialist Medical Practitioner Graduates
                        {
                            deuid: "b5Y5ttOan5u",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "E14"
                        }, //Specialist Medical Practitioner Male
                        {
                            deuid: "d9aRkLridyB",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "F14"
                        }, //Specialist Medical Practitioner Female
                        {
                            deuid: "h0MrvKyI3Nk",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "G14"
                        }, //Specialist Medical Practitioner Public
                        {
                            deuid: "bXegTxbu4XB",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "H14"
                        }, //Specialist Medical Practitioner Private
                        {
                            deuid: "GAikjDurEiF",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "I14"
                        }, //Specialist Medical Practitioner Students quitting
                        {
                            deuid: "AeURkaiQxjy",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "J14"
                        }, //Specialist Medical Practitioner Educators
                        {
                            deuid: "RnxSxiLePqc",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "K14"
                        }, //Specialist Medical Practitioner Education & training capacity (places)
                        {
                            deuid: "WBxm9A5Qkea",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "L14"
                        }, //Specialist Medical Practitioner Training Duration
                        {
                            deuid: "W3hjWF2zAkt",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "D15"
                        }, //Nursing Professional Graduates
                        {
                            deuid: "b5Y5ttOan5u",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "E15"
                        }, //Nursing Professional Male
                        {
                            deuid: "d9aRkLridyB",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "F15"
                        }, //Nursing Professional Female
                        {
                            deuid: "h0MrvKyI3Nk",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "G15"
                        }, //Nursing Professional Public
                        {
                            deuid: "bXegTxbu4XB",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "H15"
                        }, //Nursing Professional Private
                        {
                            deuid: "GAikjDurEiF",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "I15"
                        }, //Nursing Professional Students quitting
                        {
                            deuid: "AeURkaiQxjy",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "J15"
                        }, //Nursing Professional Educators
                        {
                            deuid: "RnxSxiLePqc",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "K15"
                        }, //Nursing Professional Education & training capacity (places)
                        {
                            deuid: "WBxm9A5Qkea",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "L15"
                        }, //Nursing Professional Training Duration
                        {
                            deuid: "W3hjWF2zAkt",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "D16"
                        }, //Midwifery Professional Graduates
                        {
                            deuid: "b5Y5ttOan5u",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "E16"
                        }, //Midwifery Professional Male
                        {
                            deuid: "d9aRkLridyB",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "F16"
                        }, //Midwifery Professional Female
                        {
                            deuid: "h0MrvKyI3Nk",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "G16"
                        }, //Midwifery Professional Public
                        {
                            deuid: "bXegTxbu4XB",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "H16"
                        }, //Midwifery Professional Private
                        {
                            deuid: "GAikjDurEiF",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "I16"
                        }, //Midwifery Professional Students quitting
                        {
                            deuid: "AeURkaiQxjy",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "J16"
                        }, //Midwifery Professional Educators
                        {
                            deuid: "RnxSxiLePqc",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "K16"
                        }, //Midwifery Professional Education & training capacity (places)
                        {
                            deuid: "WBxm9A5Qkea",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "L16"
                        }, //Midwifery Professional Training Duration
                        {
                            deuid: "W3hjWF2zAkt",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "D17"
                        }, //Dentist Graduates
                        {
                            deuid: "b5Y5ttOan5u",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "E17"
                        }, //Dentist Male
                        {
                            deuid: "d9aRkLridyB",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "F17"
                        }, //Dentist Female
                        {
                            deuid: "h0MrvKyI3Nk",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "G17"
                        }, //Dentist Public
                        {
                            deuid: "bXegTxbu4XB",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "H17"
                        }, //Dentist Private
                        {
                            deuid: "GAikjDurEiF",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "I17"
                        }, //Dentist Students quitting
                        {
                            deuid: "AeURkaiQxjy",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "J17"
                        }, //Dentist Educators
                        {
                            deuid: "RnxSxiLePqc",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "K17"
                        }, //Dentist Education & training capacity (places)
                        {
                            deuid: "WBxm9A5Qkea",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "L17"
                        }, //Dentist Training Duration
                        {
                            deuid: "W3hjWF2zAkt",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "D18"
                        }, //Pharmacist Graduates
                        {
                            deuid: "b5Y5ttOan5u",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "E18"
                        }, //Pharmacist Male
                        {
                            deuid: "d9aRkLridyB",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "F18"
                        }, //Pharmacist Female
                        {
                            deuid: "h0MrvKyI3Nk",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "G18"
                        }, //Pharmacist Public
                        {
                            deuid: "bXegTxbu4XB",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "H18"
                        }, //Pharmacist Private
                        {
                            deuid: "GAikjDurEiF",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "I18"
                        }, //Pharmacist Students quitting
                        {
                            deuid: "AeURkaiQxjy",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "J18"
                        }, //Pharmacist Educators
                        {
                            deuid: "RnxSxiLePqc",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "K18"
                        }, //Pharmacist Education & training capacity (places)
                        {
                            deuid: "WBxm9A5Qkea",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "L18"
                        }, //Pharmacist Training Duration
                        {
                            deuid: "LaGVF6RjtGc",
                            cocuid: "Xr12mI7VPn3",
                            cell_no: "N9"
                        } //Is your master list of accredited education institutions up to date and available in the public domain?
                    ]
                },
                {
                    sheet_type: "AGGREGATE_STATIC_YES_ONLY",
                    sheet_no: 3, //Source Type sheet
                    orgUnitIdScheme: "UID",
                    dataElementIdScheme: "UID",
                    idScheme: "UID",
                    oucode_cell: "P2",
                    year_cell: "I4",
                    last_data_column: "R",

                    agg_des: [
                        {
                            deuid: "GHRcigiFyO0",
                            cocuid: "dYLYgidzGd0",
                            cell_no: "P8"
                        }, //Ministry of Education source type for Medical Doctors
                        {
                            deuid: "GHRcigiFyO0",
                            cocuid: "ukju4pkJeXV",
                            cell_no: "Q8"
                        }, //Regulatory Bodies source type for Medical Doctors
                        {
                            deuid: "uwBMy7jAOzr",
                            cocuid: "dYLYgidzGd0",
                            cell_no: "P9"
                        }, //Ministry of Education source type for General Medical Practitioner
                        {
                            deuid: "uwBMy7jAOzr",
                            cocuid: "ukju4pkJeXV",
                            cell_no: "Q9"
                        }, //Regulatory Bodies source type for General Medical Practitioner
                        {
                            deuid: "lvkcxdk6ewE",
                            cocuid: "dYLYgidzGd0",
                            cell_no: "P10"
                        }, //Ministry of Education source type for Specialist Medical Practitioner
                        {
                            deuid: "lvkcxdk6ewE",
                            cocuid: "ukju4pkJeXV",
                            cell_no: "Q10"
                        }, //Regulatory Bodies source type for Specialist Medical Practitioner
                        {
                            deuid: "Tu7mmoVDSFh",
                            cocuid: "dYLYgidzGd0",
                            cell_no: "P11"
                        }, //Ministry of Education source type for Nursing Professional
                        {
                            deuid: "Tu7mmoVDSFh",
                            cocuid: "ukju4pkJeXV",
                            cell_no: "Q11"
                        }, //Regulatory Bodies source type for Nursing Professional
                        {
                            deuid: "baxzJnblwIA",
                            cocuid: "dYLYgidzGd0",
                            cell_no: "P12"
                        }, //Ministry of Education source type for Midwifery Professional
                        {
                            deuid: "baxzJnblwIA",
                            cocuid: "ukju4pkJeXV",
                            cell_no: "Q12"
                        }, //Regulatory Bodies source type for Midwifery Professional
                        {
                            deuid: "vERGKxg4ky5",
                            cocuid: "dYLYgidzGd0",
                            cell_no: "P13"
                        }, //Ministry of Education source type for Dentist
                        {
                            deuid: "vERGKxg4ky5",
                            cocuid: "ukju4pkJeXV",
                            cell_no: "Q13"
                        }, //Regulatory Bodies source type for Dentist
                        {
                            deuid: "ZeF4Zhl5iSz",
                            cocuid: "dYLYgidzGd0",
                            cell_no: "P14"
                        }, //Ministry of Education source type for Pharmacist
                        {
                            deuid: "ZeF4Zhl5iSz",
                            cocuid: "ukju4pkJeXV",
                            cell_no: "Q14"
                        } //Regulatory Bodies source type for Pharmacist
                    ]
                }
            ]
        },
        {
            name: "Module 3 Template",
            file: "Module_3_Template.xlsx",
            sheets: [
                {
                    sheet_type: "AGGREGATE_STATIC",
                    sheet_no: 1, //Module 3 sheet
                    orgUnitIdScheme: "UID",
                    dataElementIdScheme: "UID",
                    idScheme: "UID",
                    oucode_cell: "S2",
                    year_cell: "J4",
                    last_data_column: "AL",

                    agg_des: [
                        {
                            deuid: "afgPWA9EO9d",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "AE8"
                        }, //Existence of national and/or sub-national standard on the duration and contents of education and training for Medical Doctors
                        {
                            deuid: "afgPWA9EO9d",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "AF8"
                        }, //Existence of national and/or sub-national standard on the duration and contents of education and training for General Medical Practitioners
                        {
                            deuid: "afgPWA9EO9d",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "AG8"
                        }, //Existence of national and/or sub-national standard on the duration and contents of education and training for Specialist Medical Practitioners
                        {
                            deuid: "afgPWA9EO9d",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "AH8"
                        }, //Existence of national and/or sub-national standard on the duration and contents of education and training for Nursing Professionals
                        {
                            deuid: "afgPWA9EO9d",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "AI8"
                        }, //Existence of national and/or sub-national standard on the duration and contents of education and training for Midwifery Professionals
                        {
                            deuid: "afgPWA9EO9d",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "AJ8"
                        }, //Existence of national and/or sub-national standard on the duration and contents of education and training for Dentists
                        {
                            deuid: "afgPWA9EO9d",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "AK8"
                        }, //Existence of national and/or sub-national standard on the duration and contents of education and training for Pharmacists
                        {
                            deuid: "HZci3ozLEL4",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "AE11"
                        }, //Existence of national and/or sub-national mechanisms for accreditation of education and training institutions and their programmes, by programme, by occupation for Medical Doctors
                        {
                            deuid: "HZci3ozLEL4",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "AF11"
                        }, //Existence of national and/or sub-national mechanisms for accreditation of education and training institutions and their programmes, by programme, by occupation for General Medical Practitioners
                        {
                            deuid: "HZci3ozLEL4",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "AG11"
                        }, //Existence of national and/or sub-national mechanisms for accreditation of education and training institutions and their programmes, by programme, by occupation for Specialist Medical Practitioners
                        {
                            deuid: "HZci3ozLEL4",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "AH11"
                        }, //Existence of national and/or sub-national mechanisms for accreditation of education and training institutions and their programmes, by programme, by occupation for Nursing Professionals
                        {
                            deuid: "HZci3ozLEL4",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "AI11"
                        }, //Existence of national and/or sub-national mechanisms for accreditation of education and training institutions and their programmes, by programme, by occupation for Midwifery Professionals
                        {
                            deuid: "HZci3ozLEL4",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "AJ11"
                        }, //Existence of national and/or sub-national mechanisms for accreditation of education and training institutions and their programmes, by programme, by occupation for Dentists
                        {
                            deuid: "HZci3ozLEL4",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "AK11"
                        }, //Existence of national and/or sub-national mechanisms for accreditation of education and training institutions and their programmes, by programme, by occupation for Pharmacists
                        {
                            deuid: "aEDrisPWh6i",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "AE14"
                        }, //Existence of national and/or subnational mechanism on social accountability in accreditation for Medical Doctors
                        {
                            deuid: "aEDrisPWh6i",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "AF14"
                        }, //Existence of national and/or subnational mechanism on social accountability in accreditation for General Medical Practitioners
                        {
                            deuid: "aEDrisPWh6i",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "AG14"
                        }, //Existence of national and/or subnational mechanism on social accountability in accreditation for Specialist Medical Practitioners
                        {
                            deuid: "aEDrisPWh6i",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "AH14"
                        }, //Existence of national and/or subnational mechanism on social accountability in accreditation for Nursing Professionals
                        {
                            deuid: "aEDrisPWh6i",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "AI14"
                        }, //Existence of national and/or subnational mechanism on social accountability in accreditation for Midwifery Professionals
                        {
                            deuid: "aEDrisPWh6i",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "AJ14"
                        }, //Existence of national and/or subnational mechanism on social accountability in accreditation for Dentists
                        {
                            deuid: "aEDrisPWh6i",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "AK14"
                        }, //Existence of national and/or subnational mechanism on social accountability in accreditation for Pharmacists
                        {
                            deuid: "ubXH2Mko823",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "AE15"
                        }, //Effectively implementation of the national and/or subnational standards on Social Accountability  for Medical Doctors
                        {
                            deuid: "ubXH2Mko823",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "AF15"
                        }, //Effectively implementation of the national and/or subnational standards on Social Accountability  for General Medical Practitioners
                        {
                            deuid: "ubXH2Mko823",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "AG15"
                        }, //Effectively implementation of the national and/or subnational standards on Social Accountability  for Specialist Medical Practitioners
                        {
                            deuid: "ubXH2Mko823",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "AH15"
                        }, //Effectively implementation of the national and/or subnational standards on Social Accountability  for Nursing Professionals
                        {
                            deuid: "ubXH2Mko823",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "AI15"
                        }, //Effectively implementation of the national and/or subnational standards on Social Accountability  for Midwifery Professionals
                        {
                            deuid: "ubXH2Mko823",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "AJ15"
                        }, //Effectively implementation of the national and/or subnational standards on Social Accountability  for Dentists
                        {
                            deuid: "ubXH2Mko823",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "AK15"
                        }, //Effectively implementation of the national and/or subnational standards on Social Accountability  for Pharmacists
                        {
                            deuid: "U5S2sbEnGT9",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "AE18"
                        }, //Existence of national and/or sub-national standards for the Social Determinants of Health for Medical Doctors
                        {
                            deuid: "U5S2sbEnGT9",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "AF18"
                        }, //Existence of national and/or sub-national standards for the Social Determinants of Health for General Medical Practitioners
                        {
                            deuid: "U5S2sbEnGT9",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "AG18"
                        }, //Existence of national and/or sub-national standards for the Social Determinants of Health for Specialist Medical Practitioners
                        {
                            deuid: "U5S2sbEnGT9",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "AH18"
                        }, //Existence of national and/or sub-national standards for the Social Determinants of Health for Nursing Professionals
                        {
                            deuid: "U5S2sbEnGT9",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "AI18"
                        }, //Existence of national and/or sub-national standards for the Social Determinants of Health for Midwifery Professionals
                        {
                            deuid: "U5S2sbEnGT9",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "AJ18"
                        }, //Existence of national and/or sub-national standards for the Social Determinants of Health for Dentists
                        {
                            deuid: "U5S2sbEnGT9",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "AK18"
                        }, //Existence of national and/or sub-national standards for the Social Determinants of Health for Pharmacists
                        {
                            deuid: "Qj97xn0ejxd",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "AE21"
                        }, //Existence of national and/or sub-national standards on interprofessional education in accreditation standards for Medical Doctors
                        {
                            deuid: "Qj97xn0ejxd",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "AF21"
                        }, //Existence of national and/or sub-national standards on interprofessional education in accreditation standards for General Medical Practitioners
                        {
                            deuid: "Qj97xn0ejxd",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "AG21"
                        }, //Existence of national and/or sub-national standards on interprofessional education in accreditation standards for Specialist Medical Practitioners
                        {
                            deuid: "Qj97xn0ejxd",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "AH21"
                        }, //Existence of national and/or sub-national standards on interprofessional education in accreditation standards for Nursing Professionals
                        {
                            deuid: "Qj97xn0ejxd",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "AI21"
                        }, //Existence of national and/or sub-national standards on interprofessional education in accreditation standards for Midwifery Professionals
                        {
                            deuid: "Qj97xn0ejxd",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "AJ21"
                        }, //Existence of national and/or sub-national standards on interprofessional education in accreditation standards for Dentists
                        {
                            deuid: "Qj97xn0ejxd",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "AK21"
                        }, //Existence of national and/or sub-national standards on interprofessional education in accreditation standards for Pharmacists
                        {
                            deuid: "j4pHY4ToKPi",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "AE24"
                        }, //Existence of cooperation between education and training institutions and health professional regulators to agree on the standards for Medical Doctors
                        {
                            deuid: "j4pHY4ToKPi",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "AF24"
                        }, //Existence of cooperation between education and training institutions and health professional regulators to agree on the standards for General Medical Practitioners
                        {
                            deuid: "j4pHY4ToKPi",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "AG24"
                        }, //Existence of cooperation between education and training institutions and health professional regulators to agree on the standards for Specialist Medical Practitioners
                        {
                            deuid: "j4pHY4ToKPi",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "AH24"
                        }, //Existence of cooperation between education and training institutions and health professional regulators to agree on the standards for Nursing Professionals
                        {
                            deuid: "j4pHY4ToKPi",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "AI24"
                        }, //Existence of cooperation between education and training institutions and health professional regulators to agree on the standards for Midwifery Professionals
                        {
                            deuid: "j4pHY4ToKPi",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "AJ24"
                        }, //Existence of cooperation between education and training institutions and health professional regulators to agree on the standards for Dentists
                        {
                            deuid: "j4pHY4ToKPi",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "AK24"
                        }, //Existence of cooperation between education and training institutions and health professional regulators to agree on the standards for Pharmacists
                        {
                            deuid: "VCZsq4EzHM1",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "AE27"
                        }, //Existence of national and/or subnational mechanism on continuing professional development for Medical Doctors
                        {
                            deuid: "VCZsq4EzHM1",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "AF27"
                        }, //Existence of national and/or subnational mechanism on continuing professional development for General Medical Practitioners
                        {
                            deuid: "VCZsq4EzHM1",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "AG27"
                        }, //Existence of national and/or subnational mechanism on continuing professional development for Specialist Medical Practitioners
                        {
                            deuid: "VCZsq4EzHM1",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "AH27"
                        }, //Existence of national and/or subnational mechanism on continuing professional development for Nursing Professionals
                        {
                            deuid: "VCZsq4EzHM1",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "AI27"
                        }, //Existence of national and/or subnational mechanism on continuing professional development for Midwifery Professionals
                        {
                            deuid: "VCZsq4EzHM1",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "AJ27"
                        }, //Existence of national and/or subnational mechanism on continuing professional development for Dentists
                        {
                            deuid: "VCZsq4EzHM1",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "AK27"
                        }, //Existence of national and/or subnational mechanism on continuing professional development for Pharmacists
                        {
                            deuid: "m8xYEbXD3Ee",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "AE28"
                        }, //Existence of in-service training as an element of national education plans for health workers for Medical Doctors
                        {
                            deuid: "m8xYEbXD3Ee",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "AF28"
                        }, //Existence of in-service training as an element of national education plans for health workers for General Medical Practitioners
                        {
                            deuid: "m8xYEbXD3Ee",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "AG28"
                        }, //Existence of in-service training as an element of national education plans for health workers for Specialist Medical Practitioners
                        {
                            deuid: "m8xYEbXD3Ee",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "AH28"
                        }, //Existence of in-service training as an element of national education plans for health workers for Nursing Professionals
                        {
                            deuid: "m8xYEbXD3Ee",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "AI28"
                        }, //Existence of in-service training as an element of national education plans for health workers for Midwifery Professionals
                        {
                            deuid: "m8xYEbXD3Ee",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "AJ28"
                        }, //Existence of in-service training as an element of national education plans for health workers for Dentists
                        {
                            deuid: "m8xYEbXD3Ee",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "AK28"
                        } //Existence of in-service training as an element of national education plans for health workers for Pharmacists
                    ]
                },
                {
                    sheet_type: "AGGREGATE_STATIC_YES_ONLY",
                    sheet_no: 2, //Source Type sheet
                    orgUnitIdScheme: "UID",
                    dataElementIdScheme: "UID",
                    idScheme: "UID",
                    oucode_cell: "P2",
                    year_cell: "I4",
                    last_data_column: "R",

                    agg_des: [
                        {
                            deuid: "GHRcigiFyO0",
                            cocuid: "dYLYgidzGd0",
                            cell_no: "P8"
                        }, //Ministry of Education source type for Medical Doctors
                        {
                            deuid: "GHRcigiFyO0",
                            cocuid: "ukju4pkJeXV",
                            cell_no: "Q8"
                        }, //Ministry of Finance source type for Medical Doctors
                        {
                            deuid: "uwBMy7jAOzr",
                            cocuid: "dYLYgidzGd0",
                            cell_no: "P9"
                        }, //Ministry of Education source type for General Medical Practitioner
                        {
                            deuid: "uwBMy7jAOzr",
                            cocuid: "ukju4pkJeXV",
                            cell_no: "Q9"
                        }, //Ministry of Finance source type for General Medical Practitioner
                        {
                            deuid: "lvkcxdk6ewE",
                            cocuid: "dYLYgidzGd0",
                            cell_no: "P10"
                        }, //Ministry of Education source type for Specialist Medical Practitioner
                        {
                            deuid: "lvkcxdk6ewE",
                            cocuid: "ukju4pkJeXV",
                            cell_no: "Q10"
                        }, //Ministry of Finance source type for Specialist Medical Practitioner
                        {
                            deuid: "Tu7mmoVDSFh",
                            cocuid: "dYLYgidzGd0",
                            cell_no: "P11"
                        }, //Ministry of Education source type for Nursing Professional
                        {
                            deuid: "Tu7mmoVDSFh",
                            cocuid: "ukju4pkJeXV",
                            cell_no: "Q11"
                        }, //Ministry of Finance source type for Nursing Professional
                        {
                            deuid: "baxzJnblwIA",
                            cocuid: "dYLYgidzGd0",
                            cell_no: "P12"
                        }, //Ministry of Education source type for Midwifery Professional
                        {
                            deuid: "baxzJnblwIA",
                            cocuid: "ukju4pkJeXV",
                            cell_no: "Q12"
                        }, //Ministry of Finance source type for Midwifery Professional
                        {
                            deuid: "vERGKxg4ky5",
                            cocuid: "dYLYgidzGd0",
                            cell_no: "P13"
                        }, //Ministry of Education source type for Dentist
                        {
                            deuid: "vERGKxg4ky5",
                            cocuid: "ukju4pkJeXV",
                            cell_no: "Q13"
                        }, //Ministry of Finance source type for Dentist
                        {
                            deuid: "ZeF4Zhl5iSz",
                            cocuid: "dYLYgidzGd0",
                            cell_no: "P14"
                        }, //Ministry of Education source type for Pharmacist
                        {
                            deuid: "ZeF4Zhl5iSz",
                            cocuid: "ukju4pkJeXV",
                            cell_no: "Q14"
                        } //Ministry of Finance source type for Pharmacist
                    ]
                }
            ]
        },
        {
            name: "Module 4 Template",
            file: "Module_4_Template.xlsx",
            sheets: [
                {
                    sheet_type: "AGGREGATE_STATIC",
                    sheet_no: 1, //Finance sheet
                    orgUnitIdScheme: "UID",
                    dataElementIdScheme: "UID",
                    idScheme: "UID",
                    oucode_cell: "V2",
                    year_cell: "I4",
                    last_data_column: "W",

                    agg_des: [
                        {
                            deuid: "Ybz3qUCWYKC",
                            cocuid: "Xr12mI7VPn3",
                            cell_no: "V8"
                        }, // Existence of national health workforce strategies and national institutional financing reforms that identify and commit adequate budgetary resources for transformative education
                        {
                            deuid: "T6CoTrwDx30",
                            cocuid: "uOlPsNyXvty",
                            cell_no: "D12"
                        }, //Total expenditure on health workforce education by education type uOlPsNyXvty
                        {
                            deuid: "T6CoTrwDx30",
                            cocuid: "jjQ3g4UJ88h",
                            cell_no: "E12"
                        }, //Total expenditure on health workforce education by education type jjQ3g4UJ88h
                        {
                            deuid: "KzzMv68cifG",
                            cocuid: "HQPWV8cT7li",
                            cell_no: "D16"
                        }, // Total expenditure on higher education (including for non-health sectors) Public
                        {
                            deuid: "KzzMv68cifG",
                            cocuid: "FiRcnmXF1Yg",
                            cell_no: "E16"
                        }, // Total expenditure on higher education (including for non-health sectors) Out of Pockets
                        {
                            deuid: "KzzMv68cifG",
                            cocuid: "QKhM7ublqzd",
                            cell_no: "F16"
                        }, // Total expenditure on higher education (including for non-health sectors) ODA
                        {
                            deuid: "KzzMv68cifG",
                            cocuid: "txxKPnVUGvV",
                            cell_no: "G16"
                        }, // Total expenditure on higher education (including for non-health sectors) Others
                        {
                            deuid: "Z6Wd8wiIAfz",
                            cocuid: "HQPWV8cT7li",
                            cell_no: "D17"
                        }, //Total expenditure on health workforce education Public
                        {
                            deuid: "Z6Wd8wiIAfz",
                            cocuid: "FiRcnmXF1Yg",
                            cell_no: "E17"
                        }, //Total expenditure on health workforce education Out of Pockets
                        {
                            deuid: "Z6Wd8wiIAfz",
                            cocuid: "QKhM7ublqzd",
                            cell_no: "F17"
                        }, //Total expenditure on health workforce education ODA
                        {
                            deuid: "Z6Wd8wiIAfz",
                            cocuid: "txxKPnVUGvV",
                            cell_no: "G17"
                        }, //Total expenditure on health workforce education Others
                        {
                            deuid: "hUqp2FZFNGA",
                            cocuid: "HQPWV8cT7li",
                            cell_no: "D18"
                        }, // Total expenditure on continuing professional development Public
                        {
                            deuid: "hUqp2FZFNGA",
                            cocuid: "FiRcnmXF1Yg",
                            cell_no: "E18"
                        }, // Total expenditure on continuing professional development Out of Pockets
                        {
                            deuid: "hUqp2FZFNGA",
                            cocuid: "QKhM7ublqzd",
                            cell_no: "F18"
                        }, // Total expenditure on continuing professional development ODA
                        {
                            deuid: "hUqp2FZFNGA",
                            cocuid: "txxKPnVUGvV",
                            cell_no: "G18"
                        }, // Total expenditure on continuing professional development Others
                        {
                            deuid: "VGwyxy87JTn",
                            cocuid: "qJgX0mO3ph7",
                            cell_no: "D22"
                        }, //Cost per graduate in medical specialist education programmes qJgX0mO3ph7
                        {
                            deuid: "VGwyxy87JTn",
                            cocuid: "ABubevCpjCV",
                            cell_no: "E22"
                        }, //Cost per graduate in medical specialist education programmes ABubevCpjCV
                        {
                            deuid: "VGwyxy87JTn",
                            cocuid: "wNJfYD50ZVE",
                            cell_no: "F22"
                        }, //Cost per graduate in medical specialist education programmes wNJfYD50ZVE
                        {
                            deuid: "VGwyxy87JTn",
                            cocuid: "ByPnGTyTmYa",
                            cell_no: "G22"
                        }, //Cost per graduate in medical specialist education programmes ByPnGTyTmYa
                        {
                            deuid: "VGwyxy87JTn",
                            cocuid: "wJfQhJWdeLX",
                            cell_no: "H22"
                        }, //Cost per graduate in medical specialist education programmes wJfQhJWdeLX
                        {
                            deuid: "VGwyxy87JTn",
                            cocuid: "EfAbB5kdjLD",
                            cell_no: "I22"
                        } //Cost per graduate in medical specialist education programmes EfAbB5kdjLD
                    ]
                },
                {
                    sheet_type: "AGGREGATE_STATIC",
                    sheet_no: 2, //Education Costs sheet
                    orgUnitIdScheme: "UID",
                    dataElementIdScheme: "UID",
                    idScheme: "UID",
                    oucode_cell: "N2",
                    year_cell: "I4",
                    last_data_column: "O",

                    agg_des: [
                        {
                            deuid: "FQpontg7YBJ",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "D9"
                        }, //Public Expenditure on HWF education for Medical Doctors
                        {
                            deuid: "tsRGEPI6G9W",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "E9"
                        }, //Private Expenditure on HWF education for Medical Doctors
                        {
                            deuid: "FM20fzfsNov",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "F9"
                        }, //Recurrent costs of qualified educators for Medical Doctors
                        {
                            deuid: "EI6IOp5v4dR",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "G9"
                        }, //Tuition Fee per Student enrolled for Medical Doctors
                        {
                            deuid: "FQpontg7YBJ",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "D10"
                        }, //Public Expenditure on HWF education for General Medical Practitioners
                        {
                            deuid: "tsRGEPI6G9W",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "E10"
                        }, //Private Expenditure on HWF education for General Medical Practitioners
                        {
                            deuid: "FM20fzfsNov",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "F10"
                        }, //Recurrent costs of qualified educators for General Medical Practitioners
                        {
                            deuid: "EI6IOp5v4dR",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "G10"
                        }, //Tuition Fee per Student enrolled for General Medical Practitioners
                        {
                            deuid: "FQpontg7YBJ",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "D11"
                        }, //Public Expenditure on HWF education for Specialist Medical Practitioners
                        {
                            deuid: "tsRGEPI6G9W",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "E11"
                        }, //Private Expenditure on HWF education for Specialist Medical Practitioners
                        {
                            deuid: "FM20fzfsNov",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "F11"
                        }, //Recurrent costs of qualified educators for Specialist Medical Practitioners
                        {
                            deuid: "EI6IOp5v4dR",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "G11"
                        }, //Tuition Fee per Student enrolled for Specialist Medical Practitioners
                        {
                            deuid: "FQpontg7YBJ",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "D12"
                        }, //Public Expenditure on HWF education for Nursing Professionals
                        {
                            deuid: "tsRGEPI6G9W",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "E12"
                        }, //Private Expenditure on HWF education for Nursing Professionals
                        {
                            deuid: "FM20fzfsNov",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "F12"
                        }, //Recurrent costs of qualified educators for Nursing Professionals
                        {
                            deuid: "EI6IOp5v4dR",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "G12"
                        }, //Tuition Fee per Student enrolled for Nursing Professionals
                        {
                            deuid: "FQpontg7YBJ",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "D13"
                        }, //Public Expenditure on HWF education for Midwifery Professionals
                        {
                            deuid: "tsRGEPI6G9W",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "E13"
                        }, //Private Expenditure on HWF education for Midwifery Professionals
                        {
                            deuid: "FM20fzfsNov",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "F13"
                        }, //Recurrent costs of qualified educators for Midwifery Professionals
                        {
                            deuid: "EI6IOp5v4dR",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "G13"
                        }, //Tuition Fee per Student enrolled for Midwifery Professionals
                        {
                            deuid: "FQpontg7YBJ",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "D14"
                        }, //Public Expenditure on HWF education for Dentists
                        {
                            deuid: "tsRGEPI6G9W",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "E14"
                        }, //Private Expenditure on HWF education for Dentists
                        {
                            deuid: "FM20fzfsNov",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "F14"
                        }, //Recurrent costs of qualified educators for Dentists
                        {
                            deuid: "EI6IOp5v4dR",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "G14"
                        }, //Tuition Fee per Student enrolled for Dentists
                        {
                            deuid: "FQpontg7YBJ",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "D15"
                        }, //Public Expenditure on HWF education for Pharmacists
                        {
                            deuid: "tsRGEPI6G9W",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "E15"
                        }, //Private Expenditure on HWF education for Pharmacists
                        {
                            deuid: "FM20fzfsNov",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "F15"
                        }, //Recurrent costs of qualified educators for Pharmacists
                        {
                            deuid: "EI6IOp5v4dR",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "G15"
                        } //Tuition Fee per Student enrolled for Pharmacists
                    ]
                },
                {
                    sheet_type: "AGGREGATE_STATIC_YES_ONLY",
                    sheet_no: 3, //Source Type sheet
                    orgUnitIdScheme: "UID",
                    dataElementIdScheme: "UID",
                    idScheme: "UID",
                    oucode_cell: "P2",
                    year_cell: "I4",
                    last_data_column: "R",

                    agg_des: [
                        {
                            deuid: "GHRcigiFyO0",
                            cocuid: "dYLYgidzGd0",
                            cell_no: "P8"
                        }, //Ministry of Education source type for Medical Doctors
                        {
                            deuid: "uwBMy7jAOzr",
                            cocuid: "dYLYgidzGd0",
                            cell_no: "P9"
                        }, //Ministry of Education source type for General Medical Practitioner
                        {
                            deuid: "lvkcxdk6ewE",
                            cocuid: "dYLYgidzGd0",
                            cell_no: "P10"
                        }, //Ministry of Education source type for Specialist Medical Practitioner
                        {
                            deuid: "Tu7mmoVDSFh",
                            cocuid: "dYLYgidzGd0",
                            cell_no: "P11"
                        }, //Ministry of Education source type for Nursing Professional
                        {
                            deuid: "baxzJnblwIA",
                            cocuid: "dYLYgidzGd0",
                            cell_no: "P12"
                        }, //Ministry of Education source type for Midwifery Professional
                        {
                            deuid: "vERGKxg4ky5",
                            cocuid: "dYLYgidzGd0",
                            cell_no: "P13"
                        }, //Ministry of Education source type for Dentist
                        {
                            deuid: "ZeF4Zhl5iSz",
                            cocuid: "dYLYgidzGd0",
                            cell_no: "P14"
                        } //Ministry of Education source type for Pharmacist
                    ]
                }
            ]
        },
        {
            name: "Module 5 Template",
            file: "Module_5_Template.xlsx",
            sheets: [
                {
                    sheet_type: "AGGREGATE_STATIC",
                    sheet_no: 1, //Market Labour Entry sheet
                    orgUnitIdScheme: "UID",
                    dataElementIdScheme: "UID",
                    idScheme: "UID",
                    oucode_cell: "V2",
                    year_cell: "I4",
                    last_data_column: "I",

                    agg_des: [
                        {
                            deuid: "qNRERx0Icjw",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "D9"
                        }, //Started practicing within one year of graduation for Medical Doctors
                        {
                            deuid: "DwYaOZuilM8",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "E9"
                        }, //Total  newly  active domestic trained HWF for Medical Doctors
                        {
                            deuid: "gvkPV8aqP39",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "F9"
                        }, //Male newly active domestic trained HWF for Medical Doctors
                        {
                            deuid: "sF1LtVEqk6Y",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "G9"
                        }, //Female newly active domestic trained active HWF for Medical Doctors
                        {
                            deuid: "h1S7GCkmvVn",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "H9"
                        }, //Total newly active foreign trained employed for Medical Doctors
                        {
                            deuid: "qNRERx0Icjw",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "D10"
                        }, //Started practicing within one year of graduation for General Medical Practitioners
                        {
                            deuid: "DwYaOZuilM8",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "E10"
                        }, //Total  newly  active domestic trained HWF for General Medical Practitioners
                        {
                            deuid: "gvkPV8aqP39",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "F10"
                        }, //Male newly active domestic trained HWF for General Medical Practitioners
                        {
                            deuid: "sF1LtVEqk6Y",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "G10"
                        }, //Female newly active domestic trained active HWF for General Medical Practitioners
                        {
                            deuid: "h1S7GCkmvVn",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "H10"
                        }, //Total newly active foreign trained employed for General Medical Practitioners
                        {
                            deuid: "qNRERx0Icjw",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "D11"
                        }, //Started practicing within one year of graduation for Specialist Medical Practitioners
                        {
                            deuid: "DwYaOZuilM8",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "E11"
                        }, //Total  newly  active domestic trained HWF for Specialist Medical Practitioners
                        {
                            deuid: "gvkPV8aqP39",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "F11"
                        }, //Male newly active domestic trained HWF for Specialist Medical Practitioners
                        {
                            deuid: "sF1LtVEqk6Y",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "G11"
                        }, //Female newly active domestic trained active HWF for Specialist Medical Practitioners
                        {
                            deuid: "h1S7GCkmvVn",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "H11"
                        }, //Total newly active foreign trained employed for Specialist Medical Practitioners
                        {
                            deuid: "qNRERx0Icjw",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "D12"
                        }, //Started practicing within one year of graduation for Nursing Professionals
                        {
                            deuid: "DwYaOZuilM8",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "E12"
                        }, //Total  newly  active domestic trained HWF for Nursing Professionals
                        {
                            deuid: "gvkPV8aqP39",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "F12"
                        }, //Male newly active domestic trained HWF for Nursing Professionals
                        {
                            deuid: "sF1LtVEqk6Y",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "G12"
                        }, //Female newly active domestic trained active HWF for Nursing Professionals
                        {
                            deuid: "h1S7GCkmvVn",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "H12"
                        }, //Total newly active foreign trained employed for Nursing Professionals
                        {
                            deuid: "qNRERx0Icjw",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "D13"
                        }, //Started practicing within one year of graduation for Midwifery Professionals
                        {
                            deuid: "DwYaOZuilM8",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "E13"
                        }, //Total  newly  active domestic trained HWF for Midwifery Professionals
                        {
                            deuid: "gvkPV8aqP39",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "F13"
                        }, //Male newly active domestic trained HWF for Midwifery Professionals
                        {
                            deuid: "sF1LtVEqk6Y",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "G13"
                        }, //Female newly active domestic trained active HWF for Midwifery Professionals
                        {
                            deuid: "h1S7GCkmvVn",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "H13"
                        }, //Total newly active foreign trained employed for Midwifery Professionals
                        {
                            deuid: "qNRERx0Icjw",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "D14"
                        }, //Started practicing within one year of graduation for Dentists
                        {
                            deuid: "DwYaOZuilM8",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "E14"
                        }, //Total  newly  active domestic trained HWF for Dentists
                        {
                            deuid: "gvkPV8aqP39",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "F14"
                        }, //Male newly active domestic trained HWF for Dentists
                        {
                            deuid: "sF1LtVEqk6Y",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "G14"
                        }, //Female newly active domestic trained active HWF for Dentists
                        {
                            deuid: "h1S7GCkmvVn",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "H14"
                        }, //Total newly active foreign trained employed for Dentists
                        {
                            deuid: "qNRERx0Icjw",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "D15"
                        }, //Started practicing within one year of graduation for Pharmacists
                        {
                            deuid: "DwYaOZuilM8",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "E15"
                        }, //Total  newly  active domestic trained HWF for Pharmacists
                        {
                            deuid: "gvkPV8aqP39",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "F15"
                        }, //Male newly active domestic trained HWF for Pharmacists
                        {
                            deuid: "sF1LtVEqk6Y",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "G15"
                        }, //Female newly active domestic trained active HWF for Pharmacists
                        {
                            deuid: "h1S7GCkmvVn",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "H15"
                        } //Total newly active foreign trained employed for Pharmacists
                    ]
                },
                {
                    sheet_type: "AGGREGATE_STATIC",
                    sheet_no: 2, //Market Labour Exit sheet
                    orgUnitIdScheme: "UID",
                    dataElementIdScheme: "UID",
                    idScheme: "UID",
                    oucode_cell: "N2",
                    year_cell: "I4",
                    last_data_column: "O",

                    agg_des: [
                        {
                            deuid: "sdNHn8qmokO",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "D9"
                        }, //Currently unemployed for Medical Doctors
                        {
                            deuid: "aeGGK8bRvmr",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "E9"
                        }, //Vacancy rate (%) for Medical Doctors
                        {
                            deuid: "BOPZbzxOfSA",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "F9"
                        }, //Voluntary exits for Medical Doctors
                        {
                            deuid: "NNQYgAf2Cj8",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "G9"
                        }, //Involuntary exits for Medical Doctors
                        {
                            deuid: "sdNHn8qmokO",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "D10"
                        }, //Currently unemployed for General Medical Practitioners
                        {
                            deuid: "aeGGK8bRvmr",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "E10"
                        }, //Vacancy rate (%) for General Medical Practitioners
                        {
                            deuid: "BOPZbzxOfSA",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "F10"
                        }, //Voluntary exits for General Medical Practitioners
                        {
                            deuid: "NNQYgAf2Cj8",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "G10"
                        }, //Involuntary exits for General Medical Practitioners
                        {
                            deuid: "sdNHn8qmokO",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "D11"
                        }, //Currently unemployed for Specialist Medical Practitioners
                        {
                            deuid: "aeGGK8bRvmr",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "E11"
                        }, //Vacancy rate (%) for Specialist Medical Practitioners
                        {
                            deuid: "BOPZbzxOfSA",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "F11"
                        }, //Voluntary exits for Specialist Medical Practitioners
                        {
                            deuid: "NNQYgAf2Cj8",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "G11"
                        }, //Involuntary exits for Specialist Medical Practitioners
                        {
                            deuid: "sdNHn8qmokO",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "D12"
                        }, //Currently unemployed for Nursing Professionals
                        {
                            deuid: "aeGGK8bRvmr",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "E12"
                        }, //Vacancy rate (%) for Nursing Professionals
                        {
                            deuid: "BOPZbzxOfSA",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "F12"
                        }, //Voluntary exits for Nursing Professionals
                        {
                            deuid: "NNQYgAf2Cj8",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "G12"
                        }, //Involuntary exits for Nursing Professionals
                        {
                            deuid: "sdNHn8qmokO",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "D13"
                        }, //Currently unemployed for Midwifery Professionals
                        {
                            deuid: "aeGGK8bRvmr",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "E13"
                        }, //Vacancy rate (%) for Midwifery Professionals
                        {
                            deuid: "BOPZbzxOfSA",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "F13"
                        }, //Voluntary exits for Midwifery Professionals
                        {
                            deuid: "NNQYgAf2Cj8",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "G13"
                        }, //Involuntary exits for Midwifery Professionals
                        {
                            deuid: "sdNHn8qmokO",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "D14"
                        }, //Currently unemployed for Dentists
                        {
                            deuid: "aeGGK8bRvmr",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "E14"
                        }, //Vacancy rate (%) for Dentists
                        {
                            deuid: "BOPZbzxOfSA",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "F14"
                        }, //Voluntary exits for Dentists
                        {
                            deuid: "NNQYgAf2Cj8",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "G14"
                        }, //Involuntary exits for Dentists
                        {
                            deuid: "sdNHn8qmokO",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "D15"
                        }, //Currently unemployed for Pharmacists
                        {
                            deuid: "aeGGK8bRvmr",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "E15"
                        }, //Vacancy rate (%) for Pharmacists
                        {
                            deuid: "BOPZbzxOfSA",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "F15"
                        }, //Voluntary exits for Pharmacists
                        {
                            deuid: "NNQYgAf2Cj8",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "G15"
                        } //Involuntary exits for Pharmacists
                    ]
                }
            ]
        }, // Add new Module
        {
            name: "Module 6 Template",
            file: "Module_6_Template.xlsx",
            sheets: [
                {
                    sheet_type: "AGGREGATE_STATIC",
                    sheet_no: 1, //Characteristics sheet
                    orgUnitIdScheme: "UID",
                    dataElementIdScheme: "UID",
                    idScheme: "UID",
                    oucode_cell: "V2",
                    year_cell: "I4",
                    last_data_column: "I",

                    agg_des: [
                        {
                            deuid: "iM5NIZBqAUL",
                            cocuid: "Xr12mI7VPn3",
                            cell_no: "D8"
                        }, //Standard working hours as per the national law
                        {
                            deuid: "GeY6o2BMvp1",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "D13"
                        }, //Standard Working Hours in a week for Medical Doctors
                        {
                            deuid: "C8MvR5CNwpG",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "E13"
                        }, //HWF with Part Time Contract for Medical Doctors
                        {
                            deuid: "N6VNhZ2PCG7",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "F13"
                        }, //Self employed workers for Medical Doctors
                        {
                            deuid: "GeY6o2BMvp1",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "D14"
                        }, //Standard Working Hours in a week for General Medical Practitioners
                        {
                            deuid: "C8MvR5CNwpG",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "E14"
                        }, //HWF with Part Time Contract for General Medical Practitioners
                        {
                            deuid: "N6VNhZ2PCG7",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "F14"
                        }, //Self employed workers for General Medical Practitioners
                        {
                            deuid: "GeY6o2BMvp1",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "D15"
                        }, //Standard Working Hours in a week for Specialist Medical Practitioners
                        {
                            deuid: "C8MvR5CNwpG",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "E15"
                        }, //HWF with Part Time Contract for Specialist Medical Practitioners
                        {
                            deuid: "N6VNhZ2PCG7",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "F15"
                        }, //Self employed workers for Specialist Medical Practitioners
                        {
                            deuid: "GeY6o2BMvp1",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "D16"
                        }, //Standard Working Hours in a week for Nursing Professionals
                        {
                            deuid: "C8MvR5CNwpG",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "E16"
                        }, //HWF with Part Time Contract for Nursing Professionals
                        {
                            deuid: "N6VNhZ2PCG7",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "F16"
                        }, //Self employed workers for Nursing Professionals
                        {
                            deuid: "GeY6o2BMvp1",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "D17"
                        }, //Standard Working Hours in a week for Midwifery Professionals
                        {
                            deuid: "C8MvR5CNwpG",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "E17"
                        }, //HWF with Part Time Contract for Midwifery Professionals
                        {
                            deuid: "N6VNhZ2PCG7",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "F17"
                        }, //Self employed workers for Midwifery Professionals
                        {
                            deuid: "GeY6o2BMvp1",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "D18"
                        }, //Standard Working Hours in a week for Dentists
                        {
                            deuid: "C8MvR5CNwpG",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "E18"
                        }, //HWF with Part Time Contract for Dentists
                        {
                            deuid: "N6VNhZ2PCG7",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "F18"
                        }, //Self employed workers for Dentists
                        {
                            deuid: "GeY6o2BMvp1",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "D19"
                        }, //Standard Working Hours in a week for Pharmacists
                        {
                            deuid: "C8MvR5CNwpG",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "E19"
                        }, //HWF with Part Time Contract for Pharmacists
                        {
                            deuid: "N6VNhZ2PCG7",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "F19"
                        } //Self employed workers for Pharmacists
                    ]
                },
                {
                    sheet_type: "AGGREGATE_STATIC",
                    sheet_no: 2, //Conditions sheet
                    orgUnitIdScheme: "UID",
                    dataElementIdScheme: "UID",
                    idScheme: "UID",
                    oucode_cell: "N2",
                    year_cell: "I4",
                    last_data_column: "Q",

                    agg_des: [
                        {
                            deuid: "LUVRqQq2NLE",
                            cocuid: "Xr12mI7VPn3",
                            cell_no: "O9"
                        }, //Currently unemployed for Existence of national/sub-national policies/laws for prevention of attacks on health workers
                        {
                            deuid: "Ii26DODuUbB",
                            cocuid: "Xr12mI7VPn3",
                            cell_no: "O10"
                        }, //Currently unemployed for Existence of national/subnational policies for regulating compulsory service
                        {
                            deuid: "cV7DhKFPk3R",
                            cocuid: "Xr12mI7VPn3",
                            cell_no: "O11"
                        }, //Currently unemployed for Existence of national/sub-national policies/laws regulating dual practice
                        {
                            deuid: "qqVKuhK0RgY",
                            cocuid: "Xr12mI7VPn3",
                            cell_no: "D12"
                        } //Currently unemployed for Number of violent attacks on health workers
                    ]
                },
                {
                    sheet_type: "AGGREGATE_STATIC",
                    sheet_no: 3, //Regulation sheet
                    orgUnitIdScheme: "UID",
                    dataElementIdScheme: "UID",
                    idScheme: "UID",
                    oucode_cell: "N2",
                    year_cell: "I4",
                    last_data_column: "I",

                    agg_des: [
                        {
                            deuid: "LYjT01KiTTw",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "O9"
                        }, //Existence of national law on regulating Working hours and conditions for Medical Doctors
                        {
                            deuid: "LYjT01KiTTw",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "O10"
                        }, //Existence of national law on regulating Working hours and conditions for General Medical Practitioners
                        {
                            deuid: "LYjT01KiTTw",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "O11"
                        }, //Existence of national law on regulating Working hours and conditions for Specialist Medical Practitioners
                        {
                            deuid: "LYjT01KiTTw",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "O12"
                        }, //Existence of national law on regulating Working hours and conditions for Nursing Professionals
                        {
                            deuid: "LYjT01KiTTw",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "O13"
                        }, //Existence of national law on regulating Working hours and conditions for Midwifery Professionals
                        {
                            deuid: "LYjT01KiTTw",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "O14"
                        }, //Existence of national law on regulating Working hours and conditions for Dentists
                        {
                            deuid: "LYjT01KiTTw",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "O15"
                        }, //Existence of national law on regulating Working hours and conditions for Pharmacists
                        {
                            deuid: "di91e0qZijs",
                            cocuid: "Xr12mI7VPn3",
                            cell_no: "O20"
                        }, //Existence of national law on regulating Working hours and conditions for Dentists
                        {
                            deuid: "lvs1RCQOOp4",
                            cocuid: "Xr12mI7VPn3",
                            cell_no: "O21"
                        } //Existence of national law on regulating Working hours and conditions for Pharmacists
                    ]
                }
            ]
        }, // Add new Module
        {
            name: "Module 7 Template",
            file: "Module_7_Template.xlsx",
            sheets: [
                {
                    sheet_type: "AGGREGATE_STATIC",
                    sheet_no: 1, //Expenditure sheet
                    orgUnitIdScheme: "UID",
                    dataElementIdScheme: "UID",
                    idScheme: "UID",
                    oucode_cell: "V2",
                    year_cell: "I4",
                    last_data_column: "I",

                    agg_des: [
                        {
                            deuid: "gNDFctqpNyv",
                            cocuid: "Xr12mI7VPn3",
                            cell_no: "D8"
                        }, //Total expenditure on health workforce
                        {
                            deuid: "Wgfv9IaDiWM",
                            cocuid: "Xr12mI7VPn3",
                            cell_no: "D9"
                        }, //Incoming financial support received from official development assistance allocated to health workforce
                        {
                            deuid: "xWfKWoc4ggg",
                            cocuid: "cFkpPfqFrJW",
                            cell_no: "D13"
                        }, //Public expenditure on health workforce cFkpPfqFrJW
                        {
                            deuid: "xWfKWoc4ggg",
                            cocuid: "TQ5H1Za7ZMR",
                            cell_no: "E13"
                        }, //Public expenditure on health workforce TQ5H1Za7ZMR
                        {
                            deuid: "xWfKWoc4ggg",
                            cocuid: "dVpd180cEmo",
                            cell_no: "F13"
                        }, //Public expenditure on health workforce dVpd180cEmo
                        {
                            deuid: "CvaGFNVhuQl",
                            cocuid: "HQPWV8cT7li",
                            cell_no: "D17"
                        }, //Total expenditure on compensation of employees Government
                        {
                            deuid: "CvaGFNVhuQl",
                            cocuid: "FiRcnmXF1Yg",
                            cell_no: "E17"
                        }, //Total expenditure on compensation of employees Voluntary
                        {
                            deuid: "CvaGFNVhuQl",
                            cocuid: "QKhM7ublqzd",
                            cell_no: "F17"
                        }, //Total expenditure on compensation of employees Household
                        {
                            deuid: "CvaGFNVhuQl",
                            cocuid: "txxKPnVUGvV",
                            cell_no: "G17"
                        }, //Total expenditure on compensation of employees Others
                        {
                            deuid: "l5RPrypr3Wg",
                            cocuid: "LfoJLP7BbDk",
                            cell_no: "D21"
                        }, //Public expenditure on compensation of employees Wages and Salary
                        {
                            deuid: "l5RPrypr3Wg",
                            cocuid: "hL8lKfXNzln",
                            cell_no: "E21"
                        }, //Public expenditure on compensation of employees Social Contribution
                        {
                            deuid: "l5RPrypr3Wg",
                            cocuid: "VWIQFya88eZ",
                            cell_no: "F21"
                        } //Public expenditure on compensation of employees Others
                    ]
                },
                {
                    sheet_type: "AGGREGATE_STATIC",
                    sheet_no: 2, //Wages sheet
                    orgUnitIdScheme: "UID",
                    dataElementIdScheme: "UID",
                    idScheme: "UID",
                    oucode_cell: "N2",
                    year_cell: "I4",
                    last_data_column: "I",

                    agg_des: [
                        {
                            deuid: "FVANVRToxVF",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "D9"
                        }, //Average of Entry-level wages and salaries excluding Social Contributions for Medical Doctors
                        {
                            deuid: "oTcSBrUk1hs",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "E9"
                        }, //Median earning-men for Medical Doctors
                        {
                            deuid: "kOWad32u5xr",
                            cocuid: "aBpbcEgtzgw",
                            cell_no: "F9"
                        }, //Median earning -women for Medical Doctors
                        {
                            deuid: "FVANVRToxVF",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "D10"
                        }, //Average of Entry-level wages and salaries excluding Social Contributions for General Medical Practitioners
                        {
                            deuid: "oTcSBrUk1hs",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "E10"
                        }, //Median earning-men for General Medical Practitioners
                        {
                            deuid: "kOWad32u5xr",
                            cocuid: "LHbCtHlZr3Y",
                            cell_no: "F10"
                        }, //Median earning -women for General Medical Practitioners
                        {
                            deuid: "FVANVRToxVF",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "D11"
                        }, //Average of Entry-level wages and salaries excluding Social Contributions for Specialist Medical Practitioners
                        {
                            deuid: "oTcSBrUk1hs",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "E11"
                        }, //Median earning-men for Specialist Medical Practitioners
                        {
                            deuid: "kOWad32u5xr",
                            cocuid: "VtVkbvygJnm",
                            cell_no: "F11"
                        }, //Median earning -women for Specialist Medical Practitioners
                        {
                            deuid: "FVANVRToxVF",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "D12"
                        }, //Average of Entry-level wages and salaries excluding Social Contributions for Nursing Professionals
                        {
                            deuid: "oTcSBrUk1hs",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "E12"
                        }, //Median earning-men for Nursing Professionals
                        {
                            deuid: "kOWad32u5xr",
                            cocuid: "fGOgbIqsxDn",
                            cell_no: "F12"
                        }, //Median earning -women for Nursing Professionals
                        {
                            deuid: "FVANVRToxVF",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "D13"
                        }, //Average of Entry-level wages and salaries excluding Social Contributions for Midwifery Professionals
                        {
                            deuid: "oTcSBrUk1hs",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "E13"
                        }, //Median earning-men for Midwifery Professionals
                        {
                            deuid: "kOWad32u5xr",
                            cocuid: "MPzyVWiSFF2",
                            cell_no: "F13"
                        }, //Median earning -women for Midwifery Professionals
                        {
                            deuid: "FVANVRToxVF",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "D14"
                        }, //Average of Entry-level wages and salaries excluding Social Contributions for Dentists
                        {
                            deuid: "oTcSBrUk1hs",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "E14"
                        }, //Median earning-men for Dentists
                        {
                            deuid: "kOWad32u5xr",
                            cocuid: "ALBRKpJsddQ",
                            cell_no: "F14"
                        }, //Median earning -women for Dentists
                        {
                            deuid: "FVANVRToxVF",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "D15"
                        }, //Average of Entry-level wages and salaries excluding Social Contributions for Pharmacists
                        {
                            deuid: "oTcSBrUk1hs",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "E15"
                        }, //Median earning-men for Pharmacists
                        {
                            deuid: "kOWad32u5xr",
                            cocuid: "iWRW6jXAzvP",
                            cell_no: "F15"
                        }, //Median earning -women for Pharmacists
                        {
                            deuid: "M7R7LVsXlAN",
                            cocuid: "Xr12mI7VPn3",
                            cell_no: "O19"
                        } //Existence of national/subnational policies or standards on public sector wage ceiling
                    ]
                }
            ]
        }, // Add new Module
        {
            name: "Module 8_10 Template",
            file: "Module_8_10_Template.xlsx",
            sheets: [
                {
                    sheet_type: "AGGREGATE_STATIC",
                    sheet_no: 1, //Skill Mix sheet
                    orgUnitIdScheme: "UID",
                    dataElementIdScheme: "UID",
                    idScheme: "UID",
                    oucode_cell: "V2",
                    year_cell: "I4",
                    last_data_column: "I",

                    agg_des: [
                        {
                            deuid: "tKr3k3lbnJJ",
                            cocuid: "Xr12mI7VPn3",
                            cell_no: "W8"
                        }, //Existence of advanced nursing roles
                        {
                            deuid: "EVairjAiRv6",
                            cocuid: "Xr12mI7VPn3",
                            cell_no: "W9"
                        }, //Availability of human resources to implement IHR
                        {
                            deuid: "u6F6nBWeomT",
                            cocuid: "Xr12mI7VPn3",
                            cell_no: "W10"
                        }, //Applied epidemiology training programme
                        {
                            deuid: "LW954y3FqL8",
                            cocuid: "Xr12mI7VPn3",
                            cell_no: "D11"
                        }, //Percentage of HWF at the primary health care level/facilities
                        {
                            deuid: "zozZbvSo4Bz",
                            cocuid: "Xr12mI7VPn3",
                            cell_no: "D12"
                        }, //Number of specialist surgical workers
                        {
                            deuid: "XEj0ILIlbWO",
                            cocuid: "Xr12mI7VPn3",
                            cell_no: "D13"
                        } // Number of family medecine practitioners
                    ]
                },
                {
                    sheet_type: "AGGREGATE_STATIC",
                    sheet_no: 2, //Governance sheet
                    orgUnitIdScheme: "UID",
                    dataElementIdScheme: "UID",
                    idScheme: "UID",
                    oucode_cell: "N2",
                    year_cell: "I4",
                    last_data_column: "I",

                    agg_des: [
                        {
                            deuid: "ROVoulCcT0j",
                            cocuid: "Xr12mI7VPn3",
                            cell_no: "O9"
                        }, //Existence of institutional mechanisms to coordinate an intersectoral health workforce agenda
                        {
                            deuid: "yqQBUxeuga4",
                            cocuid: "Xr12mI7VPn3",
                            cell_no: "O10"
                        }, //Existence of a health workforce unit responsible for developing and monitoring policies and plans on health workforce
                        {
                            deuid: "tdwemEgGckz",
                            cocuid: "Xr12mI7VPn3",
                            cell_no: "O11"
                        }, //Existence of mechanisms and models for health workforce planning
                        {
                            deuid: "wDaqByzsz7p",
                            cocuid: "Xr12mI7VPn3",
                            cell_no: "O12"
                        }, //Existence of national education plans for health workers, aligned with the national health plan and the national health workforce strategy/plan
                        {
                            deuid: "HgQ76w0VONy",
                            cocuid: "Xr12mI7VPn3",
                            cell_no: "O13"
                        } //Existence of institutional models for assessing and monitoring staffing needs for health service delivery
                    ]
                },
                {
                    sheet_type: "AGGREGATE_STATIC",
                    sheet_no: 3, //HRHIS sheet
                    orgUnitIdScheme: "UID",
                    dataElementIdScheme: "UID",
                    idScheme: "UID",
                    oucode_cell: "N2",
                    year_cell: "I4",
                    last_data_column: "I",

                    agg_des: [
                        {
                            deuid: "f87mpByuPub",
                            cocuid: "Xr12mI7VPn3",
                            cell_no: "O9"
                        }, //Existence of HRHIS for reporting on International Health Regulations
                        {
                            deuid: "RHokurJAbjS",
                            cocuid: "Xr12mI7VPn3",
                            cell_no: "O10"
                        }, //Existence of HRHIS for reporting on  the WHO Global Code of Practice on the International Recruitment of Health Personnel
                        {
                            deuid: "w8SWd1reRm8",
                            cocuid: "Xr12mI7VPn3",
                            cell_no: "O11"
                        }, //Existence of HRHIS for reporting on Skilled Attendance at Birth requirements
                        {
                            deuid: "IidAimBSgEf",
                            cocuid: "Xr12mI7VPn3",
                            cell_no: "O12"
                        }, //Existence of HRHIS for reporting on outputs from education and training institutions
                        {
                            deuid: "q8CUMlpFLtJ",
                            cocuid: "Xr12mI7VPn3",
                            cell_no: "O13"
                        }, //Existence of HRHIS to track entrants to the labour market
                        {
                            deuid: "hR7B1ITcCMe",
                            cocuid: "Xr12mI7VPn3",
                            cell_no: "O14"
                        }, //Existence of HRHIS to track the number of active stock per year
                        {
                            deuid: "qNxAIa6jvmm",
                            cocuid: "Xr12mI7VPn3",
                            cell_no: "O15"
                        }, //Existence of HRHIS to track the number of exits per year
                        {
                            deuid: "FZYvE3Jdf8L",
                            cocuid: "Xr12mI7VPn3",
                            cell_no: "O16"
                        } //Existence of HRHIS to produce geo-coded location of health facilities
                    ]
                }
            ]
        } // Add new Module
    ]
};
