import Lobby from "@/components/Members/Lobby/Lobby.jsx";
import CallingCard from "@/components/Members/CallingCard/CallingCard"
import MemberLinks from "@/components/Members/MemberLinks/MemberLinks"
import FeaturedMusic from "@/components/FeaturedMusic/FeaturedMusic"
import FeaturedVideo from "@/components/FeaturedVideo/FeaturedVideo"

async function MemberPage({params}) {
	
	// get /[dynamic link]
	const member = params.cloudMember;

	return (
		<div className="member-content-container content-container">
		<CallingCard
			requestedId={params.cloudMember} 
			/>
		<MemberLinks
			requestedId={params.cloudMember}
			/>
		<FeaturedMusic
			requestedId={params.cloudMember}
			/>
		<FeaturedVideo
			requestedId={params.cloudMember}
			/>
		</div>
	);
}

export default MemberPage;
