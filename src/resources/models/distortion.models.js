export default {
    models: [
        {
            "symbolicID": "HD2_DistTopSecretOD",
            "mono": true,
            "stereo": true,
            "name": "Top Secret OD",
            "category": 3,
            "load": 4.60,
            "load_stereo": 8.28,
            "params": [
                {
                    "symbolicID": "Gain",
                    "name": "Gain",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.65,
                    "assign": 1
                },
                {
                    "symbolicID": "Level",
                    "name": "Level",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.83,
                    "assign": 3
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
            "symbolicID": "HD2_DistHedgehogD9",
            "mono": true,
            "stereo": true,
            "name": "Hedgehog D9",
            "category": 3,
            "load": 4.33,
            "load_stereo": 7.82,
            "params": [
                {
                    "symbolicID": "Gain",
                    "name": "Gain",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.7,
                    "assign": 1
                },
                {
                    "symbolicID": "Tone",
                    "name": "Tone",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.27,
                    "assign": 2
                },
                {
                    "symbolicID": "Level",
                    "name": "Level",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.68,
                    "assign": 3
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
            "symbolicID": "HD2_DistValveDriver",
            "mono": true,
            "stereo": true,
            "name": "Valve Driver",
            "category": 3,
            "load": 9.53,
            "load_stereo": 18.28,
            "params": [
                {
                    "symbolicID": "Gain",
                    "name": "Gain",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.65,
                    "assign": 1
                },
                {
                    "symbolicID": "Bass",
                    "name": "Bass",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.55
                },
                {
                    "symbolicID": "Treble",
                    "name": "Treble",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.45
                },
                {
                    "symbolicID": "Level",
                    "name": "Level",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.66,
                    "assign": 3
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
            "symbolicID": "HD2_DistArbitratorFuzz",
            "mono": true,
            "stereo": true,
            "name": "Arbitrator Fuzz",
            "category": 3,
            "load": 4.76,
            "load_stereo": 8.79,
            "params": [
                {
                    "symbolicID": "Fuzz",
                    "name": "Fuzz",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.9,
                    "assign": 1
                },
                {
                    "symbolicID": "Level",
                    "name": "Level",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.55,
                    "assign": 3
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
            "symbolicID": "HD2_DistTriangleFuzz",
            "mono": true,
            "stereo": true,
            "name": "Triangle Fuzz",
            "category": 3,
            "load": 7.50,
            "load_stereo": 14.09,
            "params": [
                {
                    "symbolicID": "Sustain",
                    "name": "Sustain",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.83,
                    "assign": 1
                },
                {
                    "symbolicID": "Tone",
                    "name": "Tone",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.56,
                    "assign": 2
                },
                {
                    "symbolicID": "Level",
                    "name": "Level",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.81,
                    "assign": 3
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
            "symbolicID": "HD2_DistCompulsiveDrive",
            "mono": true,
            "stereo": true,
            "name": "Compulsive Drive",
            "category": 3,
            "load": 4.46,
            "load_stereo": 8.08,
            "params": [
                {
                    "symbolicID": "Gain",
                    "name": "Gain",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.66,
                    "assign": 1
                },
                {
                    "symbolicID": "Tone",
                    "name": "Tone",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5,
                    "assign": 2
                },
                {
                    "symbolicID": "LPHP",
                    "name": "Peak Type",
                    "valueType": 2,
                    "displayType": "low_peak_high_peak",
                    "min": false,
                    "max": true,
                    "default": false
                },
                {
                    "symbolicID": "Version",
                    "name": "Version",
                    "valueType": 2,
                    "displayType": "dist_version",
                    "min": false,
                    "max": true,
                    "default": false
                },
                {
                    "symbolicID": "Level",
                    "name": "Level",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.65,
                    "assign": 3
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
            "symbolicID": "HD2_DistScream808",
            "mono": true,
            "stereo": true,
            "name": "Scream 808",
            "category": 3,
            "load": 5.50,
            "load_stereo": 10.08,
            "params": [
                {
                    "symbolicID": "Gain",
                    "name": "Gain",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.52,
                    "assign": 1
                },
                {
                    "symbolicID": "Tone",
                    "name": "Tone",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.65,
                    "assign": 2
                },
                {
                    "symbolicID": "Level",
                    "name": "Level",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.67,
                    "assign": 3
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
            "symbolicID": "HD2_DistMinotaur",
            "mono": true,
            "stereo": true,
            "name": "Minotaur",
            "category": 3,
            "load": 8.55,
            "load_stereo": 16.25,
            "params": [
                {
                    "symbolicID": "Gain",
                    "name": "Gain",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.42,
                    "assign": 1
                },
                {
                    "symbolicID": "Tone",
                    "name": "Tone",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.53,
                    "assign": 2
                },
                {
                    "symbolicID": "Level",
                    "name": "Level",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.6,
                    "assign": 3
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
            "symbolicID": "HD2_DistMegaphone",
            "mono": true,
            "stereo": true,
            "name": "Megaphone",
            "category": 3,
            "load": 3.41,
            "load_stereo": 5.15,
            "params": [
                {
                    "symbolicID": "Grit",
                    "name": "Grit",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.76,
                    "assign": 1
                },
                {
                    "symbolicID": "Tone",
                    "name": "Tone",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5,
                    "assign": 2
                },
                {
                    "symbolicID": "Focus",
                    "name": "Focus",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.65
                },
                {
                    "symbolicID": "Space",
                    "name": "Space",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.4
                },
                {
                    "symbolicID": "Mix",
                    "name": "Mix",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.79
                },
                {
                    "symbolicID": "Level",
                    "name": "Level",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.68,
                    "assign": 3
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
            "symbolicID": "HD2_DistVerminDist",
            "mono": true,
            "stereo": true,
            "name": "Vermin Dist",
            "category": 3,
            "load": 4.49,
            "load_stereo": 8.09,
            "params": [
                {
                    "symbolicID": "Gain",
                    "name": "Gain",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.68,
                    "assign": 1
                },
                {
                    "symbolicID": "Filter",
                    "name": "Filter",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.6,
                    "assign": 2
                },
                {
                    "symbolicID": "Level",
                    "name": "Level",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.85,
                    "assign": 3
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
            "symbolicID": "HD2_DistTycoctaviaFuzz",
            "mono": true,
            "stereo": true,
            "name": "Tycoctavia Fuzz",
            "category": 3,
            "load": 5.11,
            "load_stereo": 9.43,
            "params": [
                {
                    "symbolicID": "Fuzz",
                    "name": "Fuzz",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.75,
                    "assign": 1
                },
                {
                    "symbolicID": "Level",
                    "name": "Level",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.67,
                    "assign": 3
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
            "symbolicID": "HD2_DistIndustrialFuzz",
            "mono": true,
            "stereo": true,
            "name": "Industrial Fuzz",
            "category": 3,
            "load": 9.59,
            "load_stereo": 17.60,
            "params": [
                {
                    "symbolicID": "Compress",
                    "name": "Compress",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.57
                },
                {
                    "symbolicID": "Gate",
                    "name": "Gate",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.52
                },
                {
                    "symbolicID": "Drive",
                    "name": "Drive",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 1.0,
                    "assign": 1
                },
                {
                    "symbolicID": "Stability",
                    "name": "Stability",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.73
                },
                {
                    "symbolicID": "Oscillator",
                    "name": "Oscillator",
                    "valueType": 2,
                    "displayType": "off_on",
                    "min": false,
                    "max": true,
                    "default": false
                },
                {
                    "symbolicID": "Level",
                    "name": "Level",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.77,
                    "assign": 3
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
            "symbolicID": "HD2_DistBitcrusher",
            "mono": true,
            "stereo": true,
            "name": "Bitcrusher",
            "category": 3,
            "load": 5.05,
            "load_stereo": 9.15,
            "params": [
                {
                    "symbolicID": "Gain",
                    "name": "Gain",
                    "valueType": 1,
                    "displayType": "volume_eq",
                    "min": 0.0,
                    "max": 48.0,
                    "default": 0.0
                },
                {
                    "symbolicID": "BitDepth",
                    "name": "Bit Depth",
                    "valueType": 1,
                    "displayType": "bit_depth",
                    "min": 1.0,
                    "max": 24.0,
                    "default": 8.0
                },
                {
                    "symbolicID": "SampleRate",
                    "name": "Sample Rate",
                    "valueType": 1,
                    "displayType": "frequency",
                    "min": 100.0,
                    "max": 48000.0,
                    "default": 18000.0
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
                    "symbolicID": "Level",
                    "name": "Level",
                    "valueType": 1,
                    "displayType": "volume",
                    "min": -120.0,
                    "max": 6.0,
                    "default": 0.0
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
                    "symbolicID": "OpenThreshold",
                    "name": "Open",
                    "valueType": 1,
                    "displayType": "volume_eq",
                    "min": -96.0,
                    "max": 0.0,
                    "default": -70.0
                },
                {
                    "symbolicID": "CloseThreshold",
                    "name": "Close",
                    "valueType": 1,
                    "displayType": "volume_eq",
                    "min": -96.0,
                    "max": 0.0,
                    "default": -70.0
                },
                {
                    "symbolicID": "HoldTime",
                    "name": "Hold Time",
                    "valueType": 1,
                    "displayType": "time_ms_dist_hold_time",
                    "min": 0.01,
                    "max": 0.8,
                    "default": 0.01
                },
                {
                    "symbolicID": "Decay",
                    "name": "Decay",
                    "valueType": 1,
                    "displayType": "time_ms_dist_decay",
                    "min": 0.01,
                    "max": 4.0,
                    "default": 0.01
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
            "symbolicID": "HD2_DistKWB",
            "mono": true,
            "stereo": true,
            "name": "KWB",
            "category": 3,
            "load": 8.05,
            "load_stereo": 15.05,
            "params": [
                {
                    "symbolicID": "Gain",
                    "name": "Gain",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.67,
                    "assign": 1
                },
                {
                    "symbolicID": "PushDiode",
                    "name": "Push Diode",
                    "valueType": 0,
                    "displayType": "diode",
                    "min": 0,
                    "max": 3,
                    "default": 1
                },
                {
                    "symbolicID": "PullDiode",
                    "name": "Pull Diode",
                    "valueType": 0,
                    "displayType": "diode",
                    "min": 0,
                    "max": 3,
                    "default": 3
                },
                {
                    "symbolicID": "Bass",
                    "name": "Bass",
                    "valueType": 1,
                    "displayType": "volume_eq",
                    "min": -12.0,
                    "max": 12.0,
                    "default": 0.0,
                    "assign": 4
                },
                {
                    "symbolicID": "Treble",
                    "name": "Treble",
                    "valueType": 1,
                    "displayType": "volume_eq",
                    "min": -12.0,
                    "max": 12.0,
                    "default": 0.0,
                    "assign": 5
                },
                {
                    "symbolicID": "Level",
                    "name": "Level",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.692,
                    "assign": 3
                },
                {
                    "symbolicID": "Asym",
                    "name": "Asymmetry",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
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
            "symbolicID": "HD2_DistTeemah",
            "mono": true,
            "stereo": true,
            "name": "Teemah!",
            "category": 3,
            "load": 5.55,
            "load_stereo": 10.25,
            "params": [
                {
                    "symbolicID": "Gain",
                    "name": "Gain",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.52,
                    "assign": 1
                },
                {
                    "symbolicID": "Bass",
                    "name": "Bass Cut",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5
                },
                {
                    "symbolicID": "Treble",
                    "name": "Treble Cut",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5
                },
                {
                    "symbolicID": "Clipping",
                    "name": "Clipping",
                    "valueType": 0,
                    "displayType": "clipping",
                    "min": 0,
                    "max": 2,
                    "default": 0
                },
                {
                    "symbolicID": "Level",
                    "name": "Level",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.625,
                    "assign": 3
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
            "symbolicID": "HD2_DistWringerFuzz",
            "mono": true,
            "stereo": true,
            "name": "Wringer Fuzz",
            "category": 3,
            "load": 11.82,
            "load_stereo": 18.43,
            "params": [
                {
                    "symbolicID": "Gain",
                    "name": "Gain",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 1.0,
                    "assign": 1
                },
                {
                    "symbolicID": "Treble",
                    "name": "Treble",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5
                },
                {
                    "symbolicID": "Bass",
                    "name": "Bass",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5
                },
                {
                    "symbolicID": "Level",
                    "name": "Level",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5,
                    "assign": 3
                },
                {
                    "symbolicID": "FuzzType",
                    "name": "Fuzz Type",
                    "valueType": 0,
                    "displayType": "fuzz_type",
                    "min": 0,
                    "max": 1,
                    "default": 0
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
            "symbolicID": "HD2_DistStuporOD",
            "mono": true,
            "stereo": true,
            "name": "Stupor OD",
            "category": 3,
            "load": 5.78,
            "load_stereo": 10.85,
            "params": [
                {
                    "symbolicID": "Drive",
                    "name": "Drive",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.625,
                    "assign": 1
                },
                {
                    "symbolicID": "Tone",
                    "name": "Tone",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5,
                    "assign": 2
                },
                {
                    "symbolicID": "Level",
                    "name": "Level",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5,
                    "assign": 3
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
            "symbolicID": "HD2_DistClawthornDrive",
            "mono": true,
            "stereo": true,
            "name": "Clawthorn Drive",
            "category": 3,
            "load": 13.40,
            "load_stereo": 25.75,
            "params": [
                {
                    "symbolicID": "ODGain",
                    "name": "OD Gain",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.44,
                    "assign": 1
                },
                {
                    "symbolicID": "ODTone",
                    "name": "OD Tone",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.6,
                    "assign": 2
                },
                {
                    "symbolicID": "ODLevel",
                    "name": "OD Level",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.35,
                    "assign": 3
                },
                {
                    "symbolicID": "ODLowBoost",
                    "name": "Low Boost",
                    "valueType": 2,
                    "displayType": "off_on",
                    "min": false,
                    "max": true,
                    "default": true
                },
                {
                    "symbolicID": "Fuzz",
                    "name": "Fuzz",
                    "valueType": 2,
                    "displayType": "off_on",
                    "min": false,
                    "max": true,
                    "default": true
                },
                {
                    "symbolicID": "FuzzOct",
                    "name": "Fuzz Oct",
                    "valueType": 2,
                    "displayType": "off_on",
                    "min": false,
                    "max": true,
                    "default": false
                },
                {
                    "symbolicID": "FuzzGain",
                    "name": "Fuzz Gain",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5
                },
                {
                    "symbolicID": "FuzzTone",
                    "name": "Fuzz Tone",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5
                },
                {
                    "symbolicID": "FuzzLevel",
                    "name": "Fuzz Level",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.2
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
            "symbolicID": "HD2_DistObsidian7000",
            "mono": true,
            "stereo": true,
            "name": "Obsidian 7000",
            "category": 3,
            "load": 7.88,
            "load_stereo": 14.85,
            "params": [
                {
                    "symbolicID": "Drive",
                    "name": "Drive",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.39,
                    "assign": 1
                },
                {
                    "symbolicID": "Level",
                    "name": "Level",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5,
                    "assign": 3
                },
                {
                    "symbolicID": "Blend",
                    "name": "Blend",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 1.0
                },
                {
                    "symbolicID": "Grunt",
                    "name": "Grunt",
                    "valueType": 0,
                    "displayType": "attack",
                    "min": 0,
                    "max": 2,
                    "default": 2
                },
                {
                    "symbolicID": "Attack",
                    "name": "Attack",
                    "valueType": 0,
                    "displayType": "attack",
                    "min": 0,
                    "max": 2,
                    "default": 1
                },
                {
                    "symbolicID": "Master",
                    "name": "Master",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.55
                },
                {
                    "symbolicID": "Bass",
                    "name": "Bass",
                    "valueType": 1,
                    "displayType": "volume",
                    "min": -20.0,
                    "max": 20.0,
                    "default": 5.5,
                    "assign": 4
                },
                {
                    "symbolicID": "LoMidFreq",
                    "name": "Lo Mid Freq",
                    "valueType": 0,
                    "displayType": "lo_mid_freq",
                    "min": 0,
                    "max": 2,
                    "default": 0
                },
                {
                    "symbolicID": "LoMid",
                    "name": "Lo Mid",
                    "valueType": 1,
                    "displayType": "volume",
                    "min": -15.0,
                    "max": 15.0,
                    "default": -5.0
                },
                {
                    "symbolicID": "HiMidFreq",
                    "name": "Hi Mid Freq",
                    "valueType": 0,
                    "displayType": "hi_mid_freq",
                    "min": 0,
                    "max": 2,
                    "default": 0
                },
                {
                    "symbolicID": "HiMid",
                    "name": "Hi Mid",
                    "valueType": 1,
                    "displayType": "volume",
                    "min": -15.0,
                    "max": 15.0,
                    "default": -4.6
                },
                {
                    "symbolicID": "Treble",
                    "name": "Treble",
                    "valueType": 1,
                    "displayType": "volume",
                    "min": -20.0,
                    "max": 20.0,
                    "default": -1.5,
                    "assign": 5
                },
                {
                    "symbolicID": "Distortion",
                    "name": "Distortion",
                    "valueType": 2,
                    "displayType": "off_on",
                    "min": false,
                    "max": true,
                    "default": true
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
            "symbolicID": "HD2_DistKinkyBoost",
            "mono": true,
            "stereo": true,
            "name": "Kinky Boost",
            "category": 3,
            "load": 5.10,
            "load_stereo": 9.10,
            "devices": [{"id": 2162944},
                {"id": 2162945},
                {"id": 2162693},
                {"id": 2162694},
                {"id": 2162689, "version": "0x02210100"},
                {"id": 2162690, "version": "0x02210100"},
                {"id": 2162692, "version": "0x02210100"}],
            "params": [
                {
                    "symbolicID": "Drive",
                    "name": "Drive",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.55,
                    "assign": 1
                },
                {
                    "symbolicID": "Boost",
                    "name": "Boost",
                    "valueType": 2,
                    "displayType": "off_on",
                    "min": false,
                    "max": true,
                    "default": false
                },
                {
                    "symbolicID": "Bright",
                    "name": "Bright",
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
            "symbolicID": "HD2_DistThrifterFuzz",
            "mono": true,
            "stereo": true,
            "name": "Thrifter Fuzz",
            "category": 3,
            "load": 9.00,
            "load_stereo": 17.05,
            "devices": [{"id": 2162944},
                {"id": 2162945},
                {"id": 2162693},
                {"id": 2162694},
                {"id": 2162689, "version": "0x02210100"},
                {"id": 2162690, "version": "0x02210100"},
                {"id": 2162692, "version": "0x02210100"}],
            "params": [
                {
                    "symbolicID": "Drive",
                    "name": "Drive",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.80,
                    "assign": 1
                },
                {
                    "symbolicID": "Attack",
                    "name": "Attack",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.36
                },
                {
                    "symbolicID": "Notch Freq",
                    "name": "Notch Freq",
                    "valueType": 1,
                    "displayType": "frequency",
                    "min": 200.0,
                    "max": 2500.0,
                    "default": 1600.0
                },
                {
                    "symbolicID": "Notch Gain",
                    "name": "Notch Gain",
                    "valueType": 1,
                    "displayType": "volume",
                    "min": -10.0,
                    "max": 10.0,
                    "default": -3.4
                },
                {
                    "symbolicID": "Thick",
                    "name": "Thick",
                    "valueType": 0,
                    "displayType": "off_on",
                    "min": 0,
                    "max": 1,
                    "default": 1
                },
                {
                    "symbolicID": "Level",
                    "name": "Level",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.55,
                    "assign": 3
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
            "symbolicID": "HD2_DM4TubeDrive",
            "name": "Tube Drive",
            "load": 6.0,
            "category": 3,
            "devices": [{"id": 2162944},
                {"id": 2162945},
                {"id": 2162693},
                {"id": 2162694},
                {"id": 2162689, "version": "0x02300100"},
                {"id": 2162690, "version": "0x02300100"},
                {"id": 2162692, "version": "0x02300100"}],
            "params": [
                {
                    "symbolicID": "Drive",
                    "name": "Drive",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.59,
                    "assign": 1
                },
                {
                    "symbolicID": "Bass",
                    "name": "Bass",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.53
                },
                {
                    "symbolicID": "Mid",
                    "name": "Mid",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5,
                    "assign": 2
                },
                {
                    "symbolicID": "Treble",
                    "name": "Treble",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5
                },
                {
                    "symbolicID": "Output",
                    "name": "Output",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.82,
                    "assign": 3
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
            "symbolicID": "HD2_DM4Screamer",
            "name": "Screamer",
            "load": 7.6,
            "category": 3,
            "devices": [{"id": 2162944},
                {"id": 2162945},
                {"id": 2162693},
                {"id": 2162694},
                {"id": 2162689, "version": "0x02300100"},
                {"id": 2162690, "version": "0x02300100"},
                {"id": 2162692, "version": "0x02300100"}],
            "params": [
                {
                    "symbolicID": "Drive",
                    "name": "Drive",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.44,
                    "assign": 1
                },
                {
                    "symbolicID": "Bass",
                    "name": "Bass",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.61
                },
                {
                    "symbolicID": "Tone",
                    "name": "Tone",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.73,
                    "assign": 2
                },
                {
                    "symbolicID": "Treble",
                    "name": "Treble",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.53
                },
                {
                    "symbolicID": "Output",
                    "name": "Output",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.80,
                    "assign": 3
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
            "symbolicID": "HD2_DM4Overdrive",
            "name": "Overdrive",
            "load": 6.0,
            "category": 3,
            "devices": [{"id": 2162944},
                {"id": 2162945},
                {"id": 2162693},
                {"id": 2162694},
                {"id": 2162689, "version": "0x02300100"},
                {"id": 2162690, "version": "0x02300100"},
                {"id": 2162692, "version": "0x02300100"}],
            "params": [
                {
                    "symbolicID": "Drive",
                    "name": "Drive",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.52,
                    "assign": 1
                },
                {
                    "symbolicID": "Bass",
                    "name": "Bass",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5
                },
                {
                    "symbolicID": "Mid",
                    "name": "Mid",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5,
                    "assign": 2
                },
                {
                    "symbolicID": "Treble",
                    "name": "Treble",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5
                },
                {
                    "symbolicID": "Output",
                    "name": "Output",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.65,
                    "assign": 3
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
            "symbolicID": "HD2_DM4ClassicDistortion",
            "name": "Classic Dist",
            "load": 6.0,
            "category": 3,
            "devices": [{"id": 2162944},
                {"id": 2162945},
                {"id": 2162693},
                {"id": 2162694},
                {"id": 2162689, "version": "0x02300100"},
                {"id": 2162690, "version": "0x02300100"},
                {"id": 2162692, "version": "0x02300100"}],
            "params": [
                {
                    "symbolicID": "Drive",
                    "name": "Drive",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.78,
                    "assign": 1
                },
                {
                    "symbolicID": "Bass",
                    "name": "Bass",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.48
                },
                {
                    "symbolicID": "Filter",
                    "name": "Filter",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.47,
                    "assign": 2
                },
                {
                    "symbolicID": "Treble",
                    "name": "Treble",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5
                },
                {
                    "symbolicID": "Output",
                    "name": "Output",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.36,
                    "assign": 3
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
            "symbolicID": "HD2_DM4HeavyDistortion",
            "name": "Heavy Dist",
            "load": 6.0,
            "category": 3,
            "devices": [{"id": 2162944},
                {"id": 2162945},
                {"id": 2162693},
                {"id": 2162694},
                {"id": 2162689, "version": "0x02300100"},
                {"id": 2162690, "version": "0x02300100"},
                {"id": 2162692, "version": "0x02300100"}],
            "params": [
                {
                    "symbolicID": "Drive",
                    "name": "Drive",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 1.0,
                    "assign": 1
                },
                {
                    "symbolicID": "Bass",
                    "name": "Bass",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.73
                },
                {
                    "symbolicID": "Mid",
                    "name": "Mid",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.31,
                    "assign": 2
                },
                {
                    "symbolicID": "Treble",
                    "name": "Treble",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.59
                },
                {
                    "symbolicID": "Output",
                    "name": "Output",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.73,
                    "assign": 3
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
            "symbolicID": "HD2_DM4ColorDrive",
            "name": "Colordrive",
            "load": 6.0,
            "category": 3,
            "devices": [{"id": 2162944},
                {"id": 2162945},
                {"id": 2162693},
                {"id": 2162694},
                {"id": 2162689, "version": "0x02300100"},
                {"id": 2162690, "version": "0x02300100"},
                {"id": 2162692, "version": "0x02300100"}],
            "params": [
                {
                    "symbolicID": "Drive",
                    "name": "Drive",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.77,
                    "assign": 1
                },
                {
                    "symbolicID": "Bass",
                    "name": "Bass",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.8
                },
                {
                    "symbolicID": "Mid",
                    "name": "Mid",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5,
                    "assign": 2
                },
                {
                    "symbolicID": "Treble",
                    "name": "Treble",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.55
                },
                {
                    "symbolicID": "Output",
                    "name": "Output",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.64,
                    "assign": 3
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
            "symbolicID": "HD2_DM4BuzzSaw",
            "name": "Buzz Saw",
            "load": 6.0,
            "category": 3,
            "devices": [{"id": 2162944},
                {"id": 2162945},
                {"id": 2162693},
                {"id": 2162694},
                {"id": 2162689, "version": "0x02300100"},
                {"id": 2162690, "version": "0x02300100"},
                {"id": 2162692, "version": "0x02300100"}],
            "params": [
                {
                    "symbolicID": "Drive",
                    "name": "Drive",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 1.0,
                    "assign": 1
                },
                {
                    "symbolicID": "Bass",
                    "name": "Bass",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5
                },
                {
                    "symbolicID": "Mid",
                    "name": "Mid",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5,
                    "assign": 2
                },
                {
                    "symbolicID": "Treble",
                    "name": "Treble",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5
                },
                {
                    "symbolicID": "Output",
                    "name": "Output",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.52,
                    "assign": 3
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
            "symbolicID": "HD2_DM4FacialFuzz",
            "name": "Facial Fuzz",
            "load": 6.0,
            "category": 3,
            "devices": [{"id": 2162944},
                {"id": 2162945},
                {"id": 2162693},
                {"id": 2162694},
                {"id": 2162689, "version": "0x02300100"},
                {"id": 2162690, "version": "0x02300100"},
                {"id": 2162692, "version": "0x02300100"}],
            "params": [
                {
                    "symbolicID": "Drive",
                    "name": "Drive",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.92,
                    "assign": 1
                },
                {
                    "symbolicID": "Bass",
                    "name": "Bass",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5
                },
                {
                    "symbolicID": "Mid",
                    "name": "Mid",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5,
                    "assign": 2
                },
                {
                    "symbolicID": "Treble",
                    "name": "Treble",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5
                },
                {
                    "symbolicID": "Output",
                    "name": "Output",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.75,
                    "assign": 3
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
            "symbolicID": "HD2_DM4JumboFuzz",
            "name": "Jumbo Fuzz",
            "load": 6.0,
            "category": 3,
            "devices": [{"id": 2162944},
                {"id": 2162945},
                {"id": 2162693},
                {"id": 2162694},
                {"id": 2162689, "version": "0x02300100"},
                {"id": 2162690, "version": "0x02300100"},
                {"id": 2162692, "version": "0x02300100"}],
            "params": [
                {
                    "symbolicID": "Drive",
                    "name": "Drive",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.63,
                    "assign": 1
                },
                {
                    "symbolicID": "Bass",
                    "name": "Bass",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5
                },
                {
                    "symbolicID": "Mid",
                    "name": "Mid",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5,
                    "assign": 2
                },
                {
                    "symbolicID": "Treble",
                    "name": "Treble",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5
                },
                {
                    "symbolicID": "Output",
                    "name": "Output",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5,
                    "assign": 3
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
            "symbolicID": "HD2_DM4FuzzPi",
            "name": "Fuzz Pi",
            "load": 6.0,
            "category": 3,
            "devices": [{"id": 2162944},
                {"id": 2162945},
                {"id": 2162693},
                {"id": 2162694},
                {"id": 2162689, "version": "0x02300100"},
                {"id": 2162690, "version": "0x02300100"},
                {"id": 2162692, "version": "0x02300100"}],
            "params": [
                {
                    "symbolicID": "Drive",
                    "name": "Drive",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.53,
                    "assign": 1
                },
                {
                    "symbolicID": "Bass",
                    "name": "Bass",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.3
                },
                {
                    "symbolicID": "Mid",
                    "name": "Mid",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.34,
                    "assign": 2
                },
                {
                    "symbolicID": "Treble",
                    "name": "Treble",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5
                },
                {
                    "symbolicID": "Output",
                    "name": "Output",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.9,
                    "assign": 3
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
            "symbolicID": "HD2_DM4JetFuzz",
            "name": "Jet Fuzz",
            "load": 7.0,
            "category": 3,
            "devices": [{"id": 2162944},
                {"id": 2162945},
                {"id": 2162693},
                {"id": 2162694},
                {"id": 2162689, "version": "0x02300100"},
                {"id": 2162690, "version": "0x02300100"},
                {"id": 2162692, "version": "0x02300100"}],
            "params": [
                {
                    "symbolicID": "Drive",
                    "name": "Drive",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
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
                    "default": 1.0
                },
                {
                    "symbolicID": "Tone",
                    "name": "Tone",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.27,
                    "assign": 2
                },
                {
                    "symbolicID": "Rate",
                    "name": "Rate",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.11
                },
                {
                    "symbolicID": "Output",
                    "name": "Output",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.71,
                    "assign": 3
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
            "symbolicID": "HD2_DM4Line6Drive",
            "name": "L6 Drive",
            "load": 6.0,
            "category": 3,
            "devices": [{"id": 2162944},
                {"id": 2162945},
                {"id": 2162693},
                {"id": 2162694},
                {"id": 2162689, "version": "0x02300100"},
                {"id": 2162690, "version": "0x02300100"},
                {"id": 2162692, "version": "0x02300100"}],
            "params": [
                {
                    "symbolicID": "Drive",
                    "name": "Drive",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.92,
                    "assign": 1
                },
                {
                    "symbolicID": "Bass",
                    "name": "Bass",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.89
                },
                {
                    "symbolicID": "Mid",
                    "name": "Mid",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.47,
                    "assign": 2
                },
                {
                    "symbolicID": "Treble",
                    "name": "Treble",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.69
                },
                {
                    "symbolicID": "Output",
                    "name": "Output",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5,
                    "assign": 3
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
            "symbolicID": "HD2_DM4Line6Distortion",
            "name": "L6 Distortion",
            "load": 6.0,
            "category": 3,
            "devices": [{"id": 2162944},
                {"id": 2162945},
                {"id": 2162693},
                {"id": 2162694},
                {"id": 2162689, "version": "0x02300100"},
                {"id": 2162690, "version": "0x02300100"},
                {"id": 2162692, "version": "0x02300100"}],
            "params": [
                {
                    "symbolicID": "Drive",
                    "name": "Drive",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.8,
                    "assign": 1
                },
                {
                    "symbolicID": "Bass",
                    "name": "Bass",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 1.0
                },
                {
                    "symbolicID": "Mid",
                    "name": "Mid",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.41,
                    "assign": 2
                },
                {
                    "symbolicID": "Treble",
                    "name": "Treble",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.88
                },
                {
                    "symbolicID": "Output",
                    "name": "Output",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5,
                    "assign": 3
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
            "symbolicID": "HD2_DM4SubOctFuzz",
            "name": "Sub Oct Fuzz",
            "load": 6.5,
            "category": 3,
            "devices": [{"id": 2162944},
                {"id": 2162945},
                {"id": 2162693},
                {"id": 2162694},
                {"id": 2162689, "version": "0x02300100"},
                {"id": 2162690, "version": "0x02300100"},
                {"id": 2162692, "version": "0x02300100"}],
            "params": [
                {
                    "symbolicID": "Drive",
                    "name": "Drive",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 1.0,
                    "assign": 1
                },
                {
                    "symbolicID": "Bass",
                    "name": "Bass",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 1.0
                },
                {
                    "symbolicID": "Sub",
                    "name": "Sub",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.28,
                    "assign": 2
                },
                {
                    "symbolicID": "Treble",
                    "name": "Treble",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.63
                },
                {
                    "symbolicID": "Output",
                    "name": "Output",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5,
                    "assign": 3
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
            "symbolicID": "HD2_DM4OctaveFuzz",
            "name": "Octave Fuzz",
            "load": 8.00,
            "category": 3,
            "devices": [{"id": 2162944},
                {"id": 2162945},
                {"id": 2162693},
                {"id": 2162694},
                {"id": 2162689, "version": "0x02300100"},
                {"id": 2162690, "version": "0x02300100"},
                {"id": 2162692, "version": "0x02300100"}],
            "params": [
                {
                    "symbolicID": "Drive",
                    "name": "Drive",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.14,
                    "assign": 1
                },
                {
                    "symbolicID": "Bass",
                    "name": "Bass",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.53
                },
                {
                    "symbolicID": "Mid",
                    "name": "Mid",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5,
                    "assign": 2
                },
                {
                    "symbolicID": "Treble",
                    "name": "Treble",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.61
                },
                {
                    "symbolicID": "Output",
                    "name": "Output",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.36,
                    "assign": 3
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
            "symbolicID": "HD2_DistDeezOneMod",
            "name": "Deez One Mod",
            "mono": true,
            "stereo": true,
            "category": 3,
            "load": 8.70,
            "load_stereo": 16.40,
            "devices": [{"id": 2162944},
                {"id": 2162945},
                {"id": 2162694},
                {"id": 2162693, "version": "0x02590000"},
                {"id": 2162689, "version": "0x02590000"},
                {"id": 2162690, "version": "0x02590000"},
                {"id": 2162692, "version": "0x02590000"}],
            "params": [
                {
                    "symbolicID": "Drive",
                    "name": "Drive",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.63,
                    "assign": 1
                },
                {
                    "symbolicID": "Tone",
                    "name": "Tone",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.62,
                    "assign": 2
                },
                {
                    "symbolicID": "Level",
                    "name": "Level",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.25,
                    "assign": 3
                },
                {
                    "symbolicID": "Clipping",
                    "name": "Clipping",
                    "valueType": 2,
                    "displayType": "clipping_sym",
                    "min": false,
                    "max": true,
                    "default": true
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
            "symbolicID": "HD2_DistDeezOneVintage",
            "name": "Deez One Vintage",
            "mono": true,
            "stereo": true,
            "category": 3,
            "load": 8.70,
            "load_stereo": 16.40,
            "devices": [{"id": 2162944},
                {"id": 2162945},
                {"id": 2162694},
                {"id": 2162693, "version": "0x02590000"},
                {"id": 2162689, "version": "0x02590000"},
                {"id": 2162690, "version": "0x02590000"},
                {"id": 2162692, "version": "0x02590000"}],
            "params": [
                {
                    "symbolicID": "Drive",
                    "name": "Drive",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.80,
                    "assign": 1
                },
                {
                    "symbolicID": "Tone",
                    "name": "Tone",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.50,
                    "assign": 2
                },
                {
                    "symbolicID": "Level",
                    "name": "Level",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.75,
                    "assign": 3
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
            "symbolicID": "HD2_DistDerangedMaster",
            "name": "Deranged Master",
            "mono": true,
            "stereo": true,
            "category": 3,
            "load": 5.20,
            "load_stereo": 9.25,
            "devices": [{"id": 2162944},
                {"id": 2162945},
                {"id": 2162694},
                {"id": 2162693, "version": "0x02590000"},
                {"id": 2162689, "version": "0x02590000"},
                {"id": 2162690, "version": "0x02590000"},
                {"id": 2162692, "version": "0x02590000"}],
            "params": [
                {
                    "symbolicID": "Drive",
                    "name": "Drive",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.77,
                    "assign": 1
                },
                {
                    "symbolicID": "Bass",
                    "name": "Bass",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.522
                },
                {
                    "symbolicID": "Treble",
                    "name": "Treble",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.65
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
            "symbolicID": "HD2_DistAmpegScramblerOD",
            "name": "Ampeg Scrambler",
            "mono": true,
            "stereo": true,
            "category": 3,
            "load": 12.50,
            "load_stereo": 23.75,
            "devices": [{"id": 2162944},
                {"id": 2162945},
                {"id": 2162694, "version": "0x02790000"},
                {"id": 2162693, "version": "0x02790000"},
                {"id": 2162689, "version": "0x02790000"},
                {"id": 2162690, "version": "0x02790000"},
                {"id": 2162692, "version": "0x02790000"}],
            "params": [
                {
                    "symbolicID": "Drive",
                    "name": "Drive",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.76,
                    "assign": 1
                },
                {
                    "symbolicID": "Blend",
                    "name": "Blend",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.63,
                    "default_stereo": 0.32
                },
                {
                    "symbolicID": "Treble",
                    "name": "Treble",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.42
                },
                {
                    "symbolicID": "Level",
                    "name": "Level",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.66,
                    "assign": 3
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
            "symbolicID": "HD2_DistZeroAmpBassDI",
            "name": "ZeroAmp Bass DI",
            "mono": true,
            "stereo": true,
            "category": 3,
            "load": 7.00,
            "load_stereo": 12.50,
            "devices": [{"id": 2162944},
                {"id": 2162945},
                {"id": 2162694, "version": "0x02790000"},
                {"id": 2162693, "version": "0x02790000"},
                {"id": 2162689, "version": "0x02790000"},
                {"id": 2162690, "version": "0x02790000"},
                {"id": 2162692, "version": "0x02790000"}],
            "params": [
                {
                    "symbolicID": "Drive",
                    "name": "Drive",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.65,
                    "assign": 1
                },
                {
                    "symbolicID": "Bass",
                    "name": "Bass",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 1.0,
                    "default_stereo": 0.59
                },
                {
                    "symbolicID": "Treble",
                    "name": "Treble",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.3
                },
                {
                    "symbolicID": "Presence",
                    "name": "Presence",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5,
                    "assign": 6
                },
                {
                    "symbolicID": "Blend",
                    "name": "Blend",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.4
                },
                {
                    "symbolicID": "Level",
                    "name": "Level",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.48,
                    "assign": 3
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
            "symbolicID": "HD2_DistDhyanaDrive",
            "name": "Dyhana Drive",
            "mono": true,
            "stereo": true,
            "category": 3,
            "load": 6.50,
            "load_stereo": 11.75,
            "devices": [{"id": 2162944},
                {"id": 2162945},
                {"id": 2162694, "version": "0x02790000"},
                {"id": 2162693, "version": "0x02790000"},
                {"id": 2162689, "version": "0x02790000"},
                {"id": 2162690, "version": "0x02790000"},
                {"id": 2162692, "version": "0x02790000"}],
            "params": [
                {
                    "symbolicID": "Gain",
                    "name": "Gain",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.44,
                    "assign": 1
                },
                {
                    "symbolicID": "Voice",
                    "name": "Voice",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.56
                },
                {
                    "symbolicID": "Tone",
                    "name": "Tone",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.44,
                    "assign": 2
                },
                {
                    "symbolicID": "Level",
                    "name": "Level",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.4,
                    "assign": 3
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
            "symbolicID": "HD2_DistHeirApparent",
            "name": "Heir Apparent",
            "mono": true,
            "stereo": true,
            "category": 3,
            "load": 7.50,
            "load_stereo": 15.00,
            "devices": [{"id": 2162944},
                {"id": 2162945},
                {"id": 2162694, "version": "0x02790000"},
                {"id": 2162693, "version": "0x02790000"},
                {"id": 2162689, "version": "0x02790000"},
                {"id": 2162690, "version": "0x02790000"},
                {"id": 2162692, "version": "0x02790000"}],
            "params": [
                {
                    "symbolicID": "Gain",
                    "name": "Gain",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5,
                    "assign": 1
                },
                {
                    "symbolicID": "Tone",
                    "name": "Tone",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5,
                    "assign": 2
                },
                {
                    "symbolicID": "Presence",
                    "name": "Presence",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.0,
                    "assign": 6
                },
                {
                    "symbolicID": "Clipping",
                    "name": "Clipping",
                    "valueType": 0,
                    "displayType": "clipping_dist",
                    "min": 0,
                    "max": 2,
                    "default": 0,
                    "assign": 7
                },
                {
                    "symbolicID": "GainMod",
                    "name": "Gain Mod",
                    "valueType": 0,
                    "displayType": "gain_mod",
                    "min": 0,
                    "max": 1,
                    "default": 1,
                    "assign": 8
                },
                {
                    "symbolicID": "Level",
                    "name": "Level",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.62,
                    "assign": 3
                },
                {
                    "symbolicID": "Voltage",
                    "name": "Voltage",
                    "valueType": 2,
                    "displayType": "voltage",
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
            "symbolicID": "HD2_DistToneSovereign",
            "name": "Tone Sovereign",
            "mono": true,
            "stereo": true,
            "category": 3,
            "load": 15.00,
            "load_stereo": 28.50,
            "devices": [{"id": 2162944},
                {"id": 2162945},
                {"id": 2162694, "version": "0x02790000"},
                {"id": 2162693, "version": "0x02790000"},
                {"id": 2162689, "version": "0x02790000"},
                {"id": 2162690, "version": "0x02790000"},
                {"id": 2162692, "version": "0x02790000"}],
            "params": [
                {
                    "symbolicID": "Gain 1",
                    "name": "Gain 1",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5,
                    "assign": 1
                },
                {
                    "symbolicID": "Tone 1",
                    "name": "Tone 1",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5,
                    "assign": 2
                },
                {
                    "symbolicID": "Presence 1",
                    "name": "Presence 1",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.0
                },
                {
                    "symbolicID": "Clipping 1",
                    "name": "Clipping 1",
                    "valueType": 0,
                    "displayType": "clipping_dist",
                    "min": 0,
                    "max": 2,
                    "default": 1
                },
                {
                    "symbolicID": "GainMod 1",
                    "name": "Gain Mod 1",
                    "valueType": 0,
                    "displayType": "gain_mod",
                    "min": 0,
                    "max": 1,
                    "default": 0
                },
                {
                    "symbolicID": "Level 1",
                    "name": "Level 1",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5,
                    "assign": 3
                },
                {
                    "symbolicID": "Gain 2",
                    "name": "Gain 2",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5
                },
                {
                    "symbolicID": "Tone 2",
                    "name": "Tone 2",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5
                },
                {
                    "symbolicID": "Presence 2",
                    "name": "Presence 2",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.0,
                    "assign": 6
                },
                {
                    "symbolicID": "Clipping 2",
                    "name": "Clipping 2",
                    "valueType": 0,
                    "displayType": "clipping_dist",
                    "min": 0,
                    "max": 2,
                    "default": 0,
                    "assign": 7
                },
                {
                    "symbolicID": "GainMod 2",
                    "name": "Gain Mod 2",
                    "valueType": 0,
                    "displayType": "gain_mod",
                    "min": 0,
                    "max": 1,
                    "default": 1,
                    "assign": 8
                },
                {
                    "symbolicID": "Level 2",
                    "name": "Level 2",
                    "valueType": 1,
                    "displayType": "generic_knob",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.6
                },
                {
                    "symbolicID": "Voltage",
                    "name": "Voltage",
                    "valueType": 2,
                    "displayType": "voltage",
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