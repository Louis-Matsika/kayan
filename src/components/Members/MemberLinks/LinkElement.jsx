// returns a social link element to be used by <Link/>
function LinkElement({memberLink, platformId}) {
    let platform = memberLink;
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
                //if provided link is not empty, then make a list element
                <li>
                    <a className="link" href={memberLink} target="_blank" rel="noopener">
                        <i className={"fa-brands fa-snapchat"}>fix icons</i>
                        <p>{platform}</p>
                    </a>
                </li>
            )}
        </>
    );
}

export default LinkElement;
