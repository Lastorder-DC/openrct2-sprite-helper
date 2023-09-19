document.addEventListener("DOMContentLoaded", function () {
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const convertButton = document.getElementById("convertButton");
    const resultDiv = document.getElementById("result");

    convertButton.addEventListener("click", function () {
        const num1 = parseInt(input1.value);
        const num2 = parseInt(input2.value);

        if (!isNaN(num1) && !isNaN(num2)) {
            const p0 = num1 & 0xFF;
            const p1 = (num1 >> 8) & 0xFF;
            const p2 = num2 & 0xFF;
            const p3 = (num2 >> 8) & 0xFF;

            resultDiv.textContent = `변환된 숫자: ${p0}, ${p1}, ${p2}, ${p3}`;
        } else {
            resultDiv.textContent = "올바른 숫자를 입력하세요.";
        }
    });
});
