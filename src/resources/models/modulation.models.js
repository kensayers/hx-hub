export default {models:[
  {
    "symbolicID" : "HD2_Chorus70sChorus",
    "mono" : true,
    "stereo" : true,
    "name" : "70s Chorus",
    "category" : 8,
    "load": 5.19,
    "load_stereo": 9.42,
    "params" : [
      {
        "symbolicID" : "ChorusIntensity",
        "name" : "Chorus Rate",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.57,
        "assign" : 1
      },
      {
        "symbolicID" : "Mode",
        "name" : "Mode",
        "valueType" : 2,
        "displayType" : "chorus_mode",
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "VibratoRate",
        "name" : "Vibrato Rate",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.7
      },
      {
        "symbolicID" : "VibratoDepth",
        "name" : "Vibrato Depth",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5
      },
      {
        "symbolicID" : "Spread",
        "name" : "Spread",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.0,
        "stereo-only" : true
      },
      {
        "symbolicID" : "Stereo",
        "name" : "Stereo",
        "valueType" : 2,
        "displayType" : "stereo_classic",
        "min" : false,
        "max" : true,
        "default" : false,
        "stereo-only" : true
      },
      {
        "symbolicID" : "Mix",
        "name" : "Mix",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 1.0
      },
      {
        "symbolicID" : "Headroom",
        "name" : "Headroom",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -12.0,
        "max" : 12.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "SyncSelect1",
        "displayType" : "sync_note",
        "name" : "Note Sync (Chorus)",
        "valueType" : 0,
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync1",
        "displayType" : "off_on",
        "name" : "Tempo Sync (Chorus)",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "SyncSelect2",
        "displayType" : "sync_note",
        "name" : "Note Sync (Vibrato)",
        "valueType" : 0,
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync2",
        "displayType" : "off_on",
        "name" : "Tempo Sync (Vibrato)",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      },
      {
        "symbolicID" : "@stereo",
        "name" : "Stereo",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      }
    ]
  },
  {
    "symbolicID" : "HD2_ChorusTrinityChorus",
    "mono" : false,
    "stereo" : true,
    "name" : "Trinity Chorus",
    "category" : 8,
    "load_stereo": 7.59,
    "params" : [
      {
        "symbolicID" : "Rate",
        "name" : "Rate",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.33,
        "assign" : 1
      },
      {
        "symbolicID" : "Left",
        "name" : "Left Depth",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.79
      },
      {
        "symbolicID" : "Center",
        "name" : "Center Depth",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.52
      },
      {
        "symbolicID" : "Right",
        "name" : "Right Depth",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.85
      },
      {
        "symbolicID" : "Preset",
        "name" : "LFO Preset",
        "valueType" : 2,
        "displayType" : "off_on",
        "min" : false,
        "max" : true,
        "default" : true
      },
      {
        "symbolicID" : "Manual",
        "name" : "LFO Manual",
        "valueType" : 2,
        "displayType" : "off_on",
        "min" : false,
        "max" : true,
        "default" : true
      },
      {
        "symbolicID" : "LeftBoost",
        "name" : "Left Boost",
        "valueType" : 2,
        "displayType" : "off_on",
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "CenterBoost",
        "name" : "Center Boost",
        "valueType" : 2,
        "displayType" : "off_on",
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "RightBoost",
        "name" : "Right Boost",
        "valueType" : 2,
        "displayType" : "off_on",
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "Mode",
        "name" : "Mode",
        "valueType" : 2,
        "displayType" : "stereo_mode",
        "min" : false,
        "max" : true,
        "default" : true
      },
      {
        "symbolicID" : "Mix",
        "name" : "Mix",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "SyncSelect1",
        "displayType" : "sync_note",
        "name" : "Note Sync",
        "valueType" : 0,
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync1",
        "displayType" : "off_on",
        "name" : "Tempo Sync",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      }
    ]
  },
  {
    "symbolicID" : "HD2_Chorus",
    "mono" : true,
    "stereo" : true,
    "name" : "Chorus",
    "category" : 8,
    "load": 3.37,
    "load_stereo": 5.48,
    "params" : [
      {
        "symbolicID" : "Speed",
        "name" : "Speed",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.25,
        "assign" : 1
      },
      {
        "symbolicID" : "Depth",
        "name" : "Depth",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.81,
        "assign" : 3
      },
      {
        "symbolicID" : "Predelay",
        "name" : "Predelay",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.32
      },
      {
        "symbolicID" : "WaveShape",
        "name" : "Wave Shape",
        "valueType" : 0,
        "displayType" : "wave_shape",
        "min" : 0,
        "max" : 6,
        "default" : 2
      },
      {
        "symbolicID" : "Tone",
        "name" : "Tone",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5
      },
      {
        "symbolicID" : "Spread",
        "name" : "Spread",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0,
        "stereo-only" : true
      },
      {
        "symbolicID" : "Mix",
        "name" : "Mix",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "SyncSelect1",
        "displayType" : "sync_note",
        "name" : "Note Sync",
        "valueType" : 0,
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync1",
        "displayType" : "off_on",
        "name" : "Tempo Sync",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      },
      {
        "symbolicID" : "@stereo",
        "name" : "Stereo",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      }
    ]
  },
  {
    "symbolicID" : "HD2_FlangerHarmonicFlanger",
    "mono" : true,
    "stereo" : true,
    "name" : "Harmonic Flanger",
    "category" : 8,
    "load": 6.89,
    "load_stereo": 12.56,
    "params" : [
      {
        "symbolicID" : "Rate",
        "name" : "Rate",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.35,
        "assign" : 1
      },
      {
        "symbolicID" : "Width",
        "name" : "Width",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.8,
        "assign" : 3
      },
      {
        "symbolicID" : "Manual",
        "name" : "Manual",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.84
      },
      {
        "symbolicID" : "Enhance",
        "name" : "Enhance",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.28,
        "assign" : 5
      },
      {
        "symbolicID" : "Harmonic",
        "name" : "Harmonic",
        "valueType" : 2,
        "displayType" : "odd_even",
        "min" : false,
        "max" : true,
        "default" : true
      },
      {
        "symbolicID" : "Spread",
        "name" : "Spread",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.125,
        "stereo-only" : true
      },
      {
        "symbolicID" : "Mix",
        "name" : "Mix",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "Headroom",
        "name" : "Headroom",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -12.0,
        "max" : 12.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "SyncSelect1",
        "displayType" : "sync_note",
        "name" : "Note Sync",
        "valueType" : 0,
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync1",
        "displayType" : "off_on",
        "name" : "Tempo Sync",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      },
      {
        "symbolicID" : "@stereo",
        "name" : "Stereo",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      }
    ]
  },
  {
    "symbolicID" : "HD2_FlangerCourtesanFlange",
    "mono" : true,
    "stereo" : true,
    "name" : "Courtesan Flange",
    "category" : 8,
    "load": 7.01,
    "load_stereo": 12.69,
    "params" : [
      {
        "symbolicID" : "Rate",
        "name" : "Rate",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.43,
        "assign" : 1
      },
      {
        "symbolicID" : "Range",
        "name" : "Range",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.71,
        "assign" : 3
      },
      {
        "symbolicID" : "Color",
        "name" : "Color",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.53
      },
      {
        "symbolicID" : "FilterMatrix",
        "name" : "Freeze LFO",
        "valueType" : 2,
        "displayType" : "off_on",
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "Spread",
        "name" : "Spread",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.125,
        "stereo-only" : true
      },
      {
        "symbolicID" : "Mix",
        "name" : "Mix",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "Headroom",
        "name" : "Headroom",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -12.0,
        "max" : 12.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "SyncSelect1",
        "displayType" : "sync_note",
        "name" : "Note Sync",
        "valueType" : 0,
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync1",
        "displayType" : "off_on",
        "name" : "Tempo Sync",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      },
      {
        "symbolicID" : "@stereo",
        "name" : "Stereo",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      }
    ]
  },
  {
    "symbolicID" : "HD2_FlangerGrayFlanger",
    "mono" : true,
    "stereo" : true,
    "name" : "Gray Flanger",
    "category" : 8,
    "load": 7.45,
    "load_stereo": 13.73,
    "params" : [
      {
        "symbolicID" : "Rate",
        "name" : "Rate",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.16,
        "assign" : 1
      },
      {
        "symbolicID" : "Width",
        "name" : "Width",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.78,
        "assign" : 3
      },
      {
        "symbolicID" : "Manual",
        "name" : "Manual",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.77
      },
      {
        "symbolicID" : "Regen",
        "name" : "Regen",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.56,
        "assign" : 5
      },
      {
        "symbolicID" : "Spread",
        "name" : "Spread",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.125,
        "stereo-only" : true
      },
      {
        "symbolicID" : "Mix",
        "name" : "Mix",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "Headroom",
        "name" : "Headroom",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -12.0,
        "max" : 12.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "SyncSelect1",
        "displayType" : "sync_note",
        "name" : "Note Sync",
        "valueType" : 0,
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync1",
        "displayType" : "off_on",
        "name" : "Tempo Sync",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      },
      {
        "symbolicID" : "@stereo",
        "name" : "Stereo",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      }
    ]
  },
  {
    "symbolicID" : "HD2_PhaserScriptModPhase",
    "mono" : true,
    "stereo" : true,
    "name" : "Script Mod Phase",
    "category" : 8,
    "load": 2.30,
    "load_stereo": 3.52,
    "params" : [
      {
        "symbolicID" : "Rate",
        "name" : "Rate",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.19,
        "assign" : 1
      },
      {
        "symbolicID" : "Spread",
        "name" : "Spread",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.0,
        "stereo-only" : true
      },
      {
        "symbolicID" : "Mix",
        "name" : "Mix",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 1.0
      },
      {
        "symbolicID" : "SyncSelect1",
        "displayType" : "sync_note",
        "name" : "Note Sync",
        "valueType" : 0,
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync1",
        "displayType" : "off_on",
        "name" : "Tempo Sync",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      },
      {
        "symbolicID" : "@stereo",
        "name" : "Stereo",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      }
    ]
  },
  {
    "symbolicID" : "HD2_PhaserUbiquitousVibe",
    "mono" : true,
    "stereo" : true,
    "name" : "Ubiquitous Vibe",
    "category" : 8,
    "load": 2.94,
    "load_stereo": 4.67,
    "params" : [
      {
        "symbolicID" : "Rate",
        "name" : "Rate",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.29,
        "assign" : 1
      },
      {
        "symbolicID" : "Intensity",
        "name" : "Intensity",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0,
        "assign" : 3
      },
      {
        "symbolicID" : "Mode",
        "name" : "Mode",
        "valueType" : 2,
        "displayType" : "chorus_mode",
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "LampBias",
        "name" : "Lamp Bias",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5
      },
      {
        "symbolicID" : "Spread",
        "name" : "Spread",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.25,
        "stereo-only" : true
      },
      {
        "symbolicID" : "Mix",
        "name" : "Mix",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "SyncSelect1",
        "displayType" : "sync_note",
        "name" : "Note Sync",
        "valueType" : 0,
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync1",
        "displayType" : "off_on",
        "name" : "Tempo Sync",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      },
      {
        "symbolicID" : "@stereo",
        "name" : "Stereo",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      }
    ]
  },
  {
    "symbolicID" : "HD2_RingModulatorPitchRingMod",
    "mono" : false,
    "stereo" : true,
    "name" : "Pitch Ring Mod",
    "category" : 8,
    "load_stereo": 5.70,
    "params" : [
      {
        "symbolicID" : "Shape",
        "name" : "Shape",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5
      },
      {
        "symbolicID" : "DutyCycle",
        "name" : "DutyCycle",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5
      },
      {
        "symbolicID" : "Octave",
        "name" : "Octave",
        "valueType" : 0,
        "displayType" : "octave",
        "min" : -3,
        "max" : 3,
        "default" : -1
      },
      {
        "symbolicID" : "Pitch",
        "name" : "Pitch",
        "valueType" : 1,
        "displayType" : "mod_pitch",
        "min" : -12.0,
        "max" : 12.0,
        "default" : -2.4
      },
      {
        "symbolicID" : "LowCut",
        "name" : "Low Cut",
        "valueType" : 1,
        "displayType" : "mod_low_cut",
        "min" : 19.9,
        "max" : 500.0,
        "default" : 19.9
      },
      {
        "symbolicID" : "HighCut",
        "name" : "High Cut",
        "valueType" : 1,
        "displayType" : "mod_high_cut",
        "min" : 500.0,
        "max" : 20100.0,
        "default" : 20100.0
      },
      {
        "symbolicID" : "FMAmount",
        "name" : "FM Amount",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.67
      },
      {
        "symbolicID" : "FMShape",
        "name" : "FM Shape",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.77
      },
      {
        "symbolicID" : "FMDuty",
        "name" : "FM Duty",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.7
      },
      {
        "symbolicID" : "FMOctave",
        "name" : "FM Octave",
        "valueType" : 0,
        "displayType" : "octave",
        "min" : -3,
        "max" : 3,
        "default" : 1
      },
      {
        "symbolicID" : "FMPitch",
        "name" : "FM Pitch",
        "valueType" : 1,
        "displayType" : "mod_pitch",
        "min" : -12.0,
        "max" : 12.0,
        "default" : 1.39
      },
      {
        "symbolicID" : "Mix",
        "name" : "Mix",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 5.5
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      }
    ]
  },
  {
    "symbolicID" : "HD2_RingModulatorAMRingMod",
    "mono" : true,
    "stereo" : true,
    "name" : "AM Ring Mod",
    "category" : 8,
    "load": 2.53,
    "load_stereo": 3.46,
    "params" : [
      {
        "symbolicID" : "Frequency",
        "name" : "Frequency",
        "valueType" : 1,
        "displayType" : "frequency",
        "min" : 5.0,
        "max" : 4000.0,
        "default" : 1280.0
      },
      {
        "symbolicID" : "AM",
        "name" : "AM",
        "valueType" : 2,
        "displayType" : "off_on",
        "min" : false,
        "max" : true,
        "default" : true
      },
      {
        "symbolicID" : "AMFreq",
        "name" : "AM Freq",
        "valueType" : 1,
        "displayType" : "frequency",
        "min" : 200.0,
        "max" : 8000.0,
        "default" : 1650.8
      },
      {
        "symbolicID" : "LFO",
        "name" : "LFO",
        "valueType" : 2,
        "displayType" : "off_on",
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "LFORate",
        "name" : "LFO Rate",
        "valueType" : 1,
        "displayType" : "frequency",
        "min" : 0.0001,
        "max" : 10.0,
        "default" : 5.0,
        "assign" : 2
      },
      {
        "symbolicID" : "LFOShape",
        "name" : "LFO Shape",
        "valueType" : 0,
        "displayType" : "lfo_shape",
        "min" : 0,
        "max" : 5,
        "default" : 2
      },
      {
        "symbolicID" : "Mix",
        "name" : "Mix",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.67
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 4.5
      },
      {
        "symbolicID" : "SyncSelect1",
        "displayType" : "sync_note",
        "name" : "Note Sync",
        "valueType" : 0,
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync1",
        "displayType" : "off_on",
        "name" : "Tempo Sync",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      },
      {
        "symbolicID" : "@stereo",
        "name" : "Stereo",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      }
    ]
  },
  {
    "symbolicID" : "HD2_Rotary122Rotary",
    "mono" : false,
    "stereo" : true,
    "name" : "122 Rotary",
    "category" : 8,
    "load_stereo": 10.01,
    "params" : [
      {
        "symbolicID" : "Speed",
        "name" : "Speed",
        "valueType" : 2,
        "displayType" : "fast_slow",
        "min" : false,
        "max" : true,
        "default" : true
      },
      {
        "symbolicID" : "SlowSpeed",
        "name" : "SlowSpeed",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.24
      },
      {
        "symbolicID" : "FastSpeed",
        "name" : "FastSpeed",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.73
      },
      {
        "symbolicID" : "RampTime",
        "name" : "RampTime",
        "valueType" : 0,
        "displayType" : "ramp_time",
        "min" : 0,
        "max" : 2,
        "default" : 1
      },
      {
        "symbolicID" : "Drive",
        "name" : "Drive",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.71
      },
      {
        "symbolicID" : "Blend",
        "name" : "Speaker Blend",
        "valueType" : 1,
        "displayType" : "blend",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5
      },
      {
        "symbolicID" : "Mix",
        "name" : "Mix",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : -5.7
      },
      {
        "symbolicID" : "Headroom",
        "name" : "Headroom",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -12.0,
        "max" : 12.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "SyncSelect1",
        "displayType" : "sync_note",
        "name" : "Note Sync",
        "valueType" : 0,
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync1",
        "displayType" : "off_on",
        "name" : "Tempo Sync",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "SyncSelect2",
        "displayType" : "sync_note",       
        "name" : "Note Sync 2",
        "valueType" : 0,
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync2",
        "displayType" : "off_on",
        "name" : "Tempo Sync 2",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      }
    ]
  },
  {
    "symbolicID" : "HD2_Rotary145Rotary",
    "mono" : false,
    "stereo" : true,
    "name" : "145 Rotary",
    "category" : 8,
    "load_stereo": 10.09,
    "params" : [
      {
        "symbolicID" : "Speed",
        "name" : "Speed",
        "valueType" : 2,
        "displayType" : "fast_slow",
        "min" : false,
        "max" : true,
        "default" : true
      },
      {
        "symbolicID" : "SlowSpeed",
        "name" : "SlowSpeed",
        "valueType" : 1,
        "displayType" : "frequency",
        "min" : 0.1,
        "max" : 10.0,
        "default" : 2.72
      },
      {
        "symbolicID" : "FastSpeed",
        "name" : "FastSpeed",
        "valueType" : 1,
        "displayType" : "frequency",
        "min" : 0.1,
        "max" : 10.0,
        "default" : 5.3
      },
      {
        "symbolicID" : "RampTime",
        "name" : "RampTime",
        "valueType" : 0,
        "displayType" : "ramp_time",
        "min" : 0,
        "max" : 2,
        "default" : 1
      },
      {
        "symbolicID" : "Drive",
        "name" : "Drive",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.42
      },
      {
        "symbolicID" : "Blend",
        "name" : "Speaker Blend",
        "valueType" : 1,
        "displayType" : "blend",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5
      },
      {
        "symbolicID" : "Mix",
        "name" : "Mix",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : -6.0
      },
      {
        "symbolicID" : "Headroom",
        "name" : "Headroom",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -12.0,
        "max" : 12.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "SyncSelect1",
        "name" : "Note Sync 1",
        "valueType" : 0,
        "displayType" : "sync_note",
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync1",
        "name" : "Tempo Sync 1",
        "valueType" : 2,
        "displayType" : "off_on",
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "SyncSelect2",
        "name" : "Note Sync 2",
        "valueType" : 0,
        "displayType" : "sync_note",
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync2",
        "name" : "Tempo Sync 2",
        "valueType" : 2,
        "displayType" : "off_on",
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      }
    ]
  },
  {
    "symbolicID" : "HD2_RotaryVibeRotary",
    "mono" : false,
    "stereo" : true,
    "name" : "Vibe Rotary",
    "category" : 8,
    "load_stereo": 10.07,
    "params" : [
      {
        "symbolicID" : "Speed",
        "name" : "Speed",
        "valueType" : 2,
        "displayType" : "fast_slow",
        "min" : false,
        "max" : true,
        "default" : true
      },
      {
        "symbolicID" : "SlowSpeed",
        "name" : "SlowSpeed",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.33
      },
      {
        "symbolicID" : "FastSpeed",
        "name" : "FastSpeed",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.53
      },
      {
        "symbolicID" : "RampTime",
        "name" : "RampTime",
        "valueType" : 0,
        "displayType" : "ramp_time",
        "min" : 0,
        "max" : 2,
        "default" : 1
      },
      {
        "symbolicID" : "Drive",
        "name" : "Drive",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "Blend",
        "name" : "Speaker Blend",
        "valueType" : 1,
        "displayType" : "blend",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5
      },
      {
        "symbolicID" : "Mix",
        "name" : "Mix",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "Headroom",
        "name" : "Headroom",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -12.0,
        "max" : 12.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "SyncSelect1",
        "displayType" : "sync_note",
        "name" : "Note Sync",
        "valueType" : 0,
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync1",
        "displayType" : "off_on",
        "name" : "Tempo Sync",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "SyncSelect2",
        "displayType" : "sync_note",       
        "name" : "Note Sync 2",
        "valueType" : 0,
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync2",
        "displayType" : "off_on",
        "name" : "Tempo Sync 2",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      }
    ]
  },
  {
    "symbolicID" : "HD2_TremoloOpticalTrem",
    "mono" : true,
    "stereo" : true,
    "name" : "Optical Trem",
    "category" : 8,
    "load": 1.71,
    "load_stereo": 2.23,
    "params" : [
      {
        "symbolicID" : "Speed",
        "name" : "Speed",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.66,
        "assign" : 1
      },
      {
        "symbolicID" : "Intensity",
        "name" : "Intensity",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.67,
        "assign" : 3
      },
      {
        "symbolicID" : "Spread",
        "name" : "Spread",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0,
        "stereo-only" : true
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "SyncSelect1",
        "displayType" : "sync_note",
        "name" : "Note Sync",
        "valueType" : 0,
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync1",
        "displayType" : "off_on",
        "name" : "Tempo Sync",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      },
      {
        "symbolicID" : "@stereo",
        "name" : "Stereo",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      }
    ]
  },
  {
    "symbolicID" : "HD2_Tremolo60sBiasTrem",
    "mono" : true,
    "stereo" : true,
    "name" : "60s Bias Trem",
    "category" : 8,
    "load": 2.30,
    "load_stereo": 3.51,
    "params" : [
      {
        "symbolicID" : "Speed",
        "name" : "Speed",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.3,
        "assign" : 1
      },
      {
        "symbolicID" : "Intensity",
        "name" : "Intensity",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.73,
        "assign" : 3
      },
      {
        "symbolicID" : "Mode",
        "name" : "Mode",
        "valueType" : 2,
        "displayType" : "tremolo_mode",
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "Spread",
        "name" : "Spread",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.0,
        "stereo-only" : true
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 1.0
      },
      {
        "symbolicID" : "SyncSelect1",
        "displayType" : "sync_note",
        "name" : "Note Sync",
        "valueType" : 0,
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync1",
        "displayType" : "off_on",
        "name" : "Tempo Sync",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      },
      {
        "symbolicID" : "@stereo",
        "name" : "Stereo",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      }
    ]
  },
  {
    "symbolicID" : "HD2_VibratoBubbleVibrato",
    "mono" : true,
    "stereo" : true,
    "name" : "Bubble Vibrato",
    "category" : 8,
    "load": 5.26,
    "load_stereo": 9.49,
    "params" : [
      {
        "symbolicID" : "Speed",
        "name" : "Speed",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.632,
        "assign" : 1
      },
      {
        "symbolicID" : "Depth",
        "name" : "Depth",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0,
        "default_stereo" : 0.7,
        "assign" : 3
      },
      {
        "symbolicID" : "RiseTime",
        "name" : "Rise Time",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.66
      },
      {
        "symbolicID" : "Mix",
        "name" : "Mix",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "Spread",
        "name" : "Spread",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.554,
        "stereo-only" : true
      },
      {
        "symbolicID" : "Headroom",
        "name" : "Headroom",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -12.0,
        "max" : 12.0,
        "default" : 3.0
      },
      {
        "symbolicID" : "RiseTimeSwitch",
        "name" : "Rise Time Switch",
        "valueType" : 2,
        "displayType" : "off_on",
        "min" : false,
        "max" : true,
        "default" : true
      },
      {
        "symbolicID" : "SyncSelect1",
        "displayType" : "sync_note",
        "name" : "Note Sync",
        "valueType" : 0,
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync1",
        "displayType" : "off_on",
        "name" : "Tempo Sync",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      },
      {
        "symbolicID" : "@stereo",
        "name" : "Stereo",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      }
    ]
  },
  {
    "symbolicID" : "HD2_FlangerDynamixFlanger",
    "mono" : true,
    "stereo" : true,
    "name" : "Dynamix Flanger",
    "category" : 8,
    "load": 3.90,
    "load_stereo": 5.30,
    "params" : [
      {
        "symbolicID" : "Speed",
        "name" : "Speed",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.044,
        "assign" : 1
      },
      {
        "symbolicID" : "Control Select",
        "name" : "Control Select",
        "valueType" : 0,
        "displayType" : "control_select",
        "min" : 0,
        "max" : 2,
        "default" : 0,
        "default_stereo" : 1
      },
      {
        "symbolicID" : "Depth",
        "name" : "Depth",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.66,
        "assign" : 3
      },
      {
        "symbolicID" : "Manual",
        "name" : "Manual",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.418
      },
      {
        "symbolicID" : "Mix",
        "name" : "Mix",
        "valueType" : 1,
        "displayType" : "dynamix_flanger_mix",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5
      },
      {
        "symbolicID" : "Phasing",
        "name" : "Phasing",
        "valueType" : 1,
        "displayType" : "phasing",
        "min" : -1.0,
        "max" : 1.0,
        "default" : -1.0
      },
      {
        "symbolicID" : "Recycle",
        "name" : "Recycle",
        "valueType" : 2,
        "displayType" : "out_in",
        "min" : false,
        "max" : true,
        "default" : true
      },
      {
        "symbolicID" : "CV Dynamics",
        "name" : "CV Dynamics",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0
      },
      {
        "symbolicID" : "Max Delay",
        "name" : "Max Delay",
        "valueType" : 1,
        "displayType" : "time_ms_dynamix_flanger",
        "min" : 0.01,
        "max" : 0.0997,
        "default" : 0.01
      },
      {
        "symbolicID" : "CV Tracking",
        "name" : "CV Tracking",
        "valueType" : 2,
        "displayType" : "preamp_polarity",
        "min" : false,
        "max" : true,
        "default" : false,
        "default_stereo" : true
      },
      {
        "symbolicID" : "Env Lag",
        "name" : "Env Lag",
        "valueType" : 1,
        "displayType" : "time_ms_env_lag",
        "min" : 0.0,
        "max" : 0.1,
        "default" : 0.1
      },
      {
        "symbolicID" : "Env Input",
        "name" : "Env Input",
        "valueType" : 1,
        "displayType" : "volume_eq",
        "min" : 0.0,
        "max" : 70.0,
        "default" : 70.0
      },
      {
        "symbolicID" : "CV Decay",
        "name" : "CV Decay",
        "valueType" : 0,
        "displayType" : "cv_delay",
        "min" : 0,
        "max" : 2,
        "default" : 2,
        "default_stereo" : 1
      },
      {
        "symbolicID" : "SyncSelect1",
        "displayType" : "sync_note",
        "name" : "Note Sync",
        "valueType" : 0,
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync1",
        "displayType" : "off_on",
        "name" : "Tempo Sync",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      },
      {
        "symbolicID" : "@stereo",
        "name" : "Stereo",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      }
    ]
  },
  {
    "symbolicID" : "HD2_PhaserDeluxePhaser",
    "mono" : true,
    "stereo" : true,
    "name" : "Deluxe Phaser",
    "category" : 8,
    "load": 3.05,
    "load_stereo": 5.20,
    "params" : [
      {
        "symbolicID" : "Rate",
        "name" : "Rate",
        "valueType" : 1,
        "displayType" : "frequency",
        "min" : 0.01,
        "max" : 10.01,
        "default" : 0.2,
        "assign" : 2
      },
      {
        "symbolicID" : "Depth",
        "name" : "Depth",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.1,
        "assign" : 3
      },
      {
        "symbolicID" : "Offset",
        "name" : "Offset",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.01,
        "default_stereo" : 0.125
      },
      {
        "symbolicID" : "Feedback",
        "name" : "Feedback",
        "valueType" : 1,
        "displayType" : "percent_feedback",
        "min" : -1.0,
        "max" : 1.0,
        "default" : 0.25,
        "assign" : 5
      },
      {
        "symbolicID" : "WaveShape",
        "name" : "Wave Shape",
        "valueType" : 0,
        "displayType" : "wave_shape",
        "min" : 0,
        "max" : 6,
        "default" : 2
      },
      {
        "symbolicID" : "Mix",
        "name" : "Mix",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5
      },
      {
        "symbolicID" : "Stages",
        "name" : "Stages",
        "valueType" : 0,
        "displayType" : "integer_slider",
        "min" : 2,
        "max" : 16,
        "default" : 8
      },
      {
        "symbolicID" : "Spread",
        "name" : "Spread",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0,
        "stereo-only" : true
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "SyncSelect1",
        "displayType" : "sync_note",
        "name" : "Note Sync",
        "valueType" : 0,
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync1",
        "displayType" : "off_on",
        "name" : "Tempo Sync",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      },
      {
        "symbolicID" : "@stereo",
        "name" : "Stereo",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      }
    ]
  },
  {
    "symbolicID" : "HD2_TremoloTremolo",
    "mono" : true,
    "stereo" : true,
    "name" : "Tremolo",
    "name_stereo" : "Tremolo/Autopan",
    "category" : 8,
    "load": 1.45,
    "load_stereo": 1.95,
    "params" : [
      {
        "symbolicID" : "Speed",
        "name" : "Speed",
        "valueType" : 1,
        "displayType" : "frequency",
        "min" : 0.0,
        "max" : 15.0,
        "default" : 3.0,
        "assign" : 2
      },
      {
        "symbolicID" : "Intensity",
        "name" : "Intensity",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0,
        "assign" : 3
      },
      {
        "symbolicID" : "WaveShape",
        "name" : "Wave Shape",
        "valueType" : 0,
        "displayType" : "wave_shape",
        "min" : 0,
        "max" : 6,
        "default" : 3,
        "default_stereo" : 4
      },
      {
        "symbolicID" : "DutyCycle",
        "name" : "DutyCycle",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5
      },
      {
        "symbolicID" : "Spread",
        "name" : "Spread",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0,
        "stereo-only" : true
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "SyncSelect1",
        "displayType" : "sync_note",
        "name" : "Note Sync",
        "valueType" : 0,
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync1",
        "displayType" : "off_on",
        "name" : "Tempo Sync",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      },
      {
        "symbolicID" : "@stereo",
        "name" : "Stereo",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      }
    ]
  },
  {
    "symbolicID" : "HD2_TremoloHarmonic",
    "mono" : true,
    "stereo" : true,
    "name" : "Harmonic Tremolo",
    "category" : 8,
    "load": 2.50,
    "load_stereo": 3.50,
    "params" : [
      {
        "symbolicID" : "Speed",
        "name" : "Speed",
        "valueType" : 1,
        "displayType" : "frequency",
        "min" : 0.0,
        "max" : 15.0,
        "default" : 4.0,
        "default_stereo" : 5.0,
        "assign" : 2
      },
      {
        "symbolicID" : "Intensity",
        "name" : "Intensity",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0,
        "assign" : 3
      },
      {
        "symbolicID" : "WaveShape",
        "name" : "Wave Shape",
        "valueType" : 0,
        "displayType" : "wave_shape",
        "min" : 0,
        "max" : 6,
        "default" : 3
      },
      {
        "symbolicID" : "DutyCycle",
        "name" : "DutyCycle",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5
      },
      {
        "symbolicID" : "BassFreq",
        "name" : "Bass Freq",
        "valueType" : 1,
        "displayType" : "frequency",
        "min" : 40.0,
        "max" : 2000.0,
        "default" : 500.0
      },
      {
        "symbolicID" : "TrebFreq",
        "name" : "Treb Freq",
        "valueType" : 1,
        "displayType" : "frequency",
        "min" : 100.0,
        "max" : 10000.0,
        "default" : 700.0
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "Mix",
        "name" : "Mix",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0
      },
      {
        "symbolicID" : "Spread",
        "name" : "Spread",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0,
        "stereo-only" : true
      },
      {
        "symbolicID" : "SyncSelect1",
        "displayType" : "sync_note",
        "name" : "Note Sync",
        "valueType" : 0,
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync1",
        "displayType" : "off_on",
        "name" : "Tempo Sync",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      },
      {
        "symbolicID" : "@stereo",
        "name" : "Stereo",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      }
    ]
  },
  {
    "symbolicID" : "HD2_ChorusPlastiChorus",
    "mono" : true,
    "stereo" : true,
    "name" : "PlastiChorus",
    "category" : 8,
    "load": 5.50,
    "load_stereo": 10.25,
    "params" : [
      {
        "symbolicID" : "Rate",
        "name" : "Rate",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.35,
        "assign" : 1
      },
      {
        "symbolicID" : "Depth",
        "name" : "Depth",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.47,
        "assign" : 3
      },
      {
        "symbolicID" : "Mode",
        "name" : "Mode",
        "valueType" : 2,
        "displayType" : "chorus_mode",
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "Tone",
        "name" : "Tone",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.75
      },
      {
        "symbolicID" : "Mix",
        "name" : "Mix",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "Headroom",
        "name" : "Headroom",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -12.0,
        "max" : 12.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "Spread",
        "name" : "Spread",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0,
        "stereo-only" : true
      },
      {
        "symbolicID" : "TempoSync1",
        "displayType" : "off_on",
        "name" : "Tempo Sync",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "SyncSelect1",
        "displayType" : "sync_note",
        "name" : "Note Sync",
        "valueType" : 0,
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      },
      {
        "symbolicID" : "@stereo",
        "name" : "Stereo",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      }
    ]
  },
  {
    "symbolicID" : "HD2_TremoloPattern",
    "mono" : true,
    "stereo" : true,
    "name" : "Bleat Chop Trem",
    "category" : 8,
    "load": 1.20,
    "load_stereo": 1.70,
    "devices": [ { "id":2162944 },
                 { "id":2162945 },
                 { "id":2162693 },
                 { "id":2162694 },
                 { "id":2162689, "version":"0x02210100" },
                 { "id":2162690, "version":"0x02210100" },
                 { "id":2162692, "version":"0x02210100" } ],
    "params" : [
      {
        "symbolicID" : "Speed",
        "name" : "Speed",
        "valueType" : 1,
        "displayType" : "frequency",
        "min" : 0.0,
        "max" : 15.0,
        "default" : 1.0,
        "assign" : 2
      },
      {
        "symbolicID" : "WaveShape",
        "name" : "Wave Shape",
        "valueType" : 0,
        "displayType" : "wave_shape_pattern_trem",
        "min" : 0,
        "max" : 4,
        "default" : 4
      },
      {
        "symbolicID" : "Step1",
        "name" : "Step 1",
        "valueType" : 0,
        "displayType" : "pattern_trem_step",
        "min" : 0,
        "max" : 17,
        "default" : 2
      },
      {
        "symbolicID" : "Step2",
        "name" : "Step 2",
        "valueType" : 0,
        "displayType" : "pattern_trem_step",
        "min" : 0,
        "max" : 17,
        "default" : 4
      },
      {
        "symbolicID" : "Step3",
        "name" : "Step 3",
        "valueType" : 0,
        "displayType" : "pattern_trem_step",
        "min" : 0,
        "max" : 17,
        "default" : 8
      },
      {
        "symbolicID" : "Step4",
        "name" : "Step 4",
        "valueType" : 0,
        "displayType" : "pattern_trem_step",
        "min" : 0,
        "max" : 17,
        "default" : 6
      },
      {
        "symbolicID" : "Spread",
        "name" : "Spread",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5,
        "stereo-only" : true
      },
      {
        "symbolicID" : "Depth",
        "name" : "Depth",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0,
        "assign" : 3
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "TempoSync1",
        "displayType" : "off_on",
        "name" : "Tempo Sync",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "SyncSelect1",
        "displayType" : "sync_note",
        "name" : "Note Sync",
        "valueType" : 0,
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      },
      {
        "symbolicID" : "@stereo",
        "name" : "Stereo",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      }
    ]
  },
  {
    "symbolicID" : "HD2_DelayDoubleDouble",
    "mono" : true,
    "stereo" : true,
    "name" : "Double Take",
    "category" : 8,
    "load": 12.80,
    "load_stereo": 14.10,
    "devices": [ { "id":2162944 },
                 { "id":2162945 },
                 { "id":2162693 },
                 { "id":2162694 },
                 { "id":2162689, "version":"0x02210100" },
                 { "id":2162690, "version":"0x02210100" },
                 { "id":2162692, "version":"0x02210100" } ],
    "params" : [
      {
        "symbolicID" : "Doubles",
        "name" : "Doubles",
        "valueType" : 0,
        "displayType" : "integer_slider_1based",
        "min" : 0,
        "max" : 3,
        "default" : 0
      },
      {
        "symbolicID" : "Slop",
        "name" : "Slop",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.6,
        "default_stereo" : 0.5
      },
      {
        "symbolicID" : "Sensitivity",
        "name" : "Sensitivity",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.72,
        "default_stereo" : 0.5
      },
      {
        "symbolicID" : "Source",
        "name" : "Source",
        "valueType" : 0,
        "displayType" : "delay_source",
        "min" : 0,
        "max" : 3,
        "default" : 0,
        "stereo-only" : true
      },
      {
        "symbolicID" : "Dry Level",
        "name" : "Dry Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 9.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "Wet Level",
        "name" : "Wet Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 9.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      },
      {
        "symbolicID" : "@stereo",
        "name" : "Stereo",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : false
      }
    ]
  },
  {
    "symbolicID" : "HD2_MM4PatternTrem",
    "name" : "Pattern Trem",
    "load" : 2.0,
    "category" : 8,
    "devices": [ { "id":2162944 },
                 { "id":2162945 },
                 { "id":2162693 },
                 { "id":2162694 },
                 { "id":2162689, "version":"0x02300100" },
                 { "id":2162690, "version":"0x02300100" },
                 { "id":2162692, "version":"0x02300100" } ],
    "params" : [
      {
        "symbolicID" : "Speed",
        "name" : "Speed",
        "valueType" : 1,
        "displayType" : "frequency",
        "min" : 0.0,
        "max" : 15.0,
        "default" : 1.59,
        "assign" : 2
      },
      {
        "symbolicID" : "Step1",
        "name" : "Step 1",
        "valueType" : 0,
        "displayType" : "pattern_trem_step",
        "min" : 0,
        "max" : 17,
        "default" : 2
      },
      {
        "symbolicID" : "Step2",
        "name" : "Step 2",
        "valueType" : 0,
        "displayType" : "pattern_trem_step",
        "min" : 0,
        "max" : 17,
        "default" : 4
      },
      {
        "symbolicID" : "Step3",
        "name" : "Step 3",
        "valueType" : 0,
        "displayType" : "pattern_trem_step",
        "min" : 0,
        "max" : 17,
        "default" : 4
      },
      {
        "symbolicID" : "Step4",
        "name" : "Step 4",
        "valueType" : 0,
        "displayType" : "pattern_trem_step",
        "min" : 0,
        "max" : 17,
        "default" : 6
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "SyncSelect1",
        "name" : "Note Sync",
        "valueType" : 0,
        "displayType" : "sync_note",
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync1",
        "name" : "Tempo Sync",
        "valueType" : 2,
        "displayType" : "off_on",
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      }
    ]
  },
  {
    "symbolicID" : "HD2_MM4Panner",
    "name" : "Panner",
    "load" : 3.5,
    "category" : 8,
    "devices": [ { "id":2162944 },
                 { "id":2162945 },
                 { "id":2162693 },
                 { "id":2162694 },
                 { "id":2162689, "version":"0x02300100" },
                 { "id":2162690, "version":"0x02300100" },
                 { "id":2162692, "version":"0x02300100" } ],
    "params" : [
      {
        "symbolicID" : "Speed",
        "name" : "Speed",
        "valueType" : 1,
        "displayType" : "frequency",
        "min" : 0.0,
        "max" : 15.0,
        "default" : 3.08,
        "assign" : 2
      },
      {
        "symbolicID" : "Depth",
        "name" : "Depth",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0,
        "assign" : 3
      },
      {
        "symbolicID" : "Shape",
        "name" : "Shape",
        "valueType" : 0,
        "displayType" : "wave_shape_panner",
        "min" : 0,
        "max" : 2,
        "default" : 0
      },
      {
        "symbolicID" : "VolSen",
        "name" : "VolSens",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.0,
        "assign" : 4
      },
      {
        "symbolicID" : "Mix",
        "name" : "Mix",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "SyncSelect1",
        "name" : "Note Sync",
        "valueType" : 0,
        "displayType" : "sync_note",
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync1",
        "name" : "Tempo Sync",
        "valueType" : 2,
        "displayType" : "off_on",
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      }
    ]
  },
  {
    "symbolicID" : "HD2_MM4BiasTremolo",
    "name" : "Bias Tremolo",
    "load" : 5.0,
    "category" : 8,
    "devices": [ { "id":2162944 },
                 { "id":2162945 },
                 { "id":2162693 },
                 { "id":2162694 },
                 { "id":2162689, "version":"0x02300100" },
                 { "id":2162690, "version":"0x02300100" },
                 { "id":2162692, "version":"0x02300100" } ],
    "params" : [
      {
        "symbolicID" : "Speed",
        "name" : "Speed",
        "valueType" : 1,
        "displayType" : "frequency",
        "min" : 0.0,
        "max" : 15.0,
        "default" : 9.41,
        "assign" : 2
      },
      {
        "symbolicID" : "Depth",
        "name" : "Depth",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0,
        "assign" : 3
      },
      {
        "symbolicID" : "Shape",
        "name" : "Shape",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "Volsens",
        "name" : "VolSens",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.0,
        "assign" : 4
      },
      {
        "symbolicID" : "Mix",
        "name" : "Mix",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "SyncSelect1",
        "name" : "Note Sync",
        "valueType" : 0,
        "displayType" : "sync_note",
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync1",
        "name" : "Tempo Sync",
        "valueType" : 2,
        "displayType" : "off_on",
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      }
    ]
  },
  {
    "symbolicID" : "HD2_MM4OptoTremolo",
    "name" : "Opto Tremolo",
    "load" : 3.0,
    "category" : 8,
    "devices": [ { "id":2162944 },
                 { "id":2162945 },
                 { "id":2162693 },
                 { "id":2162694 },
                 { "id":2162689, "version":"0x02300100" },
                 { "id":2162690, "version":"0x02300100" },
                 { "id":2162692, "version":"0x02300100" } ],
    "params" : [
      {
        "symbolicID" : "Speed",
        "name" : "Speed",
        "valueType" : 1,
        "displayType" : "frequency",
        "min" : 0.0,
        "max" : 15.0,
        "default" : 7.55,
        "assign" : 2
      },
      {
        "symbolicID" : "Depth",
        "name" : "Depth",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0,
        "assign" : 3
      },
      {
        "symbolicID" : "Shape",
        "name" : "Shape",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "VolSens",
        "name" : "VolSens",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.0,
        "assign" : 4
      },
      {
        "symbolicID" : "Mix",
        "name" : "Mix",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "SyncSelect1",
        "name" : "Note Sync",
        "valueType" : 0,
        "displayType" : "sync_note",
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync1",
        "name" : "Tempo Sync",
        "valueType" : 2,
        "displayType" : "off_on",
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      }
    ]
  },
  {
    "symbolicID" : "HD2_MM4ScriptPhase",
    "name" : "Script Phase",
    "load" : 2.75,
    "category" : 8,
    "devices": [ { "id":2162944 },
                 { "id":2162945 },
                 { "id":2162693 },
                 { "id":2162694 },
                 { "id":2162689, "version":"0x02300100" },
                 { "id":2162690, "version":"0x02300100" },
                 { "id":2162692, "version":"0x02300100" } ],
    "params" : [
      {
        "symbolicID" : "Speed",
        "name" : "Speed",
        "valueType" : 1,
        "displayType" : "frequency",
        "min" : 0.0,
        "max" : 15.0,
        "default" : 1.59,
        "assign" : 2
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "SyncSelect1",
        "name" : "Note Sync",
        "valueType" : 0,
        "displayType" : "sync_note",
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync1",
        "name" : "Tempo Sync",
        "valueType" : 2,
        "displayType" : "off_on",
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      }
    ]
  },
  {
    "symbolicID" : "HD2_MM4PannedPhaser",
    "name" : "Panned Phaser",
    "load" : 3.2,
    "category" : 8,
    "devices": [ { "id":2162944 },
                 { "id":2162945 },
                 { "id":2162693 },
                 { "id":2162694 },
                 { "id":2162689, "version":"0x02300100" },
                 { "id":2162690, "version":"0x02300100" },
                 { "id":2162692, "version":"0x02300100" } ],
    "params" : [
      {
        "symbolicID" : "Speed",
        "name" : "Speed",
        "valueType" : 1,
        "displayType" : "frequency",
        "min" : 0.0,
        "max" : 15.0,
        "default" : 3.83,
        "assign" : 2
      },
      {
        "symbolicID" : "Depth",
        "name" : "Depth",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.50,
        "assign" : 3
      },
      {
        "symbolicID" : "Pan",
        "name" : "Pan",
        "valueType" : 0,
        "displayType" : "pan_discrete",
        "min" : 0,
        "max" : 2,
        "default" : 0
      },
      {
        "symbolicID" : "Pan Speed",
        "name" : "Pan Speed",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.50
      },
      {
        "symbolicID" : "Mix",
        "name" : "Mix",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "SyncSelect1",
        "name" : "Note Sync",
        "valueType" : 0,
        "displayType" : "sync_note",
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync1",
        "name" : "Tempo Sync",
        "valueType" : 2,
        "displayType" : "off_on",
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      }
    ]
  },
  {
    "symbolicID" : "HD2_MM4DualPhaser",
    "name" : "Dual Phaser",
    "load" : 3.0,
    "category" : 8,
    "devices": [ { "id":2162944 },
                 { "id":2162945 },
                 { "id":2162693 },
                 { "id":2162694 },
                 { "id":2162689, "version":"0x02300100" },
                 { "id":2162690, "version":"0x02300100" },
                 { "id":2162692, "version":"0x02300100" } ],
    "params" : [
      {
        "symbolicID" : "Speed",
        "name" : "Speed",
        "valueType" : 1,
        "displayType" : "frequency",
        "min" : 0.0,
        "max" : 15.0,
        "default" : 1.60,
        "assign" : 2
      },
      {
        "symbolicID" : "Depth",
        "name" : "Depth",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0,
        "assign" : 2
      },
      {
        "symbolicID" : "Feedback",
        "name" : "Feedback",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0,
        "assign" : 5
      },
      {
        "symbolicID" : "LFOShape",
        "name" : "LFO Shape",
        "valueType" : 2,
        "displayType" : "lfo_shape_dualphaser",
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "Mix",
        "name" : "Mix",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "SyncSelect1",
        "name" : "Note Sync",
        "valueType" : 0,
        "displayType" : "sync_note",
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync1",
        "name" : "Tempo Sync",
        "valueType" : 2,
        "displayType" : "off_on",
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      }
    ]
  },
  {
    "symbolicID" : "HD2_MM4UVibe",
    "name" : "U-Vibe",
    "load" : 3.0,
    "category" : 8,
    "devices": [ { "id":2162944 },
                 { "id":2162945 },
                 { "id":2162693 },
                 { "id":2162694 },
                 { "id":2162689, "version":"0x02300100" },
                 { "id":2162690, "version":"0x02300100" },
                 { "id":2162692, "version":"0x02300100" } ],
    "params" : [
      {
        "symbolicID" : "Speed",
        "name" : "Speed",
        "valueType" : 1,
        "displayType" : "frequency",
        "min" : 0.0,
        "max" : 15.0,
        "default" : 4.57,
        "assign" : 2
      },
      {
        "symbolicID" : "Depth",
        "name" : "Depth",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0,
        "assign" : 2
      },
      {
        "symbolicID" : "Feedback",
        "name" : "Feedback",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.14,
        "assign" : 4
      },
      {
        "symbolicID" : "VolSens",
        "name" : "VolSens",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.0,
        "assign" : 3
      },
      {
        "symbolicID" : "Mix",
        "name" : "Mix",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.89
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "SyncSelect1",
        "name" : "Note Sync",
        "valueType" : 0,
        "displayType" : "sync_note",
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync1",
        "name" : "Tempo Sync",
        "valueType" : 2,
        "displayType" : "off_on",
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      }
    ]
  },
  {
    "symbolicID" : "HD2_MM4Phaser",
    "name" : "Phaser",
    "load" : 5.2,
    "category" : 8,
    "devices": [ { "id":2162944 },
                 { "id":2162945 },
                 { "id":2162693 },
                 { "id":2162694 },
                 { "id":2162689, "version":"0x02300100" },
                 { "id":2162690, "version":"0x02300100" },
                 { "id":2162692, "version":"0x02300100" } ],
    "params" : [
      {
        "symbolicID" : "Speed",
        "name" : "Speed",
        "valueType" : 1,
        "displayType" : "frequency",
        "min" : 0.0,
        "max" : 15.0,
        "default" : 1.59,
        "assign" : 2
      },
      {
        "symbolicID" : "Depth",
        "name" : "Depth",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0,
        "assign" : 3
      },
      {
        "symbolicID" : "Feedback",
        "name" : "Feedback",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.0,
        "assign" : 5
      },
      {
        "symbolicID" : "Stage",
        "name" : "Stage",
        "valueType" : 0,
        "displayType" : "stage",
        "min" : 0,
        "max" : 3,
        "default" : 0
      },
      {
        "symbolicID" : "Mix",
        "name" : "Mix",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "SyncSelect1",
        "name" : "Note Sync",
        "valueType" : 0,
        "displayType" : "sync_note",
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync1",
        "name" : "Tempo Sync",
        "valueType" : 2,
        "displayType" : "off_on",
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      }
    ]
  },
  {
    "symbolicID" : "HD2_MM4PitchVibrato",
    "name" : "Pitch Vibrato",
    "load" : 2.45,
    "category" : 8,
    "devices": [ { "id":2162944 },
                 { "id":2162945 },
                 { "id":2162693 },
                 { "id":2162694 },
                 { "id":2162689, "version":"0x02300100" },
                 { "id":2162690, "version":"0x02300100" },
                 { "id":2162692, "version":"0x02300100" } ],
    "params" : [
      {
        "symbolicID" : "Speed",
        "name" : "Speed",
        "valueType" : 1,
        "displayType" : "frequency",
        "min" : 0.0,
        "max" : 15.0,
        "default" : 6.36,
        "assign" : 2
      },
      {
        "symbolicID" : "Depth",
        "name" : "Depth",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5,
        "assign" : 3
      },
      {
        "symbolicID" : "Rise",
        "name" : "Rise",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "Volsens",
        "name" : "VolSens",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.0,
        "assign" : 4
      },
      {
        "symbolicID" : "Mix",
        "name" : "Mix",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "RiseTimeSwitch",
        "name" : "Rise Time Switch",
        "valueType" : 2,
        "displayType" : "off_on",
        "min" : false,
        "max" : true,
        "default" : true
      },
      {
        "symbolicID" : "SyncSelect1",
        "name" : "Note Sync",
        "valueType" : 0,
        "displayType" : "sync_note",
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync1",
        "name" : "Tempo Sync",
        "valueType" : 2,
        "displayType" : "off_on",
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      }
    ]
  },
  {
    "symbolicID" : "HD2_MM4AnalogChorus",
    "name" : "Analog Chorus",
    "load" : 2.7,
    "category" : 8,
    "devices": [ { "id":2162944 },
                 { "id":2162945 },
                 { "id":2162693 },
                 { "id":2162694 },
                 { "id":2162689, "version":"0x02300100" },
                 { "id":2162690, "version":"0x02300100" },
                 { "id":2162692, "version":"0x02300100" } ],
    "params" : [
      {
        "symbolicID" : "Speed",
        "name" : "Speed",
        "valueType" : 1,
        "displayType" : "frequency",
        "min" : 0.0,
        "max" : 15.0,
        "default" : 1.59,
        "assign" : 2
      },
      {
        "symbolicID" : "Depth",
        "name" : "Depth",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.7,
        "assign" : 3
      },
      {
        "symbolicID" : "CH Vib",
        "name" : "Mode",
        "valueType" : 2,
        "displayType" : "chorus_mode",
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "Tone",
        "name" : "Tone",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5
      },
      {
        "symbolicID" : "Mix",
        "name" : "Mix",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "SyncSelect1",
        "name" : "Note Sync",
        "valueType" : 0,
        "displayType" : "sync_note",
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync1",
        "name" : "Tempo Sync",
        "valueType" : 2,
        "displayType" : "off_on",
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      }
    ]
  },
  {
    "symbolicID" : "HD2_MM4TriChorus",
    "name" : "Tri Chorus",
    "load" : 5.0,
    "category" : 8,
    "devices": [ { "id":2162944 },
                 { "id":2162945 },
                 { "id":2162693 },
                 { "id":2162694 },
                 { "id":2162689, "version":"0x02300100" },
                 { "id":2162690, "version":"0x02300100" },
                 { "id":2162692, "version":"0x02300100" } ],
    "params" : [
      {
        "symbolicID" : "Speed",
        "name" : "Speed",
        "valueType" : 1,
        "displayType" : "frequency",
        "min" : 0.0,
        "max" : 15.0,
        "default" : 2.34,
        "assign" : 2
      },
      {
        "symbolicID" : "Depth1",
        "name" : "Depth 1",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.63,
        "assign" : 3
      },
      {
        "symbolicID" : "Depth2",
        "name" : "Depth 2",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.91
      },
      {
        "symbolicID" : "Depth3",
        "name" : "Depth 3",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.53
      },
      {
        "symbolicID" : "Mix",
        "name" : "Mix",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.86
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "SyncSelect1",
        "name" : "Note Sync",
        "valueType" : 0,
        "displayType" : "sync_note",
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync1",
        "name" : "Tempo Sync",
        "valueType" : 2,
        "displayType" : "off_on",
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      }
    ]
  },
  {
    "symbolicID" : "HD2_MM4FrequencyShifter",
    "name" : "Freq Shift",
    "load" : 7.0,
    "category" : 8,
    "devices": [ { "id":2162944 },
                 { "id":2162945 },
                 { "id":2162693 },
                 { "id":2162694 },
                 { "id":2162689, "version":"0x02300100" },
                 { "id":2162690, "version":"0x02300100" },
                 { "id":2162692, "version":"0x02300100" } ],
    "params" : [
      {
        "symbolicID" : "Speed",
        "name" : "Speed",
        "valueType" : 1,
        "displayType" : "frequency",
        "min" : 0.0,
        "max" : 3520.0,
        "default" : 110.0
      },
      {
        "symbolicID" : "Mode",
        "name" : "Mode",
        "valueType" : 0,
        "displayType" : "shift_mode",
        "min" : 0,
        "max" : 2,
        "default" : 0
      },
      {
        "symbolicID" : "Mix",
        "name" : "Mix",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      }
    ]
  },
  {
    "symbolicID" : "HD2_MM4RotaryDrum",
    "name" : "Rotary Drum",
    "load" : 11.25,
    "category" : 8,
    "devices": [ { "id":2162944 },
                 { "id":2162945 },
                 { "id":2162693 },
                 { "id":2162694 },
                 { "id":2162689, "version":"0x02300100" },
                 { "id":2162690, "version":"0x02300100" },
                 { "id":2162692, "version":"0x02300100" } ],
    "params" : [
      {
        "symbolicID" : "Speed",
        "name" : "Speed",
        "valueType" : 2,
        "displayType" : "fast_slow",
        "min" : false,
        "max" : true,
        "default" : true
      },
      {
        "symbolicID" : "Depth",
        "name" : "Depth",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0,
        "assign" : 3
      },
      {
        "symbolicID" : "Tone",
        "name" : "Tone",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5
      },
      {
        "symbolicID" : "Drive",
        "name" : "Drive",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.13
      },
      {
        "symbolicID" : "Mix",
        "name" : "Mix",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      }
    ]
  },
  {
    "symbolicID" : "HD2_MM4RotaryDrumHorn",
    "name" : "Rotary Drum/Horn",
    "load" : 11.25,
    "category" : 8,
    "devices": [ { "id":2162944 },
                 { "id":2162945 },
                 { "id":2162693 },
                 { "id":2162694 },
                 { "id":2162689, "version":"0x02300100" },
                 { "id":2162690, "version":"0x02300100" },
                 { "id":2162692, "version":"0x02300100" } ],
    "params" : [
      {
        "symbolicID" : "Speed",
        "name" : "Speed",
        "valueType" : 2,
        "displayType" : "fast_slow",
        "min" : false,
        "max" : true,
        "default" : true
      },
      {
        "symbolicID" : "Depth",
        "name" : "Depth",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5,
        "assign" : 3
      },
      {
        "symbolicID" : "Horn Depth",
        "name" : "Horn Depth",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.63
      },
      {
        "symbolicID" : "Drive",
        "name" : "Drive",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "Mix",
        "name" : "Mix",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      }
    ]
  },
  {
    "symbolicID" : "HD2_M1380AFlanger",
    "name" : "80A Flanger",
    "load" : 17.00,
    "category" : 8,
    "devices": [ { "id":2162944 },
                 { "id":2162945 },
                 { "id":2162693 },
                 { "id":2162694 },
                 { "id":2162689, "version":"0x02300100" },
                 { "id":2162690, "version":"0x02300100" },
                 { "id":2162692, "version":"0x02300100" } ],
    "params" : [
      {
        "symbolicID" : "Speed",
        "name" : "Speed",
        "valueType" : 1,
        "displayType" : "frequency",
        "min" : 0.0,
        "max" : 15.0,
        "default" : 0.55,
        "assign" : 2
      },
      {
        "symbolicID" : "Range",
        "name" : "Range",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.88,
        "assign" : 3
      },
      {
        "symbolicID" : "Enhance",
        "name" : "Enhance",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5,
        "assign" : 5
      },
      {
        "symbolicID" : "Manual",
        "name" : "Manual",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.38
      },
      {
        "symbolicID" : "Harmonic",
        "name" : "Harmonic",
        "valueType" : 2,
        "displayType" : "even_odd",
        "min" : false,
        "max" : true,
        "default" : true
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "SyncSelect1",
        "name" : "Note Sync",
        "valueType" : 0,
        "displayType" : "sync_note",
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync1",
        "name" : "Tempo Sync",
        "valueType" : 2,
        "displayType" : "off_on",
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      }
    ]
  },
  {
    "symbolicID" : "HD2_M13ACFlanger",
    "name" : "AC Flanger",
    "load" : 8.00,
    "category" : 8,
    "devices": [ { "id":2162944 },
                 { "id":2162945 },
                 { "id":2162693 },
                 { "id":2162694 },
                 { "id":2162689, "version":"0x02300100" },
                 { "id":2162690, "version":"0x02300100" },
                 { "id":2162692, "version":"0x02300100" } ],
    "params" : [
      {
        "symbolicID" : "Speed",
        "name" : "Speed",
        "valueType" : 1,
        "displayType" : "frequency",
        "min" : 0.1,
        "max" : 15.0,
        "default" : 0.55,
        "assign" : 2
      },
      {
        "symbolicID" : "Width",
        "name" : "Width",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5,
        "assign" : 3
      },
      {
        "symbolicID" : "Regen",
        "name" : "Regen",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.88,
        "assign" : 5
      },
      {
        "symbolicID" : "Manual",
        "name" : "Manual",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "SyncSelect1",
        "name" : "Note Sync",
        "valueType" : 0,
        "displayType" : "sync_note",
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync1",
        "name" : "Tempo Sync",
        "valueType" : 2,
        "displayType" : "off_on",
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      }
    ]
  },
  {
    "symbolicID" : "HD2_MM4AnalogFlanger",
    "name" : "Analog Flanger",
    "load" : 4.00,
    "category" : 8,
    "devices": [ { "id":2162944 },
                 { "id":2162945 },
                 { "id":2162693 },
                 { "id":2162694 },
                 { "id":2162689, "version":"0x02300100" },
                 { "id":2162690, "version":"0x02300100" },
                 { "id":2162692, "version":"0x02300100" } ],
    "params" : [
      {
        "symbolicID" : "Speed",
        "name" : "Speed",
        "valueType" : 1,
        "displayType" : "frequency",
        "min" : 0.0,
        "max" : 15.0,
        "default" : 0.85,
        "assign" : 2
      },
      {
        "symbolicID" : "Depth",
        "name" : "Depth",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.16,
        "assign" : 3
      },
      {
        "symbolicID" : "Feedback",
        "name" : "Feedback",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.06,
        "assign" : 5
      },
      {
        "symbolicID" : "Manual",
        "name" : "Manual",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.63
      },
      {
        "symbolicID" : "Mix",
        "name" : "Mix",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "SyncSelect1",
        "name" : "Note Sync",
        "valueType" : 0,
        "displayType" : "sync_note",
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync1",
        "name" : "Tempo Sync",
        "valueType" : 2,
        "displayType" : "off_on",
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      }
    ]
  },
  {
    "symbolicID" : "HD2_MM4BarberpolePhaser",
    "name" : "Barberpole Phaser",
    "load" : 7.00,
    "category" : 8,
    "devices": [ { "id":2162944 },
                 { "id":2162945 },
                 { "id":2162693 },
                 { "id":2162694 },
                 { "id":2162689, "version":"0x02300100" },
                 { "id":2162690, "version":"0x02300100" },
                 { "id":2162692, "version":"0x02300100" } ],
    "params" : [
      {
        "symbolicID" : "Speed",
        "name" : "Speed",
        "valueType" : 1,
        "displayType" : "frequency",
        "min" : 0.0,
        "max" : 15.0,
        "default" : 1.59,
        "assign" : 2
      },
      {
        "symbolicID" : "Feedback",
        "name" : "Feedback",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.63,
        "assign" : 5
      },
      {
        "symbolicID" : "Mode",
        "name" : "Mode",
        "valueType" : 0,
        "displayType" : "shift_mode",
        "min" : 0,
        "max" : 2,
        "default" : 0
      },
      {
        "symbolicID" : "Mix",
        "name" : "Mix",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "SyncSelect1",
        "name" : "Note Sync",
        "valueType" : 0,
        "displayType" : "sync_note",
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync1",
        "name" : "Tempo Sync",
        "valueType" : 2,
        "displayType" : "off_on",
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      }
    ]
  },
  {
    "symbolicID" : "HD2_MM4Dimension",
    "name" : "Dimension",
    "load" : 4.00,
    "category" : 8,
    "devices": [ { "id":2162944 },
                 { "id":2162945 },
                 { "id":2162693 },
                 { "id":2162694 },
                 { "id":2162689, "version":"0x02300100" },
                 { "id":2162690, "version":"0x02300100" },
                 { "id":2162692, "version":"0x02300100" } ],
    "params" : [
      {
        "symbolicID" : "SW1",
        "name" : "Switch 1",
        "valueType" : 2,
        "displayType" : "OFF_ON",
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "SW2",
        "name" : "Switch 2",
        "valueType" : 2,
        "displayType" : "OFF_ON",
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "SW3",
        "name" : "Switch 3",
        "valueType" : 2,
        "displayType" : "OFF_ON",
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "SW4",
        "name" : "Switch 4",
        "valueType" : 2,
        "displayType" : "OFF_ON",
        "min" : false,
        "max" : true,
        "default" : true
      },
      {
        "symbolicID" : "Mix",
        "name" : "Mix",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      }
    ]
  },
  {
    "symbolicID" : "HD2_MM4JetFlanger",
    "name" : "Jet Flanger",
    "load" : 4.50,
    "category" : 8,
    "devices": [ { "id":2162944 },
                 { "id":2162945 },
                 { "id":2162693 },
                 { "id":2162694 },
                 { "id":2162689, "version":"0x02300100" },
                 { "id":2162690, "version":"0x02300100" },
                 { "id":2162692, "version":"0x02300100" } ],
    "params" : [
      {
        "symbolicID" : "Speed",
        "name" : "Speed",
        "valueType" : 1,
        "displayType" : "frequency",
        "min" : 0.0,
        "max" : 15.0,
        "default" : 0.55,
        "assign" : 2
      },
      {
        "symbolicID" : "Depth",
        "name" : "Depth",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.33,
        "assign" : 3
      },
      {
        "symbolicID" : "Feedback",
        "name" : "Feedback",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.88,
        "assign" : 5
      },
      {
        "symbolicID" : "Manual",
        "name" : "Manual",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0
      },
      {
        "symbolicID" : "Mix",
        "name" : "Mix",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "SyncSelect1",
        "name" : "Note Sync",
        "valueType" : 0,
        "displayType" : "sync_note",
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync1",
        "name" : "Tempo Sync",
        "valueType" : 2,
        "displayType" : "off_on",
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      }
    ]
  },
  {
    "symbolicID" : "HD2_MM4RingModulator",
    "name" : "Ring Modulator",
    "load" : 4.00,
    "category" : 8,
    "devices": [ { "id":2162944 },
                 { "id":2162945 },
                 { "id":2162693 },
                 { "id":2162694 },
                 { "id":2162689, "version":"0x02300100" },
                 { "id":2162690, "version":"0x02300100" },
                 { "id":2162692, "version":"0x02300100" } ],
    "params" : [
      {
        "symbolicID" : "Speed",
        "name" : "Speed",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.23,
        "assign" : 1
      },
      {
        "symbolicID" : "Depth",
        "name" : "Depth",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0,
        "assign" : 3
      },
      {
        "symbolicID" : "Shape",
        "name" : "Shape",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.06
      },
      {
        "symbolicID" : "AM/FM",
        "name" : "AM/FM",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.03
      },
      {
        "symbolicID" : "Mix",
        "name" : "Mix",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.92
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "SyncSelect1",
        "name" : "Note Sync",
        "valueType" : 0,
        "displayType" : "sync_note",
        "min" : 1,
        "max" : 19,
        "default" : 6
      },
      {
        "symbolicID" : "TempoSync1",
        "name" : "Tempo Sync",
        "valueType" : 2,
        "displayType" : "off_on",
        "min" : false,
        "max" : true,
        "default" : false
      },
      {
        "symbolicID" : "@enabled",
        "name" : "Enabled",
        "valueType" : 2,
        "min" : false,
        "max" : true,
        "default" : true
      }
    ]
  }
]}
