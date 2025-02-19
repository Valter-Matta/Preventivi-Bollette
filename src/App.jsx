import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Link } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Register from "./Register/Register";
import UploadBill from "./bill/BillElectric";
import store from "./redux/store";
import "boxicons";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div className="app-container">
					<nav className="navbar">
						<div className="navbar-brand">
							<box-icon
								className="icon"
								name="bolt-circle"
								type="solid"
								rotate="180"
							></box-icon>
							Consulenza Energetica
						</div>
						<div className="navbar-links">
							<Link className="active" to="/">
								Home
							</Link>
							<Link className="nav-btn-1" to="/login">
								Accedi
							</Link>
							<Link className="nav-btn-2" to="/upload-bill">
								Prova
							</Link>
							<Link to="/contatti">Contatti</Link>
						</div>
					</nav>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/upload-bill" element={<UploadBill />} />
					</Routes>
				</div>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
