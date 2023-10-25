import { ClassNameType } from '@/shared/types/common-types';
import { ReactElement } from 'react';
import { clsx } from 'clsx';

interface NavigationAsideProps extends ClassNameType {}

export function MenuAside(props: NavigationAsideProps): ReactElement {
	const { className } = props;

	return <aside className={clsx(className)}>Navigation</aside>;
}
