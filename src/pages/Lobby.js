// import { React, useState } from "react";
import { React } from "react";
import ExtraMain from "./ExtraMain.js";
import Newsletter from ".././components/Newsletter.js";
import { SAI } from "../components/OMOcloud.js";
// import { collection, addDoc } from "firebase/firestore";
// import db from "../firebase-config";

export default function Lobby() {
	return (
		<div>
			<main>
				<section class="section--main-content">
					<div>
						<h1>{SAI.getName}</h1>
					</div>
				</section>
			</main>
		</div>
	);
}
