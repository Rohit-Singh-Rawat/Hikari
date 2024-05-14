import '@blocknote/core/fonts/inter.css';
import { useCreateBlockNote } from '@blocknote/react';
import '@blocknote/mantine/style.css';
import { BlockNoteView, darkDefaultTheme, lightDefaultTheme, Theme } from '@blocknote/mantine';
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

// The theme for dark mode,
// users the light theme defined above with a few changes
const darkRedTheme = {
	...lightRedTheme,
} satisfies Theme;

// The combined "red theme",
// we pass this to BlockNoteView and then the editor will automatically
// switch between lightRedTheme / darkRedTheme based on the system theme
const redTheme = {
	light: lightRedTheme,
	dark: darkRedTheme,
};

export default function Content() {
	// Creates a new editor instance.
	const editor = useCreateBlockNote();

	// Renders the editor instance using a React component.
	return (
		<BlockNoteView
			editor={editor}
			theme={redTheme}
			className='w-full  min-h-[calc(100dvh-260px)] border-[#f1f5f9] font-fractul rounded-2xl my-10 border-2 px-2 py-5 shadow-md'
			data-changing-font-demo
		/>
	);
}
