function getRandomInt(min, max) {
  //Функция для генерации случайного числа
  let rand = min - 0.5 + Math.random() * (max - min + 1) + min;
  rand = Math.round(rand);
  return rand;
}

document.querySelector("button").onclick = function () {
  let n = document.querySelector("#length").value;
  let amin = document.querySelector("#amin").value;
  let amax = document.querySelector("#amax").value;
  let a = [];
  //Заполнение массива случайными числами
  for (let i = 0; i < n; i++) {
    a.push(getRandomInt(amin, amax));
  }
  document.querySelector("#out").innerHTML = " " + a;

  //Нахождение часто встречающегося числа
  let num = a[0];
  let max = 0;
  for (let i = 0; i < n; i++) {
    let count = 1;
    for (let j = i + 1; j < n; j++) {
      if (a[i] == a[j]) {
        count = count + 1;
      }
    }
    if (count > max) {
      max = count;
      num = a[i];
    }
  }
  let result = [];
  result.push(num);

  //Нахождение часто встречающегося чисел, если такие сущестуют
  for (let i = 0; i < n; i++) {
    let count = 1;
    for (let j = i + 1; j < n; j++) {
      if (a[i] == a[j]) {
        count = count + 1;
      }
    }
    if (count == max && a[i] != num) {
      max = count;
      num = a[i];
      result.push(num);
    }
  }
  document.querySelector("#result").innerHTML = " " + result;
  return a;
};
