const moment = require('moment');

const formatDate = ( myDate ) => {
    return moment( myDate ).format('DD/MM/YYYY');
};



module.exports = {
    formatDate
};;