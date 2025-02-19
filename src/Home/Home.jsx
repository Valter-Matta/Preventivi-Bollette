import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="home-container">
			<div className="img-container">
				<img
					src="https://i.pinimg.com/564x/e8/e4/a5/e8e4a5fe5344f7dbe7decaad145a44b3.jpg"
					alt=""
					width={"300px"}
					height={"300px"}
				/>
				<h1>
					Risparmia tempo e denaro sulle tue spese energetiche, in pochi clic
				</h1>
			</div>
			<p>
				Siamo un gruppo di esperti che offrono consulenza <span>gratuita</span>{" "}
				per aiutarti a comprendere meglio le tue bollette di{" "}
				<span>luce e gas.</span>
			</p>
			<p>
				La nostra missione è quella di garantire trasparenza e far conoscere i
				prezzi di mercato, per tutelare il consumatore e assicurare che nessuno
				paghi più del dovuto.
			</p>
			<h2>Come calcoliamo la bolletta?</h2>
			<p>
				Analizziamo i consumi indicati nella bolletta e li confrontiamo con i
				prezzi del mercato energetico attuale. Ti mostreremo come il prezzo
				dell'energia varia dal produttore fino al venditore finale.
			</p>
			<h3>Il "giro del fumo" dell'energia:</h3>
			<ul>
				<li>Produzione → Distribuzione → Vendita → Consumatore</li>
			</ul>

			<div className="home-buttons">
				<Link to="/upload-bill" className="btn">
					Fai il Preventivo
				</Link>
			</div>
		</div>
	);
}

export default Home;
