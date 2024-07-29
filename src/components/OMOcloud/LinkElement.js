import OMOcloud from "./OMOcloud";

function LinkElement({ memberLink, platformId }) {
	let platform;
	let platformIcon;

	switch (platformId) {
		case 0:
			platform = "YouTube";
			platformIcon = "youtube";
			break;
		case 1:
			platform = "SoundCloud";
			platformIcon = "soundcloud";
			break;
		case 2:
			platform = "Spotify";
			platformIcon = "spotify";
			break;
		case 3:
			platform = "Tiktok";
			platformIcon = "tiktok";
			break;
		case 4:
			platform = "Instagram";
			platformIcon = "instagram";
			break;
		case 5:
			platform = "Snapchat";
			platformIcon = "snapchat";
			break;
		default:
			break;
	}

	return (
		<>
			{memberLink !== "" && (
				<li>
					<a
						className="links-link"
						href={memberLink}
						target="_blank"
						rel="noopener"
					>
						<i class={"fa-brands fa-" + platformIcon}></i>
						<p>{platform}</p>
					</a>
				</li>
			)}
		</>
	);
}

export default LinkElement;
