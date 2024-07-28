import { SAI } from "../../components/OMOcloud/Members";

function SaiPage() {
	return (
		<div className="background">
			<div>{SAI.callingCard()}</div>
			<div>{SAI.links()}</div>
		</div>
	);
}

export default SaiPage;
