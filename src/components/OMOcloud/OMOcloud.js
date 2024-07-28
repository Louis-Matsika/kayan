import "./OMOcloud.css";
//the OMOcloud class creates a template for all OMOcloud members
class OMOcloud {
	#name;
	#icon;
	#pfp;
	#callingCard
	#tag;
	#idNumber;
	#isArtist;
	#isProducer;
	#isVisual;
	#bio;
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
		bio
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

	//* functions */
	//the row() function creates a lobby row for a given OMOcloud member
	row() {
		return (
			<div className="row-content">
				<span className="row-team">[OMO]</span>
				<span className="row-name">{this.#name}</span>
				<img alt={this.#name + " member icon"} className="row-icon" src={this.#icon}></img>
				<span className="row-number">{this.#idNumber}</span>
			</div>
		);
	}

	//the callingCard() function creates a calling card for a given OMOcloud member
	callingCard(){
		return(
		<div className="calling-card-content">
				<div className="calling-card">
				<span className="card-tag">{this.#tag}</span>
				<img className="card" alt={this.#name + " member calling card"} src={this.#callingCard}></img>
				</div>

				<span className="card-name">{this.#name}</span>
				<span className="row-number">{this.#idNumber}</span>
				<img alt={this.#name + " member profile picture"} className="pfp" src={this.#pfp}></img>
		</div>
		)
	}
}

export default OMOcloud;
