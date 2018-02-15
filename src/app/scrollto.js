import animateScrollTo from 'animated-scroll-to';

const options = {
    speed: 3000,
    minDuration: 250,
    maxDuration: 1500,
    cancelOnUserAction: false 
};

export const scrollTo = () => {
    animateScrollTo(document.querySelector('.board-wrap'),options);
}


export const scrollEnd = () => {
    animateScrollTo(document.querySelector('.main'),options);
}