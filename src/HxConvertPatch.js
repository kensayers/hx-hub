// AmpModels holds block where @type=3
import AmpModels from './resources/models/amp.models.js';
import EQModels from './resources/models/eq.models.js';
import CompressorModels from './resources/models/compressor.models.js';
import CabModels from './resources/models/cab.models.js';
import DistortionModels from './resources/models/distortion.models.js';
import FixedModels from './resources/models/fixed.models.js';
import DelayModels from './resources/models/delay.models.js';
import PitchModels from './resources/models/pitch-synth.models.js';
import ModulationModels from './resources/models/modulation.models.js';
import FilterModels from './resources/models/filter.models.js';
import GateModels from './resources/models/gate.models.js';
import IOModels from './resources/models/io.models.js';
import ReverbModels from './resources/models/reverb.models.js';
import SendReturnModels from './resources/models/sendreturn.models.js';
import VolumePanModels from './resources/models/volumepan.models.js';
import WahModels from './resources/models/wah.models.js';
import PreampModels from './resources/models/preamp.models.js';

function ConvertPatch(patch) {
    function convertInputBlock(dsp, path, block) {
        // block["@position"] = -1;
        // block["@path"] = path * 2;
        return convertPrimitiveBlock(dsp, block);
    }
    function convertOutputBlock(dsp, path, block) {
        // block["@position"] = 8;
        // block["@path"] = path * 2;
        return convertPrimitiveBlock(dsp, block);
    }
    function convertSplitJoin(dsp, path, block) {
        // block["@path"] = path + 1 ;
        return convertPrimitiveBlock(dsp, block);
    }
    function convertBlock(dsp, block) {
        // block["@path"] = block["@path"] * 2 ;
        return convertPrimitiveBlock(dsp, block);
    }
    function convertPrimitiveBlock(dsp, block) {
        console.log("Convert Block " + dsp + " " + block["@path"]);
        console.log(block);
        let convertedBlock = {};
        convertedBlock["@dsp"] = dsp;
        var found = false;
        if (!found && (block["@model"].startsWith("HD2_Amp"))) {
            found = AmpModels.models.find(function (model) {
                return model.symbolicID === block["@model"];
            });
        }
        if (!found && (block["@model"].startsWith("HD2_EQ") || block["@model"].startsWith("HD2_CaliQ"))) {
            found = EQModels.models.find(function (model) {
                return model.symbolicID === block["@model"];
            });
        }
        if (!found && (block["@model"].startsWith("HD2_Compressor") || block["@model"].startsWith("HD2_DM4"))) {
            found = CompressorModels.models.find(function (model) {
                return model.symbolicID === block["@model"];
            });
        }
        if (!found && (block["@model"].startsWith("HD2_Cab"))) {
            found = CabModels.models.find(function (model) {
                return model.symbolicID === block["@model"];
            });
        }
        if (!found && (block["@model"].startsWith("HD2_Preamp"))) {
            found = PreampModels.models.find(function (model) {
                return model.symbolicID === block["@model"];
            });
        }
        if (!found && (block["@model"].startsWith("HD2_Dist") || block["@model"].startsWith("HD2_DM4"))) {
            found = DistortionModels.models.find(function (model) {
                return model.symbolicID === block["@model"];
            });
        }
        if (!found && (block["@model"].startsWith("HD2_Impulse") || block["@model"].startsWith("@") || block["@model"].startsWith("HD2_Looper"))) {
            found = FixedModels.models.find(function (model) {
                return model.symbolicID === block["@model"];
            });
        }
        if (!found && (block["@model"].startsWith("HD2_Delay") || block["@model"].startsWith("HD2_DL4"))) {
            found = DelayModels.models.find(function (model) {
                return model.symbolicID === block["@model"];
            });
        }
        if (!found && (block["@model"].startsWith("HD2_Pitch") || block["@model"].startsWith("HD2_Synth") || block["@model"].startsWith("HD2_DM4") || block["@model"].startsWith("HD2_FM4") || block["@model"].startsWith("HD2_M13"))) {
            found = PitchModels.models.find(function (model) {
                return model.symbolicID === block["@model"];
            });
        }
        if (!found && (block["@model"].startsWith("HD2_Phaser") || block["@model"].startsWith("HD2_Flanger") || block["@model"].startsWith("HD2_Chorus") || block["@model"].startsWith("HD2_RingMod") || block["@model"].startsWith("HD2_Rotary") || block["@model"].startsWith("HD2_Tremolo") || block["@model"].startsWith("HD2_Vibrato") || block["@model"].startsWith("HD2_Delay") || block["@model"].startsWith("HD2_MM4") || block["@model"].startsWith("HD2_M13"))) {
            found = ModulationModels.models.find(function (model) {
                return model.symbolicID === block["@model"];
            });
        }
        if (!found && (block["@model"].startsWith("HD2_Filter") || block["@model"].startsWith("HD2_FM4"))) {
            found = FilterModels.models.find(function (model) {
                return model.symbolicID === block["@model"];
            });
        }
        if (!found && (block["@model"].startsWith("HD2_Gate"))) {
            found = GateModels.models.find(function (model) {
                return model.symbolicID === block["@model"];
            });
        }
        if (!found && (block["@model"].startsWith("HD2_AppDSPFlow"))) {
            found = IOModels.models.find(function (model) {
                return model.symbolicID === block["@model"];
            });
        }
        if (!found && (block["@model"].startsWith("HD2_Reverb"))) {
            found = ReverbModels.models.find(function (model) {
                return model.symbolicID === block["@model"];
            });
        }
        if (!found && (block["@model"].startsWith("HD2_FXLoop") || block["@model"].startsWith("HD2_Send") || block["@model"].startsWith("HD2_Return"))) {
            found = SendReturnModels.models.find(function (model) {
                return model.symbolicID === block["@model"];
            });
        }
        if (!found && (block["@model"].startsWith("HD2_VolPan"))) {
            found = VolumePanModels.models.find(function (model) {
                return model.symbolicID === block["@model"];
            });
        }
        if (!found && (block["@model"].startsWith("HD2_Wah"))) {
            found = WahModels.models.find(function (model) {
                return model.symbolicID === block["@model"];
            });
        }
        if (found) {
            convertedBlock["@name"] = found.name;
            convertedBlock["@type"] = block["@type"];
            for (let i = 0 ; i < found.params.length ; i++) {
                let param = found.params[i];
                console.log(param.symbolicID);
                if (block.hasOwnProperty(param.symbolicID)) {
                    convertedBlock[param.name] = block[param.symbolicID];
                }
            }
        } else {
            convertedBlock["@name"] = block["@model"];
            convertedBlock["@type"] = block["@type"];
        }
        for (let key in block) {
            if (key.startsWith("@")) {
                convertedBlock[key] = block[key];
            }
        }
        return convertedBlock;
    }
    var convertedPatch = {
        dsp0:{
            splitJoins:[{},{},{},{},{},{},{},{},{}],
            paths:[{
                input:{},
                blocks:[{},{},{},{},{},{},{},{}],
                output:{}
            },
            {
                input:{},
                blocks:[{},{},{},{},{},{},{},{}],
                output:{}
            }]
        },
        dsp1:{
            splitJoins:[{},{},{},{},{},{},{},{},{}],
            paths:[{
                input:{},
                blocks:[{},{},{},{},{},{},{},{}],
                output:{}
            },
                {
                    input:{},
                    blocks:[{},{},{},{},{},{},{},{}],
                    output:{}
                }]
        }
    };
    convertedPatch.name = patch.data.meta.name;
    convertedPatch.blocks = [];
    if ("inputA" in patch.data.tone.dsp0) {
        convertedPatch.dsp0.paths[0].input = convertInputBlock(0, 0, patch.data.tone.dsp0.inputA);
    }
    if ("inputB" in patch.data.tone.dsp0) {
        convertedPatch.dsp0.paths[1].input = convertInputBlock(0, 1, patch.data.tone.dsp0.inputB);
    }
    if ("inputA" in patch.data.tone.dsp1) {
        convertedPatch.dsp1.paths[0].input = convertInputBlock(1, 0, patch.data.tone.dsp0.inputA);
    }
    if ("inputB" in patch.data.tone.dsp1) {
        convertedPatch.dsp1.paths[1].input = convertInputBlock(1, 1, patch.data.tone.dsp0.inputB);
    }
    if ("outputA" in patch.data.tone.dsp0) {
        convertedPatch.dsp0.paths[0].output = convertOutputBlock(0, 0, patch.data.tone.dsp0.outputA);
    }
    if ("outputB" in patch.data.tone.dsp0) {
        convertedPatch.dsp0.paths[1].output = convertOutputBlock(0, 1, patch.data.tone.dsp0.outputB);
    }
    if ("outputA" in patch.data.tone.dsp1) {
        convertedPatch.dsp1.paths[0].output = convertOutputBlock(1, 0, patch.data.tone.dsp1.outputA);
    }
    if ("outputB" in patch.data.tone.dsp1) {
        convertedPatch.dsp1.paths[1].output = convertOutputBlock(1, 1, patch.data.tone.dsp1.outputB);
    }
    if ("split" in patch.data.tone.dsp0) {
        convertedPatch.dsp0.splitJoins[patch.data.tone.dsp0.split["@position"]] = convertSplitJoin(0, 0, patch.data.tone.dsp0.split);
    }
    if ("split" in patch.data.tone.dsp1) {
        convertedPatch.dsp1.splitJoins[patch.data.tone.dsp1.split["@position"]] = convertSplitJoin(0, 0, patch.data.tone.dsp1.split);
    }
    if ("join" in patch.data.tone.dsp0) {
        convertedPatch.dsp0.splitJoins[patch.data.tone.dsp0.join["@position"]] = convertSplitJoin(0, 0, patch.data.tone.dsp0.join);
    }
    if ("join" in patch.data.tone.dsp1) {
        convertedPatch.dsp1.splitJoins[patch.data.tone.dsp1.join["@position"]] = convertSplitJoin(0, 0, patch.data.tone.dsp1.join);
    }
    if ("block0" in patch.data.tone.dsp0) {
        let blk = patch.data.tone.dsp0.block0;
        convertedPatch.dsp0.paths[blk["@path"]].blocks[blk["@position"]] = convertBlock(0, patch.data.tone.dsp0.block0);
    }
    if ("block1" in patch.data.tone.dsp0) {
        let blk = patch.data.tone.dsp0.block1;
        convertedPatch.dsp0.paths[blk["@path"]].blocks[blk["@position"]] = convertBlock(0, blk);
    }
    if ("block2" in patch.data.tone.dsp0) {
        let blk = patch.data.tone.dsp0.block2;
        convertedPatch.dsp0.paths[blk["@path"]].blocks[blk["@position"]] = convertBlock(0, blk);
    }
    if ("block3" in patch.data.tone.dsp0) {
        let blk = patch.data.tone.dsp0.block3;
        convertedPatch.dsp0.paths[blk["@path"]].blocks[blk["@position"]] = convertBlock(0, blk);
    }
    if ("block4" in patch.data.tone.dsp0) {
        let blk = patch.data.tone.dsp0.block4;
        convertedPatch.dsp0.paths[blk["@path"]].blocks[blk["@position"]] = convertBlock(0, blk);
    }
    if ("block5" in patch.data.tone.dsp0) {
        let blk = patch.data.tone.dsp0.block5;
        convertedPatch.dsp0.paths[blk["@path"]].blocks[blk["@position"]] = convertBlock(0, blk);
    }
    if ("block6" in patch.data.tone.dsp0) {
        let blk = patch.data.tone.dsp0.block6;
        convertedPatch.dsp0.paths[blk["@path"]].blocks[blk["@position"]] = convertBlock(0, blk);
    }
    if ("block7" in patch.data.tone.dsp0) {
        let blk = patch.data.tone.dsp0.block7;
        convertedPatch.dsp0.paths[blk["@path"]].blocks[blk["@position"]] = convertBlock(0, blk);
    }
    if ("block0" in patch.data.tone.dsp1) {
        let blk = patch.data.tone.dsp1.block0;
        convertedPatch.dsp1.paths[blk["@path"]].blocks[blk["@position"]] = convertBlock(0, blk);
    }
    if ("block1" in patch.data.tone.dsp1) {
        let blk = patch.data.tone.dsp1.block1;
        convertedPatch.dsp1.paths[blk["@path"]].blocks[blk["@position"]] = convertBlock(0, blk);
    }
    if ("block2" in patch.data.tone.dsp1) {
        let blk = patch.data.tone.dsp1.block2;
        convertedPatch.dsp1.paths[blk["@path"]].blocks[blk["@position"]] = convertBlock(0, blk);
    }
    if ("block3" in patch.data.tone.dsp1) {
        let blk = patch.data.tone.dsp1.block3;
        convertedPatch.dsp1.paths[blk["@path"]].blocks[blk["@position"]] = convertBlock(0, blk);
    }
    if ("block4" in patch.data.tone.dsp1) {
        let blk = patch.data.tone.dsp1.block4;
        convertedPatch.dsp1.paths[blk["@path"]].blocks[blk["@position"]] = convertBlock(0, blk);
    }
    if ("block5" in patch.data.tone.dsp1) {
        let blk = patch.data.tone.dsp1.block5;
        convertedPatch.dsp1.paths[blk["@path"]].blocks[blk["@position"]] = convertBlock(0, blk);
    }
    if ("block6" in patch.data.tone.dsp1) {
        let blk = patch.data.tone.dsp1.block6;
        convertedPatch.dsp1.paths[blk["@path"]].blocks[blk["@position"]] = convertBlock(0, blk);
    }
    if ("block7" in patch.data.tone.dsp1) {
        let blk = patch.data.tone.dsp1.block7;
        convertedPatch.dsp1.paths[blk["@path"]].blocks[blk["@position"]] = convertBlock(0, blk);
    }
    console.log(convertedPatch);
    return convertedPatch;
}

export default ConvertPatch;
