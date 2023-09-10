import React from 'react';
import { MENU_CHOICES } from '../../../constants/header/menuList';
import { Box, Button, Menu, MenuItem, Typography } from '@mui/material';
import Link from 'next/link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import styles from './styles.module.css';

const HeaderMenuList = () => {
	const [anchorElSubItems, setAnchorElSubItems] = React.useState(null);

	const handleShowSubItems = ({ event, subItems }) => {
		subItems && setAnchorElSubItems(event.currentTarget);
	};

	const handleCloseSubItems = () => {
		setAnchorElSubItems(null);
	};

	return (
		<Box className={styles.menu_list_wrapper}>
			{MENU_CHOICES.map(({ name, link, subItems }) => {
				return (
					<Box key={`header_menu_list_${name}`} className={styles.menu_item}>
						{link && !subItems ? (
							<Link href={link}>
								<Button>{name}</Button>
							</Link>
						) : (
							<Box className={styles.item_container}>
								<Button
									onClick={event => handleShowSubItems({ event, subItems })}
								>
									{name}
								</Button>

								{Boolean(anchorElSubItems) ? (
									<ExpandLessIcon />
								) : (
									<ExpandMoreIcon />
								)}
							</Box>
						)}

						{subItems && (
							<Menu
								className={styles.sub_menu_container}
								id={`${name}_sub_list`}
								anchorEl={anchorElSubItems}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								keepMounted
								disableScrollLock
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								open={Boolean(anchorElSubItems)}
								onClose={handleCloseSubItems}
							>
								{subItems?.map(({ name: subName, link: subLink }) => (
									<MenuItem
										key={`header_${name}_sub_menu_${subName}`}
										onClick={handleCloseSubItems}
									>
										<Link href={subLink} className={styles.sub_menu_link}>
											<Typography textAlign="center">{subName}</Typography>
										</Link>
									</MenuItem>
								))}
							</Menu>
						)}
					</Box>
				);
			})}
		</Box>
	);
};

export default HeaderMenuList;
