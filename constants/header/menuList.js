import { SPECIALTY_CARD_LIST } from '../home/specialtySection';

const specialtyChoices = SPECIALTY_CARD_LIST.map(({ title, link }) => {
	return { name: title, link };
});

export const MENU_CHOICES = [
	{
		name: 'Inicio',
		link: '/',
	},
	{
		name: 'Acerca del colegio',
		link: '/',
	},
	{
		name: 'Especialidades',
		subItems: specialtyChoices,
	},
	{
		name: 'Contactos',
		link: '/',
	},
];
