var MongoClient = require('mongodb').MongoClient;

var DbConnection = function () {
    var db = null
    var instance = 0
    async function DbConnect() {
        try {
            var url=`mongodb://phonglecanh:123Abc!!@ds145981.mlab.com:45981/db_phonglecanh`
            var _db = await MongoClient.connect(url)
            return _db.db(`db_phonglecanh`)
        } catch (Loi) {
            return Loi
        }
    }

    async function Get() {
        try {
            instance++
            console.log(`số lượng gọi đến kết nối CSDL: ${instance} lần`)

            if (db != null) {
                console.log(`kết nối CSDL đã tồn tại`)
                return db
            } else {
                console.log(`tạo một kết nối CSDL mới`)
                db = await DbConnect()
                return db
            }
        } catch (Loi) {
            return Loi
        }
    }

    return {
        Get: Get
    }
}


module.exports = DbConnection();