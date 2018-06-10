var Dia_chi_Dich_vu = "http://localhost:1000"

function Doc_Du_lieu_Dien_thoai() {
    var Du_lieu = {}
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Doc_Du_lieu_Dien_thoai`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    Xu_ly_HTTP.send("")
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON)
    return Du_lieu
}

function Ghi_Thong_tin_Dien_thoai_Moi(Dien_thoai){
    var Kq=""
    var Chuoi_JSON = JSON.stringify(Dien_thoai)
    var Tham_so=`Ma_so_Xu_ly=Ghi_Thong_tin_Dien_thoai_Moi`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    var Xu_ly_HTTP = new XMLHttpRequest() 
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    Xu_ly_HTTP.send(Chuoi_JSON)
    var Kq = Xu_ly_HTTP.responseText
    return Kq 
  }