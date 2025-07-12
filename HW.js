function valueOfPower(base, power) {
  let result = 1; 
  for (let i = 0; i < power; i++) {
    result = result * base;
  }
  return result;
}
console.log (valueOfPower(2,3));

// возникли проблемы со {}. не могла понять в каких местах их надо ставить, какой порядок вскрытия {}. Когда скобку поставила над return result всё сработало.
