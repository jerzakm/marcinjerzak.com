import fs from 'fs';
import path from 'path';
import * as MarkdownIt from 'markdown-it'
const meta = require('markdown-it-meta')

const PREVIEW_EXTENSIONS = ['.jpg', '.png', '.webm']

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
    workEntry.preview = []

    const previewFiles = fs.readdirSync(`${directoryPath}/${file}`)
    for (const previewFile of previewFiles) {
      if (PREVIEW_EXTENSIONS.includes(path.extname(previewFile))) {
        workEntry.preview.push(`${previewFile}`)
      }
    }
    workList.push(workEntry)
  }

  return workList
}