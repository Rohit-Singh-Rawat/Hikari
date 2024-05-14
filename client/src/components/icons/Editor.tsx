import React, { useEffect, useState } from 'react';
import {
	EditorRoot,
	EditorCommand,
	EditorCommandItem,
	EditorCommandEmpty,
	EditorContent,
	type JSONContent,
	EditorCommandList,
	EditorBubble,
} from 'novel';
import { ImageResizer, handleCommandNavigation } from 'novel/extensions';

import { handleImageDrop, handleImagePaste } from 'novel/plugins';

interface EditorProp {
	initialValue?: JSONContent;
	onChange: (value: JSONContent) => void;
}
const Editor = () => {
	const [openNode, setOpenNode] = useState(false);
	const [openColor, setOpenColor] = useState(false);
	const [openLink, setOpenLink] = useState(false);

	return (
		<EditorRoot>
			<EditorContent
				className='border p-4 rounded-xl'
				editorProps={{
					handleDOMEvents: {
						keydown: (_view, event) => handleCommandNavigation(event),
					},

					attributes: {
						class: `prose prose-lg dark:prose-invert prose-headings:font-title font-default focus:outline-none max-w-full`,
					},
				}}
				
				slotAfter={<ImageResizer />}
			>
				<EditorCommand className='z-50 h-auto max-h-[330px] overflow-y-auto rounded-md border border-muted bg-background px-1 py-2 shadow-md transition-all'>
					<EditorCommandEmpty className='px-2 text-muted-foreground'>No results</EditorCommandEmpty>
				</EditorCommand>
			</EditorContent>
		</EditorRoot>
	);
};

export default Editor;
