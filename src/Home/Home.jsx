import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="home-container">
			<h1>
				Benvenuti nel nostro servizio di consulenza gratuita per le bollette
				energetiche!
			</h1>
			<p>
				Siamo un gruppo di esperti che offrono consulenza gratuita per aiutarti
				a comprendere meglio le tue bollette di luce e gas.
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
