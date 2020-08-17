export const getVideoDisplayDate = (time) => {
    if(!time) return '';

    const paredDate = new Date(time);

    return paredDate && !isNaN(paredDate.getTime()) ? `${paredDate.getDate()} ${getMonthInWords(paredDate.getMonth())} ${paredDate.getFullYear()}`: '';
};

const getMonthInWords = (month) => {
    let monthInWords = "-";
    // eslint-disable-next-line
    switch (month) {
        case 0:
            monthInWords = "Jan";
            break;
        case 1:
            monthInWords = "Feb";
            break;
        case 2:
            monthInWords = "Mar";
            break;
        case 3:
            monthInWords = "Apr";
            break;
        case 4:
            monthInWords = "May";
            break;
        case 5:
            monthInWords = "June";
            break;
        case 6:
            monthInWords = "July";
            break;
        case 7:
            monthInWords = "Aug";
            break;
        case 8:
            monthInWords = "Sept";
            break;
        case 9:
            monthInWords = "Oct";
            break;
        case 10:
            monthInWords = "Nov";
            break;
        case 11:
            monthInWords = "Dec";
            break;
    }

    return monthInWords;
};
