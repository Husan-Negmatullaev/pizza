import { ClassNameType } from '@/shared/types/common-types';
import { ReactElement } from 'react';
import { clsx } from 'clsx';

interface FooterProps extends ClassNameType {}

export function Footer(props: FooterProps): ReactElement {
	const { className } = props;

	return <footer className={clsx(className)}>footer</footer>;
}
