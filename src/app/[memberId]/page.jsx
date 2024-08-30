import Lobby from "@/components/Members/Lobby/Lobby.jsx";
import CallingCard from "@/components/Members/CallingCard/CallingCard"

async function MemberPage({params}) {
	const member = params.memberId;
	return (
		<div>
		{params.memberId}
		<CallingCard />
		<Lobby />
		</div>
	);
}

export default MemberPage;
