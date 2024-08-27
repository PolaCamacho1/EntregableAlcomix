document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("seleccionObjetos");
    const saveButton = document.getElementById('boton'); // Cambio aquí

    saveButton.addEventListener("click", function() {
        const vinoPreferido = document.getElementById('vinoTipo').value; // Cambio aquí
        const frutasFrescas = document.getElementById('fruta').value; // Cambio aquí
        const edulcorante = document.getElementById('azucar').value; // Cambio aquí
        const licorAdicional = document.getElementById('licor').value; // Cambio aquí
        const especiasHierbas = document.getElementById('especia').value; // Cambio aquí
        const fecha = document.getElementById('fecha').value; // Cambio aquí

        const mezcla = {
            vinoPreferido: vinoPreferido,
            frutasFrescas: frutasFrescas,
            edulcorante: edulcorante,
            licorAdicional: licorAdicional,
            especiasHierbas: especiasHierbas,
            fecha: fecha
        };

        localStorage.setItem("mezclaSangria", JSON.stringify(mezcla));
        alert("Su pedido ha sido realizado con exito");
    });
});


