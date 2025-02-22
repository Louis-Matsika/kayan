const LobbyRows =({directory})=>{
    console.log(directory)

    return(
        <div>
            {directory.map((member, index) => (
              <div key={index}>
                <p>{member.callSign}</p>
              </div>
            ))}
        </div>)
}

export default LobbyRows;