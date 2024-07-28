import OMOcloud from "./OMOcloud";

//* all members of OMOcloud */

const SAI = new OMOcloud(
	"SAI's fate.", // name
	"member-assets/sai-icon.png", // icon path
	"member-assets/sai-pfp.jpg", // pfp card path
	"member-assets/sai-card.png", // calling card path
	"what a fateful day.", // tag
	"0001", // ID number
	true, // is artist?
	true, // is producer?
	true, // is a visual artist?
	"1", // member bio
	[
		"https://www.youtube.com/@saisfate",
		"https://soundcloud.com/saisfate",
		"https://open.spotify.com/artist/5j67efm6u2C2b7ULcMgqQl?si=Cu8M4ew9Q4WemZ3uimxYUg",
		"https://www.tiktok.com/@omosaisfate",
		"https://www.instagram.com/omosaisfate/",
		"https://www.snapchat.com/add/omo541",
	]
);

const Shin = new OMOcloud(
	"Shin", // name
	"member-assets/shin-icon.png", // icon path
	"member-assets/shin-pfp.png", // pfp card path
	"member-assets/shin-card.png", // calling card path
	"buzzy bee.", // tag
	"0009", // ID number
	false, // is artist?
	false, // is producer?
	true, // is a visual artist?
	"1", // member bio
	[
		"https://www.youtube.com/@omoshin",
		"",
		"",
		"",
		"https://www.instagram.com/omoshin0/",
		"",
	]
);

const Toni = new OMOcloud(
	"Toni", // name
	"member-assets/toni-icon.png", // icon path
	"member-assets/toni-pfp.png", // pfp card path
	"member-assets/toni-card.png", // calling card path
	"ahh I missed it...", // tag
	"1407", // ID number
	true, // is artist?
	false, // is producer?
	false, // is a visual artist?
	"1" // member bio
);

const Xylet = new OMOcloud(
	"Xylet", // name
	"member-assets/xylet-icon.png", // icon path
	"member-assets/xylet-pfp.png", // pfp card path
	"member-assets/xylet-card.png", // calling card path
	"here we go again...", // tag
	"6730", // ID number
	true, // is artist?
	true, // is producer?
	false, // is a visual artist?
	"1" // member bio
);

const Eskimo = new OMOcloud(
	"Eskimo", // name
	"member-assets/eskimo-icon.png", // icon path
	"member-assets/eskimo-pfp.png", // pfp card path
	"member-assets/eskimo-card.png", // calling card path
	"[classified]", // tag
	"1300", // ID number
	true, // is artist?
	false, // is producer?
	false, // is a visual artist?
	"1" // member bio
);

export { SAI, Shin, Toni, Xylet, Eskimo };
