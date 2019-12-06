import fs from 'fs';
import path from 'path';
import * as MarkdownIt from 'markdown-it'

export function getContent(slug) {
    const file = `./content/${slug}.md`;
	if (!fs.existsSync(file)) return null;

    const md = new MarkdownIt()
    const markdown = fs.readFileSync(file, 'utf-8');
    const markdownRenderResult = md.render(markdown);
    console.log(markdownRenderResult)

	// const { content, metadata } = process_markdown(markdown);

	// const date = new Date(`${metadata.pubdate} EDT`); // cheeky hack
	// metadata.dateString = date.toDateString();

	// const html = marked(content);

	// return {
	// 	slug,
	// 	metadata,
	// 	html
    // };

    return markdownRenderResult
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
