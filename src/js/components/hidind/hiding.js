const hidingScreen = (e) => {
    e.preventDefault();
    const curtain = document.querySelector(".first-screen__curtain");
    const clientheight = document.documentElement.clientHeight;
    const heightScroll = getBodyScrollTop();
    const divisionFactor = 700;
    const currentOpacity = heightScroll / divisionFactor;

    if (heightScroll < clientheight) {
        curtain.style.opacity = currentOpacity;
    }
}

window.addEventListener('scroll', (e) => hidingScreen(e));

