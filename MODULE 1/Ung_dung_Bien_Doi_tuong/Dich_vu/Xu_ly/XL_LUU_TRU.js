
var File = require("fs")
var Duong_dan_Thu_muc_Du_lieu = "Du_lieu"


function Doc_Thong_tin_Dien_thoai() {
  var Duong_dan = Duong_dan_Thu_muc_Du_lieu + "//IPHONE_1.json"
  var Chuoi_JSON = File.readFileSync(Duong_dan, "UTF-8")
  var Thong_tin_Dien_thoai = JSON.parse(Chuoi_JSON)
  return Thong_tin_Dien_thoai
}
function Ghi_Thong_tin_Dien_thoai(Dien_thoai) {
  var Kq = "OK"

  try {
    var Duong_dan = Duong_dan_Thu_muc_Du_lieu + "//" + "IPHONE_1.json"
    var Chuoi_JSON = JSON.stringify(Dien_thoai, null, "\t")
    File.writeFileSync(Duong_dan, Chuoi_JSON, "UTF-8")
  }
  catch (Loi) {
    Kq = Loi.toString()
  }
  return Kq
}

class XL_LUU_TRU {
  
  Ghi_Thong_tin_Dien_thoai_Moi(Dien_thoai) {
    var Kq = ""
    var Hop_le = Dien_thoai
    if (Hop_le) {
      Kq = Ghi_Thong_tin_Dien_thoai(Dien_thoai)
    }
    return Kq
  }
  Doc_Du_lieu() {
    var Du_lieu = {}
    Du_lieu.Thong_tin_Dien_thoai = Doc_Thong_tin_Dien_thoai()
    return Du_lieu
  }
}

var Xu_ly = new XL_LUU_TRU
module.exports = Xu_ly




