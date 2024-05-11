import React from 'react';
import { LabelledButtonProps } from '../types/LabelledButtonprops.type';

const LabelledButton = ({ label, type, placeHolder }: LabelledButtonProps) => {
	return (
		<fieldset className='flex gap-2 flex-col items-start justify-center font-olyford font-semibold gap-5	 text-sm w-full'>
			<label
				htmlFor={label}
				className=''
			>
				{label}
			</label>
			<input
				type={type}
				placeholder={placeHolder}
				id={label}
				className='w-full p-4 px-5 rounded-lg bg-transparent focus:shadow-[0px_0px_0px_4px_rgba(13,255,82,0.1)] transition-all hover:shadow-[0px_0px_0px_4px_rgba(13,255,82,0.1)] font-light text-sm border-[1.5px]  border-[ #e7e7e9] outline-none '
			/>
		</fieldset>
	);
};

export default LabelledButton;
