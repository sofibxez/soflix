import React from 'react';
import Image from 'next/image';
import { Box, Button, Fade, Typography } from '@mui/material';
import BannerTemporal from './../../assets/img/banner-temporal.jpg';
import Link from 'next/link';
import styles from './styles.module.css';

const Banner = () => {
	return (
		<Box className={styles.banner_wrapper}>
			<Box className={styles.banner_container}>
				<Image src={BannerTemporal} alt="school-banner" />

				<Fade in={true}>
					<Box className={styles.title_container}>
						<Typography
							variant="h2"
							component="h2"
							className={styles.banner_title}
						>
							Las chicas del cable
						</Typography>

						<Box>
							<Typography
								variant="body1"
								component="p"
								className={styles.banner_text}
							>
								Cuatro mujeres de la Compañía Telefónica Nacional española
								promueven una…
							</Typography>
						</Box>

						<Link href="/inscripciones">
							<Button
								variant="contained"
								size="large"
								className={styles.banner_button}
							>
								Ver ▶
							</Button>
						</Link>
					</Box>
				</Fade>
			</Box>
		</Box>
	);
};

export default Banner;
