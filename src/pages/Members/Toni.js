import { Toni } from "../../components/OMOcloud/Members";

function ToniPage() {
	return (
		<div className="background">
			<div>{Toni.callingCard()}</div>
			<div>{Toni.links()}</div>
		</div>
	);
}

export default ToniPage;
