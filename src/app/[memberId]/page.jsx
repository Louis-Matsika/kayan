import Lobby from "@/components/OMOcloud/Lobby.jsx";

async function MemberPage({params}) {
	const member = params.memberId;
	return (
		<div>
		{params.memberId}
		<Lobby />

		</div>
	);
}

export default MemberPage;
