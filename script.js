function uploadData(username, correctAnswers, time) {
    fetch("https://script.google.com/macros/s/AKfycbwmsVNgTfEC_MyPoJAL_Sr-QQrZqBVHUSCSjx9e-weSL5cdSmhPcVA_8YKCMUqWW9r7/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, correctAnswers, time })
    })
    .then(response => response.text())
    .then(data => console.log("上传成功:", data))
    .catch(error => console.error("上传失败:", error));
}

// 示例：当用户完成答题后调用
uploadData("Alice", 8, "00:32");
