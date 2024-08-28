import "@/components/Members/Lobby/Lobby.css";
import "@/components/Members/OMOcloud.css";
import LobbyRow from "@/components/Members/Lobby/LobbyRow"
import fetchData from "@/components/fetchMemberData";


async function Lobby(){
    const theCloud = await fetchData();

    return(
        <>
            {theCloud.map((welcome, index) => (
               <div key={index}>

                {console.log(theCloud)}
                lobby rows should be here
                <LobbyRow
                    name={welcome.name}
                    icon={welcome.icon}
                    id={welcome.idNumber}
                />

               </div>
            ))}

            {theCloud.length === 0 && (
                <p>whoopss something went wrong try later {console.log(theCloud)}</p>

            )}
            <div>{JSON.stringify(theCloud)}</div>
        </>
    );
}

export default Lobby;