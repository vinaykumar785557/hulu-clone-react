import React from 'react';
import './Header.css';

import {
	FlashOn,
	Home,
	LiveTv,
	PersonOutline,
	Search,
	VideoLibrary,
} from '@mui/icons-material';
function Header() {
	// BEM naming class convention
	return (
		<div className='header'>
			<div className='header__icons'>
				{/* All icons here */}

				<div className='header__icon header__icon--active'>
					<Home />
					<p>Home</p>
				</div>
				<div className='header__icon'>
					<FlashOn />
					<p>Trending</p>
				</div>
				<div className='header__icon'>
					<LiveTv />
					<p>Verified</p>
				</div>
				<div className='header__icon'>
					<VideoLibrary />
					<p>Collections</p>
				</div>
				<div className='header__icon'>
					<Search />
					<p>Search</p>
				</div>
				<div className='header__icon'>
					<PersonOutline />
					<p>Account</p>
				</div>
			</div>
			<img
				src='https://www.nicepng.com/png/full/242-2424140_hulu-png-logo-hulu-logo-white-png.png'
				alt='hulu-logo'></img>
		</div>
	);
}

export default Header;
