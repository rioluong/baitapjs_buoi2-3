var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
// Bài tập 1 tính tiền lương nhân viên
var btnClick1 = $('.txt-btn1');
var btnClick2 = $('.txt-btn2');
var btnClick3 = $('.txt-btn3');
var btnClick4 = $('.txt-btn4');
var btnClick5 = $('.txt-btn5');
//----------------------//
btnClick1.onclick = () => {
    var soNgayLam = $('#txt-soNgay').value * 1;
    var soLuong = $('#txt-soLuong').value * 1;

    var ketQua = $(".ketQua1");

    ketQua.innerHTML = `<i class="fa-solid fa-circle-arrow-right text-light"></i> Tiền lương của bạn là: ${new Intl.NumberFormat("vn-VN" ).format(soNgayLam * soLuong)} VNĐ`;
};

//Bài tập 2 tính giá trị trung bình

btnClick2.onclick = () => {
    var num1 = $('#txt-num1').value * 1;
    var num2 = $('#txt-num2').value * 1;
    var num3 = $('#txt-num3').value * 1;
    var num4 = $('#txt-num4').value * 1;
    var num5 = $('#txt-num5').value * 1;
    var ketQua = $('.ketQua2');
    ketQua.innerHTML =  `<i class="fa-solid fa-circle-arrow-right text-light"></i> Kết quả giá trị trung bình của bạn là: ${(num1 + num2 + num3 + num4 + num5)/5} `;
};

//   bài tập 3 quy đổi giá usd sang tiền việt việt
  btnClick3.onclick = () => {
    var money = $('#txt-money').value * 1;
    var ketQua = $('.ketQua3');
    ketQua.innerHTML = `<i class="fa-solid fa-circle-arrow-right text-light"></i> Số tiền được quy đổi là : ${new Intl.NumberFormat("vn-VN").format(money * 23500)} VNĐ`;
  };

  // Bài tập 4 tính chu vi và diện tích hình chữ nhật
  btnClick4.onclick  = () => {
    var chieuDai = $('#txt-dai').value * 1;
    var chieuRong = $('#txt-rong').value * 1;
    var ketQua = $('.ketQua4');
    ketQua.innerHTML = `<i class="fa-solid fa-circle-arrow-right text-light"></i> Diện tích: ${chieuDai * chieuRong}; Chu vi: ${(chieuDai + chieuRong)*2}`;
  };
  //Bài tập 5 tính tổng 2 ký số
  btnClick5.onclick = () => {
    var num = $('#txt-number').value * 1;
    var hangTram = 0;
    var hangChuc = 0;

    var ketQua = $('.ketQua5');
    ketQua.innerHTML=`<i class="fa-solid fa-circle-arrow-right text-light"></i> 
    ${Math.floor((num % 100) / 10) + (num % 10)}
    `;
  };
  var inpuForm = $$(".txt-form-input");
  inputForm.forEach(function (input){
    input.addEventListener("input",function (event){
      var inputValue = event.target.value;

      var numericValue = inputValue.replace(/[^0-9]/g, "");

      event.target.value = numericValue;
    });
  });