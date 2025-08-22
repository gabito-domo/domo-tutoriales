"use client";

import React, { useState, useEffect, useRef } from "react";

export const VideoIndex = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	const menuRef = useRef(null); // Reference to the menu element

	useEffect(() => {
		setIsMounted(true);
	}, []);

	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			if (
				menuRef.current &&
				!(menuRef.current as HTMLElement).contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleOutsideClick);
		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, [menuRef]);

	const handleScroll = (id: number) => {
		const element = document.getElementById(`video-${id}`);
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "center" });
			setIsOpen(false); // Close menu after clicking a link
		}
	};

	const tutorials = [
		{ id: 1, title: "Carga Masiva de Productos" },
		{ id: 2, title: "Ventas y Caja" },
		{ id: 3, title: "Gestión de Modelos" },
		{ id: 4, title: "Gestión de Productos" },
		{ id: 5, title: "Agregar Stock" },
		{ id: 6, title: "Quitar Stock" },
		{ id: 7, title: "Medios de Pago" },
		{ id: 8, title: "Pagos Multiples" },
		{ id: 9, title: "Descuentos" },
		{ id: 10, title: "Precios por Lote" },
		{ id: 11, title: "Presupuestos" },
		{ id: 12, title: "Solicitar Licencias" },
	];

	return (
		<div
			ref={menuRef}
			className=" hidden md:block fixed top-30 right-10 z-50 border-blue/50"
		>
			{/* The button stays anchored at the top-right */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="bg-blue-500/80 backdrop-blur-xl p-3 rounded-full shadow-lg border border-blue-100/50 hover:bg-blue-600/70 transition-colors duration-200"
			>
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						color="white"
						d="M4 6h16M4 12h16m-7 6h7"
					></path>
				</svg>
			</button>

			{/* The menu content is now absolutely positioned to the left of the button */}
			{isMounted && isOpen && (
				<div
					className="absolute top-15 right-1 w-65 border-blue-500/50 shadow-lg"
					style={{ zIndex: 1000 }}
				>
					<div className="bg-blue-500/80 backdrop-blur-lg p-4 rounded-lg shadow-xl border border-white/50">
						<ul className="space-y-2">
							{tutorials.map((tutorial) => (
								<li key={tutorial.id}>
									<button
										onClick={() => handleScroll(tutorial.id)}
										className="block p-1 rounded-md hover:bg-blue-800/70 text-base font-sm transition-colors duration-200 w-full text-left text-white"
									>
										{tutorial.title}
									</button>
								</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</div>
	);
};
