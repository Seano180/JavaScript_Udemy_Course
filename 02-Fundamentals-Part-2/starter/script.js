"use strict";

console.log("⭐️⭐️⭐️⭐️⭐️⭐️ Start of Script.js script ⭐️⭐️⭐️⭐️⭐️");

// **** Tutorial 32 - Strict Mode
// In the below example, "hasDriverLicence" is missing the "s" letter - strict mode will highlight this in the console and show us that there is a spelling inconsistency, whereas without strict mode, the code will execute
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive 🙂");
