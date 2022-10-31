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
function handleSayHi() {
  var dad = "Xin chào bố!";
  var mom = "Xin chào mẹ!";
  var brother = "Chào anh trai!";
  var sister = " Chào em gái!";
  var whoIsUsing = document.getElementById("whoIsUsing").value; // B - M - A - E
  var welcome = document.getElementById("exam2Result");
  switch (whoIsUsing) {
    case "B":
      welcome.innerHTML = dad;
      break;
    case "M":
      welcome.innerHTML = mom;
      break;
    case "A":
      welcome.innerHTML = brother;
      break;
    case "E":
      welcome.innerHTML = sister;
      break;
    default:
      welcome.innerHTML = "Chào người lạ!";
  }
  welcome.style.backgroundColor = "rgba(154, 245, 144, 0.24)";
}
