"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportToMarkdown = void 0;
const reportToMarkdown = (report) => {
    return JSON.stringify(report);
    return `
## Artillery Results

| Requests |
| --- |
| ${report.aggregate.requestsCompleted}
  `;
};
exports.reportToMarkdown = reportToMarkdown;
