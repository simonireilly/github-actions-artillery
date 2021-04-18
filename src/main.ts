import * as core from '@actions/core'
import * as exec from '@actions/exec'
import { reportToMarkdown } from './markdown-report';
const { promises: fs } = require('fs')

async function run() {
  try {
    const filepath = core.getInput('filepath');
    core.debug(`filepath=${filepath}`);

    const content = await fs.readFile(filepath, 'utf8')
    core.debug('content=')
    core.debug(content)

    await exec.exec(
      'npx',
      ['artillery', '--output', 'report.json', 'run', filepath,],
    )
  } catch (error) {
    core.setFailed(error.message);
  }

  try {
    const contents = await fs.readFile('report.json', 'utf8')
    const report: Artillery.Report  = JSON.parse(contents)

    const markdown = reportToMarkdown(report)

    core.setOutput('report', markdown)
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
