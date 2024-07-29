import { Eskimo } from "../../components/OMOcloud/Members";

function EskimoPage() {
	return (
		<div>
			<div className="background padding-top">
				<div>{Eskimo.callingCard()}</div>
				<div>{Eskimo.links()}</div>
			</div>
		</div>
	);
}

export default EskimoPage;
