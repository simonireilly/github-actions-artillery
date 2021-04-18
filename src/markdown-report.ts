
export const reportToMarkdown = (report: Artillery.Report): string => {

  const reportLine = Object.values(report.aggregate.latency).join(` | `)


  return `
## Artillery Results

### Aggregate

- Ran ${report.aggregate.requestsCompleted}
- Requests per seconds: ${report.aggregate.rps.mean} (req/s)

| Requests | min (ms) | max (ms) | median (ms) | p95 (ms) | p99 (ms) |
| -------- | -------- | -------- | ----------- | -------- | -------- |
| ${report.aggregate.requestsCompleted} | ${reportLine} |
  `
}
