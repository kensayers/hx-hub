export default {
  models: [
    {
      "symbolicID": "HD2_CompressorLAStudioComp",
      "mono": true,
      "stereo": true,
      "name": "LA Studio Comp",
      "category": 4,
      "load": 5.78,
      "load_stereo": 10.80,
      "params": [
        {
          "symbolicID": "PeakReduction",
          "name": "Peak Reduction",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.78
        },
        {
          "symbolicID": "Gain",
          "name": "Gain",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.62,
          "assign": 6
        },
        {
          "symbolicID": "Type",
          "name": "Type",
          "valueType": 2,
          "displayType": "comp_mode",
          "min": false,
          "max": true,
          "default": false
        },
        {
          "symbolicID": "Emphasis",
          "name": "Emphasis",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.09
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 1.0
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "volume",
          "min": -120.0,
          "max": 12.0,
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
      "symbolicID": "HD2_CompressorDeluxeComp",
      "mono": true,
      "stereo": true,
      "name": "Deluxe Comp",
      "category": 4,
      "load": 1.75,
      "load_stereo": 2.97,
      "params": [
        {
          "symbolicID": "Threshold",
          "name": "Threshold",
          "valueType": 1,
          "displayType": "volume",
          "min": -60.0,
          "max": 0.0,
          "default": -37.1,
          "assign": 1
        },
        {
          "symbolicID": "Ratio",
          "name": "Ratio",
          "valueType": 0,
          "displayType": "comp_ratio",
          "min": 0,
          "max": 5,
          "default": 3
        },
        {
          "symbolicID": "Attack",
          "name": "Attack",
          "valueType": 1,
          "displayType": "comp_attack",
          "min": 0.0001,
          "max": 0.2,
          "default": 0.038,
          "assign": 3
        },
        {
          "symbolicID": "Release",
          "name": "Release",
          "valueType": 1,
          "displayType": "comp_release",
          "min": 0.05,
          "max": 2.5,
          "default": 0.2
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 1.0
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "volume",
          "min": -60.0,
          "max": 36.0,
          "default": 7.0,
          "assign": 4
        },
        {
          "symbolicID": "Knee",
          "name": "Knee",
          "valueType": 1,
          "displayType": "volume",
          "min": 0.0,
          "max": 20.0,
          "default": 6.0
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
      "symbolicID": "HD2_CompressorRedSqueeze",
      "mono": true,
      "stereo": true,
      "name": "Red Squeeze",
      "category": 4,
      "load": 8.97,
      "load_stereo": 12.23,
      "params": [
        {
          "symbolicID": "Sensitivity",
          "name": "Sensitivity",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.44,
          "assign": 5
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 1.0
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "volume",
          "min": -60.0,
          "max": 12.0,
          "default": 5.4,
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
      "symbolicID": "HD2_Compressor3BandComp",
      "mono": true,
      "stereo": true,
      "name": "3-Band Comp",
      "category": 4,
      "load": 4.00,
      "load_stereo": 8.00,
      "params": [
        {
          "symbolicID": "Ratio",
          "name": "Ratio",
          "valueType": 0,
          "displayType": "comp_ratio_3band",
          "min": 0,
          "max": 6,
          "default": 2
        },
        {
          "symbolicID": "Attack",
          "name": "Attack",
          "valueType": 1,
          "displayType": "comp_attack",
          "min": 0.0001,
          "max": 0.2,
          "default": 0.035,
          "assign": 3
        },
        {
          "symbolicID": "Release",
          "name": "Release",
          "valueType": 1,
          "displayType": "comp_release",
          "min": 0.05,
          "max": 2.50,
          "default": 0.2
        },
        {
          "symbolicID": "Lo X Freq",
          "name": "Lo X Freq",
          "valueType": 1,
          "displayType": "frequency",
          "min": 20.0,
          "max": 1000.0,
          "default": 400.0
        },
        {
          "symbolicID": "Hi X Freq",
          "name": "Hi X Freq",
          "valueType": 1,
          "displayType": "frequency",
          "min": 1000.0,
          "max": 20000.0,
          "default": 3000.0
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "volume",
          "min": -120.0,
          "max": 36.0,
          "default": 2.0,
          "assign": 4
        },
        {
          "symbolicID": "Lo Thresh",
          "name": "Lo Thresh",
          "valueType": 1,
          "displayType": "volume",
          "min": -80.0,
          "max": 0.0,
          "default": -40.0
        },
        {
          "symbolicID": "Lo Gain",
          "name": "Lo Gain",
          "valueType": 1,
          "displayType": "volume",
          "min": -60.0,
          "max": 30.0,
          "default": 3.5
        },
        {
          "symbolicID": "Mid Thresh",
          "name": "Mid Thresh",
          "valueType": 1,
          "displayType": "volume",
          "min": -80.0,
          "max": 0.0,
          "default": -35.0
        },
        {
          "symbolicID": "Mid Gain",
          "name": "Mid Gain",
          "valueType": 1,
          "displayType": "volume",
          "min": -60.0,
          "max": 30.0,
          "default": 4.0
        },
        {
          "symbolicID": "Hi Thresh",
          "name": "Hi Thresh",
          "valueType": 1,
          "displayType": "volume",
          "min": -80.0,
          "max": 0.0,
          "default": -50.0
        },
        {
          "symbolicID": "Hi Gain",
          "name": "Hi Gain",
          "valueType": 1,
          "displayType": "volume",
          "min": -60.0,
          "max": 30.0,
          "default": -2.0
        },
        {
          "symbolicID": "Detector",
          "name": "Detector",
          "valueType": 2,
          "displayType": "detector",
          "min": false,
          "max": true,
          "default": true,
          "stereo-only": true
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
      "symbolicID": "HD2_CompressorAutoSwell",
      "mono": true,
      "stereo": true,
      "name": "Autoswell",
      "category": 4,
      "load": 1.80,
      "load_stereo": 2.15,
      "params": [
        {
          "symbolicID": "Threshold",
          "name": "Threshold",
          "valueType": 1,
          "displayType": "volume",
          "min": -100.0,
          "max": 0.0,
          "default": -70.0,
          "assign": 1
        },
        {
          "symbolicID": "Rel Offset",
          "name": "Rel Offset",
          "valueType": 1,
          "displayType": "volume",
          "min": -40.0,
          "max": 40.0,
          "default": 5.0
        },
        {
          "symbolicID": "Attack",
          "name": "Attack",
          "valueType": 1,
          "displayType": "time_ms",
          "min": 0.1,
          "max": 5.0,
          "default": 0.4,
          "assign": 3
        },
        {
          "symbolicID": "Decay",
          "name": "Decay",
          "valueType": 1,
          "displayType": "time_ms",
          "min": 0.001,
          "max": 5.0,
          "default": 0.015,
          "assign": 2
        },
        {
          "symbolicID": "Taper",
          "name": "Taper",
          "valueType": 2,
          "displayType": "volume_curve",
          "min": false,
          "max": true,
          "default": true
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "volume",
          "min": -60.0,
          "max": 36.0,
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
      "symbolicID": "HD2_CompressorKinkyComp",
      "mono": true,
      "stereo": true,
      "name": "Kinky Comp",
      "category": 4,
      "load": 5.35,
      "load_stereo": 10.10,
      "devices": [
        {
          "id": 2162944
        },
        {
          "id": 2162945
        },
        {
          "id": 2162693
        },
        {
          "id": 2162694
        },
        {
          "id": 2162689,
          "version": "0x02210100"
        },
        {
          "id": 2162690,
          "version": "0x02210100"
        },
        {
          "id": 2162692,
          "version": "0x02210100"
        }
      ],
      "params": [
        {
          "symbolicID": "Sensitivity",
          "name": "Sensitivity",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5,
          "assign": 5
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 1.0
        },
        {
          "symbolicID": "Attack",
          "name": "Attack",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.0
        },
        {
          "symbolicID": "Release",
          "name": "Release",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 1.0
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5,
          "assign": 6
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
      "symbolicID": "HD2_DM4TubeComp",
      "name": "Tube Comp",
      "load": 3.3,
      "category": 4,
      "devices": [
        {
          "id": 2162944
        },
        {
          "id": 2162945
        },
        {
          "id": 2162693
        },
        {
          "id": 2162694
        },
        {
          "id": 2162689,
          "version": "0x02300100"
        },
        {
          "id": 2162690,
          "version": "0x02300100"
        },
        {
          "id": 2162692,
          "version": "0x02300100"
        }
      ],
      "params": [
        {
          "symbolicID": "Thresh",
          "name": "Threshold",
          "valueType": 1,
          "displayType": "raw_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5,
          "assign": 5
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "raw_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.19,
          "assign": 6
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
      "symbolicID": "HD2_DM4RedComp",
      "name": "Red Comp",
      "load": 3.4,
      "category": 4,
      "devices": [
        {
          "id": 2162944
        },
        {
          "id": 2162945
        },
        {
          "id": 2162693
        },
        {
          "id": 2162694
        },
        {
          "id": 2162689,
          "version": "0x02300100"
        },
        {
          "id": 2162690,
          "version": "0x02300100"
        },
        {
          "id": 2162692,
          "version": "0x02300100"
        }
      ],
      "params": [
        {
          "symbolicID": "Sustain",
          "name": "Sustain",
          "valueType": 1,
          "displayType": "raw_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5,
          "assign": 5
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "raw_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.71,
          "assign": 6
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
      "symbolicID": "HD2_DM4BlueComp",
      "name": "Blue Comp",
      "load": 3.4,
      "category": 4,
      "devices": [
        {
          "id": 2162944
        },
        {
          "id": 2162945
        },
        {
          "id": 2162693
        },
        {
          "id": 2162694
        },
        {
          "id": 2162689,
          "version": "0x02300100"
        },
        {
          "id": 2162690,
          "version": "0x02300100"
        },
        {
          "id": 2162692,
          "version": "0x02300100"
        }
      ],
      "params": [
        {
          "symbolicID": "Sustain",
          "name": "Sustain",
          "valueType": 1,
          "displayType": "raw_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5,
          "assign": 5
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "raw_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.92,
          "assign": 6
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
      "symbolicID": "HD2_DM4BlueCompTreb",
      "name": "Blue Comp Treb",
      "load": 3.4,
      "category": 4,
      "devices": [
        {
          "id": 2162944
        },
        {
          "id": 2162945
        },
        {
          "id": 2162693
        },
        {
          "id": 2162694
        },
        {
          "id": 2162689,
          "version": "0x02300100"
        },
        {
          "id": 2162690,
          "version": "0x02300100"
        },
        {
          "id": 2162692,
          "version": "0x02300100"
        }
      ],
      "params": [
        {
          "symbolicID": "Sustain",
          "name": "Sustain",
          "valueType": 1,
          "displayType": "raw_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5,
          "assign": 5
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "raw_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.61,
          "assign": 6
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
      "symbolicID": "HD2_DM4VettaComp",
      "name": "Vetta Comp",
      "load": 3.3,
      "category": 4,
      "devices": [
        {
          "id": 2162944
        },
        {
          "id": 2162945
        },
        {
          "id": 2162693
        },
        {
          "id": 2162694
        },
        {
          "id": 2162689,
          "version": "0x02300100"
        },
        {
          "id": 2162690,
          "version": "0x02300100"
        },
        {
          "id": 2162692,
          "version": "0x02300100"
        }
      ],
      "params": [
        {
          "symbolicID": "Sens",
          "name": "Sensitivity",
          "valueType": 1,
          "displayType": "raw_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5,
          "assign": 5
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "raw_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.73,
          "assign": 6
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
      "symbolicID": "HD2_DM4VettaJuice",
      "name": "Vetta Juice",
      "load": 3.3,
      "category": 4,
      "devices": [
        {
          "id": 2162944
        },
        {
          "id": 2162945
        },
        {
          "id": 2162693
        },
        {
          "id": 2162694
        },
        {
          "id": 2162689,
          "version": "0x02300100"
        },
        {
          "id": 2162690,
          "version": "0x02300100"
        },
        {
          "id": 2162692,
          "version": "0x02300100"
        }
      ],
      "params": [
        {
          "symbolicID": "Amount",
          "name": "Amount",
          "valueType": 1,
          "displayType": "raw_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5,
          "assign": 5
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "raw_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5,
          "assign": 6
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
      "symbolicID": "HD2_DM4BoostComp",
      "name": "Boost Comp",
      "load": 6.0,
      "category": 4,
      "devices": [
        {
          "id": 2162944
        },
        {
          "id": 2162945
        },
        {
          "id": 2162693
        },
        {
          "id": 2162694
        },
        {
          "id": 2162689,
          "version": "0x02300100"
        },
        {
          "id": 2162690,
          "version": "0x02300100"
        },
        {
          "id": 2162692,
          "version": "0x02300100"
        }
      ],
      "params": [
        {
          "symbolicID": "Drive",
          "name": "Drive",
          "valueType": 1,
          "displayType": "raw_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.7
        },
        {
          "symbolicID": "Bass",
          "name": "Bass",
          "valueType": 1,
          "displayType": "raw_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5
        },
        {
          "symbolicID": "Comp",
          "name": "Compression",
          "valueType": 1,
          "displayType": "raw_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.31,
          "assign": 5
        },
        {
          "symbolicID": "Treble",
          "name": "Treble",
          "valueType": 1,
          "displayType": "raw_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5
        },
        {
          "symbolicID": "Output",
          "name": "Output",
          "valueType": 1,
          "displayType": "raw_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.58,
          "assign": 6
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
        }
      ]
    }
  ]
}
        
      
      