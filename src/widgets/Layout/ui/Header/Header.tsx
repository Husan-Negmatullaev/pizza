import { clsx } from 'clsx';
import { ReactElement } from 'react';
import { ClassNameType } from '@/shared/types/common-types';
import { ClockIcon, SearchIcon } from '@/shared/ui/Icons/Icons';
import classes from './Header.module.scss';

interface HeaderProps extends ClassNameType {}

export function Header(props: HeaderProps): ReactElement {
	const { className } = props;

	return (
		<header className={clsx(classes.header, className)}>
			<div className={classes.header__body}>
				<div className={clsx(classes.header__contacts, classes.contacts)}>
					<div className={classes.contacts__body}>
						<h4 className={classes.contacts__title}>Наш телефон</h4>
						<div className={classes.contacts__phones}>
							<a href='tel:+996705188955'>+996 705 188 955</a>
							<a href='tel:+996555188955'>+996 555 188 955</a>
						</div>
						<div className={classes.contacts__time}>
							<ClockIcon className={classes.contacts__timeIcon} />{' '}
							<span className={classes.contacts__timeText}>
								работаем с 10:00 до 00:00
							</span>
						</div>
					</div>
				</div>
				<div className={clsx(classes.header__content, classes.content)}>
					<div className={classes.content__locations}>
						<div className={classes.content__title}>Город:</div>
						<h4 className={classes.content__city}>Бишкек</h4>
					</div>
					<nav className={classes.content__navigation}>
						<button type='button' className={classes.content__link}>
							Отзывы
						</button>
						<button type='button' className={classes.content__link}>
							Доставка и оплата
						</button>
					</nav>
				</div>
				<div className={clsx(classes.header__actions, classes.actions)}>
					<button type='button' className={classes.actions__search}>
						<SearchIcon />
					</button>
				</div>
			</div>
		</header>
	);
}
