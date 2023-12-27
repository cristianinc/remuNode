

const formatterPesoCLP = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
  });

const formatoPeso = ( valor ) => formatterPesoCLP.format(valor);


module.exports = {
    formatoPeso
};