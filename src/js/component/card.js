import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="card" styles="width:16rem;">
			<img
				className="card-img-top"
				src={props.cardImage}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.cardTitle}</h5>
				<p className="card-text">{props.cardText}</p>
				<a href={props.cardButtonURL} className="btn btn-primary">
					{props.cardButtonLabel}
				</a>
			</div>
		</div>
	);
}

Card.propTypes = {
	//proptypes here
	cardImage: PropTypes.string,
	cardTitle: PropTypes.string,
	cardText: PropTypes.string,
	cardButtonLabel: PropTypes.string,
	cardButtonURL: PropTypes.string
};
