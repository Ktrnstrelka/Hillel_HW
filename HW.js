// обьявляем обьект сервисес у которого есть ключ значение и сразу прописываем прайс максПрайм и минПрайс что бы было проще ориентироваться в обьекте, так сказать скелет делаю 
/*const services = {
  "стрижка":        "60 грн",
  "гоління":       "80 грн",
  "миття голови":  "100 грн",
  Price: function() {},
  minPrice: function() {},
  maxPrice: function()) {}
};
services['Розбити скло'] = "200 грн"; и сразу добавила новую услугу что б не забыть */


const services = {
  "стрижка":     "60 грн",
  "гоління":    "80 грн",
  "миття голови": "100 грн",
  price: function() {
    return Object.values(this) // указываем все значения этого обьекта 
      .filter(val => typeof val === "string")  // фильтруем только стоимость и оставляем строки
      .map(val => parseInt(val, 10))           // парсим строку в число без грн или так .map(val => +val.replace(" грн", ""));
      .reduce((sum, n) => sum + n, 0);         // и дальше складываем
  },
  minPrice: function() {
    const prices = Object.values(this)         // обьявляем константу и указываем все значения этого обьекта
      .filter(val => typeof val === "string")  // фильтруем только стоимость что б оставить строки
      .map(val => parseInt(val, 10));          // парсим строку в число без грн можно так .map(val => +val.replace(" грн", ""));
    return Math.min(...prices);                // возвращаем аргументы Math.min
  },
  maxPrice: function() {
    const prices = Object.values(this)         // обьявляем переменную и указываем все значения этого обьекта
      .filter(val => typeof val === "string")  // фильтруем только стоимость что б оставить строки
      .map(val => parseInt(val, 10));          // парсим строку в число без грн
    return Math.max(...prices);                // ищем максимум
  }
};
services['Розбити скло'] = "200 грн";

// проверяю использование:
console.log("загальна вартість наданих послуг:", services.price(), "грн");      // сумма всех цен 440 грн
console.log("Мін. ціна:", services.minPrice(), "грн");        //  мин цена 60 грн
console.log("Макс. ціна:", services.maxPrice(), "грн");       // макс цена 100 грн
