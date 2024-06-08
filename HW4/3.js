function filter(a, fn) {
    return a.filter(fn);
}

// 測試
console.log(filter([1, 2, 3, 4, 5], n => n % 2 === 0)); // [2, 4]
