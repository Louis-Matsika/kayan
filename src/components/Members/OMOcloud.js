import "./OMOcloud.css";
import LinkElement from "./LinkElement";
import FlagElement from "./FlagElement";
import CreditElement from "./CreditElement";
//the OMOcloud class creates a template for all OMOcloud members
class OMOcloud {
    #name;
    #icon;
    #pfp;
    #callingCard;
    #tag;
    #idNumber;
    #credit;
    #bio;
    #flags;
    #links;
    constructor(name, icon, pfp, callingCard, tag, idNumber, credit, bio, flags, links) {
        /*
        name = (string) name of member
        icon = (string) path to icon
        pfp = (string) path to profile picture
		callingCard = (string) path to calling card
		tag = (string) chosen catch phrase
        idNumber = (string) 4 digit ID number picked by member
        credit = (array) credits members skill [artist, producer, visual artist, engineer]
        bio = (string) biography of member
		flags = (array) paths to flags [primary, secondary]
		links = (array) social links of member [youtube, soundcloud, spotify, tiktok, instagram, snapchat]
        */

        this.#name = name;
        this.#icon = icon;
        this.#pfp = pfp;
        this.#callingCard = callingCard;
        this.#tag = tag;
        this.#idNumber = idNumber;
        this.#credit = credit;
        this.#bio = bio;
        this.#flags = flags;
        this.#links = links;
    }

    //* getters */
    get getName() {
        return this.#name;
    }

    get getIcon() {
        return this.#icon;
    }

    get getPfp() {
        return this.#pfp;
    }

    get getCallingCard() {
        return this.#callingCard;
    }

    get getTag() {
        return this.#tag;
    }

    get getIdNumber() {
        return this.#idNumber;
    }

    get getCredit() {
        return this.#credit;
    }

    get getBio() {
        return this.#bio;
    }

    get getFlag() {
        return this.#flags;
    }

    get getLinks() {
        return this.#links;
    }

    //* functions */
    //the row() function creates a lobby row for a given OMOcloud member
    row() {
        return (
            <div className="row">
                {/* <span className="row-team"></span> */}
                <span className="row-name">[OMO] {this.#name}</span>
                <div className="row-right">
                    <img className="row-icon" alt={this.#name + " member icon"} src={this.#icon}></img>
                    <span className="row-number">{this.#idNumber}</span>
                </div>
            </div>
        );
    }

    //the callingCard() function creates a calling card for a given OMOcloud member
    callingCard() {
        return (
            <div className="calling-card content-box blurred-background">
                <img className="calling-card-pfp content-image" src={this.#pfp}></img>
                <div className="calling-card-right content-right" style={{backgroundImage: "url(" + this.#pfp + ")"}}>
                    <div className="calling-card-main-wrapper">
                        <p className="calling-card-name content-title">{this.#name}</p>
                        <div className="calling-card-banner-wrapper">
                            <img className="calling-card-banner" src={this.#callingCard}></img>
                            <p className="calling-card-tag">{this.#tag}</p>
                        </div>
                    </div>
                    <div className="calling-card-flags flex-absolute">
                        <FlagElement memberFlag={this.#flags[0]} />
                        <FlagElement memberFlag={this.#flags[1]} />
                    </div>
                    <div className="calling-card-number-wrapper flex-absolute">
                        <img className="calling-card-icon" src={this.#icon}></img>
                        <span className="calling-card-number">{this.#idNumber}</span>
                    </div>
                    <div className="calling-card-credit flex-absolute">
                        <CreditElement memberCredit={this.#credit[0]} />
                        <CreditElement memberCredit={this.#credit[1]} />
                        <CreditElement memberCredit={this.#credit[2]} />
                        <CreditElement memberCredit={this.#credit[3]} />
                        <CreditElement memberCredit={this.#credit[4]} />
                    </div>
                </div>
            </div>
        );
    }

    // the links() function aggregates all the social links for a member
    links() {
        return (
            <div className="links content-box">
                <ul className="link-list">
                    <LinkElement memberLink={this.#links[0]} platformId={this.#links.indexOf(this.#links[0])} />
                    <LinkElement memberLink={this.#links[1]} platformId={this.#links.indexOf(this.#links[1])} />
                    <LinkElement memberLink={this.#links[2]} platformId={this.#links.indexOf(this.#links[2])} />
                    <LinkElement memberLink={this.#links[3]} platformId={this.#links.indexOf(this.#links[3])} />
                    <LinkElement memberLink={this.#links[4]} platformId={this.#links.indexOf(this.#links[4])} />
                    <LinkElement memberLink={this.#links[5]} platformId={this.#links.indexOf(this.#links[5])} />
                </ul>
            </div>
        );
    }

    // the featuredMusic() function features a song with links to the song
    featuredMusic(musicTitle, musicArt, description, soundcloudLink, spotifyLink, youtubeLink) {
        return (
            <div className="featured-music-box content-box blurred-background">
                <img className="featured-music-image content-image" src={"music-assets/" + musicArt}></img>
                <div
                    className="featured-right content-right"
                    style={{backgroundImage: "url(music-assets/" + musicArt + ")"}}
                >
                    <p className="featured-title content-title">{musicTitle}</p>
                    <p className="featured-artist">{this.#name}</p>
                    <p className="featured-description">{description}</p>
                    <div>
                        <ul className="link-list">
                            <li>
                                <a className="link" href={soundcloudLink} target="_blank" rel="noopener">
                                    <i className="fa-brands fa-soundcloud"></i>
                                    <p>SoundCloud</p>
                                </a>
                            </li>
                            <li>
                                <a className="link" href={spotifyLink} target="_blank" rel="noopener">
                                    <i className="fa-brands fa-spotify"></i>
                                    <p>Spotify</p>
                                </a>
                            </li>
                            <li>
                                <a className="link" href={youtubeLink} target="_blank" rel="noopener">
                                    <i className="fa-brands fa-youtube"></i>
                                    <p>YouTube</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

	//the featuredMusic() function features a song with links to the song
	featuredVideo(videoTitle, description, youtubeEmbedLink, youtubeLink) {
		return (
			<div className="featured-video-box content-box">
				<iframe
					className="featured-video-embed"
					src={youtubeEmbedLink}
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
				<div className="featured-right content-right">
					<p className="featured-title content-title">{videoTitle}</p>
					<p className="featured-artist">{this.#name}</p>
					<p className="featured-description">{description}</p>
					<div>
						<ul className="link-list">
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
		);
	}
}

export default OMOcloud;
