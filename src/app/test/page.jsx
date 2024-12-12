async function fetchData(){
    const res = await fetch("https://api.jsonbin.io/v3/b/674369edacd3cb34a8ae14f2/?meta=false", {next: {revalidate: 1}});

    return(res.json());
}

// const data = await fetchData();
const data = ["1", "2", "3", "4"];

const datamapped = data.map((item, index) => (
    <li key={index}>{item}</li>
  ));

async function test() {

	return (
		<div className="member-content-container content-container">
		<p>{JSON.stringify(data)}</p>
        {datamapped}
		</div>
	);
}

export default test;
