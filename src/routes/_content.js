import fs from 'fs';
import path from 'path';
import * as MarkdownIt from 'markdown-it'
const meta = require('markdown-it-meta')

export function getContent(slug) {
	const file = `./content/${slug}.md`;
	if (!fs.existsSync(file)) return null;

	const md = new MarkdownIt()
	md.use(meta)

	const markdown = fs.readFileSync(file, 'utf-8');
	const rendered = md.render(markdown);

	return {
		meta: md.meta,
		html: rendered
	}
}

// function process_markdown(markdown) {
// 	const match = /---\n([\s\S]+?)\n---/.exec(markdown);
// 	const frontMatter = match[1];
// 	const content = markdown.slice(match[0].length);

// 	const metadata = {};
// 	frontMatter.split('\n').forEach(pair => {
// 		const colonIndex = pair.indexOf(':');
// 		metadata[pair.slice(0, colonIndex).trim()] = pair
// 			.slice(colonIndex + 1)
// 			.trim();
// 	});

// 	return { metadata, content };
// }