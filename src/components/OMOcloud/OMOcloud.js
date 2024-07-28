import "./OMOcloud.css";

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

	//getters
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

	// functions
	row() {
		return (
			<div className="row-content">
				<span className="row-team">[OMO]</span>
				<span className="row-name">{this.#name}</span>
				<img className="row-icon" src={this.#icon}></img>
				<span className="row-number">{this.#number}</span>
			</div>
		);
	}
}

const SAI = new OMOcloud(
	"SAI's fate.",
	"sai-icon.png",
	"",
	"what a fateful day.",
	"0011",
	true,
	true,
	true,
	"1"
);

const Shin = new OMOcloud(
	"Shin",
	"shin-icon.png",
	"",
	"buzzy bee.",
	"0009",
	false,
	false,
	true,
	"1"
);

const Toni = new OMOcloud(
	"Toni",
	"toni-icon.png",
	"",
	"ahh I missed it...",
	"1407",
	true,
	false,
	false,
	"1"
);

const Xylet = new OMOcloud(
	"Xylet",
	"xylet-icon.png",
	"",
	"here we go again...",
	"6730",
	true,
	true,
	false,
	"1"
);

const Eskimo = new OMOcloud(
	"Eskimo",
	"eskimo-icon.png",
	"",
	"[classified]",
	"1300",
	true,
	false,
	false,
	"1"
);

export { SAI, Shin, Toni, Xylet, Eskimo };
