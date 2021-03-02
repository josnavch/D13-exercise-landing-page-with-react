import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";
import { Navbar } from "./navbar.js";
import { Footer } from "./footer.js";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<div className="container mt-5">
				<Jumbotron
					title="Welcome to Game World"
					description="The most amazing games are here!"
					buttonLabel="Go to the official website"
					buttonURL="https://reactjs.org/"
				/>
				<div className="row mt 3">
					<div className="col-sm-3">
						<Card
							cardImage="https://grandpopeshun.files.wordpress.com/2019/03/guia_episodios_saint_seiya_intro_part1.jpg"
							cardTitle="Saint Seiya"
							cardText="Saint Seiya, conocida como Los caballeros del Zodiaco, es una serie de manga escrita e ilustrada por Masami Kurumada"
							cardButtonLabel="Go to Saint Seiya "
							cardbuttonURL="https://grandpopeshun.files.wordpress.com/2019/03/guia_episodios_saint_seiya_intro_part1.jpg"
						/>
					</div>
					<div className="col-sm-3">
						<Card
							cardImage="https://pm1.narvii.com/6159/8c9c530daa401fc5db079e27a5dda2e3024a3868_hq.jpg"
							cardTitle="God of War"
							cardText="Durante los Diez años en los que Kratos estuvo al servicio de los Dioses del Olimpo, fue enviado a Ática para impedir la invasión de ejército persa"
							cardButtonLabel="Go to God of War"
							cardbuttonURL="https://areajugones.sport.es/videojuegos/tributo-a-las-sagas-mas-importantes-de-la-historia-god-of-war/"
						/>
					</div>
					<div className="col-sm-3">
						<Card
							cardImage="https://los40es00.epimg.net/los40/imagenes/2020/07/23/videojuegos/1595516362_784660_1595516856_noticia_normal_amp.jpg"
							cardTitle="FIFA 21"
							cardText="FIFA 21 es un videojuego de simulación de fútbol del año 2020."
							cardButtonLabel="Go to Fifa 21"
							cardbuttonURL="https://www.vidaextra.com/analisis/fifa-21-preview-avance-experiencia-juego-precio-fecha-lanzamiento-para-xbox-ps4-pc"
						/>
					</div>
					<div className="col-sm-3">
						<Card
							cardImage="https://images-na.ssl-images-amazon.com/images/I/61gEETe5-wL._AC_SY741_.jpg"
							cardTitle="The Legend of Zelda: Breath of the Wild"
							cardText="Olvida todo lo que sabes sobre los juegos de The Legend of Zelda. Entra en un mundo de descubrimientos, exploración y aventura en The Legend of Zelda: Breath of the Wild"
							cardButtonLabel="Go to Zelda BotW"
							cardbuttonURL="https://www.nintendo.es/Juegos/Nintendo-Switch/The-Legend-of-Zelda-Breath-of-the-Wild-1173609.html"
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
