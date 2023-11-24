const base_url = window.location.origin;
const pathArray = window.location.pathname.split( '/' );
const date = new Date();
const _MES_ = date.getMonth();
const _ANIO_ = date.getFullYear();



window.onload = function() {
    document.getElementById('mes').value = _MES_;
    document.getElementById('anio').value = _ANIO_;
  };

function checkAll(value) {
    document.querySelectorAll('#formElement input[type=checkbox]').forEach(function(checkElement) {
        checkElement.checked = value.checked;
        console.log('elementos seleccionados------>', checkElement.value, checkElement.checked)
    });
}

const generarLiquidacion = async ( mes, anio, rut =[] ) => {
    const data = { 
        mes: mes,
        anio: anio,
        rut: rut
     };
     console.log('ruts' , rut);

    await fetch(base_url + "/liquidacion/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( data ),
    }).then (response => response.blob())
    .then(  blob => {
        var file = window.URL.createObjectURL(blob);
        window.open(file);
    })
    .catch(function(err) {
        console.log(err);
    });


    console.log('generando liquidacion de sueldo')
};

const generarTodasLiquidacion = async () => {
    const mes = document.getElementById('mes').value;
    const anio = document.getElementById('anio').value;
    const rut = [];

    if( !mes ){
        alert( " Debe seleccionar un mes " );
    }

    if( !anio ){
        alert( " Debe seleccionar un año " );
    }

    document.querySelectorAll('#formElement input[type=checkbox]').forEach(function(checkElement) {
        if(checkElement.checked){
            rut.push(checkElement.value)
        }
    });

    
    await generarLiquidacion( mes, anio, rut )

    console.log('generando liquidacion de sueldo')
};

const editarLiquidacion = ( trabajador ) =>{
    const mes = document.getElementById('mes').value;
    const anio = document.getElementById('anio').value;
    
    location.href = '/remuneraciones/liquidacion/edit/'+trabajador;
    console.log('editando liquidacion de sueldo')
};