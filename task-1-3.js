let pass = prompt('enter password')

const ADMIN_PASSWORD = 'jqueryismyjam';

let message = alert;

if (pass === null){
    message('Скасовано користувачем!')
} else if (pass === ADMIN_PASSWORD){
    message('Ласкаво просимо!')
} else {
    message ('Доступ заборонений, невірний пароль!')
}

