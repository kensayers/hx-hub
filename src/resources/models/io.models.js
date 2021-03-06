export default {
  models: [
    {
      "symbolicID": "HD2_AppDSPFlow1Input",
      "name": "Input",
      "load": 10.99,
      "devices": [
        {
          "id": 2162944
        },
        {
          "id": 2162945
        },
        {
          "id": 2162689
        },
        {
          "id": 2162690
        },
        {
          "id": 2162692
        }
      ],
      "params": [
        {
          "symbolicID": "@input",
          "name": "Input From",
          "valueType": 0,
          "displayType": "input_type",
          "min": 0,
          "max": 16,
          "default": 1
        },
        {
          "symbolicID": "noiseGate",
          "name": "Input Gate",
          "valueType": 2,
          "displayType": "off_on",
          "min": false,
          "max": true,
          "default": false
        },
        {
          "symbolicID": "threshold",
          "name": "Threshold",
          "valueType": 1,
          "displayType": "volume",
          "min": -96.0,
          "max": 0.0,
          "default": -48.0
        },
        {
          "symbolicID": "decay",
          "name": "Decay",
          "valueType": 1,
          "displayType": "time_ms_input",
          "min": 0.01,
          "max": 1.0,
          "default": 0.5
        }
      ]
    },
    {
      "symbolicID": "HD2_AppDSPFlow2Input",
      "name": "Input",
      "load": 10.99,
      "devices": [
        {
          "id": 2162944
        },
        {
          "id": 2162945
        },
        {
          "id": 2162689
        },
        {
          "id": 2162690
        },
        {
          "id": 2162692
        }
      ],
      "params": [
        {
          "symbolicID": "@input",
          "name": "Input From",
          "valueType": 0,
          "displayType": "input_type",
          "min": 0,
          "max": 16,
          "default": 0
        },
        {
          "symbolicID": "noiseGate",
          "name": "Input Gate",
          "valueType": 2,
          "displayType": "off_on",
          "min": false,
          "max": true,
          "default": false
        },
        {
          "symbolicID": "threshold",
          "name": "Threshold",
          "valueType": 1,
          "displayType": "volume",
          "min": -96.0,
          "max": 0.0,
          "default": -48.0
        },
        {
          "symbolicID": "decay",
          "name": "Decay",
          "valueType": 1,
          "displayType": "time_ms_input",
          "min": 0.01,
          "max": 1.0,
          "default": 0.5
        }
      ]
    },
    {
      "symbolicID": "HD2_AppDSPFlowOutput",
      "name": "Output",
      "load": 8.00,
      "devices": [
        {
          "id": 2162944
        },
        {
          "id": 2162945
        },
        {
          "id": 2162689
        },
        {
          "id": 2162690
        },
        {
          "id": 2162692
        }
      ],
      "params": [
        {
          "symbolicID": "pan",
          "name": "Pan",
          "valueType": 1,
          "displayType": "pan",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5
        },
        {
          "symbolicID": "gain",
          "name": "Level",
          "valueType": 1,
          "displayType": "volume",
          "min": -120.0,
          "max": 20.0,
          "default": 0.0
        },
        {
          "symbolicID": "@output",
          "name": "Output To",
          "valueType": 0,
          "displayType": "output_type",
          "min": 0,
          "max": 12,
          "default": 1
        }
      ]
    },
    {
      "symbolicID": "HD2_AppDSPFlowSplitAB",
      "name": "Split A/B",
      "load": 1.50,
      "params": [
        {
          "symbolicID": "RouteTo",
          "name": "Route To",
          "valueType": 1,
          "displayType": "split_ab_route_to",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5
        },
        {
          "symbolicID": "bypass",
          "name": "bypass",
          "valueType": 2,
          "displayType": "off_on",
          "min": false,
          "max": true,
          "default": false
        },
        {
          "symbolicID": "@enabled",
          "name": "Enabled",
          "valueType": 2,
          "min": false,
          "max": true,
          "default": true
        }
      ]
    },
    {
      "symbolicID": "HD2_AppDSPFlowSplitXOver",
      "name": "Split Crossover",
      "load": 2.27,
      "params": [
        {
          "symbolicID": "Frequency",
          "name": "Frequency",
          "valueType": 1,
          "displayType": "frequency",
          "min": 25.0,
          "max": 15000.0,
          "default": 500.0
        },
        {
          "symbolicID": "Reverse",
          "name": "Reverse",
          "valueType": 2,
          "displayType": "off_on",
          "min": false,
          "max": true,
          "default": false
        },
        {
          "symbolicID": "bypass",
          "name": "bypass",
          "valueType": 2,
          "displayType": "off_on",
          "min": false,
          "max": true,
          "default": false
        },
        {
          "symbolicID": "@enabled",
          "name": "Enabled",
          "valueType": 2,
          "min": false,
          "max": true,
          "default": true
        }
      ]
    },
    {
      "symbolicID": "HD2_AppDSPFlowSplitY",
      "name": "Split Y",
      "load": 1.50,
      "params": [
        {
          "symbolicID": "BalanceA",
          "name": "Balance A",
          "valueType": 1,
          "displayType": "split_balance",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5
        },
        {
          "symbolicID": "BalanceB",
          "name": "Balance B",
          "valueType": 1,
          "displayType": "split_balance",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5
        },
        {
          "symbolicID": "bypass",
          "name": "bypass",
          "valueType": 2,
          "displayType": "off_on",
          "min": false,
          "max": true,
          "default": false
        },
        {
          "symbolicID": "@enabled",
          "name": "Enabled",
          "valueType": 2,
          "min": false,
          "max": true,
          "default": true
        }
      ]
    },
    {
      "symbolicID": "HD2_AppDSPFlowJoin",
      "name": "Mixer",
      "load": 10.99,
      "params": [
        {
          "symbolicID": "A Level",
          "name": "A Level",
          "valueType": 1,
          "displayType": "volume",
          "min": -60.0,
          "max": 12.0,
          "default": 0.0
        },
        {
          "symbolicID": "A Pan",
          "name": "A Pan",
          "valueType": 1,
          "displayType": "pan",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5
        },
        {
          "symbolicID": "B Level",
          "name": "B Level",
          "valueType": 1,
          "displayType": "volume",
          "min": -60.0,
          "max": 12.0,
          "default": 0.0
        },
        {
          "symbolicID": "B Pan",
          "name": "B Pan",
          "valueType": 1,
          "displayType": "pan",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5
        },
        {
          "symbolicID": "B Polarity",
          "name": "B Polarity",
          "valueType": 2,
          "displayType": "preamp_polarity",
          "min": false,
          "max": true,
          "default": false
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "volume",
          "min": -60.0,
          "max": 12.0,
          "default": 0.0
        },
        {
          "symbolicID": "@enabled",
          "name": "Enabled",
          "valueType": 2,
          "min": false,
          "max": true,
          "default": true
        }
      ]
    },
    {
      "symbolicID": "HelixPlugin_AppDSPFlow1Input",
      "name": "Input",
      "load": 10.99,
      "devices": [
        {
          "id": 2162944
        },
        {
          "id": 2162945
        }
      ],
      "params": [
        {
          "symbolicID": "@input",
          "name": "Input From",
          "valueType": 0,
          "displayType": "input_type_native",
          "min": 0,
          "max": 1,
          "default": 1
        },
        {
          "symbolicID": "noiseGate",
          "name": "Input Gate",
          "valueType": 2,
          "displayType": "off_on",
          "min": false,
          "max": true,
          "default": false
        },
        {
          "symbolicID": "threshold",
          "name": "Threshold",
          "valueType": 1,
          "displayType": "volume",
          "min": -96.0,
          "max": 0.0,
          "default": -48.0
        },
        {
          "symbolicID": "decay",
          "name": "Decay",
          "valueType": 1,
          "displayType": "time_ms_input",
          "min": 0.01,
          "max": 1.0,
          "default": 0.5
        }
      ]
    },
    {
      "symbolicID": "HelixPlugin_AppDSPFlowOutput",
      "name": "Output",
      "load": 8.00,
      "devices": [
        {
          "id": 2162944
        },
        {
          "id": 2162945
        }
      ],
      "params": [
        {
          "symbolicID": "pan",
          "name": "Pan",
          "valueType": 1,
          "displayType": "pan",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5
        },
        {
          "symbolicID": "gain",
          "name": "Level",
          "valueType": 1,
          "displayType": "volume",
          "min": -120.0,
          "max": 20.0,
          "default": 0.0
        },
        {
          "symbolicID": "@output",
          "name": "Output To",
          "valueType": 0,
          "displayType": "output_type_native",
          "min": 0,
          "max": 4,
          "default": 1
        }
      ]
    },
    {
      "symbolicID": "HelixFx_AppDSPFlowInput",
      "name": "Input",
      "load": 10.99,
      "devices": [
        {
          "id": 2162693
        }
      ],
      "params": [
        {
          "symbolicID": "@input",
          "name": "Input From",
          "valueType": 0,
          "min": 0,
          "max": 99,
          "default": 1
        }
      ]
    },
    {
      "symbolicID": "HelixFx_AppDSPFlowOutput",
      "name": "Output",
      "load": 8.00,
      "devices": [
        {
          "id": 2162693
        }
      ],
      "params": [
        {
          "symbolicID": "pan",
          "name": "Pan",
          "valueType": 1,
          "displayType": "pan",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5
        },
        {
          "symbolicID": "gain",
          "name": "Level",
          "valueType": 1,
          "displayType": "volume",
          "min": -120.0,
          "max": 20.0,
          "default": 0.0
        },
        {
          "symbolicID": "@output",
          "name": "Output To",
          "valueType": 0,
          "min": 0,
          "max": 99,
          "default": 1
        }
      ]
    },
    {
      "symbolicID": "HelixStomp_AppDSPFlowInput",
      "name": "Input",
      "load": 10.99,
      "devices": [
        {
          "id": 2162694
        }
      ],
      "params": [
        {
          "symbolicID": "@input",
          "name": "Input From",
          "valueType": 0,
          "displayType": "input_type",
          "min": 0,
          "max": 16,
          "default": 1
        },
        {
          "symbolicID": "noiseGate",
          "name": "Input Gate",
          "valueType": 2,
          "displayType": "off_on",
          "min": false,
          "max": true,
          "default": false
        },
        {
          "symbolicID": "threshold",
          "name": "Threshold",
          "valueType": 1,
          "displayType": "volume",
          "min": -96.0,
          "max": 0.0,
          "default": -48.0
        },
        {
          "symbolicID": "decay",
          "name": "Decay",
          "valueType": 1,
          "displayType": "time_ms_input",
          "min": 0.01,
          "max": 1.0,
          "default": 0.5
        }
      ]
    },
    {
      "symbolicID": "HelixStomp_AppDSPFlowOutputMain",
      "name": "Output",
      "load": 8.00,
      "devices": [
        {
          "id": 2162694
        }
      ],
      "params": [
        {
          "symbolicID": "pan",
          "name": "Pan",
          "valueType": 1,
          "displayType": "pan",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5
        },
        {
          "symbolicID": "gain",
          "name": "Level",
          "valueType": 1,
          "displayType": "volume",
          "min": -120.0,
          "max": 20.0,
          "default": 0.0
        },
        {
          "symbolicID": "@output",
          "name": "Output To",
          "valueType": 0,
          "displayType": "output_type",
          "min": 0,
          "max": 12,
          "default": 1
        }
      ]
    },
    {
      "symbolicID": "HelixStomp_AppDSPFlowOutputSend",
      "name": "Output",
      "load": 8.00,
      "devices": [
        {
          "id": 2162694
        }
      ],
      "params": [
        {
          "symbolicID": "pan",
          "name": "Pan",
          "valueType": 1,
          "displayType": "pan",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5
        },
        {
          "symbolicID": "gain",
          "name": "Level",
          "valueType": 1,
          "displayType": "volume",
          "min": -120.0,
          "max": 20.0,
          "default": 0.0
        },
        {
          "symbolicID": "Type",
          "name": "Type",
          "valueType": 2,
          "displayType": "stereo_mode",
          "min": false,
          "max": true,
          "default": true
        },
        {
          "symbolicID": "@output",
          "name": "Output To",
          "valueType": 0,
          "displayType": "output_type",
          "min": 0,
          "max": 12,
          "default": 1
        }
      ]
    }
  ]
}