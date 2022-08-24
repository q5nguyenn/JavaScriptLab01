// var randomColor = ["rgb(139,233,253)",
//     "rgb(80,250,123)",
//     "rgb(255,184,108)",
//     "rgb(255,121,198)",
//     "rgb(189,147,249)",
//     "rgb(241,250,140)",
// ]
// var TopbarTitle = document.querySelector('.Topbar-title');
// setInterval(function() {
//     var colorBar = Math.floor(Math.random() * 16777215).toString(16);
//     TopbarTitle.style.color = `#${colorBar}`;
// }, 2000)

var mainGroupLink = document.querySelectorAll('.main-group-link');
mainGroupLink.forEach(function(item) {
    item.addEventListener('click', isActive);
})
function isActive(e) {
    mainGroupLink.forEach(function(item) {
        item.classList.remove('is-active')
    })
    e.target.classList.add("is-active")
}

var subTitle = document.querySelector('.header .subtitle-run');
var str = 'JQuery và AngularJS';
var i = 0;
setInterval(function() {
    i==str.length?i = 0: i++;
    subTitle.textContent = stringRun(str, i)
}, 400)
function stringRun(str, i) {
    return str.substr(0, i);
}
