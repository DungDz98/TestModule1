let arr1 = [1, 2, 5, 7, 9, 3];

function checkElementArray(element, arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            result = i;
            break;
        } else {
            result = 'Không có';
        }
    }
    return result;

}

document.write('Vị trí của phần tử cần tìm là: ');
document.write(checkElementArray(6, arr1));