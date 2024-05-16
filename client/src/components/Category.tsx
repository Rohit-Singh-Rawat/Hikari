import * as Ariakit from '@ariakit/react';
import './style.css';
import { categories } from '../constants/category';

export default function Category() {
	return (
		<div className='wrapper'>
			<Ariakit.SelectProvider defaultValue='Apple'>
				<Ariakit.SelectLabel className='label'>Favorite fruit</Ariakit.SelectLabel>
				<Ariakit.Select className='button' />
				<Ariakit.SelectPopover
					portal
					sameWidth
					unmountOnHide
					gutter={4}
					className='popover'
				>
					{categories.map(category)=>{
						
					}}
					<Ariakit.SelectItem
						className='select-item'
						value='Apple'
					/>
				</Ariakit.SelectPopover>
			</Ariakit.SelectProvider>
		</div>
	);
}
