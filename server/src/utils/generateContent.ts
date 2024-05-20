export interface TextObject {
	type: string;
	text: string;
}

export interface ContentObject {
	id: string;
	type: string;
	props: {
		textColor: string;
		backgroundColor: string;
		textAlignment: string;
		level?: number;
	};
	content: TextObject[];
	children: ContentObject[];
}

export function getContentFromObjects(objects: ContentObject[]): string {
	const contentArray: string[] = [];

	function extractContent(obj: ContentObject): void {
		if (obj.content && Array.isArray(obj.content)) {
			obj.content.forEach((item) => {
				if (item.text) {
					contentArray.push(item.text);
				}
			});
		}
		if (obj.children && Array.isArray(obj.children)) {
			obj.children.forEach((child) => extractContent(child));
		}
	}

	objects.forEach((obj) => extractContent(obj));

	return contentArray.join('—');
}
