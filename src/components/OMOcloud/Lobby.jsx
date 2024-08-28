import LobbyRow from "@/components/OMOcloud/LobbyRow"
import getData from "../fetchCloudData";

async function Lobby(){
    const theCloud = await getData();
    return(
        <>
            {theCloud.map((Members) => (
               <div key={Members.idNumber}>

                {console.log(theCloud)}
                lobby rows should be here
                <LobbyRow
                    name={Members.name}
                    icon={Members.icon}
                    id={Members.idNumber}
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