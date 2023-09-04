import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	Button,
	// IconButton
	// MenuIcon
} from '@mui/material';
import { MENU_CHOICES } from '../../constants/menu/menuList';
import classNames from 'classnames';
import Logo from './../../assets/img/logo.png';
import globalStyles from './../../assets/styles/global.module.css';
import styles from './styles.module.css';

const Header = () => {
	return (
		<Box className={styles.header_container}>
			<AppBar className={styles.header}>
				<Toolbar
					className={classNames(styles.toolbar, globalStyles.document_margin)}
				>
					<Image src={Logo} width={48} height={48} alt="logo" />

					<div className={styles.menu_container}>
						{MENU_CHOICES.map(({ name, link }) => {
							return (
								<Link href={link} key={name}>
									<Typography variant="button" noWrap component="p">
										{name}
									</Typography>
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
