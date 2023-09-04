import React from 'react';
import Image from 'next/image';
import EscuelaBanner from './../../assets/img/escuela-banner.jpg';
import styles from './styles.module.css';

const Banner = () => {
	return (
		<div className={styles.banner_container}>
			<Image src={EscuelaBanner} alt="school-banner" />
		</div>
	);
};

export default Banner;
