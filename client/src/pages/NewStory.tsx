import React from 'react'
import HikariIcon from '../components/icons/HikariIcon'
import Avatar from '../components/Avatar'
import Editor from '../components/icons/Editor';


const NewStory = () => {
  return (
		<div>
			<div className='flex justify-center items-center'>
				<HikariIcon className='h-10 w-32' />
				<div>Publish</div>
				<Avatar
					url='https://res.cloudinary.com/ytx/image/upload/v1715095202/foyp0xkxkwntfusvulas.jpg'
					className='size-8'
				/>
			</div>
      <Editor/>
		</div>
	);
}

export default NewStory
