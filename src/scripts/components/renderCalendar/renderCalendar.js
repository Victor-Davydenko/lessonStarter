const renderCalendar = ({appElement, currentDate}) => {
    let calendarContainer;
    const table = document.querySelector('.table');
    table ? calendarContainer = table : calendarContainer = document.createElement("table");
    calendarContainer.classList.add('table');
    const calendarHead = document.createElement("thead");
    const calendarBody = document.createElement("tbody");
    calendarContainer.prepend(calendarHead); // This element must contain tr > th*monthLength > <span>DayName</span> + <span>DayNum</span>
    calendarContainer.append(calendarBody); // This element must contain tr > td*monthLength
    appElement.append(calendarContainer);

    let currentMonthLastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    let tableHeadString = '';
    let dayOfWeekEl = '';
    let date = '';
    for (let i = 1; i <= currentMonthLastDay; i++) {
        let dayOfWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), i).toLocaleDateString('en', {weekday: 'short'}).substr(0, 2);
        if (dayOfWeek.includes('Sa') || dayOfWeek.includes('Su')) {
            dayOfWeekEl = `<span class="weekdayHolder weekends">${new Date(currentDate.getFullYear(), currentDate.getMonth(), i).toLocaleDateString('en', {weekday: 'short'}).substr(0, 2)}</span>`;
            date = `<span class="dateHolder weekends">${new Date(currentDate.getFullYear(), currentDate.getMonth(), i).toLocaleDateString('en', {day: 'numeric'}).substr(0, 2)}</span>`;
        } else {
            dayOfWeekEl = `<span class="weekdayHolder">${new Date(currentDate.getFullYear(), currentDate.getMonth(), i).toLocaleDateString('en', {weekday: 'short'}).substr(0, 2)}</span>`;
            date = `<span class="dateHolder">${new Date(currentDate.getFullYear(), currentDate.getMonth(), i).toLocaleDateString('en', {day: 'numeric'}).substr(0, 2)}</span>`;
        }
        tableHeadString += `<th>${dayOfWeekEl}${date}</th>`;
    }
    calendarHead.innerHTML = `<tr>${tableHeadString}</tr>`;
};

export default renderCalendar;
