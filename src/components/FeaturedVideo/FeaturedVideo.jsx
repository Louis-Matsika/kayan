import fetchData from "@/components/fetchVideoData";

async function FeaturedVideo({requestedId,}) {
    //fetch OMOcloud member data
    const videoData = await fetchData();

    //return only the relevant music data from a specified OMOcloud member
    const videos = videoData.filter(function(item)
    {
        return item.username == requestedId;
    })

    return(
        <>
        {videos.map(FeaturedVideo => (
            <div key ={requestedId} className="featured-video-box content-box">
			<iframe
				className="featured-video-embed"
				src={FeaturedVideo.embed}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen
			></iframe>
			<div className="featured-right content-right">
				<p className="featured-title content-title">{FeaturedVideo.title}</p>
				<p className="featured-artist">{FeaturedVideo.name}</p>
				<p className="featured-description">{FeaturedVideo.description}</p>
				<div>
					<ul className="link-list">
						<li>
							<a
								className="link"
								href={FeaturedVideo.link}
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

export default FeaturedVideo;