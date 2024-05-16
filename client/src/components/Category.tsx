import * as Ariakit from '@ariakit/react';
import '../index.css';
import { categories } from '../constants/category';

export default function Category() {
	return (
		<div className='wrapper '>
			<Ariakit.SelectProvider defaultValue='None' >
				<Ariakit.SelectLabel className='label'>Category</Ariakit.SelectLabel>
				<Ariakit.Select className='button' />
				<Ariakit.SelectPopover
					portal
					sameWidth
					unmountOnHide
					gutter={4}
					className='popover'
				>
					{' '}
					<Ariakit.SelectItem
						className='select-item flex '
						value={'None'}
					/>
					{Object.keys(categories).map((category) => {
						return (
							<Ariakit.SelectItem
								className='select-item flex '
								value={`${categories[category].icon}  ${categories[category].name}`}
							/>
						);
					})}
				</Ariakit.SelectPopover>
			</Ariakit.SelectProvider>
		</div>
	);
}
