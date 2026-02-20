
let App = document.getElementById('app')
let admin = {
    login: '',
    password:''
}

const ADMIN_LOG_IN = `
    <middle>
        <div class="modal">
            <p>Admin input</p>
            <div class="login"><p>login</p><input type="text" name="log" id="intlogin" class="input_modal"></div>
            <div class="pass"> <p>password</p>
            <input type="password" name="password" id="intpassword" class="input_modal"></div>
            <input type="button" value="log in" class="button" id="button">
        </div>
    </middle>
`;
App.innerHTML = ADMIN_LOG_IN;
let login = document.getElementById('intlogin')
let password = document.getElementById('intpassword')
let button = document.getElementById('button')
const CORRECT_INFO = {
    login: 'root',
    password: 'admin'
}

async function ADMIN_PANEL() {
    try{
        const adminka = await fetch('admin_panel.html');
        const html = await adminka.text();
        return html;
        console.log(200);
    }catch{
        console.error(error)
        return null
    }
    

    
}

button.addEventListener('click', ()=>{
    admin.login = login.value;
    admin.password = password.value;
    console.log(admin)
    if (login.value != CORRECT_INFO.login || password.value != CORRECT_INFO.password){
        button.style.backgroundColor = "red"
        login.style.backgroundColor = password.style.backgroundColor ='red'
        login.value = '';
        password.value = '';
        setTimeout(()=>{
            button.style.backgroundColor = password.style.backgroundColor = login.style.backgroundColor = ''
        }, 500)
    }else{
        button.style.backgroundColor = 'green';
        setTimeout(()=>{
            button.style.backgroundColor = ''
        }, 2000);
        setTimeout(()=>{
            window.location.href = '/admin_panel.html'
        }, 100)
        

    }
})