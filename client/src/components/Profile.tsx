import ProfileMenu from './ProfileMenu';
import Avatar from './Avatar';
import { User, useAuth } from '../Context/AuthContext';

const Profile = () => {
	const {user}=useAuth()
	const localUser: User =  JSON.parse(localStorage.getItem('User') as string )
  return (
		<ProfileMenu
			userEmail={user?.email || localUser.email}
			userName={user?.username || localUser.username}
		>
			<Avatar
				name={user?.FullName || localUser.FullName}
				className='size-7 md:size-8'
			/>
		</ProfileMenu>
	);
}

export default Profile
