
export const reportToMarkdown = (report: Artillery.Report): string => {

  const reportLine = Object.values(report.aggregate.latency).join(` | `)

  return `
## Artillery Results

| Requests | min | max | median | p95 | p99 |
| -------- | --- | --- | ------ | --- | --- |
| ${report.aggregate.requestsCompleted} | ${reportLine} |
  `
}
