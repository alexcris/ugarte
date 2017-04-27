'use strict';

require('./actualizacion-factura.scss');

// -----------------------------------------------------------------------------------------------
// React + Other Modules
// -----------------------------------------------------------------------------------------------

var React = require('react');

// -----------------------------------------------------------------------------------------------
// ActualizacionFactura
// -----------------------------------------------------------------------------------------------

var ActualizacionFactura = React.createClass({
    contextTypes: {
        hideModal: React.PropTypes.func,
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        return this.getState();
    },
    onChange: function () {
        this.setState(this.getState());
    },
    getState: function () {
        return {
            numeroFactura: '',
            contratos: ''
        };
    },
    render: function () {
        return (
            <div className='backdrop' id='backdrop'>
                <div className='modal-wrapper'>
                    <div className='modal'>
                        <button type='button' onClick={this.props.onClose}>Cerrar</button>
                        <p>Introduzca el número de factura a aplicar</p>
                        <input type='text' value={this.state.numeroFactura} onChange={this.handleChange} placeholder='000000' />
                        <p>Introduzca los números de contratos, separados por coma</p>
                        <textarea type='text' value={this.state.contratos} onChange={this.handleChange} placeholder='123456, 654321, 019283' />
                    </div>
                </div>
            </div>
        );
    },
    handleChange: function (event) {

    }
});

module.exports = ActualizacionFactura;
