soTinChi = document.getElementById("tinChi")
giuaKi = document.getElementById("giuaKi")
tx1 = document.getElementById("tx1")
tx2 = document.getElementById("tx2")
tx3 = document.getElementById("tx3")
tx4 = document.getElementById("tx4")
tx5 = document.getElementById("tx5")
tx6 = document.getElementById("tx6")
tx7 = document.getElementById("tx7")
tx8 = document.getElementById("tx8")
tx9 = document.getElementById("tx9")
th1 = document.getElementById("th1")
th2 = document.getElementById("th2")
th3 = document.getElementById("th3")
th4 = document.getElementById("th4")
th5 = document.getElementById("th5")
cuoiKi = document.getElementById("cuoiKi")
diemTongKet = document.getElementById("dtk")
thangDiemBon = document.getElementById("td4")
diemChu = document.getElementById("dc")
xepLoai = document.getElementById("xl")
dat = document.getElementById("dat")
history_area = document.getElementById("history-area")


var diemThuongXuyen = [tx1,tx2,tx3,tx4,tx5,tx6,tx7,tx8,tx9]
var diemThucHanh = [th1,th2,th3,th4,th5]

function tinhDiem() {
    diemTongKet.innerHTML="Điểm tổng kết:"
    thangDiemBon.innerHTML="Thang điểm 4:"
    diemChu.innerHTML ="Điểm chữ:"
    xepLoai.innerHTML ="Xếp loại:"
    dat.innerHTML="Đạt:"
    var kq;
    var tbDiemThuongXuyen = tinhDiemCoNhieuCot(diemThuongXuyen);
    var tbDiemThucHanh = tinhDiemCoNhieuCot(diemThucHanh);
    if(!tbDiemThuongXuyen || !giuaKi.value || !cuoiKi.value|| !soTinChi.value){
        diemTongKet.innerHTML +="";
        thangDiemBon.innerHTML += ""
        diemChu.innerHTML += ""
        xepLoai.innerHTML += ""
        dat.innerHTML +=""
    }
    else if(tbDiemThucHanh==null){
        kq = ((tbDiemThuongXuyen*20+giuaKi.value*30+cuoiKi.value*50)/100).toFixed(1)
        diemTongKet.innerHTML += ((tbDiemThuongXuyen*20+giuaKi.value*30+cuoiKi.value*50)/100).toFixed(1)
    }
    else{
        kq = ((((tbDiemThuongXuyen * 20 + giuaKi.value * 30 + cuoiKi.value * 50) / 100)*(soTinChi.value-1)+parseFloat(tbDiemThucHanh))/soTinChi.value).toFixed(1)
        diemTongKet.innerHTML += ((((tbDiemThuongXuyen * 20 + giuaKi.value * 30 + cuoiKi.value * 50) / 100)*(soTinChi.value-1)+parseFloat(tbDiemThucHanh))/soTinChi.value).toFixed(1)
    }
    if(kq>=9 && kq<=10){
        thangDiemBon.innerHTML += "4.0"
        diemChu.innerHTML += "A+"
        xepLoai.innerHTML += "Giỏi"
        dat.innerHTML +="Có"
        history_area.value+= "-"+soTinChi.value+","+kq+","+"4.0"+"\n"
    }
    else if(kq>=8.5 && kq<=8.9){
        thangDiemBon.innerHTML += "3.8"
        diemChu.innerHTML += "A"
        xepLoai.innerHTML += "Giỏi"
        dat.innerHTML+="Có"
        history_area.value+= "-"+soTinChi.value+","+kq+","+"3.8"+"\n"
    }
    else if(kq>=8 && kq<=8.4){
        thangDiemBon.innerHTML += "3.5"
        diemChu.innerHTML += "B+"
        xepLoai.innerHTML+="Khá"
        dat.innerHTML+="Có"
        history_area.value+= "-"+soTinChi.value+","+kq+","+"3.5"+"\n"
    }
    else if(kq>=7 && kq<=7.9){
        thangDiemBon.innerHTML += "3.0"
        diemChu.innerHTML += "B"
        xepLoai.innerHTML+="Khá"
        dat.innerHTML+="Có"
        history_area.value+= "-"+soTinChi.value+","+kq+","+"3.0"+"\n"
    }
    else if(kq>=6 && kq<=6.9){
        thangDiemBon.innerHTML += "2.5"
        diemChu.innerHTML += "C+"
        xepLoai.innerHTML+="Trung bình"
        dat.innerHTML+="Có"
        history_area.value+= "-"+soTinChi.value+","+kq+","+"2.5"+"\n"
    }
    else if(kq>=5.5 && kq<=5.9){
        thangDiemBon.innerHTML += "2.0"
        diemChu.innerHTML += "C"
        xepLoai.innerHTML+="Trung bình"
        dat.innerHTML+="Có"
        history_area.value+= "-"+soTinChi.value+","+kq+","+"2.0"+"\n"
    }
    else if(kq>=5 && kq<=5.4){
        thangDiemBon.innerHTML += "1.5"
        diemChu.innerHTML += "D+"
        xepLoai.innerHTML+="Yếu"
        dat.innerHTML+="Có"
        history_area.value+= "-"+soTinChi.value+","+kq+","+"1.5"+"\n"
    }
    else if(kq>=4 && kq<=4.9){
        thangDiemBon.innerHTML += "1.0"
        diemChu.innerHTML += "D"
        xepLoai.innerHTML+="Yếu"
        dat.innerHTML+="Có"
        history_area.value+= "-"+soTinChi.value+","+kq+","+"1.0"+"\n"
    }
    else if(kq>=0 && kq<=3.9){
        thangDiemBon.innerHTML += "0.0"
        diemChu.innerHTML += "F"
        xepLoai.innerHTML += "Kém"
        dat.innerHTML+="Học lại"
        history_area.value+= "-"+soTinChi.value+","+kq+","+"0.0"+"\n"
    }
}

function tinhDiemCoNhieuCot(array) {
    var tongDiem = 0;
    var soLuongDiemDuocNhap = 0;
    var kq;
    var soLuong = array.length;
    for (let index = 0; index < array.length; index++) {
        if(!array[index].value){
            soLuong=soLuong-1
        }
        else{
            tongDiem += parseFloat(array[index].value)
            soLuongDiemDuocNhap=soLuongDiemDuocNhap+1;
        }
        if(index==array.length-1 && soLuong==0){
            tongDiem = null;
            return kq = null;
        }
    }
    if(tongDiem!= null){
        kq = tongDiem/soLuongDiemDuocNhap
        kq = kq.toFixed(1)
    }
    return kq;
}

function xoaTrang() {
    diemTongKet.innerHTML="Điểm tổng kết:"
    thangDiemBon.innerHTML="Thang điểm 4:"
    diemChu.innerHTML ="Điểm chữ:"
    xepLoai.innerHTML ="Xếp loại:"
    dat.innerHTML="Đạt:"
    var input = document.querySelectorAll("input")
    for(var i=0;i<input.length;i++){
        input[i].value=""
    }
}