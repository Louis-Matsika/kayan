import { Xylet } from "../../components/OMOcloud/Members";

function XyletPage() {
	return (
		<div className="background">
			<div>{Xylet.callingCard()}</div>
			<div>{Xylet.links()}</div>
		</div>
	);
}

export default XyletPage;
