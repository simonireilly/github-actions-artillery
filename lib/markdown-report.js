"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportToMarkdown = void 0;
const reportToMarkdown = (report) => {
    const reportLine = Object.values(report.aggregate.latency).join(` | `);
    const codeLine = Object.entries(report.aggregate.codes).map(([key, value]) => {
        return `| ${key} | ${value} | ${report.aggregate.requestsCompleted} | ${value / report.aggregate.requestsCompleted} |`;
    });
    return `
## Artillery Results

### Aggregate

- Ran ${report.aggregate.requestsCompleted}
- Requests per seconds: ${report.aggregate.rps.mean} (req/s)

*Responses*
| HTTP Code | Count | Total | Percentage |
| --- | --- | --- | --- |


*Latency*
| Request Count | min (ms) | max (ms) | median (ms) | p95 (ms) | p99 (ms) |
| -------- | -------- | -------- | ----------- | -------- | -------- |
| ${report.aggregate.requestsCompleted} | ${reportLine} |
  `;
};
exports.reportToMarkdown = reportToMarkdown;
