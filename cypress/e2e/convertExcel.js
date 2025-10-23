// convertExcel.js
const xlsx = require('xlsx');//Imports the xlsx library (a Node.js package) that lets you read and write Excel files (.xls, .xlsx).
const fs = require('fs');//Imports Node.js’ path module. This helps create file paths that work across all operating systems (Windows, Linux, Mac).
const path = require('path');//Imports Node.js’ path module. This helps create file paths that work across all operating systems (Windows, Linux, Mac).

// INPUT (Excel) and OUTPUT (fixture JSON)
const inputFile = 'C:/Users/testi/OneDrive/Documents/users.xlsx';//The path to your Excel file (users.xlsx).
const outputFile = path.join('cypress', 'fixtures', 'users.json');//The location where your converted JSON should be saved (inside Cypress fixtures folder as users.json).

// Read workbook & sheet
if (!fs.existsSync(inputFile)) {//Before reading the file, this checks: Does the Excel file exist?
  console.error(`Input file not found: ${inputFile}`);
  process.exit(1);//If not, it prints an error and stops the program with process.exit(1) (exit code 1 means error).
}

const workbook = xlsx.readFile(inputFile);//workbook contains metadata + all sheets inside users.xlsx.
const sheetName = workbook.SheetNames[0];//Gets the first sheet name from the workbook.
const sheet = workbook.Sheets[sheetName];//Loads the actual sheet data from the workbook (cells, formulas, etc.), not just the name.

// ✅ Convert to JSON (keep empty cells as "")
const jsonData = xlsx.utils.sheet_to_json(sheet, { defval: "" });
//Converts the Excel sheet object into an array of JavaScript objects.
//Each row becomes one object. Each column header in Excel becomes a key.

// ✅ Write JSON into Cypress fixtures
fs.writeFileSync(outputFile, JSON.stringify(jsonData, null, 2), 'utf-8');

console.log(`Excel converted to JSON: ${outputFile}`);