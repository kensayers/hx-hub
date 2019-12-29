export default {
  models: [
    {
      "symbolicID": "HD2_EQGraphic10Band",
      "mono": true,
      "stereo": true,
      "name": "10 Band Graphic",
      "category": 14,
      "load": 1.82,
      "load_stereo": 2.66,
      "params": [
        {
          "symbolicID": "31p25Hz",
          "name": "31.25Hz",
          "valueType": 1,
          "displayType": "volume_eq",
          "min": -15.0,
          "max": 15.0,
          "default": 0.0
        },
        {
          "symbolicID": "62p5Hz",
          "name": "62.5Hz",
          "valueType": 1,
          "displayType": "volume_eq",
          "min": -15.0,
          "max": 15.0,
          "default": 0.0
        },
        {
          "symbolicID": "125Hz",
          "name": "125Hz",
          "valueType": 1,
          "displayType": "volume_eq",
          "min": -15.0,
          "max": 15.0,
          "default": 0.0
        },
        {
          "symbolicID": "250Hz",
          "name": "250Hz",
          "valueType": 1,
          "displayType": "volume_eq",
          "min": -15.0,
          "max": 15.0,
          "default": 0.0
        },
        {
          "symbolicID": "500Hz",
          "name": "500Hz",
          "valueType": 1,
          "displayType": "volume_eq",
          "min": -15.0,
          "max": 15.0,
          "default": 0.0
        },
        {
          "symbolicID": "1kHz",
          "name": "1kHz",
          "valueType": 1,
          "displayType": "volume_eq",
          "min": -15.0,
          "max": 15.0,
          "default": 0.0
        },
        {
          "symbolicID": "2kHz",
          "name": "2kHz",
          "valueType": 1,
          "displayType": "volume_eq",
          "min": -15.0,
          "max": 15.0,
          "default": 0.0
        },
        {
          "symbolicID": "4kHz",
          "name": "4kHz",
          "valueType": 1,
          "displayType": "volume_eq",
          "min": -15.0,
          "max": 15.0,
          "default": 0.0
        },
        {
          "symbolicID": "8kHz",
          "name": "8kHz",
          "valueType": 1,
          "displayType": "volume_eq",
          "min": -15.0,
          "max": 15.0,
          "default": 0.0
        },
        {
          "symbolicID": "16kHz",
          "name": "16kHz",
          "valueType": 1,
          "displayType": "volume_eq",
          "min": -15.0,
          "max": 15.0,
          "default": 0.0
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "volume_eq",
          "min": -15.0,
          "max": 15.0,
          "default": 0.0,
          "assign": 2
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
      "symbolicID": "HD2_EQParametric",
      "mono": true,
      "stereo": true,
      "name": "Parametric",
      "category": 14,
      "load": 2.44,
      "load_stereo": 2.52,
      "params": [
        {
          "symbolicID": "LowFreq",
          "name": "Low Freq",
          "valueType": 1,
          "displayType": "frequency",
          "min": 20.0,
          "max": 495.0,
          "default": 110.0,
          "assign": 3
        },
        {
          "symbolicID": "LowQ",
          "name": "Low Q",
          "valueType": 1,
          "displayType": "q_knob",
          "min": 0.1,
          "max": 10.0,
          "default": 0.707
        },
        {
          "symbolicID": "LowGain",
          "name": "Low Gain",
          "valueType": 1,
          "displayType": "volume",
          "min": -12.0,
          "max": 12.0,
          "default": 0.0
        },
        {
          "symbolicID": "MidFreq",
          "name": "Mid Freq",
          "valueType": 1,
          "displayType": "frequency",
          "min": 125.0,
          "max": 8000.0,
          "default": 2000.0,
          "assign": 1
        },
        {
          "symbolicID": "MidQ",
          "name": "Mid Q",
          "valueType": 1,
          "displayType": "q_knob",
          "min": 0.1,
          "max": 10.0,
          "default": 0.707
        },
        {
          "symbolicID": "MidGain",
          "name": "Mid Gain",
          "valueType": 1,
          "displayType": "volume",
          "min": -12.0,
          "max": 12.0,
          "default": 0.0
        },
        {
          "symbolicID": "HighFreq",
          "name": "High Freq",
          "valueType": 1,
          "displayType": "frequency",
          "min": 500.0,
          "max": 18000.0,
          "default": 8000.0,
          "assign": 4
        },
        {
          "symbolicID": "HighQ",
          "name": "High Q",
          "valueType": 1,
          "displayType": "q_knob",
          "min": 0.1,
          "max": 10.0,
          "default": 0.707
        },
        {
          "symbolicID": "HighGain",
          "name": "High Gain",
          "valueType": 1,
          "displayType": "volume",
          "min": -12.0,
          "max": 12.0,
          "default": 0.0
        },
        {
          "symbolicID": "LowCut",
          "name": "Low Cut",
          "valueType": 1,
          "displayType": "eq_low_cut",
          "min": 19.9,
          "max": 1000.0,
          "default": 19.9
        },
        {
          "symbolicID": "HighCut",
          "name": "High Cut",
          "valueType": 1,
          "displayType": "eq_high_cut",
          "min": 1000.0,
          "max": 20100.0,
          "default": 20100.0
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "volume",
          "min": -60.0,
          "max": 12.0,
          "default": 0.0,
          "assign": 2
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
      "symbolicID": "HD2_EQLowCutHighCut",
      "mono": true,
      "stereo": true,
      "name": "Low and High Cut",
      "category": 14,
      "load": 2.17,
      "load_stereo": 2.71,
      "params": [
        {
          "symbolicID": "LowCut",
          "name": "Low Cut",
          "valueType": 1,
          "displayType": "eq_low_cut",
          "min": 19.9,
          "max": 1000.0,
          "default": 19.9
        },
        {
          "symbolicID": "HighCut",
          "name": "High Cut",
          "valueType": 1,
          "displayType": "eq_high_cut",
          "min": 1000.0,
          "max": 20100.0,
          "default": 20100.0
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "volume",
          "min": -60.0,
          "max": 6.0,
          "default": 0.0,
          "assign": 2
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
      "symbolicID": "HD2_EQSimple3Band",
      "mono": true,
      "stereo": true,
      "name": "Simple EQ",
      "category": 14,
      "load": 1.28,
      "load_stereo": 1.63,
      "params": [
        {
          "symbolicID": "LowGain",
          "name": "Low Gain",
          "valueType": 1,
          "displayType": "volume",
          "min": -12.0,
          "max": 12.0,
          "default": 0.0
        },
        {
          "symbolicID": "MidFreq",
          "name": "Mid Freq",
          "valueType": 1,
          "displayType": "frequency",
          "min": 125.0,
          "max": 4000.0,
          "default": 600.0,
          "assign": 1
        },
        {
          "symbolicID": "MidGain",
          "name": "Mid Gain",
          "valueType": 1,
          "displayType": "volume",
          "min": -12.0,
          "max": 12.0,
          "default": 0.0
        },
        {
          "symbolicID": "HighGain",
          "name": "High Gain",
          "valueType": 1,
          "displayType": "volume",
          "min": -12.0,
          "max": 12.0,
          "default": 0.0
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "volume",
          "min": -60.0,
          "max": 12.0,
          "default": 0.0,
          "assign": 2
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
      "symbolicID": "HD2_CaliQ",
      "mono": true,
      "stereo": true,
      "name": "Cali Q Graphic",
      "category": 14,
      "load": 2.13,
      "load_stereo": 2.99,
      "params": [
        {
          "symbolicID": "80Hz",
          "name": "80Hz",
          "valueType": 1,
          "displayType": "volume_eq",
          "min": -13.8,
          "max": 13.2,
          "default": 0.0
        },
        {
          "symbolicID": "240Hz",
          "name": "240Hz",
          "valueType": 1,
          "displayType": "volume_eq",
          "min": -13.3,
          "max": 13.2,
          "default": 0.0
        },
        {
          "symbolicID": "750Hz",
          "name": "750Hz",
          "valueType": 1,
          "displayType": "volume_eq",
          "min": -13.3,
          "max": 13.2,
          "default": 0.0
        },
        {
          "symbolicID": "2200Hz",
          "name": "2200Hz",
          "valueType": 1,
          "displayType": "volume_eq",
          "min": -9.6,
          "max": 9.6,
          "default": 0.0
        },
        {
          "symbolicID": "6600Hz",
          "name": "6600Hz",
          "valueType": 1,
          "displayType": "volume_eq",
          "min": -9.6,
          "max": 9.6,
          "default": 0.0
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "volume_eq",
          "min": -15.0,
          "max": 15.0,
          "default": 0.0,
          "assign": 2
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
      "symbolicID": "HD2_EQLowShelfHighShelf",
      "name": "Low/High Shelf",
      "mono": true,
      "stereo": true,
      "category": 14,
      "load": 2.00,
      "load_stereo": 2.25,
      "devices": [
        {
          "id": 2162944
        },
        {
          "id": 2162945
        },
        {
          "id": 2162694,
          "version": "0x02790000"
        },
        {
          "id": 2162693,
          "version": "0x02790000"
        },
        {
          "id": 2162689,
          "version": "0x02790000"
        },
        {
          "id": 2162690,
          "version": "0x02790000"
        },
        {
          "id": 2162692,
          "version": "0x02790000"
        }
      ],
      "params": [
        {
          "symbolicID": "LowGain",
          "name": "Low Gain",
          "valueType": 1,
          "displayType": "volume",
          "min": -12.0,
          "max": 12.0,
          "default": 0.0
        },
        {
          "symbolicID": "LowFreq",
          "name": "Low Freq",
          "valueType": 1,
          "displayType": "frequency",
          "min": 20.0,
          "max": 2000.0,
          "default": 300.0,
          "assign": 3
        },
        {
          "symbolicID": "HighGain",
          "name": "High Gain",
          "valueType": 1,
          "displayType": "volume",
          "min": -12.0,
          "max": 12.0,
          "default": 0.0
        },
        {
          "symbolicID": "HighFreq",
          "name": "High Freq",
          "valueType": 1,
          "displayType": "frequency",
          "min": 2000.0,
          "max": 15000.0,
          "default": 3000.0,
          "assign": 4
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "volume",
          "min": -60.0,
          "max": 12.0,
          "default": 0.0,
          "assign": 2
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
      "symbolicID": "HD2_EQSimpleTilt",
      "name": "Simple Tilt",
      "mono": true,
      "stereo": true,
      "category": 14,
      "load": 2.00,
      "load_stereo": 2.25,
      "devices": [
        {
          "id": 2162944
        },
        {
          "id": 2162945
        },
        {
          "id": 2162694,
          "version": "0x02790000"
        },
        {
          "id": 2162693,
          "version": "0x02790000"
        },
        {
          "id": 2162689,
          "version": "0x02790000"
        },
        {
          "id": 2162690,
          "version": "0x02790000"
        },
        {
          "id": 2162692,
          "version": "0x02790000"
        }
      ],
      "params": [
        {
          "symbolicID": "Tilt",
          "name": "Tilt",
          "valueType": 1,
          "displayType": "tilt",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5
        },
        {
          "symbolicID": "CenterFreq",
          "name": "Center Freq",
          "valueType": 1,
          "displayType": "frequency",
          "min": 100.0,
          "max": 5000.0,
          "default": 1000.0,
          "assign": 1
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "volume",
          "min": -60.0,
          "max": 12.0,
          "default": 0.0,
          "assign": 2
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