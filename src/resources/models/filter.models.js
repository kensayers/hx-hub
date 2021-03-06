export default {
    models: [
        {
            "symbolicID": "HD2_FilterMysterFilter",
            "mono": true,
            "stereo": true,
            "name": "Mystery Filter",
            "category": 6,
            "load": 1.81,
            "load_stereo": 2.61,
            "params": [
                {
                    "symbolicID": "Sensitivity",
                    "name": "Sensitivity",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.52,
                    "assign": 2
                },
                {
                    "symbolicID": "Frequency",
                    "name": "Frequency",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.8,
                    "assign": 3
                },
                {
                    "symbolicID": "Resonance",
                    "name": "Resonance",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.8
                },
                {
                    "symbolicID": "Attack",
                    "name": "Attack",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.13
                },
                {
                    "symbolicID": "Release",
                    "name": "Release",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.97
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
                    "default": -1.0
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
            "symbolicID": "HD2_FilterMutantFilter",
            "mono": true,
            "stereo": true,
            "name": "Mutant Filter",
            "category": 6,
            "load": 1.79,
            "load_stereo": 2.63,
            "params": [
                {
                    "symbolicID": "Mode",
                    "name": "Mode",
                    "valueType": 0,
                    "displayType": "mode_pass",
                    "min": 0,
                    "max": 2,
                    "default": 1
                },
                {
                    "symbolicID": "Peak",
                    "name": "Peak",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.8
                },
                {
                    "symbolicID": "Gain",
                    "name": "Gain",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.15
                },
                {
                    "symbolicID": "Range",
                    "name": "Range",
                    "valueType": 2,
                    "displayType": "filter_range",
                    "min": false,
                    "max": true,
                    "default": false
                },
                {
                    "symbolicID": "Drive",
                    "name": "Drive",
                    "valueType": 2,
                    "displayType": "down_up",
                    "min": false,
                    "max": true,
                    "default": true,
                    "assign": 1
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
            "symbolicID": "HD2_FilterAutoFilter",
            "mono": true,
            "stereo": true,
            "name": "Auto Filter",
            "category": 6,
            "load": 2.80,
            "load_stereo": 4.25,
            "params": [
                {
                    "symbolicID": "Mode",
                    "name": "Mode",
                    "valueType": 0,
                    "displayType": "mode_pass",
                    "min": 0,
                    "max": 2,
                    "default": 1
                },
                {
                    "symbolicID": "FilterGain",
                    "name": "Filter Gain",
                    "valueType": 1,
                    "displayType": "volume_eq",
                    "min": 0.0,
                    "max": 36.0,
                    "default": 18.0
                },
                {
                    "symbolicID": "FilterQ",
                    "name": "Filter Q",
                    "valueType": 1,
                    "displayType": "filter_q",
                    "min": 1.0,
                    "max": 10.0,
                    "default": 7.5,
                    "assign": 4
                },
                {
                    "symbolicID": "Sens",
                    "name": "Sensitivity",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.4,
                    "assign": 2
                },
                {
                    "symbolicID": "Attack",
                    "name": "Attack",
                    "valueType": 1,
                    "displayType": "time_ms_filter_attack",
                    "min": 0.005,
                    "max": 2.0,
                    "default": 0.02
                },
                {
                    "symbolicID": "Decay",
                    "name": "Decay",
                    "valueType": 1,
                    "displayType": "time_ms_filter_decay",
                    "min": 0.005,
                    "max": 3.0,
                    "default": 0.35
                },
                {
                    "symbolicID": "Frequency",
                    "name": "Frequency",
                    "valueType": 1,
                    "displayType": "frequency",
                    "min": 20.0,
                    "max": 1000.0,
                    "default": 50.0
                },
                {
                    "symbolicID": "FreqDepth",
                    "name": "Freq Depth",
                    "valueType": 1,
                    "displayType": "frequency",
                    "min": 0.0,
                    "max": 10000.0,
                    "default": 3500.0
                },
                {
                    "symbolicID": "Direction",
                    "name": "Direction",
                    "valueType": 2,
                    "displayType": "down_up",
                    "min": false,
                    "max": true,
                    "default": true,
                    "assign": 1
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
            "symbolicID": "HD2_FM4QFilter",
            "name": "Q Filter",
            "load": 4.0,
            "category": 6,
            "devices": [{"id": 2162944},
                {"id": 2162945},
                {"id": 2162693},
                {"id": 2162694},
                {"id": 2162689, "version": "0x02300100"},
                {"id": 2162690, "version": "0x02300100"},
                {"id": 2162692, "version": "0x02300100"}],
            "params": [
                {
                    "symbolicID": "Freq",
                    "name": "Frequency",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.27,
                    "assign": 3
                },
                {
                    "symbolicID": "Q",
                    "name": "Q",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.75,
                    "assign": 4
                },
                {
                    "symbolicID": "Gain",
                    "name": "Gain",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.63
                },
                {
                    "symbolicID": "Type",
                    "name": "Type",
                    "valueType": 0,
                    "displayType": "mode_pass",
                    "min": 0,
                    "max": 2,
                    "default": 1
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
            "symbolicID": "HD2_FM4Seeker",
            "name": "Seeker",
            "load": 4.4,
            "category": 6,
            "devices": [{"id": 2162944},
                {"id": 2162945},
                {"id": 2162693},
                {"id": 2162694},
                {"id": 2162689, "version": "0x02300100"},
                {"id": 2162690, "version": "0x02300100"},
                {"id": 2162692, "version": "0x02300100"}],
            "params": [
                {
                    "symbolicID": "Speed",
                    "name": "Speed",
                    "valueType": 1,
                    "displayType": "frequency",
                    "min": 0.0,
                    "max": 15.0,
                    "default": 5.8
                },
                {
                    "symbolicID": "Freq",
                    "name": "Frequency",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.0,
                    "assign": 3
                },
                {
                    "symbolicID": "Q",
                    "name": "Q",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.39,
                    "assign": 4
                },
                {
                    "symbolicID": "Steps",
                    "name": "Steps",
                    "valueType": 0,
                    "displayType": "integer_steps",
                    "min": 2,
                    "max": 9,
                    "default": 8
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
                }
            ]
        },
        {
            "symbolicID": "HD2_FM4ObiWah",
            "name": "Obi Wah",
            "load": 4.5,
            "category": 6,
            "devices": [{"id": 2162944},
                {"id": 2162945},
                {"id": 2162693},
                {"id": 2162694},
                {"id": 2162689, "version": "0x02300100"},
                {"id": 2162690, "version": "0x02300100"},
                {"id": 2162692, "version": "0x02300100"}],
            "params": [
                {
                    "symbolicID": "Speed",
                    "name": "Speed",
                    "valueType": 1,
                    "displayType": "frequency",
                    "min": 0.0,
                    "max": 15.0,
                    "default": 6.33
                },
                {
                    "symbolicID": "Freq",
                    "name": "Frequency",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.47,
                    "assign": 3
                },
                {
                    "symbolicID": "Q",
                    "name": "Q",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.72,
                    "assign": 4
                },
                {
                    "symbolicID": "Type",
                    "name": "Type",
                    "valueType": 0,
                    "displayType": "mode_pass",
                    "min": 0,
                    "max": 2,
                    "default": 1
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
                }
            ]
        },
        {
            "symbolicID": "HD2_FM4TronUp",
            "name": "Tron Up",
            "load": 4.6,
            "category": 6,
            "devices": [{"id": 2162944},
                {"id": 2162945},
                {"id": 2162693},
                {"id": 2162694},
                {"id": 2162689, "version": "0x02300100"},
                {"id": 2162690, "version": "0x02300100"},
                {"id": 2162692, "version": "0x02300100"}],
            "params": [
                {
                    "symbolicID": "Freq",
                    "name": "Frequency",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5,
                    "assign": 3
                },
                {
                    "symbolicID": "Q",
                    "name": "Q",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 1.0,
                    "assign": 4
                },
                {
                    "symbolicID": "Range",
                    "name": "Range",
                    "valueType": 2,
                    "displayType": "filter_range",
                    "min": false,
                    "max": true,
                    "default": false
                },
                {
                    "symbolicID": "Type",
                    "name": "Type",
                    "valueType": 0,
                    "displayType": "mode_pass",
                    "min": 0,
                    "max": 2,
                    "default": 1
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
            "symbolicID": "HD2_FM4TronDown",
            "name": "Tron Down",
            "load": 4.6,
            "category": 6,
            "devices": [{"id": 2162944},
                {"id": 2162945},
                {"id": 2162693},
                {"id": 2162694},
                {"id": 2162689, "version": "0x02300100"},
                {"id": 2162690, "version": "0x02300100"},
                {"id": 2162692, "version": "0x02300100"}],
            "params": [
                {
                    "symbolicID": "Freq",
                    "name": "Frequency",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.69,
                    "assign": 3
                },
                {
                    "symbolicID": "Q",
                    "name": "Q",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 1.0,
                    "assign": 4
                },
                {
                    "symbolicID": "Range",
                    "name": "Range",
                    "valueType": 2,
                    "displayType": "filter_range",
                    "min": false,
                    "max": true,
                    "default": false
                },
                {
                    "symbolicID": "Type",
                    "name": "Type",
                    "valueType": 0,
                    "displayType": "mode_pass",
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
            "symbolicID": "HD2_FM4Throbber",
            "name": "Throbber",
            "load": 4.75,
            "category": 6,
            "devices": [{"id": 2162944},
                {"id": 2162945},
                {"id": 2162693},
                {"id": 2162694},
                {"id": 2162689, "version": "0x02300100"},
                {"id": 2162690, "version": "0x02300100"},
                {"id": 2162692, "version": "0x02300100"}],
            "params": [
                {
                    "symbolicID": "Speed",
                    "name": "Speed",
                    "valueType": 1,
                    "displayType": "frequency",
                    "min": 0.0,
                    "max": 15.0,
                    "default": 4.80
                },
                {
                    "symbolicID": "Freq",
                    "name": "Frequency",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.13,
                    "assign": 3
                },
                {
                    "symbolicID": "Q",
                    "name": "Q",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.47,
                    "assign": 4
                },
                {
                    "symbolicID": "Wave",
                    "name": "Wave",
                    "valueType": 0,
                    "displayType": "wave_shape_throbber",
                    "min": 0,
                    "max": 3,
                    "default": 0
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
                }
            ]
        },
        {
            "symbolicID": "HD2_FM4SlowFilter",
            "name": "Slow Filter",
            "load": 4.75,
            "category": 6,
            "devices": [{"id": 2162944},
                {"id": 2162945},
                {"id": 2162693},
                {"id": 2162694},
                {"id": 2162689, "version": "0x02300100"},
                {"id": 2162690, "version": "0x02300100"},
                {"id": 2162692, "version": "0x02300100"}],
            "params": [
                {
                    "symbolicID": "Freq",
                    "name": "Frequency",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.09,
                    "assign": 3
                },
                {
                    "symbolicID": "Q",
                    "name": "Q",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.67,
                    "assign": 4
                },
                {
                    "symbolicID": "Speed",
                    "name": "Speed",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.7
                },
                {
                    "symbolicID": "Mode",
                    "name": "Mode",
                    "valueType": 2,
                    "displayType": "up_down",
                    "min": false,
                    "max": true,
                    "default": false,
                    "assign": 1
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
            "symbolicID": "HD2_FM4CometTrails",
            "name": "Comet Trails",
            "load": 7.0,
            "category": 6,
            "devices": [{"id": 2162944},
                {"id": 2162945},
                {"id": 2162693},
                {"id": 2162694},
                {"id": 2162689, "version": "0x02300100"},
                {"id": 2162690, "version": "0x02300100"},
                {"id": 2162692, "version": "0x02300100"}],
            "params": [
                {
                    "symbolicID": "Speed",
                    "name": "Speed",
                    "valueType": 1,
                    "displayType": "frequency",
                    "min": 0.0,
                    "max": 15.0,
                    "default": 3.33
                },
                {
                    "symbolicID": "Freq",
                    "name": "Frequency",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.0,
                    "assign": 3
                },
                {
                    "symbolicID": "Q",
                    "name": "Q",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5,
                    "assign": 4
                },
                {
                    "symbolicID": "Gain",
                    "name": "Gain",
                    "valueType": 1,
                    "displayType": "percent",
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
                }
            ]
        },
        {
            "symbolicID": "HD2_FM4SpinCycle",
            "name": "Spin Cycle",
            "load": 5.00,
            "category": 6,
            "devices": [{"id": 2162944},
                {"id": 2162945},
                {"id": 2162693},
                {"id": 2162694},
                {"id": 2162689, "version": "0x02300100"},
                {"id": 2162690, "version": "0x02300100"},
                {"id": 2162692, "version": "0x02300100"}],
            "params": [
                {
                    "symbolicID": "Speed",
                    "name": "Speed",
                    "valueType": 1,
                    "displayType": "frequency",
                    "min": 0.0,
                    "max": 15.0,
                    "default": 1.21
                },
                {
                    "symbolicID": "Freq",
                    "name": "Frequency",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.86,
                    "assign": 3
                },
                {
                    "symbolicID": "Q",
                    "name": "Q",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.25,
                    "assign": 4
                },
                {
                    "symbolicID": "Vol Sens",
                    "name": "Vol Sens",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.0,
                    "assign": 2
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
                }
            ]
        },
        {
            "symbolicID": "HD2_FM4VTron",
            "name": "V Tron",
            "load": 3.00,
            "category": 6,
            "devices": [{"id": 2162944},
                {"id": 2162945},
                {"id": 2162693},
                {"id": 2162694},
                {"id": 2162689, "version": "0x02300100"},
                {"id": 2162690, "version": "0x02300100"},
                {"id": 2162692, "version": "0x02300100"}],
            "params": [
                {
                    "symbolicID": "Speed",
                    "name": "Speed",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.47
                },
                {
                    "symbolicID": "Start",
                    "name": "Start",
                    "valueType": 0,
                    "displayType": "vowel_start",
                    "min": 0,
                    "max": 4,
                    "default": 0
                },
                {
                    "symbolicID": "End",
                    "name": "End",
                    "valueType": 0,
                    "displayType": "vowel_end",
                    "min": 0,
                    "max": 4,
                    "default": 4
                },
                {
                    "symbolicID": "Mode",
                    "name": "Mode",
                    "valueType": 2,
                    "displayType": "up_updown",
                    "min": false,
                    "max": true,
                    "default": true
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
            "symbolicID": "HD2_FM4VoiceBox",
            "name": "Voice Box",
            "load": 3.00,
            "category": 6,
            "devices": [{"id": 2162944},
                {"id": 2162945},
                {"id": 2162693},
                {"id": 2162694},
                {"id": 2162689, "version": "0x02300100"},
                {"id": 2162690, "version": "0x02300100"},
                {"id": 2162692, "version": "0x02300100"}],
            "params": [
                {
                    "symbolicID": "Speed",
                    "name": "Speed",
                    "valueType": 1,
                    "displayType": "frequency",
                    "min": 0.0,
                    "max": 15.0,
                    "default": 2.95
                },
                {
                    "symbolicID": "Start",
                    "name": "Start",
                    "valueType": 0,
                    "displayType": "vowel_start",
                    "min": 0,
                    "max": 4,
                    "default": 0
                },
                {
                    "symbolicID": "End",
                    "name": "End",
                    "valueType": 0,
                    "displayType": "vowel_end",
                    "min": 0,
                    "max": 4,
                    "default": 2
                },
                {
                    "symbolicID": "Auto",
                    "name": "Auto",
                    "valueType": 0,
                    "displayType": "auto",
                    "min": 0,
                    "max": 3,
                    "default": 0
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
                }
            ]
        },
        {
            "symbolicID": "HD2_FilterAshevillePattrn",
            "name": "Asheville Pattrn",
            "mono": true,
            "stereo": true,
            "category": 6,
            "load": 9.25,
            "load_stereo": 12.75,
            "devices": [{"id": 2162944},
                {"id": 2162945},
                {"id": 2162694, "version": "0x02790000"},
                {"id": 2162693, "version": "0x02790000"},
                {"id": 2162689, "version": "0x02790000"},
                {"id": 2162690, "version": "0x02790000"},
                {"id": 2162692, "version": "0x02790000"}],
            "params": [
                {
                    "symbolicID": "Rate",
                    "name": "Rate",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5
                },
                {
                    "symbolicID": "Pattern",
                    "name": "Pattern",
                    "valueType": 0,
                    "displayType": "ashville_pattern",
                    "min": 0,
                    "max": 20,
                    "default": 4
                },
                {
                    "symbolicID": "Envelope",
                    "name": "Envelope",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5
                },
                {
                    "symbolicID": "Voice",
                    "name": "Voice",
                    "valueType": 2,
                    "displayType": "ashville_voice",
                    "min": false,
                    "max": true,
                    "default": true
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
                    "symbolicID": "Output",
                    "name": "Output",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 1.0
                },
                {
                    "symbolicID": "Drive",
                    "name": "Drive",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5
                },
                {
                    "symbolicID": "Direction",
                    "name": "Direction",
                    "valueType": 2,
                    "displayType": "ashville_direction",
                    "min": false,
                    "max": true,
                    "default": false
                },
                {
                    "symbolicID": "LFO",
                    "name": "LFO",
                    "valueType": 1,
                    "displayType": "percent_zero_off",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.0
                },
                {
                    "symbolicID": "Spread",
                    "name": "Spread",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 1.0,
                    "stereo-only": true
                },
                {
                    "symbolicID": "Level1",
                    "name": "Level1",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 1.0
                },
                {
                    "symbolicID": "Level2",
                    "name": "Level2",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 1.0
                },
                {
                    "symbolicID": "Level3",
                    "name": "Level3",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 1.0
                },
                {
                    "symbolicID": "Level4",
                    "name": "Level4",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 1.0
                },
                {
                    "symbolicID": "Level5",
                    "name": "Level5",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 1.0
                },
                {
                    "symbolicID": "Level6",
                    "name": "Level6",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 1.0
                },
                {
                    "symbolicID": "Level7",
                    "name": "Level7",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 1.0
                },
                {
                    "symbolicID": "Level8",
                    "name": "Level8",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 1.0
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