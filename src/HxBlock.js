import React from 'react';
import Card from 'react-bootstrap/Card';

function getCategoryIconName(block) {
    if (block["@model"].startsWith("HD2_Amp")) {
        return "FX_HX_Category_Amp.png";
    } else if (block["@model"].startsWith("HD2_Cab")) {
        return "FX_HX_Category_Cab.png";
    } else if (block["@model"].startsWith("HD2_AppDSPFlow1Input")) {
        return "icon-input-category.png";
    } else if (block["@model"].startsWith("HD2_AppDSPFlow2Input")) {
        return "icon-input-category.png";
    } else if (block["@model"].startsWith("HD2_AppDSPFlowOutput")) {
        return "icon-output-category.png";
    } else if (block["@model"].startsWith("HD2_Delay")) {
        return "FX_HX_Category_Delay.png";
    } else if (block["@model"].startsWith("HD2_Dist")) {
        return "FX_HX_Category_Distortion.png";
    } else if (block["@model"].startsWith("HD2_EQ")) {
        return "FX_HX_Category_EQ.png";
    } else if (block["@model"].startsWith("HD2_CaliQ")) {
        return "FX_HX_Category_EQ.png";
    } else if (block["@model"].startsWith("HD2_Comp")) {
        return "FX_HX_Category_Dynamics.png";
    } else if (block["@model"].startsWith("HD2_Filter")) {
        return "FX_HX_Category_Filter.png";
    } else if (block["@model"].startsWith("HD2_Impulse")) {
        return "FX_HX_Category_Impulse Response.png";
    } else if (block["@model"].startsWith("HD2_Looper")) {
        return "FX_HX_Category_Looper.png";
    } else if (block["@model"].startsWith("HD2_AppDSPFlowJoin")) {
        return "FX_HX_Category_Merge.png";
    } else if (block["@model"].startsWith("HD2_Modulation")) {
        return "FX_HX_Category_Modulation.png";
    } else if (block["@model"].startsWith("HD2_Phaser")) {
        return "FX_HX_Category_Modulation.png";
    } else if (block["@model"].startsWith("HD2_Chorus")) {
        return "FX_HX_Category_Modulation.png";
    } else if (block["@model"].startsWith("HD2_Flanger")) {
        return "FX_HX_Category_Modulation.png";
    } else if (block["@model"].startsWith("HD2_Rotary")) {
        return "FX_HX_Category_Modulation.png";
    } else if (block["@model"].startsWith("HD2_Pitch")) {
        return "FX_HX_Category_PitchSynth.png";
    } else if (block["@model"].startsWith("HD2_Preamp")) {
        return "FX_HX_Category_Preamp.png";
    } else if (block["@model"].startsWith("HD2_Reverb")) {
        return "FX_HX_Category_Reverb.png";
    } else if (block["@model"].startsWith("HD2_FXLoop")) {
        return "FX_HX_Category_SendReturn.png";
    } else if (block["@model"].startsWith("HD2_Send")) {
        return "FX_HX_Category_SendReturn.png";
    } else if (block["@model"].startsWith("HD2_Return")) {
        return "FX_HX_Category_SendReturn.png";
    } else if (block["@model"].startsWith("HD2_AppDSPFlowSplit")) {
        return "FX_HX_Category_Split.png";
    } else if (block["@model"].startsWith("HD2_VolPan")) {
        return "FX_HX_Category_VolumePan.png";
    } else if (block["@model"].startsWith("HD2_Wah")) {
        return "FX_HX_Category_Wah.png";
    }
    return "FX_HX_Category_None.png";
}

export function Block(block) {
    let rows = [];
    for (let key in block) {
        if (/*!key.startsWith("@") && */block.hasOwnProperty(key)) {
            rows.push(<tr><th scope="row">{key}</th><td>{block[key]}</td></tr>);
        }
    }
    let blockId =  block["@dsp"] + "_" + block["@path"] + "_" + block["@position"];
    return (
        <div class="collapse show" id={"_" + blockId}>
            <h2 >{block["@name"]} ({block["@dsp"]},{block["@path"]},{block["@position"]})</h2>
            <table class="table table-dark">
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
}

export function BlockReport(block) {
    let rows = [];
    for (let key in block) {
        if (block.hasOwnProperty(key)) {
            rows.push(<tr><th scope="row">{key}</th><td>{block[key]}</td></tr>);
        }
    }
    return (
        <div class="col mb-1">
            <Card>
                <Card.Body>
                    <Card.Header>{block["@name"]}</Card.Header>
                    <table class="table">
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </Card.Body>
            </Card>
        </div>
    );
}

export function GridBlock(block) {
    let blockId =  block["@dsp"] + "_" + block["@path"] + "_" + block["@position"];
    if ("@name" in block) {
        return (
            <div>
            <div><img src={require('./resources/icons_category/' + getCategoryIconName(block))}/></div>
        <div><b><a data-toggle="collapse" aria-expanded="true" href={"#_" + blockId} aria-controls={"_" + blockId}  data-target={"#_" + blockId}>{block["@name"]}</a></b></div>
        </div>
        )
    } else {
        return (<div></div>)
    }
}