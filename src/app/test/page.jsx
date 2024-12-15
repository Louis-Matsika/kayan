async function fetchData(){
    const res = await fetch("https://api.jsonbin.io/v3/b/674369edacd3cb34a8ae14f2/?meta=false", {next: {revalidate: 1}});

    return(res.json());
}

// "member-content-container content-container"


async function test() {
    const apiData = await fetchData();
    // const links = apiData.filter(key => key.name.includes("linkElements"));

    const dataArray = Object.values(apiData.linkElements);
    // const dataArray = apiData.links[0];

	return (
        <>
        {<p>{"LINK DATA HERE -->" + JSON.stringify(dataArray)}{console.log(typeof(dataArray))}</p>}
        {dataArray.map((linkArray, index) => (
            <div key={index}>
                {linkArray.link}
                {linkArray.platform}

            </div>
        ))}
        </>
	);
}

export default test;
