import LinkElement from "@/components/Members/MemberLinks/LinkElement.jsx"
import "@/components/Members/MemberLinks/MemberLinks.css"

import fetchData from "@/components/fetchMemberData";

//gathers a users social links
async function MemberLinks({
    requestedId,
})
{
    //fetch OMOcloud member data
    const theCloud = await fetchData();

    console.log(JSON.stringify(theCloud))

    //return only the relevant OMOcloud member
    const member = theCloud.filter(function(item)
    {
        return item.username == requestedId;
    })

    return(
        <>
        

        {theCloud.length === 0 && <p> theres no links!</p>}
        </>
    );
}

export default MemberLinks;
