import fetchData from "@/components/fetchMusicData";

async function FeaturedMusic({requestedId,}) {
    //fetch OMOcloud member data
    const musicData = await fetchData();

    //return only the relevant music data from a specified OMOcloud member
    const music = musicData.filter(function(item)
    {
        return item.username == requestedId;
    })

    return(
        <>
        {music.map(FeaturedMusic => (
            <div  key={requestedId} className="featured-music-box content-box">
			<img
				alt="featured music"
				className="featured-music-image content-image"
					src={"music-assets/" + FeaturedMusic.artwork}
			></img>
			<div
				className="featured-right content-right"
				// style={{ backgroundImage: "url(music-assets/" + { musicArt } }}
			>
				<p className="featured-title content-title">{FeaturedMusic.title}</p>
				<p className="featured-artist">{FeaturedMusic.name}</p>
				<p className="featured-description">{FeaturedMusic.description}</p>
				<div>
					<ul className="link-list">
                        {/* {memberLink !== "" && (
				        //if provided link is not empty, then make a list element
				        <li>
					        <a className="link" href={memberLink} target="_blank" rel="noopener">
						        <i className={"fa-brands fa-" + platform}>fix icons</i>
						        <p>{platform}</p>
					        </a>
				        </li>
			            )} */}
						<li>
							<a
								className="link"
								href={FeaturedMusic.soundcloud}
								target="_blank"
								rel="noopener"
							>
								<i className="fa-brands fa-soundcloud"></i>
								<p>SoundCloud</p>
							</a>
						</li>
						<li>
							<a
								className="link"
								href={FeaturedMusic.spotify}
								target="_blank"
								rel="noopener"
							>
								<i className="fa-brands fa-spotify"></i>
								<p>Spotify</p>
							</a>
						</li>
						<li>
							<a
								className="link"
								href={FeaturedMusic.youtube}
							    target="_blank"
								rel="noopener"
							>
								<i className="fa-brands fa-youtube"></i>
								<p>YouTube</p>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
        ))}
        </>
    );
}

export default FeaturedMusic;