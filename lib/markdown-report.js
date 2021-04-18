"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportToMarkdown = void 0;
const reportToMarkdown = (report) => {
    const reportLatency = (latency) => Object.values(latency).join(` | `);
    const reportCodes = (entry) => {
        return Object.entries(entry).map(([key, value]) => {
            return `| ${key} | ${value} | ${entry.requestsCompleted} | ${100 * value / entry.requestsCompleted} |`;
        }).join('\n');
    };
    return `
## Artillery Results 💣

### Aggregate

- Ran ${report.aggregate.requestsCompleted}
- Requests per seconds: ${report.aggregate.rps.mean} (req/s)

**Responses**
| HTTP Code | Count | Total | Percentage |
| --- | --- | --- | --- |
${reportCodes(report.aggregate)}

**Latency**
| min (ms) | max (ms) | median (ms) | p95 (ms) | p99 (ms) |
| -------- | -------- | ----------- | -------- | -------- |
| ${reportLatency(report.aggregate.latency)} |

### Intermediates

**Latency**
| min (ms) | max (ms) | median (ms) | p95 (ms) | p99 (ms) |
| -------- | -------- | ----------- | -------- | -------- |
${report.intermediate.map(intermediate => `| ${reportLatency(intermediate.latency)} |`).join(`\n`)}
  `;
};
exports.reportToMarkdown = reportToMarkdown;
