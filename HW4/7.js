function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

// 測試
console.log(lcm(4, 6)); // 12
