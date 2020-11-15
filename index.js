var getSelector = function (id) {
    return document.querySelector(id);
}



var validate = new Validation();

//Mảng chứa nội dung sinh viên được người dùng thêm vào sau khi nhập liệu
var mangSinhVien = [];




//Khai báo sự kiện khi người dùng click vào nút xác nhận
document.querySelector('#btnXacNhan').onclick = function () {
    //Tạo đối tượng chứa dữ liệu nhập từ người dùng
    var sv = new SinhVien();
    sv.maSinhVien = document.querySelector('#maSinhVien').value;
    sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sv.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    sv.soDienThoai = document.querySelector('#soDienThoai').value;
    sv.email = document.querySelector('#email').value;
    sv.diemToan = document.querySelector('#diemToan').value;
    sv.diemLy = document.querySelector('#diemLy').value;
    sv.diemHoa = document.querySelector('#diemHoa').value;
    sv.diemRenLuyen = document.querySelector('#diemRenLuyen').value;
    // console.log('sinh viên', sv);

    //----------------Kiểm tra dữ liệu hợp lệ ----------------
    // -------Kiểm tra rỗng-----------
    var valid = true;

    valid &= validate.kiemTraRong(sv.maSinhVien, 'Mã sinh viên', '#kiemTraRong-maSinhVien') & validate.kiemTraRong(sv.tenSinhVien, 'Tên sinh viên', '#kiemTraRong-tenSinhVien') & validate.kiemTraRong(sv.email, 'Email', '#kiemTraRong-email') & validate.kiemTraRong(sv.soDienThoai, 'Số ĐT', '#kiemTraRong-soDienThoai') & validate.kiemTraRong(sv.diemToan, 'Điểm toán', '#kiemTraRong-diemToan') & validate.kiemTraRong(sv.diemLy, 'Điểm lý', '#kiemTraRong-diemLy') & validate.kiemTraRong(sv.diemHoa, 'Điểm hóa', '#kiemTraRong-diemHoa') & validate.kiemTraRong(sv.diemRenLuyen, 'Điểm rèn luyện', '#kiemTraRong-diemRenLuyen');

    // Kiểm tra định dạng
    valid &= validate.kiemTraTatKyTu(sv.tenSinhVien, 'Tên sinh viên', '#kiemTraDinhDang-tenSinhVien') & validate.kiemTraEmail(sv.email, 'Email', '#kiemTraDinhDang-email') & validate.kiemTraTatCaLaSo(sv.soDienThoai, 'Số điện thoại', '#kiemTraDinhDang-soDienThoai') & validate.kiemTraTatCaLaSo(sv.diemToan, 'Điểm toán', '#kiemTraDinhDang-diemToan') & validate.kiemTraTatCaLaSo(sv.diemLy, 'Điểm lý', '#kiemTraDinhDang-diemLy') & validate.kiemTraTatCaLaSo(sv.diemHoa, 'Điểm hóa', '#kiemTraDinhDang-diemHoa') & validate.kiemTraTatCaLaSo(sv.diemRenLuyen, 'Điểm rèn luyện', '#kiemTraDinhDang-diemRenLuyen');
    //Kiểm tra độ dài
    valid &= validate.kiemTraDoDai(sv.maSinhVien, 'Mã sinh viên', '#kiemTraDoDai-maSinhVien', 4, 6);
    //Kiểm tra giá trị 
    valid &= validate.kiemTraGiaTri(sv.diemToan, 'Điểm toán', '#kiemTraGiaTri-diemToan', 0, 10) & validate.kiemTraGiaTri(sv.diemLy, 'Điểm lý', '#kiemTraGiaTri-diemLy', 0, 10) & validate.kiemTraGiaTri(sv.diemHoa, 'Điểm hóa', '#kiemTraGiaTri-diemHoa', 0, 10) & validate.kiemTraGiaTri(sv.diemRenLuyen, 'Điểm rèn luyện', '#kiemTraGiaTri-diemRenLuyen', 0, 10);


    // if(!valid) {
    //     return ;
    // }
    //Mỗi khi người dùng ONCLICK thì thêm sinh viên vào mảng = lệnh .push()
    mangSinhVien.push(sv);

    console.log('Mảng sinh viên', mangSinhVien);

    //Gọi hàm tạo bảng
    renderTableSinhVien(mangSinhVien);

    //Gọi hàm lưu mảng sinh viên vào local storage
    luuDuLieuLocalStorage();



    //-----------------------
    //Tạo ra thẻ tr chứa thông tin sinh viên
    // var trSinhVien = document.createElement('tr');

    // //Tạo ra thẻ td chứa thông tin sinh viên
    // var tdMaSinhVien = document.createElement('td');
    // tdMaSinhVien.innerHTML = sv.maSinhVien;


    // var tdTenSinhVien = document.createElement('td');
    // tdTenSinhVien.innerHTML = sv.tenSinhVien;

    // var tdEmail = document.createElement('td');
    // tdEmail.innerHTML = sv.email;

    // var tdSoDienThoai = document.createElement('td');
    // tdSoDienThoai.innerHTML = sv.soDienThoai;

    // var tdDiemTrungBinh = document.createElement('td');
    // tdDiemTrungBinh.innerHTML = sv.tinhDiemTrungBinh();

    // var tdXepLoai = document.createElement('td');
    // tdXepLoai.innerHTML = sv.xepLoai();


    //td chức năng 
    // var tdChucNang = document.createElement('td');

    // //Tạo button xóa
    // var btnXoaSinhVien = document.createElement('button');
    // btnXoaSinhVien.innerHTML = 'Xóa';
    // btnXoaSinhVien.className = 'btn btn-danger';
    // btnXoaSinhVien.onclick = function () {
    //     //this trong onclick đại diện cho thẻ đó
    //     var theTDCha = btnXoaSinhVien.parentElement;
    //     var trCha = theTDCha.parentElement;
    //     trCha.remove();
    // }

    // tdChucNang.appendChild(btnXoaSinhVien);
    // console.log(btnXoaSinhVien)

    // //Đem thẻ td bỏ vào tr
    // trSinhVien.appendChild(tdMaSinhVien);
    // trSinhVien.appendChild(tdTenSinhVien);
    // trSinhVien.appendChild(tdEmail);
    // trSinhVien.appendChild(tdSoDienThoai);
    // trSinhVien.appendChild(tdDiemTrungBinh);
    // trSinhVien.appendChild(tdXepLoai);
    // trSinhVien.appendChild(tdChucNang);
    // //Dom đến thẻ tbody => tr bỏ vào tbody
    // var tbody = document.querySelector('#tableSinhVien');
    // tbody.appendChild(trSinhVien);

}


var renderTableSinhVien = function (arrSinhVien) {
    var noiDungTable = '';
    for (var index = 0; index < arrSinhVien.length; index++) {
        //Mỗi lần duyệt lấy ra 1 đối tượng sinh viên từ trong mangSinhVien

        // var sv = arrSinhVien[index];
        var sv = new SinhVien();
        sv.maSinhVien = arrSinhVien[index].maSinhVien;
        sv.tenSinhVien = arrSinhVien[index].tenSinhVien;
        sv.email = arrSinhVien[index].email;
        sv.soDienThoai = arrSinhVien[index].soDienThoai;
        sv.diemToan = arrSinhVien[index].diemToan;
        sv.diemLy = arrSinhVien[index].diemLy;
        sv.diemHoa = arrSinhVien[index].diemHoa;
        sv.diemRenLuyen = arrSinhVien[index].diemRenLuyen;
        sv.loaiSinhVien = arrSinhVien[index].loaiSinhVien;

        noiDungTable += `
            <tr>
                <td>${sv.maSinhVien}</td>
                <td>${sv.tenSinhVien}</td>
                <td>${sv.email}</td>
                <td>${sv.soDienThoai}</td>
                <td>${sv.tinhDiemTrungBinh()}</td>
                <td>${sv.xepLoai()}</td>
                <td>
                    <button class = "btn btn-danger" onclick = "xoaSinhVien('${sv.maSinhVien}')">Xoá</button>
                </td>
                <td>
                <button class = "btn btn-success m-0" onclick = "chinhSuaThongTin('${sv.maSinhVien}')">Chỉnh sửa</button>
            </td>
            </tr>
        `

    }
    //DOM đến thẻ tbody - #tableSinhVien gán innerHTML của tbody = noiDungTable
    getSelector('#tableSinhVien').innerHTML = noiDungTable;
    // console.log(noiDungTable);
}
//Định nghĩa sự kiến cho button #btnLuu => Sau khi người dùng thay đổi giá trị

getSelector('#btnLuu').onclick = function (maSV) {
    //Tạo đối tượng lấy thông tin người dùng sau khi thay đổi
    var sv = new SinhVien();
    sv.maSinhVien = getSelector('#maSinhVien').value;
    sv.maSinhVien = getSelector('#maSinhVien').value;
    sv.tenSinhVien = getSelector('#tenSinhVien').value;
    sv.loaiSinhVien = getSelector('#loaiSinhVien').value;
    sv.soDienThoai = getSelector('#soDienThoai').value;
    sv.email = getSelector('#email').value;
    sv.diemToan = getSelector('#diemToan').value;
    sv.diemLy = getSelector('#diemLy').value;
    sv.diemHoa = getSelector('#diemHoa').value;
    sv.diemRenLuyen = getSelector('#diemRenLuyen').value;

    //Tìm ra sinh viên trong mảng có mã trung với mã người dùng sau khi thay đổi

    for (var index = 0; index < mangSinhVien.length; index++) {
        var svUpdate = mangSinhVien[index];
        if (svUpdate.maSinhVien === sv.maSinhVien) {
            //Cập nhật lại từng giá trị thuộc tính của sinh viên trong mảng
            svUpdate.tenSinhVien = sv.tenSinhVien;
            svUpdate.email = sv.email;
            svUpdate.soDienThoai = sv.soDienThoai;
            svUpdate.diemToan = sv.diemToan;
            svUpdate.diemLy = sv.diemLy;
            svUpdate.diemHoa = sv.diemHoa;
            svUpdate.diemRenLuyen = sv.diemRenLuyen;
            svUpdate.loaiSinhVien = sv.loaiSinhVien;

            luuDuLieuLocalStorage();
            //Khi lưu thông tin xong bật nút thêm và nut lưu
            getSelector('#maSinhVien').disabled = false;
            getSelector('#btnXacNhan').disabled = false;
            getSelector('#btnLuu').disabled = true;

            renderTableSinhVien(mangSinhVien);

        }
    }
}

//Định nghĩa hàm khi nhấn nút chỉnh sửa
var chinhSuaThongTin = function (maSV) {
    getSelector('#maSinhVien').disabled = true;
    getSelector('#btnXacNhan').disabled = true;
    getSelector('#btnLuu').disabled = false;

    for (var index = 0; index < mangSinhVien.length; index++) {
        var sv = mangSinhVien[index];
        if (sv.maSinhVien === maSV) {
            //Lấy nội dung sinh viên được click gán lên các input phía trên
            getSelector('#maSinhVien').value = sv.maSinhVien;
            getSelector('#tenSinhVien').value = sv.tenSinhVien;
            getSelector('#email').value = sv.email;
            getSelector('#soDienThoai').value = sv.soDienThoai;
            getSelector('#diemToan').value = sv.diemToan;
            getSelector('#diemLy').value = sv.diemLy;
            getSelector('#diemHoa').value = sv.diemHoa;
            getSelector('#diemRenLuyen').value = sv.diemRenLuyen;
            getSelector('#loaiSinhVien').value = sv.loaiSinhVien;
        }
    }
    // renderTableSinhVien(mangSinhVien);
}

//Định nghĩa hàm khi nhấn nút xoá sinh viên
var xoaSinhVien = function (maSV) {

    for (var index = mangSinhVien.length - 1; index >= 0; index--) {
        var sv = mangSinhVien[index];
        if (sv.maSinhVien === maSV) {
            //Xoá tại vị trị thứ index và xoá 1 phần tử
            mangSinhVien.splice(index, 1);
        }
    }
    //Gọi hàm tạo lại bảng truyển vào arrSinhVien sau khi xoá
    renderTableSinhVien(mangSinhVien);
    //Có thể lưu vào localStorage
    // luuDuLieuLocalStorage();
}

var luuDuLieuLocalStorage = function () {
    // Bước 1: Chuyển dữ liệu thành String
    // Bước 2: dùng phương thức setItem(key,value) để bỏ vào localStorage
    // Với key là tên, value là biến lưu dữ liệu vừa chuyển sang String



    //Chuyển đổi mangSinhVien thành String
    var sMangSinhVien = JSON.stringify(mangSinhVien);

    // Lưu dữ liệu vào Localstorage bằng phương thức setItem(key,value)
    localStorage.setItem('mangSinhVien', sMangSinhVien);

}
var layDuLieuLocalStorage = function () {

    //Kiểm tra xem localStorage có dự liệu không?
    if (localStorage.getItem('mangSinhVien')) {
        //Nếu có - dự liệu sẽ được lấy từ localStorage là dang chuỗi
        var sMangSinhVien = localStorage.getItem('mangSinhVien');

        //Chuyển đổi dạng chuỗi sang mạng Mảng và gán cho biến mangSinhVien
        mangSinhVien = JSON.parse(sMangSinhVien);

        //Gọi hàm tạo bảng sinh viên từ mangSinhVien được lấy giá trị từ localStorage
        renderTableSinhVien(mangSinhVien);
    }
}




//Gọi hàm load data từ storage khi browser load
layDuLieuLocalStorage(mangSinhVien);