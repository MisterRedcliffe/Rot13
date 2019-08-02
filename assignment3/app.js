const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const str = document.getElementById("cipher").value;
    (function rot13() {
        const x = [];

        (function getCharCode() {
            for (let i = 0; i < str.length; i += 1) {
                x.push(str.charCodeAt(i));
            }
        }());

        let uncodedStr = "";

        (function uncoding() {
            for (let i = 0; i < x.length; i += 1) {
                const firstHalf =
                    (x[i] >= 65 && x[i] <= 77) ||
                    (x[i] >= 97 && x[i] <= 109);

                const secondHalf =
                    (x[i] >= 78 && x[i] <= 90) ||
                    (x[i] >= 110 && x[i] <= 122);

                if (firstHalf) {
                    uncodedStr += String.fromCharCode(x[i] + 13);
                } else if (secondHalf) {
                    uncodedStr += String.fromCharCode(x[i] - 13);
                } else {
                    uncodedStr += String.fromCharCode(x[i]);
                }
            }
        }());

        document.getElementById("result").value = uncodedStr;
    }());
});