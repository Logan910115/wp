function weekday(str) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days.indexOf(str);
}

// 測試
console.log(weekday("Sunday")); // 0
console.log(weekday("Wednesday")); // 3
