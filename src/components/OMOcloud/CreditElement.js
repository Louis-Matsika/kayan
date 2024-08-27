import OMOcloud from "./OMOcloud";

function CreditElement({ memberCredit }) {
	return (
		<>
			{memberCredit !== "" && (
				<img className="calling-card-skill" src={memberCredit}></img>
			)}
		</>
	);
}

export default CreditElement;
