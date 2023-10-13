function checkAll(value) {
    document.querySelectorAll('#formElement input[type=checkbox]').forEach(function(checkElement) {
        checkElement.checked = value.checked;
        console.log('elementos seleccionados------>', checkElement.value, checkElement.checked)
    });
}


const generarLiquidacion = () =>{
    console.log('generando liquidacion de sueldo')
};