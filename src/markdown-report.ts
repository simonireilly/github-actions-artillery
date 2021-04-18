
export const reportToMarkdown = (report: Artillery.Report): string => {
  return JSON.stringify(report)
}
