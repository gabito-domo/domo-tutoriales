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
		{ id: 10, title: "Modificación de Precios por Lote" },
		{ id: 11, title: "Presupuestos" },
		{ id: 12, title: "Solicitar Licencias" },
	];

	return (
		<div ref={menuRef} className=" hidden md:block fixed top-30 right-10 z-50">
			{/* The button stays anchored at the top-right */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="bg-blue-500/80 backdrop-blur-xl p-3 rounded-full shadow-lg border border-white/50 hover:bg-blue-600/40 transition-colors duration-200"
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
						d="M4 6h16M4 12h16m-7 6h7"
					></path>
				</svg>
			</button>

			{/* The menu content is now absolutely positioned to the left of the button */}
			{isMounted && isOpen && (
				<div className="absolute top-0 right-14 w-50">
					<div className="bg-blue-500/80 backdrop-blur-lg p-4 rounded-lg shadow-xl border border-white/50">
						<ul className="space-y-2">
							{tutorials.map((tutorial) => (
								<li key={tutorial.id}>
									<a
										onClick={() => handleScroll(tutorial.id)}
										className="block p-2 rounded-xl hover:bg-white/60 text-base font-medium transition-colors duration-200"
										style={{ color: "var(--foreground)" }}
									>
										{tutorial.title}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			)}
		</div>
	);
};
