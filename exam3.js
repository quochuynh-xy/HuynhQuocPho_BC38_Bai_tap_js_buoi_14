//Bài tập 3:
/**
 * INPUT:
 * 3 số nguyên
 * PROCESS:
 * do số lẻ khi chia 2 không có dư
 * lấy a%2 + b%2 + c%2
 * nếu = 0 : ba số đều là số chẵn
 * nếu = 1 : có 2 số chẵn
 * nếu = 2 : có 1 số chẵn.
 * nếu = 3 : đều là số lẻ
 * OUTPUT :
 * xuất ra kết quả
 *
 */
function arrangeNumber() {
  var num1 = document.getElementById("ex3_numberSt").value*1;
  var num2 = document.getElementById("ex3_numberNd").value*1;
  var num3 = document.getElementById("ex3_numberTh").value*1;
  var result = document.getElementById("exam3Result");
  var sum = (num1 % 2) + (num2 % 2) + (num3 % 2);
  switch (sum) {
    case 0:
      result.innerHTML = "Cả 3 số đều là số chẵn";
      break;
    case 1:
      result.innerHTML = "Có 2 số chẵn và 1 số lẻ";
      break;
    case 2:
      result.innerHTML = "Có 1 số chẵn và 2 số lẻ ";
      break;
    default:
      result.innerHTML = "Cả 3 số nhập vào đều là số lẻ";
      console.log("không có số nào là số chẵn");
  }
  result.style.backgroundColor = "rgba(154, 245, 144, 0.24)"
}
