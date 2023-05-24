export default function convertToHtml(html) {
	const TEMPLATE = document.createElement('template');

	TEMPLATE.innerHTML = html;

	return TEMPLATE.content.firstChild;
}
