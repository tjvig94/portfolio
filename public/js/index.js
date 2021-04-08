$(document).ready(function() {

    const homeBtn = $(".home-btn");
    const aboutMeBtn = $(".about-me-btn");
    const portfolioBtn = $(".portfolio-btn");

    const requestHandler = async (endpoint) => {        
            const response = await $.get(endpoint);
            (response) ? document.location.replace(endpoint) : "";
    };

    homeBtn.on('click', async () => {
        try {
            requestHandler('/');
        } catch {
            return;
        }
    });

    aboutMeBtn.on('click', async () => {
        try {
            requestHandler('/about-me');
        } catch {
            return;
        }
    });

    portfolioBtn.on('click', async (event) => {
        try {
            requestHandler('/portfolio');
        } catch {
            return;
        }
    });


})