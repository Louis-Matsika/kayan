async function fetchData(){
    const res = await fetch("https://api.jsonbin.io/v3/b/674369edacd3cb34a8ae14f2/?meta=false", {next: {revalidate: 1}});

    return(res.json());
}

// "member-content-container content-container"


async function test() {
    // const data = await fetchData();
    const data = ["1", "2", "3", "4"];
    
	return (
        <>
		{data.map((item, index) => (
            <div key={index} className="calling-card content-box">
                {item}
            </div>
        ))}
        </>
	);
}

export default test;
