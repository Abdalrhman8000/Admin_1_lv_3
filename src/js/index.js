"use strict";
//============ Hover Nav Elements =================>
const Hover = {
    items: document.querySelectorAll('section nav ul li'),
    add_hover: function (e) {
        this.items.forEach(ele => {
            ele.classList.remove('active');
        });
        e.target.classList.add('active');
    }
};
Hover.items.forEach(ele => {
    ele.addEventListener('mouseenter', (e) => {
        Hover.add_hover(e);
    });
});
//============ Hover Nav Elements =================>
//============ Toggle Nav =================>
const Showing = {
    ele: document.querySelector('#shower'),
    target: document.querySelector('nav'),
    show: function () {
        this.ele.addEventListener('click', () => {
            var _a;
            (_a = this.target) === null || _a === void 0 ? void 0 : _a.classList.toggle('active_nav_sm');
        });
    }
};
Showing.show();
window.addEventListener('click', (e) => {
});
//============ Toggle Nav =================>
