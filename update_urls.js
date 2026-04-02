const fs = require('fs');

function updateUrls(content) {
  // Matches { name: "...", url: "..." }
  return content.replace(/\{ name: "([^"]+)", url: "([^"]+)" \}/g, (match, name, url) => {
    return `{ name: "${name}", url: "https://www.google.com/maps/search/${name}" }`;
  });
}

// Update data1.js
let data1 = fs.readFileSync('data1.js', 'utf8');
data1 = updateUrls(data1);
fs.writeFileSync('data1.js', data1);

// Update data2.js
let data2 = fs.readFileSync('data2.js', 'utf8');
data2 = updateUrls(data2);
fs.writeFileSync('data2.js', data2);

// Update data3.js
let data3 = fs.readFileSync('data3.js', 'utf8');
data3 = updateUrls(data3);
fs.writeFileSync('data3.js', data3);

// Update data4.js
let data4 = fs.readFileSync('data4.js', 'utf8');
data4 = updateUrls(data4);

// Fix syntax in data4.js
// We want to export dataUK, dataGermany, and dataGreece separately.
// The current content of data4.js has:
// export const dataUK = {
//     unitedKingdom: { ... }
// };
//     germany: { ... },
//     greece: { ... }
// };

// Let's use a simpler way for data4.js: manual string replacement for the structure.
// I'll do this in the next step to be precise.
fs.writeFileSync('data4.js', data4);
