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

//   bài tập tập 3 quy đổi giá usd sang tiền việt việt
  btnClick3.onclick = () => {
    var money = $('#txt-money').value * 1;
    var ketQua = $('.ketQua3');
    ketQua.innerHTML = `<i class="fa-solid fa-circle-arrow-right text-light"></i> Số tiền được quy đổi là : ${new Intl.NumberFormat("vn-VN").format(money * 23500)} VNĐ`;
  };