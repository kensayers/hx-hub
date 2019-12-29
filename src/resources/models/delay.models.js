export default {
  models: [
    {
      "symbolicID": "HD2_DelayDuckedDelay",
      "mono": true,
      "stereo": true,
      "name": "Ducked Delay",
      "load": 2.86,
      "load_stereo": 4.48,
      "category": 9,
      "params": [
        {
          "symbolicID": "Time",
          "name": "Time",
          "valueType": 1,
          "displayType": "time_ms_0_8000",
          "displayType_stereo": "time_ms_0_4000",
          "min": 0.0,
          "max": 8.0,
          "max_stereo": 4.0,
          "default": 0.5,
          "assign": 1
        },
        {
          "symbolicID": "Feedback",
          "name": "Feedback",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.375
        },
        {
          "symbolicID": "LowCut",
          "name": "Low Cut",
          "valueType": 1,
          "displayType": "mod_low_cut",
          "min": 19.9,
          "max": 500.0,
          "default": 60.0
        },
        {
          "symbolicID": "HighCut",
          "name": "High Cut",
          "valueType": 1,
          "displayType": "mod_high_cut",
          "min": 500.0,
          "max": 20100.0,
          "default": 10300.0
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
          "symbolicID": "Scale",
          "name": "Scale",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 1.0,
          "stereo-only": true
        },
        {
          "symbolicID": "Threshold",
          "name": "Threshold",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.49
        },
        {
          "symbolicID": "Ducking",
          "name": "Ducking",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.61
        },
        {
          "symbolicID": "DynAttack",
          "name": "Dynamic Attack",
          "valueType": 1,
          "displayType": "time_ms_10_2000",
          "min": 0.01,
          "max": 2.0,
          "default": 0.56
        },
        {
          "symbolicID": "DynRel",
          "name": "Dynamic Release",
          "valueType": 1,
          "displayType": "time_ms_10_5000",
          "min": 0.01,
          "max": 5.0,
          "default": 0.51,
          "default_stereo": 0.62
        },
        {
          "symbolicID": "DynType",
          "name": "Dynamic Type",
          "valueType": 2,
          "displayType": "dyn_type",
          "min": false,
          "max": true,
          "default": false
        },
        {
          "symbolicID": "TempoSync1",
          "displayType": "off_on",
          "name": "Tempo Sync",
          "valueType": 2,
          "min": false,
          "max": true,
          "default": false
        },
        {
          "symbolicID": "SyncSelect1",
          "displayType": "sync_note",
          "name": "Note Sync",
          "valueType": 0,
          "min": 1,
          "max": 19,
          "default": 6
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
      "symbolicID": "HD2_DelayAdriaticDelay",
      "mono": true,
      "stereo": true,
      "name": "Adriatic Delay",
      "category": 9,
      "load": 6.55,
      "load_stereo": 12.36,
      "params": [
        {
          "symbolicID": "Time",
          "name": "Time",
          "valueType": 1,
          "displayType": "time_ms_20_1800",
          "min": 0.02,
          "max": 1.8,
          "default": 0.5,
          "assign": 1
        },
        {
          "symbolicID": "Scale",
          "name": "Scale",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.75,
          "stereo-only": true
        },
        {
          "symbolicID": "Feedback",
          "name": "Feedback",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5
        },
        {
          "symbolicID": "Noise",
          "name": "Noise",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.36
        },
        {
          "symbolicID": "BBD Size",
          "name": "BBD Size",
          "valueType": 0,
          "displayType": "bbd_size",
          "min": 0,
          "max": 3,
          "default": 2
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
          "symbolicID": "Rate",
          "name": "Rate",
          "valueType": 1,
          "displayType": "frequency",
          "min": 0.1,
          "max": 8.0,
          "default": 0.4
        },
        {
          "symbolicID": "Depth",
          "name": "Depth",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.22
        },
        {
          "symbolicID": "Spread",
          "name": "Spread",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5,
          "stereo-only": true
        },
        {
          "symbolicID": "Headroom",
          "name": "Headroom",
          "valueType": 1,
          "displayType": "volume",
          "min": -12.0,
          "max": 12.0,
          "default": 0.0
        },
        {
          "symbolicID": "SyncSelect1",
          "displayType": "sync_note",
          "name": "Note Sync",
          "valueType": 0,
          "min": 1,
          "max": 19,
          "default": 6
        },
        {
          "symbolicID": "TempoSync1",
          "displayType": "off_on",
          "name": "Tempo Sync",
          "valueType": 2,
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
      "symbolicID": "HD2_DelayBucketBrigade",
      "mono": true,
      "stereo": true,
      "name": "Bucket Brigade",
      "category": 9,
      "load": 5.64,
      "load_stereo": 10.45,
      "params": [
        {
          "symbolicID": "Time",
          "name": "Time",
          "valueType": 1,
          "displayType": "time_ms_20_300",
          "min": 0.02,
          "max": 0.3,
          "default": 0.238,
          "assign": 1
        },
        {
          "symbolicID": "Feedback",
          "name": "Feedback",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.43
        },
        {
          "symbolicID": "Scale",
          "name": "Scale",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 1.0,
          "stereo-only": true
        },
        {
          "symbolicID": "Noise",
          "name": "Noise",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.28
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
          "symbolicID": "Headroom",
          "name": "Headroom",
          "valueType": 1,
          "displayType": "volume",
          "min": -12.0,
          "max": 12.0,
          "default": 0.0
        },
        {
          "symbolicID": "SyncSelect1",
          "displayType": "sync_note",
          "name": "Note Sync",
          "valueType": 0,
          "min": 1,
          "max": 19,
          "default": 6
        },
        {
          "symbolicID": "TempoSync1",
          "displayType": "off_on",
          "name": "Tempo Sync",
          "valueType": 2,
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
      "symbolicID": "HD2_DelaySimpleDelay",
      "mono": true,
      "stereo": true,
      "name": "Simple Delay",
      "category": 9,
      "load": 3.32,
      "load_stereo": 4.55,
      "params": [
        {
          "symbolicID": "Time",
          "name": "Time",
          "valueType": 1,
          "displayType": "time_ms_0_8000",
          "displayType_stereo": "time_ms_0_4000",
          "min": 0.0,
          "max": 8.0,
          "max_stereo": 4.0,
          "default": 0.6,
          "assign": 1
        },
        {
          "symbolicID": "Feedback",
          "name": "Feedback",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.35
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.40
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
          "symbolicID": "Scale",
          "name": "Scale",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.75,
          "stereo-only": true
        },
        {
          "symbolicID": "SyncSelect1",
          "displayType": "sync_note",
          "name": "Note Sync",
          "valueType": 0,
          "min": 1,
          "max": 19,
          "default": 6
        },
        {
          "symbolicID": "TempoSync1",
          "displayType": "off_on",
          "name": "Tempo Sync",
          "valueType": 2,
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
      "symbolicID": "HD2_DelayModChorusEcho",
      "mono": true,
      "stereo": true,
      "name": "Mod/Chorus Echo",
      "category": 9,
      "load": 3.32,
      "load_stereo": 6.28,
      "params": [
        {
          "symbolicID": "Time",
          "name": "Time",
          "valueType": 1,
          "displayType": "time_ms_0_8000",
          "displayType_stereo": "time_ms_0_4000",
          "min": 0.0,
          "max": 8.0,
          "max_stereo": 4.0,
          "default": 0.538,
          "assign": 1
        },
        {
          "symbolicID": "Feedback",
          "name": "Feedback",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.28
        },
        {
          "symbolicID": "LowCut",
          "name": "Low Cut",
          "valueType": 1,
          "displayType": "mod_low_cut",
          "min": 19.9,
          "max": 500.0,
          "default": 155.0
        },
        {
          "symbolicID": "HighCut",
          "name": "High Cut",
          "valueType": 1,
          "displayType": "mod_high_cut",
          "min": 500.0,
          "max": 20100.0,
          "default": 9540.0
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.45
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
          "symbolicID": "Scale",
          "name": "Scale",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.75,
          "stereo-only": true
        },
        {
          "symbolicID": "ModulationMode",
          "name": "Modulation Mode",
          "valueType": 0,
          "displayType": "delay_mod_mode",
          "min": 0,
          "max": 2,
          "default": 1
        },
        {
          "symbolicID": "Speed",
          "name": "Speed",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.022
        },
        {
          "symbolicID": "Depth",
          "name": "Depth",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.49
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
      "symbolicID": "HD2_DelayElephantMan",
      "mono": true,
      "stereo": true,
      "name": "Elephant Man",
      "category": 9,
      "load": 6.02,
      "load_stereo": 10.57,
      "params": [
        {
          "symbolicID": "Time",
          "name": "Time",
          "valueType": 1,
          "displayType": "time_ms_20_500",
          "min": 0.02,
          "max": 0.5,
          "default": 0.375,
          "assign": 1
        },
        {
          "symbolicID": "Feedback",
          "name": "Feedback",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.39
        },
        {
          "symbolicID": "Mode",
          "name": "Mode",
          "valueType": 2,
          "displayType": "chorus_mode",
          "min": false,
          "max": true,
          "default": false
        },
        {
          "symbolicID": "Depth",
          "name": "Depth",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.28
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
          "symbolicID": "Scale",
          "name": "Scale",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 1.0,
          "stereo-only": true
        },
        {
          "symbolicID": "Spread",
          "name": "Spread",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.272,
          "stereo-only": true
        },
        {
          "symbolicID": "Noise",
          "name": "Noise",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.1
        },
        {
          "symbolicID": "Headroom",
          "name": "Headroom",
          "valueType": 1,
          "displayType": "volume",
          "min": -12.0,
          "max": 12.0,
          "default": 0.0
        },
        {
          "symbolicID": "SyncSelect1",
          "displayType": "sync_note",
          "name": "Note Sync",
          "valueType": 0,
          "min": 1,
          "max": 19,
          "default": 6
        },
        {
          "symbolicID": "TempoSync1",
          "displayType": "off_on",
          "name": "Tempo Sync",
          "valueType": 2,
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
      "symbolicID": "HD2_DelayTransistorTape",
      "mono": true,
      "stereo": true,
      "name": "Transistor Tape",
      "category": 9,
      "load": 6.19,
      "load_stereo": 11.66,
      "params": [
        {
          "symbolicID": "Time",
          "name": "Time",
          "valueType": 1,
          "displayType": "time_ms_0_2000",
          "min": 0.0,
          "max": 2.0,
          "default": 0.507,
          "assign": 1
        },
        {
          "symbolicID": "Feedback",
          "name": "Feedback",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.54
        },
        {
          "symbolicID": "WowFlutter",
          "name": "Wow/Flutter",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.36,
          "assign": 2
        },
        {
          "symbolicID": "Scale",
          "name": "Scale",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 1.0,
          "stereo-only": true
        },
        {
          "symbolicID": "Spread",
          "name": "Spread",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.29,
          "stereo-only": true
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
          "symbolicID": "Headroom",
          "name": "Headroom",
          "valueType": 1,
          "displayType": "volume",
          "min": -12.0,
          "max": 12.0,
          "default": 0.0
        },
        {
          "symbolicID": "SyncSelect1",
          "displayType": "sync_note",
          "name": "Note Sync",
          "valueType": 0,
          "min": 1,
          "max": 19,
          "default": 6
        },
        {
          "symbolicID": "TempoSync1",
          "displayType": "off_on",
          "name": "Tempo Sync",
          "valueType": 2,
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
      "symbolicID": "HD2_DelaySweepEcho",
      "mono": true,
      "stereo": true,
      "name": "Sweep Echo",
      "category": 9,
      "load": 4.78,
      "load_stereo": 9.07,
      "params": [
        {
          "symbolicID": "Time",
          "name": "Time",
          "valueType": 1,
          "displayType": "time_ms_0_8000",
          "displayType_stereo": "time_ms_0_4000",
          "min": 0.0,
          "max": 8.0,
          "max_stereo": 4.0,
          "default": 0.45,
          "assign": 1
        },
        {
          "symbolicID": "Feedback",
          "name": "Feedback",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.58
        },
        {
          "symbolicID": "LowCut",
          "name": "Low Cut",
          "valueType": 1,
          "displayType": "mod_low_cut",
          "min": 19.9,
          "max": 500.0,
          "default": 120.0
        },
        {
          "symbolicID": "HighCut",
          "name": "High Cut",
          "valueType": 1,
          "displayType": "mod_high_cut",
          "min": 500.0,
          "max": 20100.0,
          "default": 8000.0
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
          "symbolicID": "FilterType",
          "name": "Filter",
          "valueType": 0,
          "displayType": "mode_pass",
          "min": 0,
          "max": 2,
          "default": 1
        },
        {
          "symbolicID": "SweepShape",
          "name": "Shape",
          "valueType": 0,
          "displayType": "sweep_shape",
          "min": 0,
          "max": 5,
          "default": 0
        },
        {
          "symbolicID": "SweepSpeed",
          "name": "Rate",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.34
        },
        {
          "symbolicID": "SweepStart",
          "name": "Start frequency",
          "valueType": 1,
          "displayType": "frequency",
          "min": 40.0,
          "max": 470.0,
          "default": 205.0
        },
        {
          "symbolicID": "SweepDepth",
          "name": "Range",
          "valueType": 1,
          "displayType": "frequency",
          "min": 0.0,
          "max": 3250.0,
          "default": 2830.0
        },
        {
          "symbolicID": "SweepResonance",
          "name": "Resonance",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.45
        },
        {
          "symbolicID": "SweepSymmetry",
          "name": "Duty Cycle",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5
        },
        {
          "symbolicID": "Scale",
          "name": "Scale",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 1.0,
          "stereo-only": true
        },
        {
          "symbolicID": "SweepSpread",
          "name": "Spread",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 1.0,
          "stereo-only": true
        },
        {
          "symbolicID": "Headroom",
          "name": "Headroom",
          "valueType": 1,
          "displayType": "volume",
          "min": -12.0,
          "max": 12.0,
          "default": 0.0
        },
        {
          "symbolicID": "TempoSync1",
          "displayType": "off_on",
          "name": "Tempo Sync",
          "valueType": 2,
          "min": false,
          "max": true,
          "default": false
        },
        {
          "symbolicID": "SyncSelect1",
          "displayType": "sync_note",
          "name": "Note Sync",
          "valueType": 0,
          "min": 1,
          "max": 19,
          "default": 6
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
      "symbolicID": "HD2_DelayPingPong",
      "mono": false,
      "stereo": true,
      "name": "Ping Pong",
      "category": 9,
      "load_stereo": 4.10,
      "params": [
        {
          "symbolicID": "Time",
          "name": "Time",
          "valueType": 1,
          "displayType": "time_ms_0_8000",
          "min": 0.0,
          "max": 8.0,
          "default": 0.6,
          "assign": 1
        },
        {
          "symbolicID": "Feedback",
          "name": "Feedback",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.4
        },
        {
          "symbolicID": "Scale",
          "name": "Scale",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5
        },
        {
          "symbolicID": "Spread",
          "name": "Spread",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 1.0
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.45
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
          "default": 100.0
        },
        {
          "symbolicID": "HighCut",
          "name": "High Cut",
          "valueType": 1,
          "displayType": "mod_high_cut",
          "min": 500.0,
          "max": 20100.0,
          "default": 8900.0
        },
        {
          "symbolicID": "TempoSync1",
          "displayType": "off_on",
          "name": "Tempo Sync",
          "valueType": 2,
          "min": false,
          "max": true,
          "default": false
        },
        {
          "symbolicID": "SyncSelect1",
          "displayType": "sync_note",
          "name": "Note Sync",
          "valueType": 0,
          "min": 1,
          "max": 19,
          "default": 6
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
      "symbolicID": "HD2_DelayHarmonyDelay",
      "mono": false,
      "stereo": true,
      "name": "Harmony Delay",
      "category": 9,
      "load_stereo": 13.48,
      "params": [
        {
          "symbolicID": "Time",
          "name": "Time",
          "valueType": 1,
          "displayType": "time_ms_0_2000",
          "min": 0.0,
          "max": 2.0,
          "default": 0.75,
          "assign": 1
        },
        {
          "symbolicID": "Feedback",
          "name": "Feedback",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5
        },
        {
          "symbolicID": "Key",
          "name": "Key",
          "valueType": 0,
          "displayType": "key_voice",
          "min": 0,
          "max": 11,
          "default": 0
        },
        {
          "symbolicID": "Scale",
          "name": "Scale",
          "valueType": 0,
          "displayType": "scale_voice",
          "min": 0,
          "max": 7,
          "default": 0
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
          "symbolicID": "IntervalVoice1",
          "name": "Voice 1 Shift",
          "valueType": 0,
          "displayType": "interval_voice",
          "min": -8,
          "max": 8,
          "default": 2
        },
        {
          "symbolicID": "LevelVoice1",
          "name": "Voice 1 Level",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 1.0
        },
        {
          "symbolicID": "PanVoice1",
          "name": "Voice 1 Pan",
          "valueType": 1,
          "displayType": "pan",
          "min": 0.0,
          "max": 1.0,
          "default": 0.25
        },
        {
          "symbolicID": "IntervalVoice2",
          "name": "Voice 2 Shift",
          "valueType": 0,
          "displayType": "interval_voice",
          "min": -8,
          "max": 8,
          "default": 4
        },
        {
          "symbolicID": "LevelVoice2",
          "name": "Voice 2 Level",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 1.0
        },
        {
          "symbolicID": "PanVoice2",
          "name": "Voice 2 Pan",
          "valueType": 1,
          "displayType": "pan",
          "min": 0.0,
          "max": 1.0,
          "default": 0.75
        },
        {
          "symbolicID": "DelayVoice1",
          "name": "Voice 1 Scale",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.33
        },
        {
          "symbolicID": "DelayVoice2",
          "name": "Voice 2 Scale",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.66
        },
        {
          "symbolicID": "LevelRootVoice",
          "name": "Root Level",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 1.0
        },
        {
          "symbolicID": "PanRootVoice",
          "name": "Root Pan",
          "valueType": 1,
          "displayType": "pan",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5
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
          "default": 20100.0
        },
        {
          "symbolicID": "SyncSelect1",
          "displayType": "sync_note",
          "name": "Note Sync",
          "valueType": 0,
          "min": 1,
          "max": 19,
          "default": 6
        },
        {
          "symbolicID": "TempoSync1",
          "displayType": "off_on",
          "name": "Tempo Sync",
          "valueType": 2,
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
        }
      ]
    },
    {
      "symbolicID": "HD2_DelayMultitap4",
      "mono": false,
      "stereo": true,
      "name": "Multitap 4",
      "category": 9,
      "load_stereo": 11.47,
      "params": [
        {
          "symbolicID": "Time",
          "name": "Time",
          "valueType": 1,
          "displayType": "time_ms_0_4000",
          "min": 0.0,
          "max": 4.0,
          "default": 1.0,
          "assign": 1
        },
        {
          "symbolicID": "Feedback",
          "name": "Feedback",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5
        },
        {
          "symbolicID": "Diffusion",
          "name": "Diffusion",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.4
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
          "default": 20100.0
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.43
        },
        {
          "symbolicID": "Tap1Delay",
          "name": "Tap 1 Scale",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.24
        },
        {
          "symbolicID": "Tap1Pan",
          "name": "Tap 1 Pan",
          "valueType": 1,
          "displayType": "pan",
          "min": 0.0,
          "max": 1.0,
          "default": 0.0
        },
        {
          "symbolicID": "Tap1Level",
          "name": "Tap 1 Level",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 1.0
        },
        {
          "symbolicID": "Tap2Delay",
          "name": "Tap 2 Scale",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5
        },
        {
          "symbolicID": "Tap2Pan",
          "name": "Tap 2 Pan",
          "valueType": 1,
          "displayType": "pan",
          "min": 0.0,
          "max": 1.0,
          "default": 0.33
        },
        {
          "symbolicID": "Tap2Level",
          "name": "Tap 2 Level",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 1.0
        },
        {
          "symbolicID": "Tap3Delay",
          "name": "Tap 3 Scale",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.75
        },
        {
          "symbolicID": "Tap3Pan",
          "name": "Tap 3 Pan",
          "valueType": 1,
          "displayType": "pan",
          "min": 0.0,
          "max": 1.0,
          "default": 0.66
        },
        {
          "symbolicID": "Tap3Level",
          "name": "Tap 3 Level",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 1.0
        },
        {
          "symbolicID": "Tap4Delay",
          "name": "Tap 4 Scale",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 1.0
        },
        {
          "symbolicID": "Tap4Pan",
          "name": "Tap 4 Pan",
          "valueType": 1,
          "displayType": "pan",
          "min": 0.0,
          "max": 1.0,
          "default": 1.0
        },
        {
          "symbolicID": "Tap4Level",
          "name": "Tap 4 Level",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 1.0
        },
        {
          "symbolicID": "ModulationMode",
          "name": "Modulation Mode",
          "valueType": 0,
          "displayType": "delay_mod_mode",
          "min": 0,
          "max": 2,
          "default": 1
        },
        {
          "symbolicID": "Speed",
          "name": "Rate",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.1
        },
        {
          "symbolicID": "Depth",
          "name": "Depth",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.38
        },
        {
          "symbolicID": "Spread",
          "name": "Spread",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.58
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
          "symbolicID": "SyncSelect1",
          "displayType": "sync_note",
          "name": "Note Sync",
          "valueType": 0,
          "min": 1,
          "max": 19,
          "default": 6
        },
        {
          "symbolicID": "TempoSync1",
          "displayType": "off_on",
          "name": "Tempo Sync",
          "valueType": 2,
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
        }
      ]
    },
    {
      "symbolicID": "HD2_DelayMultitap6",
      "mono": false,
      "stereo": true,
      "name": "Multitap 6",
      "category": 9,
      "load_stereo": 14.73,
      "params": [
        {
          "symbolicID": "Time",
          "name": "Time",
          "valueType": 1,
          "displayType": "time_ms_0_4000",
          "min": 0.0,
          "max": 4.0,
          "default": 1.0,
          "assign": 1
        },
        {
          "symbolicID": "Feedback",
          "name": "Feedback",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.43
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
          "default": 20100.0
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
          "symbolicID": "Tap1Delay",
          "name": "Tap 1 Scale",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.1
        },
        {
          "symbolicID": "Tap1Pan",
          "name": "Tap 1 Pan",
          "valueType": 1,
          "displayType": "pan",
          "min": 0.0,
          "max": 1.0,
          "default": 0.333
        },
        {
          "symbolicID": "Tap1Level",
          "name": "Tap 1 Level",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 1.0
        },
        {
          "symbolicID": "Tap2Delay",
          "name": "Tap 2 Scale",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.3
        },
        {
          "symbolicID": "Tap2Pan",
          "name": "Tap 2 Pan",
          "valueType": 1,
          "displayType": "pan",
          "min": 0.0,
          "max": 1.0,
          "default": 0.666
        },
        {
          "symbolicID": "Tap2Level",
          "name": "Tap 2 Level",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 1.0
        },
        {
          "symbolicID": "Tap3Delay",
          "name": "Tap 3 Scale",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.4
        },
        {
          "symbolicID": "Tap3Pan",
          "name": "Tap 3 Pan",
          "valueType": 1,
          "displayType": "pan",
          "min": 0.0,
          "max": 1.0,
          "default": 0.166
        },
        {
          "symbolicID": "Tap3Level",
          "name": "Tap 3 Level",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 1.0
        },
        {
          "symbolicID": "Tap4Delay",
          "name": "Tap 4 Scale",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.6
        },
        {
          "symbolicID": "Tap4Pan",
          "name": "Tap 4 Pan",
          "valueType": 1,
          "displayType": "pan",
          "min": 0.0,
          "max": 1.0,
          "default": 0.666
        },
        {
          "symbolicID": "Tap4Level",
          "name": "Tap 4 Level",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 1.0
        },
        {
          "symbolicID": "Tap5Delay",
          "name": "Tap 5 Scale",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.822
        },
        {
          "symbolicID": "Tap5Pan",
          "name": "Tap 5 Pan",
          "valueType": 1,
          "displayType": "pan",
          "min": 0.0,
          "max": 1.0,
          "default": 0.0
        },
        {
          "symbolicID": "Tap5Level",
          "name": "Tap 5 Level",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 1.0
        },
        {
          "symbolicID": "Tap6Delay",
          "name": "Tap 6 Scale",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 1.0
        },
        {
          "symbolicID": "Tap6Pan",
          "name": "Tap 6 Pan",
          "valueType": 1,
          "displayType": "pan",
          "min": 0.0,
          "max": 1.0,
          "default": 1.0
        },
        {
          "symbolicID": "Tap6Level",
          "name": "Tap 6 Level",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 1.0
        },
        {
          "symbolicID": "SyncSelect1",
          "displayType": "sync_note",
          "name": "Note Sync",
          "valueType": 0,
          "min": 1,
          "max": 19,
          "default": 6
        },
        {
          "symbolicID": "TempoSync1",
          "displayType": "off_on",
          "name": "Tempo Sync",
          "valueType": 2,
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
        }
      ]
    },
    {
      "symbolicID": "HD2_DelayReverseDelay",
      "mono": true,
      "stereo": true,
      "name": "Reverse Delay",
      "category": 9,
      "load": 4.00,
      "load_stereo": 7.00,
      "params": [
        {
          "symbolicID": "Time",
          "name": "Time",
          "valueType": 1,
          "displayType": "time_ms_0_4000",
          "displayType_stereo": "time_ms_0_2000",
          "min": 0.0,
          "max": 4.0,
          "max_stereo": 2.0,
          "default": 1.0,
          "assign": 1
        },
        {
          "symbolicID": "Feedback",
          "name": "Feedback",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5
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
          "default": 20100.0
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
          "symbolicID": "Speed",
          "name": "Speed",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.022
        },
        {
          "symbolicID": "Depth",
          "name": "Depth",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5
        },
        {
          "symbolicID": "ModulationMode",
          "name": "Mod Mode",
          "valueType": 0,
          "displayType": "delay_mod_mode",
          "min": 0,
          "max": 2,
          "default": 0
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
          "symbolicID": "SyncSelect1",
          "displayType": "sync_note",
          "name": "Note Sync",
          "valueType": 0,
          "min": 1,
          "max": 19,
          "default": 6
        },
        {
          "symbolicID": "TempoSync1",
          "displayType": "off_on",
          "name": "Tempo Sync",
          "valueType": 2,
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
      "symbolicID": "HD2_DelayDualDelay",
      "mono": false,
      "stereo": true,
      "name": "Dual Delay",
      "category": 9,
      "load_stereo": 7.00,
      "params": [
        {
          "symbolicID": "Left Time",
          "name": "Left Time",
          "valueType": 1,
          "displayType": "time_ms_0_2000",
          "min": 0.0,
          "max": 2.0,
          "default": 0.375,
          "assign": 3
        },
        {
          "symbolicID": "Right Time",
          "name": "Right Time",
          "valueType": 1,
          "displayType": "time_ms_0_2000",
          "min": 0.0,
          "max": 2.0,
          "default": 0.5,
          "assign": 5
        },
        {
          "symbolicID": "LeftFeedback",
          "name": "Left Feedback",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.3,
          "assign": 4
        },
        {
          "symbolicID": "RightFeedback",
          "name": "Right Feedback",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.4,
          "assign": 6
        },
        {
          "symbolicID": "MixL",
          "name": "Left Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.35
        },
        {
          "symbolicID": "MixR",
          "name": "Right Mix",
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
          "default": 20100.0
        },
        {
          "symbolicID": "Speed",
          "name": "Speed",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.05
        },
        {
          "symbolicID": "Depth",
          "name": "Depth",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.35
        },
        {
          "symbolicID": "ModulationMode",
          "name": "Mode",
          "valueType": 0,
          "displayType": "delay_mod_mode",
          "min": 0,
          "max": 2,
          "default": 1
        },
        {
          "symbolicID": "Spread",
          "name": "Spread",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 1.0
        },
        {
          "symbolicID": "SyncSelect1",
          "displayType": "sync_note",
          "name": "Left Note Sync",
          "valueType": 0,
          "min": 1,
          "max": 19,
          "default": 9
        },
        {
          "symbolicID": "TempoSync1",
          "displayType": "off_on",
          "name": "Left Tempo Sync",
          "valueType": 2,
          "min": false,
          "max": true,
          "default": false
        },
        {
          "symbolicID": "SyncSelect2",
          "displayType": "sync_note",
          "name": "Right Note Sync",
          "valueType": 0,
          "min": 1,
          "max": 19,
          "default": 8
        },
        {
          "symbolicID": "TempoSync2",
          "displayType": "off_on",
          "name": "Right Tempo Sync",
          "valueType": 2,
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
        }
      ]
    },
    {
      "symbolicID": "HD2_DelayVintageDigital",
      "mono": true,
      "stereo": true,
      "name": "Vintage Digital",
      "category": 9,
      "load": 3.93,
      "load_stereo": 7.14,
      "params": [
        {
          "symbolicID": "Time",
          "name": "Time",
          "valueType": 1,
          "displayType": "time_ms_0_8000",
          "displayType_stereo": "time_ms_0_4000",
          "min": 0.0,
          "max": 8.0,
          "max_stereo": 4.0,
          "default": 0.5,
          "assign": 1
        },
        {
          "symbolicID": "Feedback",
          "name": "Feedback",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.45
        },
        {
          "symbolicID": "BitDepth",
          "name": "Bit Depth",
          "valueType": 0,
          "displayType": "delay_bit_depth",
          "min": 0,
          "max": 7,
          "default": 4
        },
        {
          "symbolicID": "SampleRate",
          "name": "Sample Rate",
          "valueType": 0,
          "displayType": "sample_rate",
          "min": 0,
          "max": 7,
          "default": 3
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.45
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
          "symbolicID": "Rate",
          "name": "Rate",
          "valueType": 1,
          "displayType": "frequency",
          "min": 0.1,
          "max": 8.0,
          "default": 0.2
        },
        {
          "symbolicID": "Depth",
          "name": "Depth",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.2
        },
        {
          "symbolicID": "Scale",
          "name": "Scale",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.75,
          "stereo-only": true
        },
        {
          "symbolicID": "SyncSelect1",
          "displayType": "sync_note",
          "name": "Note Sync",
          "valueType": 0,
          "min": 1,
          "max": 19,
          "default": 6
        },
        {
          "symbolicID": "TempoSync1",
          "displayType": "off_on",
          "name": "Tempo Sync",
          "valueType": 2,
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
      "symbolicID": "HD2_DelayVintageDigitalV2",
      "mono": true,
      "stereo": true,
      "name": "Vintage Digital",
      "category": 9,
      "load": 3.93,
      "load_stereo": 7.14,
      "params": [
        {
          "symbolicID": "Time",
          "name": "Time",
          "valueType": 1,
          "displayType": "time_ms_0_8000",
          "displayType_stereo": "time_ms_0_4000",
          "min": 0.0,
          "max": 8.0,
          "max_stereo": 4.0,
          "default": 0.5,
          "assign": 1
        },
        {
          "symbolicID": "Feedback",
          "name": "Feedback",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.45
        },
        {
          "symbolicID": "BitDepth",
          "name": "Bit Depth",
          "valueType": 0,
          "displayType": "delay_bit_depth",
          "min": 0,
          "max": 7,
          "default": 4
        },
        {
          "symbolicID": "SampleRate",
          "name": "Sample Rate",
          "valueType": 0,
          "displayType": "sample_rate",
          "min": 0,
          "max": 7,
          "default": 3
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.45
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
          "symbolicID": "Rate",
          "name": "Rate",
          "valueType": 1,
          "displayType": "frequency",
          "min": 0.1,
          "max": 8.0,
          "default": 0.2
        },
        {
          "symbolicID": "Depth",
          "name": "Depth",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.2
        },
        {
          "symbolicID": "Scale",
          "name": "Scale",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.75,
          "stereo-only": true
        },
        {
          "symbolicID": "Headroom",
          "name": "Headroom",
          "valueType": 1,
          "displayType": "volume",
          "min": -12.0,
          "max": 12.0,
          "default": 0.0
        },
        {
          "symbolicID": "SyncSelect1",
          "displayType": "sync_note",
          "name": "Note Sync",
          "valueType": 0,
          "min": 1,
          "max": 19,
          "default": 6
        },
        {
          "symbolicID": "TempoSync1",
          "displayType": "off_on",
          "name": "Tempo Sync",
          "valueType": 2,
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
      "symbolicID": "HD2_DelayPitch",
      "mono": true,
      "stereo": true,
      "name": "Pitch Echo",
      "category": 9,
      "load": 7.20,
      "load_stereo": 12.60,
      "params": [
        {
          "symbolicID": "Time",
          "name": "Time",
          "valueType": 1,
          "displayType": "time_ms_0_8000",
          "displayType_stereo": "time_ms_0_4000",
          "min": 0.0,
          "max": 8.0,
          "max_stereo": 4.0,
          "default": 0.25,
          "default_stereo": 0.176,
          "assign": 1
        },
        {
          "symbolicID": "Feedback",
          "name": "Feedback",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.40
        },
        {
          "symbolicID": "Interval1",
          "name": "Interval",
          "valueType": 0,
          "displayType": "integer_slider_signed",
          "min": -13,
          "max": 13,
          "default": 5
        },
        {
          "symbolicID": "Cents1",
          "name": "Cents",
          "valueType": 1,
          "displayType": "cents",
          "min": -50.0,
          "max": 50.0,
          "default": 0.0
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.40
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
          "default": 19.9
        },
        {
          "symbolicID": "HighCut",
          "name": "High Cut",
          "valueType": 1,
          "displayType": "mod_high_cut",
          "min": 500.0,
          "max": 20100.0,
          "default": 20100.0
        },
        {
          "symbolicID": "Scale",
          "name": "Scale",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 1.00,
          "stereo-only": true
        },
        {
          "symbolicID": "SyncSelect1",
          "displayType": "sync_note",
          "name": "Note Sync",
          "valueType": 0,
          "min": 1,
          "max": 19,
          "default": 6
        },
        {
          "symbolicID": "TempoSync1",
          "displayType": "off_on",
          "name": "Tempo Sync",
          "valueType": 2,
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
      "symbolicID": "HD2_DelaySwellAdriatic",
      "mono": true,
      "stereo": true,
      "name": "Adriatic Swell",
      "category": 9,
      "load": 6.40,
      "load_stereo": 11.20,
      "params": [
        {
          "symbolicID": "Time",
          "name": "Time",
          "valueType": 1,
          "displayType": "time_ms_20_1800",
          "min": 0.02,
          "max": 1.8,
          "assign": 1,
          "default": 0.4,
          "default_stereo": 0.5
        },
        {
          "symbolicID": "Scale",
          "name": "Scale",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.75,
          "stereo-only": true
        },
        {
          "symbolicID": "Feedback",
          "name": "Feedback",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5
        },
        {
          "symbolicID": "Noise",
          "name": "Noise",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.36
        },
        {
          "symbolicID": "BBD Size",
          "name": "BBD Size",
          "valueType": 0,
          "displayType": "bbd_size",
          "min": 0,
          "max": 3,
          "default": 2
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
          "symbolicID": "Rate",
          "name": "Rate",
          "valueType": 1,
          "displayType": "frequency",
          "min": 0.1,
          "max": 8.0,
          "default": 0.4
        },
        {
          "symbolicID": "Depth",
          "name": "Depth",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.22
        },
        {
          "symbolicID": "Spread",
          "name": "Spread",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5,
          "stereo-only": true
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
          "symbolicID": "Headroom",
          "name": "Headroom",
          "valueType": 1,
          "displayType": "volume",
          "min": -12.0,
          "max": 12.0,
          "default": 0.5
        },
        {
          "symbolicID": "Threshold",
          "name": "Threshold",
          "valueType": 1,
          "displayType": "volume",
          "min": -96.0,
          "max": 0.0,
          "default": -60.0
        },
        {
          "symbolicID": "Attack",
          "name": "Attack",
          "valueType": 1,
          "displayType": "time_ms",
          "min": 0.1,
          "max": 5.0,
          "default": 1.0
        },
        {
          "symbolicID": "SyncSelect1",
          "displayType": "sync_note",
          "name": "Note Sync",
          "valueType": 0,
          "min": 1,
          "max": 19,
          "default": 6
        },
        {
          "symbolicID": "TempoSync1",
          "displayType": "off_on",
          "name": "Tempo Sync",
          "valueType": 2,
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
      "symbolicID": "HD2_DelaySwellVintageDigital",
      "mono": true,
      "stereo": true,
      "name": "Vintage Swell",
      "category": 9,
      "load": 4.05,
      "load_stereo": 7.30,
      "params": [
        {
          "symbolicID": "Time",
          "name": "Time",
          "valueType": 1,
          "displayType": "time_ms_0_8000",
          "displayType_stereo": "time_ms_0_4000",
          "min": 0.0,
          "max": 8.0,
          "max_stereo": 4.0,
          "assign": 1,
          "default": 0.5
        },
        {
          "symbolicID": "Feedback",
          "name": "Feedback",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.75,
          "default_stereo": 0.45
        },
        {
          "symbolicID": "BitDepth",
          "name": "Bit Depth",
          "valueType": 0,
          "displayType": "delay_bit_depth",
          "min": 0,
          "max": 7,
          "default": 7
        },
        {
          "symbolicID": "SampleRate",
          "name": "Sample Rate",
          "valueType": 0,
          "displayType": "sample_rate",
          "min": 0,
          "max": 7,
          "default": 7
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.45
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
          "symbolicID": "Rate",
          "name": "Rate",
          "valueType": 1,
          "displayType": "frequency",
          "min": 0.1,
          "max": 8.0,
          "default": 0.2
        },
        {
          "symbolicID": "Depth",
          "name": "Depth",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.2
        },
        {
          "symbolicID": "Scale",
          "name": "Scale",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.75,
          "stereo-only": true
        },
        {
          "symbolicID": "Headroom",
          "name": "Headroom",
          "valueType": 1,
          "displayType": "volume",
          "min": -12.0,
          "max": 12.0,
          "default": 0.0
        },
        {
          "symbolicID": "Threshold",
          "name": "Threshold",
          "valueType": 1,
          "displayType": "volume",
          "min": -96.0,
          "max": 0.0,
          "default": -60.0
        },
        {
          "symbolicID": "Attack",
          "name": "Attack",
          "valueType": 1,
          "displayType": "time_ms",
          "min": 0.1,
          "max": 5.0,
          "default": 1.0
        },
        {
          "symbolicID": "SyncSelect1",
          "displayType": "sync_note",
          "name": "Note Sync",
          "valueType": 0,
          "min": 1,
          "max": 19,
          "default": 6
        },
        {
          "symbolicID": "TempoSync1",
          "displayType": "off_on",
          "name": "Tempo Sync",
          "valueType": 2,
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
      "symbolicID": "HD2_DelayCosmosEcho",
      "mono": true,
      "stereo": true,
      "name": "Cosmos Echo",
      "category": 9,
      "load": 10.60,
      "load_stereo": 19.20,
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
          "symbolicID": "Time",
          "name": "Time",
          "valueType": 1,
          "displayType": "time_ms_0_2000",
          "min": 0.15,
          "max": 2.0,
          "default": 0.600,
          "assign": 1
        },
        {
          "symbolicID": "Ramp",
          "name": "Ramp",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.75
        },
        {
          "symbolicID": "Feedback",
          "name": "Feedback",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.4
        },
        {
          "symbolicID": "WowFlutter",
          "name": "Wow Flutter",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5,
          "assign": 2
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
          "symbolicID": "Headroom",
          "name": "Headroom",
          "valueType": 1,
          "displayType": "volume",
          "min": -12.0,
          "max": 12.0,
          "default": 0.0
        },
        {
          "symbolicID": "Mode",
          "name": "Mode",
          "valueType": 0,
          "displayType": "delay_heads",
          "min": 0,
          "max": 5,
          "default": 4
        },
        {
          "symbolicID": "Bass",
          "name": "Bass",
          "valueType": 1,
          "displayType": "volume",
          "min": -18.0,
          "max": 18.0,
          "default": 0.0
        },
        {
          "symbolicID": "Treble",
          "name": "Treble",
          "valueType": 1,
          "displayType": "volume",
          "min": -18.0,
          "max": 18.0,
          "default": 0.0
        },
        {
          "symbolicID": "FBTone",
          "name": "FBTone",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.375
        },
        {
          "symbolicID": "Splice",
          "name": "Splice",
          "valueType": 1,
          "displayType": "generic_knob",
          "min": 0.0,
          "max": 1.0,
          "default": 0.0
        },
        {
          "symbolicID": "DryThru",
          "displayType": "off_on",
          "name": "Dry Thru",
          "valueType": 2,
          "min": false,
          "max": true,
          "default": false
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
          "symbolicID": "SyncSelect1",
          "displayType": "sync_note",
          "name": "Note Sync",
          "valueType": 0,
          "min": 1,
          "max": 19,
          "default": 6
        },
        {
          "symbolicID": "TempoSync1",
          "displayType": "off_on",
          "name": "Tempo Sync",
          "valueType": 2,
          "min": false,
          "max": true,
          "default": false
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
      "symbolicID": "HD2_DelayMultiPass",
      "mono": true,
      "stereo": true,
      "name": "Multi Pass",
      "load": 5.50,
      "load_stereo": 6.50,
      "category": 9,
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
          "symbolicID": "Time",
          "name": "Time",
          "valueType": 1,
          "displayType": "time_ms_0_4000",
          "min": 0.0,
          "max": 4.0,
          "default": 1.2,
          "assign": 1
        },
        {
          "symbolicID": "Feedback",
          "name": "Feedback",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.45
        },
        {
          "symbolicID": "Pattern",
          "name": "Pattern",
          "valueType": 0,
          "displayType": "integer_slider_1based",
          "min": 0,
          "max": 7,
          "default": 0
        },
        {
          "symbolicID": "Mode",
          "name": "Mode",
          "valueType": 2,
          "displayType": "delay_mode",
          "min": false,
          "max": true,
          "default": false
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.5,
          "default_stereo": 0.4
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
          "symbolicID": "Tap1Pan",
          "name": "T1 Pan",
          "valueType": 1,
          "displayType": "pan",
          "min": 0.0,
          "max": 1.0,
          "default": 0.422,
          "stereo-only": true
        },
        {
          "symbolicID": "Tap2Pan",
          "name": "T2 Pan",
          "valueType": 1,
          "displayType": "pan",
          "min": 0.0,
          "max": 1.0,
          "default": 0.622,
          "stereo-only": true
        },
        {
          "symbolicID": "Tap3Pan",
          "name": "T3 Pan",
          "valueType": 1,
          "displayType": "pan",
          "min": 0.0,
          "max": 1.0,
          "default": 0.2,
          "stereo-only": true
        },
        {
          "symbolicID": "Tap4Pan",
          "name": "T4 Pan",
          "valueType": 1,
          "displayType": "pan",
          "min": 0.0,
          "max": 1.0,
          "default": 0.8,
          "stereo-only": true
        },
        {
          "symbolicID": "Tap5Pan",
          "name": "T5 Pan",
          "valueType": 1,
          "displayType": "pan",
          "min": 0.0,
          "max": 1.0,
          "default": 0.022,
          "stereo-only": true
        },
        {
          "symbolicID": "Tap6Pan",
          "name": "T6 Pan",
          "valueType": 1,
          "displayType": "pan",
          "min": 0.0,
          "max": 1.0,
          "default": 1.0,
          "stereo-only": true
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
      "symbolicID": "HD2_DL4PingPong",
      "name": "Ping Pong",
      "load": 3.3,
      "category": 9,
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
          "symbolicID": "Time",
          "name": "Time",
          "valueType": 1,
          "displayType": "time_ms_0_2000",
          "min": 0.0,
          "max": 2.0,
          "default": 0.47,
          "assign": 1
        },
        {
          "symbolicID": "Feedback",
          "name": "Feedback",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.52
        },
        {
          "symbolicID": "Offset",
          "name": "Offset",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.52
        },
        {
          "symbolicID": "Spread",
          "name": "Spread",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 1.0
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.72
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
        }
      ]
    },
    {
      "symbolicID": "HD2_DL4DynamicDelayStereo",
      "name": "Dynamic",
      "load": 3.9,
      "category": 9,
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
          "symbolicID": "Time",
          "name": "Time",
          "valueType": 1,
          "displayType": "time_ms_0_2000",
          "min": 0.0,
          "max": 2.0,
          "default": 0.437,
          "assign": 1
        },
        {
          "symbolicID": "Feedback",
          "name": "Feedback",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.47
        },
        {
          "symbolicID": "Threshold",
          "name": "Threshold",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.50
        },
        {
          "symbolicID": "Ducking",
          "name": "Ducking",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.48
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.66
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
        }
      ]
    },
    {
      "symbolicID": "HD2_DL4StereoDelay",
      "name": "Stereo",
      "load": 4.5,
      "category": 9,
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
          "symbolicID": "LTime",
          "name": "Left Time",
          "valueType": 1,
          "displayType": "time_ms_0_2000",
          "min": 0.0,
          "max": 2.0,
          "default": 0.342,
          "assign": 3
        },
        {
          "symbolicID": "LFeedback",
          "name": "Left Feedback",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.55,
          "assign": 4
        },
        {
          "symbolicID": "RTime",
          "name": "Right Time",
          "valueType": 1,
          "displayType": "time_ms_0_2000",
          "min": 0.0,
          "max": 2.0,
          "default": 0.911,
          "assign": 5
        },
        {
          "symbolicID": "RFeedback",
          "name": "Right Feedback",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.66,
          "assign": 6
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.73
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
          "symbolicID": "SyncSelect2",
          "name": "Note Sync 2",
          "valueType": 0,
          "displayType": "sync_note",
          "min": 1,
          "max": 19,
          "default": 6
        },
        {
          "symbolicID": "TempoSync2",
          "name": "Tempo Sync 2",
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
        }
      ]
    },
    {
      "symbolicID": "HD2_DL4DigDelay",
      "name": "Digital",
      "load": 4.5,
      "category": 9,
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
          "symbolicID": "Time",
          "name": "Time",
          "valueType": 1,
          "displayType": "time_ms_0_2000",
          "min": 0.0,
          "max": 2.0,
          "default": 0.751,
          "assign": 1
        },
        {
          "symbolicID": "Feedback",
          "name": "Feedback",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.30
        },
        {
          "symbolicID": "Bass",
          "name": "Bass",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.50
        },
        {
          "symbolicID": "Treble",
          "name": "Treble",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.50
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.60
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
        }
      ]
    },
    {
      "symbolicID": "HD2_DL4DigDelayWithMod",
      "name": "Digital w/Mod",
      "load": 4.7,
      "category": 9,
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
          "symbolicID": "Time",
          "name": "Time",
          "valueType": 1,
          "displayType": "time_ms_0_2000",
          "min": 0.0,
          "max": 2.0,
          "default": 0.437,
          "assign": 1
        },
        {
          "symbolicID": "Feedback",
          "name": "Feedback",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.38
        },
        {
          "symbolicID": "ModSpeed",
          "name": "Mod Speed",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.39
        },
        {
          "symbolicID": "Depth",
          "name": "Depth",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.59
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
        }
      ]
    },
    {
      "symbolicID": "HD2_DL4Reverse",
      "name": "Reverse",
      "load": 4.0,
      "category": 9,
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
          "symbolicID": "Time",
          "name": "Time",
          "valueType": 1,
          "displayType": "time_ms_0_2000",
          "min": 0.0,
          "max": 2.0,
          "default": 2.0,
          "assign": 1
        },
        {
          "symbolicID": "Feedback",
          "name": "Feedback",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.0
        },
        {
          "symbolicID": "ModSpeed",
          "name": "Mod Speed",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.06
        },
        {
          "symbolicID": "Depth",
          "name": "Depth",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 1.0
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
          "max": 6.0,
          "default": 0.0
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
        }
      ]
    },
    {
      "symbolicID": "HD2_DL4LowResDelay",
      "name": "Lo Res",
      "load": 4.6,
      "category": 9,
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
          "symbolicID": "Time",
          "name": "Time",
          "valueType": 1,
          "displayType": "time_ms_0_2000",
          "min": 0.0,
          "max": 2.0,
          "default": 0.403,
          "assign": 1
        },
        {
          "symbolicID": "Feedback",
          "name": "Feedback",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.42
        },
        {
          "symbolicID": "Tone",
          "name": "Tone",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.42
        },
        {
          "symbolicID": "Res",
          "name": "Res",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 1.0
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.66
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
        }
      ]
    },
    {
      "symbolicID": "HD2_DL4TubeEchoStereo",
      "name": "Tube Echo",
      "load": 11.0,
      "category": 9,
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
          "symbolicID": "Time",
          "name": "Time",
          "valueType": 1,
          "displayType": "time_ms_0_2000",
          "min": 0.0,
          "max": 2.0,
          "default": 0.169,
          "assign": 1
        },
        {
          "symbolicID": "Feedback",
          "name": "Feedback",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.11
        },
        {
          "symbolicID": "Wow Flt",
          "name": "Wow/Flutter",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.31,
          "assign": 2
        },
        {
          "symbolicID": "Drive",
          "name": "Drive",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.0
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
          "symbolicID": "DryThru",
          "name": "Dry Thru",
          "valueType": 2,
          "displayType": "off_on",
          "min": false,
          "max": true,
          "default": true
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
        }
      ]
    },
    {
      "symbolicID": "HD2_DL4SweepEchoStereo",
      "name": "Sweep Echo",
      "load": 11.0,
      "category": 9,
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
          "symbolicID": "Time",
          "name": "Time",
          "valueType": 1,
          "displayType": "time_ms_0_2000",
          "min": 0.0,
          "max": 2.0,
          "default": 0.469,
          "assign": 1
        },
        {
          "symbolicID": "Feedback",
          "name": "Feedback",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.56
        },
        {
          "symbolicID": "Speed",
          "name": "Speed",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.33
        },
        {
          "symbolicID": "Depth",
          "name": "Depth",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.91
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.64
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
          "symbolicID": "DryThru",
          "name": "Dry Thru",
          "valueType": 2,
          "displayType": "off_on",
          "min": false,
          "max": true,
          "default": false
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
        }
      ]
    },
    {
      "symbolicID": "HD2_DL4AnalogDelayStereo",
      "name": "Analog Echo",
      "load": 6.6,
      "category": 9,
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
          "symbolicID": "Time",
          "name": "Time",
          "valueType": 1,
          "displayType": "time_ms_0_2000",
          "min": 0.0,
          "max": 2.0,
          "default": 0.255,
          "assign": 1
        },
        {
          "symbolicID": "Feedback",
          "name": "Feedback",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.23
        },
        {
          "symbolicID": "Bass",
          "name": "Bass",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.63
        },
        {
          "symbolicID": "Treble",
          "name": "Treble",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.56
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.23
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
        }
      ]
    },
    {
      "symbolicID": "HD2_DL4AnalogDelayStereoMod",
      "name": "Analog w/Mod",
      "load": 6.75,
      "category": 9,
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
          "symbolicID": "Time",
          "name": "Time",
          "valueType": 1,
          "displayType": "time_ms_0_2000",
          "min": 0.0,
          "max": 2.0,
          "default": 0.470,
          "assign": 1
        },
        {
          "symbolicID": "Feedback",
          "name": "Feedback",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.50
        },
        {
          "symbolicID": "ModSpeed",
          "name": "Mod Speed",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.34
        },
        {
          "symbolicID": "Depth",
          "name": "Depth",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.84
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.25
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
        }
      ]
    },
    {
      "symbolicID": "HD2_DL4AutoVolStereo",
      "name": "Auto-Vol Echo",
      "load": 5.8,
      "category": 9,
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
          "symbolicID": "Time",
          "name": "Time",
          "valueType": 1,
          "displayType": "time_ms_0_2000",
          "min": 0.0,
          "max": 2.0,
          "default": 0.392,
          "assign": 1
        },
        {
          "symbolicID": "Feedback",
          "name": "Feedback",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.63
        },
        {
          "symbolicID": "Depth",
          "name": "Depth",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.23
        },
        {
          "symbolicID": "Swell",
          "name": "Swell",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.81
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.44
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
        }
      ]
    },
    {
      "symbolicID": "HD2_DL4MultiheadStereo",
      "name": "Multi-Head",
      "load": 10.0,
      "category": 9,
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
          "symbolicID": "Time",
          "name": "Time",
          "valueType": 1,
          "displayType": "time_ms_0_2000",
          "min": 0.0,
          "max": 2.0,
          "default": 0.554,
          "assign": 1
        },
        {
          "symbolicID": "Feedback",
          "name": "Feedback",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.13
        },
        {
          "symbolicID": "Heads 1-2",
          "name": "Heads 1-2",
          "valueType": 0,
          "displayType": "heads12",
          "min": 0,
          "max": 3,
          "default": 1
        },
        {
          "symbolicID": "Heads 3-4",
          "name": "Heads 3-4",
          "valueType": 0,
          "displayType": "heads34",
          "min": 0,
          "max": 3,
          "default": 2
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.47
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
        }
      ]
    },
    {
      "symbolicID": "HD2_DL4EchoPlatterStereo",
      "name": "Echo Platter",
      "load": 11.50,
      "category": 9,
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
          "symbolicID": "Time",
          "name": "Time",
          "valueType": 1,
          "displayType": "time_ms_0_2000",
          "min": 0.0,
          "max": 2.0,
          "default": 0.225,
          "assign": 1
        },
        {
          "symbolicID": "Feedback",
          "name": "Feedback",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.40
        },
        {
          "symbolicID": "Wow Flt",
          "name": "Wow/Flutter",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.25,
          "assign": 2
        },
        {
          "symbolicID": "Drive",
          "name": "Drive",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.25
        },
        {
          "symbolicID": "Mix",
          "name": "Mix",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.50
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
          "symbolicID": "DryThru",
          "name": "Dry Thru",
          "valueType": 2,
          "displayType": "off_on",
          "min": false,
          "max": true,
          "default": false
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
        }
      ]
    },
    {
      "symbolicID": "HD2_DL4TapeEchoStereo",
      "name": "Tape Echo",
      "load": 11.00,
      "category": 9,
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
          "symbolicID": "Time",
          "name": "Time",
          "valueType": 1,
          "displayType": "time_ms_0_2000",
          "min": 0.0,
          "max": 2.0,
          "default": 0.279,
          "assign": 1
        },
        {
          "symbolicID": "Feedback",
          "name": "Feedback",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.39
        },
        {
          "symbolicID": "Bass",
          "name": "Bass",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.50
        },
        {
          "symbolicID": "Treble",
          "name": "Treble",
          "valueType": 1,
          "displayType": "percent",
          "min": 0.0,
          "max": 1.0,
          "default": 0.50
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
          "symbolicID": "DryThru",
          "name": "Dry Thru",
          "valueType": 2,
          "displayType": "off_on",
          "min": false,
          "max": true,
          "default": false
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
        }
      ]
    }
  ]
}