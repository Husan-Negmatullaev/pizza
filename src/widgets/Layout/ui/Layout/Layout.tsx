import { ReactElement } from 'react';
import { clsx } from 'clsx';
import { ClassNameType } from '@/shared/types/common-types';
import classes from './Layout.module.scss';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { CartAside } from '../CartAside/CartAside';
import { MenuAside } from '../MenuAside/MenuAside';

interface LayoutProps extends ClassNameType {}

export function Layout(props: LayoutProps): ReactElement {
	const { className } = props;

	return (
		<div className={clsx(classes.wrapper, className)}>
			<MenuAside />
			<div className={classes.page}>
				<Header />
				<main>Main</main>
				<Footer />
			</div>
			<CartAside />
		</div>
	);
}
