let minute = prompt("Введите число от 0 до 59");
minute = parseInt(minute,10);
if (minute >= 59 ){
    alert("Пожалуйста, введите корректное число от 0 до 59");
}
    if (minute >= 0 && minute <= 15) {
        alert("Это первая четверть.");
    } else if (minute >= 16 && minute <= 30) {
        alert("Это вторая четверть.");
    } else if (minute >= 31 && minute <= 45) {
        alert("Это третья четверть.");
    } else {
        alert("Это четвертая четверть.");
    }