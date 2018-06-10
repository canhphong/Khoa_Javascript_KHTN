var Dia_chi_Dich_vu = "http://localhost:1000"
//************** Xử lý Lưu trữ ***********

// Đọc dữ liệu Cửa hàng
function Doc_Du_lieu_Cua_hang() {
  var Du_lieu = {}
  var Xu_ly_HTTP = new XMLHttpRequest()
  var Tham_so = `Ma_so_Xu_ly=Doc_Thong_tin_Cua_hang`
  var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
  Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
  Xu_ly_HTTP.send("")
  var Chuoi_JSON = Xu_ly_HTTP.responseText

  if (Chuoi_JSON != "")
    Du_lieu = JSON.parse(Chuoi_JSON)
  return Du_lieu
}

// Đọc dữ liệu Điên thoại
function Doc_Du_lieu_Dien_thoai() {
  var Du_lieu = {}
  var Xu_ly_HTTP = new XMLHttpRequest()
  var Tham_so = `Ma_so_Xu_ly=Doc_Thong_tin_Dien_thoai`
  var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
  Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
  Xu_ly_HTTP.send("")
  var Chuoi_JSON = Xu_ly_HTTP.responseText

  if (Chuoi_JSON != "")
    Du_lieu = JSON.parse(Chuoi_JSON)
  return Du_lieu
}


// Đọc dữ liệu Hoc vien
function Doc_Du_lieu_Hoc_vien() {
  var Du_lieu = {}
  var Xu_ly_HTTP = new XMLHttpRequest()
  var Tham_so = `Ma_so_Xu_ly=Doc_Thong_tin_Hoc_vien`
  var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
  Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
  Xu_ly_HTTP.send("")
  var Chuoi_JSON = Xu_ly_HTTP.responseText

  if (Chuoi_JSON != "")
    Du_lieu = JSON.parse(Chuoi_JSON)
  return Du_lieu
}


// Ham Ghi_Thong_tin_Cua_hang_Moi
function Ghi_Thong_tin_Cua_hang_Moi(Cua_hang) {
  var Kq = ""
  var Chuoi_Goi = JSON.stringify(Cua_hang)
  var Tham_so = `Ma_so_Xu_ly=Ghi_Thong_tin_Cua_hang_Moi`
  var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
  var Xu_ly_HTTP = new XMLHttpRequest()
  Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
  Xu_ly_HTTP.send(Chuoi_Goi)
  var Kq = Xu_ly_HTTP.responseText
  return Kq
}

