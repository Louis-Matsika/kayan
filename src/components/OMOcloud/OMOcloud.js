import "./OMOcloud.css";
//the OMOcloud class creates a template for all OMOcloud members
class OMOcloud {
	#name;
	#icon;
	#pfp;
	#callingCard;
	#tag;
	#idNumber;
	#isArtist;
	#isProducer;
	#isVisual;
	#bio;
	#links;
	constructor(
		name,
		icon,
		pfp,
		callingCard,
		tag,
		idNumber,
		isArtist,
		isProducer,
		isVisual,
		bio,
		links
	) {
		/*
        name = (string) name of member
        icon = (string) path to icon
        pfp = (string) path to profile picture
		callingCard = (string) path to calling card
		tag = (string) chosen catch phrase
        idNumber = (string) 4 digit ID number picked by member
        isArtist = (boolean) is member a artist yes or no?
        isProducer = (boolean) is member a producer yes or no?
        isVisual = (boolean) is member a visual artist yes or no?
        bio = (string) biography of member
		links = (array) social links of member [youtube, soundcloud, spotify, tiktok, instagram, snapchat]
        */

		this.#name = name;
		this.#icon = icon;
		this.#pfp = pfp;
		this.#callingCard = callingCard;
		this.#tag = tag;
		this.#idNumber = idNumber;
		this.#isArtist = isArtist;
		this.#isProducer = isProducer;
		this.#isVisual = isVisual;
		this.#bio = bio;
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

	get getIsArtist() {
		return this.#isArtist;
	}

	get getIsProducer() {
		return this.#isProducer;
	}

	get getIsVisual() {
		return this.#isVisual;
	}

	get getBio() {
		return this.#isVisual;
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
					<p className="calling-card-name">{this.#name}</p>
					<div className="calling-card-banner-wrapper">
						<img className="calling-card-banner" src={this.#callingCard}></img>
						<p className="calling-card-tag">{this.#tag}</p>
					</div>

					<div className="calling-card-bottom-right">
						<img className="calling-card-icon" src={this.#icon}></img>
						<span className="calling-card-number">{this.#idNumber}</span>
					</div>
				</div>
			</div>
		);
	}

	// the links() function aggregates links for a given users socials and work
	links() {
		return (
			<div className="links">
				<nav>
					<ul className="links-list">
						<li>
							<a className="links-link" href={this.#links[0]} target="_blank">
								<i class="fa-brands fa-youtube"></i>
								<p>YouTube</p>
							</a>
						</li>
						<li>
							<a className="links-link" href={this.#links[1]} target="_blank">
								<i class="fa-brands fa-soundcloud"></i>
								<p>Soundcloud</p>
							</a>
						</li>
						<li>
							<a className="links-link" href={this.#links[2]} target="_blank">
								<i class="fa-brands fa-spotify"></i>
								<p>Spotify</p>
							</a>
						</li>
						<li>
							<a className="links-link" href={this.#links[3]} target="_blank">
								<i class="fa-brands fa-tiktok"></i>
								<p>TikTok</p>
							</a>
						</li>
						<li>
							<a className="links-link" href={this.#links[4]} target="_blank">
								<i class="fa-brands fa-instagram"></i>
								<p>Instagram</p>
							</a>
						</li>
						<li>
							<a className="links-link" href={this.#links[5]} target="_blank">
								<i class="fa-brands fa-snapchat"></i>
								<p>Snapchat</p>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default OMOcloud;
