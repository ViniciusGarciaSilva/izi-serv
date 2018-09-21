import React, { Component } from 'react';

class Sprint extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <p>
                    <label for="item">Sprint:</label>
                    <input type="text" id="sprint"></input>
                </p>  
                <p>
                    <label for="item">Descrição:</label>
                    <input type="text" id="descricao"></input>
                </p>
                <p>
                    <label for="item">Data:</label>
                    <input type="text" id="data"></input>
                   
                </p>
            </div>
        )
    }
}
export default Sprint;