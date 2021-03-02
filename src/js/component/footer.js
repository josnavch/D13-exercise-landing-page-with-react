import React from "react";
import ReactDOM from "react-dom";

export function Footer() {
	return (
		<footer className="bg-dark text-center text-lg-start">
			<div
				className="text-center p-3 text-white"
				styles="background-color: rgba(0, 0, 0, 0.2);">
				© 2021 Copyright: Your Website
				<a className="text-white" href="#">
					website.com
				</a>
			</div>
		</footer>
	);
}
