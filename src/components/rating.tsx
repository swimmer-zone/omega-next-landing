import { JSX } from 'react';

import './_scss/rating.scss';

type Props = {
	rating: number;
	max?: number;
};

function StarIcon() {
	return (<svg className="star" viewBox="0 0 24 24" aria-hidden="true">
			<path d="M12 2.5l2.9 6 6.6 1-4.8 4.7 1.1 6.6L12 17.7 6.2 20.8l1.1-6.6L2.5 9.5l6.6-1 2.9-6z" />
		</svg>);
}

export default function Rating({ rating, max = 5 }: Props): JSX.Element {
	const numericRating = Number(rating);
	const safeRating = Number.isFinite(numericRating)
		? Math.max(0, Math.min(numericRating, max))
		: 0;

	const fillPercentage = (safeRating / max) * 100;

	return (
		<div
			className="stars"
			aria-label={`${safeRating} out of ${max} stars`}
			title={`${safeRating} / ${max}`}
		>
			<div className="stars-row stars-base">
				{Array.from({ length: max }).map((_, index) => (
					<StarIcon key={`base-${index}`} />
				))}
			</div>

			<div
				className="stars-row stars-fill"
				style={{ width: `${fillPercentage}%` }}
			>
				{Array.from({ length: max }).map((_, index) => (
					<StarIcon key={`fill-${index}`} />
				))}
			</div>
		</div>
	);
}