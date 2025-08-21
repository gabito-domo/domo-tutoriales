import React from "react";

export const Footer = () => {
	return (
		<div className="bg-blue-500/80 flex justify-center items-center rounded-2xl m-2 px-6 py-4 border-box shadow-md">
			<p className="text-white text-sm">
				&copy; {new Date().getFullYear()} Domo Gestión. Todos los derechos
				reservados.
			</p>
		</div>
	);
};
