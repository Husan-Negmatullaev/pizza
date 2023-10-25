import { clsx } from 'clsx';
import { ReactElement } from 'react';
import { ClassNameType } from '@/shared/types/common-types';

interface CartAsideProps extends ClassNameType {}

export function CartAside(props: CartAsideProps): ReactElement {
	const { className } = props;

	return <aside className={clsx(className)}>Cart Aside</aside>;
}
