import { ReactNode } from 'react';

import luxuryImg from '../../assets/icon-luxury.svg';
import sedansImg from '../../assets/icon-sedans.svg';
import suvsImg from '../../assets/icon-suvs.svg';

import './styles.scss';

const icons = {
	luxury: {
		iconSrc: luxuryImg,
		iconAlt: 'Luxury'
	},
	sedans: {
		iconSrc: sedansImg,
		iconAlt: 'Sedans'
	},
	suvs: {
		iconSrc: suvsImg,
		iconAlt: 'Suvs'
	},
}

const colors = {
	orange: 'var(--orange)',
	darkCyan: 'var(--dark-cyan)',
	veryDarkCyan: 'var(--very-dark-cyan)',
}

type CardProps = {
	icon: 'luxury' | 'sedans' | 'suvs';
	color: 'orange' | 'darkCyan' | 'veryDarkCyan';
	title: string;
	children: ReactNode;
}

export function Card({ icon, title, children, color }: CardProps) {
	return (
		<div className='container' style={{ background: colors[color] }}>
			<div>
				<img src={icons[icon].iconSrc} alt={icons[icon].iconAlt} />
				<h1>{title}</h1>
				<p>{children}</p>
			</div>

			<button style={{ color: colors[color] }}>
				<span>Learn More</span>
			</button>
		</div>
	)
}