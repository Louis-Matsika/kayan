import { LOSS } from "../../components/Members/Members";

function LossPage() {
	return (
		<div>
			<div className="member-content-container content-container">
				<div>{LOSS.callingCard()}</div>
				<div>{LOSS.links()}</div>
			</div>
		</div>
	);
}

export default LossPage;
