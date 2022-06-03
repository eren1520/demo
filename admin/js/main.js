var danhSachTuyenSinh = new DanhSachTuyenSinh();
var kiemTra = new Validation();
//bo sung thuoc tinh
// TuyenSinh.prototype.NhanhHT = '';

this.NhanhHT = function() {
    console.log(nganh);
    if (this.nganh == 1) {
        this.NhanhHT = 'Công nghệ thông tin';
    } else if (this.nganh == 2) {
        this.NhanhHT = 'Quản trị khinh doanh';
    } else if (this.nganh == 3) {
        this.NhanhHT = 'Ngôn ngữ nhật';
    } else if (this.nganh == 4) {
        this.NhanhHT = 'Ngôn ngữ hàn';
    } else {
        this.NhanhHT = 'Ngôn ngữ anh';
    }
    console.log(NhanhHT);
}
function DomId(id) {
    var element = document.getElementById(id);
    return element;
}
getStorage();

function ThemSinhVien() {
    var masv = DomId("masv").value;
    var namesv = DomId("namesv").value;
    var phonesv = DomId("phonesv").value;
    var emailsv = DomId("emailsv").value;
    var dresssv = DomId("dresssv").value;
    var nganh = DomId("nganh").value



    //kiem tra validation
    var loi = 0;
    if (kiemTraDauVao("masv", masv,"erro__masv") == true) {
        loi++;
    }
    if(danhSachTuyenSinh.maduynhat(masv)==true){
        document.getElementById("erro__masv__trung").innerHTML = ' mã đã tồn tại !';
        document.getElementById("erro__masv__trung").style.display = 'block';
        DomId("masv").style.borderColor = "red";
        loi++
    }else{
        DomId("masv").style.borderColor = "green";
        document.getElementById("erro__masv__trung").innerHTML = '';
        document.getElementById("erro__masv__trung").style.display = 'none';
        DomId("masv").style.borderColor = "green";

    }
    if (kiemTraDauVao("namesv", namesv, "erro__name") == true) {

        loi++;
    }
    if (kiemTra.kiemTraMail(emailsv)) {
        DomId("emailsv").style.borderColor = "green";
        document.getElementById("erro__mail").innerHTML = '';
        document.getElementById("erro__mail").style.display = 'none';
    } else {
        DomId("emailsv").style.borderColor = "red";
        document.getElementById("erro__mail").innerHTML = ' mời nhập mail hợp lệ !';
        document.getElementById("erro__mail").style.display = 'block';
        loi++;
    }

    if (kiemTra.kiemTraPhone(phonesv)) {
        DomId("phonesv").style.borderColor = "green";
        document.getElementById("erro__sdt").innerHTML = '';
        document.getElementById("erro__sdt").style.display = 'none';
    } else {
        DomId("phonesv").style.borderColor = "red";
        document.getElementById("erro__sdt").innerHTML = ' mời nhập sđt hợp lệ';
        document.getElementById("erro__sdt").style.display = 'block';
        loi++;
    }

    if (kiemTra.KimTraSelect(nganh)) {
        DomId("nganh").style.borderColor = "green";
        document.getElementById("erro__nganh").innerHTML = '';
        document.getElementById("erro__nganh").style.display = 'none';
    } else {
        DomId("nganh").style.borderColor = "red";
        document.getElementById("erro__nganh").innerHTML = ' mời chọn ngành';
        document.getElementById("erro__nganh").style.display = 'block';
        loi++;
    }

    if (kiemTraDauVao("dresssv", dresssv, "erro__address") == true) {
        loi++;
    }

    if (loi != 0) {
        return;
    }

    //them sinh vien
    console.log(NhanhHT);
    var sinhVien = new TuyenSinh(masv, namesv, phonesv, emailsv, dresssv, nganh, NhanhHT)
    console.log(sinhVien)
    danhSachTuyenSinh.ThemSinhVien(sinhVien);
    capNhatDanhSach(danhSachTuyenSinh);
}

function kiemTraDauVao(id, value,iderro) {
    if (kiemTra.kiemTraRong(value) == true) {
        document.getElementById(iderro).innerHTML = ' không được bỏ trống !';
        document.getElementById(iderro).style.display = 'block';
        DomId(id).style.borderColor = "red";
        return true;
    } else {
        DomId(id).style.borderColor = "green";
        document.getElementById(iderro).innerHTML = '';
        document.getElementById(iderro).style.display = 'none';
        return false;
    }
}



//Cap nhat danh sach sinh vien
function capNhatDanhSach(DanhSachTuyenSinh) {
    var listTablesv = DomId("tbodysinhvien");
    listTablesv.innerHTML = "";
    for (var i = 0; i < DanhSachTuyenSinh.DSTS.length; i++) {
        var sv = danhSachTuyenSinh.DSTS[i];
        console.log(sv);
        var trSinhVien = document.createElement("tr");
        trSinhVien.id = sv.MaSV;
        trSinhVien.className = "trSinhVien";
        trSinhVien.setAttribute("onclick","ChinhSuaSinhVien('"+sv.MaSV+"')");
        var tdCheckbox = document.createElement('td');
        var ckMaSinhVien = document.createElement('input');
        console.log(ckMaSinhVien);
        ckMaSinhVien.setAttribute("class","ckbMaSV");
        ckMaSinhVien.setAttribute("type","checkbox");
        ckMaSinhVien.setAttribute("value",sv.MaSV);
        tdCheckbox.appendChild(ckMaSinhVien);
        var tdMaSv = TaotheTD("MaSV", sv.MaSV);
        var tdHoTen = TaotheTD("Name", sv.Name);
        var tdAdress = TaotheTD("QueQuan", sv.QueQuan);
        var tdphone = TaotheTD("Sdt", sv.Sdt);
        var tdMasv = TaotheTD("Mail", sv.Mail);
        var tdNganh = TaotheTD("Nganh", sv.Nganh);

        //addpen vao td tr
        trSinhVien.appendChild(tdCheckbox);
        trSinhVien.appendChild(tdMaSv);
        trSinhVien.appendChild(tdHoTen);
        trSinhVien.appendChild(tdAdress);
        trSinhVien.appendChild(tdphone);
        trSinhVien.appendChild(tdMasv);
        trSinhVien.appendChild(tdNganh);

        //addpen cac tr vao tbody
        listTablesv.appendChild(trSinhVien);
    }
}

function TaotheTD(classname, value) {
    var td = document.createElement("td");
    td.className = classname;
    td.innerHTML = value;
    return td;
}


function setStorage() {
    //Chuyển đổi object mảng danh sách sinh viên thành chuỗi json
    var jsonDanhSachTuyenSinh = JSON.stringify(danhSachTuyenSinh.DSTS);
    console.log(jsonDanhSachTuyenSinh );
    //Rồi đem chuỗi json lưu vào storage và đặt tên là DanhSachSV
    localStorage.setItem("DanhSachTS", jsonDanhSachTuyenSinh);
    console.log(jsonDanhSachTuyenSinh );
}

function getStorage() {
    //Lấy ra chuỗi json là mảng danhsachsinhvien thông qua tên DanhSachSV
    var jsonDanhSachTuyenSinh = localStorage.getItem("DanhSachTS");
    var mangDSTS = JSON.parse(jsonDanhSachTuyenSinh);
    danhSachTuyenSinh.DSTS = mangDSTS;
    capNhatDanhSach(danhSachTuyenSinh);

}

function deleteSV(){
    var lstMaSV = document.getElementsByClassName("ckbMaSV");
    var lstMaSVDuocChon = [];
    for(i=0; i<lstMaSV.length; i++){
        if(lstMaSV[i].checked){
            console.log(lstMaSV[i]);
            lstMaSVDuocChon.push(lstMaSV[i].value);
            console.log(lstMaSVDuocChon);
        }
    }
    if(confirm("Bạn chắc chắn muốn xóa!")){
        danhSachTuyenSinh.XoaSinhVien(lstMaSVDuocChon);
        capNhatDanhSach(danhSachTuyenSinh);
    }

    
}

function btnTimKiem(){
    var tuKhoa = DomId("tukhoa").value;
    console.log(tuKhoa);
    var lstsinhvien = danhSachTuyenSinh.TimKiemSinhVien(tuKhoa);
    capNhatDanhSach(lstsinhvien);
}

function ChinhSuaSinhVien(masv){
    var sv = danhSachTuyenSinh.timsv(masv);
    console.log(sv);
    if(sv != null){
        DomId("masv").value = sv.MaSV;
        DomId("namesv").value = sv.Name;
        DomId("phonesv").value = sv.Sdt;
        DomId("emailsv").value = sv.Mail;
        DomId("dresssv").value = sv.QueQuan;
        DomId("nganh").value = sv.Nganh;
    }
}

function CapNhatSV(){
    var masv = DomId("masv").value;
    var namesv = DomId("namesv").value;
    var phonesv = DomId("phonesv").value;
    var emailsv = DomId("emailsv").value;
    var dresssv = DomId("dresssv").value;
    var nganh = DomId("nganh").value

    
    //kiem tra validation
    var loi = 0;
    if (kiemTraDauVao("masv", masv,"erro__masv") == true) {
        loi++;
    }

    if (kiemTraDauVao("namesv", namesv, "erro__name") == true) {

        loi++;
    }
    if (kiemTra.kiemTraMail(emailsv)) {
        DomId("emailsv").style.borderColor = "green";
        document.getElementById("erro__mail").innerHTML = '';
        document.getElementById("erro__mail").style.display = 'none';
    } else {
        DomId("emailsv").style.borderColor = "red";
        document.getElementById("erro__mail").innerHTML = ' mời nhập mail hợp lệ !';
        document.getElementById("erro__mail").style.display = 'block';
        loi++;
    }

    if (kiemTra.kiemTraPhone(phonesv)) {
        DomId("phonesv").style.borderColor = "green";
        document.getElementById("erro__sdt").innerHTML = '';
        document.getElementById("erro__sdt").style.display = 'none';
    } else {
        DomId("phonesv").style.borderColor = "red";
        document.getElementById("erro__sdt").innerHTML = ' mời nhập sđt hợp lệ';
        document.getElementById("erro__sdt").style.display = 'block';
        loi++;
    }

    if (kiemTra.KimTraSelect(nganh)) {
        DomId("nganh").style.borderColor = "green";
        document.getElementById("erro__nganh").innerHTML = '';
        document.getElementById("erro__nganh").style.display = 'none';
    } else {
        DomId("nganh").style.borderColor = "red";
        document.getElementById("erro__nganh").innerHTML = ' mời chọn ngành';
        document.getElementById("erro__nganh").style.display = 'block';
        loi++;
    }

    if (kiemTraDauVao("dresssv", dresssv, "erro__address") == true) {
        loi++;
    }

    if (loi != 0) {
        return;
    }


    //sua sinh vien
    var sinhVien = new TuyenSinh(masv, namesv, phonesv, emailsv, dresssv, nganh)
    var dssv = danhSachTuyenSinh.SuaSinhVien(sinhVien);
    console.log(dssv);
    capNhatDanhSach(dssv);
}

function LamMoi(){
    DomId("masv").value = "";
    DomId("namesv").value = "";
    DomId("phonesv").value = "";
    DomId("emailsv").value = "";
    DomId("dresssv").value = "";
    DomId("nganh").value = 0;
}


