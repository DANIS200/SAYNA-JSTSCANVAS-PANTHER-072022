const slides= [...document.querySelectorAll('.slides')];
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


// validation formulair page d'acueill

window.onload = ()=>{
    let myForm = document.getElementById('myForm');
    myForm.addEventListener('submit',function(e){
        let email = document.getElementById('email');
        if(email.value ==''){
            let invalid = document.getElementById('invalid');
            invalid.innerHTML = 'Le champ email ne peut pas etre vide';
            invalid.style.color='red';
        }
        else{
     e.preventDefault();
     document.getElementById('popupbox').style.display='block';
    }
       // window.scroll(top);
    });
  }