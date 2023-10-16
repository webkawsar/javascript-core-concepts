
const boxElement = document.querySelector('.container');
const toggleButtonElement = document.querySelector('#toggle-button');


toggleButtonElement.addEventListener('click', (e) => {



    const isDark = e.target.classList.contains('isDark');
    if(isDark) {

        boxElement.classList.remove('isDark');
        toggleButtonElement.classList.remove('isDark')

    } else {

        boxElement.classList.add('isDark');
        toggleButtonElement.classList.add('isDark')
    }
})





