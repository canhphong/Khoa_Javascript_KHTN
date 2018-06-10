//************** Xử lý Lưu trữ ***********
function Doc_Du_lieu_JSON() {
  
  var Xu_ly_HTTP = new XMLHttpRequest()
  Xu_ly_HTTP.open("GET", "../Du_lieu_Luu_tru/Ho_ten.json", false)
  Xu_ly_HTTP.send("")
  var Chuoi_JSON = Xu_ly_HTTP.responseText.trim()
 
  if (Chuoi_JSON != "") 
    Du_lieu =  Chuoi_JSON
  
    return Du_lieu
}

function Doc_Du_lieu_TXT() {
 
  var Du_lieu =""  
  var Xu_ly_HTTP = new XMLHttpRequest()
  Xu_ly_HTTP.open("GET", "../Du_lieu_Luu_tru/Ho_ten.txt", false)
  Xu_ly_HTTP.send("")
  var Chuoi_TXT = Xu_ly_HTTP.responseText.trim()
 
  if (Chuoi_TXT != "") 
    Du_lieu =  Chuoi_TXT
  return Du_lieu
}