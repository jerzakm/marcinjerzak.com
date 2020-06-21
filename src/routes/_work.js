import fs from 'fs';
import path from 'path';
import * as MarkdownIt from 'markdown-it'
const meta = require('markdown-it-meta')

export function getWork() {
  const directoryPath = './content/work';

  const md = new MarkdownIt()
  md.use(meta)

  const workList = []

  const files = fs.readdirSync(directoryPath)
  for (const file of files) {
    const markdown = fs.readFileSync(`${directoryPath}/${file}/content.md`, 'utf-8');
    const rendered = md.render(markdown);
    const workEntry = md.meta
    workEntry.content = rendered

    workList.push(workEntry)
  }

  return workList
}