let sidebar = document.querySelector('.sidebar');
let conteiner = document.getElementById('conteiner');
let closedSidebar = document.getElementById('sideTBtn');
let exit = document.getElementById('exit');

let sideVisible = true;

closedSidebar.addEventListener('click', ()=>{
    if(sideVisible){
        sidebar.classList.toggle('closed');
        sideVisible = false;
        
    }else{
        console.log(200)
        sidebar.classList.toggle('closed');
        sideVisible=true;
    }
    
});

exit.addEventListener('click', ()=>{
    window.location.href = '/'
})

