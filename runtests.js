const { spawnSync } = require('child_process');
const fs = require('fs');

// Create reports folder if it doesn't exist
if (!fs.existsSync('reports')) {
    fs.mkdirSync('reports');
}

// Get current date and time
const now = new Date();

const timestamp =
    now.getFullYear() + '-' +
    String(now.getMonth() + 1).padStart(2, '0') + '-' +
    String(now.getDate()).padStart(2, '0') + '-' +
    String(now.getHours()).padStart(2, '0') +
    String(now.getMinutes()).padStart(2, '0') +
    String(now.getSeconds()).padStart(2, '0');

// Generate unique report name
const reportName = `reports/cucumber-report-${timestamp}.html`;

console.log(`Generating report: ${reportName}`);

// Execute Cucumber tests and generate HTML report
const result = spawnSync(
    process.platform === 'win32' ? 'npx.cmd' : 'npx',
    [
        'cucumber-js',
        '--format',
        'progress',
        '--format',
        `html:${reportName}`
    ],
    {
        stdio: 'inherit',
        shell: process.platform === 'win32'
    }
);

// Handle execution result
if (result.error) {
    console.error('Failed to execute Cucumber:', result.error);
    process.exit(1);
}

process.exit(result.status ?? 1);