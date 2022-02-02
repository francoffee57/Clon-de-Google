const body = document.getElementById('body')

const buttonDark = document.getElementById('dark')
const buttonWhite = document.getElementById('white')

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark')
}

buttonWhite.addEventListener('click',()=>{
    body.classList.remove('dark')
})

buttonDark.addEventListener('click',()=>{
    body.classList.add('dark')
})