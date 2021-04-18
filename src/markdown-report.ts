
export const reportToMarkdown = (report: Artillery.Report): string => {

  const reportLatency = (latency: Artillery.Latency) => Object.values(latency).join(` | `)
  const reportCodes = (entry: Artillery.Aggregate | Artillery.Intermediate): string => {
    return Object.entries(entry).map(([key, value]) => {
      return `| ${key} | ${value} | ${entry.requestsCompleted} | ${100 * value/entry.requestsCompleted} |`
    }).join('\n')
  }



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
  `
}
