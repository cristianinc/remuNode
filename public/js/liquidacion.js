function checkAll(value) {
    document.querySelectorAll('#formElement input[type=checkbox]').forEach(function(checkElement) {
        checkElement.checked = value.checked;
        console.log('elementos seleccionados------>', checkElement.value, checkElement.checked)
    });
}


const generarLiquidacion = async ( rut ) => {
    const mes = document.getElementById('mes').value;
    const anio = document.getElementById('anio').value;

    const data = { 
        mes: mes,
        anio: anio,
        rut: rut
     };

    await fetch(base_url + "/trabajador/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( data ),
    }).then(function(response) {
        if(response.ok) {
            return console.log( 'Trabajador agregado Correctamente', response )
        } else {
            throw "Error en la llamada Ajax";
        }
    
    })
    .catch(function(err) {
        console.log(err);
    });


    console.log('generando liquidacion de sueldo')
};

const generarTodasLiquidacion = ( ) =>{
    const mes = document.getElementById('mes').value;
    const anio = document.getElementById('anio').value;
    
    console.log('generando liquidacion de sueldo')
};


const editarLiquidacion = ( rut ) =>{
    const mes = document.getElementById('mes').value;
    const anio = document.getElementById('anio').value;
    
    console.log('generando liquidacion de sueldo')
};