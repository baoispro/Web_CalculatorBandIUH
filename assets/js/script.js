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
select = document.getElementById("select")
TBHK = document.getElementById("TBHK")
TBMH = document.getElementById("TBMH")
btnAddColumn = document.getElementById("btnAddColumn")
btnAddColumnTL = document.getElementById("btnAddColumnTL")
history_area_HK=document.getElementById("history-area-HK")
history_area_TL=document.getElementById("history-area-TL")
TBTL = document.getElementById("TBTL")

var diemThuongXuyen = [tx1,tx2,tx3,tx4,tx5,tx6,tx7,tx8,tx9]
var diemThucHanh = [th1,th2,th3,th4,th5]

function tinhDiem() {
    diemTongKet.innerHTML="Điểm tổng kết:&nbsp;"
    thangDiemBon.innerHTML="Thang điểm 4:&nbsp;"
    diemChu.innerHTML ="Điểm chữ:&nbsp;"
    xepLoai.innerHTML ="Xếp loại:&nbsp;"
    dat.innerHTML="Đạt:&nbsp;"
    var kq;
    var tbDiemThuongXuyen = tinhDiemCoNhieuCot(diemThuongXuyen);
    var tbDiemThucHanh = tinhDiemCoNhieuCot(diemThucHanh);
    
    if(!soTinChi.value==false && !giuaKi.value==false && tbDiemThucHanh==null && tbDiemThuongXuyen==null && !cuoiKi.value){
        kq=giuaKi.value
        diemTongKet.innerHTML+= giuaKi.value
    }
    else if(!soTinChi.value==false && !giuaKi.value && tbDiemThucHanh!=null && tbDiemThuongXuyen==null && !cuoiKi.value){
        kq=tbDiemThucHanh
        diemTongKet.innerHTML+= tbDiemThucHanh
    }
    else if(!soTinChi.value==false && !giuaKi.value && tbDiemThucHanh==null && tbDiemThuongXuyen!=null && !cuoiKi.value){
        kq=tbDiemThuongXuyen
        diemTongKet.innerHTML+= tbDiemThuongXuyen
    }
    else if(!soTinChi.value==false && !giuaKi.value && tbDiemThucHanh==null && tbDiemThuongXuyen==null && !cuoiKi.value==false){
        kq=cuoiKi.value
        diemTongKet.innerHTML+= cuoiKi.value
    }
    else if(tbDiemThucHanh==null && tbDiemThuongXuyen!=null && !giuaKi.value==false && !cuoiKi.value==false && !soTinChi.value==false){
        kq = ((tbDiemThuongXuyen*20+giuaKi.value*30+cuoiKi.value*50)/100).toFixed(1)
        diemTongKet.innerHTML += ((tbDiemThuongXuyen*20+giuaKi.value*30+cuoiKi.value*50)/100).toFixed(1)
    }
    else if(tbDiemThuongXuyen==null && !giuaKi.value && !cuoiKi.value && !soTinChi.value==false){
        kq=tbDiemThucHanh;
        diemTongKet.innerHTML+=tbDiemThucHanh
    }
    else if(tbDiemThucHanh!=null && tbDiemThuongXuyen!=null && !giuaKi.value==false && !cuoiKi.value==false && !soTinChi.value==false){
        kq = ((((tbDiemThuongXuyen * 20 + giuaKi.value * 30 + cuoiKi.value * 50) / 100)*(soTinChi.value-1)+parseFloat(tbDiemThucHanh))/soTinChi.value).toFixed(1)
        diemTongKet.innerHTML += ((((tbDiemThuongXuyen * 20 + giuaKi.value * 30 + cuoiKi.value * 50) / 100)*(soTinChi.value-1)+parseFloat(tbDiemThucHanh))/soTinChi.value).toFixed(1)
    }
    else{
        diemTongKet.innerHTML +="Không thể tính được do thiếu dữ liệu";
        thangDiemBon.innerHTML += ""
        diemChu.innerHTML += ""
        xepLoai.innerHTML += ""
        dat.innerHTML +=""
    }
    if(kq>=9 && kq<=10){
        thangDiemBon.innerHTML += "4.0"
        diemChu.innerHTML += "A+"
        xepLoai.innerHTML += "Giỏi"
        dat.innerHTML +="Có"
        history_area.value+= "-"+soTinChi.value+" "+"và"+" "+kq+" "+"và"+" "+"4.0"+"\n"
    }
    else if(kq>=8.5 && kq<=8.9){
        thangDiemBon.innerHTML += "3.8"
        diemChu.innerHTML += "A"
        xepLoai.innerHTML += "Giỏi"
        dat.innerHTML+="Có"
        history_area.value+= "-"+soTinChi.value+" "+"và"+" "+kq+" "+"và"+" "+"3.8"+"\n"
    }
    else if(kq>=8 && kq<=8.4){
        thangDiemBon.innerHTML += "3.5"
        diemChu.innerHTML += "B+"
        xepLoai.innerHTML+="Khá"
        dat.innerHTML+="Có"
        history_area.value+= "-"+soTinChi.value+" "+"và"+" "+kq+" "+"và"+" "+"3.5"+"\n"
    }
    else if(kq>=7 && kq<=7.9){
        thangDiemBon.innerHTML += "3.0"
        diemChu.innerHTML += "B"
        xepLoai.innerHTML+="Khá"
        dat.innerHTML+="Có"
        history_area.value+= "-"+soTinChi.value+" "+"và"+" "+kq+" "+"và"+" "+"3.0"+"\n"
    }
    else if(kq>=6 && kq<=6.9){
        thangDiemBon.innerHTML += "2.5"
        diemChu.innerHTML += "C+"
        xepLoai.innerHTML+="Trung bình"
        dat.innerHTML+="Có"
        history_area.value+= "-"+soTinChi.value+" "+"và"+" "+kq+" "+"và"+" "+"2.5"+"\n"
    }
    else if(kq>=5.5 && kq<=5.9){
        thangDiemBon.innerHTML += "2.0"
        diemChu.innerHTML += "C"
        xepLoai.innerHTML+="Trung bình"
        dat.innerHTML+="Có"
        history_area.value+= "-"+soTinChi.value+" "+"và"+" "+kq+" "+"và"+" "+"2.0"+"\n"
    }
    else if(kq>=5 && kq<=5.4){
        thangDiemBon.innerHTML += "1.5"
        diemChu.innerHTML += "D+"
        xepLoai.innerHTML+="Yếu"
        dat.innerHTML+="Có"
        history_area.value+= "-"+soTinChi.value+" "+"và"+" "+kq+" "+"và"+" "+"1.5"+"\n"
    }
    else if(kq>=4 && kq<=4.9){
        thangDiemBon.innerHTML += "1.0"
        diemChu.innerHTML += "D"
        xepLoai.innerHTML+="Yếu"
        dat.innerHTML+="Có"
        history_area.value+= "-"+soTinChi.value+" "+"và"+" "+kq+" "+"và"+" "+"1.0"+"\n"
    }
    else if(kq>=0 && kq<=3.9){
        thangDiemBon.innerHTML += "0.0"
        diemChu.innerHTML += "F"
        xepLoai.innerHTML += "Kém"
        dat.innerHTML+="Học lại"
        history_area.value+= "-"+soTinChi.value+" "+"và"+" "+kq+" "+"và"+" "+"0.0"+"\n"
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
    diemTongKet.innerHTML="Điểm tổng kết:&nbsp;"
    thangDiemBon.innerHTML="Thang điểm 4:&nbsp;"
    diemChu.innerHTML ="Điểm chữ:&nbsp;"
    xepLoai.innerHTML ="Xếp loại:&nbsp;"
    dat.innerHTML="Đạt:&nbsp;"
    var input = document.querySelectorAll("input")
    for(var i=0;i<input.length;i++){
        input[i].value=""
    }
}
function toggle(){
    if(select.value=="diemTBMH"){
        TBMH.style.display = "block"
        TBHK.style.display = "none"
        TBTL.style.display = "none"
        btnAddColumn.style.display = "none"
        btnAddColumnTL.style.display = "none"
    }
    else if(select.value=="diemTBTL"){
        TBHK.style.display = "none"
        TBMH.style.display = "none"
        TBTL.style.display = "block"
        btnAddColumn.style.display = "none"
        btnAddColumnTL.style.display = "block"
    }
    else{
        TBHK.style.display = "block"
        TBMH.style.display = "none"
        TBTL.style.display = "none"
        btnAddColumn.style.display = "block"
        btnAddColumnTL.style.display = "none"
    }
}

function changeTab(element,textArea,string){
    tab_active = document.getElementsByClassName("active")
    for (var i = 0; i < tab_active.length; i++) {
        tab_active[i].classList.remove("active");
    }
    txt_block = document.getElementsByClassName("block")
    for (var i = 0; i < txt_block.length; i++) {
        txt_block[i].classList.remove("block");
    }
    element.classList.add("active")
    txtarea = document.getElementById(textArea)
    txtarea.classList.add("block")
    luuY = document.getElementById("luuY")
    luuY.innerHTML = string
}
// tạo cột sẵn
function createRow() {
    table_HK = document.getElementById("table_HK")
    var tr = document.createElement("tr")
    table_HK.appendChild(tr)
    var td1 = document.createElement("td")
    var td2 = document.createElement("td")
    var td3 = document.createElement("td")
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    var input1 = document.createElement("input")
    var input2 = document.createElement("input")
    var input3 = document.createElement("input")
    class1=["col-xl-12","col-md-12", "col-lg-12","col-xxl-12","col-sm-12","col-xs-12","col-12", "tinChi"]
    class2=["col-xl-12","col-md-12", "col-lg-12","col-xxl-12","col-sm-12","col-xs-12","col-12", "he10"]
    class3=["col-xl-12","col-md-12", "col-lg-12","col-xxl-12","col-sm-12","col-xs-12","col-12", "he4"]
    class1.forEach(function(className) {
        input1.classList.add(className);
    });
      
    class2.forEach(function(className) {
        input2.classList.add(className);
    });
      
    class3.forEach(function(className) {
        input3.classList.add(className);
    });
    td1.appendChild(input1)
    td2.appendChild(input2)
    td3.appendChild(input3)
}
function addColumn(){
    createRow()
}

function tinhDiemHK(){
    tb10= document.getElementById("tb10")
    tb4= document.getElementById("tb4")
    xlhl= document.getElementById("xlhl")
    tb10.innerHTML="Điểm trung bình học kì hệ 10:&nbsp;"
    tb4.innerHTML ="Điểm trung bình học kì hệ 4:&nbsp;"
    xlhl.innerHTML = "Xếp loại học lực học kì:&nbsp;"
    var tongSoTinChi = 0;
    var tongSoHe10 =0;
    var tongSoHe4 = 0;
    var tc = document.getElementsByClassName("tinChi")
    var td10 = document.getElementsByClassName("he10")
    var td4 = document.getElementsByClassName("he4")
    var flag = true
    for (let index = 0; index < tc.length; index++) {
        if(!tc[index].value||!td10[index].value||!td4[index].value){
            flag=false
        }
    }
    if(flag==true){
        for (let index = 0; index < tc.length; index++) {
            tongSoTinChi+=parseFloat(tc[index].value)
            tongSoHe10+=td10[index].value*tc[index].value
            tongSoHe4+=td4[index].value*tc[index].value
        }
        tb10.innerHTML+=(tongSoHe10/tongSoTinChi).toFixed(1)
        tb4.innerHTML+=(tongSoHe4/tongSoTinChi).toFixed(2)
        var kq = (tongSoHe4/tongSoTinChi).toFixed(2)
        var kq10 = (tongSoHe10/tongSoTinChi).toFixed(1)
        if(kq>=3.6 && kq<=4){
            xlhl.innerHTML += "Xuất xắc"
        }
        else if(kq>=3.2 && kq<=3.59){
            xlhl.innerHTML += "Giỏi"
        }
        else if(kq>=2.5 && kq<=3.19){
            xlhl.innerHTML += "Khá"
        }
        else if(kq>=2 && kq<=2.49){
            xlhl.innerHTML += "Trung bình"
        }
        else{
            xlhl.innerHTML += "Yếu"
        }
        history_area_HK.value+="-"+tongSoTinChi+" "+"và"+" "+kq10+" "+"và"+" "+kq+"\n"
    }
    else{
        tb10.innerHTML+="Không đủ dữ kiện để tính"
    }
}

function xoaTrangHK() {
    var table_HK = document.getElementById("table_HK");
    for (let index = table_HK.rows.length - 1; index > 1; index--) {
        table_HK.deleteRow(index);
    }
    var tb10= document.getElementById("tb10")
    var tb4= document.getElementById("tb4")
    var xlhl= document.getElementById("xlhl")
    tb10.innerHTML="Điểm trung bình học kì hệ 10:&nbsp;"
    tb4.innerHTML ="Điểm trung bình học kì hệ 4:&nbsp;"
    xlhl.innerHTML = "Xếp loại học lực học kì:&nbsp;"
    var tc = document.getElementsByClassName("tinChi")
    var td10 = document.getElementsByClassName("he10")
    var td4 = document.getElementsByClassName("he4")
    for (let index = 0; index < tc.length; index++) {
        tc[index].value=""
        td10[index].value=""
        td4[index].value=""
    }
}
