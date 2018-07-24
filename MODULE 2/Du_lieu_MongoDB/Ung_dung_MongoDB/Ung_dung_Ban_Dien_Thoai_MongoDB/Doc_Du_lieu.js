var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
// var url = 'mongodb://localhost:27017/';
var url = 'mongodb://phonglecanh:123Abc!!@ds145981.mlab.com:45981/db_phonglecanh';
MongoClient.connect(url, function (err, client) {
  if (err) {
    console.log('Không kết nối với CSDL. Error:', err);
  } else {
    console.log('Kết nối thành công', url);
    var csdl = "db_phonglecanh";
    var db = client.db(csdl)

    var Bang_Dien_thoai = db.collection("Dien_thoai")
    Bang_Dien_thoai.find({}).toArray(function (err, Danh_sach_Dien_thoai) {

      // Lấy toàn bộ danh sách
      if (err) {
        console.log(err)
      } else {
        console.log(Danh_sach_Dien_thoai)
      }
    })
    // client.close();
  }
});