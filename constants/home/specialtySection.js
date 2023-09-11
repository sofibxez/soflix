import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import ScienceIcon from '@mui/icons-material/Science';
import MemoryIcon from '@mui/icons-material/Memory';
import TerminalIcon from '@mui/icons-material/Terminal';
import HandymanIcon from '@mui/icons-material/Handyman';
import { PATH_ROUTES } from '../routes/routes';

export const SPECIALTY_CARD_LIST = [
	{
		SpecialtyIcon: TerminalIcon,
		iconColor: '#93C572',
		title: 'Informática',
		description:
			'El Técnico en Informática Profesional y Personal está capacitado para asistir al usuario de productos...',
		link: PATH_ROUTES.ESPECIALIDADES.INFORMATICA,
	},
	{
		SpecialtyIcon: DirectionsCarFilledOutlinedIcon,
		iconColor: '#fd6d27',
		title: 'Automotores',
		description:
			'El Técnico en Automotores está capacitado para manifestar conocimientos, habilidades...',
		link: PATH_ROUTES.ESPECIALIDADES.AUTOMOTORES,
	},
	{
		SpecialtyIcon: FlashOnIcon,
		iconColor: '#ee0979',
		title: 'Electromecánica',
		description:
			'El Técnico del sector Electromecánico está capacitado para manifestar conocimientos, habilidades...',
		link: PATH_ROUTES.ESPECIALIDADES.ELECTROMECANICA,
	},
	{
		SpecialtyIcon: ScienceIcon,
		iconColor: '#1ac0c6',
		title: 'Química',
		description:
			'El Técnico del sector químico está capacitado para manifestar conocimientos, habilidades...',
		link: PATH_ROUTES.ESPECIALIDADES.QUIMICA,
	},
	{
		SpecialtyIcon: MemoryIcon,
		iconColor: '#c679e3',
		title: 'Electrónica',
		description:
			'El Técnico en Electrónica está capacitado para manifestar conocimientos, habilidades...',
		link: PATH_ROUTES.ESPECIALIDADES.ELECTRONICA,
	},
	{
		SpecialtyIcon: HandymanIcon,
		iconColor: '#facd60',
		title: 'Construcciones',
		description:
			'El Maestro Mayor de Obras está capacitado para manifestar conocimientos, habilidades...',
		link: PATH_ROUTES.ESPECIALIDADES.CONSTRUCCIONES,
	},
];
