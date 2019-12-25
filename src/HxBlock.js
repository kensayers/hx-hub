import React from 'react';
import Card from 'react-bootstrap/Card';

function Block(block) {
    let rows = [];
    for (let key in block) {
        if (!key.startsWith("@") && block.hasOwnProperty(key)) {
            rows.push(<tr><th scope="row">{key}</th><td>{block[key]}</td></tr>);
        }
    }
    return (
        <div class="col mb-4">
            <Card>
                <Card.Body>
                    <Card.Header>{block["@model"]}</Card.Header>
                    <table class="table table-dark">
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Block;