import { Shin } from "../../components/OMOcloud/Members";

function ShinPage() {
	return (
		<div className="background">
			<div>{Shin.callingCard()}</div>
			<div>{Shin.links()}</div>
		</div>
	);
}

export default ShinPage;
