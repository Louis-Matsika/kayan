import Lobby from "@/components/Members/Lobby/Lobby.jsx";
import CallingCard from "@/components/Members/CallingCard/CallingCard"
import MemberLinks from "@/components/Members/Links/MemberLinks"

async function MemberPage({params}) {
	
	const member = params.cloudMember;

	return (
		<div>
		{params.cloudMember}
		<CallingCard
			requestedId={params.cloudMember} 
			/>
		<MemberLinks
			requestedId={params.cloudMember}
			/>
		</div>
	);
}

export default MemberPage;
