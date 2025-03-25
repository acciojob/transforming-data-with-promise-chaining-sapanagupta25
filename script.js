//your JS code here. If required.
// Get elements
const input = document.getElementById('ip');
const button = document.getElementById('btn');
const output = document.getElementById('output');

// Function to simulate delay using a promise
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to start the promise chain
button.addEventListener('click', () => {
    const value = Number(input.value);
    if (isNaN(value)) {
        output.textContent = 'Please enter a valid number';
        return;
    }

    output.textContent = ''; // Clear previous output

    // Step 1: Initial Promise (2-second delay)
    delay(2000)
        .then(() => {
            output.textContent = `Result: ${value}`;
            return value;
        })

        // Step 2: Multiply by 2 (2-second delay)
        .then(num => delay(2000).then(() => {
            const result = num * 2;
            output.textContent = `Result: ${result}`;
            return result;
        }))

        // Step 3: Subtract 3 (1-second delay)
        .then(num => delay(1000).then(() => {
            const result = num - 3;
            output.textContent = `Result: ${result}`;
            return result;
        }))

        // Step 4: Divide by 2 (1-second delay)
        .then(num => delay(1000).then(() => {
            const result = num / 2;
            output.textContent = `Result: ${result}`;
            return result;
        }))

        // Step 5: Add 10 (1-second delay)
        .then(num => delay(1000).then(() => {
            const result = num + 10;
            output.textContent = `Final Result: ${result}`;
        }))

        .catch(error => {
            output.textContent = `Error: ${error.message}`;
            console.error(error);
        });
});
