db.camiones.drop();
db.camiones.insertMany([
    {
        _id:01,
         item:[
            {
                marca:"scania",
                modelo:"s",
                preciofabricacion:270000,
                precioventa:524000,
                unidadesvendidas:2,
                pais:"suecia",
                extras:["cama","portavasos","climatizacion"], 
                caracteristicas:{
                    automatico:true,
                    caballosvapor:[440,430,500,610,750],
                    peso:7220,
                    carburante:"hvo"
                }
            },

            {
                marca:"scania",
                modelo:"l",
                preciofabricacion:120000,
                precioventa:248000,
                unidadesvendidas:1,
                pais:"suecia",
                extras:["gps","portavasos","radio"], 
                caracteristicas:{
                    automatico:false,
                    caballosvapor:[420,430,510,620,710],
                    peso:6290,
                    carburante:"diesel"
                }
            },

            {
                marca:"man",
                modelo:"tgx",
                preciofabricacion:160000,
                precioventa:248000,
                unidadesvendidas:3,
                pais:"alemania",
                extras:["nevera","portavasos","radio"], 
                caracteristicas:{
                    automatico:false,
                    caballosvapor:[320,410,500,610,700],
                    peso:5920,
                    carburante:"diesel"
                }
            },

            {
                marca:"volvo",
                modelo:"fh16",
                preciofabricacion:60000,
                precioventa:180000,
                unidadesvendidas:4,
                pais:"suecia",
                extras:["cama","estroboscopico","gps"], 
                caracteristicas:{
                    automatico:true,
                    caballosvapor:[480,510,570,610,690],
                    peso:8250,
                    carburante:"diesel"
                }
            },
        ],
            fechaventa: new Date("2021-12-16"),
            cliente:{
                nombre:"TIR Sevilla",
                codigo: "B34187888"
            },
            vendedor:"Empresite"
        },

        {
        _id:02,
         item:[
                {
                marca:"mercedes",
                modelo:"arocs",
                preciofabricacion:190000,
                precioventa:276000,
                unidadesvendidas:2,
                pais:"alemania",
                extras:["grifo","bañera","gps","climatizacion"],
                caracteristicas:{
                    automatico:true,
                    caballosvapor:[510,620,710],
                    peso:9720,
                    carburante:"diesel"
                    }
                },
    
                {
                marca:"mercedos",
                modelo:"atego",
                preciofabricacion:150000,
                precioventa:240000,
                unidadesvendidas:3,
                pais:"alemania",
                extras:["radio","gps","cama"],
                caracteristicas:{
                    automatico:false,
                    caballosvapor:[420,430,510,620,710],
                    peso:4220,
                    carburante:"diesel"
                    }
                },
    
                {
                marca:"daf",
                modelo:"r",
                preciofabricacion:120000,
                precioventa:248000,
                unidadesvendidas:5,
                pais:"paises bajos",
                extras:["extintor","alarma","gps"],
                caracteristicas:{
                    automatico:true,
                    caballosvapor:[380,430,610,670],
                    peso:5660,
                    carburante:"hvo"
                    }
                },
    
                {
                marca:"scania",
                modelo:"l",
                preciofabricacion:85000,
                precioventa:118000,
                unidadesvendidas:1,
                pais:"suecia",
                extras:["extintor","alarma","litera"],
                caracteristicas:{
                    automatico:false,
                    caballosvapor:[420,430,510,620],
                    peso:7220,
                    carburante:"diesel"
                    }
                },
            ],
                fechaventa: new Date("2022-2-16"),
                cliente:{
                    nombre:"Nanta",
                    codigo: "BC3465888"
                },
                vendedor:"Truckscout"
            },

            {
            _id:03,
             item:[
                    {
                marca:"renault",
                modelo:"s",
                preciofabricacion:60000,
                precioventa:98000,
                unidadesvendidas:6,
                pais:"francia",
                extras:["extintor","alarma","gps"],
                caracteristicas:{
                    automatico:true,
                    caballosvapor:[510,620,710,750],
                    peso:9300,
                    carburante:"hvo"
                    }
                },
        
                {
                marca:"iveco",
                modelo:"l",
                preciofabricacion:220000,
                precioventa:298000,
                unidadesvendidas:2,
                pais:"españa",
                extras:["herramientas","botiquin","gps"],
                caracteristicas:{
                    automatico:false,
                    caballosvapor:[400,480,550,680,710],
                    peso:2220,
                    carburante:"diesel"
                    }
                },
        
                {
                marca:"nissan",
                modelo:"cabstar",
                preciofabricacion:148000,
                precioventa:200000,
                unidadesvendidas:3,
                pais:"japon",
                extras:["extintor","nevera","herramientas"],
                caracteristicas:{
                    automatico:true,
                    caballosvapor:[320,410,480],
                    peso:2500,
                    carburante:"diesel"
                    }
                },
        
                {
                marca:"renault",
                modelo:"l",
                preciofabricacion:220000,
                precioventa:348000,
                unidadesvendidas:1,
                pais:"francia",
                extras:["cama","alarma","gps"],
                caracteristicas:{
                    automatico:true,
                    caballosvapor:[480,510,620,710],
                    peso:2220,
                    carburante:"diesel"
                    }
                },
                ],
                    fechaventa: new Date("2019-03-21"),
                    cliente:{
                        nombre:"Heineken",
                        codigo: "B34185688"
                    },
                    vendedor:"Autoline"
                },
        
                {
            
            _id:04,
             item:[
                {
                marca:"scania",
                modelo:"streamline",
                preciofabricacion:100000,
                precioventa:200000,
                unidadesvendidas:3,
                pais:"suecia",
                extras:["camara","cerrojo","calefactor"],
                caracteristicas:{
                    automatico:false,
                    caballosvapor:[380,410,480,520,680],
                    peso:6220,
                    carburante:"diesel"
                    }
                },
            
                {
                marca:"daf",
                modelo:"xg",
                preciofabricacion:130000,
                precioventa:220000,
                unidadesvendidas:1,
                pais:"paises bajos",
                extras:["botiquin","portavasos","rueda repusto"],
                caracteristicas:{
                    automatico:false,
                    caballosvapor:[410,510,530,610],
                    peso:7220,
                    carburante:"diesel"
                    }
                },
            
                {
                marca:"scania",
                modelo:"p",
                preciofabricacion:60000,
                precioventa:148000,
                unidadesvendidas:4,
                pais:"suecia",
                extras:["cama","alarma","gps"],
                caracteristicas:{
                    automatico:true,
                    caballosvapor:[320,380,480,560],
                    peso:8220,
                    carburante:"diesel"
                    }
                },
            
                {
                marca:"scania",
                modelo:"g ",
                preciofabricacion:180000,
                precioventa:240000,
                unidadesvendidas:2,
                pais:"suecia",
                extras:["cerrojo","calefactor","gps"],
                caracteristicas:{
                    automatico:true,
                    caballosvapor:[470,510,560,610,710],
                    peso:6500,
                    carburante:"hvo"
                    }
                },
                ],
                fechaventa: new Date("2021-04-16"),
                    cliente:{
                        nombre:"Garcia",
                        codigo: "C44183218"
                    },
                    vendedor:"Mascus"
                    },

                    {
            _id:05,
             item:[
                {
                marca:"scania",
                modelo:"crewcab",
                preciofabricacion:80000,
                precioventa:120000,
                unidadesvendidas:5,
                pais:"suecia",
                extras:["radio","camara","bluetooth"],
                caracteristicas:{
                    automatico:false,
                    caballosvapor:[410,510,620,680],
                    peso:4220,
                    carburante:"hvo"
                    }
                },
                
                {
                marca:"volvo",
                modelo:"fl",
                preciofabricacion:70000,
                precioventa:140000,
                unidadesvendidas:3,
                pais:"españa",
                extras:["estroboscopico","botiquin","gps"],
                caracteristicas:{
                    automatico:false,
                    caballosvapor:[420,430,510,620,710],
                    peso:1220,
                    carburante:"diesel"
                }
                },
                
                {
                marca:"man",
                modelo:"tgl",
                preciofabricacion:120000,
                precioventa:268000,
                unidadesvendidas:1,
                pais:"alemania",
                extras:["cerrojo","calefactor","gps"],
                caracteristicas:{
                    automatico:true,
                    caballosvapor:[490,540,610,680],
                    peso:6220,
                    carburante:"hvo"
                }
                },
                
                {
                marca:"man",
                modelo:"tgs",
                preciofabricacion:25000,
                precioventa:115000,
                unidadesvendidas:1,
                pais:"alemania",
                extras:["cama","nevera","camara"],
                caracteristicas:{
                    automatico:true,
                    caballosvapor:[420,430,510,620,710],
                    peso:2220,
                    carburante:"hvo"
                }
                },
                ],
                fechaventa: new Date("2022-05-26"),
                cliente:{
                    nombre:"Primafrio",
                    codigo: "B34187338"
                    },
                    vendedor:"Autocamiones"
                },
                
                {
            _id:06,
             item:[
                {
                marca:"renault",
                modelo:"d",
                preciofabricacion:47500,
                precioventa:148000,
                unidadesvendidas:3,
                pais:"francia",
                caracteristicas:{
                    automatico:false,
                    caballosvapor:[480,510,630],
                    peso:4820,
                    carburante:"diesel"
                }
                },
                    
                {
                marca:"renault",
                modelo:"t",
                preciofabricacion:25000,
                precioventa:55250,
                unidadesvendidas:2,
                pais:"alemania",
                caracteristicas:{
                    automatico:false,
                    caballosvapor:[420,430,510,620,710],
                    peso:1220,
                    carburante:"diesel"
                }
                },
                    
                {
                marca:"scania",
                modelo:"a",
                preciofabricacion:25000,
                precioventa:65420,
                unidadesvendidas:1,
                pais:"suecia",
                caracteristicas:{
                    automatico:false,
                    caballosvapor:[410,430,500,620],
                    peso:4220,
                    carburante:"hvo"
                }
                },
                    
                {
                marca:"daf",
                modelo:"l",
                preciofabricacion:127000,
                precioventa:258000,
                unidadesvendidas:4,
                pais:"paises bajos",
                caracteristicas:{
                    automatico:false,
                    caballosvapor:[410,480,510],
                    peso:2220,
                    carburante:"diesel"
                }
                },
                ],
                fechaventa: new Date("2021-07-16"),
                cliente:{
                    nombre:"Garciden",
                    codigo: "B34387888"
                    },
                    vendedor:"Europages"
                },
                
            ])

    db.camiones.updateOne(
        {
            _id:01
        },

        {
        $push:{
        item:{
            marca:"mercedes",
            modelo:"benz",
            preciofabricacion:210.000,
            precioventa:534.000,
            unidadesvendidas:3,
            pais:"suecia",
            extras:["nevera","portavasos","extintor"], 
            caracteristicas:{
                automatico:true,
                caballosvapor:[420,480,510,580,710],
                peso:7220,
                carburante:"hvo"
            }
           }
          }
        }
      )



      