export {};

//引数の後ろにクエスチョンを書けばオプショナルな引数に変わる。
let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height:number, 
  weight:number,
  printable?: boolean
  ): number => {
    // bmiをキャッシュする。
    const bmi:number = weight/ (height * height); 
    if(printable){
      console.log(bmi);
    }
    return bmi;
  };

  bmi(1.69, 81, true);

  // bmi(身長、体重、console.logで出力するかどうか？)

  // bmi(1.69, 81, true);
  // bmi(1.69, 81, true);
  // bmi(1.69, 81);