import renderBar from "../renderBar";
import renderCalendar from "../renderCalendar";

const renderApp = () => {
    const appElement = document.getElementById("appRoot");
    let currentDate = new Date();
    renderBar({appElement, currentDate});
    renderCalendar({appElement, currentDate});
    const previousButton = document.createElement('button');
    const nextButton = document.createElement('button');
    previousButton.innerText = 'Previous';
    nextButton.innerText = 'Next';
    previousButton.setAttribute('id', 'prev');
    nextButton.setAttribute('id', 'next');
    appElement.prepend(nextButton);
    appElement.prepend(previousButton);
    previousButton.onclick = () => {
        document.querySelector('table').innerHTML = '';
        currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
        renderBar({appElement, currentDate});
        renderCalendar({appElement, currentDate});
    };
    nextButton.onclick = () => {
        document.querySelector('table').innerHTML = '';
        currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
        renderBar({appElement, currentDate});
        renderCalendar({appElement, currentDate});
    };

};

export default renderApp;
