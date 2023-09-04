import React from 'react';
import Header from './../../components/Header';
import globalStyles from './../../assets/styles/global.module.css';

const DefaultLayout = ({ children }) => {
	return (
		<div className={globalStyles.document_margin}>
			<Header />

			{children}
		</div>
	);
};

export default DefaultLayout;
