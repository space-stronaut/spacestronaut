const x = document.querySelector('.burger');
const y = document.querySelector('.nav-links');

x.addEventListener('click', function(){
    y.classList.toggle('slide');;
})


const a = document.querySelector('.btn-secondary');
const b = document.querySelector('.bg-modal');

a.addEventListener('click', function(){
    b.classList.toggle('close');
});

