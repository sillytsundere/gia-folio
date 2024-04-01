import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
	return (
		<div>
			<h1>404</h1>
			<p>Oops! The page you are looking for does not exist.</p>
			<Link to="/">Go to Home Page</Link>
		</div>
	);
}