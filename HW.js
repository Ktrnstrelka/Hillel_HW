var arr = `[
    {
        "userName":"Test",
        "lastName":"Test",
        "email":"test.test@gmail.com"
    },
    {
        "userName":"Dmitro",
        "lastName":"Porohov",
        <"email":"dmitro.porohov@yahoo.com>"
    },
    {
        "userName":"Andrii",
        "lastName":"",
        "email":"andrii@mail.ru" 
    }
]`;
const cleaned = arr.replaceAll("<", "").replaceAll(">", ""); 
const parsedArr = JSON.parse(cleaned);
const emailRegex = /^[a-z0-9._%+-]+@(gmail\.com|yahoo\.com)$/i;
function getArrayWithCorrectEmails(arr, emailRegex) {
    let arrayWithEmails = [];
    arr.forEach(function (currentValue) {
        if (currentValue.email) {
            if (emailRegex.test(currentValue.email)) {
                arrayWithEmails.push(currentValue.email);
            }
        }
    });
    return arrayWithEmails;
}
let newArr = getArrayWithCorrectEmails(parsedArr, emailRegex);
console.log(newArr);