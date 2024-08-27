import FetchMember from "@/components/FetchMember";

async function MemberPage({params}) {
	const member = params.memberId;
	return (
		<div>
		{params.memberId}
		<FetchMember />

		</div>
	);
}

export default MemberPage;
