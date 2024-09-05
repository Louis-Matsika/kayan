import "./CallingCard.css"
import "../OMOcloud.css"

import { redirect } from 'next/navigation'

import fetchData from "@/components/fetchMemberData";
import FlagElement from "@/components/Members/CallingCard/FlagElement.jsx"
import CreditElement from "@/components/Members/CallingCard/CreditElement.jsx"

//the callingCard() function creates a calling card for a given OMOcloud member
async function CallingCard(
    {
        requestedId,
        pfp,
        name,
        callingCard,
        tag,
        flags,
        icon,
        idNumber,
        credit
    }) 
    
{
    //fetch OMOcloud member data
    const theCloud = await fetchData();

    //return only the relevant OMOcloud member
    const member = theCloud.filter(function(item)
    {
        return item.username == requestedId;
    })

    return (
    <>
        {/* using data of relevant member make a calling card */}
           {member.map((member, index) => (
            <div key={index} className="calling-card content-box">
            <img className="calling-card-pfp content-image" alt="profile picture"src={member.pfp}></img>
				<div className="calling-card-right content-right">

					<div>
						<p className="calling-card-name content-title">{member.name}</p>
						<div className="calling-card-banner-wrapper">
							<img
                                alt="calling-card-banner"
								className="calling-card-banner"
								src={member.callingCard}
						></img>
							<p className="calling-card-tag">{member.tag}</p>
						</div>
					</div>

					<div className="calling-card-flags flex-absolute">
						<FlagElement memberFlag={Object.values(member.flags)[0]} />
						<FlagElement memberFlag={Object.values(member.flags)[1]} />
					</div>

					<div className="calling-card-number-wrapper flex-absolute">
						<img className="calling-card-icon" alt="icon" src={member.icon}></img>
						<span className="calling-card-number">{member.idNumber}</span>
					</div>

					<div className="calling-card-credit flex-absolute">
						<CreditElement memberCredit={Object.values(member.credit)[0]} />
						<CreditElement memberCredit={Object.values(member.credit)[1]} />
						<CreditElement memberCredit={Object.values(member.credit)[2]} />
						<CreditElement memberCredit={Object.values(member.credit)[3]} />
						<CreditElement memberCredit={Object.values(member.credit)[4]} />
					</div>
				</div>
            </div>     
        ))}

        {member.length === 0 && 
            /* if OMOcloud member is not real then go back to home page */
            redirect(`/`)
        }
        </>    
    );
}

export default CallingCard;