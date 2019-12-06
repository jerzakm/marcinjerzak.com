import { getContent } from './_content.js';

const lookup = new Map();

export function get(req, res, next) {
	const { slug } = req.params;

	if (process.env.NODE_ENV !== 'production' || !lookup.has(slug)) {
		const post = getContent('about');
		lookup.set(slug, JSON.stringify(post));
	}

	const json = lookup.get(slug);

	if (json) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(json);
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}
