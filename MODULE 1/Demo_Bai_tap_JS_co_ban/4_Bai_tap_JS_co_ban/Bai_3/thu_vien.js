function kiemtracophailaso(so) {
    if (isNaN(parseInt(so)))
        return false
    else
        return true
}

function laSo(gt){
    return !isNaN(gt)
}

function ket_qua(so) {
    if (kiemtracophailaso(so)) {
        str = ""
        for (i = 1; i <= 10; i++) {
            str += so + " * " + i + "=" + so * i + "<br>"
        }
        bang.innerHTML = str
    }
    else
        bang.innerHTML = "Số nhập không hợp lệ"
}

function Xuat_Cuu_chuong(soCC){
    var Chuoi_Kq=``
    for(var i=1;i<=10;i++){
        Chuoi_Kq+=`${soCC} * ${i} = ${soCC * i} <br>`
    }
    return Chuoi_Kq
}