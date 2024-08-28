
async function fetchData(){
    const res = await fetch("https://api.jsonbin.io/v3/b/66cf1d6aacd3cb34a87abac6/?meta=false", {next: {revalidate: 1}});
    //const res = await fetch("http://localhost:4000/Members", {next: {revalidate: 1}});

    return(res.json());
}

export default fetchData;