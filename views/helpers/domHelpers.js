

const optionsSelectSalud = ( selected , option ) => {

    if( selected.salud === option )
        return 'selected';
    else
        return '';
};

const optionsSelectAfp = ( selected , option ) => {

    if( selected.afp === option )
        return 'selected';
    else
        return '';
};

const optionsSelectTipoContrato = ( selected , option ) => {

    if( selected.tipoContrato === option )
        return 'selected';
    else
        return '';
};


module.exports = {
    optionsSelectSalud,
    optionsSelectAfp,
    optionsSelectTipoContrato
};