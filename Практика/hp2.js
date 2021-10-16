function getRandomInt(min, max) {
  //Функция для генерации случайного числа
  let rand = min - 0.5 + Math.random() * (max - min + 1) + min;
  rand = Math.round(rand);
  return rand;
}

function matrixArray(rows, columns, amin, amax) {
  //Функция, которая создаёт двумерный массив
  let arr = new Array();
  for (let i = 0; i < rows; i++) {
    arr[i] = new Array();

    for (let j = 0; j < columns; j++) {
      arr[i][j] = getRandomInt(amin, amax);
    }
  }
  return arr;
}

document.querySelector("button").onclick = function () {
  let n = document.querySelector("#n").value;
  let amin = document.querySelector("#amin").value;
  let amax = document.querySelector("#amax").value;

  let a = matrixArray(n, n, amin, amax);

  //Поиск максимума и суммы
  let sum = 0;
  let max = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i < n - 1 - j) {
        sum = a[i][j] + sum;
      }
      if (i > n - 1 - j && a[i][j] > max) {
        max = a[i][j];
      }
    }
  }

  //Оформленный вывод матрицы
  let s = "";
  for (let i = 0; i < n; i++) {
    let len = a[i].length;
    for (let j = 0; j < len; j++) {
      s = s + String(a[i][j]).padStart(5, " ") + (j < len - 1 ? " " : "");
    }
    s = s + "\n";
  }
  document.getElementById("out-matrix").innerHTML = s;
  document.getElementById("sum").innerHTML = sum;
  document.getElementById("max").innerHTML = max;
};
