$(`.card`).hide();
$(`.card--home`).show();

function locationHashChanged() {
    if (location.hash === '#home') {
        $(`.card`).hide();
        $(`.card--home`).show();
    }

    if (location.hash === '#resume') {
        $(`.card`).hide();
        $(`.card--resume`).show();
    }

}

window.onhashchange = locationHashChanged;