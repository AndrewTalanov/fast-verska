const resizeHeader = () => {
    
    const heightScroll = getBodyScrollTop();
    const header = document.querySelector(".header");

    if (heightScroll > 300) {
        header.classList.add('header_small');
    } else {
        header.classList.remove('header_small');
    }
    

}

window.addEventListener('scroll', () => resizeHeader());