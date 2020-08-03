// cucumber.js
const common = [
  'src/__tests-e2e__/features/**/*.feature', // Specify our feature files
  '--require-module ts-node/register', // Load TypeScript module
  '--require src/__tests-e2e__/step_definitions/*.steps.ts', // Load step definitions
  '--format progress-bar', // Load custom formatter
  '--format node_modules/cucumber-pretty', // Load custom formatter
  '--format json:src/__tests-e2e__/reports/report.json' //Build json output
].join(' ');

module.exports = {
  default: common,
};
