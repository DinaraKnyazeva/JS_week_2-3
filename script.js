// Напишите скрипт, который сможет определить, является ли данный год високосным в григорианском календаре. Чтобы определить, является ли год високосным, выполните следующие действия:
//     Шаг 1: Если год делится на 4 равномерно, перейдите к шагу 2. В противном случае    перейдите к шагу 5.
//     Шаг 2: Если год делится на 100 равномерно, перейдите к шагу 3. В противном случае   перейдите к шагу 4.
//     Шаг 3: Если год делится на 400 равномерно, перейдите к шагу 4. В противном случае перейдите к шагу 5.
//     Шаг 4: Год является високосным (366 дней).
//     Шаг 5: Год не високосный (у него 365 дней).
// примечания: как в экселе функция "=если" if (если) то (else)
// вариант №1:
const positiveResult = "Год является високосным (366 дней)";
const negativeResult = "Год не високосный (у него 365 дней)";

function calculationDays(year) {
  if (Number.isInteger(year / 4)) {
    if (Number.isInteger(year / 100)) {
      if (Number.isInteger(year / 400)) {
        return positiveResult;
      } else {
        return negativeResult;
      }
    } else {
      return positiveResult;
    }
  } else {
    return negativeResult;
  }
}
// console.log(calculationDays(400));

// вариант №2 (от кота):
// Синтаксис:
// let result = условие ? значение1 : значение2;
// Сначала вычисляется условие: если оно истинно, тогда возвращается значение1, в противном случае – значение2.
// Например:
// let accessAllowed = (age > 18) ? true : false;

function calculationDays(year) {
  const isLeapYear = Number.isInteger(year / 4)
    ? Number.isInteger(year / 100)
      ? Number.isInteger(year / 400)
        ? true
        : false
      : true
    : false;
  return isLeapYear
    ? console.log("Год является високосным (366 дней)")
    : console.log("Год не високосный (у него 365 дней)");
}
calculationDays(2023);
