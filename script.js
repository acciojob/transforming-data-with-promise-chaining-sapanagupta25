document.getElementById('btn').addEventListener('click', function () {
    const inputNumber = Number(document.getElementById('ip').value);
    const outputDiv = document.getElementById('output');
    
    outputDiv.innerHTML = ''; // Clear previous results

    function delayedPromise(time, operation) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(operation());
            }, time);
        });
    }

    delayedPromise(2000, () => inputNumber)
        .then(result => {
            outputDiv.innerHTML += `Result: ${result} <br>`;
            return delayedPromise(2000, () => result * 2);
        })
        .then(result => {
            outputDiv.innerHTML += `Result: ${result} <br>`;
            return delayedPromise(1000, () => result - 3);
        })
        .then(result => {
            outputDiv.innerHTML += `Result: ${result} <br>`;
            return delayedPromise(1000, () => result / 2);
        })
        .then(result => {
            outputDiv.innerHTML += `Result: ${result} <br>`;
            return delayedPromise(1000, () => result + 10);
        })
        .then(result => {
            outputDiv.innerHTML += `Final Result: ${result}`;
        });
});

