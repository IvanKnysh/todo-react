
const Header = ({authentication, logIn, logOut}) => {
	return (
		<div className="header">
			<h2>Список завдань</h2>
			{
				authentication
					?
					<>
						<p>{authentication.displayName}</p>
						<img src={authentication.photoURL} alt="Avatar" />
						<div className="login" onClick={logOut}>Вихід</div>
					</>
					:
					<div className="login" onClick={logIn}>Вхід</div>
			}
		</div>
	);
};

export default Header;