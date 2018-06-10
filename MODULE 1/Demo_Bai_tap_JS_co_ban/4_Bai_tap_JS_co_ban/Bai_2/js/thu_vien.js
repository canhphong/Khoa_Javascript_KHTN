function Diem_trung_binh(hk1, hk2) {
    var Kq = (Number(hk1) + Number(hk2) * 2) / 3
    return Kq
}
function Xep_loai_Hoc_tap(DiemTB) {
    var Xep_loai = "Kém"
    if (DiemTB >= 8)
        Xep_loai = "Giỏi"
    else if (DiemTB >= 6.5)
        Xep_loai = "Khá"
    else if (DiemTB >= 5)
        Xep_loai = "Trung Bình"
    else if (DiemTB >= 3.5)
        Xep_loai = "Yếu"

    return Xep_loai
}
function ket_qua(a, b) {
    TB=(Number(a) + Number(b)*2)/3
    if (TB>=8)
        xepLoai.innerText = "Giỏi"
    else if (TB>=6.5) 
        xepLoai.innerText = "Khá"
    else if (TB>=5)
        xepLoai.innerText = "Trung Bình"
    else if (TB>=3.5)
        xepLoai.innerText = "Yếu"
    else xepLoai.innerText = "Kém";
    return TB;
}