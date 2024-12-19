'use client';

import React, { useEffect, useRef } from 'react';
import {
	useInView,
	useMotionValue,
	useSpring,
} from 'framer-motion';

interface AnimatedNumbersProps {
	value: number;
}

const AnimatedNumbers: React.FC<AnimatedNumbersProps> = ({
	value,
}) => {
	const ref = useRef<HTMLSpanElement>(null);

	const motionValue = useMotionValue(0);
	const springValue = useSpring(motionValue, {
		duration: 5000,
	});
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (isInView) {
			motionValue.set(value);
		}
	}, [isInView, value, motionValue]);

	useEffect(() => {
		springValue.on('change', (latest) => {
			const latestNumber = Number(latest.toFixed(0)); 
			if (ref.current && latestNumber <= value) {
				ref.current.textContent = latestNumber.toString();
			}
		});
	}, [springValue, value]);

	return <span ref={ref}></span>;
};

export default AnimatedNumbers;
