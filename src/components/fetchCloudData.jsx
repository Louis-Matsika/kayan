async function getData(){
    const res = await fetch("http://localhost:4000/Members", {next: {revalidate: 1}});

    return(res.json());
}
export default getData;