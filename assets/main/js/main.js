$(document).ready(function() {
    $('#eye').click(function(e) {
        $('#senha').trigger('focus');
    });
});

function setOverlay() {
    document.querySelectorAll('.card-img-overlay').forEach(overlay => {
        overlay.style.height = document.querySelector('.hover-img-animation').clientHeight.toString() + 'px'
    })
}

window.addEventListener('resize', () => {
    setOverlay()
})

document.querySelectorAll('.card-img-overlay').forEach(img => {
    img.addEventListener('mouseenter', e => {
        e.path[1].firstChild.nextSibling.firstChild.nextSibling.style.filter = 'blur(30px)'
    })
})

document.querySelectorAll('.card-img-overlay').forEach(img => {
    img.addEventListener('mouseleave', e => {
        e.path[1].firstChild.nextSibling.firstChild.nextSibling.style.filter = ''
    })
})
