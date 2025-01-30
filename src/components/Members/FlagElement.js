import OMOcloud from "./OMOcloud";

function FlagElement({ memberFlag }) {
	return (
		<>
			{memberFlag !== "" && (
				<image className="calling-card-flag" src={memberFlag}></image>
			)}
		</>
	);
}

export default FlagElement;
