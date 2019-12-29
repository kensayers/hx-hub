import React from 'react';
import {Block, BlockReport, GridBlock} from './HxBlock.js';
import CardDeck from 'react-bootstrap/CardDeck';

export function Patch(props) {

    var blocks = [];
    if ("name" in props.patch) {
        console.log(props.patch.blocks.length);
        for (let i = 0; i < props.patch.blocks.length; i++) {
            blocks.push(Block(props.patch.blocks[i]));
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
        console.log(props.patch.blocks.length);
        for (let i = 0; i < props.patch.blocks.length; i++) {
            blocks.push(BlockReport(props.patch.blocks[i]));
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
    if ("blocks" in patch) {
        for (let i = 0 ; i < patch.blocks.length ; i++) {
            let block = patch.blocks[i];
            grid[block["@dsp"]][block["@path"]][block["@position"]+1] = GridBlock(block);
        };
    };
    return (
        <div class="table">
            <tbody>
                <tr><td>{grid[0][0][0]}</td><td>{grid[0][0][1]}</td><td>{grid[0][0][2]}</td><td>{grid[0][0][3]}</td><td>{grid[0][0][4]}</td><td>{grid[0][0][5]}</td><td>{grid[0][0][6]}</td><td>{grid[0][0][7]}</td><td>{grid[0][0][8]}</td><td>{grid[0][0][9]}</td></tr>
                <tr><td>{grid[0][1][0]}</td><td>{grid[0][1][1]}</td><td>{grid[0][1][2]}</td><td>{grid[0][1][3]}</td><td>{grid[0][1][4]}</td><td>{grid[0][1][5]}</td><td>{grid[0][1][6]}</td><td>{grid[0][1][7]}</td><td>{grid[0][1][8]}</td><td>{grid[0][1][9]}</td></tr>
                <tr><td>{grid[0][2][0]}</td><td>{grid[0][2][1]}</td><td>{grid[0][2][2]}</td><td>{grid[0][2][3]}</td><td>{grid[0][2][4]}</td><td>{grid[0][2][5]}</td><td>{grid[0][2][6]}</td><td>{grid[0][2][7]}</td><td>{grid[0][2][8]}</td><td>{grid[0][2][9]}</td></tr>
                <tr><td>{grid[1][0][0]}</td><td>{grid[1][0][1]}</td><td>{grid[1][0][2]}</td><td>{grid[1][0][3]}</td><td>{grid[1][0][4]}</td><td>{grid[1][0][5]}</td><td>{grid[1][0][6]}</td><td>{grid[1][0][7]}</td><td>{grid[1][0][8]}</td><td>{grid[1][0][9]}</td></tr>
                <tr><td>{grid[1][1][0]}</td><td>{grid[1][1][1]}</td><td>{grid[1][1][2]}</td><td>{grid[1][1][3]}</td><td>{grid[1][1][4]}</td><td>{grid[1][1][5]}</td><td>{grid[1][1][6]}</td><td>{grid[1][1][7]}</td><td>{grid[1][1][8]}</td><td>{grid[1][1][9]}</td></tr>
                <tr><td>{grid[1][2][0]}</td><td>{grid[1][2][1]}</td><td>{grid[1][2][2]}</td><td>{grid[1][2][3]}</td><td>{grid[1][2][4]}</td><td>{grid[1][2][5]}</td><td>{grid[1][2][6]}</td><td>{grid[1][2][7]}</td><td>{grid[1][2][8]}</td><td>{grid[1][2][9]}</td></tr>
            </tbody>
        </div>
    )
}