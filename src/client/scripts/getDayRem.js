const getDayRem = (date) => {
    //setting the start and end Date
    const presentDate = new Date()
    const futureDate = new Date(date)

    const timeDifference = futureDate.getTime() - presentDate.getTime()

    const DayRem = Math.ceil(timeDifference / (1000 * 3600 *24))
    
    
    return DayRem;
}

module.exports = { getDayRem }