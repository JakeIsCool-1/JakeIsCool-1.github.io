<!-- document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    function changeColors() {
        if (body.classList.contains('light-mode')) {
            document.querySelectorAll('*').forEach(element => {
                const bgColor = getComputedStyle(element).backgroundColor;
                const color = getComputedStyle(element).color;
                if (bgColor === 'rgb(0, 0, 0)') {
                    element.style.backgroundColor = '#2c0085'; // Change black to white
                }
                if (color === 'rgb(0, 0, 0)') {
                    element.style.color = '#FFFFFF'; // Change black text to white
                }
            });
        } else if (body.classList.contains('dark-mode')) {
            document.querySelectorAll('*').forEach(element => {
                const bgColor = getComputedStyle(element).backgroundColor;
                const color = getComputedStyle(element).color;
                if (bgColor === 'rgb(255, 255, 255)') {
                    element.style.backgroundColor = '#2c0085'; // Change white to black
                }
                if (color === 'rgb(255, 255, 255)') {
                    element.style.color = '#000000'; // Change white text to black
                }
            });
        }
    }

    body.addEventListener('classChange', changeColors);
    changeColors(); // Initial call
}); --!>
