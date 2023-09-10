import React from 'react';
import { Box, Divider } from '@mui/material';
import SpecialtiesCards from './SpecialtiesCards';
import { SPECIALTY_CARD_LIST } from '../../constants/home/specialtySection';
import styles from './styles.module.css';

const SpecialtiesList = () => {
	const cardListLength = SPECIALTY_CARD_LIST?.length;
	const lasCardListIndex = cardListLength - 1;

	return (
		<Box className={styles.specialties_wrapper}>
			<Box className={styles.specialties_container}>
				{SPECIALTY_CARD_LIST?.map(
					({ SpecialtyIcon, iconColor, title, description, link }, index) => {
						return (
							<>
								<SpecialtiesCards
									SpecialtyIcon={SpecialtyIcon}
									iconColor={iconColor}
									title={title}
									description={description}
									link={link}
								/>

								{cardListLength > 0 && index !== lasCardListIndex && (
									<Divider className={styles.card_divider} />
								)}
							</>
						);
					}
				)}
			</Box>
		</Box>
	);
};

export default SpecialtiesList;
