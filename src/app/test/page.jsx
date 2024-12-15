async function fetchData(){
    const res = await fetch("https://api.jsonbin.io/v3/b/674369edacd3cb34a8ae14f2/?meta=false", {next: {revalidate: 1}});

    return(res.json());
}

// "member-content-container content-container"


async function test() {
    const apiData = await fetchData();
    // const dataArray = Object.values(apiData.links[0]);
    // const dataArray = apiData.links[0];

	return (
        <>
        {<p>{"LINK DATA HERE -->" + JSON.stringify(apiData)}{console.log(typeof(apiData))}</p>}
        </>
	);
}

export default test;
