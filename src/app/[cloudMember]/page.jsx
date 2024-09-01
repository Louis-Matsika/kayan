import Lobby from "@/components/Members/Lobby/Lobby.jsx";
import CallingCard from "@/components/Members/CallingCard/CallingCard"

async function MemberPage({params}) {
	const member = params.cloudMember;
	return (
		<div>
		{params.cloudMember}
		<CallingCard
			requestedId={params.cloudMember} 
			/>
		</div>
	);
}

export default MemberPage;
