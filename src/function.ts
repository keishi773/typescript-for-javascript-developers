export {};

// 関数に対するアノテーションの指定
function bmi(height: number, weight: number): number{
  return weight / (height * height);
}

console.log(bmi(1.69, 81));