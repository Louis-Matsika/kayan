//the api call that fetches OMOcloud music data currently on jsonbin

async function fetchData(){
    const res = await fetch("https://api.jsonbin.io/v3/b/66d5df62acd3cb34a87d52da?meta=false", {next: {revalidate: 1}});

    return(res.json());
}

export default fetchData;