let age = +prompt("Введите свой возраст: ");
if (age > 0 && age <= 18) {
    alert("Вы еще слишком молоды. Вам нужно учиться!");
} else if (age > 18 && age <= 50) {
    alert("Вам нужно работать!");
} else if (age > 50 && age <= 59) {
    alert("Вам скоро на пенсию!");
} else if (age > 59 && age < 100) {
    alert("Вы - пенсионер!");
} else {
    alert("Что-то пошло не так!");
}

let number = +prompt("Введите число от 0 до 23: ");
switch (number) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        alert("2 часа ночи");
        break;
    case 7:
    case 8:
    case 9:
    case 10:
        alert("10 часов утра");
        break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
        alert("3 часа дня");
        break;
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
        alert("8 часов вечера");
        break;

    default:
        alert("Что-то пошло не так!");
        break;
}
