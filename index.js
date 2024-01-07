var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
//--------------------------------------//
var btnClick1 = $('.txt-btn1');
var btnClick2 = $('.txt-btn2');
var btnClick3 = $('.txt-btn3');
var btnClick4 = $('.txt-btn4');
var btnClick5 = $('.txt-btn5');
//----------------------//
// Bài tập 1 tính tiền lương nhân viên

/**
 * Đầu vào : số ngày làm và số Lương 
 * 
 * Các bước xử lí:
 * Khai báo giá trị nhập vào của số ngày làm và số lương là 
 *   soNgayLam, soLuong
 *  Tích 2 giá trị nhập vào 
 * tongSoLuong = soNgayLam * soLuong
 * 
 * Đầu ra: trả về kết quả là số lượng nhận được
 */
btnClick1.onclick = () => {
    var soNgayLam = $('#txt-soNgay').value * 1;
    var soLuong = $('#txt-soLuong').value * 1;

    var ketQua = $(".ketQua1");

    ketQua.innerHTML = `<i class="fa-solid fa-circle-arrow-right text-light"></i> Tiền lương của bạn là: ${new Intl.NumberFormat("vn-VN" ).format(soNgayLam * soLuong)} VNĐ`;
};

//Bài tập 2 tính giá trị trung bình

/**
 * Đầu vào: cho 5 số nguyên dương 
 * 
 * 
 * Các bước xử lí: 
 *  Khai bao biến gía trị là num1 , num2 ,.. numN.
 *  Tính tổng 5 số nguyên dương nhập vào 
 *  Chia cho số lượng số nguyên dương nhập vào là 5
 *  tong = num1 + num2 + num3 + num4 + num5
 *  giaTriTb = tong / 5
 * 
 * 
 * 
 * Đầu ra : Trả về kết quả trung bình 
 */


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
/**
 * Đầu vào : nhập một số tự nhiên
 * 
 * Các bước xử lí ; 
 * khai báo biến giá trị money nhập vào các số tự nhiên từ 1,.....N
 * Khai báo biến kết qủa
 * xuất ra kết quả là 
 * quyDoi = soNhapvao * số tiền quy đổi
 * 
 * 
 * Đầu ra : Trả về kết quả số tiền quy đổi
 */
  btnClick3.onclick = () => {
    var money = $('#txt-money').value * 1;
    var ketQua = $('.ketQua3');
    ketQua.innerHTML = `<i class="fa-solid fa-circle-arrow-right text-light"></i> Số tiền được quy đổi là : ${new Intl.NumberFormat("vn-VN").format(money * 23500)} VNĐ`;
  };

  // Bài tập 4 tính chu vi và diện tích hình chữ nhật
  /**
   * Đầu vào: 2 giá trị là chiều dài và chiều rộng 
   * 
   * Các bước xử lí: Áp dụng công thức tính chu vi và diện tích 
   * Diện tích = Chiều Dài * Chiều Rộng
   * Chu Vi = (Chiều Dài + Chiều Rộng) *2
   * 
   * 
   * Đầu ra : Trả về kết quả Diện Tích và Chu Vi hình Chữ Nhật
   */
  btnClick4.onclick  = () => {
    var chieuDai = $('#txt-dai').value * 1;
    var chieuRong = $('#txt-rong').value * 1;
    var ketQua = $('.ketQua4');
    ketQua.innerHTML = `<i class="fa-solid fa-circle-arrow-right text-light"></i> Diện tích: ${chieuDai * chieuRong}; Chu vi: ${(chieuDai + chieuRong)*2}`;
  };
  //Bài tập 5 tính tổng 2 ký số
  /**
   * Đầu vào : một số tự nhiên có 2 ký số 
   * 
   * Các bước xử lí :
   * Lấy ra ký số ở hàng chục => num % 100 => số làm tròn / 10
   * Lấy ra ký số ở hàng đơn vị => num % 10
   * Cộng 2 ký số lại với nhau 
   * 
   * Đầu ra : kết quả là tổng 2 ký số 
   */
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