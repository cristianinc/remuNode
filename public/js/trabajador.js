const base_url = window.location.origin;
const pathArray = window.location.pathname.split( '/' );


const guardarTrabajador = async () => {

    const trabajador = {
        rut: document.getElementById('rut').value,
        nombre: document.getElementById('nombre').value,
        fechaNacimiento: document.getElementById('fechaNacimiento').value,
        telefono: document.getElementById('telefono').value,
        fechaIngreso: document.getElementById('fechaIngreso').value,
        cargo: document.getElementById('cargo').value,
        tipoContrato: document.getElementById('tipoContrato').value,
        sueldoBase: document.getElementById('sueldoBase').value,
        afp: document.getElementById('afp').value,
        salud: document.getElementById('salud').value,
    }

    await fetch(base_url + "/trabajador/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( trabajador ),
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
};

const editarTrabajador = async () => {

    const id =  pathArray[pathArray.length -1];

    const trabajador = {
        rut: document.getElementById('rut').value,
        nombre: document.getElementById('nombre').value,
        fechaNacimiento: document.getElementById('fechaNacimiento').value,
        telefono: document.getElementById('telefono').value,
        fechaIngreso: document.getElementById('fechaIngreso').value,
        cargo: document.getElementById('cargo').value,
        tipoContrato: document.getElementById('tipoContrato').value,
        sueldoBase: document.getElementById('sueldoBase').value,
        afp: document.getElementById('afp').value,
        salud: document.getElementById('salud').value,
    }

    await fetch(base_url + "/trabajador/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( trabajador ),
    }).then(function(response) {
        if(response.ok) {
            return console.log( 'Trabajador editado Correctamente', response )
        } else {
            throw "Error en la llamada Ajax";
        }
     
     })
     .catch(function(err) {
        console.log(err);
     });
};