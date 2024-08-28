import styles from "./page.module.css";
import Link from "next/link";
// import { React, useState } from "react";
import { React } from "react";
import Newsletter from "../components/Newsletter/Newsletter.js";
import "@/components/Members/Lobby/Lobby.css";
import "@/components/Members/OMOcloud.css";
import Lobby from "@/components/Members/Lobby/Lobby.jsx"

// import { collection, addDoc } from "firebase/firestore";
// import db from "../firebase-config";

export default function homePage() {
	return (
		<div>
			<h2>
				<span className="font-bold">OMO</span>cloud
				<span className="font-bold">.</span>
			</h2>
			<p className="omo-slogan">the cloud awaits...</p>
			<section className="section--rows content-container">
				<Lobby />
			</section>
			<Newsletter />
		</div>
	);
}
