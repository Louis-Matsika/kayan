import { Toni } from "../../components/Members/Members";

function ToniPage() {
	return (
		<div>
			<div className="member-content-container content-container">
				<div>{Toni.callingCard()}</div>
				<div>{Toni.links()}</div>
			</div>
		</div>
	);
}

export default ToniPage;
