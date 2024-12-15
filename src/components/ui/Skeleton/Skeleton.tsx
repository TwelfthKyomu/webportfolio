'use client'
import { Children, cloneElement, FC, isValidElement, memo, ReactElement, ReactNode } from 'react';

import styles from './Skeleton.module.scss';

type SkeletonProps = {
	children: ReactNode;
	isLoading?: boolean;
}

const enhanceChildren = (child: ReactNode, isLoading: boolean): ReactNode => {
	if (!isValidElement(child)) return child;

	const childElement = child as ReactElement<{ className?: string; children?: ReactNode }>;
	const className = `${childElement.props.className || ''} ${isLoading ? styles.skeleton : ''}`.trim();

	return cloneElement(childElement, {
		className,
		children: childElement.props.children
			? Children.map(childElement.props.children, (c) => enhanceChildren(c, isLoading))
			: null
	});
};

const SkeletonComponent: FC<SkeletonProps> = ({children, isLoading = false}) => {
	return <>{ Children.map(children, (child) => enhanceChildren(child, isLoading)) }</>;
};

export const Skeleton = memo(SkeletonComponent);