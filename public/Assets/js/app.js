const btn = document.querySelector('#btn-dropdown-location');
const dropLocation = document.querySelector('#dropdown-location');
const btnSearch = document.querySelector('.search-item')
const inputSearch = document.querySelector('.search-box')
const btnCollapse = document.querySelector('.btn-collapse');
const navCollapse = document.querySelector('.navbar-collapse');
const btnClose = document.querySelector('.btn-close');
const btnLogin = document.querySelector('.btn-login');
const modalLogin = document.querySelector('.modal');
btnLogin.addEventListener('click',()=>{
    modalLogin.classList.toggle('show');
    modalLogin.classList.add('is-visible');
})
btnClose.addEventListener('click',()=>{
    modalLogin.classList.remove('show');
    
})
btnSearch.addEventListener('click',()=>{
    inputSearch.classList.toggle('active');
})

btn.addEventListener('click',()=>{
    dropLocation.classList.toggle('active');
})

btnCollapse.addEventListener('click',()=>{
    navCollapse.classList.toggle('active');
})