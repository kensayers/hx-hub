export default {models:[
  {
    "symbolicID" : "HD2_PitchPitchWham",
    "mono" : true,
    "stereo" : true,
    "name" : "Pitch Wham",
    "category" : 7,
    "load": 4.60,
    "load_stereo": 6.60,
    "params" : [
      {
        "symbolicID" : "Pedal",
        "name" : "Pedal Position",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5
      },
      {
        "symbolicID" : "Heel",
        "name" : "Heel Pitch",
        "valueType" : 0,
        "displayType" : "pitch",
        "min" : -24,
        "max" : 24,
        "default" : -12
      },
      {
        "symbolicID" : "Toe",
        "name" : "Toe Pitch",
        "valueType" : 0,
        "displayType" : "pitch",
        "min" : -24,
        "max" : 24,
        "default" : 12
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
    "symbolicID" : "HD2_PitchTwinHarmony",
    "mono" : true,
    "stereo" : true,
    "name" : "Twin Harmony",
    "category" : 7,
    "load": 6.60,
    "load_stereo": 12.80,
    "params" : [
      {
        "symbolicID" : "KeyVoice1",
        "name" : "Voice 1 Key",
        "valueType" : 0,
        "displayType" : "key_voice",
        "min" : 0,
        "max" : 11,
        "default" : 0
      },
      {
        "symbolicID" : "ScaleVoice1",
        "name" : "Voice 1 Scale",
        "valueType" : 0,
        "displayType" : "scale_voice",
        "min" : 0,
        "max" : 7,
        "default" : 0
      },
      {
        "symbolicID" : "IntervalVoice1",
        "name" : "Voice 1 Shift",
        "valueType" : 0,
        "displayType" : "pitch_shift",
        "min" : -8,
        "max" : 8,
        "default" : -3
      },
      {
        "symbolicID" : "LevelVoice1",
        "name" : "Voice 1 Level",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0,
        "assign" : 1
      },
      {
        "symbolicID" : "PanVoice1",
        "name" : "Voice 1 Pan",
        "valueType" : 1,
        "displayType" : "pan",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.3750,
        "assign" : 2,
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
        "symbolicID" : "KeyVoice2",
        "name" : "Voice 2 Key",
        "valueType" : 0,
        "displayType" : "key_voice",
        "min" : 0,
        "max" : 11,
        "default" : 0
      },
      {
        "symbolicID" : "ScaleVoice2",
        "name" : "Voice 2 Scale",
        "valueType" : 0,
        "displayType" : "scale_voice",
        "min" : 0,
        "max" : 7,
        "default" : 0
      },
      {
        "symbolicID" : "IntervalVoice2",
        "name" : "Voice 2 Shift",
        "valueType" : 0,
        "displayType" : "pitch_shift",
        "min" : -8,
        "max" : 8,
        "default" : 2
      },
      {
        "symbolicID" : "LevelVoice2",
        "name" : "Voice 2 Level",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0,
        "assign" : 3
      },
      {
        "symbolicID" : "PanVoice2",
        "name" : "Voice 2 Pan",
        "valueType" : 1,
        "displayType" : "pan",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.6250,
        "assign" : 4,
        "stereo-only" : true
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
    "symbolicID" : "HD2_SynthSubtractive",
    "mono" : false,
    "stereo" : true,
    "name" : "3 Osc Synth",
    "category" : 5,
    "load_stereo": 13.60,             
    "params" : [
      {
        "symbolicID" : "ShapeVoice1",
        "name" : "Osc 1 Wave",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0
      },
      {
        "symbolicID" : "DutyVoice1",
        "name" : "Duty Cycle 1",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5
      },
      {
        "symbolicID" : "OctaveVoice1",
        "name" : "Osc 1 Octave",
        "valueType" : 0,
        "displayType" : "octave32",
        "min" : -3,
        "max" : 2,
        "default" : 0
      },
      {
        "symbolicID" : "PitchVoice1",
        "name" : "Osc 1 Frequency",
        "valueType" : 1,
        "displayType" : "osc_freq",
        "min" : -12.0,
        "max" : 12.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "PanVoice1",
        "name" : "Osc 1 Pan",
        "valueType" : 1,
        "displayType" : "pan",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5,
        "assign" : 2
      },
      {
        "symbolicID" : "LevelVoice1",
        "name" : "Osc 1 Level",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5,
        "assign" : 1
      },
      {
        "symbolicID" : "ShapeVoice2",
        "name" : "Osc 2 Wave",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0
      },
      {
        "symbolicID" : "DutyVoice2",
        "name" : "Duty Cycle 2",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.3020
      },
      {
        "symbolicID" : "OctaveVoice2",
        "name" : "Osc 2 Octave",
        "valueType" : 0,
        "displayType" : "octave32",
        "min" : -3,
        "max" : 2,
        "default" : -1
      },
      {
        "symbolicID" : "PitchVoice2",
        "name" : "Osc 2 Frequency",
        "valueType" : 1,
        "displayType" : "osc_freq",
        "min" : -12.0,
        "max" : 12.0,
        "default" : -0.1
      },
      {
        "symbolicID" : "PanVoice2",
        "name" : "Osc 2 Pan",
        "valueType" : 1,
        "displayType" : "pan",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.544,
        "assign" : 4
      },
      {
        "symbolicID" : "LevelVoice2",
        "name" : "Osc 2 Level",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5,
        "assign" : 3
      },
      {
        "symbolicID" : "ShapeVoice3",
        "name" : "Osc 3 Wave",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0
      },
      {
        "symbolicID" : "DutyVoice3",
        "name" : "Duty Cycle 3",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.72
      },
      {
        "symbolicID" : "OctaveVoice3",
        "name" : "Osc 3 Octave",
        "valueType" : 0,
        "displayType" : "octave32",
        "min" : -3,
        "max" : 2,
        "default" : -1
      },
      {
        "symbolicID" : "PitchVoice3",
        "name" : "Osc 3 Frequency",
        "valueType" : 1,
        "displayType" : "osc_freq",
        "min" : -12.0,
        "max" : 12.0,
        "default" : -0.14
      },
      {
        "symbolicID" : "PanVoice3",
        "name" : "Osc 3 Pan",
        "valueType" : 1,
        "displayType" : "pan",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.4780
      },
      {
        "symbolicID" : "LevelVoice3",
        "name" : "Osc 3 Level",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5
      },
      {
        "symbolicID" : "SynthPreset",
        "name" : "Filter Preset",
        "valueType" : 0,
        "displayType" : "synth_preset",
        "min" : 0,
        "max" : 3,
        "default" : 0
      },
      {
        "symbolicID" : "FM Voice3to1",
        "name" : "FM 3 > 1",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "LowCut",
        "name" : "Low Cut",
        "valueType" : 1,
        "displayType" : "eq_low_cut",
        "min" : 19.9,
        "max" : 1000.0,
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
    "symbolicID" : "HD2_PitchDualPitch",
    "mono" : true,
    "stereo" : true,
    "name" : "Dual Pitch",
    "category" : 7,
    "load": 7.10,             
    "load_stereo": 14.00,
    "params" : [
      {
        "symbolicID" : "Interval1",
        "name" : "Interval 1",
        "valueType" : 0,
        "displayType" : "integer_slider_signed",
        "min" : -24,
        "max" : 24,
        "default" : 7
      },
      {
        "symbolicID" : "Cents1",
        "name" : "Cents 1",
        "valueType" : 1,
        "displayType" : "cents",
        "min" : -50.0,
        "max" : 50.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "Time1",
        "name" : "Delay 1",
        "valueType" : 1,
        "displayType" : "time_ms_pitch",
        "min" : 0.0,
        "max" : 0.1,
        "default" : 0.0
      },
      {
        "symbolicID" : "LevelVoice1",
        "name" : "V1 Level",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0,
        "assign" : 1
      },
      {
        "symbolicID" : "Interval2",
        "name" : "Interval 2",
        "valueType" : 0,
        "displayType" : "integer_slider_signed",
        "min" : -24,
        "max" : 24,
        "default" : 16
      },
      {
        "symbolicID" : "Cents2",
        "name" : "Cents 2",
        "valueType" : 1,
        "displayType" : "cents",
        "min" : -50.0,
        "max" : 50.0,
        "default" : -5.0
      },
      {
        "symbolicID" : "Time2",
        "name" : "Delay 2",
        "valueType" : 1,
        "displayType" : "time_ms_pitch",
        "min" : 0.0,
        "max" : 0.1,
        "default" : 0.0
      },
      {
        "symbolicID" : "LevelVoice2",
        "name" : "V2 Level",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0,
        "assign" : 3
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
        "symbolicID" : "PanVoice1",
        "name" : "V1 Pan",
        "valueType" : 1,
        "displayType" : "pan",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.125,
        "assign" : 2,
        "stereo-only" : true
      },
      {
        "symbolicID" : "PanVoice2",
        "name" : "V2 Pan",
        "valueType" : 1,
        "displayType" : "pan",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.875,
        "assign" : 4,
        "stereo-only" : true
      },
      {
        "symbolicID" : "PanDry",
        "name" : "Dry Pan",
        "valueType" : 1,
        "displayType" : "pan",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5,
        "stereo-only" : true
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
    "symbolicID" : "HD2_PitchSimplePitch",
    "mono" : true,
    "stereo" : true,
    "name" : "Simple Pitch",
    "category" : 7,
    "load": 5.30,
    "load_stereo": 10.00,
    "params" : [
      {
        "symbolicID" : "Interval1",
        "name" : "Interval",
        "valueType" : 0,
        "displayType" : "integer_slider_signed",
        "min" : -24,
        "max" : 24,
        "default" : 7
      },
      {
        "symbolicID" : "Cents1",
        "name" : "Cents",
        "valueType" : 1,
        "displayType" : "cents",
        "min" : -50.0,
        "max" : 50.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "Time1",
        "name" : "Delay",
        "valueType" : 1,
        "displayType" : "time_ms_pitch",
        "min" : 0.0,
        "max" : 0.1,
        "default" : 0.0
      },
      {
        "symbolicID" : "LevelVoice1",
        "name" : "Shift Level",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0,
        "assign" : 1
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
        "symbolicID" : "PanVoice1",
        "name" : "Shift Pan",
        "valueType" : 1,
        "displayType" : "pan",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.45,
        "assign" : 2,
        "stereo-only" : true
      },
      {
        "symbolicID" : "PanDry",
        "name" : "Dry Pan",
        "valueType" : 1,
        "displayType" : "pan",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5,
        "stereo-only" : true
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
    "symbolicID" : "HD2_Synth3NoteGenerator",
    "mono" : true,
    "stereo" : true,
    "name" : "3 Note Generator",
    "category" : 7,
    "load": 7.25,
    "load_stereo": 7.25,
    "params" : [
      {
        "symbolicID" : "Osc1Shape",
        "name" : "Osc1 Shape",
        "valueType" : 0,
        "displayType" : "wave_shape",
        "min" : 0,
        "max" : 4,
        "default" : 3
      },
      {
        "symbolicID" : "Osc1Octave",
        "name" : "Osc1 Oct",
        "valueType" : 0,
        "displayType" : "integer_slider",
        "min" : 0,
        "max" : 8,
        "default" : 3
      },
      {
        "symbolicID" : "Osc1Note",
        "name" : "Osc1 Note",
        "valueType" : 0,
        "displayType" : "note_pitch",
        "min" : 0,
        "max" : 11,
        "default" : 0
      },
      {
        "symbolicID" : "Osc1Level",
        "name" : "Osc1 Level",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5,
        "assign" : 1
      },
      {
        "symbolicID" : "Osc1Pan",
        "name" : "Osc1 Pan",
        "valueType" : 1,
        "displayType" : "pan",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.478,
        "assign" : 2,
        "stereo-only" : true
      },
      {
        "symbolicID" : "Osc1Glide",
        "name" : "Osc1 Glide",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.25
      },
      {
        "symbolicID" : "Osc2Shape",
        "name" : "Osc2 Shape",
        "valueType" : 0,
        "displayType" : "wave_shape",
        "min" : 0,
        "max" : 4,
        "default" : 3
      },
      {
        "symbolicID" : "Osc2Octave",
        "name" : "Osc2 Oct",
        "valueType" : 0,
        "displayType" : "integer_slider",
        "min" : 0,
        "max" : 8,
        "default" : 3
      },
      {
        "symbolicID" : "Osc2Note",
        "name" : "Osc2 Note",
        "valueType" : 0,
        "displayType" : "note_pitch",
        "min" : 0,
        "max" : 11,
        "default" : 7
      },
      {
        "symbolicID" : "Osc2Level",
        "name" : "Osc2 Level",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5,
        "assign" : 3
      },
      {
        "symbolicID" : "Osc2Pan",
        "name" : "Osc2 Pan",
        "valueType" : 1,
        "displayType" : "pan",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.544,
        "assign" : 4,
        "stereo-only" : true
      },
      {
        "symbolicID" : "Osc2Glide",
        "name" : "Osc2 Glide",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.25
      },
      {
        "symbolicID" : "Osc3Shape",
        "name" : "Osc3 Shape",
        "valueType" : 0,
        "displayType" : "wave_shape",
        "min" : 0,
        "max" : 4,
        "default" : 3
      },
      {
        "symbolicID" : "Osc3Octave",
        "name" : "Osc3 Oct",
        "valueType" : 0,
        "displayType" : "integer_slider",
        "min" : 0,
        "max" : 8,
        "default" : 4
      },
      {
        "symbolicID" : "Osc3Note",
        "name" : "Osc3 Note",
        "valueType" : 0,
        "displayType" : "note_pitch",
        "min" : 0,
        "max" : 11,
        "default" : 4
      },
      {
        "symbolicID" : "Osc3Level",
        "name" : "Osc3 Level",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5
      },
      {
        "symbolicID" : "Osc3Pan",
        "name" : "Osc3 Pan",
        "valueType" : 1,
        "displayType" : "pan",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5,
        "stereo-only" : true
      },
      {
        "symbolicID" : "Osc3Glide",
        "name" : "Osc3 Glide",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.25
      },
      {
        "symbolicID" : "Attack",
        "name" : "Attack",
        "valueType" : 1,
        "displayType" : "time_ms",
        "min" : 0.01,
        "max" : 10.0,
        "default" : 0.5
      },
      {
        "symbolicID" : "Decay",
        "name" : "Decay",
        "valueType" : 1,
        "displayType" : "time_ms",
        "min" : 0.01,
        "max" : 10.0,
        "default" : 3.0
      },
      {
        "symbolicID" : "DryLevel",
        "name" : "Dry Level",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0
      },
      {
        "symbolicID" : "DryPan",
        "name" : "Dry Pan",
        "valueType" : 1,
        "displayType" : "pan",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5,
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
        "symbolicID" : "RiseTimeSwitch",
        "name" : "Rise Time Switch",
        "valueType" : 2,
        "displayType" : "off_on",
        "min" : false,
        "max" : true,
        "default" : true
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
    "symbolicID" : "HD2_Synth4OSCGenerator",
    "mono" : true,
    "stereo" : true,
    "name" : "4 OSC Generator",
    "category" : 7,
    "load": 7.50,
    "load_stereo": 7.50,
    "params" : [
      {
        "symbolicID" : "Osc1Shape",
        "name" : "Osc1 Shape",
        "valueType" : 0,
        "displayType" : "wave_shape",
        "min" : 0,
        "max" : 4,
        "default" : 3
      },
      {
        "symbolicID" : "Osc1Freq",
        "name" : "Osc1 Freq",
        "valueType" : 1,
        "displayType" : "frequency",
        "min" : 20.0,
        "max" : 10000.0,
        "default" : 110.0
      },
      {
        "symbolicID" : "Osc1Pan",
        "name" : "Osc1 Pan",
        "valueType" : 1,
        "displayType" : "pan",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.478,
        "assign" : 2,
        "stereo-only" : true
      },
      {
        "symbolicID" : "Osc1Level",
        "name" : "Osc1 Level",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5,
        "assign" : 1
      },
      {
        "symbolicID" : "Osc2Shape",
        "name" : "Osc2 Shape",
        "valueType" : 0,
        "displayType" : "wave_shape",
        "min" : 0,
        "max" : 4,
        "default" : 3
      },
      {
        "symbolicID" : "Osc2Freq",
        "name" : "Osc2 Freq",
        "valueType" : 1,
        "displayType" : "frequency",
        "min" : 20.0,
        "max" : 10000.0,
        "default" : 220.0
      },
      {
        "symbolicID" : "Osc2Pan",
        "name" : "Osc2 Pan",
        "valueType" : 1,
        "displayType" : "pan",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.544,
        "assign" : 4,
        "stereo-only" : true
      },
      {
        "symbolicID" : "Osc2Level",
        "name" : "Osc2 Level",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5,
        "assign" : 3
      },
      {
        "symbolicID" : "Osc3Shape",
        "name" : "Osc3 Shape",
        "valueType" : 0,
        "displayType" : "wave_shape",
        "min" : 0,
        "max" : 4,
        "default" : 3
      },
      {
        "symbolicID" : "Osc3Freq",
        "name" : "Osc3 Freq",
        "valueType" : 1,
        "displayType" : "frequency",
        "min" : 20.0,
        "max" : 10000.0,
        "default" : 440.0
      },
      {
        "symbolicID" : "Osc3Pan",
        "name" : "Osc3 Pan",
        "valueType" : 1,
        "displayType" : "pan",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5,
        "stereo-only" : true
      },
      {
        "symbolicID" : "Osc3Level",
        "name" : "Osc3 Level",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5
      },
      {
        "symbolicID" : "Osc4Shape",
        "name" : "Osc4 Shape",
        "valueType" : 0,
        "displayType" : "wave_shape",
        "min" : 0,
        "max" : 4,
        "default" : 3
      },
      {
        "symbolicID" : "Osc4Freq",
        "name" : "Osc4 Freq",
        "valueType" : 1,
        "displayType" : "frequency",
        "min" : 20.0,
        "max" : 10000.0,
        "default" : 660.0
      },
      {
        "symbolicID" : "Osc4Pan",
        "name" : "Osc4 Pan",
        "valueType" : 1,
        "displayType" : "pan",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5,
        "stereo-only" : true
      },
      {
        "symbolicID" : "Osc4Level",
        "name" : "Osc4 Level",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5
      },
      {
        "symbolicID" : "Attack",
        "name" : "Attack",
        "valueType" : 1,
        "displayType" : "time_ms",
        "min" : 0.01,
        "max" : 10.0,
        "default" : 0.5
      },
      {
        "symbolicID" : "Decay",
        "name" : "Decay",
        "valueType" : 1,
        "displayType" : "time_ms",
        "min" : 0.01,
        "max" : 10.0,
        "default" : 3.0
      },
      {
        "symbolicID" : "DryLevel",
        "name" : "Dry Level",
        "valueType" : 1,
        "displayType" : "generic_knob",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0
      },
      {
        "symbolicID" : "DryPan",
        "name" : "Dry Pan",
        "valueType" : 1,
        "displayType" : "pan",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.5,
        "stereo-only" : true
      },
      {
        "symbolicID" : "Level",
        "name" : "Level",
        "valueType" : 1,
        "displayType" : "volume",
        "min" : -60.0,
        "max" : 6.0,
        "default" : 0.0,
        "default_stereo" : 1.5
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
    "symbolicID" : "HD2_DM4BassOctaver",
    "name" : "Bass Octaver",
    "load" : 5.0,
    "category" : 7,
    "devices": [ { "id":2162944 },
                 { "id":2162945 },
                 { "id":2162693 },
                 { "id":2162694 },
                 { "id":2162689, "version":"0x02300100" },
                 { "id":2162690, "version":"0x02300100" },
                 { "id":2162692, "version":"0x02300100" } ],
    "params" : [
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
        "symbolicID" : "Normal",
        "name" : "Normal",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0
      },
      {
        "symbolicID" : "Octave",
        "name" : "Octave",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.85
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
    "symbolicID" : "HD2_FM4OctiSynth",
    "name" : "Octi Synth",
    "load" : 3.0,
    "category" : 7,
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
        "default" : 0.1
      },
      {
        "symbolicID" : "Freq",
        "name" : "Frequency",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.13,
        "assign" : 5
      },
      {
        "symbolicID" : "Q",
        "name" : "Q",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0
      },
      {
        "symbolicID" : "Depth",
        "name" : "Depth",
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
    "symbolicID" : "HD2_FM4SynthOMatic",
    "name" : "Synth O Matic",
    "load" : 5.0,
    "category" : 7,
    "devices": [ { "id":2162944 },
                 { "id":2162945 },
                 { "id":2162693 },
                 { "id":2162694 },
                 { "id":2162689, "version":"0x02300100" },
                 { "id":2162690, "version":"0x02300100" },
                 { "id":2162692, "version":"0x02300100" } ],
    "params" : [
      {
        "symbolicID" : "Frequency",
        "name" : "Frequency",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.7,
        "assign" : 5
      },
      {
        "symbolicID" : "Q",
        "name" : "Q",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.0
      },
      {
        "symbolicID" : "Wave",
        "name" : "Wave",
        "valueType" : 0,
        "displayType" : "integer_slider",
        "min" : 0,
        "max" : 7,
        "default" : 6
      },
      {
        "symbolicID" : "Pitch",
        "name" : "Pitch",
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
    "symbolicID" : "HD2_FM4AttackSynth",
    "name" : "Attack Synth",
    "load" : 5.5,
    "category" : 7,
    "devices": [ { "id":2162944 },
                 { "id":2162945 },
                 { "id":2162693 },
                 { "id":2162694 },
                 { "id":2162689, "version":"0x02300100" },
                 { "id":2162690, "version":"0x02300100" },
                 { "id":2162692, "version":"0x02300100" } ],
    "params" : [
      {
        "symbolicID" : "Freq",
        "name" : "Frequency",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.8,
        "assign" : 5
      },
      {
        "symbolicID" : "Wave",
        "name" : "Wave",
        "valueType" : 0,
        "displayType" : "wave_synth",
        "min" : 0,
        "max" : 2,
        "default" : 2
      },
      {
        "symbolicID" : "Attack",
        "name" : "Attack",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0
      },
      {
        "symbolicID" : "Pitch",
        "name" : "Pitch",
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
    "symbolicID" : "HD2_FM4SynthString",
    "name" : "Synth String",
    "load" : 6.0,
    "category" : 7,
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
        "default" : 0.69
      },
      {
        "symbolicID" : "Freq",
        "name" : "Frequency",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.89,
        "assign" : 5
      },
      {
        "symbolicID" : "Attack",
        "name" : "Attack",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 1.0
      },
      {
        "symbolicID" : "Pitch",
        "name" : "Pitch",
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
    "symbolicID" : "HD2_FM4Growler",
    "name" : "Growler",
    "load" : 6.0,
    "category" : 7,
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
        "default" : 0.84
      },
      {
        "symbolicID" : "Freq",
        "name" : "Frequency",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.39,
        "assign" : 5
      },
      {
        "symbolicID" : "Q",
        "name" : "Q",
        "valueType" : 1,
        "displayType" : "percent",
        "min" : 0.0,
        "max" : 1.0,
        "default" : 0.84
      },
      {
        "symbolicID" : "Pitch",
        "name" : "Pitch",
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
    "symbolicID" : "HD2_M13TwoVoiceHarmony",
    "name" : "Smart Harmony",
    "load" : 5.50,
    "category" : 7,
    "devices": [ { "id":2162944 },
                 { "id":2162945 },
                 { "id":2162693 },
                 { "id":2162694 },
                 { "id":2162689, "version":"0x02300100" },
                 { "id":2162690, "version":"0x02300100" },
                 { "id":2162692, "version":"0x02300100" } ],
    "params" : [
      {
        "symbolicID" : "Key",
        "name" : "Key",
        "valueType" : 0,
        "displayType" : "key_voice",
        "min" : 0,
        "max" : 11,
        "default" : 0
      },
      {
        "symbolicID" : "Shift",
        "name" : "Shift",
        "valueType" : 0,
        "displayType" : "pitch_shift",
        "min" : -8,
        "max" : 8,
        "default" : 2
      },
      {
        "symbolicID" : "Scale",
        "name" : "Scale",
        "valueType" : 0,
        "displayType" : "scale_voice",
        "min" : 0,
        "max" : 7,
        "default" : 0
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
