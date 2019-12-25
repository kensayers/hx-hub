import React from 'react';
import Block from './HxBlock.js';
import CardDeck from 'react-bootstrap/CardDeck';

function Patch(props) {

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
                <div class="row row-cols-1 row-cols-md-3">
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

export default Patch;