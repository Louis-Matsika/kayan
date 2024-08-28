import Lobby from "@/components/Members/Lobby/Lobby.jsx";

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
