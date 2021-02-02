const renderBar = ({appElement, currentDate}) => {
    let calendarToolbar;
    const toolBar = document.querySelector('.calendarBar');
    toolBar ? calendarToolbar = toolBar : calendarToolbar = document.createElement("div");
    calendarToolbar.classList.add("calendarBar"); // Add class example
    let currentMonth = (new Date(currentDate).toLocaleString('en', {month: 'long'}));
    let currentYear = new Date(currentDate).getFullYear();
    calendarToolbar.innerHTML = `<div class="dateController"><span>${currentMonth}</span><span>${currentYear}</span></div>`;
    appElement.appendChild(calendarToolbar);
};

export default renderBar;
