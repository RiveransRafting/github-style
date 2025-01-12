window.addEventListener('load', function () {
    
    window.onscroll = function (e) {
        const headerImg = document.querySelector('#headerImg');
        const headerStuck = document.querySelector('#headerStuck');
        if (headerImg.getBoundingClientRect().bottom <= 0) {
            headerStuck.classList.add('is-stuck');
            if (window.innerWidth >= 1280) {
                headerStuck.setAttribute('style', 'top: 12px;')
            } else {
                headerStuck.setAttribute('style', 'top: 0;')
            }
        } else {
            headerStuck.classList.remove('is-stuck');
        }
    };
    
    document.getElementById("switch_theme_button").addEventListener("click", function () {
        switchTheme();
    });
    
    var style = localStorage.getItem('data-color-mode')
    githubIconElement = document.getElementById('github-icon')
    twitterIconElement = document.getElementById('twitter-icon')
    if (style == 'light') {
        if (githubIconElement) githubIconElement.setAttribute('fill', '#24292e')
        if (twitterIconElement) twitterIconElement.setAttribute('fill', 'black')
    }
    else {
        if (githubIconElement) {
            githubIconElement.removeAttribute('fill')
            githubIconElement.setAttribute('class', 'octicon')
            githubIconElement.setAttribute('color', '#f0f6fc')
        }
        if (twitterIconElement) twitterIconElement.setAttribute('fill', 'white')
    }

});