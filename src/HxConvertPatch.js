
function ConvertPatch(patch) {
    function convertBlock(block) {
        console.log(block);
        let convertedBlock = {};
        for (let key in block) {
            if (block.hasOwnProperty(key)) {
                convertedBlock[key] = block[key];
            }
        }
        return convertedBlock;
    }
    console.log("Input Patch");
    console.log(patch);
    var convertedPatch = {};
    convertedPatch.name = patch.data.meta.name;
    convertedPatch.blocks = [];
    if ("block0" in patch.data.tone.dsp0) {
        convertedPatch.blocks.push(convertBlock(patch.data.tone.dsp0.block0));
    }
    if ("block1" in patch.data.tone.dsp0) {
        convertedPatch.blocks.push(convertBlock(patch.data.tone.dsp0.block1));
    }
    if ("block2" in patch.data.tone.dsp0) {
        convertedPatch.blocks.push(convertBlock(patch.data.tone.dsp0.block2));
    }
    if ("block3" in patch.data.tone.dsp0) {
        convertedPatch.blocks.push(convertBlock(patch.data.tone.dsp0.block3));
    }
    if ("block4" in patch.data.tone.dsp0) {
        convertedPatch.blocks.push(convertBlock(patch.data.tone.dsp0.block4));
    }
    if ("block5" in patch.data.tone.dsp0) {
        convertedPatch.blocks.push(convertBlock(patch.data.tone.dsp0.block5));
    }
    if ("block6" in patch.data.tone.dsp0) {
        convertedPatch.blocks.push(convertBlock(patch.data.tone.dsp0.block6));
    }
    if ("block7" in patch.data.tone.dsp0) {
        convertedPatch.blocks.push(convertBlock(patch.data.tone.dsp0.block7));
    }
    if ("block0" in patch.data.tone.dsp1) {
        convertedPatch.blocks.push(convertBlock(patch.data.tone.dsp1.block0));
    }
    if ("block1" in patch.data.tone.dsp1) {
        convertedPatch.blocks.push(convertBlock(patch.data.tone.dsp1.block1));
    }
    if ("block2" in patch.data.tone.dsp1) {
        convertedPatch.blocks.push(convertBlock(patch.data.tone.dsp1.block2));
    }
    if ("block3" in patch.data.tone.dsp1) {
        convertedPatch.blocks.push(convertBlock(patch.data.tone.dsp1.block3));
    }
    if ("block4" in patch.data.tone.dsp1) {
        convertedPatch.blocks.push(convertBlock(patch.data.tone.dsp1.block4));
    }
    if ("block5" in patch.data.tone.dsp1) {
        convertedPatch.blocks.push(convertBlock(patch.data.tone.dsp1.block5));
    }
    if ("block6" in patch.data.tone.dsp1) {
        convertedPatch.blocks.push(convertBlock(patch.data.tone.dsp1.block6));
    }
    if ("block7" in patch.data.tone.dsp1) {
        convertedPatch.blocks.push(convertBlock(patch.data.tone.dsp1.block7));
    }
    console.log(convertedPatch);
    return convertedPatch;
}

export default ConvertPatch;
