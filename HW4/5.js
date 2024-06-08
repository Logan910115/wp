function countChar(str) {
    const count = {};
    for (let char of str) {
        count[char] = (count[char] || 0) + 1;
    }
    return count;
}

// 測試
console.log(countChar("hello")); // { h: 1, e: 1, l: 2, o: 1 }
