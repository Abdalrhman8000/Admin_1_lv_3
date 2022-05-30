//============ Hover Nav Elements =================>
const Hover = {
    items: document.querySelectorAll('section nav ul li') as NodeListOf<HTMLElement>,
    add_hover: function(e:any):void{
        this.items.forEach(ele => {
            ele.classList.remove('active');
        })
        e.target.classList.add('active');
    }
}
Hover.items.forEach(ele => {
    ele.addEventListener('mouseenter', (e) => {
        Hover.add_hover(e);
    });
})
//============ Hover Nav Elements =================>

//============ Toggle Nav =================>
const Showing = {
    ele: document.querySelector('#shower') as HTMLElement,
    target: document.querySelector('nav'),
    show:function () {
        this.ele.addEventListener('click', () => {
            this.target?.classList.toggle('active_nav_sm');
        })
    }
}
Showing.show();
window.addEventListener('click', (e:any) => {
})
//============ Toggle Nav =================>