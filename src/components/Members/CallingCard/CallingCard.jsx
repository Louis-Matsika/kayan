import fetchData from "@/components/fetchMemberData";

async function CallingCard(
    requestedId,
    pfp,
    name,
    callingCard,
    tag,
    flags,
    icon,
    idNumber,
    credit
    
) {

    const theCloud = await fetchData();

    //return only the relevant OMOcloud member
    const member = theCloud.filter(function(item)
    {
        return item.username == requestedId;
    })

    return(
        <>
        <div>calling card test</div>
        {JSON.stringify(member)}
        
        </>
    )
    
}

export default CallingCard;