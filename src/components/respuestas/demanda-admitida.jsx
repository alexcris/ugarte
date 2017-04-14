'use strict';

// -----------------------------------------------------------------------------------------------
// React + Other Modules
// -----------------------------------------------------------------------------------------------

var React = require('react');

var DateUtils = require('src/utils/date-utils');

// -----------------------------------------------------------------------------------------------
// Demanda Admitida Respuestas
// -----------------------------------------------------------------------------------------------

var DemandaAdmitida = React.createClass({
    render: function () {
        var respuestas = this.props.accion.respuestas;

        return (
            <div className='respuestas-wrapper'>
                <div>
                    <span className='bold'>Tipo de juicio: </span>
                    <span>{respuestas.tipoJuicio}</span>
                </div>
                {this.renderDate(respuestas.fechaAcuerdo, 'Fecha de acuerdo')}
                {this.renderDate(respuestas.fechaPublicacion, 'Fecha de publicación')}
                {this.renderMoreRespuestas()}
            </div>
        );
    },
    renderMoreRespuestas: function () {
        var respuestas = this.props.accion.respuestas;

        if (respuestas.tipoJuicio === 'Oral Mercantil') {
            return (
                <div>
                    <span className='bold'>Resultado: </span>
                    <span>{respuestas.resultado}</span>
                </div>
            );
        }

        return (
            <div>
                {this.renderDate(respuestas.cita.fecha, 'Fecha de cita')}
                {this.renderHour()}
                <div>
                    <span className='bold'>Lugar de cita: </span>
                    <span>{respuestas.cita.lugar}</span>
                </div>
                <div>
                    <span className='bold'>Nombre del actuario: </span>
                    <span>{respuestas.cita.nombreActuario}</span>
                </div>
                <div>
                    <span className='bold'>Teléfono del actuario: </span>
                    <span>{respuestas.cita.telefonoActuario}</span>
                </div>
            </div>
        );
    },
    renderDate: function (date, text) {
        if (!date) {
            return;
        }

        return (
            <div>
                <span className='bold'>{text + ': '}</span>
                <span>{DateUtils.formatFechaRespuesta(date)}</span>
            </div>
        );
    },
    renderHour: function () {
        var hour = this.props.accion.respuestas.cita.hora;

        if (!hour) {
            return;
        }

        return (
            <div>
                <span className='bold'>Hora de cita: </span>
                <span>{hour}</span>
            </div>
        );
    }
});

module.exports = DemandaAdmitida;