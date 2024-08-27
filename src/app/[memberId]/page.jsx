import { SAI } from "../../components/OMOcloud/Members.js";

function MemberPage({params}) {
	const member = params.memberId;
	return (
		<div>
		{params.memberId}
		{SAI.callingCard()}	
		</div>
	);
}

export default MemberPage;
