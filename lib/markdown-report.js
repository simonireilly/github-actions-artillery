"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportToMarkdown = void 0;
const reportToMarkdown = (report) => {
    const reportLine = Object.values(report.aggregate.latency).join(` | `);
    return `
## Artillery Results

| Requests | min | max | median | p95 | p99 |
| -------- | --- | --- | ------ | --- | --- |
| ${report.aggregate.requestsCompleted} | ${reportLine} |
  `;
};
exports.reportToMarkdown = reportToMarkdown;
