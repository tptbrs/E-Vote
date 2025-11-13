import { parseISO, differenceInMilliseconds } from 'date-fns'

export const getLeftTime = (time) => {
    // Parse the end date string into a Date object
    let endDate = parseISO(time);

    // Set the time to 23:59:59 for that day
    endDate.setHours(23, 59, 59, 999);

    // Get the current date
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const timeDifference = differenceInMilliseconds(endDate, currentDate);

    if (timeDifference <= 0) return -1; // already passed

    const daysDifference = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
    const hoursDifference = Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutesDifference = Math.floor((timeDifference % (60 * 60 * 1000)) / (60 * 1000));
    const secondsDifference = Math.floor((timeDifference % (60 * 1000)) / 1000);

    if (daysDifference > 0) {
        return `${daysDifference} days ${hoursDifference} hours`;
    } else if (hoursDifference > 0) {
        return `${hoursDifference} hours ${minutesDifference} minutes`;
    } else if (minutesDifference > 0) {
        return `${minutesDifference} minutes ${secondsDifference} seconds`;
    } else {
        return `${secondsDifference} seconds`;
    }
}
