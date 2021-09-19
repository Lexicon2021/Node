const moment = require('moment');

function showDate(date) {
    return moment(date).format('MMMM Do YYYY');
}

exports.showDate = showDate;