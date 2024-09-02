import Lobby from "@/components/Members/Lobby/Lobby.jsx";
import CallingCard from "@/components/Members/CallingCard/CallingCard"
import MemberLinks from "@/components/Members/MemberLinks/MemberLinks"
import FeaturedMusic from "@/components/FeaturedMusic/FeaturedMusic"

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
		<FeaturedMusic
			requestedId={params.cloudMember}
			musicTitle="test song"
			musicArt="sai-1-.jpg"
			description="test description"
			soundcloudLink="test link 1"
			spotifyLink="test link 2"
			youtubeLink="test link 3"
			/>
		</div>
	);
}

export default MemberPage;
