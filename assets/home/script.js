const loader = document.getElementById('loader');
var dot_count = 0;
setInterval(() => {
    loader.innerHTML = 'Loading' + '.'.repeat(dot_count);
    dot_count++;
    if (dot_count > 3) dot_count = 0;
}, 500);
window.onload = function () {
    loader.remove();
};

document.querySelectorAll('button').forEach((b) => {
    b.addEventListener('click', () => {
        var href = b.getAttribute('href');
        if (b.id == 'btc') {
            navigator.clipboard.writeText(
                'bc1q6vsfhlqj7453x023z0thcyjp40achwpas6x53z'
            );
            b.innerText = 'Copied';
            setTimeout(() => {
                b.innerText = 'bc1q6vsfhlqj7453x023z0thcyjp40achwpas6x53z';
            }, 1000);
        }
        if (href) {
            b.removeAttribute('href');
            if (href.startsWith('+')) return window.open(href.substring(1));
            return (location.href = href);
        }
    });
});
