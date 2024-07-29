import { SAI } from "../../components/OMOcloud/Members";

function SaiPage() {
	return (
		<div className="background padding-top">
			<div className="box-shadow">
				<div>{SAI.callingCard()}</div>
				<div>{SAI.links()}</div>
				<div className="border-bottom">
					{SAI.featuredMusic(
						"1 ⠑⠝⠞⠗⠕⠏⠽",
						"sai-1-artwork.jpg",
						"Listen to my latest ep.",
						"https://soundcloud.com/saisfate/sets/1a1",
						"https://open.spotify.com/album/4JaBHTDFtGFj8c3gXu4GpE?si=1pIL0qmCRtiTZx0K7qG-og",
						"https://music.youtube.com/playlist?list=OLAK5uy_mrqZJ9AK4-VsoEiSKqlhZeD6c90bPXtHg&si=SYUoHCPDF7Cu9cEE"
					)}
				</div>
				<div>
					{SAI.featuredVideo(
						"hard 2 talk.",
						"Watch my recent video.",
						"https://www.youtube.com/embed/inhYanNyMQM?si=mO50o-zplwJ6jiDq",
						"https://www.youtube.com/watch?v=inhYanNyMQM"
					)}
				</div>
			</div>
		</div>
	);
}

export default SaiPage;
