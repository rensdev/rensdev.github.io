const nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
    if (window.scrollY > 20) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
});


window.onload = function() {
    $('.loader-cont').remove();
    $('body').removeClass('loading');
}

$('#go-down').click(function (e) {
    $([document.documentElement, document.body]).animate(
        {
            scrollTop: $('hero').height(),
        },
        1000
    );
});
