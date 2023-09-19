document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("input");
    const convertButton = document.getElementById("convertButton");
    const resultDiv = document.getElementById("result");

    function convertInputValue() {
        const inputValue = parseInt(input.value);

        if (!isNaN(inputValue)) {
            const p0 = inputValue & 0xFF;
            const p1 = (inputValue >> 8) & 0xFF;
            const p2 = (inputValue >> 16) & 0xFF;
            const p3 = (inputValue >> 24) & 0xFF;

            resultDiv.textContent = `{INLINE_SPRITE}{${p0}}{${p1}}{${p2}}{${p3}}`;
        } else {
            resultDiv.textContent = "올바른 숫자를 입력하세요.";
        }
    }

    convertButton.addEventListener("click", convertInputValue);

    // Enter 키를 누르면 변환 함수 호출
    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            convertInputValue();
        }
    });
});
