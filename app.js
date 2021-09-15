const input = document.querySelector('.input')
const listProduct = document.querySelector('.listProduct')

let trueFalse = true

// function

function Join(){
    listProduct.style.transform = 'translateY(0)'
    listProduct.style.opacity = '1'
    listProduct.style.transition = 'all .5s'
}

function Left(){
    listProduct.style.transform = 'translateY(100%)'
    listProduct.style.opacity = '0'
    listProduct.style.transition = 'all .5s'
}




if(trueFalse === true){
    input.addEventListener('click',()=>{
        Join()
        trueFalse = false
    })
}else{
    window.addEventListener('click',()=>{
        Left()
        trueFalse = true
    })
}