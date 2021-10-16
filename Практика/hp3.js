function FillMatrix(m) {
  //Функция заполняет матрицу змейкой по диагонали вниз
  let a = new Array(m);
  for (let i = 0; i < m; i++) {
    a[i] = [];
  }

  let k = 0;
  //Верхний треугольник
  for (let s = 0; s < m; s++) {
    //Четная диагональ - вниз
    if (s % 2 == 0) {
      for (let i = s; i >= 0; i--) {
        a[s - i][i] = k++;
      }
    }
    //Нечетная диагональ - вверх
    else {
      for (let i = 0; i <= s; i++) {
        a[s - i][i] = k++;
      }
    }
  }

  //Нижний треугольник
  for (let s = m; s <= 2 * m - 2; s++) {
    if (s % 2 == 0) {
      //Четная диагональ - вниз
      for (let i = m - 1; i >= s - m + 1; i--) {
        a[s - i][i] = k++;
      }
    }
    //Нечетная диагональ - вверх
    else {
      for (let i = s - m + 1; i <= m - 1; i++) {
        a[s - i][i] = k++;
      }
    }
  }
  return a;
}

document.querySelector("button").onclick = function () {
  let n = document.querySelector("#n").value;

  let a = FillMatrix(n);

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
};
