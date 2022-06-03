var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var tabs = $$('.tab__item');
var pans = $$('.pan__item');


tabs.forEach((tab, index) => {
    var pane = pans[index]
    tab.onclick = function(){
        $('.tab__item.active').classList.remove('active')
        $('.pan__item.active').classList.remove('active')
        this.classList.add('active')
        pane.classList.add('active')
    }

});