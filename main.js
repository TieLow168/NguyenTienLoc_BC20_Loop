//Bai 1:
function Chanle() {
  var soChan = "";
  var soLe = "";
  for (var i = 0; i < 100; i++) {
    if (i % 2 == 0) {
      soChan += " " + i;
    } else {
      soLe += " " + i;
    }
  }
  document.getElementById("result__b1").innerHTML =
    "Số chẵn: " + soChan + "<br>Số lẻ: " + soLe;
}
//While Bai1:
function whileCL() {
  var n = 0;
  var soChan = "";
  var soLe = "";
  while (n < 100) {
    if (n % 2 == 0) {
      soChan += " " + n;
    } else {
      soLe += " " + n;
    }
    n++;
  }
  console.log(soChan);
  console.log(soLe);
}
document.getElementById("btn__CL").onclick = Chanle;
// document.getElementById("btn__CL").onclick = whileCL;

//Bai 2:
function chiaHetBa() {
  var content = "";
  var count = 1;
  for (var i = 0; i < 1000; i++) {
    if (i % 3 == 0) {
      content += " " + i;
      count++;
    }
  }
  document.getElementById("result__b2").innerHTML =
    "Tổng cộng có: " + count + " <br>Các số đó là: " + content;
}
document.getElementById("btn__chia").onclick = chiaHetBa;
function whileChiBa() {
  var content = "";
  var count = 0;
  var n = 0;
  while (n < 1000) {
    if (n % 3 == 0) {
      content += " " + i;
      count++;
    }
    n++;
  }
  document.getElementById("result__b2").innerHTML =
    "Tổng cộng có: " + count + " <br>Các số đó là: " + content;
}

//Bai 3:
function nguyenNhoNhat() {
  var sum = 0;
  var count = 0;
  for (var i = 1; i < 10000; i++) {
    sum += i;
    if (sum > 10000) {
      break
    }
    count++;
  }
  document.getElementById("result__b3").innerHTML = count;
}
document.getElementById("btn__min").onclick = nguyenNhoNhat;

//Bai 4:
function tinhTong() {
  var x = document.getElementById("inputX").value;
  var n = document.getElementById("inputN").value;
  var tong = 0;
  for (var soMu = 1; soMu <= n; soMu++) {
    tong += Math.pow(x, soMu);
  }
  document.getElementById("result__b4").innerHTML = "Kết quả là: " + tong;
}
document.getElementById("btn__tong").onclick = tinhTong;

//Bai 5:
function tinhGT() {
  var n = document.getElementById("inputGT").value;
  var kq = 1;
  for (var i = 1; i <= n; i++) {
    kq *= i;
  }
  document.getElementById("result__b5").innerHTML = "Kết quả là: " + kq;
}
document.getElementById("btn__GT").onclick = tinhGT;

