import styles from "./page.module.css";
import Link from "next/link";
// import { React, useState } from "react";
import { React } from "react";
import Newsletter from ".././components/Newsletter.js";
import "./Lobby.css";
import {
	SAI,
	Shin,
	Toni,
	Xylet,
	Eskimo,
	Bakura,
	LOSS,
} from "../components/OMOcloud/Members.js";

// import { collection, addDoc } from "firebase/firestore";
// import db from "../firebase-config";

export default function Lobby() {
	return (
		<div>
			<h2>
				<span className="font-bold">OMO</span>cloud
				<span className="font-bold">.</span>
			</h2>
			<p className="omo-slogan">the cloud awaits...</p>
			<section className="section--rows content-container">
				<Link  
          href="/SAI"
          className="row-link">
					{SAI.row()}
				</Link>
			</section>
			<Newsletter />
		</div>
	);
}
