function Login() {
	return (
		<div className="login-container">
			<h2>Login</h2>
			<form className="login-form">
				<label>Email:</label>
				<input type="email" required />

				<label>Password:</label>
				<input type="password" required />

				<button type="submit">Accedi</button>
			</form>
		</div>
	);
}

export default Login;
