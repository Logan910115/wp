function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

// 測試
console.log(gcd(48, 18)); // 6
