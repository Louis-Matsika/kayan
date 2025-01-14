function FlagElement({ memberFlag }) {
	return (
		<>
			{memberFlag !== "" && (
				<img className="calling-card-flag" alt="flag" src={memberFlag}></img>
			)}
		</>
	);
}

export default FlagElement;
