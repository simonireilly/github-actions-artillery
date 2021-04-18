
export const reportToMarkdown = (report: Artillery.Report): string => {
  return JSON.stringify(report)

  return `
## Artillery Results

| Requests |
| --- |
| ${report.aggregate.requestsCompleted}
  `
}
