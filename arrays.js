let dolap = ["Shirt", "Pant", "TShirt"];

// 1. dolap arrayindeki son elemanı silip consola yazdırın
const firstQuestion = (argArr) => {
  let array = [...argArr];
  array.pop();
  console.log(`First Question :`, array);
};
firstQuestion(dolap);

//2. dolap arrayindeki ilk elamanı silip yerine “Hat” elemanını gönderip consola yazdırın
const secondQuestion = (argArr) => {
  let array = [...argArr];
  array.shift();
  array.unshift("Hat");
  console.log(`Second Question :`, array);
};
secondQuestion(dolap);

//3. dolap değişkeninin array olup olmadığını kontrol edin ve sonucu bir değişkene eşitleyin
const thirdQuestion = (argArr) => {
  let isArray = Array.isArray(argArr);
  console.log(`Third Question :`, isArray);
};

thirdQuestion(dolap);

//4. dolap arrayinde “Pant” elemanın olup olmadığını 3 farklı method ile kontrol edin
const fourthQuestion = (argArr, text) => {
  console.log(`Fourth (Includes Function) Question :`, argArr.includes(text));
  console.log(
    `Fourth (IndexOf Function) Question :`,
    argArr.indexOf(text) !== -1
  );
  console.log(
    `Fourth (Find Function) Question :`,
    argArr.find((item) => item === text) ? true : false
  );
};
fourthQuestion(dolap, "Pant");

//5. dolap arrayindeki elemanların karakter sayısını toplayıp geriye döndürecek fonksiyonu yazın
const fifthQuestion = (argArr) => {
  console.log(
    `Fifth Question :`,
    argArr.reduce((acc, cur) => acc + cur.length, 0)
  );
};
fifthQuestion(dolap);

//6. dolap arrayindeki elemanların karakter sayısını toplayıp geriye döndürecek fonksiyonu yazın
const sixthQuestion = (argArr) => {
  let firstUpperArray = argArr.map((item) => item.toUpperCase());
  console.log(`Sixth Question (Map Function) :`, firstUpperArray);

  let secondUpperArray = [];
  for (let item of argArr) {
    secondUpperArray.push(item.toUpperCase());
  }
  console.log(`Sixth Question (for of Function) :`, secondUpperArray);

  let thirdUpperArray = [];
  argArr.forEach((item) => {
    thirdUpperArray.push(item.toUpperCase());
  });
  console.log(`Sixth Question (foreach Function) :`, thirdUpperArray);
};
sixthQuestion(dolap);

//7. dolap arrayini index sayıları key olacak şekilde objeye çeviriniz
const seventhQuestion = (argArr) => {
  console.log(`Seventh Question : `, Object.assign({}, argArr));
};
seventhQuestion(dolap);

// 8. Slice ile Splice methodu arasındaki fark nedir ?
/**
 * `slice` methodu , dizinin verilen indislere göre bir kısmını kopyalar ve bu kısmı yeni bir dizi olarak döndürür
 * Dizinin içeriğini değiştirmez.
 */
let arraySlice = [1, 2, 3, 4, 5];
const slicedArray = arraySlice.slice(1, 4); // 2, 3, 4
console.log(`Sliced Array : `, arraySlice); // [1, 2, 3, 4, 5]
/**
 *
 * `splice` methodu , belirtilen indislerdeki elemanları dizinin içerisinden siler, yeni bir dizi olarak geriye döndürür.
 *  Dizinin içeriğini değiştirebilir
 */
const array = [1, 2, 3, 4, 5];
const splicedArray = array.splice(1, 3);
console.log(`Spliced Array: `, array); // [1,5]

/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////

const numArr = [1, 2, 3, 4, 5, 6, 7, 7, 10, 6, 8];

//1. arrayindeki yinelenen sayıları bulun

let firstQuestionNums = numArr.filter(
  (item, index) => numArr.indexOf(item) !== index
);
console.log(`First Number Array Question : `, firstQuestionNums);

//2. arrayindeki tüm yinelenen sayıları silip yeni bir arrayi 2 farklı method ile oluşturun

let secondQuestionNumsFilter = numArr.filter(
  (item, index) => numArr.indexOf(item) === index
);
console.log(`Second Number Array Question (Filter)`, secondQuestionNumsFilter);
console.log(`Second Number Array Question (Set)`, new Set(numArr));

//3. arrayindeki tüm yinelenen sayıları silip yeni bir arrayi 2 farklı method ile oluşturun

const thirdQuestionNumsSort = (argArr) => {
  let sorted = [...argArr].sort((a, b) => a - b);
  let min = sorted[0];
  let max = sorted[argArr.length - 1];
  return { min, max };
};

const thirdQuestionNumsMath = (argArr) => {
  const max = Math.max(...argArr);
  const min = Math.min(...argArr);
  return { min, max };
};

console.log(
  `Third Number Array Question (Array.sort)`,
  thirdQuestionNumsSort(numArr)
);
console.log(
  `Third Number Array Question (Math Object)`,
  thirdQuestionNumsMath(numArr)
);
