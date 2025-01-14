async function fetchData(){
    const res = await fetch("https://api.jsonbin.io/v3/b/674369edacd3cb34a8ae14f2/?meta=false", {next: {revalidate: 1}});

    return(res.json());
}

// "member-content-container content-container"


async function test({ requestedId }) {
    const apiData = await fetchData();
    // const links = apiData.filter(key => key.name.includes("linkElements"));

    // const dataArray = Object.values(apiData.saiName1.linkElements);

    const links = apiData.filter(function(item)
    {
        item.username == "sai2";
    })


	return (
        <>
        {<p>{"apiData DATA HERE -->" + JSON.stringify(apiData)} ------------------------------ is A : {(typeof(apiData))}</p>}

        {<p>{"links DATA HERE -->" + JSON.stringify(Object.values(apiData[0]))} ------------------------------ is A : {(typeof(Object.values(apiData[0])))}</p>}

        {/* {<p>{"LINK DATA HERE -->" + JSON.stringify(memberlinks)}{console.log(typeof(memberlinks))}<br /></p>} */}
        

        {apiData.map((memberlink, index) => (
            <div key={index}>
                <br></br>
                111{memberlink.link}
                222{memberlink.platform}

            </div>
        ))}
        </>
	);
}

export default test;
