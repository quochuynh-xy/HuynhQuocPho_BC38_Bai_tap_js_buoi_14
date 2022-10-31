// Bài tập 4:
/**
 * INPUT:
 * 3 số tương ứng với giá trị của 3 cạnh tam giác
 *
 * PROCESS:
 * Kiểm tra xem 3 số nhập vào có thể tạo ra một tam giác hay không:
 *   nếu tổng 2 số bất kỳ lớn hơn số còn lại thì cho chạy chương trình
 *   Nếu không thỏa mãn thì xuất ra không phải là hình tam giác
 *  Trường hợp 1: tam giác đều:
 * Kiểm tra xem 3 số có bằng nhau hay không?
 *    Nếu 3 số bằng nhau thì là tam giác đều.
 *
 * Trường hợp 2: Tam giác cân:
 *    kiểm tra xem có 2 số nào bằng nhau không, nếu có thì là tam giác cân
 * Trường hợp 3 tam giác vuông:
 *    Nếu không có 2 số nào bằng nhau và không có 3 số bằng nhau thì tìm số lớn nhất trong 3 số
 *    kiểm tra xem tổng bình phương hai số nhỏ hơn có bằng bình phương số lớn không.
 *    Nếu có thì là tam giác vuông
 *    Nếu không thì là tam giác thưởng.
 *
 * OUTPUT:
 * Xuất ra loại tam giác
 * Nếu không thỏa mãn điều kiện là tam giác thì báo lỗi
 */
function handleTriangle() {
  var edge1 = document.getElementById("edge1").value * 1;
  var edge2 = document.getElementById("edge2").value * 1;
  var edge3 = document.getElementById("edge3").value * 1;
  var result = document.getElementById("exam4Result");
  if (edge1 + edge2 > edge3 && edge1 + edge3 > edge2 && edge2 + edge3 > edge1) {
    isTriAngle = true;
  } else {
    isTriAngle = false;
    result.innerHTML =
      "Đây không thể là hình tam giác, vui lòng nhập lại độ dài các cạnh";
  }
  if (isTriAngle == true) {
    // Kiểm tra tam giác đều
    if (edge1 == edge2 && edge1 == edge3 && edge2 == edge3) {
      result.innerHTML = "Đây là tam giác đều";
      // Kiểm tra tam giác cân
    } else if (edge1 == edge2 || edge1 == edge3) {
      result.innerHTML = "Đây là tam giác cân";
      // Kiểm tra phải là tam giác vuông hay không
    } else {
      var max;
      var a;
      var b;
      if (edge1 > edge2 && edge1 > edge3) {
        max = edge1;
        a = edge2;
        b = edge3;
      } else if (edge2 > edge1 && edge2 > edge3) {
        max = edge2;
        a = edge1;
        b = edge3;
      } else {
        max = edge3;
        a = edge1;
        b = edge2;
      }
      if (max ** 2 == a ** 2 + b ** 2) {
        result.innerHTML = "Đây là tam giác vuông";
      } else {
        result.innerHTML =
          "Đây là một tam giác bình thường không có gì nổi bật";
      }
    }
  }
  result.style.backgroundColor = "rgba(154, 245, 144, 0.24)";
}
