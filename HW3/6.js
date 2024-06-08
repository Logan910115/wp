function matrixAdd(a, b) {
    if (a.length !== b.length || a[0].length !== b[0].length) throw new Error("矩陣尺寸不一致");
    return a.map((row, i) => row.map((val, j) => val + b[i][j]));
}

// 測試
console.log(matrixAdd([[1, 2], [3, 4]], [[5, 6], [7, 8]])); // [[6, 8], [10, 12]]
