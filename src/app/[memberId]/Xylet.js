import { Xylet } from "../../components/OMOcloud/Members";

function XyletPage() {
	return (
		<div>
			<div className="member-content-container content-container">
				<div>{Xylet.callingCard()}</div>
				<div>{Xylet.links()}</div>
			</div>
		</div>
	);
}

export default XyletPage;
