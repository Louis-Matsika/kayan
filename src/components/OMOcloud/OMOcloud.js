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
	constructor(
		name,
		icon,
		pfp,
		callingCard,
		tag,
		idNumber,
		credit,
		bio,
		flags,
		links
	) {
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
				<span className="row-team">[OMO]</span>
				<span className="row-name">{this.#name}</span>
				<img
					className="row-icon"
					alt={this.#name + " member icon"}
					src={this.#icon}
				></img>
				<span className="row-number">{this.#idNumber}</span>
			</div>
		);
	}

	//the callingCard() function creates a calling card for a given OMOcloud member
	callingCard() {
		return (
			<div className="calling-card">
				<img className="calling-card-pfp" src={this.#pfp}></img>

				<div className="calling-card-right">
					<div className="calling-card-flags">
						<FlagElement memberFlag={this.#flags[0]} />
						<FlagElement memberFlag={this.#flags[1]} />
					</div>

					<p className="calling-card-name">{this.#name}</p>
					<div className="calling-card-banner-wrapper">
						<img className="calling-card-banner" src={this.#callingCard}></img>
						<p className="calling-card-tag">{this.#tag}</p>
					</div>

					<div className="calling-card-top-right">
						<img className="calling-card-icon" src={this.#icon}></img>
						<span className="calling-card-number">{this.#idNumber}</span>
					</div>

					<div className="calling-card-skills">
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
			<div className="links">
				<ul className="links-list">
					<LinkElement
						memberLink={this.#links[0]}
						platformId={this.#links.indexOf(this.#links[0])}
					/>
					<LinkElement
						memberLink={this.#links[1]}
						platformId={this.#links.indexOf(this.#links[1])}
					/>
					<LinkElement
						memberLink={this.#links[2]}
						platformId={this.#links.indexOf(this.#links[2])}
					/>
					<LinkElement
						memberLink={this.#links[3]}
						platformId={this.#links.indexOf(this.#links[3])}
					/>
					<LinkElement
						memberLink={this.#links[4]}
						platformId={this.#links.indexOf(this.#links[4])}
					/>
					<LinkElement
						memberLink={this.#links[5]}
						platformId={this.#links.indexOf(this.#links[5])}
					/>
				</ul>
			</div>
		);
	}

	// the featuredMusic() function features a song with links to the song
	featuredMusic(
		musicTitle,
		musicArt,
		description,
		soundcloudLink,
		spotifyLink,
		youtubeLink
	) {
		return (
			<div className="featured-music-box">
				<img
					className="featured-music-image"
					src={"music-assets/" + musicArt}
				></img>
				<div className="featured-music-right">
					<p className="featured-music-title">{musicTitle}</p>
					<p className="featured-music-artist">{this.#name}</p>
					<p className="featured-music-description">{description}</p>
					<div>
						<ul className="links-list">
							<li>
								<a
									className="links-link"
									href={soundcloudLink}
									target="_blank"
									rel="noopener"
								>
									<i class="fa-brands fa-soundcloud"></i>
									<p>SoundCloud</p>
								</a>
							</li>
							<li>
								<a
									className="links-link"
									href={spotifyLink}
									target="_blank"
									rel="noopener"
								>
									<i class="fa-brands fa-spotify"></i>
									<p>Spotify</p>
								</a>
							</li>
							<li>
								<a
									className="links-link"
									href={youtubeLink}
									target="_blank"
									rel="noopener"
								>
									<i class="fa-brands fa-youtube"></i>
									<p>YouTube</p>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}

	// the featuredMusic() function features a song with links to the song
	featuredVideo(videoTitle, description, youtubeEmbedLink, youtubeLink) {
		return (
			<div className="featured-music-box featured-video-box">
				<iframe
					className="featured-video-embed"
					src={youtubeEmbedLink}
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				></iframe>
				<div className="featured-music-right">
					<p className="featured-music-title">{videoTitle}</p>
					<p className="featured-music-artist">{this.#name}</p>
					<p className="featured-music-description">{description}</p>
					<div>
						<ul className="links-list">
							<li>
								<a
									className="links-link"
									href={youtubeLink}
									target="_blank"
									rel="noopener"
								>
									<i class="fa-brands fa-youtube"></i>
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
