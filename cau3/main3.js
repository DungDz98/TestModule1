let str1 = 'codegymod';
function demNguyenAm(str) {
    let count = 0;
    let arr2 = ['a', 'o', 'e', 'u', 'i', 'A', 'O', 'E', 'U', 'I'];
    for (let i = 0; i < str.length; i++) {
        if (arr2.indexOf(str[i]) !== -1) {
            count++;
        }
    }
    if (count) {
        return count;
    } else {
        return false;
    }
}

let result = demNguyenAm(str1);
if (result) {
    document.write('Số ký tự nguyên âm là: ' + result);
} else {
    document.write('Không có ký tự nguyên âm nào!');
}