import "./OMOcloud.css";
//the OMOcloud class creates a template for all OMOcloud members
class OMOcloud {
	#name;
	#icon;
	#pfp;
	#tag;
	#number;
	#isArtist;
	#isProducer;
	#isVisual;
	#bio;
	constructor(
		name,
		icon,
		pfp,
		tag,
		number,
		isArtist,
		isProducer,
		isVisual,
		bio
	) {
		/*
        name = (string) name of member
        icon = (string) path to icon
        pfp = (string) path to picture
        number = (string) 4 digit ID number picked by member
        isArtist = (boolean) is member a artist yes or no?
        isProducer = (boolean) is member a producer yes or no?
        isVisual = (boolean) is member a visual artist yes or no?
        bio = (string) biography of member
        */

		this.#name = name;
		this.#icon = icon;
		this.#pfp = pfp;
		this.#tag = tag;
		this.#number = number;
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

	get getTag() {
		return this.#tag;
	}

	get getNumber() {
		return this.#number;
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
				<img alt="member icon"className="row-icon" src={this.#icon}></img>
				<span className="row-number">{this.#number}</span>
			</div>
		);
	}

	//the callingCard() funtion creates a calling card for a given OMOcloud member
	callingCard(){

	}
}

export default OMOcloud;
