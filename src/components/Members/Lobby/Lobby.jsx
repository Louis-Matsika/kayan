import "@/components/Members/Lobby/Lobby.css";
import "@/components/Members/OMOcloud.css";
import Link from "next/link";
import LobbyRow from "@/components/Members/Lobby/LobbyRow";
import fetchData from "@/components/fetchMemberData";

async function Lobby() {
    //fetch member data
    const theCloud = await fetchData();

    return (
        <>
            {/* map out member data to create a lobby made up of lobby rows */}
            {console.log(JSON.stringify(theCloud))}
            {theCloud.map((member, index) => (
                <div key={index} className="row-link">
                    <Link href={"/" + member.username}>
                        <LobbyRow name={member.name} icon={member.icon} idNumber={member.idNumber} />
                    </Link>
                </div>
            ))}
            {theCloud.length === 0 && <p>whoopss something went wrong try later, AHHHHH we have no members!!</p>}
        </>
    );
}

export default Lobby;
