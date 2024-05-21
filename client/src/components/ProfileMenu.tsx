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
import { Link, useNavigate } from 'react-router-dom';
import WriteIcon from './icons/WriteIcon';
import { StoriesIcon } from './icons/StoriesIcon';

export default function ProfileMenu({
	userName,
	userEmail,
	children,
}: {
	userName: string;
	userEmail: string;
	children?: ReactNode;
}) {
	const navigate = useNavigate();
	return (
		<MenuProvider>
			<TooltipProvider>
				<TooltipAnchor render={<MenuButton />}>
					<VisuallyHidden>{userName}</VisuallyHidden>
					{children}
				</TooltipAnchor>
				<Tooltip className='tooltip'>{userName}</Tooltip>
			</TooltipProvider>
			<Menu
				className='menu text-sm sm:text-md max-w-[170px] p-[0.1rem] sm:p-[0.4rem] min-w-[170px] sm:max-w-[280px] sm:min-w-[250px]'
				gutter={4}
			>
				<div className='p-[1em] text-xs sm:text-sm max-w-[280px] truncate flex flex-col gap-1'>
					<div className='font-medium'>@{userName}</div>
					<div className='text-gray-600'>{userEmail}</div>
				</div>

				<Link to={`/user/@${userName}`}>
					<MenuItem className='menu-item'>
						<ProfileIcon />
						{'Profile'}
					</MenuItem>
				</Link>
				<Link to={'/new-story'}>
					<MenuItem className='menu-item block sm:hidden'>
						<WriteIcon />
						{'Write'}
					</MenuItem>
				</Link>
				<Link to={`/me/stories`}>
					<MenuItem className='menu-item'>
						<StoriesIcon />
						{'Stories'}
					</MenuItem>
				</Link>
				<MenuSeparator className='separator' />

				<MenuItem
					className='menu-item'
					onClick={() => {
						localStorage.clear();
						navigate('/Signin');
					}}
				>
					<SignOutIcon />
					{'Sign Out'}
				</MenuItem>
			</Menu>
		</MenuProvider>
	);
}
