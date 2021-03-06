export default {
    models: [
        {
            "symbolicID": "@global_params",
            "params": [
                {
                    "symbolicID": "@tempo",
                    "name": "Tempo",
                    "valueType": 1,
                    "min": 20.0,
                    "max": 240.0,
                    "default": 120.0
                },
                {
                    "symbolicID": "@topology0",
                    "name": "DSP 0 Topology",
                    "valueType": 3,
                    "min": "",
                    "max": "",
                    "default": ""
                },
                {
                    "symbolicID": "@topology1",
                    "name": "DSP 1 Topology",
                    "valueType": 3,
                    "min": "",
                    "max": "",
                    "default": ""
                },
                {
                    "symbolicID": "@pedalstate",
                    "name": "Pedal State",
                    "valueType": 0,
                    "min": 0,
                    "max": 2,
                    "default": 2
                },
                {
                    "symbolicID": "@cursor_dsp",
                    "name": "Cursor DSP",
                    "valueType": 0,
                    "min": 0,
                    "max": 1,
                    "default": 0
                },
                {
                    "symbolicID": "@cursor_group",
                    "name": "Cursor Group",
                    "valueType": 3,
                    "min": "",
                    "max": "",
                    "default": ""
                },
                {
                    "symbolicID": "@cursor_path",
                    "name": "Cursor Path",
                    "valueType": 0,
                    "min": 0,
                    "max": 1,
                    "default": 0
                },
                {
                    "symbolicID": "@cursor_position",
                    "name": "Cursor Position",
                    "valueType": 0,
                    "min": 0,
                    "max": 7,
                    "default": 0
                },
                {
                    "symbolicID": "@current_snapshot",
                    "name": "Current Snapshot",
                    "valueType": 0,
                    "min": 0,
                    "max": 7,
                    "default": 0
                },
                {
                    "symbolicID": "@guitarinputZ",
                    "name": "Guitar In-Z",
                    "valueType": 0,
                    "displayType": "guitar_input_z",
                    "min": 0,
                    "max": 8,
                    "default": 0
                },
                {
                    "symbolicID": "@PowercabSelect",
                    "name": "Powercab Select",
                    "valueType": 0,
                    "displayType": "powercab_select",
                    "min": 0,
                    "max": 2,
                    "default": 2
                },
                {
                    "symbolicID": "@PowercabMode",
                    "name": "Powercab Mode",
                    "valueType": 0,
                    "displayType": "powercab_mode",
                    "min": 0,
                    "max": 2,
                    "default": 0
                },
                {
                    "symbolicID": "@PowercabVoicing",
                    "name": "Powercab Voicing",
                    "valueType": 0,
                    "displayType": "powercab_voicing",
                    "min": 0,
                    "max": 2,
                    "default": 0
                },
                {
                    "symbolicID": "@DtSelect",
                    "name": "DT Select",
                    "valueType": 0,
                    "displayType": "dt_select",
                    "min": 0,
                    "max": 2,
                    "default": 2
                }
            ]
        },
        {
            "symbolicID": "@dt",
            "params": [
                {
                    "symbolicID": "@dt_channel",
                    "name": "Channel",
                    "displayType": "dt_channel",
                    "valueType": 0,
                    "min": 0,
                    "max": 1,
                    "default": 0
                },
                {
                    "symbolicID": "@dt_topology",
                    "name": "Topology",
                    "displayType": "dt_topology",
                    "valueType": 0,
                    "min": 0,
                    "max": 3,
                    "default": 0
                },
                {
                    "symbolicID": "@dt_poweramp",
                    "name": "Power Amp",
                    "displayType": "dt_poweramp",
                    "valueType": 0,
                    "min": 0,
                    "max": 1,
                    "default": 1
                },
                {
                    "symbolicID": "@dt_tubeconfig",
                    "name": "Tube Config",
                    "displayType": "dt_tubeconfig",
                    "valueType": 0,
                    "min": 0,
                    "max": 1,
                    "default": 0
                },
                {
                    "symbolicID": "@dt_reverb",
                    "name": "Reverb",
                    "displayType": "off_on",
                    "valueType": 2,
                    "min": false,
                    "max": true,
                    "default": true
                },
                {
                    "symbolicID": "@dt_revmix",
                    "name": "Reverb Mix",
                    "displayType": "percent",
                    "valueType": 1,
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.25
                },
                {
                    "symbolicID": "@dt_12ax7boost",
                    "name": "12AX7 Boost",
                    "displayType": "dt_12ax7boost",
                    "valueType": 0,
                    "min": 0,
                    "max": 1,
                    "default": 0
                },
                {
                    "symbolicID": "@dt_feedbackcap",
                    "name": "Feedback Cap",
                    "displayType": "dt_feedbackcap",
                    "valueType": 0,
                    "min": 0,
                    "max": 1,
                    "default": 0
                },
                {
                    "symbolicID": "@dt_bplusvoltage",
                    "name": "B+ Voltage",
                    "displayType": "dt_bplusvoltage",
                    "valueType": 0,
                    "min": 0,
                    "max": 1,
                    "default": 0
                }
            ]
        },
        {
            "symbolicID": "@powercab",
            "params": [
                {
                    "symbolicID": "@powercab_speaker",
                    "name": "Speaker",
                    "displayType": "powercab_speaker",
                    "valueType": 0,
                    "min": 0,
                    "max": 12,
                    "default": 0
                },
                {
                    "symbolicID": "@powercab_mic",
                    "name": "DI Mic",
                    "displayType": "mic",
                    "valueType": 0,
                    "min": 0,
                    "max": 15,
                    "default": 0
                },
                {
                    "symbolicID": "@powercab_distance",
                    "name": "Distance",
                    "displayType": "cab_mic_distance",
                    "valueType": 1,
                    "min": 1.0,
                    "max": 12.0,
                    "default": 3.5
                },
                {
                    "symbolicID": "@powercab_userir",
                    "name": "User IR",
                    "displayType": "integer_slider",
                    "valueType": 0,
                    "min": 0,
                    "max": 127,
                    "default": 0
                },
                {
                    "symbolicID": "@powercab_lowcut",
                    "name": "Low Cut",
                    "displayType": "cab_low_cut",
                    "valueType": 1,
                    "min": 19.9,
                    "max": 500.0,
                    "default": 19.9
                },
                {
                    "symbolicID": "@powercab_hicut",
                    "name": "Hi Cut",
                    "displayType": "cab_high_cut",
                    "valueType": 1,
                    "min": 500.0,
                    "max": 20100.0,
                    "default": 20100.0
                },
                {
                    "symbolicID": "@powercab_flatlevel",
                    "name": "Flat Level",
                    "displayType": "volume",
                    "valueType": 1,
                    "min": -60.0,
                    "max": 6.0,
                    "default": 0.0
                },
                {
                    "symbolicID": "@powercab_speakerlevel",
                    "name": "Speaker Level",
                    "displayType": "volume",
                    "valueType": 1,
                    "min": -60.0,
                    "max": 6.0,
                    "default": -15.0
                },
                {
                    "symbolicID": "@powercab_irlevel",
                    "name": "Speaker Level",
                    "displayType": "volume",
                    "valueType": 1,
                    "min": -60.0,
                    "max": 6.0,
                    "default": -18.0
                },
                {
                    "symbolicID": "@powercab_color",
                    "name": "Color",
                    "displayType": "powercab_color",
                    "valueType": 0,
                    "min": 0,
                    "max": 8,
                    "default": 0
                }
            ]
        },
        {
            "symbolicID": "@variax",
            "params": [
                {
                    "symbolicID": "@variax_model",
                    "name": "Variax Model",
                    "displayType": "variax_model",
                    "valueType": 0,
                    "min": 0,
                    "max": 60,
                    "default": 0
                },
                {
                    "symbolicID": "@variax_toneknob",
                    "name": "Variax Tone Knob",
                    "displayType": "variax_volume_tone",
                    "valueType": 1,
                    "min": -0.1,
                    "max": 10.0,
                    "default": -0.1
                },
                {
                    "symbolicID": "@variax_volumeknob",
                    "name": "Variax Volume Knob",
                    "displayType": "variax_volume_tone",
                    "valueType": 1,
                    "min": -0.1,
                    "max": 10.0,
                    "default": -0.1
                },
                {
                    "symbolicID": "@variax_lockctrls",
                    "name": "Variax Lock Control",
                    "displayType": "variax_lockctrls",
                    "valueType": 0,
                    "min": 0,
                    "max": 7,
                    "default": 0
                },
                {
                    "symbolicID": "@variax_customtuning",
                    "name": "Variax Tuning",
                    "displayType": "variax_customtuning",
                    "valueType": 2,
                    "min": false,
                    "max": true,
                    "default": true
                },
                {
                    "symbolicID": "@variax_str1tuning",
                    "name": "Variax String 1",
                    "displayType": "variax_str1tuning",
                    "valueType": 0,
                    "min": -12,
                    "max": 12,
                    "default": 0
                },
                {
                    "symbolicID": "@variax_str2tuning",
                    "name": "Variax String 2",
                    "displayType": "variax_str2tuning",
                    "valueType": 0,
                    "min": -12,
                    "max": 12,
                    "default": 0
                },
                {
                    "symbolicID": "@variax_str3tuning",
                    "name": "Variax String 3",
                    "displayType": "variax_str3tuning",
                    "valueType": 0,
                    "min": -12,
                    "max": 12,
                    "default": 0
                },
                {
                    "symbolicID": "@variax_str4tuning",
                    "name": "Variax String 4",
                    "displayType": "variax_str4tuning",
                    "valueType": 0,
                    "min": -12,
                    "max": 12,
                    "default": 0
                },
                {
                    "symbolicID": "@variax_str5tuning",
                    "name": "Variax String 5",
                    "displayType": "variax_str5tuning",
                    "valueType": 0,
                    "min": -12,
                    "max": 12,
                    "default": 0
                },
                {
                    "symbolicID": "@variax_str6tuning",
                    "name": "Variax String 6",
                    "displayType": "variax_str6tuning",
                    "valueType": 0,
                    "min": -12,
                    "max": 12,
                    "default": 0
                },
                {
                    "symbolicID": "@variax_str1level",
                    "name": "Variax String 1",
                    "displayType": "variax_strlevel",
                    "valueType": 1,
                    "min": 0.0,
                    "max": 1.0,
                    "default": 1.0
                },
                {
                    "symbolicID": "@variax_str2level",
                    "name": "Variax String 2",
                    "displayType": "variax_strlevel",
                    "valueType": 1,
                    "min": 0.0,
                    "max": 1.0,
                    "default": 1.0
                },
                {
                    "symbolicID": "@variax_str3level",
                    "name": "Variax String 3",
                    "displayType": "variax_strlevel",
                    "valueType": 1,
                    "min": 0.0,
                    "max": 1.0,
                    "default": 1.0
                },
                {
                    "symbolicID": "@variax_str4level",
                    "name": "Variax String 4",
                    "displayType": "variax_strlevel",
                    "valueType": 1,
                    "min": 0.0,
                    "max": 1.0,
                    "default": 1.0
                },
                {
                    "symbolicID": "@variax_str5level",
                    "name": "Variax String 5",
                    "displayType": "variax_strlevel",
                    "valueType": 1,
                    "min": 0.0,
                    "max": 1.0,
                    "default": 1.0
                },
                {
                    "symbolicID": "@variax_str6level",
                    "name": "Variax String 6",
                    "displayType": "variax_strlevel",
                    "valueType": 1,
                    "min": 0.0,
                    "max": 1.0,
                    "default": 1.0
                },
                {
                    "symbolicID": "@variax_magmode",
                    "name": "Model Mag Mode",
                    "valueType": 2,
                    "min": false,
                    "max": true,
                    "default": true
                }
            ]
        },
        {
            "symbolicID": "HD2_ImpulseResponse1024",
            "mono": true,
            "stereo": false,
            "name": "IR 1024",
            "category": 16,
            "load": 7.00,
            "params": [
                {
                    "symbolicID": "Index",
                    "name": "IR Select",
                    "valueType": 0,
                    "displayType": "ir_select",
                    "min": 1,
                    "max": 128,
                    "default": 1
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
                    "default": 1.0
                },
                {
                    "symbolicID": "Level",
                    "name": "Level",
                    "valueType": 1,
                    "displayType": "volume",
                    "min": -60.0,
                    "max": 6.0,
                    "default": -18.0
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
            "symbolicID": "HD2_ImpulseResponse2048",
            "mono": true,
            "stereo": false,
            "name": "IR 2048",
            "category": 16,
            "load": 13.00,
            "params": [
                {
                    "symbolicID": "Index",
                    "name": "IR Select",
                    "valueType": 0,
                    "displayType": "ir_select",
                    "min": 1,
                    "max": 128,
                    "default": 1
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
                    "default": 1.0
                },
                {
                    "symbolicID": "Level",
                    "name": "Level",
                    "valueType": 1,
                    "displayType": "volume",
                    "min": -60.0,
                    "max": 6.0,
                    "default": -18.0
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
            "symbolicID": "HD2_Looper",
            "mono": true,
            "stereo": true,
            "name": "6 Switch Looper",
            "category": 15,
            "load": 5.28,
            "load_stereo": 5.28,
            "exclude_devices": [
                {
                    "id": 2162694
                }
            ],
            "params": [
                {
                    "symbolicID": "Playback",
                    "name": "Playback",
                    "valueType": 1,
                    "displayType": "volume",
                    "min": -60.0,
                    "max": 0.0,
                    "default": 0.0
                },
                {
                    "symbolicID": "Overdub",
                    "name": "Overdub",
                    "valueType": 1,
                    "displayType": "volume",
                    "min": -60.0,
                    "max": 0.0,
                    "default": 0.0
                },
                {
                    "symbolicID": "lowCut",
                    "name": "Low Cut",
                    "valueType": 1,
                    "displayType": "frequency",
                    "min": 20.0,
                    "max": 500.0,
                    "default": 20.0
                },
                {
                    "symbolicID": "highCut",
                    "name": "High Cut",
                    "valueType": 1,
                    "displayType": "frequency",
                    "min": 500.0,
                    "max": 20000.0,
                    "default": 20000.0
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
            "symbolicID": "HD2_LooperOneSwitch",
            "mono": true,
            "stereo": true,
            "name": "1 Switch Looper",
            "category": 15,
            "load": 5.28,
            "load_stereo": 5.28,
            "devices": [
                {
                    "id": 2162944
                },
                {
                    "id": 2162945
                },
                {
                    "id": 2162694
                },
                {
                    "id": 2162693,
                    "version": "0x02590000"
                },
                {
                    "id": 2162689,
                    "version": "0x02590000"
                },
                {
                    "id": 2162690,
                    "version": "0x02590000"
                },
                {
                    "id": 2162692,
                    "version": "0x02590000"
                }
            ],
            "params": [
                {
                    "symbolicID": "Playback",
                    "name": "Playback",
                    "valueType": 1,
                    "displayType": "volume",
                    "min": -60.0,
                    "max": 0.0,
                    "default": 0.0
                },
                {
                    "symbolicID": "Overdub",
                    "name": "Overdub",
                    "valueType": 1,
                    "displayType": "volume",
                    "min": -60.0,
                    "max": 0.0,
                    "default": 0.0
                },
                {
                    "symbolicID": "lowCut",
                    "name": "Low Cut",
                    "valueType": 1,
                    "displayType": "frequency",
                    "min": 20.0,
                    "max": 500.0,
                    "default": 20.0
                },
                {
                    "symbolicID": "highCut",
                    "name": "High Cut",
                    "valueType": 1,
                    "displayType": "frequency",
                    "min": 500.0,
                    "max": 20000.0,
                    "default": 20000.0
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
      
