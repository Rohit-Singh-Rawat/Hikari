import * as Ariakit from '@ariakit/react';
import '../index.css';
import { categories } from '../constants/category';
import { Category } from '@whale_in_space/hikari-common';

export default function CategoryInput({
	onClick,
	defaultValue,
}: {
	onClick: any;
	defaultValue?: Category;
}) {
	return (
		<div className='wrapper '>
			<Ariakit.SelectProvider
				defaultValue={
					defaultValue
						? `${categories[defaultValue as Category]?.icon}  ${
								categories[defaultValue as Category]?.name
						  }`
						: 'None'
				}
			>
				<Ariakit.SelectLabel className='label font-semibold ml-4 lg:ml-0'>Category</Ariakit.SelectLabel>
				<Ariakit.Select className='button max-w-[100px] lg:min-w-[250px]' />
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
						setValueOnClick
						onClick={() => onClick(null)}
					/>
					{Object.keys(categories).map((category) => {
						return (
							<Ariakit.SelectItem
								key={category}
								onClick={() => onClick(category)}
								className='select-item flex '
								value={`${categories[category as Category].icon}  ${
									categories[category as Category].name
								}`}
							/>
						);
					})}
				</Ariakit.SelectPopover>
			</Ariakit.SelectProvider>
		</div>
	);
}
