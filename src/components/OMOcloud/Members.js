import OMOcloud from "./OMOcloud";

//* all members of OMOcloud */

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

const SAI = new OMOcloud(
	"SAI's fate.", // name
	"member-assets/sai-icon.png", // icon path
	"member-assets/sai-pfp.jpg", // pfp card path
	"member-assets/sai-card.png", // calling card path
	"what a fateful day.", // tag
	"0001", // ID number
	[
		// array of members skill credits
		"member-assets/skill-1.png",
		"member-assets/skill-2.png",
		"member-assets/skill-3.png",
		"member-assets/skill-4.png",
		"member-assets/skill-5.png",
	],
	"1", // member bio
	[
		// array of flag paths
		"member-assets/flag-gb.png",
		"member-assets/flag-zw.png",
	],
	[
		// array of member links
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
	[
		// array of members skill
		"",
		"",
		"member-assets/skill-3.png",
		"member-assets/skill-4.png",
		"member-assets/skill-5.png",
	],
	"1", // member bio
	[
		// array of flag paths
		"member-assets/flag-no.png",
		"",
	],
	[
		// array of member links
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
	[
		// array of members skill
		"member-assets/skill-1.png",
		"",
		"",
		"",
		"",
	],
	"1", // member bio
	[
		// array of flag paths
		"member-assets/flag-gb.png",
		"member-assets/flag-es.png",
	],
	[
		// array of member links
		"",
		"https://soundcloud.com/omotoni",
		"https://open.spotify.com/artist/52b2C0ye6EH0axeJWPh0nk?si=WCf49JhTTcaEVeOJleAHog",
		"https://www.tiktok.com/@omotoni01",
		"https://www.instagram.com/omostoni01/",
		"",
	]
);

const Xylet = new OMOcloud(
	"Xylet", // name
	"member-assets/xylet-icon.png", // icon path
	"member-assets/xylet-pfp.png", // pfp card path
	"member-assets/xylet-card.png", // calling card path
	"here we go again...", // tag
	"6730", // ID number
	[
		// array of members skill
		"member-assets/skill-1.png",
		"member-assets/skill-2.png",
		"",
		"",
		"",
	],
	"1", // member bio
	[
		// array of flag paths
		"member-assets/flag-dk.png",
		"member-assets/flag-et.png",
	],
	[
		// array of member links
		"",
		"",
		"",
		"",
		"https://www.instagram.com/omoshin0/",
		"",
	]
);

const Eskimo = new OMOcloud(
	"Eskimo", // name
	"member-assets/eskimo-icon.png", // icon path
	"member-assets/eskimo-pfp.png", // pfp card path
	"member-assets/eskimo-card.png", // calling card path
	"[classified]", // tag
	"1300", // ID number
	[
		// array of members skill
		"member-assets/skill-1.png",
		"",
		"",
		"",
		"member-assets/skill-5.png",
	],
	"1", // member bio
	[
		// array of flag paths
		"member-assets/flag-gb.png",
		"member-assets/flag-ng.png",
	],
	[
		// array of member links
		"",
		"",
		"",
		"",
		"https://www.instagram.com/lropong_13/",
		"",
	]
);

export { SAI, Shin, Toni, Xylet, Eskimo };
