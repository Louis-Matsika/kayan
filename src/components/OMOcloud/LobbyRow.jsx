//the row() function creates a lobby row for a given OMOcloud member
function LobbyRow({name, icon, idNumber}) {
	return (
		<div className="row">
			{/* <span className="row-team"></span> */}
			<span className="row-name">[OMO] {name}</span>
			<div className="row-right">
				<img
					className="row-icon"
					alt={name + " member icon"}
					src={icon}
				></img>
				<span className="row-number">{idNumber}</span>
			</div>
		</div>
	);
}
export default LobbyRow;