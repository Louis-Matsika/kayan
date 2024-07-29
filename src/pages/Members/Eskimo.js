import { Eskimo } from "../../components/OMOcloud/Members";

function EskimoPage() {
	return (
		<div>
			<div className="background">
				<div>{Eskimo.callingCard()}</div>
				<div>{Eskimo.links()}</div>
			</div>
		</div>
	);
}

export default EskimoPage;
