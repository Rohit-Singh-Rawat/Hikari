import ProfileMenu from './ProfileMenu';
import Avatar from './Avatar';

const Profile = () => {
  return (
		<ProfileMenu
			userEmail='rohitsrawat3002@gmail.com'
			userName='Rohit Singh Rawat'
		>
			<Avatar
				name='Rohit'
				className='size-7 md:size-8'
			/>
		</ProfileMenu>
	);
}

export default Profile
