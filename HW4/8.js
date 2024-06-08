function gradient(f, p) {
    const h = 0.00001; // 小的增量
    const grad = [];
    for (let i = 0; i < p.length; i++) {
        const p1 = [...p];
        p1[i] += h;
        grad.push((f(...p1) - f(...p)) / h);
    }
    return grad;
}

// 測試
function f(x, y) {
    return x * x + y * y;
}

console.log(gradient(f, [3, 4])); // [6, 8]
