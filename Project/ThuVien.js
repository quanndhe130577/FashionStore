   
 function xlDangNhap(ten, mkhau)     {    
     if (ten.toLowerCase()=="thienthanh")            
           if (mkhau=="abc") alert('Đăng nhập thành công');            
        else alert('Sai mật khẩu'); 
    else             alert('Không có user này');    
 }  


function xlTim2(gTri, e)  {    
    var chuoi ="thiên thanh,shop,thời trang,giầy dép,quần áo,mắt kính"; 
    var chuoitim  = gTri.trim().toLowerCase();    
    if (e.keyCode==13)  {   
         if (chuoi.indexOf(chuoitim)>=0)    alert('Tìm thấy');  
        else    alert('Không tìm thấy');  
    }
}

function xlTim () {
    var chuoi ="thiên thanh,shop,thời trang,giầy dép,quần áo,mắt kính"; 
    var chuoitim  = document.getElementById("txtTim");  
    if (chuoi.indexOf(chuoitim)>=0)    alert('Tìm thấy');  
        else    alert('Không tìm thấy');   
}

function xlDangky() {
    var kq ="";
    var username = document.getElementById("tendangnhap");
    var pass = document.getElementById("matkhau");
    var hovaten = document.getElementById("hovaten");
    var gioitinh = document.getElementsByName("gioitinh");
    var ngaysinh = document.getElementById("ngaysinh");
    var nghenghiep = document.getElementById("nghenghiep");
    var email = document.getElementById("email");
    var dienthoai = document.getElementById("dienthoai");
    var ghichu = document.getElementById("ghichu");
    kq = " Xác nhận lại thông tin: \n";
    kq += " Tên đăng nhập: " + username.value + "\n";
    kq += " Mật khẩu: " + pass.value + "\n";
    kq += " Họ và tên: " + hovaten.value + "\n";
    kq += " Giới tính : ";
        for (var i = 0; i < gioitinh.length; i++){
            if (gioitinh[i].checked === true){
                kq += gioitinh[i].value;
            }
        }
    kq += "\n";
    kq += " Ngày sinh: " + ngaysinh.value + "\n";
    kq += " Nghề nghiệp: " + nghenghiep.options[nghenghiep.selectedIndex].text + "\n";
    kq += " Email: " + email.value + "\n";
    kq += " Điện thoại: " + dienthoai.value + "\n";
    kq += " Ghi chú: " + ghichu.value + "\n";

    confirm(kq);

}

function openDangky () {
    window.open("Dangky.html", "_blank");
}

