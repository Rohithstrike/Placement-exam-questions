const fs = require('fs');

// Function to convert a value from a given base to decimal
function convertToDecimal(base, value) {
    return parseInt(value, base);
}

// Function to parse input and get the roots
function parseInput(file) {
    const data = JSON.parse(fs.readFileSync(file, 'utf-8'));
    const n = data.keys.n;
    const k = data.keys.k;

    // Collecting roots in (x, y) format
    const roots = [];
    Object.keys(data).forEach(key => {
        if (key !== 'keys') {
            const x = parseInt(key);
            const base = parseInt(data[key].base);
            const y = convertToDecimal(base, data[key].value);
            roots.push({ x, y });
        }
    });

    return { n, k, roots };
}

// Function to calculate the constant term using Lagrange interpolation
function findConstantTerm(roots, k) {
    let c = 0;

    // Apply Lagrange Interpolation formula
    for (let i = 0; i < k; i++) {
        let { x: xi, y: yi } = roots[i];
        let term = yi;

        for (let j = 0; j < k; j++) {
            if (i !== j) {
                let { x: xj } = roots[j];
                term *= xj / (xj - xi);
            }
        }
        c += term;
    }

    // The result may be slightly off due to floating-point operations; round to nearest integer
    return Math.round(c);
}

// Main function
function main() {
    const { n, k, roots } = parseInput('test_Case1.json');
    if (roots.length < k) {
        console.error("Not enough roots to solve for the polynomial");
        return;
    }

    const secretConstant = findConstantTerm(roots, k);
    console.log(`Constant term (secret) of the polynomial: ${secretConstant}`);
}

main();
