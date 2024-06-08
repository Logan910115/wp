function matrixMul(a, b) {
    if (a[0].length !== b.length) throw new Error("矩陣無法相乘");
    let result = Array(a.length).fill(0).map(() => Array(b[0].length).fill(0));
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b[0].length; j++) {
            for (let k = 0; k < b.length; k++) {
                result[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    return result;
}

// 測試
console.log(matrixMul([[1, 2], [3, 4]], [[5, 6], [7, 8]])); // [[19, 22], [43, 50]]
