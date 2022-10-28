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
var num1 = 4;
var num2 = 6;
var num3 = 8;
var sum = (num1 % 2) + (num2 % 2) + (num3 % 2);
switch (sum) {
  case 0:
    console.log("Cả 3 số đều là số chẵn");
    break;
  case 1:
    console.log("Có 2 số chẵn");
    break;
  case 2:
    console.log("Có 1 số chẵn");
    break;
  default:
    console.log("không có số nào là số chẵn");
}
