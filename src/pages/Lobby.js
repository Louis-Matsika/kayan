// import { React, useState } from "react";
import { React } from "react";
import ExtraMain from "./ExtraMain.js";
import Newsletter from ".././components/Newsletter.js";
import {
	SAI,
	Shin,
	Toni,
	Xylet,
	Eskimo,
} from "../components/OMOcloud/Members.js";

// import { collection, addDoc } from "firebase/firestore";
// import db from "../firebase-config";

export default function Lobby() {
	return (
		<div>
			<main>
				<section class="section--rows">
					<div className="row">{SAI.row()}</div>
					<div className="row">{Shin.row()}</div>
					<div className="row">{Toni.row()}</div>
					<div className="row">{Xylet.row()}</div>
					<div className="row">{Eskimo.row()}</div>
				</section>
			</main>
			<Newsletter />
		</div>
	);
}
