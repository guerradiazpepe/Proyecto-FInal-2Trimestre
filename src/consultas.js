db.camiones.validate()



//Separación de ventas

db.camiones.aggregate([
  {
      $project: {
          _id: 0,
          item: 0,
      }
  },

  { 
    $out: "autoventas", 
    
    
}
])
//Separacion de items

db.camiones.aggregate([
  {
      $project: {
          _id: 1,
          item:1
      }
  },

  { 
    $out: { 
      db: "ventas", 
      coll: "autoitems" 
    } 
}
])

//Muestra aleatoriamente 2 ventas

db.camiones.aggregate([{$sample : {size : 2}}])

//Numero de ventas realizadas por cada vendedor ordenadas de mayor a menor

db.camiones.aggregate([
    {
      $group: {
        _id: "$vendedor",
        numerodeventas: {
          $count: {},
        }
      }
    },
    {
        $sort:{
            numerodeventas:-1
        }
    }
  ])

//Media de dinero generado por cada vendedor

db.camiones.aggregate([
  {
    $unwind: {
      path: "$item",
    },
  },
  {
    $group: {
      _id: "$vendedor",
      mediaponderada: {
        $avg: {
          $multiply: ["$item.preciofabricacion", "$item.precioventa"],
        },
      },
    },
  },
])

//Se necesita conocer los beneficios netos realizados por cada vendedor

db.camiones.aggregate([
  {
    $unwind: {
      path: "$item",
    },
  },
  {
    $project: {
      vendedor: 1,
      netIncome: {
        $subtract: [
          {
            $multiply: [
                "$item.precioventa",
                "$item.unidadesvendidas"
            ],
          },
          {
            $multiply: [
                "$item.preciofabricacion",
                "$item.unidadesvendidas"
            ],
          },
        ],
      },
    },
  },
  {
    $group: {
      _id: "$vendedor",
      total: {
        $sum: "$netIncome",
      },
    },
  },
])
//Soy el gerente y quiero ver las compras realizadas totales

db.camiones.aggregate([
  {$unwind:'$item'}
])

//Se precisa de una lista con el numero de articulos comprados por los diferentes clientes 

db.camiones.aggregate([
  {
      $unwind:{
          path:"$item"
      }
  },
  {
      $group:{
          _id:"$cliente",
          camionescomprados:{
              $sum:"$item.unidadesvendidas"
          }
      }
  }
 
])

// Se necesita saber el maximo de unidades vendidas y el minimo de unidades vendidas
db.camiones.aggregate(
  [
    {$group:
        { _id:null,
          maxundsvendidas:{$max:"$item.unidadesvendidas"},
          minundsvendidas:{$min:"$item.unidadesvendidas"}
        }
    }
  ]
)

//se precisa de una lista de los ingresos netos por mes ordenados de mayor a menor

db.camiones.aggregate([
  {
      $unwind:{
          path:"$item"
      }
  },
  {
      $project:{
          month:{
              $month:"$fechaventa"
          },
          netIncome:{
              $subtract: [
                  {
                    $multiply: [
                        "$item.precioventa",
                        "$item.unidadesvendidas"
                    ],
                  },
                  {
                    $multiply: [
                        "$item.preciofabricacion",
                        "$item.unidadesvendidas"
                    ],
                  },
                ]
          }
      },   
  },
  {
      $group:{
          _id:"$month",
          avg:{
              $avg:"$netIncome" 
          }
      }
  },
  {
      $project:{
          mes:"$_id",
          ingresosnetos:{
              $round:[
                  "$avg",
                  2
              ]
          },
          _id:0
      }
  },
  {
      $sort:{
          avgNetIncome:-1
      }
      
  }
])

//Dinero total que ha suministrado cada empresa de mayor a menor

db.camiones.aggregate([
  {
      $unwind:{
          path:"$item"
      }
  },
  {
      $project:{
          _id:0,
          vendedor:"$cliente.nombre",
          dinerototal:{
              $multiply: ["$item.unidadesvendidas","$item.precioventa"] }
          }
      },
      {
              $group: {
                  _id:"$vendedor",
                  dinerototal:{ $sum:"$dinerototal"}
              }
      },
      {
          $sort: {
              dinerototal:-1
          }
      }
])

// Número de artículos distintos que ha vendido cada vendedor

db.camiones.aggregate([
  {
          $lookup: {
              from:"ventas",
              localField:"id",
              foreignField:"id",
              as:"ventas"
          }
  },
  {
          $project:{
              _id:0,
              vendedores:{$arrayElemAt:["$ventas",0]},
              vendedor:"$vendedor"
          }
  },
  {
      $project:{
        vendedor:1,
        dinero:{ $multiply:["$vendedores.unidadesvendidas","$vendedores.precioventa"]}
      }
    },

{
      $group: {
          _id:"$vendedor",
          dinero: { $sum:"$dinero"}
      }
  },
  {
      $sort: {
          dinero:-1
      }
  }
])







  




