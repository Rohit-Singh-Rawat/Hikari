import {
	Menu,
	MenuButton,
	MenuItem,
	MenuProvider,
	MenuSeparator,
	Tooltip,
	TooltipAnchor,
	TooltipProvider,
	VisuallyHidden,
} from '@ariakit/react';
import '../index.css';
import { ReactNode } from 'react';
import ProfileIcon from './icons/ProfileIcon';
import SignOutIcon from './icons/SignOutIcon';
import { Link } from 'react-router-dom';
import WriteIcon from './icons/WriteIcon';

export default function ProfileMenu({
	userName,
	userEmail,
	children,
}: {
	userName: string;
	userEmail: string;
	children?: ReactNode;
}) {
	return (
		<MenuProvider>
			<TooltipProvider>
				<TooltipAnchor render={<MenuButton />}>
					<VisuallyHidden>{userName}</VisuallyHidden>
					{children}
				</TooltipAnchor>
				<Tooltip className='tooltip'>Accessibility Shortcuts</Tooltip>
			</TooltipProvider>
			<Menu
				className='menu text-sm sm:text-md max-w-[170px] p-[0.1rem] sm:p-[0.4rem] min-w-[170px] sm:max-w-[280px] sm:min-w-[250px]'
				gutter={4}
			>
				<div className='p-[1em] text-xs sm:text-sm max-w-[280px] truncate flex flex-col gap-1'>
					<div className='font-medium'>{userName}</div>
					<div className='text-gray-600'>{userEmail}</div>
				</div>
				<Link to={'/new-story'}>
					<MenuItem className='menu-item block sm:hidden'>
						<WriteIcon/>
						{'Write'}
					</MenuItem>
				</Link>
				<Link to={`/@${userName}`}>
					<MenuItem className='menu-item'>
						<ProfileIcon />
						{'Profile'}
					</MenuItem>
				</Link>
				<MenuSeparator className='separator' />
				<Link to={'signOut'}>
					<MenuItem className='menu-item'>
						<SignOutIcon />
						{'Sign Out'}
					</MenuItem>
				</Link>
			</Menu>
		</MenuProvider>
	);
}
