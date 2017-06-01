// After just below 800 generations (was performing just as well after 100 or so)
var population = [
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": 2
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 8,
        "to": 6,
        "gater": 2
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 6,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.075920388338626,
        "from": 7,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.094498752206062,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 7,
        "to": 9,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.62036485209275,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 7,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.041227191920141,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.0034697046448299,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.015222971089942,
        "from": 6,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.033772234801298,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.092099077399695,
        "from": 10,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": 0.083434201264834,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": 3
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.016543005063325,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.0034697046448299,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 4
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.028533508627318,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": 0
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 9,
        "gater": 1
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.0034697046448299,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.07259297157759,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.25887154347073,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": 0.057051893671466,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.027388507777558,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": -0.092868377852909,
        "type": "hidden",
        "squash": "RELU",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": 0
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": 10
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.053728362598766,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.027395150108541,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.86145584064484,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 1.0343207319112,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.63718526516452,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.028710870901331,
        "from": 8,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "IDENTITY",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.030912918137994,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.041227191920141,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.032241202637677,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.84596774507336,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.015222971089942,
        "from": 6,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.092099077399695,
        "from": 10,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.34961402441832,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.032241202637677,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.038333252311212,
        "from": 10,
        "to": 6,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.076187378561766,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.027395150108541,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.07259297157759,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.21728795888705,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": 0.095061280327433,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.86145584064484,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.029547739573786,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.25887154347073,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 4
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.041227191920141,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.089284588040405,
        "from": 0,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.012135640254848,
        "type": "hidden",
        "squash": "RELU",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 4
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 9,
        "to": 10,
        "gater": 0
      },
      {
        "weight": -0.06859944056857,
        "from": 4,
        "to": 9,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.86145584064484,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 7,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 7,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 8,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.067086025456733,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.047276145194557,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.058729725054939,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0051497704835865,
        "from": 2,
        "to": 7,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.35986778236258,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": 0.05536689513306,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 9,
        "gater": 1
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.016543005063325,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.039218050372821,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.015222971089942,
        "from": 6,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.092099077399695,
        "from": 10,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.083796717605093,
        "from": 10,
        "to": 6,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 8,
        "to": 6,
        "gater": 2
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072827883082159,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.03707470949643,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "10"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "11"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "10",
        "to": "10",
        "gater": 2
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 11,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 10,
        "to": 11,
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 7,
        "gater": 5
      },
      {
        "weight": 0.072827883082159,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 11,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 10,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.087450415545253,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.088936779667059,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 11,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": 0.099661903436901,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.0034697046448299,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.032241202637677,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": 0.095061280327433,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.25887154347073,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": 2
      },
      {
        "weight": 0.083434201264834,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.022196432879877,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 6,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.075920388338626,
        "from": 7,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.043422874911105,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 8,
        "to": 6,
        "gater": 2
      },
      {
        "weight": 0.094498752206062,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 7,
        "to": 9,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "SOFTPLUS",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "10"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "11"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": null
      },
      {
        "weight": 1,
        "from": "10",
        "to": "10",
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 11,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 9,
        "to": 11,
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 8,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.058601394829906,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 11,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 10,
        "to": 11,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.027388507777558,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.42416310804442,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.86145584064484,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.19987293823133,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": -0.040669848229527,
        "type": "hidden",
        "squash": "RELU",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "10"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "11"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "10",
        "to": "10",
        "gater": 2
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 11,
        "gater": null
      },
      {
        "weight": 0.039218050372821,
        "from": 10,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 11,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 9,
        "to": 11,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.015222971089942,
        "from": 6,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.02042176004549,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.092584030676446,
        "from": 11,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 10,
        "to": 11,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.19987293823133,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.86145584064484,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.19987293823133,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 7,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.083656538871268,
        "from": 6,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.19987293823133,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": -0.069776163531866,
        "type": "hidden",
        "squash": "SINUSOID",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "10"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "11"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "10",
        "to": "10",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072827883082159,
        "from": 1,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 11,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 11,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 9,
        "to": 11,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 10,
        "to": 11,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.053728362598766,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.041276292990997,
        "from": 10,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.039385432646798,
        "from": 8,
        "to": 9,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.66661612300976,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 9,
        "gater": 0
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.27278338734594,
        "from": 3,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 7,
        "to": 9,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 1.0536893770753,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": -0.62036485209275,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.033772234801298,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.015222971089942,
        "from": 6,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.092099077399695,
        "from": 10,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.03616766359765,
        "from": 2,
        "to": 6,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": 0
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "IDENTITY",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": 0.25887154347073,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": 0
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.084873296499678,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.62036485209275,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0.25887154347073,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.0034697046448299,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.015222971089942,
        "from": 6,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.033772234801298,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.092099077399695,
        "from": 10,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 1.1503851211223,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.032241202637677,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 1.0343207319112,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.028710870901331,
        "from": 8,
        "to": 7,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.62036485209275,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.60239792312356,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.038333252311212,
        "from": 10,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.084873296499678,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.21728795888705,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": 0.095061280327433,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072827883082159,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": 0
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.026728280575856,
        "from": 4,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.023043582894226,
        "from": 8,
        "to": 6,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.19987293823133,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 4
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.053728362598766,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.07259297157759,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.028533508627318,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 9,
        "gater": 1
      },
      {
        "weight": -0.0034697046448299,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "SINUSOID",
        "index": "6"
      },
      {
        "bias": -0.092868377852909,
        "type": "hidden",
        "squash": "RELU",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.02557684800782,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.053728362598766,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.016543005063325,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 1.0343207319112,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.63718526516452,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.028710870901331,
        "from": 8,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 4
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": 0
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.07259297157759,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 9,
        "gater": 1
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.056210994945254,
        "from": 7,
        "to": 6,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 1.0536893770753,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.030182810436834,
        "from": 5,
        "to": 6,
        "gater": 3
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 9,
        "gater": 1
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": 1
      },
      {
        "weight": 1.0343207319112,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071140028663501,
        "from": 1,
        "to": 7,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "RELU",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.30377235098246,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.42416310804442,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.15655824674038,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.84596774507336,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.052882084828388,
        "from": 6,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.092099077399695,
        "from": 10,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.016665131389729,
        "from": 0,
        "to": 7,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.86145584064484,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.027388507777558,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.077251214756597,
        "type": "hidden",
        "squash": "HLIM",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 4
      },
      {
        "weight": 0.099661903436901,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072827883082159,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072095573074399,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.42416310804442,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.0034697046448299,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.19987293823133,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.42416310804442,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.083434201264834,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": 7
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "RELU",
        "index": "6"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.040669848229527,
        "type": "hidden",
        "squash": "RELU",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "10"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "11"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "10",
        "to": "10",
        "gater": 2
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 11,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 11,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 10,
        "to": 11,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.039218050372821,
        "from": 10,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.015222971089942,
        "from": 6,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.02042176004549,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.092584030676446,
        "from": 11,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 9,
        "to": 11,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.35986778236258,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.25887154347073,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.030182810436834,
        "from": 5,
        "to": 6,
        "gater": 3
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.074009135800267,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 1.0343207319112,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": 2
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.84596774507336,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 6,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.075920388338626,
        "from": 7,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.043422874911105,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 8,
        "to": 6,
        "gater": 2
      },
      {
        "weight": 0.033841894965821,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 7,
        "to": 9,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.043422874911105,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.027388507777558,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.62036485209275,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.21728795888705,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.86145584064484,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.029547739573786,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.027388507777558,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": 0.19987293823133,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.083434201264834,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": 2
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 6,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.075920388338626,
        "from": 7,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.043422874911105,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 8,
        "to": 6,
        "gater": 2
      },
      {
        "weight": 0.094498752206062,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 7,
        "to": 9,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.35986778236258,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": 1.0407184049817,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": 0
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.016543005063325,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 9,
        "gater": 1
      },
      {
        "weight": 0.039218050372821,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.015222971089942,
        "from": 6,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.083796717605093,
        "from": 10,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.092099077399695,
        "from": 10,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 4
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": 0
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": 0
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 1.0536893770753,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "IDENTITY",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.09223319335463,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.19987293823133,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 7,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.083656538871268,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": 2
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 6,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.075920388338626,
        "from": 7,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.043422874911105,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 8,
        "to": 6,
        "gater": 2
      },
      {
        "weight": 0.094498752206062,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 7,
        "to": 9,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": 2
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 6,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.075920388338626,
        "from": 7,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.043422874911105,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 8,
        "to": 6,
        "gater": 2
      },
      {
        "weight": 0.094498752206062,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 7,
        "to": 9,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.027388507777558,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": 0.19987293823133,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "10"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "11"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": null
      },
      {
        "weight": 1,
        "from": "10",
        "to": "10",
        "gater": 4
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.098898990012366,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 11,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 9,
        "to": 11,
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 11,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 10,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 10,
        "to": 11,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.84596774507336,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.015222971089942,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.032241202637677,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.080705651437226,
        "from": 6,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.034088353041306,
        "from": 3,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.092567786808379,
        "from": 7,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.03158300962099,
        "from": 1,
        "to": 9,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.041227191920141,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "7"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 4
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.041227191920141,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.25887154347073,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "10"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "11"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "10",
        "to": "10",
        "gater": 2
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.73048426501504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 11,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 11,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.039218050372821,
        "from": 10,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.015222971089942,
        "from": 6,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.032241202637677,
        "from": 5,
        "to": 11,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.092099077399695,
        "from": 11,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 10,
        "to": 11,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.092868377852909,
        "type": "hidden",
        "squash": "RELU",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.86145584064484,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.076187378561766,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "6"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.030912918137994,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.041227191920141,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.07259297157759,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "TANH",
        "index": "6"
      },
      {
        "bias": 0.25887154347073,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 4
      },
      {
        "weight": 0.085473552302202,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.028710870901331,
        "from": 8,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.027388507777558,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": 3
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.084873296499678,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.053728362598766,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.045355102746423,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "7"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "10"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "11"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": null
      },
      {
        "weight": 1,
        "from": "10",
        "to": "10",
        "gater": 2
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 8,
        "gater": 7
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.041227191920141,
        "from": 0,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 11,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 9,
        "to": 11,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 10,
        "to": 11,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 11,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 10,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.079415579255076,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.095497980880286,
        "from": 6,
        "to": 7,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "TANH",
        "index": "6"
      },
      {
        "bias": 0.25887154347073,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.052091929800038,
        "from": 7,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 8,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 7,
        "to": 9,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "RELU",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "HLIM",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 7,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.041227191920141,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.0034697046448299,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.033772234801298,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.015222971089942,
        "from": 6,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.092099077399695,
        "from": 10,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.080949248477598,
        "type": "hidden",
        "squash": "TANH",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": 2
      },
      {
        "weight": 0.083434201264834,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 6,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.075920388338626,
        "from": 7,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.043422874911105,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.094498752206062,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 7,
        "to": 9,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 4
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.86145584064484,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 9,
        "gater": 1
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.0034697046448299,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.027388507777558,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.25887154347073,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": 2
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 8,
        "to": 6,
        "gater": 2
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 6,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.075920388338626,
        "from": 7,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.043422874911105,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.094498752206062,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 7,
        "to": 9,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.21728795888705,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.19987293823133,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "SINUSOID",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.42416310804442,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.09223319335463,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.087098867428864,
        "type": "hidden",
        "squash": "TANH",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.058601394829906,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.053728362598766,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.40226503987151,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": 2
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 7,
        "to": 9,
        "gater": 0
      },
      {
        "weight": 0.087412171152086,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 8,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.074675577231458,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.04836621761776,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.083764275031852,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.02242055727938,
        "from": 2,
        "to": 7,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 1.0407184049817,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 7,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": 0
      },
      {
        "weight": 0.041227191920141,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.015222971089942,
        "from": 6,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.033772234801298,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.092099077399695,
        "from": 10,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.012379587022366,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.048940324153002,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 1.0343207319112,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.63718526516452,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.028710870901331,
        "from": 8,
        "to": 7,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.027388507777558,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": -0.62036485209275,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": 1
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072233547795628,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": 7
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.028710870901331,
        "from": 8,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 4
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 4
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.028533508627318,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": 0
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.0034697046448299,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": 0
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.19987293823133,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.028533508627318,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.86145584064484,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 9,
        "gater": 1
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.07259297157759,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.027388507777558,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": -0.62036485209275,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 7,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": 0
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": 10
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.053728362598766,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.098858398910674,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.084873296499678,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.56675369343142,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "HLIM",
        "index": "8"
      },
      {
        "bias": -0.42416310804442,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.066911526440731,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": 0
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.027388507777558,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": 0.19987293823133,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 9,
        "gater": 1
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": 0.25887154347073,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 8,
        "to": 6,
        "gater": 2
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.25887154347073,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": -0.62036485209275,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "IDENTITY",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 7,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.041227191920141,
        "from": 0,
        "to": 9,
        "gater": 1
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.033772234801298,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.015222971089942,
        "from": 6,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.092099077399695,
        "from": 10,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": 2
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 6,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.075920388338626,
        "from": 7,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.043422874911105,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 8,
        "to": 6,
        "gater": 2
      },
      {
        "weight": 0.033841894965821,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 7,
        "to": 9,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "SINUSOID",
        "index": "6"
      },
      {
        "bias": -0.62036485209275,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0.25887154347073,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.03322777836145,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.038333252311212,
        "from": 10,
        "to": 6,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.42416310804442,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.016543005063325,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.093730263484401,
        "type": "hidden",
        "squash": "RELU",
        "index": "7"
      },
      {
        "bias": -1.1168505058366,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "10"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "11"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "10",
        "to": "10",
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 11,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 9,
        "to": 11,
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 8,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.032241202637677,
        "from": 5,
        "to": 11,
        "gater": null
      },
      {
        "weight": 0.038333252311212,
        "from": 11,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.012832754536426,
        "from": 11,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 10,
        "to": 11,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": 0.099661903436901,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.032241202637677,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.022562394754093,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 4
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.33906356447345,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 9,
        "to": 10,
        "gater": 0
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.42416310804442,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.35986778236258,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": 0.05536689513306,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": 0.043422874911105,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.094498752206062,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.039218050372821,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 9,
        "gater": 1
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.015222971089942,
        "from": 6,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.083796717605093,
        "from": 10,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.092099077399695,
        "from": 10,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "SINUSOID",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": 2
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 6,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.075920388338626,
        "from": 7,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.043422874911105,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 8,
        "to": 6,
        "gater": 2
      },
      {
        "weight": 0.094498752206062,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 7,
        "to": 9,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.040669848229527,
        "type": "hidden",
        "squash": "RELU",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "10"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "11"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "10",
        "to": "10",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.73048426501504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 11,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 11,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.039218050372821,
        "from": 10,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.015222971089942,
        "from": 6,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.032241202637677,
        "from": 5,
        "to": 11,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.092099077399695,
        "from": 11,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 10,
        "to": 11,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.35986778236258,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "10"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "11"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "10",
        "to": "10",
        "gater": 2
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 7,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 11,
        "gater": null
      },
      {
        "weight": 0.092099077399695,
        "from": 10,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 11,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 11,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.087450415545253,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.088936779667059,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 10,
        "to": 11,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.027388507777558,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.092868377852909,
        "type": "hidden",
        "squash": "RELU",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": 3
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.053728362598766,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.027388507777558,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "IDENTITY",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 4
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.028710870901331,
        "from": 8,
        "to": 7,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 1.0536893770753,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.34141151588366,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 9,
        "gater": 1
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.084873296499678,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.078064534597648,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 9,
        "to": 7,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.25887154347073,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.041227191920141,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.86145584064484,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.084873296499678,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.028710870901331,
        "from": 8,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.034394813051801,
        "from": 4,
        "to": 7,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 1.0536893770753,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0.19987293823133,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 4
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.15655824674038,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": 0
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.62036485209275,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072827883082159,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.041227191920141,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.0034697046448299,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.015222971089942,
        "from": 6,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.033772234801298,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.092099077399695,
        "from": 10,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": 2
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 6,
        "gater": 5
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.075920388338626,
        "from": 7,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.043422874911105,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 8,
        "to": 6,
        "gater": 2
      },
      {
        "weight": 0.094498752206062,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 7,
        "to": 9,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.06090060434433,
        "type": "hidden",
        "squash": "SOFTPLUS",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": 2
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 6,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.075920388338626,
        "from": 7,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.043422874911105,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 8,
        "to": 6,
        "gater": 2
      },
      {
        "weight": 0.094498752206062,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 7,
        "to": 9,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.19987293823133,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.42416310804442,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": 0
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.0034697046448299,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.35986778236258,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.032241202637677,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.42416310804442,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": 2
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.041227191920141,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.033772234801298,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 7,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 9,
        "gater": 0
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.015222971089942,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.092099077399695,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.06640560198634,
        "from": 2,
        "to": 7,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": 0
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.076187378561766,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.07259297157759,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 1.0536893770753,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.15655824674038,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.0034697046448299,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 1.0536893770753,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.030912918137994,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.041227191920141,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": 0
      },
      {
        "weight": -0.066352353011977,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.84596774507336,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.015222971089942,
        "from": 6,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.032241202637677,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.092099077399695,
        "from": 10,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.19987293823133,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 8,
        "to": 6,
        "gater": 2
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.092868377852909,
        "type": "hidden",
        "squash": "RELU",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.038333252311212,
        "from": 10,
        "to": 6,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.34141151588366,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 4
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 7,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.02557684800782,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": 0
      },
      {
        "weight": -0.088936779667059,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.25887154347073,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": 2
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.094498752206062,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.84596774507336,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 6,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.075920388338626,
        "from": 7,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.043422874911105,
        "from": 5,
        "to": 8,
        "gater": 2
      },
      {
        "weight": 0.033841894965821,
        "from": 8,
        "to": 6,
        "gater": 2
      },
      {
        "weight": 0.033841894965821,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 7,
        "to": 9,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": 0.072827883082159,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.026728280575856,
        "from": 4,
        "to": 6,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.25887154347073,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": 2
      },
      {
        "weight": 0.089284588040405,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.80933350388106,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 8,
        "to": 6,
        "gater": 2
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 6,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.075920388338626,
        "from": 7,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.043422874911105,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.094498752206062,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 7,
        "to": 9,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": 0
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": 2
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.86145584064484,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.075920388338626,
        "from": 7,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.093127285073619,
        "from": 8,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 7,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.0051497704835865,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.058729725054939,
        "from": 3,
        "to": 7,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.076187378561766,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.027395150108541,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.041227191920141,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.19987293823133,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 4
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.86145584064484,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.038333252311212,
        "from": 10,
        "to": 6,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36099669479565,
        "type": "hidden",
        "squash": "SOFTPLUS",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.07259297157759,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.19987293823133,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": 0.072827883082159,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.030182810436834,
        "from": 5,
        "to": 6,
        "gater": 3
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.084873296499678,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.038333252311212,
        "from": 10,
        "to": 6,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.62036485209275,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 7,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.0034697046448299,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.86145584064484,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.027388507777558,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.027388507777558,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": 0
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": 10
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.053728362598766,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 1.0536893770753,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072827883082159,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.7906912891562,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.02557684800782,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.038333252311212,
        "from": 10,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": 1,
        "from": "10",
        "to": "10",
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.049217556981071,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.032241202637677,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071140028663501,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": 0
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.25887154347073,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": 1,
        "from": "10",
        "to": "10",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.057051893671466,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 9,
        "gater": 1
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.0034697046448299,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.027395150108541,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.86145584064484,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.07259297157759,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.51276081530927,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "IDENTITY",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.041227191920141,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.86145584064484,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.027388507777558,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": 10
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": 0
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.053728362598766,
        "from": 9,
        "to": 7,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.069776163531866,
        "type": "hidden",
        "squash": "SINUSOID",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.047276145194557,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.039385432646798,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 7,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 8,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.067086025456733,
        "from": 9,
        "to": 7,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.19987293823133,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 7,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.0034697046448299,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 1.0536893770753,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": 3
      },
      {
        "weight": -0.27278338734594,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.07259297157759,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.027388507777558,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.34141151588366,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.012379587022366,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": 2
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.02557684800782,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 6,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.075920388338626,
        "from": 7,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.043422874911105,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 8,
        "to": 6,
        "gater": 2
      },
      {
        "weight": 0.094498752206062,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 7,
        "to": 9,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.35986778236258,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.030182810436834,
        "from": 5,
        "to": 6,
        "gater": 3
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.0034697046448299,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 1.0343207319112,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.060275285195336,
        "from": 6,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.25887154347073,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 4
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.041227191920141,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 9,
        "gater": 1
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.0034697046448299,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": 0
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.027388507777558,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.041227191920141,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.86145584064484,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.028710870901331,
        "from": 8,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 1.0343207319112,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.63718526516452,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 8,
        "to": 6,
        "gater": 2
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 6,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.075920388338626,
        "from": 7,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.043422874911105,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.094498752206062,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 7,
        "to": 9,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.0034697046448299,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.033772234801298,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.03322777836145,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.015222971089942,
        "from": 6,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.092099077399695,
        "from": 10,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.052219407722073,
        "type": "hidden",
        "squash": "SINUSOID",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": 2
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 6,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.075920388338626,
        "from": 7,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.043422874911105,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 8,
        "to": 6,
        "gater": 2
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 7,
        "to": 9,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.25887154347073,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.86145584064484,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 4
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.028533508627318,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 9,
        "gater": 1
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.25887154347073,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.084873296499678,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.032241202637677,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.076187378561766,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.07259297157759,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.86145584064484,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.35986778236258,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 7,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 9,
        "gater": 1
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.032241202637677,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.016543005063325,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.039218050372821,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.015222971089942,
        "from": 6,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.092099077399695,
        "from": 10,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "TANH",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": 2
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.085473552302202,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.052091929800038,
        "from": 7,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 7,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 8,
        "to": 6,
        "gater": 2
      },
      {
        "weight": 0.094498752206062,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 9,
        "to": 7,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "SINUSOID",
        "index": "6"
      },
      {
        "bias": 0.19987293823133,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0.25887154347073,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.15655824674038,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": 0
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.032241202637677,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.038333252311212,
        "from": 10,
        "to": 6,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.027388507777558,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": 0.19987293823133,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "RELU",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.053728362598766,
        "from": 9,
        "to": 7,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "SINUSOID",
        "index": "6"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 3
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.030912918137994,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.063826375137444,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 9,
        "gater": 1
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.041312386839209,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.032241202637677,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.038333252311212,
        "from": 10,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.21728795888705,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.25887154347073,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "RELU",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.42416310804442,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.86145584064484,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": 7
      },
      {
        "weight": 0.071231130181462,
        "from": 9,
        "to": 10,
        "gater": 0
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "TANH",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.86145584064484,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.032241202637677,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.06090060434433,
        "type": "hidden",
        "squash": "SOFTPLUS",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": 0
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": 0.072827883082159,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.032241202637677,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.038333252311212,
        "from": 10,
        "to": 6,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.06090060434433,
        "type": "hidden",
        "squash": "SOFTPLUS",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.42416310804442,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.86145584064484,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 7,
        "gater": 5
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.0034697046448299,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.015222971089942,
        "from": 6,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.041227191920141,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.84596774507336,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.092099077399695,
        "from": 10,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.076187378561766,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 1.168113351854,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": 0
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "RELU",
        "index": "6"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.25887154347073,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.077251214756597,
        "type": "hidden",
        "squash": "HLIM",
        "index": "9"
      },
      {
        "bias": 0.043680882120624,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "10"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "11"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072827883082159,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 11,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 11,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 9,
        "to": 11,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 11,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.088632028452366,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.055246109378851,
        "from": 10,
        "to": 11,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.012379587022366,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": 0
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.19987293823133,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.016543005063325,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.0034697046448299,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.076187378561766,
        "type": "hidden",
        "squash": "SOFTPLUS",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 4
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.08300690508768,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.89438678845676,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 1.0536893770753,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": 0
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.35986778236258,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "IDENTITY",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.032241202637677,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.038333252311212,
        "from": 10,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.016543005063325,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.039218050372821,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.015222971089942,
        "from": 6,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.092099077399695,
        "from": 10,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.06090060434433,
        "type": "hidden",
        "squash": "SOFTPLUS",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.86145584064484,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.029547739573786,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "TANH",
        "index": "6"
      },
      {
        "bias": 0.25887154347073,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 0.085473552302202,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 8,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 1.0343207319112,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.060793988295772,
        "from": 0,
        "to": 9,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": 2
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 6,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.075920388338626,
        "from": 7,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.043422874911105,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.094498752206062,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 7,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.022070371970433,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.016543005063325,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.0034697046448299,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.041227191920141,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 8,
        "to": 6,
        "gater": 2
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 9,
        "gater": 1
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.028101356824812,
        "from": 1,
        "to": 6,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "SINUSOID",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.027395150108541,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.86145584064484,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 6
      },
      {
        "weight": 0.083434201264834,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.022196432879877,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.028710870901331,
        "from": 8,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 1.0343207319112,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.63718526516452,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": 2
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 6,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.075920388338626,
        "from": 7,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.043422874911105,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.094498752206062,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 7,
        "to": 9,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": 0.030912918137994,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.015222971089942,
        "from": 6,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.030182810436834,
        "from": 5,
        "to": 6,
        "gater": 3
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": 3
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.016543005063325,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": 7
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.027388507777558,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.25887154347073,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.42416310804442,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.25887154347073,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.028710870901331,
        "from": 8,
        "to": 7,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.62036485209275,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "IDENTITY",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.019268949066048,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.041227191920141,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.015222971089942,
        "from": 6,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.092099077399695,
        "from": 10,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.06090060434433,
        "type": "hidden",
        "squash": "SOFTPLUS",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.038333252311212,
        "from": 10,
        "to": 6,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": 2
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 8,
        "to": 6,
        "gater": 2
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 6,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.075920388338626,
        "from": 7,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.043422874911105,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.094498752206062,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 7,
        "to": 9,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": 2
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 6,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.075920388338626,
        "from": 7,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.043422874911105,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 8,
        "to": 6,
        "gater": 2
      },
      {
        "weight": 0.094498752206062,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 7,
        "to": 9,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.073580039923507,
        "from": 1,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 4
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": 3
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": 0
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.0034697046448299,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.19987293823133,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": 3
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.027388507777558,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.86145584064484,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.07259297157759,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "SINUSOID",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.42416310804442,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 7,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.0034697046448299,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.033772234801298,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.21728795888705,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.39016537891575,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 1.0343207319112,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.028710870901331,
        "from": 8,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.25887154347073,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.86145584064484,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.19987293823133,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.15655824674038,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": 0
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.038333252311212,
        "from": 10,
        "to": 6,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.027388507777558,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.053728362598766,
        "from": 9,
        "to": 7,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.62036485209275,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 7,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.041227191920141,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.015222971089942,
        "from": 6,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.092099077399695,
        "from": 10,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.027388507777558,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.018606849914176,
        "type": "hidden",
        "squash": "SINUSOID",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 9,
        "gater": 1
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.0062304389383087,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "10"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "11"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "10",
        "to": "10",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 11,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 9,
        "to": 11,
        "gater": null
      },
      {
        "weight": 0.072827883082159,
        "from": 1,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.039385432646798,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 11,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.041276292990997,
        "from": 10,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 10,
        "to": 11,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.06090060434433,
        "type": "hidden",
        "squash": "SOFTPLUS",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.42416310804442,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": 0
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.032241202637677,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": 2
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 6,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.075920388338626,
        "from": 7,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.043422874911105,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.094498752206062,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 7,
        "to": 9,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 1.0536893770753,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0.19987293823133,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0.25887154347073,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.42416310804442,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.15655824674038,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": 0
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.25887154347073,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": 0
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.092997343343395,
        "from": 9,
        "to": 6,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.62036485209275,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.041227191920141,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.0034697046448299,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.032241202637677,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.015222971089942,
        "from": 6,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.092099077399695,
        "from": 10,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.19987293823133,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "BENT_IDENTITY",
        "index": "9"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "10"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "11"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "10",
        "to": "10",
        "gater": 2
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 11,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 9,
        "to": 11,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.039218050372821,
        "from": 10,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.015222971089942,
        "from": 6,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 11,
        "gater": null
      },
      {
        "weight": -0.02042176004549,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.092584030676446,
        "from": 11,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 10,
        "to": 11,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": 2
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.058601394829906,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 6,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.075920388338626,
        "from": 7,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.043422874911105,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 8,
        "to": 6,
        "gater": 2
      },
      {
        "weight": 0.094498752206062,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 7,
        "to": 9,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.42416310804442,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 4
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.86145584064484,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.19987293823133,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.42416310804442,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": 0
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.54504309460167,
        "from": 0,
        "to": 9,
        "gater": 9
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 9,
        "gater": 1
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.016543005063325,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.039218050372821,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.015222971089942,
        "from": 6,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.083796717605093,
        "from": 10,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.092099077399695,
        "from": 10,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.028533508627318,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": 0
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 9,
        "gater": 1
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.0034697046448299,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "10"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "11"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "10",
        "to": "10",
        "gater": 2
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 11,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 11,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 11,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 10,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.087450415545253,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.088936779667059,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 10,
        "to": 11,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": 0
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.084873296499678,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071140028663501,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.032241202637677,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.63718526516452,
        "from": 9,
        "to": 10,
        "gater": 5
      },
      {
        "weight": 0.028710870901331,
        "from": 8,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 9,
        "gater": 1
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.0034697046448299,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.07259297157759,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.21728795888705,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": 0.095061280327433,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.030912918137994,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.041227191920141,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.029783973529748,
        "from": 6,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": 0.86145584064484,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.032241202637677,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.23420887969444,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.25887154347073,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.15655824674038,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.84596774507336,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.052882084828388,
        "from": 6,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.092099077399695,
        "from": 10,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": 2
      },
      {
        "weight": 0.035423075458008,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.083434201264834,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.037015577628097,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.022196432879877,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 6,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.075920388338626,
        "from": 7,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.094498752206062,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 7,
        "to": 9,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.98711472146403,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": 2
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.06859944056857,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 6,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.075920388338626,
        "from": 7,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.043422874911105,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 8,
        "to": 6,
        "gater": 2
      },
      {
        "weight": 0.094498752206062,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 7,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.083487695122955,
        "from": 8,
        "to": 7,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.027388507777558,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "IDENTITY",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.041227191920141,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.027388507777558,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": 0.19987293823133,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.26163448941709,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.86145584064484,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.065664393854968,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.019833049433017,
        "type": "hidden",
        "squash": "TANH",
        "index": "7"
      },
      {
        "bias": -0.62036485209275,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "8"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "RELU",
        "index": "9"
      },
      {
        "bias": -0.085443416912987,
        "type": "hidden",
        "squash": "SOFTPLUS",
        "index": "10"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "11"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "10",
        "to": "10",
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 11,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 11,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 9,
        "to": 11,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 10,
        "to": 11,
        "gater": null
      },
      {
        "weight": -0.026728280575856,
        "from": 4,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.023043582894226,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.071654155136839,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": 0.045876516814559,
        "from": 7,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": 2
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 6,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.075920388338626,
        "from": 7,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.043422874911105,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 8,
        "to": 6,
        "gater": 2
      },
      {
        "weight": 0.094498752206062,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 9,
        "to": 7,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.030182810436834,
        "from": 5,
        "to": 6,
        "gater": 3
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.0034697046448299,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.06859944056857,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": 1
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.13641145773467,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "10"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "11"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "10",
        "to": "10",
        "gater": 2
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 7,
        "gater": 5
      },
      {
        "weight": 0.072827883082159,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 11,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 11,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 11,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 10,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.087450415545253,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.088936779667059,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 10,
        "to": 11,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.05536689513306,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.86145584064484,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 7,
        "gater": 5
      },
      {
        "weight": 0.072827883082159,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.088936779667059,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.028710870901331,
        "from": 8,
        "to": 7,
        "gater": null
      },
      {
        "weight": 1.0343207319112,
        "from": 10,
        "to": 7,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.012135640254848,
        "type": "hidden",
        "squash": "RELU",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": 2
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.022196432879877,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 6,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.075920388338626,
        "from": 7,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.043422874911105,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 8,
        "to": 6,
        "gater": 2
      },
      {
        "weight": 0.094498752206062,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 7,
        "to": 9,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.19987293823133,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": 0
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.026728280575856,
        "from": 4,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.023043582894226,
        "from": 8,
        "to": 6,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": 0.072827883082159,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 9,
        "gater": 1
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071140028663501,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.032241202637677,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.19987293823133,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0.027395150108541,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.86145584064484,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.63718526516452,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.028710870901331,
        "from": 8,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.25887154347073,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 4
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.73048426501504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.032241202637677,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.038333252311212,
        "from": 10,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": 2
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 6,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.27278338734594,
        "from": 3,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 7,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 8,
        "to": 6,
        "gater": 2
      },
      {
        "weight": 0.094498752206062,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 9,
        "to": 7,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.62036485209275,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "SINUSOID",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.032241202637677,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.038333252311212,
        "from": 10,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.03322777836145,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.085443416912987,
        "type": "hidden",
        "squash": "SOFTPLUS",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.026728280575856,
        "from": 4,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.023043582894226,
        "from": 8,
        "to": 6,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.19987293823133,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": -0.092868377852909,
        "type": "hidden",
        "squash": "RELU",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": 0
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": 10
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.053728362598766,
        "from": 9,
        "to": 7,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.05536689513306,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.049217556981071,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.016543005063325,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 9,
        "gater": 1
      },
      {
        "weight": 0.039218050372821,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.015222971089942,
        "from": 6,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.083796717605093,
        "from": 10,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.092099077399695,
        "from": 10,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.42416310804442,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.25887154347073,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 4
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072827883082159,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.088936779667059,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 1.0536893770753,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.085443416912987,
        "type": "hidden",
        "squash": "SOFTPLUS",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.026728280575856,
        "from": 4,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.023043582894226,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.07259297157759,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "HLIM",
        "index": "8"
      },
      {
        "bias": -0.42416310804442,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.62036485209275,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 7,
        "gater": 5
      },
      {
        "weight": 0.030912918137994,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.041227191920141,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.84596774507336,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.015222971089942,
        "from": 6,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.092099077399695,
        "from": 10,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.25887154347073,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.041227191920141,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": 0
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.065664393854968,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.089284588040405,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.044750589840089,
        "type": "hidden",
        "squash": "RELU",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": 2
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.012830586561579,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 6,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.075920388338626,
        "from": 7,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.043422874911105,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 8,
        "to": 6,
        "gater": 2
      },
      {
        "weight": 0.094498752206062,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 9,
        "to": 7,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.041227191920141,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": 2
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 6,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.075920388338626,
        "from": 7,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.043422874911105,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 8,
        "to": 6,
        "gater": 2
      },
      {
        "weight": 0.094498752206062,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 7,
        "to": 9,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.86145584064484,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": 0
      },
      {
        "weight": 0.072526101782296,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": 0.067547513633642,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072827883082159,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.15655824674038,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": 0
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.038333252311212,
        "from": 10,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.041227191920141,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.42416310804442,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "IDENTITY",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.84596774507336,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.015222971089942,
        "from": 6,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.032241202637677,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.092099077399695,
        "from": 10,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.21728795888705,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.095061280327433,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "RELU",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.015176847952179,
        "type": "hidden",
        "squash": "TANH",
        "index": "8"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.058060624915276,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 9,
        "to": 10,
        "gater": 7
      },
      {
        "weight": 0.071140028663501,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 9,
        "gater": 1
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.02781396552658,
        "type": "hidden",
        "squash": "IDENTITY",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": 2
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.84596774507336,
        "from": 10,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 6,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.075920388338626,
        "from": 7,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.043422874911105,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 8,
        "to": 6,
        "gater": 2
      },
      {
        "weight": 0.033841894965821,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0031492876251646,
        "from": 7,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.063263869733631,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": -0.092868377852909,
        "type": "hidden",
        "squash": "RELU",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.0034697046448299,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.053728362598766,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "BENT_IDENTITY",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.083434201264834,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.08300690508768,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.25887154347073,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": -0.62036485209275,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 4
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.041227191920141,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.015222971089942,
        "from": 6,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.033772234801298,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.092099077399695,
        "from": 10,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.016543005063325,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.0034697046448299,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.032241202637677,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "SINUSOID",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": 0
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.033788600205603,
        "type": "hidden",
        "squash": "TANH",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 9,
        "to": 6,
        "gater": 2
      },
      {
        "weight": -0.053728362598766,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 6,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.075920388338626,
        "from": 7,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.094498752206062,
        "from": 6,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 7,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.0049053511772934,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.06509259883994,
        "from": 8,
        "to": 9,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.42416310804442,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072827883082159,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.03707470949643,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": 7
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 8,
        "to": 6,
        "gater": 2
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.027388507777558,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 4
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": -0.62036485209275,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0.25887154347073,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 4
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.86145584064484,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 4
      },
      {
        "weight": 0.48162389082627,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.028533508627318,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": 0
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 9,
        "gater": 1
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.0034697046448299,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.076187378561766,
        "type": "hidden",
        "squash": "SOFTPLUS",
        "index": "6"
      },
      {
        "bias": -0.62036485209275,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 7,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.041227191920141,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.0034697046448299,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.015222971089942,
        "from": 6,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.033772234801298,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.092099077399695,
        "from": 10,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.027388507777558,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": 0.071862613569699,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.069776163531866,
        "type": "hidden",
        "squash": "SINUSOID",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "10"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "11"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "10",
        "to": "10",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.057051893671466,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 11,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 11,
        "gater": null
      },
      {
        "weight": 0.072827883082159,
        "from": 1,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.039385432646798,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 11,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.041276292990997,
        "from": 10,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 10,
        "to": 11,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 1.0343207319112,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.028710870901331,
        "from": 8,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.027388507777558,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "TANH",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "TANH",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.86145584064484,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": 10
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": 0
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.012135640254848,
        "type": "hidden",
        "squash": "RELU",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": null
      },
      {
        "weight": 0.0051497704835865,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.058729725054939,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.86145584064484,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.047276145194557,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 7,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 8,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.067086025456733,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 7,
        "to": 9,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 4
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.041227191920141,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.014492115216048,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.033772234801298,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "IDENTITY",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 7,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.041227191920141,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.015222971089942,
        "from": 6,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.092099077399695,
        "from": 10,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.62036485209275,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.42416310804442,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.041227191920141,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.015222971089942,
        "from": 6,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.092099077399695,
        "from": 10,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.42416310804442,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "SOFTPLUS",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "10"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "11"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": null
      },
      {
        "weight": 1,
        "from": "10",
        "to": "10",
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05431377553483,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 11,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 11,
        "gater": null
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 8,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.058601394829906,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 11,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 10,
        "to": 11,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.32443764448154,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "9"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "8",
        "to": "8",
        "gater": 2
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 6,
        "gater": 5
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.075920388338626,
        "from": 7,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.043422874911105,
        "from": 5,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 8,
        "to": 6,
        "gater": 2
      },
      {
        "weight": 0.094498752206062,
        "from": 6,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 9,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071231130181462,
        "from": 7,
        "to": 9,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.25887154347073,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 2
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.090499888654847,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.060281716472177,
        "from": 8,
        "to": 9,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 7,
        "gater": 5
      },
      {
        "weight": 0.072827883082159,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.088936779667059,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.87645362590892,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.028710870901331,
        "from": 8,
        "to": 7,
        "gater": null
      },
      {
        "weight": 1.0343207319112,
        "from": 10,
        "to": 7,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": 0.067332701702163,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "7"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": 0.30588993498435,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "10"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "11"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "10",
        "to": "10",
        "gater": 2
      },
      {
        "weight": 0.083434201264834,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.43477630768034,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.033841894965821,
        "from": 8,
        "to": 6,
        "gater": 2
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 11,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 11,
        "gater": null
      },
      {
        "weight": -0.029423368472768,
        "from": 2,
        "to": 7,
        "gater": 5
      },
      {
        "weight": 0.072827883082159,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.014401414149504,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 11,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 10,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.087450415545253,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.088936779667059,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.066352353011977,
        "from": 10,
        "to": 11,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": 0.027388507777558,
        "type": "hidden",
        "squash": "SOFTSIGN",
        "index": "6"
      },
      {
        "bias": 0.19987293823133,
        "type": "hidden",
        "squash": "LOGISTIC",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "6",
        "to": "6",
        "gater": null
      },
      {
        "weight": 1,
        "from": "7",
        "to": "7",
        "gater": null
      },
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": null
      },
      {
        "weight": -0.020593260572595,
        "from": 2,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.071611329485908,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.05303543720079,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.087412171152086,
        "from": 9,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.06613150855542,
        "from": 8,
        "to": 6,
        "gater": null
      },
      {
        "weight": -0.053728362598766,
        "from": 9,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.027453422018819,
        "from": 9,
        "to": 8,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  },
  {
    "nodes": [
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "0"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "1"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "2"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "3"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "4"
      },
      {
        "bias": 0,
        "type": "input",
        "squash": "LOGISTIC",
        "index": "5"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "HLIM",
        "index": "6"
      },
      {
        "bias": -0.16647256367238,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "7"
      },
      {
        "bias": 0.36122531673377,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "8"
      },
      {
        "bias": -0.24659782641651,
        "type": "hidden",
        "squash": "GAUSSIAN",
        "index": "9"
      },
      {
        "bias": 0.98944240585711,
        "type": "output",
        "squash": "RELU",
        "index": "10"
      }
    ],
    "connections": [
      {
        "weight": 1,
        "from": "9",
        "to": "9",
        "gater": 4
      },
      {
        "weight": -0.022190519460727,
        "from": 2,
        "to": 7,
        "gater": 6
      },
      {
        "weight": -0.044349569866525,
        "from": 1,
        "to": 8,
        "gater": null
      },
      {
        "weight": 0.0394836955507,
        "from": 0,
        "to": 9,
        "gater": null
      },
      {
        "weight": -0.066334945325074,
        "from": 3,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.024771677371544,
        "from": 5,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.071090087814687,
        "from": 6,
        "to": 7,
        "gater": null
      },
      {
        "weight": -0.93127708039859,
        "from": 5,
        "to": 9,
        "gater": null
      },
      {
        "weight": 0.87913020076831,
        "from": 4,
        "to": 10,
        "gater": null
      },
      {
        "weight": -0.072388980632522,
        "from": 7,
        "to": 8,
        "gater": null
      },
      {
        "weight": -0.021004421249207,
        "from": 5,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.038333252311212,
        "from": 10,
        "to": 6,
        "gater": null
      },
      {
        "weight": 0.08752803430076,
        "from": 10,
        "to": 7,
        "gater": null
      },
      {
        "weight": 0.072526101782296,
        "from": 8,
        "to": 10,
        "gater": null
      },
      {
        "weight": 0.0092722519151861,
        "from": 9,
        "to": 10,
        "gater": null
      }
    ],
    "input": 6,
    "output": 1
  }
];

// Convert the json to an array of networks
var newPop = [];
for(var i = 0; i < PLAYER_AMOUNT; i++){
  var json = population[i % population.length];
  newPop[i] = neataptic.Network.fromJSON(json);
}
population = newPop;
