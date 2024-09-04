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
            <div  key={requestedId} className="featured-video-box content-box">
				{JSON.stringify(FeaturedVideo)}
			</div>
        ))}
        </>
    );
}

export default FeaturedVideo;