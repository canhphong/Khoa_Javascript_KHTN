
var NodeJs_Dich_vu = require("http")
var Luu_tru = require("../Xu_ly/XL_LUU_TRU")
var Port = 1000
var Xu_ly_Tham_so = require('querystring')
var Du_lieu = Luu_tru.Doc_Du_lieu()

var Dich_vu = NodeJs_Dich_vu.createServer((Yeu_cau, Dap_ung) => {
  var Chuoi_Nhan = ""
  var Dia_chi_Xu_ly = Yeu_cau.url.replace("/", "")
  Yeu_cau.on('data', (chunk) => { Chuoi_Nhan += chunk })
  Yeu_cau.on('end', () => {

    var Tham_so = Xu_ly_Tham_so.parse(Dia_chi_Xu_ly.replace("?", ""))
    var Ma_so_Xu_ly = Tham_so.Ma_so_Xu_ly
    var Chuoi_Kq = ""
    if (Ma_so_Xu_ly == "Doc_Du_lieu_Dien_thoai") {
      var Du_lieu_Dien_thoai = Du_lieu.Thong_tin_Dien_thoai
      Chuoi_Kq = JSON.stringify(Du_lieu_Dien_thoai)
    }
    else if (Ma_so_Xu_ly == "Ghi_Thong_tin_Dien_thoai_Moi") {
      var Dien_thoai = JSON.parse(Chuoi_Nhan)
      var Kq = Luu_tru.Ghi_Thong_tin_Dien_thoai_Moi(Dien_thoai)
      Chuoi_Kq = Kq
    }
    else {
      Chuoi_Kq = `DICH VU DU LIEU`
    }

    Dap_ung.setHeader("Access-Control-Allow-Origin", '*')
    Dap_ung.end(Chuoi_Kq);
  })

})

Dich_vu.listen(Port,
  console.log("Dịch vụ đang thực thi ..." + Port)
);






