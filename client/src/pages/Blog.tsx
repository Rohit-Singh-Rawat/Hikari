import { useQuery } from '@tanstack/react-query';
import BlogBlock from '../components/BlogBlock';
import NavBar from '../components/NavBar';
import axios from 'axios';
import { BlogPropsType } from '../types/Blogprops.type';
import blogs from '../temp';
import Avatar from '../components/Avatar';
import { useCreateBlockNote } from '@blocknote/react';
import { useEffect, useState } from 'react';
import '../default.css'
const Blog = () => {
	const [html, setHTML] = useState<string>('');
	const editor = useCreateBlockNote({
		initialContent: [
			{
				id: '5f1e58a1-6ed0-46b5-b5ef-077c2efea2fe',
				type: 'paragraph',
				props: {
					textColor: 'default',
					backgroundColor: 'default',
					textAlignment: 'left',
				},
				content: [
					{
						type: 'text',
						text: 'Hello, ',
						styles: {},
					},
					{
						type: 'text',
						text: 'world!',
						styles: {
							bold: true,
						},
					},
				],
				children: [],
			},
			{
				id: '7f7808b1-378f-4648-97da-bc273681c3c5',
				type: 'heading',
				props: {
					textColor: 'default',
					backgroundColor: 'default',
					textAlignment: 'left',
					level: 1,
				},
				content: [
					{
						type: 'text',
						text: 'y',
						styles: {},
					},
				],
				children: [],
			},
			{
				id: '90764db5-e9c6-46f1-b9b6-287ce0fbecf4',
				type: 'heading',
				props: {
					textColor: 'default',
					backgroundColor: 'default',
					textAlignment: 'left',
					level: 2,
				},
				content: [
					{
						type: 'text',
						text: 'iuhk',
						styles: {},
					},
				],
				children: [],
			},
			{
				id: '16d3eecc-f2b9-4c5e-a648-9454b6b79c3b',
				type: 'heading',
				props: {
					textColor: 'default',
					backgroundColor: 'default',
					textAlignment: 'left',
					level: 3,
				},
				content: [
					{
						type: 'text',
						text: 'kh',
						styles: {},
					},
				],
				children: [],
			},
			{
				id: '4c7f74b0-9e8e-4393-a71f-edbae72bf140',
				type: 'numberedListItem',
				props: {
					textColor: 'default',
					backgroundColor: 'default',
					textAlignment: 'left',
				},
				content: [
					{
						type: 'text',
						text: 'ddffd',
						styles: {},
					},
				],
				children: [],
			},
			{
				id: '42baf530-f011-4954-94cb-aa006f38d68c',
				type: 'numberedListItem',
				props: {
					textColor: 'default',
					backgroundColor: 'default',
					textAlignment: 'left',
				},
				content: [
					{
						type: 'text',
						text: 'gffhf',
						styles: {},
					},
				],
				children: [],
			},
			{
				id: '2e2e0243-5949-4599-b52f-f57d726bf7cf',
				type: 'numberedListItem',
				props: {
					textColor: 'default',
					backgroundColor: 'default',
					textAlignment: 'left',
				},
				content: [
					{
						type: 'text',
						text: 'bfd',
						styles: {},
					},
				],
				children: [],
			},
			{
				id: '5a54b63e-8c18-4971-b1e9-187c54315f33',
				type: 'bulletListItem',
				props: {
					textColor: 'default',
					backgroundColor: 'default',
					textAlignment: 'left',
				},
				content: [
					{
						type: 'text',
						text: 'jfftjrtfj',
						styles: {},
					},
				],
				children: [],
			},
			{
				id: 'f8c95bef-9fba-4701-8be6-18149a7b0584',
				type: 'bulletListItem',
				props: {
					textColor: 'default',
					backgroundColor: 'default',
					textAlignment: 'left',
				},
				content: [
					{
						type: 'text',
						text: 'gyjrfjr',
						styles: {},
					},
				],
				children: [],
			},
			{
				id: 'e0bfbccc-f239-4523-8a71-aad81bdc510e',
				type: 'bulletListItem',
				props: {
					textColor: 'default',
					backgroundColor: 'default',
					textAlignment: 'left',
				},
				content: [
					{
						type: 'text',
						text: 'hdhd',
						styles: {},
					},
				],
				children: [],
			},
			{
				id: '4615652f-c799-4bcb-bfc6-e58c024c73e4',
				type: 'paragraph',
				props: {
					textColor: 'default',
					backgroundColor: 'default',
					textAlignment: 'left',
				},
				content: [
					{
						type: 'text',
						text: 'erergregerger',
						styles: {},
					},
				],
				children: [],
			},
			{
				id: 'a22d81bd-ff36-4d97-8c12-cff97a89ac11',
				type: 'paragraph',
				props: {
					textColor: 'default',
					backgroundColor: 'default',
					textAlignment: 'left',
				},
				content: [
					{
						type: 'text',
						text: 'fwefew',
						styles: {},
					},
				],
				children: [],
			},
			{
				id: 'a44c479f-9a1c-4431-bb2b-9b635e2ed7b7',
				type: 'table',
				props: {
					textColor: 'default',
					backgroundColor: 'default',
				},
				content: {
					type: 'tableContent',
					rows: [
						{
							cells: [[], [], []],
						},
						{
							cells: [
								[
									{
										type: 'text',
										text: 'wefew',
										styles: {},
									},
								],
								[
									{
										type: 'text',
										text: 'fwefe',
										styles: {},
									},
								],
								[
									{
										type: 'text',
										text: 'wfwe',
										styles: {},
									},
								],
							],
						},
						{
							cells: [
								[
									{
										type: 'text',
										text: 'fewfew',
										styles: {},
									},
								],
								[
									{
										type: 'text',
										text: 'fwe',
										styles: {},
									},
								],
								[
									{
										type: 'text',
										text: 'f',
										styles: {},
									},
								],
							],
						},
					],
				},
				children: [],
			},
			{
				id: '4fed4a21-fe4d-4d56-a82f-538d73878e6b',
				type: 'paragraph',
				props: {
					textColor: 'default',
					backgroundColor: 'default',
					textAlignment: 'left',
				},
				content: [],
				children: [],
			},
			{
				id: '8ee5b5a6-bc06-4f6c-b78d-15ba7511cd76',
				type: 'paragraph',
				props: {
					textColor: 'default',
					backgroundColor: 'default',
					textAlignment: 'left',
				},
				content: [],
				children: [],
			},
		],
	});
	useEffect(() => {
		(async () => {
			const html = await editor.blocksToHTMLLossy(editor.document);
			setHTML(html);
		})();
	}, []);

	return (
		<div className='w-full min-h-screen bg-[#EAEAEA] font-fractul'>
			<NavBar />
			<div className='w-full flex justify-center '>
				{' '}
				<div className='min-w-[90%] md:min-w-[672px] max-w-[90%] md:max-w-2xl border-b-2 flex flex-col  gap-5 lg:gap-10 pt-5 lg:pt-10 '>
					<h1 className='lg:text-[42px] tracking-wider leading-snug text-pretty  break-words text-3xl text-left font-semibold'>
						HeadingHeadingHeadingHeadingHeadingHeadingHeadingHeading Heading Heading Heading Heading
						Heading Heading Heading
					</h1>
					<div className='flex justify-start f w-full border-b-[1.5px] border-b-[#bdbbbb] pb-10 items-center gap-3 px-4 lg:gap-5'>
						<Avatar
							name={'name'}
							className='size-7 md:size-10 '
						/>
						<div className=' flex font-medium flex-col'>
							<div>{'author'}</div>
							<div className='flex text-sm gap-2 font-normal text-gray-700'>
								<div>2 min read</div>
								<span className='-translate-y-1'>.</span>
								<div>
									{new Date().toLocaleDateString('en-US', {
										year: 'numeric',
										month: 'long',
										day: 'numeric',
									})}
								</div>
							</div>
						</div>
					</div>
					<div
						id='blogContent'
						dangerouslySetInnerHTML={{ __html: html }}
					></div>
				</div>
			</div>
			<div className='border-t-2 border-t-[#bdbbbb] pt-3 w-full'></div>
		</div>
	);
};

export default Blog;
