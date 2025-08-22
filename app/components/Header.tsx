/* eslint-disable @next/next/no-img-element */
import React from "react";

export const Header = () => {
	return (
		<div className="bg-blue-500/80 flex justify-around items-center rounded-2xl m-2 px-6 py-4 border-box shadow-md">
			<img
				className="h-12 w-12 justify-self-start"
				src="/logovid.png"
				alt="Domo"
			/>

			<a href="">
				<h3 className="font-sans text-white ">HOME</h3>
			</a>
			<a href="">
				<h3 className="font-sans text-white">CONTACTANOS</h3>
			</a>
		</div>
	);
};
