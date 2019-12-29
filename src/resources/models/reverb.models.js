export default {
  models: [
    {
      "symbolicID": "HD2_ReverbPlate",
      "mono": false,
      "stereo": true,
      "name": "Plate",
      "category": 10,
      "load_stereo": 7.93,
      "params": [
        {
          "symbolicID": "Decay",
          "name": "Decay",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.7
        },
        {
          "symbolicID": "Predelay",
          "name": "Predelay",
          "valueType": 1,
          "displayType": "time_ms_reverb",
          "min": 0.0,
          "max": 0.2,
          "default": 0.015
        },
        {
          "symbolicID": "LowCut",
          "name": "Low Cut",
          "valueType": 1,
          "displayType": "mod_low_cut",
          "min": 19.9,
          "max": 500.0,
          "default": 90.0
        },
        {
          "symbolicID": "HighCut",
          "name": "High Cut",
          "valueType": 1,
          "displayType": "mod_high_cut",
          "min": 500.0,
          "max": 20100.0,
          "default": 4570.0
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.3
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "volume",
          "min": -60.0,
          "max": 6.0,
          "default": 0.0
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
          "symbolicID": "@trails",
          "name": "Trails",
          "valueType": 2,
          "displayType": "off_on",
          "min": false,
          "max": true,
          "default": false
        }
      ]
    },
    {
      "symbolicID": "HD2_ReverbRoom",
      "mono": false,
      "stereo": true,
      "name": "Room",
      "category": 10,
      "load_stereo": 7.93,
      "params": [
        {
          "symbolicID": "Decay",
          "name": "Decay",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.45
        },
        {
          "symbolicID": "Predelay",
          "name": "Predelay",
          "valueType": 1,
          "displayType": "time_ms_reverb",
          "min": 0.0,
          "max": 0.2,
          "default": 0.011
        },
        {
          "symbolicID": "LowCut",
          "name": "Low Cut",
          "valueType": 1,
          "displayType": "mod_low_cut",
          "min": 19.9,
          "max": 500.0,
          "default": 117.0
        },
        {
          "symbolicID": "HighCut",
          "name": "High Cut",
          "valueType": 1,
          "displayType": "mod_high_cut",
          "min": 500.0,
          "max": 20100.0,
          "default": 3720.0
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.46
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "volume",
          "min": -60.0,
          "max": 6.0,
          "default": 0.0
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
          "symbolicID": "@trails",
          "name": "Trails",
          "valueType": 2,
          "displayType": "off_on",
          "min": false,
          "max": true,
          "default": false
        }
      ]
    },
    {
      "symbolicID": "HD2_ReverbHall",
      "mono": false,
      "stereo": true,
      "name": "Hall",
      "category": 10,
      "load_stereo": 7.93,
      "params": [
        {
          "symbolicID": "Decay",
          "name": "Decay",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.35
        },
        {
          "symbolicID": "Predelay",
          "name": "Predelay",
          "valueType": 1,
          "displayType": "time_ms_reverb",
          "min": 0.0,
          "max": 0.2,
          "default": 0.022
        },
        {
          "symbolicID": "LowCut",
          "name": "Low Cut",
          "valueType": 1,
          "displayType": "mod_low_cut",
          "min": 19.9,
          "max": 500.0,
          "default": 166.0
        },
        {
          "symbolicID": "HighCut",
          "name": "High Cut",
          "valueType": 1,
          "displayType": "mod_high_cut",
          "min": 500.0,
          "max": 20100.0,
          "default": 4300.0
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.32
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "volume",
          "min": -60.0,
          "max": 6.0,
          "default": 0.0
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
          "symbolicID": "@trails",
          "name": "Trails",
          "valueType": 2,
          "displayType": "off_on",
          "min": false,
          "max": true,
          "default": false
        }
      ]
    },
    {
      "symbolicID": "HD2_ReverbCave",
      "mono": false,
      "stereo": true,
      "name": "Cave",
      "category": 10,
      "load_stereo": 7.93,
      "params": [
        {
          "symbolicID": "Decay",
          "name": "Decay",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.82
        },
        {
          "symbolicID": "Predelay",
          "name": "Predelay",
          "valueType": 1,
          "displayType": "time_ms_reverb",
          "min": 0.0,
          "max": 0.2,
          "default": 0.05
        },
        {
          "symbolicID": "LowCut",
          "name": "Low Cut",
          "valueType": 1,
          "displayType": "mod_low_cut",
          "min": 19.9,
          "max": 500.0,
          "default": 59.0
        },
        {
          "symbolicID": "HighCut",
          "name": "High Cut",
          "valueType": 1,
          "displayType": "mod_high_cut",
          "min": 500.0,
          "max": 20100.0,
          "default": 9400.0
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.3
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "volume",
          "min": -60.0,
          "max": 6.0,
          "default": 0.0
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
          "symbolicID": "@trails",
          "name": "Trails",
          "valueType": 2,
          "displayType": "off_on",
          "min": false,
          "max": true,
          "default": false
        }
      ]
    },
    {
      "symbolicID": "HD2_Reverb63Spring",
      "mono": false,
      "stereo": true,
      "name": "'63 Spring",
      "category": 10,
      "load_stereo": 13.38,
      "params": [
        {
          "symbolicID": "Decay",
          "name": "Decay",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.56
        },
        {
          "symbolicID": "Predelay",
          "name": "Predelay",
          "valueType": 1,
          "displayType": "time_ms_reverb",
          "min": 0.0,
          "max": 0.2,
          "default": 0.0
        },
        {
          "symbolicID": "LowCut",
          "name": "Low Cut",
          "valueType": 1,
          "displayType": "mod_low_cut",
          "min": 19.9,
          "max": 500.0,
          "default": 87.0
        },
        {
          "symbolicID": "HighCut",
          "name": "High Cut",
          "valueType": 1,
          "displayType": "mod_high_cut",
          "min": 500.0,
          "max": 20100.0,
          "default": 3930.0
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.34
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "volume",
          "min": -60.0,
          "max": 6.0,
          "default": 0.0
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
          "symbolicID": "@trails",
          "name": "Trails",
          "valueType": 2,
          "displayType": "off_on",
          "min": false,
          "max": true,
          "default": false
        }
      ]
    },
    {
      "symbolicID": "HD2_ReverbOcto",
      "mono": false,
      "stereo": true,
      "name": "Octo",
      "category": 10,
      "load_stereo": 7.93,
      "params": [
        {
          "symbolicID": "Decay",
          "name": "Decay",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.72
        },
        {
          "symbolicID": "Intensity",
          "name": "Intensity",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.63
        },
        {
          "symbolicID": "LowCut",
          "name": "Low Cut",
          "valueType": 1,
          "displayType": "mod_low_cut",
          "min": 19.9,
          "max": 500.0,
          "default": 122.0
        },
        {
          "symbolicID": "HighCut",
          "name": "High Cut",
          "valueType": 1,
          "displayType": "mod_high_cut",
          "min": 86.0,
          "max": 20100.0,
          "default": 9760.0
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "volume",
          "min": -60.0,
          "max": 6.0,
          "default": 0.0
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
          "symbolicID": "@trails",
          "name": "Trails",
          "valueType": 2,
          "displayType": "off_on",
          "min": false,
          "max": true,
          "default": false
        }
      ]
    },
    {
      "symbolicID": "HD2_ReverbChamber",
      "mono": false,
      "stereo": true,
      "name": "Chamber",
      "category": 10,
      "load_stereo": 7.93,
      "params": [
        {
          "symbolicID": "Decay",
          "name": "Decay",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.66
        },
        {
          "symbolicID": "Predelay",
          "name": "Predelay",
          "valueType": 1,
          "displayType": "time_ms_reverb",
          "min": 0.0,
          "max": 0.2,
          "default": 0.1
        },
        {
          "symbolicID": "LowCut",
          "name": "Low Cut",
          "valueType": 1,
          "displayType": "mod_low_cut",
          "min": 19.9,
          "max": 500.0,
          "default": 143.0
        },
        {
          "symbolicID": "HighCut",
          "name": "High Cut",
          "valueType": 1,
          "displayType": "mod_high_cut",
          "min": 500.0,
          "max": 20100.0,
          "default": 4700.0
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.39
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "volume",
          "min": -60.0,
          "max": 6.0,
          "default": 0.0
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
          "symbolicID": "@trails",
          "name": "Trails",
          "valueType": 2,
          "displayType": "off_on",
          "min": false,
          "max": true,
          "default": false
        }
      ]
    },
    {
      "symbolicID": "HD2_ReverbDucking",
      "mono": false,
      "stereo": true,
      "name": "Ducking",
      "category": 10,
      "load_stereo": 7.93,
      "params": [
        {
          "symbolicID": "Decay",
          "name": "Decay",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.66
        },
        {
          "symbolicID": "Predelay",
          "name": "Predelay",
          "valueType": 1,
          "displayType": "time_ms_reverb",
          "min": 0.0,
          "max": 0.2,
          "default": 0.048
        },
        {
          "symbolicID": "LowCut",
          "name": "Low Cut",
          "valueType": 1,
          "displayType": "mod_low_cut",
          "min": 19.9,
          "max": 500.0,
          "default": 211.0
        },
        {
          "symbolicID": "HighCut",
          "name": "High Cut",
          "valueType": 1,
          "displayType": "mod_high_cut",
          "min": 500.0,
          "max": 20100.0,
          "default": 4290.0
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.46
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "volume",
          "min": -60.0,
          "max": 6.0,
          "default": 0.0
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
          "symbolicID": "@trails",
          "name": "Trails",
          "valueType": 2,
          "displayType": "off_on",
          "min": false,
          "max": true,
          "default": false
        }
      ]
    },
    {
      "symbolicID": "HD2_ReverbTile",
      "mono": false,
      "stereo": true,
      "name": "Tile",
      "category": 10,
      "load_stereo": 7.93,
      "params": [
        {
          "symbolicID": "Decay",
          "name": "Decay",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.52
        },
        {
          "symbolicID": "Predelay",
          "name": "Predelay",
          "valueType": 1,
          "displayType": "time_ms_reverb",
          "min": 0.0,
          "max": 0.2,
          "default": 0.02
        },
        {
          "symbolicID": "LowCut",
          "name": "Low Cut",
          "valueType": 1,
          "displayType": "mod_low_cut",
          "min": 19.9,
          "max": 500.0,
          "default": 138.0
        },
        {
          "symbolicID": "HighCut",
          "name": "High Cut",
          "valueType": 1,
          "displayType": "mod_high_cut",
          "min": 500.0,
          "max": 20100.0,
          "default": 9800.0
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "volume",
          "min": -60.0,
          "max": 6.0,
          "default": 0.0
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
          "symbolicID": "@trails",
          "name": "Trails",
          "valueType": 2,
          "displayType": "off_on",
          "min": false,
          "max": true,
          "default": false
        }
      ]
    },
    {
      "symbolicID": "HD2_ReverbEcho",
      "mono": false,
      "stereo": true,
      "name": "Echo",
      "category": 10,
      "load_stereo": 7.93,
      "params": [
        {
          "symbolicID": "Decay",
          "name": "Decay",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.31
        },
        {
          "symbolicID": "Predelay",
          "name": "Predelay",
          "valueType": 1,
          "displayType": "time_ms_reverb",
          "min": 0.0,
          "max": 0.2,
          "default": 0.08
        },
        {
          "symbolicID": "LowCut",
          "name": "Low Cut",
          "valueType": 1,
          "displayType": "mod_low_cut",
          "min": 19.9,
          "max": 500.0,
          "default": 143.0
        },
        {
          "symbolicID": "HighCut",
          "name": "High Cut",
          "valueType": 1,
          "displayType": "mod_high_cut",
          "min": 500.0,
          "max": 20100.0,
          "default": 7000.0
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.4
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "volume",
          "min": -60.0,
          "max": 6.0,
          "default": 0.0
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
          "symbolicID": "@trails",
          "name": "Trails",
          "valueType": 2,
          "displayType": "off_on",
          "min": false,
          "max": true,
          "default": false
        }
      ]
    },
    {
      "symbolicID": "HD2_ReverbSpring",
      "mono": false,
      "stereo": true,
      "name": "Spring",
      "category": 10,
      "load_stereo": 13.50,
      "params": [
        {
          "symbolicID": "Decay",
          "name": "Decay",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.42
        },
        {
          "symbolicID": "Predelay",
          "name": "Predelay",
          "valueType": 1,
          "displayType": "time_ms_reverb",
          "min": 0.0,
          "max": 0.2,
          "default": 0.0
        },
        {
          "symbolicID": "LowCut",
          "name": "Low Cut",
          "valueType": 1,
          "displayType": "mod_low_cut",
          "min": 19.9,
          "max": 500.0,
          "default": 96.0
        },
        {
          "symbolicID": "HighCut",
          "name": "High Cut",
          "valueType": 1,
          "displayType": "mod_high_cut",
          "min": 500.0,
          "max": 20100.0,
          "default": 4260.0
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.31
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "volume",
          "min": -60.0,
          "max": 6.0,
          "default": 0.0
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
          "symbolicID": "@trails",
          "name": "Trails",
          "valueType": 2,
          "displayType": "off_on",
          "min": false,
          "max": true,
          "default": false
        }
      ]
    },
    {
      "symbolicID": "HD2_ReverbParticle",
      "mono": false,
      "stereo": true,
      "name": "Particle Verb",
      "category": 10,
      "load_stereo": 10.36,
      "params": [
        {
          "symbolicID": "Dwell",
          "name": "Dwell",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.23
        },
        {
          "symbolicID": "Condition",
          "name": "Condition",
          "valueType": 0,
          "displayType": "condition",
          "min": 0,
          "max": 2,
          "default": 0
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.52
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "volume",
          "min": -60.0,
          "max": 6.0,
          "default": 1.0
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
          "symbolicID": "@trails",
          "name": "Trails",
          "valueType": 2,
          "displayType": "off_on",
          "min": false,
          "max": true,
          "default": false
        }
      ]
    },
    {
      "symbolicID": "HD2_ReverbDoubleTank",
      "mono": true,
      "stereo": true,
      "name": "Double Tank",
      "load": 13.75,
      "load_stereo": 14.25,
      "category": 10,
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
          "symbolicID": "Decay",
          "name": "Decay",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.75
        },
        {
          "symbolicID": "Predelay",
          "name": "Predelay",
          "valueType": 1,
          "displayType": "time_ms_reverb",
          "min": 0.0,
          "max": 0.2,
          "default": 0.0
        },
        {
          "symbolicID": "Rate",
          "name": "Rate",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.25
        },
        {
          "symbolicID": "Modulation",
          "name": "Modulation",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.40
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.35
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "volume",
          "min": -60.0,
          "max": 6.0,
          "default": 0.0
        },
        {
          "symbolicID": "LowCut",
          "name": "Low Cut",
          "valueType": 1,
          "displayType": "mod_low_cut",
          "min": 19.9,
          "max": 500.0,
          "default": 110.0
        },
        {
          "symbolicID": "HighCut",
          "name": "High Cut",
          "valueType": 1,
          "displayType": "mod_high_cut",
          "min": 500.0,
          "max": 20100.0,
          "default": 6000.0
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
          "symbolicID": "@trails",
          "name": "Trails",
          "valueType": 2,
          "displayType": "off_on",
          "min": false,
          "max": true,
          "default": false
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
      "symbolicID": "HD2_ReverbGlitz",
      "mono": true,
      "stereo": true,
      "name": "Glitz",
      "load": 8.50,
      "load_stereo": 10.25,
      "category": 10,
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
          "symbolicID": "Decay",
          "name": "Decay",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.692
        },
        {
          "symbolicID": "Predelay",
          "name": "Predelay",
          "valueType": 1,
          "displayType": "time_ms_reverb",
          "min": 0.001,
          "max": 0.2,
          "default": 0.0185
        },
        {
          "symbolicID": "LowCut",
          "name": "Low Cut",
          "valueType": 1,
          "displayType": "mod_low_cut",
          "min": 19.9,
          "max": 500.0,
          "default": 19.9
        },
        {
          "symbolicID": "HighCut",
          "name": "High Cut",
          "valueType": 1,
          "displayType": "mod_high_cut",
          "min": 500.0,
          "max": 20100.0,
          "default": 16000.0
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.32
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "volume",
          "min": -60.0,
          "max": 6.0,
          "default": 0.0
        },
        {
          "symbolicID": "Delay",
          "name": "Delay",
          "valueType": 1,
          "displayType": "time_ms_reverb",
          "min": 0.001,
          "max": 0.2,
          "default": 0.0643
        },
        {
          "symbolicID": "Rate",
          "name": "Rate",
          "valueType": 1,
          "displayType": "frequency",
          "min": 0.1,
          "max": 8.0,
          "default": 1.838
        },
        {
          "symbolicID": "Depth",
          "name": "Depth",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.384
        },
        {
          "symbolicID": "Xover",
          "name": "Xover",
          "valueType": 1,
          "displayType": "frequency",
          "min": 100.0,
          "max": 10000.0,
          "default": 900.0
        },
        {
          "symbolicID": "Mod Mix",
          "name": "Mod Mix",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.50
        },
        {
          "symbolicID": "SyncSelect1",
          "name": "Note Sync",
          "valueType": 0,
          "displayType": "sync_note",
          "min": 1,
          "max": 19,
          "default": 6
        },
        {
          "symbolicID": "TempoSync1",
          "name": "Tempo Sync",
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
        },
        {
          "symbolicID": "@trails",
          "name": "Trails",
          "valueType": 2,
          "displayType": "off_on",
          "min": false,
          "max": true,
          "default": false
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
      "symbolicID": "HD2_ReverbGanymede",
      "mono": true,
      "stereo": true,
      "name": "Ganymede",
      "load": 7.50,
      "load_stereo": 13.25,
      "category": 10,
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
          "symbolicID": "Decay",
          "name": "Decay",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.65
        },
        {
          "symbolicID": "Predelay",
          "name": "Predelay",
          "valueType": 1,
          "displayType": "time_ms_reverb",
          "min": 0.0,
          "max": 0.2,
          "default": 0.0
        },
        {
          "symbolicID": "Tone",
          "name": "Tone",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.50
        },
        {
          "symbolicID": "Modulation",
          "name": "Modulation",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.7
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "volume",
          "min": -60.0,
          "max": 6.0,
          "default": 0.0
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
          "symbolicID": "@trails",
          "name": "Trails",
          "valueType": 2,
          "displayType": "off_on",
          "min": false,
          "max": true,
          "default": false
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
      "symbolicID": "HD2_ReverbSearchlights",
      "mono": true,
      "stereo": true,
      "name": "Searchlights",
      "load": 12.50,
      "load_stereo": 13.00,
      "category": 10,
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
          "symbolicID": "Decay",
          "name": "Decay",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.83
        },
        {
          "symbolicID": "Predelay",
          "name": "Predelay",
          "valueType": 1,
          "displayType": "time_ms_reverb",
          "min": 0.0,
          "max": 0.2,
          "default": 0.0
        },
        {
          "symbolicID": "LowCut",
          "name": "Low Cut",
          "valueType": 1,
          "displayType": "mod_low_cut",
          "min": 19.9,
          "max": 500.0,
          "default": 19.9
        },
        {
          "symbolicID": "HighCut",
          "name": "High Cut",
          "valueType": 1,
          "displayType": "mod_high_cut",
          "min": 500.0,
          "max": 20100.0,
          "default": 8460.0
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "volume",
          "min": -60.0,
          "max": 6.0,
          "default": 0.0
        },
        {
          "symbolicID": "Modulation",
          "name": "Modulation",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.208
        },
        {
          "symbolicID": "Speed",
          "name": "Speed",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.1,
          "max": 1.0,
          "default": 0.3664
        },
        {
          "symbolicID": "Intensity",
          "name": "Intensity",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.626
        },
        {
          "symbolicID": "Spread",
          "name": "Spread",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 1.0,
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
          "symbolicID": "@trails",
          "name": "Trails",
          "valueType": 2,
          "displayType": "off_on",
          "min": false,
          "max": true,
          "default": false
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
      "symbolicID": "HD2_ReverbPlateaux",
      "mono": true,
      "stereo": true,
      "name": "Plateaux",
      "load": 10.00,
      "load_stereo": 12.50,
      "category": 10,
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
          "symbolicID": "Decay",
          "name": "Decay",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.8
        },
        {
          "symbolicID": "Predelay",
          "name": "Predelay",
          "valueType": 1,
          "displayType": "time_ms_reverb",
          "min": 0.0,
          "max": 0.2,
          "default": 0.022
        },
        {
          "symbolicID": "Tone",
          "name": "Tone",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.75
        },
        {
          "symbolicID": "Modulation",
          "name": "Modulation",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5
        },
        {
          "symbolicID": "Level",
          "name": "Level",
          "valueType": 1,
          "displayType": "volume",
          "min": -60.0,
          "max": 6.0,
          "default": 0.0
        },
        {
          "symbolicID": "Pitch1",
          "name": "Pitch 1",
          "valueType": 0,
          "displayType": "pitch",
          "min": -24,
          "max": 24,
          "default": -12
        },
        {
          "symbolicID": "Cents1",
          "name": "Cents 1",
          "valueType": 1,
          "displayType": "cents",
          "min": -50.0,
          "max": 50.0,
          "default": 0.0
        },
        {
          "symbolicID": "Pitch2",
          "name": "Pitch 2",
          "valueType": 0,
          "displayType": "pitch",
          "min": -24,
          "max": 24,
          "default": 12
        },
        {
          "symbolicID": "Cents2",
          "name": "Cents 2",
          "valueType": 1,
          "displayType": "cents",
          "min": -50.0,
          "max": 50.0,
          "default": 0.0
        },
        {
          "symbolicID": "PitchMix",
          "name": "Pitch Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5
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
          "symbolicID": "@trails",
          "name": "Trails",
          "valueType": 2,
          "displayType": "off_on",
          "min": false,
          "max": true,
          "default": false
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