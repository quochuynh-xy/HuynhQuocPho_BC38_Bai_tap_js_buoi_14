//bài tập 2;
/**
*INPUT: nhập vào giá trị người sử dụng: 
*Bố : B, mẹ : M, anh trai: A , em gái: E
*PROCESS:
Dựa vào kết quả nhập vào để biết ai là người sử dụng.
vd nhập vào B thì người sử dụng là "Bố"
Dựa vào kết quả nhập để đưa ra câu chào.
Chọn lấy câu chào tương ứng với đối tượng B được nhập vào.
OUTPUT: 
Hiển thị câu chào
 */
var dad = "Xin chào bố!";
var mom = "Xin chào mẹ!";
var brother = "Chào anh trai!";
var sister = " Chào em gái!";
var whoIsUsing = "E"; // B - M - A - E
switch (whoIsUsing) {
  case "B":
    console.log(dad);
    break;
  case "M":
    console.log(mom);
    break;
  case "A":
    console.log(brother);
    break;
  case "E":
    console.log(sister);
    break;
  default:
    console.log("Không xác định được người dùng");
}
