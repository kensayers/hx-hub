export default {
  models: [
    {
      "symbolicID": "HD2_GateNoiseGate",
      "mono": true,
      "stereo": true,
      "name": "Noise Gate",
      "category": 4,
      "load": 2.90,
      "load_stereo": 1.62,
      "params": [
        {
          "symbolicID": "Threshold",
          "name": "Threshold",
          "valueType": 1,
          "displayType": "volume",
          "min": -96.0,
          "max": 0.0,
          "default": -48.0,
          "assign": 1
        },
        {
          "symbolicID": "Decay",
          "name": "Decay",
          "valueType": 1,
          "displayType": "comp_decay_10_1000",
          "min": 0.01,
          "max": 1.0,
          "default": 0.5,
          "assign": 2
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "volume",
          "min": -60.0,
          "max": 6.0,
          "default": 0.0,
          "assign": 4
        },
        {
          "symbolicID": "@enabled",
          "name": "Enabled",
          "valueType": 2,
          "min": false,
          "max": true,
          "default": true
        },
        {
          "symbolicID": "@stereo",
          "name": "Stereo",
          "valueType": 2,
          "min": false,
          "max": true,
          "default": false
        }
      ]
    },
    {
      "symbolicID": "HD2_GateHardGate",
      "mono": true,
      "stereo": true,
      "name": "Hard Gate",
      "category": 4,
      "load": 1.16,
      "load_stereo": 2.18,
      "params": [
        {
          "symbolicID": "OpenThreshold",
          "name": "Open Threshold",
          "valueType": 1,
          "displayType": "volume",
          "min": -96.0,
          "max": 0.0,
          "default": -50.0,
          "assign": 1
        },
        {
          "symbolicID": "CloseThreshold",
          "name": "Close Threshold",
          "valueType": 1,
          "displayType": "volume",
          "min": -96.0,
          "max": 0.0,
          "default": -60.0
        },
        {
          "symbolicID": "HoldTime",
          "name": "Hold Time",
          "valueType": 1,
          "displayType": "comp_hold_time",
          "min": 0.01,
          "max": 0.8,
          "default": 0.01
        },
        {
          "symbolicID": "Decay",
          "name": "Decay",
          "valueType": 1,
          "displayType": "comp_decay_10_4000",
          "min": 0.01,
          "max": 4.0,
          "default": 0.01,
          "assign": 2
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "volume",
          "min": -60.0,
          "max": 6.0,
          "default": 0.0,
          "assign": 4
        },
        {
          "symbolicID": "@enabled",
          "name": "Enabled",
          "valueType": 2,
          "min": false,
          "max": true,
          "default": true
        },
        {
          "symbolicID": "@stereo",
          "name": "Stereo",
          "valueType": 2,
          "min": false,
          "max": true,
          "default": false
        }
      ]
    }
  ]
}