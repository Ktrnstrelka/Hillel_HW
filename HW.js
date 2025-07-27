const reg = /^[^Aa]{6,}$/;
const test = "Wonderful Joyful Happiness Time Task Apple";
const words = test.split(" "); //делю слова на отдельные строки 
const matches = words.filter(word => reg.test(word)); //ищем нужные слова
console.log(matches);