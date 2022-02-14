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
            var btcWallet = b.innerText;
            navigator.clipboard.writeText(b.innerText);
            b.innerText = 'Copied';
            setTimeout(() => (b.innerText = btcWallet), 1000);
        }
        if (href) {
            b.removeAttribute('href');
            if (href.startsWith('+')) return window.open(href.substring(1));
            return (location.href = href);
        }
    });
});
