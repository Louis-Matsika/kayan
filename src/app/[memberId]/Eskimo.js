import { Eskimo } from "../../components/Members/Members";

function EskimoPage() {
	return (
		<div>
			<div className="member-content-container content-container">
				<div>{Eskimo.callingCard()}</div>
				<div>{Eskimo.links()}</div>
			</div>
		</div>
	);
}

export default EskimoPage;
