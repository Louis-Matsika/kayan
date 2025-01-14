import OMOcloud from "./OMOcloud";

function FlagElement({ memberFlag }) {
	return (
		<>
			{memberFlag !== "" && (
				<img className="calling-card-flag" src={memberFlag}></img>
			)}
		</>
	);
}

export default FlagElement;
