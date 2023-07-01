const slides= [...document.querySelectorAll('.container-slide')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

slides.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


window.onload = ()=>{
    let myForm = document.querySelectorAll('.form');
    myForm.addEventListener('submit',function(e){
        let txt = document.getElementById('txt');
        if(txt.value ==''){
            let invalid = document.getElementById('invalid');
            invalid.innerHTML = 'Le champ email ne peut pas etre vide';
            invalid.style.color='red';
        }
        else{
     e.preventDefault();
     document.getElementById('popupboxFin').style.display='block';
    }
       // window.scroll(top);
    });
  }