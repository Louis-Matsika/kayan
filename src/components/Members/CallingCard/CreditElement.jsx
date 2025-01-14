function CreditElement({ memberCredit }) {
	return (
		<>
			{memberCredit !== "" && (
				<img className="calling-card-skill" alt="skills" src={memberCredit}></img>
			)}
		</>
	);
}

export default CreditElement;
