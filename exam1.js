//bài tập 1;
/**
 * INPUT:
 * nhập vào 3 số nguyên
 * PROCESS:
 * có 3 số a b và c;
 * xét trường hợp 3 số bằng nhau:
 *  nếu a == b và b == c
 *  thì trả ra 3 số bằng nhau
 * xét trường hợp 2 số bằng nhau
 *  kiểm tra xem: nếu a == b hoặc a == c hoặc b == c thì làm tiếp bước so sánh:
 *    trường hợp a == b thì so sánh a và c, nếu : a < c đúng
 *     thì min = a, mid = min = b, max = c;
 *    nếu sai: min = c, mid = a, max =b;
 *    trường hợp a == c thì so sánh  a và b, nếu : a < b đúng
 *     thì min = a, mid = min = c, max = b
 *    nếu sai: min = b, max = a, max = c;
 *    trường hợp b == c thì so sánh b và a, nếu b < a đúng
 *     thì min = b, min = c, max = a,
 *    nếu sai: min = a, max = b, max = c
 * xét trường hợp không số nào bằng nhau:
 *    Giả sử số lớn nhất là a, tức a > b && a > c
 *        nếu điều kiện đúng thì gán max =a,
 *          khi max = a, ta tìm số nhỏ nhất bằng các so sánh b và c
 *            nếu b > c thì c là số nhỏ nhất, gán min = c ; middle = b
 *            nếu b < c thì b là số nhỏ nhất, gán min = b ; middle = c
 *    Trường hợp điều kiện a là số lớn nhất sai, xét tiếp đến b tương tự như với a
 *        nếu b > a && b > c thì max = b;
 *      so sánh giữa a với c, số nào nhỏ hơn thì là min, số nào lớn hơn là middle
 *        nếu điều kiện b > a && b > c sai thì chỉ có c là số lớn nhất, max = c
 *        so sánh a với b, số nào nhỏ hơn thì là min, số còn lại là middle
 * OUTPUT:
 *
 * xuất ra 3 số theo thứ tự tăng dần: min - middle - max
 */
function findMaxNumber() {
  var num1 = document.getElementById("numberOne").value * 1;
  var num2 = document.getElementById("numberTwo").value * 1;
  var num3 = document.getElementById("numberThree").value * 1;
  var max;
  var middle;
  var min;
  // Trường hợp 3 số bằng nhau
  if (num1 == num2 && num2 == num3) {
    max = num1;
    min = num1;
    middle = num1;
    document.getElementById("exam1Result").innerHTML =
      "Ba số nhập vào bằng nhau";
  }
  // Trường hợp có 2 số bằng nhau
  else if (num1 == num2 || num1 == num3 || num2 == num3) {
    if (num1 == num2) {
      if (num1 < num3) {
        max = num3;
        min = num1;
        middle = min;
      } else {
        min = num3;
        max = num1;
        middle = max;
      }
    } else if (num1 == num3) {
      if (num1 < num2) {
        max = num2;
        min = num1;
        middle = min;
      } else {
        min = num2;
        max = num1;
        middle = max;
      }
    } else {
      if (num2 < num1) {
        max = num1;
        min = num2;
        middle = min;
      } else {
        min = num1;
        max = num2;
        middle = max;
      }
    }
    document.getElementById("exam1Result").innerHTML =
       min + " " + middle + " " + max + ", có 2 số bằng nhau";
  }
  // Trường hợp không có số nào bằng nhau
  else if (num1 != num2 && num2 != num3 && num1 != num3) {
    if (num1 > num2 && num1 > num3) {
      max = num1;
      if (num2 > num3) {
        min = num3;
        middle = num2;
      } else {
        min = num2;
        middle = num3;
      }
    } else if (num2 > num1 && num2 > num3) {
      max = num2;
      if (num1 > num3) {
        min = num3;
        middle = num1;
      } else {
        min = num1;
        middle = num3;
      }
    } else if (num3 > num1 && num3 > num2) {
      max = num3;
      if (num2 > num1) {
        middle = num2;
        min = num1;
      } else {
        middle = num1;
        min = num2;
      }
    }
    document.getElementById("exam1Result").innerHTML =
      "thứ tự tăng dần:" + " " + min + " " + middle + " " + max;
  }
  document.getElementById("exam1Result").style.backgroundColor =
    "rgba(154, 245, 144, 0.24)";
}
// console.log(min, middle, max);
