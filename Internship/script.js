window.addEventListener('scroll',function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = '400';
    } 
    else {
        navbar.style.backgroundColorackgr = '600';
    }
});