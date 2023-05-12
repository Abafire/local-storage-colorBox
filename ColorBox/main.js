const lis = document.querySelectorAll('ul li')
let disColor = document.getElementById("exper")

if(window.localStorage.getItem('color')){
    disColor.style.backgroundColor = window.localStorage.color;
    document.querySelector(`[data-color=${window.localStorage.color}]`).classList.add('active');
}
    else{
    }


lis.forEach((i) =>{
    i.addEventListener('click',(e) =>{
        // console.log(e.target.dataset.color)
        lis.forEach((i) =>{        // Remove active class from all targets
            i.classList.remove('active');
        })
        e.target.classList.add('active'); // Add Active class to current color
        window.localStorage.setItem('color', e.currentTarget.dataset.color)//Add color to local storage
        disColor.style.backgroundColor = e.currentTarget.dataset.color;
})
})
