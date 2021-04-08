$(document).ready(function() {

    const homeBtn = $(".home-btn");
    const aboutMeBtn = $(".about-me-btn");
    const portfolioBtn = $(".portfolio-btn");

    // Need to make a single function for request handler

    homeBtn.on('click', async (event) => {
        try {
            event.preventDefault();
            const response = await $.get('/');
            (response) ? document.location.replace('/') : "";
        } catch {
            return;
        }
    });

    aboutMeBtn.on('click', async (event) => {
        try {
            event.preventDefault();
            const response = await $.get('/about-me');
            (response) ? document.location.replace('/about-me') : "";
        } catch {
            return;
        }
    });

    portfolioBtn.on('click', async (event) => {
        try {
            event.preventDefault();
            const response = await $.get('/portfolio');
            (response) ? document.location.replace('/portfolio') : "";
        } catch {
            return;
        }
    });


})