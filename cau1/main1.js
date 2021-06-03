function giaiPT(a, b) {
    if (a === 0) {
        if (b === 0) {
            return 'PT đã cho có vô số nghiệm';
        } else {
            return 'PT đã cho vô nghiệm'
        }
    } else {
        return 'PT đã cho có nghiệm x = ' + -b / a;
    }
}

let result = giaiPT(5, 8);
document.write(result);