import LinkElement from "@/components/Members/Links/LinkElement.jsx"

import fetchData from "@/components/fetchMemberData";

//gathers a users social links
async function Links({
        requestedId,
        links
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
        {member.map((member, index) => (
                //map out member data to create a lobby made up of lobby rows
                <div key={index} className="row-link">
                    <div href={"/" + member.username}>
                        <LinkElement 
                            memberLink={Object.values(member.links)[0]}
                            platformId={Object.keys(member.links)[0]} 
                        />
                        <LinkElement 
                            memberLink={Object.values(member.links)[1]}
                            platformId={Object.keys(member.links)[1]} 
                        />
                        <LinkElement 
                            memberLink={Object.values(member.links)[2]}
                            platformId={Object.keys(member.links)[2]} 
                        />
                        <LinkElement 
                            memberLink={Object.values(member.links)[3]}
                            platformId={Object.keys(member.links)[3]} 
                        />
                        <LinkElement 
                            memberLink={Object.values(member.links)[4]}
                            platformId={Object.keys(member.links)[4]} 
                        />
                        <LinkElement 
                            memberLink={Object.values(member.links)[5]}
                            platformId={Object.keys(member.links)[5]} 
                        />
                    </div>
                </div>
            ))}

        {theCloud.length === 0 && <p> theres no links!</p>}
        </>
    );
}

export default Links;

// <LinkElement
//                     memberLink={Object.values(member.links)[index]}
//                     platformId={Object.keys(member.links)[index]}
//                 />