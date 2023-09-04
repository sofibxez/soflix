import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
	AppBar,
	Box,
	Toolbar,
	Button,
	// IconButton
	// MenuIcon
} from '@mui/material';
import { MENU_CHOICES } from '../../constants/header/menuList';
import { DISTANCE_TO_CHANGE } from '../../constants/header/headerRules';
import classNames from 'classnames';
import Logo from './../../assets/img/logo.png';
import globalStyles from './../../assets/styles/global.module.css';
import styles from './styles.module.css';

const Header = () => {
	const [scrollY, setScrollY] = useState(0);
	const [hasScroll, setHasScroll] = useState(false);

	useEffect(() => {
		// va actualizando "scrollY" con la ubicación del scroll
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		// si el scroll supera el limite activamos "hasScroll"
		if (scrollY > DISTANCE_TO_CHANGE) {
			setHasScroll(true);
		} else {
			setHasScroll(false);
		}
	}, [scrollY, DISTANCE_TO_CHANGE]);

	return (
		<Box className={styles.header_container}>
			<AppBar
				className={classNames(styles.header, {
					[styles.header_has_scroll]: hasScroll,
				})}
			>
				<Toolbar
					className={classNames(styles.toolbar, globalStyles.document_margin)}
				>
					<Image src={Logo} width={48} height={48} alt="logo" />

					<div className={styles.menu_container}>
						{MENU_CHOICES.map(({ name, link }) => {
							return (
								<Link href={link} key={name}>
									<Button>{name}</Button>
								</Link>
							);
						})}

						<Button className={styles.login_button}>Login</Button>
					</div>

					{/* <IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton> */}
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
