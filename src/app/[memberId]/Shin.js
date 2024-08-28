import { Shin } from "../../components/Members/Members";

function ShinPage() {
	return (
		<div>
			<div className="member-content-container content-container">
				<div>{Shin.callingCard()}</div>
				<div>{Shin.links()}</div>
			</div>
		</div>
	);
}

export default ShinPage;
