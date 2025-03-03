import { useState } from "react";
import "../css-components/QuoteForm.css";

export default function QuoteForm() {
	const [quoteType, setQuoteType] = useState(null);
	const [formData, setFormData] = useState({});

	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleFileChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.files[0] });
	};

	const renderForm = () => {
		if (!quoteType) return null;

		return (
			<div className="card">
				<div className="card-content">
					<h2>Inserisci i dati della tua bolletta</h2>
					<form>
						<div className="form-group">
							<label>
								Periodo di riferimento fatturazione <span>①</span>
							</label>

							<div className="date-range">
								<input
									className="input-data"
									name="data_inizio"
									type="date"
									onChange={handleChange}
								/>

								<p>a</p>

								<input
									className="input-data"
									name="data_fine"
									type="date"
									onChange={handleChange}
								/>
							</div>
						</div>
						{quoteType === "energia" && (
							<div className="form-group">
								<label>
									Spesa per la materia Energia elettrica <span>②</span>{" "}
								</label>
								<input name="consumo" type="number" onChange={handleChange} />
							</div>
						)}
						{quoteType === "gas" && (
							<div className="form-group">
								<label>
									Spesa per la materia Gas <span>②</span>{" "}
								</label>
								<input name="consumo" type="number" onChange={handleChange} />
							</div>
						)}

						{quoteType === "gas" && (
							<div className="form-group">
								<label>
									Consumo in Smc <span>③</span>
								</label>
								<input
									name="consumo_smc"
									type="number"
									onChange={handleChange}
								/>
							</div>
						)}
						{quoteType === "energia" && (
							<div className="form-group">
								<label>
									Potenza impegnata (kW/h) <span>③</span>{" "}
								</label>
								<input name="potenza" type="number" onChange={handleChange} />
							</div>
						)}
						<button type="submit">Calcola</button>
						<p className="attention">Oppure</p>
						<div className="form-group">
							<label>Carica la bolletta</label>
							<input name="bolletta" type="file" onChange={handleFileChange} />
						</div>
						<button type="submit">Invia</button>
					</form>
				</div>

				{quoteType === "energia" && (
					<img
						className="img-info"
						src="1 (2).png"
						width={"50%"}
						height={"75%"}
						alt=""
					/>
				)}
			</div>
		);
	};

	return (
		<div className="container-prev">
			<h1>Richiedi un preventivo</h1>
			<p>
				Compilando questo modulo, puoi ottenere un preventivo senza rischi:
				<span> nessuna attivazione avverrà senza il tuo consenso.</span>
			</p>
			<p className="attention">
				Inserendo manualmente le 3 voci richieste nella foto saremo in grado di
				decretare se il tuo fornitore ti sta vendendo{" "}
				{quoteType === "energia" && "l'energia"}c ad un prezzo onesto.
				Calcoleremo il costo della materia prima in base al prezzo di mercato (
				{quoteType === "energia" && "PSV"}
				{quoteType === "gas" && "PUN"}), e lo compareremo con il costo
				addebitato. ②
			</p>
			<select onChange={e => setQuoteType(e.target.value)}>
				<option value="">Seleziona un'opzione</option>
				<option value="energia">Preventivo Energia Elettrica</option>
				<option value="gas">Preventivo Gas</option>
			</select>
			{renderForm()}
		</div>
	);
}
