import React, { Component } from 'react';

class GeneralInfo extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <form action="">
                    <fieldset>
                        <legend>Informações Gerais</legend>
                        <p>
                            <label for="item">Nome:</label>
                            <input type="text" id="nome"></input>
                        </p>
                        <p>
                            <label for="item">Tema:</label>
                            <select>
                                <option value="Android">Android</option>
                                <option value="IOS">IOS</option>
                                <option value="Web">Web</option>
                                <option value="Outro">Outro</option>
                            </select>
                        </p>
                    </fieldset>
                </form>
            </div>
        )
    }
}
export default GeneralInfo;
