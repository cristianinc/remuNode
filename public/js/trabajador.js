const base_url = window.location.origin;

formularioTrabajador.onsubmit = async (e) => {
  e.preventDefault();
  const form = document.querySelector("#formularioTrabajador");
 // var form = document.forms[0];

    data = {
        nombre : form.querySelector('[name="nombre"]').value,
        rut : form.querySelector('[name="rut"]').value,
        fechaNacimiento : form.querySelector('[name="fechaNacimiento"]').value,
        telefono : form.querySelector('[name="telefono"]').value,
        fechaIngreso : form.querySelector('[name="fechaIngreso"]').value,
        cargo : form.querySelector('[name="cargo"]').value,
        tipoContrato : form.querySelector('[name="tipoContrato"]').value,
        sueldoBase : form.querySelector('[name="sueldoBase"]').value,
        afp : form.querySelector('[name="afp"]').value,
        salud : form.querySelector('[name="salud"]').value,
    }


    // ajax = ({
    //     type: "POST",
    //     url: base_url + "/trabajador",
    //     data: formData,
    //     dataType: "json",
    //     contentType : "application/json",
    //     success: function(){ console.log('trabajador agregado con exito') },
    //     error: function(){ console.log('Error al agregar trabajador ') },
    //   });


    let response = await fetch(base_url + "/trabajador", {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( data ),
    }).then(function(response) {
        if(response.ok) {
            return console.log( 'Trabajador agregado Correctamente' )
        } else {
            throw "Error en la llamada Ajax";
        }
     
     })
     .catch(function(err) {
        console.log(err);
     });



    // let text = await response.text(); // read response body as text
    // document.querySelector("#decoded").innerHTML = text;
};