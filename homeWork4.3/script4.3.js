const birthYear = prompt("Будь ласка, введіть ваш рік народження:");
const city = prompt("В якому місті ви проживаєте?");
const sport = prompt("Який вид спорту ваш улюблений:");

const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;

let cityMessage;
switch (true) {
    case "Київ":
        cityMessage = "Ти проживаєш у столиці України!";
        break;
    case "Лондон":
        cityMessage = "Ти проживаєш у столиці Англії!";
        break;
    case "Берлін":
        cityMessage = "Ти проживаєш у столиці Німеччини!";
        break;
    case "":
        sportMessage = "Ви не вказали ваше місто!";
        break;
    default:
        cityMessage = `Ти живеш у місті ${city}.`;
}

let sportMessage;
switch (true) {
    case "Бокс":
        sportMessage = "Круто, хочеш стати як Олександр Усик!";
        break;
    case "Футбол":
        sportMessage = "Круто, хочеш стати як Ліонель Мессі!";
        break;
    case "Плавання":
        sportMessage = "Круто, хочеш стати як Владислав Бухов!";
        break;
    case "":
        sportMessage = "Ви не вказали ваш улюблений вид спорту!";
        break;
    default:
        sportMessage = `Твій улюблений вид спорту ${sport}.`;
}

alert("Ваш вік:\t" + age + " років.\n\n" + cityMessage + "\n\n" + sportMessage);

