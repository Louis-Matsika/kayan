import OMOcloud from "./OMOcloud";

//* all members of OMOcloud */

const SAI = new OMOcloud(
	"SAI's fate.", //name
	"member-assets/sai-icon.png", //icon path
	"member-assets/sai-pfp.jpg", //pfp card path
    "member-assets/sai-card.png", //calling card path
	"what a fateful day.", //tag
	"0001", //ID number
	true, // is artist?
	true, // is producer?
	true, //is a visual artist?
	"1" // member bio
);

const Shin = new OMOcloud(
	"Shin",
	"member-assets/shin-icon.png",
	"",
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
	"member-assets/toni-icon.png",
	"",
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
	"member-assets/xylet-icon.png",
	"",
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
	"member-assets/eskimo-icon.png",
	"",
    "",
	"[classified]",
	"1300",
	true,
	false,
	false,
	"1"
);

export { SAI, Shin, Toni, Xylet, Eskimo };