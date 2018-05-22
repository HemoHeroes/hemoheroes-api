constructor(name = "", email = "", cnpj = "", phones = "", address = "", password = "", active = false)

{
	"geometry": {
		"location": {
			"lat": -30.0293918,
			"lng": -51.213941
		},
		"viewport": {
			"northeast": {
				"lat": -30.02804007010727,
				"lng": -51.21261102010727
			},
			"southwest": {
				"lat": -30.03073972989272,
				"lng": -51.21531067989272
			}
		}
	},
	"icon": "https://maps.gstatic.com/mapfiles/place_api/icons/doctor-71.png",
	"id": "79f8d3ee6a2cefa4f7d7da8c21210015bfff1e6d",
	"name": "FEDERAÇÃO DOS HOSPITAIS",
	"place_id": "ChIJgWAA8a55GZUR80kYgO1d5N8",
	"rating": 5,
	"reference": "CmRbAAAAMH4uw8rPsTua-eJ1VbSy5tN38BPqe53XD_yZAPtweN6OryjDSzstnWFTB1opqdXS920cR7Jty0CSWLpzPfmexD4pl10NNJwCypPQco-dCIC7kOVBM8hLA-vtLm4n9okCEhDD7i6rIDgq-vhTh-UpgRUaGhRxMHEsGdIEgpDmx0PCMABTBpcxKg",
	"scope": "GOOGLE",
	"types": ["hospital", "point_of_interest", "establishment"],
	"vicinity": "R. Santo Antonio - Bom Fim, Porto Alegre"
}

var done = [];

fetch("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-29.9928,-51.1324&language=pt-BR&radius=50000&types=hospitais&name=hospitais&key=AIzaSyBCGRq0diNQzj77oAsHEASoLqo9_w1Cbbc")
.then(
    res => res.json().then(
        (data) => {
            done = data.results.map(
                (item) => {
                    return {
                        "name": item.name,
                        "email": item.name+"@"+item.name,
                        "cnpj": 111111111,
                        "phones": [{
                            "number": "99999", 
                            "branch": null, 
                            "main": false
                        }],
                        "address": [{
                            "latitude": item["geometry"].location.lat,
                            "longitude": item["geometry"].location.lng,
                            "street": item.vicinity
                        }],
                        "password": "aaaa1234",
                        "active": true
                    }
                }
            )
        }
    )
)



[{
	"name": "FEDERAÇÃO DOS HOSPITAIS",
	"email": "FEDERAÇÃO DOS HOSPITAIS@FEDERAÇÃO DOS HOSPITAIS",
	"cnpj": 111111111,
	"phones": [{
		"number": "99999",
		"branch": null,
		"main": false
	}],
	"address": [{
		"latitude": -30.0293918,
		"longitude": -51.213941,
		"street": "R. Santo Antonio - Bom Fim, Porto Alegre"
	}],
	"password": "aaaa1234",
	"active": true
}, {
	"name": "Hospitais Moinhos Vento",
	"email": "Hospitais Moinhos Vento@Hospitais Moinhos Vento",
	"cnpj": 111111111,
	"phones": [{
		"number": "99999",
		"branch": null,
		"main": false
	}],
	"address": [{
		"latitude": -30.0269826,
		"longitude": -51.2090507,
		"street": "R. Ramiro Barcelos, 910 - Floresta, Porto Alegre"
	}],
	"password": "aaaa1234",
	"active": true
}, {
	"name": "Santa Casa de Misericórdia",
	"email": "Santa Casa de Misericórdia@Santa Casa de Misericórdia",
	"cnpj": 111111111,
	"phones": [{
		"number": "99999",
		"branch": null,
		"main": false
	}],
	"address": [{
		"latitude": -30.0298559,
		"longitude": -51.2208273,
		"street": "Av. Independência, 75 - Independência, Porto Alegre"
	}],
	"password": "aaaa1234",
	"active": true
}, {
	"name": "Santa Casa Hospital",
	"email": "Santa Casa Hospital@Santa Casa Hospital",
	"cnpj": 111111111,
	"phones": [{
		"number": "99999",
		"branch": null,
		"main": false
	}],
	"address": [{
		"latitude": -30.0063095,
		"longitude": -51.1884731,
		"street": "R. Augusto Severo, 125 - São João, Porto Alegre"
	}],
	"password": "aaaa1234",
	"active": true
}, {
	"name": "Medical do Brasil Produtos Médicos e Hospitalares",
	"email": "Medical do Brasil Produtos Médicos e Hospitalares@Medical do Brasil Produtos Médicos e Hospitalares",
	"cnpj": 111111111,
	"phones": [{
		"number": "99999",
		"branch": null,
		"main": false
	}],
	"address": [{
		"latitude": -30.0426528,
		"longitude": -51.1867682,
		"street": "Av. Taquara, 154 - Petrópolis, Porto Alegre"
	}],
	"password": "aaaa1234",
	"active": true
}, {
	"name": "Laboratório de Pesquisa em Bioética/HCPA",
	"email": "Laboratório de Pesquisa em Bioética/HCPA@Laboratório de Pesquisa em Bioética/HCPA",
	"cnpj": 111111111,
	"phones": [{
		"number": "99999",
		"branch": null,
		"main": false
	}],
	"address": [{
		"latitude": -30.03899359999999,
		"longitude": -51.207277,
		"street": "R. Ramiro Barcelos, 2350 - Santa Cecilia, Porto Alegre"
	}],
	"password": "aaaa1234",
	"active": true
}, {
	"name": "Hospital Independência - Rede de Saúde Divina Providência",
	"email": "Hospital Independência - Rede de Saúde Divina Providência@Hospital Independência - Rede de Saúde Divina Providência",
	"cnpj": 111111111,
	"phones": [{
		"number": "99999",
		"branch": null,
		"main": false
	}],
	"address": [{
		"latitude": -30.062281,
		"longitude": -51.149201,
		"street": "Rua Antônio de Carvalho, 450 - Agronomia, Porto Alegre"
	}],
	"password": "aaaa1234",
	"active": true
}, {
	"name": "Gerhos Aporte & Gerenciamento Hospitalar",
	"email": "Gerhos Aporte & Gerenciamento Hospitalar@Gerhos Aporte & Gerenciamento Hospitalar",
	"cnpj": 111111111,
	"phones": [{
		"number": "99999",
		"branch": null,
		"main": false
	}],
	"address": [{
		"latitude": -30.0117959,
		"longitude": -51.19064059999999,
		"street": "R. Felicissimo de Azevedo, 332 - São João, Porto Alegre"
	}],
	"password": "aaaa1234",
	"active": true
}, {
	"name": "Sulmed - Planos de Saúde Empresariais",
	"email": "Sulmed - Planos de Saúde Empresariais@Sulmed - Planos de Saúde Empresariais",
	"cnpj": 111111111,
	"phones": [{
		"number": "99999",
		"branch": null,
		"main": false
	}],
	"address": [{
		"latitude": -30.0292706,
		"longitude": -51.2175343,
		"street": "Av. Independência, 386 - Independência, Porto Alegre"
	}],
	"password": "aaaa1234",
	"active": true
}, {
	"name": "Central de Logística - Grupo Hospitalar Conceição",
	"email": "Central de Logística - Grupo Hospitalar Conceição@Central de Logística - Grupo Hospitalar Conceição",
	"cnpj": 111111111,
	"phones": [{
		"number": "99999",
		"branch": null,
		"main": false
	}],
	"address": [{
		"latitude": -30.0179644,
		"longitude": -51.1599053,
		"street": "Praça Inspetor Irani Bertele - Vila Ipiranga, Porto Alegre"
	}],
	"password": "aaaa1234",
	"active": true
}, {
	"name": "Hospital Dom Vicente Scherer",
	"email": "Hospital Dom Vicente Scherer@Hospital Dom Vicente Scherer",
	"cnpj": 111111111,
	"phones": [{
		"number": "99999",
		"branch": null,
		"main": false
	}],
	"address": [{
		"latitude": -30.0301385,
		"longitude": -51.2204659,
		"street": "Av. Independência, 155 - Centro Histórico, Porto Alegre"
	}],
	"password": "aaaa1234",
	"active": true
}, {
	"name": "Fundação Hosp Clínicas S Leopoldo Hospital Centena",
	"email": "Fundação Hosp Clínicas S Leopoldo Hospital Centena@Fundação Hosp Clínicas S Leopoldo Hospital Centena",
	"cnpj": 111111111,
	"phones": [{
		"number": "99999",
		"branch": null,
		"main": false
	}],
	"address": [{
		"latitude": -29.7656568,
		"longitude": -51.1441396,
		"street": "R. São Joaquim, 988 - Centro, São Leopoldo"
	}],
	"password": "aaaa1234",
	"active": true
}, {
	"name": "HBM Hospital da Brigada Militar de Porto Alegre",
	"email": "HBM Hospital da Brigada Militar de Porto Alegre@HBM Hospital da Brigada Militar de Porto Alegre",
	"cnpj": 111111111,
	"phones": [{
		"number": "99999",
		"branch": null,
		"main": false
	}],
	"address": [{
		"latitude": -30.0979336,
		"longitude": -51.2511144,
		"street": "R. Dr. Castro de Menezes, 155 - Vila Assunção, Porto Alegre"
	}],
	"password": "aaaa1234",
	"active": true
}, {
	"name": "Fundação Hosp Clínicas S Leopoldo Hospital Centena",
	"email": "Fundação Hosp Clínicas S Leopoldo Hospital Centena@Fundação Hosp Clínicas S Leopoldo Hospital Centena",
	"cnpj": 111111111,
	"phones": [{
		"number": "99999",
		"branch": null,
		"main": false
	}],
	"address": [{
		"latitude": -29.7633377,
		"longitude": -51.1503922,
		"street": "R. São Francisco, 419 - Centro, São Leopoldo"
	}],
	"password": "aaaa1234",
	"active": true
}, {
	"name": "Hospital Montenegro",
	"email": "Hospital Montenegro@Hospital Montenegro",
	"cnpj": 111111111,
	"phones": [{
		"number": "99999",
		"branch": null,
		"main": false
	}],
	"address": [{
		"latitude": -29.6866306,
		"longitude": -51.46383059999999,
		"street": "R. Assis Brasil, 1621 - Centro, Montenegro"
	}],
	"password": "aaaa1234",
	"active": true
}, {
	"name": "Hospital Espírita de Porto Alegre",
	"email": "Hospital Espírita de Porto Alegre@Hospital Espírita de Porto Alegre",
	"cnpj": 111111111,
	"phones": [{
		"number": "99999",
		"branch": null,
		"main": false
	}],
	"address": [{
		"latitude": -30.0867286,
		"longitude": -51.2068826,
		"street": "Praça Simões Lopes Neto, 175 - Teresópolis, Porto Alegre"
	}],
	"password": "aaaa1234",
	"active": true
}, {
	"name": "Associação Hospitalar Vila Nova",
	"email": "Associação Hospitalar Vila Nova@Associação Hospitalar Vila Nova",
	"cnpj": 111111111,
	"phones": [{
		"number": "99999",
		"branch": null,
		"main": false
	}],
	"address": [{
		"latitude": -30.1193123,
		"longitude": -51.20773939999999,
		"street": "R. Catarino Andreata, 155 - Vila Nova, Porto Alegre"
	}],
	"password": "aaaa1234",
	"active": true
}, {
	"name": "Hospital Psiquiátrico São Pedro",
	"email": "Hospital Psiquiátrico São Pedro@Hospital Psiquiátrico São Pedro",
	"cnpj": 111111111,
	"phones": [{
		"number": "99999",
		"branch": null,
		"main": false
	}],
	"address": [{
		"latitude": -30.0604263,
		"longitude": -51.1883045,
		"street": "Av. Bento Gonçalves, 2460 - Partenon, Porto Alegre"
	}],
	"password": "aaaa1234",
	"active": true
}, {
	"name": "Hospital Mãe de Deus Prédio Garagem",
	"email": "Hospital Mãe de Deus Prédio Garagem@Hospital Mãe de Deus Prédio Garagem",
	"cnpj": 111111111,
	"phones": [{
		"number": "99999",
		"branch": null,
		"main": false
	}],
	"address": [{
		"latitude": -30.0585467,
		"longitude": -51.2294375,
		"street": "R. Costa, 29 - Menino Deus, Porto Alegre"
	}],
	"password": "aaaa1234",
	"active": true
}, {
	"name": "Hospital Materno Infantil Presidente Vargas",
	"email": "Hospital Materno Infantil Presidente Vargas@Hospital Materno Infantil Presidente Vargas",
	"cnpj": 111111111,
	"phones": [{
		"number": "99999",
		"branch": null,
		"main": false
	}],
	"address": [{
		"latitude": -30.0295889,
		"longitude": -51.2147319,
		"street": "Av. Independência, 661 - Independência, Porto Alegre"
	}],
	"password": "aaaa1234",
	"active": true
}]