import { Bakura } from "../../components/Members/Members";

function BakuraPage() {
	return (
		<div>
			<div className="member-content-container content-container">
				<div>{Bakura.callingCard()}</div>
				<div>{Bakura.links()}</div>
			</div>
		</div>
	);
}

export default BakuraPage;
