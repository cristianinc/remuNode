function checkAll() {

    document.querySelectorAll('#formElement input[type=checkbox]').forEach(function(checkElement) {
        checkElement.checked = !!true;
    });
}