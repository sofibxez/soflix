import {
	Box,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
} from '@mui/material';
import { MENU_CHOICES } from '../../constants/header/menuList';
import styles from './styles.module.css';

const Sidebar = ({ showDrawer, setShowDrawer }) => {
	const toggleDrawer = value => event => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setShowDrawer(value);
	};

	return (
		<Drawer
			anchor={'right'}
			open={showDrawer}
			onClose={toggleDrawer(false)}
			className={styles.drawer}
		>
			<Box
				className={styles.list_container}
				role="presentation"
				onClick={() => toggleDrawer(false)}
				onKeyDown={() => toggleDrawer(false)}
			>
				<List>
					{MENU_CHOICES?.map(({ name }) => (
						<ListItem key={name} disablePadding>
							<ListItemButton>
								<ListItemText primary={name} className={styles.list_item} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Box>
		</Drawer>
	);
};

export default Sidebar;
