document.querySelector('.open').addEventListener('click', function(){
    document.querySelector('.nav-list').classList.add('menu-oppened');
})

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.nav-list').classList.remove('menu-oppened');
})