//api method
async function getMembers(){
    const res = await fetch("http://localhost:4000/theCloud", {next: {revalidate: 1}});

    return(res.json());

}


async function FetchMember(){
    const theCloud = await getMembers();
    return(
        <>
            {theCloud.map((cloudMember) => (
               <div key={cloudMember.role}>
                <h2>{cloudMember.name}</h2>
                <p>{cloudMember.role}</p>
                <p>{cloudMember.id}</p>

               </div>
            ))}

            {theCloud.length === 0 && (
                <p>whoopss something went wrong try later</p>
            )}
        </>
    );
}
export default FetchMember;