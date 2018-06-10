function tong2so(a,b) {
return a + b;
}

class XL_Object {
        constructor(_Ten, _Ma_so, _Don_gia_Ban) {
            this.Ten = _Ten;
            this.Ma_so = _Ma_so;
            this.Don_gia_Ban = _Don_gia_Ban;
        }
        
        Xuat_thong_tin() {
            var Chuoi_thong_tin = `Ma so: ${this.Ma_so} - Ten: ${this.Ten} - Don gia Ban: ${this.Don_gia_Ban}`
            return Chuoi_thong_tin
        }
}

export {tong2so,XL_Object}