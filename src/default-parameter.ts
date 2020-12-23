export {};

// javascriptではおなじみ。
// javascriptの文法上の決まり。
const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
};

console.log(nextYearSalary(1000));