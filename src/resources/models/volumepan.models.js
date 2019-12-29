export default {
    models: [
        {
            "symbolicID": "HD2_VolPanGain",
            "mono": true,
            "stereo": true,
            "name": "Gain",
            "category": 17,
            "load": 0.35,
            "load_stereo": 0.51,
            "params": [
                {
                    "symbolicID": "Gain",
                    "name": "Gain",
                    "valueType": 1,
                    "displayType": "volume",
                    "min": -120.0,
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
            "symbolicID": "HD2_VolPanPan",
            "mono": false,
            "stereo": true,
            "name": "Pan",
            "category": 17,
            "load_stereo": 0.52,
            "params": [
                {
                    "symbolicID": "Pedal",
                    "name": "Pan",
                    "valueType": 1,
                    "displayType": "pan",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5,
                    "assign": 1
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
            "symbolicID": "HD2_VolPanVol",
            "mono": true,
            "stereo": true,
            "name": "Volume",
            "category": 17,
            "load": 0.35,
            "load_stereo": 0.46,
            "params": [
                {
                    "symbolicID": "Pedal",
                    "name": "Position",
                    "valueType": 1,
                    "displayType": "percent",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 1.0
                },
                {
                    "symbolicID": "VolumeTaper",
                    "name": "Curve",
                    "valueType": 2,
                    "displayType": "volume_curve",
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
            "symbolicID": "HD2_VolPanStereoWidth",
            "mono": false,
            "stereo": true,
            "name": "Stereo Width",
            "category": 17,
            "load_stereo": 1.10,
            "devices": [{"id": 2162944},
                {"id": 2162945},
                {"id": 2162693},
                {"id": 2162694},
                {"id": 2162689, "version": "0x02210100"},
                {"id": 2162690, "version": "0x02210100"},
                {"id": 2162692, "version": "0x02210100"}],
            "params": [
                {
                    "symbolicID": "Width",
                    "name": "Width",
                    "valueType": 1,
                    "displayType": "percent_width",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 1.0
                },
                {
                    "symbolicID": "LR In Swap",
                    "name": "LR In Swap",
                    "valueType": 2,
                    "displayType": "off_on",
                    "min": false,
                    "max": true,
                    "default": false
                },
                {
                    "symbolicID": "Balance",
                    "name": "Balance",
                    "valueType": 1,
                    "displayType": "pan",
                    "min": 0.0,
                    "max": 1.0,
                    "default": 0.5,
                    "assign": 1
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
                    "symbolicID": "R Polarity",
                    "name": "R Polarity",
                    "valueType": 2,
                    "displayType": "polarity",
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
        }
    ]

}
      