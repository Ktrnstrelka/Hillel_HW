function checkProbabilityTheory(count) {
    let evenNumbers = 0; //количество парних чисел
    let oddNumbers = 0;  //количество непарних чисел

    for (let i = 0; i < count; i++) {
        let randomValue = Math.floor(Math.random() * (1000 - 100 + 1)) + 100; //рандомное число
        if (randomValue % 2 === 0) {
            evenNumbers++; //увеличиваем счетчи парных чисел
        } else {
            oddNumbers++;  //увеличиваем счётчик не парных чисел
        }
    }

    let evenPercent = (evenNumbers / count) * 100; //процент парных
    let oddPercent = (oddNumbers / count) * 100;   //тут процент непарных

    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Парних чисел: ${evenNumbers}`);
    console.log(`Непарних чисел: ${oddNumbers}`);
    console.log(`Відсоток парних: ${evenPercent}%`);
    console.log(`Відсоток непарних: ${oddPercent}%`);
}
checkProbabilityTheory(10); //результат: кількість згенерованих чисел: 10; Парних чисел: 6; Непарних чисел: 4; Відсоток парних: 60%; Відсоток непарних: 40%

/* если в процентах много знаков после запятой то можно добавить toFixed(2) например и это покажет 2 знака после запятой */