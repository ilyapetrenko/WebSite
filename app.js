window.onscroll = function showMenu() {
        var header = document.querySelector('.header')
        if (window.scrollY > 300) {
            header.classList.add('.menu')
        }
        else {
            header.classList.remove('.menu')
        }
    }
