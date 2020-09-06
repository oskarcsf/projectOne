// adding extra class name on the same class "bar" for progress bar animation
let bar = document.querySelectorAll('.bar');
for (let i = 0; i < bar.length; i++) {
    bar[i].className += ' bar' + (i + 1);
}

// adding progress bar animation
const progressBarAnimation = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let width = 1;
        const addingWidth = setInterval(frame, 10);

        function frame() {
            if (width >= arr[i]) {
                clearInterval(addingWidth);
                i = 0;
            } else {
                width++;
                bar[i].style.width = width + "%";
            }
        }
    }
}


//hidding all cards by default, only show when locationHashChange
function locationHashChanged() {
    
    if (location.hash === '#home') {
        $(`.card`).hide();
        $(`.card--home`).show();
    }

    if (location.hash === '#resume') {
        $(`.card`).hide();
        $(`.card--resume`).show();
        progressBarAnimation([10, 20, 40, 60, 100, 80]);
    }

}


window.onhashchange = locationHashChanged;
$(`.card`).hide();
$(`.card--home`).show();
