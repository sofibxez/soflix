import { useState, useEffect } from 'react';
import Image from 'next/image';
import { AppBar, Box, Toolbar, Tooltip } from '@mui/material';
import Sidebar from '../Drawer';
import HeaderMenuList from './HeaderMenuList';
import { DISTANCE_TO_CHANGE } from '../../constants/header/headerRules';
import Logo from './../../assets/img/logo.png';
import globalStyles from './../../assets/styles/global.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import classNames from 'classnames';
import styles from './styles.module.css';
import Link from 'next/link';

const Header = () => {
	const [scrollY, setScrollY] = useState(0);
	const [hasScroll, setHasScroll] = useState(false);
	const [showDrawer, setShowDrawer] = useState(false);

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
					<Link href="/">
						<Tooltip title="Inicio - Tec 3" placement="bottom-start">
							<Image src={Logo} width={48} height={48} alt="logo" />
						</Tooltip>
					</Link>

					<HeaderMenuList />

					<MenuIcon
						className={styles.menu_button}
						onClick={() => setShowDrawer(true)}
					/>

					<Sidebar showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
