const convertToDate = (isoString) => {
    const date = new Date(isoString);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month.toString().length === 1) {
        month = `0${month.toString()}`;
    }
    let day = date.getDate() + 1;
    if (day.toString().length === 1) {
        day = `0${day.toString()}`;
    }
    return year + '-' + month + '-' + day;
}

export default {convertToDate};
