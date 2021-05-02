import { motion } from 'framer-motion';
import React from 'react';

const pageVariants = {
	initial: {
		opacity: 0
	},
	in: {
		opacity: 1
	},
	out: {
		opacity: 0
	}
};

const pageTransition = {
	type: 'tween',
	ease: 'anticipate',
	duration: 0.4
};

export interface PageWrapperProps {
	forceReadableWidth?: boolean;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, forceReadableWidth }) => {
	return (
		<motion.div
			initial="initial"
			animate="in"
			exit="out"
			variants={pageVariants}
			transition={pageTransition}
			className="min-w-0 pb-4"
			style={{ maxWidth: forceReadableWidth ? '65ch' : undefined }}
		>
			{children}
		</motion.div>
	);
};

export default PageWrapper;
