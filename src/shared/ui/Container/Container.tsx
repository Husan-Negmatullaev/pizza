import { clsx } from 'clsx';
import { PropsWithChildren, ReactElement } from 'react';
import { ClassNameType } from '@/shared/types/common-types.ts';
import classes from './Container.module.css';

interface ContainerProps extends PropsWithChildren<ClassNameType> {
	min?: boolean;
}

export function Container(props: ContainerProps): ReactElement {
	const { className, children, min = false } = props;

	return (
		<div className={clsx(classes.container, min && classes.min, className)}>
			{children}
		</div>
	);
}

Container.defaultProps = {
	min: false,
};
