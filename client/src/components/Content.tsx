import '@blocknote/core/fonts/inter.css';
import '@blocknote/mantine/style.css';

import { BlockNoteView, lightDefaultTheme, Theme } from '@blocknote/mantine';
const lightRedTheme = {
	colors: {
		editor: {
			text: '#000000',
			background: '#ffffff',
		},
		menu: {
			text: '#000000',
			background: '#ffffff',
		},
		tooltip: {
			text: '#000000',
			background: '#f1f5f9',
		},
		hovered: {
			text: '#000000',
			background: '#f1f5f9',
		},
		selected: {
			text: '#000000',
			background: '#f1f5f9',
		},
		disabled: {
			text: '#9b0000',
			background: '#f1f5f9',
		},
		shadow: '#eaeaea',
		border: '#ffffff',
		sideMenu: '#64748b',
		highlights: lightDefaultTheme.colors!.highlights,
	},
	borderRadius: 4,
	fontFamily: 'Helvetica Neue, sans-serif',
} satisfies Theme;

const darkRedTheme = {
	...lightRedTheme,
} satisfies Theme;

const redTheme = {
	light: lightRedTheme,
	dark: darkRedTheme,
};

export default function Content({
	editor,
	onChange,
	editable = true,
}: {
	editor: any;
	onChange?: () => void;
	editable?: boolean;
}) {
	return (
		<BlockNoteView
			editor={editor}
			theme={redTheme}
			onChange={onChange}
			editable={editable}
			className='w-full  min-h-[calc(100dvh-330px)] border-[#f1f5f9] font-fractul rounded-2xl lg:my-10 lg:border-2 lg:px-2 py-5 lg:shadow-md'
			data-changing-font-demo
		/>
	);
}
