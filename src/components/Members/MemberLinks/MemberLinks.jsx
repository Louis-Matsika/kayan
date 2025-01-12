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

    //return only the relevant OMOcloud member
    const member = theCloud.filter(function(item)
    {
        return item.username == requestedId;
    })


    return(
        <>
        {theCloud.length === 0 && <p> theres no links!</p>}
        <p>{JSON.stringify(member.linkElements)}</p>
        {Array(member.LinkElement).map((link, index) => (
            <div key={index}>
                {link}
                {link}

            </div>
        ))}
        </>
    );
}

export default MemberLinks;
