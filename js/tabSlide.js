var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var tabs = $$('.tab__item');
var panes = $$('.tab__pane');


tabs.forEach((tab, index) => {
    var pane = panes[index]
    tab.onclick = function(){
        $('.tab__item.active').classList.remove('active')
        $('.tab__pane.active').classList.remove('active')
        this.classList.add('active')
        pane.classList.add('active')
    }

});