import React from 'react';

export type LabelledButtonProps = {
	label: string;
	type: string;
	placeHolder: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
};
