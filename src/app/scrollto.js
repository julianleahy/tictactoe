import animateScrollTo from 'animated-scroll-to';

export default function () {
    const options = {
        speed: 3000,
        minDuration: 250,
        maxDuration: 1500, 
    };

    animateScrollTo(document.querySelector('.board-wrap'),options);
};