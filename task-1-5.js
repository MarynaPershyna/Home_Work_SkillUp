let country = prompt("Яка країна?").toLowerCase();


switch (country) {
    case 'китай':
        alert(`Доставка в Китай буде коштувати 100 кредитів`)
    break;
    case 'чилі':
        alert(`Доставка в Чилі буде коштувати 250 кредитів`)
    break;
    case 'австралія':
        alert(`Доставка в Австралія буде коштувати 170 кредитів`)
    break;
    case 'індія':
        alert(`Доставка в Індія буде коштувати 80 кредитів`)
    break;
    case 'ямайка':
        alert(`Доставка в Ямайка буде коштувати 120 кредитів`)
    break;
    default:
        alert('У вашій країні доставка недоступна')
    break;
}