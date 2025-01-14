//the api call that fetches OMOcloud member video data currently on jsonbin

async function fetchData(){
    const res = await fetch("https://api.jsonbin.io/v3/b/66d85ea4e41b4d34e42a298b?meta=false", {next: {revalidate: 1}});

    return(res.json());
}

export default fetchData;