import fetchData from "@/components/fetchMusicData";

async function FeaturedMusic({
    requestedId,
    musicTitle,
	musicArt,
    description,
	soundcloudLink,
	spotifyLink,
	youtubeLink
}) {
    //fetch OMOcloud member data
    const theCloud = await fetchData();

    //return only the relevant music data from a specified OMOcloud member
    const music = theCloud.filter(function(item)
    {
        return item.username == requestedId;
    })

    return(
        <>
        {music.map(FeaturedMusic => (
            <div key={requestedId}>
                {JSON.stringify(music)}
                <div className="featured-music-box content-box">
				<img
					alt="featured music"
					className="featured-music-image content-image"
					src={"music-assets/" + musicArt}
				></img>
				<div
					className="featured-right content-right"
					// style={{ backgroundImage: "url(music-assets/" + { musicArt } }}
				>
					<p className="featured-title content-title">{musicTitle}</p>
					<p className="featured-artist">{requestedId}</p>
					<p className="featured-description">{description}</p>
					<div>
						<ul className="link-list">
							<li>
								<a
									className="link"
									href={soundcloudLink}
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
									href={spotifyLink}
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
									href={youtubeLink}
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
            </div>
        ))}
        </>
    );
}

export default FeaturedMusic;