import React from 'react';
import {Block, BlockReport, GridBlock} from './HxBlock.js';
import CardDeck from 'react-bootstrap/CardDeck';

function flattenBlocks(patch) {
    let allBlocks = [];
    allBlocks = allBlocks.concat(patch.dsp0.paths[0].blocks);
    allBlocks = allBlocks.concat(patch.dsp0.paths[1].blocks);
    allBlocks = allBlocks.concat(patch.dsp1.paths[0].blocks);
    allBlocks = allBlocks.concat(patch.dsp1.paths[1].blocks);
    allBlocks = allBlocks.concat(patch.dsp0.splitJoins);
    allBlocks = allBlocks.concat(patch.dsp1.splitJoins);
    allBlocks.push(patch.dsp0.paths[0].input);
    allBlocks.push(patch.dsp0.paths[1].input);
    allBlocks.push(patch.dsp1.paths[0].input);
    allBlocks.push(patch.dsp1.paths[1].input);
    allBlocks.push(patch.dsp0.paths[0].output);
    allBlocks.push(patch.dsp0.paths[1].output);
    allBlocks.push(patch.dsp1.paths[0].output);
    allBlocks.push(patch.dsp1.paths[1].output);
    return allBlocks;
}
export function Patch(props) {

    var blocks = [];
    if ("name" in props.patch) {
        console.log(props.patch.blocks.length);
        let allBlocks = flattenBlocks(props.patch);
        for (let i = 0; i < allBlocks.length; i++) {
            blocks.push(Block(allBlocks[i]));
        }
        console.log(blocks);
        return (
            <div>
                <h2>{props.patch.name}</h2>
                <div class="row row-cols-1 row-cols-md-1">
                    {blocks}
                </div>
            </div>
        );
    } else {
        return (
            <h2>No Patch Selected</h2>
        );
    }
}

export function PatchReport(props) {
    var blocks = [];
    if ("name" in props.patch) {
        let allBlocks = flattenBlocks(props.patch);
        console.log(props.patch.blocks.length);
        for (let i = 0; i < allBlocks.length; i++) {
            blocks.push(BlockReport(allBlocks[i]));
        }
        console.log(blocks);
        return (
            <div>
            <h2>{props.patch.name}</h2>
            <div class="row row-cols-1 row-cols-md-1">
                {blocks}
            </div>
            </div>
    );
    } else {
        return (
            <h2>No Patch Selected</h2>
    );
    }
}

export function PatchGrid(props) {
    let patch = props.patch;
    let grid = [
        [
            [".",".",".",".",".",".",".",".",".","."],
            [".",".",".",".",".",".",".",".",".","."],
            [".",".",".",".",".",".",".",".",".","."],
            [".",".",".",".",".",".",".",".",".","."]
        ],
        [
            [".",".",".",".",".",".",".",".",".","."],
            [".",".",".",".",".",".",".",".",".","."],
            [".",".",".",".",".",".",".",".",".","."],
            [".",".",".",".",".",".",".",".",".","."]
        ]
    ];
    // if ("blocks" in patch) {
    //     for (let i = 0 ; i < patch.blocks.length ; i++) {
    //         let block = patch.blocks[i];
    //         grid[block["@dsp"]][block["@path"]][block["@position"]+1] = GridBlock(block);
    //     };
    // };
    if ("dsp0" in patch) {
        return (
            <div class="table">
                <tbody>
                <tr>
                    <td>{GridBlock(patch.dsp0.paths[0].input)}</td>
                    <td>{GridBlock(patch.dsp0.splitJoins[0])}</td>
                    <td>{GridBlock(patch.dsp0.paths[0].blocks[0])}</td>
                    <td>{GridBlock(patch.dsp0.splitJoins[1])}</td>
                    <td>{GridBlock(patch.dsp0.paths[0].blocks[1])}</td>
                    <td>{GridBlock(patch.dsp0.splitJoins[2])}</td>
                    <td>{GridBlock(patch.dsp0.paths[0].blocks[2])}</td>
                    <td>{GridBlock(patch.dsp0.splitJoins[3])}</td>
                    <td>{GridBlock(patch.dsp0.paths[0].blocks[3])}</td>
                    <td>{GridBlock(patch.dsp0.splitJoins[4])}</td>
                    <td>{GridBlock(patch.dsp0.paths[0].blocks[4])}</td>
                    <td>{GridBlock(patch.dsp0.splitJoins[5])}</td>
                    <td>{GridBlock(patch.dsp0.paths[0].blocks[5])}</td>
                    <td>{GridBlock(patch.dsp0.splitJoins[6])}</td>
                    <td>{GridBlock(patch.dsp0.paths[0].blocks[6])}</td>
                    <td>{GridBlock(patch.dsp0.splitJoins[7])}</td>
                    <td>{GridBlock(patch.dsp0.paths[0].blocks[7])}</td>
                    <td>{GridBlock(patch.dsp0.splitJoins[8])}</td>
                    <td>{GridBlock(patch.dsp0.paths[0].output)}</td>
                </tr>
                <tr>
                    <td>{GridBlock(patch.dsp0.paths[1].input)}</td>
                    <td></td>
                    <td>{GridBlock(patch.dsp0.paths[1].blocks[0])}</td>
                    <td></td>
                    <td>{GridBlock(patch.dsp0.paths[1].blocks[1])}</td>
                    <td></td>
                    <td>{GridBlock(patch.dsp0.paths[1].blocks[2])}</td>
                    <td></td>
                    <td>{GridBlock(patch.dsp0.paths[1].blocks[3])}</td>
                    <td></td>
                    <td>{GridBlock(patch.dsp0.paths[1].blocks[4])}</td>
                    <td></td>
                    <td>{GridBlock(patch.dsp0.paths[1].blocks[5])}</td>
                    <td></td>
                    <td>{GridBlock(patch.dsp0.paths[1].blocks[6])}</td>
                    <td></td>
                    <td>{GridBlock(patch.dsp0.paths[1].blocks[7])}</td>
                    <td></td>
                    <td>{GridBlock(patch.dsp0.paths[1].output)}</td>
                </tr>
                <tr>
                    <td>{GridBlock(patch.dsp1.paths[0].input)}</td>
                    <td>{GridBlock(patch.dsp1.splitJoins[0])}</td>
                    <td>{GridBlock(patch.dsp1.paths[0].blocks[0])}</td>
                    <td>{GridBlock(patch.dsp1.splitJoins[1])}</td>
                    <td>{GridBlock(patch.dsp1.paths[0].blocks[1])}</td>
                    <td>{GridBlock(patch.dsp1.splitJoins[2])}</td>
                    <td>{GridBlock(patch.dsp1.paths[0].blocks[2])}</td>
                    <td>{GridBlock(patch.dsp1.splitJoins[3])}</td>
                    <td>{GridBlock(patch.dsp1.paths[0].blocks[3])}</td>
                    <td>{GridBlock(patch.dsp1.splitJoins[4])}</td>
                    <td>{GridBlock(patch.dsp1.paths[0].blocks[4])}</td>
                    <td>{GridBlock(patch.dsp1.splitJoins[5])}</td>
                    <td>{GridBlock(patch.dsp1.paths[0].blocks[5])}</td>
                    <td>{GridBlock(patch.dsp1.splitJoins[6])}</td>
                    <td>{GridBlock(patch.dsp1.paths[0].blocks[6])}</td>
                    <td>{GridBlock(patch.dsp1.splitJoins[7])}</td>
                    <td>{GridBlock(patch.dsp1.paths[0].blocks[7])}</td>
                    <td>{GridBlock(patch.dsp1.splitJoins[8])}</td>
                    <td>{GridBlock(patch.dsp1.paths[0].output)}</td>
                </tr>
                <tr>
                    <td>{GridBlock(patch.dsp1.paths[1].input)}</td>
                    <td></td>
                    <td>{GridBlock(patch.dsp1.paths[1].blocks[0])}</td>
                    <td></td>
                    <td>{GridBlock(patch.dsp1.paths[1].blocks[1])}</td>
                    <td></td>
                    <td>{GridBlock(patch.dsp1.paths[1].blocks[2])}</td>
                    <td></td>
                    <td>{GridBlock(patch.dsp1.paths[1].blocks[3])}</td>
                    <td></td>
                    <td>{GridBlock(patch.dsp1.paths[1].blocks[4])}</td>
                    <td></td>
                    <td>{GridBlock(patch.dsp1.paths[1].blocks[5])}</td>
                    <td></td>
                    <td>{GridBlock(patch.dsp1.paths[1].blocks[6])}</td>
                    <td></td>
                    <td>{GridBlock(patch.dsp1.paths[1].blocks[7])}</td>
                    <td></td>
                    <td>{GridBlock(patch.dsp1.paths[1].output)}</td>
                </tr>
        </tbody>
        < /div>
    )
    } else {
        return <b>No Patch Selected</b>
    }
}