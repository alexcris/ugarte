'use strict';

// -----------------------------------------------------------------------------------------------
// React + Other Modules
// -----------------------------------------------------------------------------------------------

var React = require('react');

var AccionesMixin = require('./acciones-mixin');

// -----------------------------------------------------------------------------------------------
// DiligenciaEmbargo
// -----------------------------------------------------------------------------------------------

var options = [
    'No encontró el domicilio',
    'El domicilio es incorrecto',
    'La persona no vive ahí',
    'No abre nadie en el domicilio',
    'Fallecimiento',
    'Se realizó exitosamente'
];

var DiligenciaEmbargo = React.createClass({
    mixins: [AccionesMixin],
    getInitialState: function () {
        return {
            tipo: 10,
            comentarios: '',
            contrato: this.props.contrato,
            respuestas: {respuesta: null}
        };
    },
    render: function () {
        return (
            <div className='diligencia-embargo'>
                <select value={options[this.state.respuestas.respuesta]} onChange={this.handleChange}>
                    {this.renderOptions()}
                </select>
                {this.renderButton()}
            </div>
        );
    },
    renderOptions: function () {
        return (options.map(function (option, index) {
            return (<option key={index} value={index}>{option}</option>);
        }));
    },
    handleChange: function (event) {
        var respuestas = this.state.respuestas;
        respuestas.respuesta = options[event.target.value];
        this.setState({respuestas: respuestas});
    }
});

module.exports = DiligenciaEmbargo;
