const moment = require('moment');

async function checkVacationDate(startDate, EndDate) {
    let startMoment = moment(startDate);
    let endMoment = moment(EndDate);

    if(startMoment > endMoment) {
        return -1;
    }

    vacationDay = 0;
    while(1){
        if(startMoment.format('YYYY-MM-DD') > endMoment.format('YYYY-MM-DD')) {
            return vacationDay;
        }
        if(startMoment.day() != 0 && startMoment.day() != 6) {
            vacationDay++;
        }

        startMoment.add(1, 'days');
    }
}


module.exports = {
    checkVacationDate
}