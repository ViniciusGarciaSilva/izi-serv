import React, { Component } from 'react';

class Requirement extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <p>
                    <label for="item">Requisito:</label>
                    <input type="text" id="requisito"></input>
                </p>  
                <p>
                    <label for="item">Descrição:</label>
                    <input type="text" id="descricao"></input>
                </p>
                <p>
                    <label for="item">Prioridade:</label>
                    <select>
                        <option value="alta">Alta</option>
                        <option value="media">Media</option>
                        <option value="baixa">Baixa</option>
                    </select>
                </p>
            </div>
        )
    }
}
export default Requirement;