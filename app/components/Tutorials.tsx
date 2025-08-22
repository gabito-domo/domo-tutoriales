import React from "react";

export const Tutorials = () => {
	const tutorials = [
		{
			id: 1,
			title: "Carga Masiva de Productos 💻",
			description:
				"Aprende a gestionar una carga masiva de productos con documentos Excel2007.",
			link: "https://www.dropbox.com/scl/fi/c2sqi4mu70p4f7x8z2b20/01CargaMasiva.mp4?rlkey=u977o82xljz7xlyqz7ivyaa13&st=outfxmzo&raw=1",
		},

		{
			id: 2,
			title: "Ventas y Caja 💵",
			description: "Guía paso a paso para realizar ventas y gestionar la caja.",
			link: "https://www.dropbox.com/scl/fi/xlqbfeivf0otu9sh53nle/02Ventas.mp4?rlkey=1ckiq8wysu58qa5g4vkv3d49n&st=nimh6pt6&raw=1",
		},
		{
			id: 3,
			title: "Gestión de Modelos 👗",
			description: "Cómo añadir y editar modelos en tu Domo.",
			link: "https://www.dropbox.com/scl/fi/nfm1ws22tfueulvp7i5en/03Modelos.mp4?rlkey=ofqzeho1weeyme8axftqntkzu&st=t9etco43&raw=1",
		},
		{
			id: 4,
			title: "Gestión de Productos 🧢",
			description: "Aprende a añadir y editar productos en tu Domo.",
			link: "https://www.dropbox.com/scl/fi/qfuj5lgbor2wfyg7xaf09/04NuevoProducto.mp4?rlkey=e0l5wkhtrlbvrvcg2ij0b9imh&st=husomjbo&raw=1",
		},
		{
			id: 5,
			title: "Agregar Stock 📈",
			description: "Cómo añadir stock de los productos generados.",
			link: "https://www.dropbox.com/scl/fi/iqy51f2g8c4zjcgouuwp8/05Stock.mp4?rlkey=u7itlsma00hdgafgqcvs3rr4h&st=s1d17hyq&raw=1",
		},
		{
			id: 6,
			title: "Quitar Stock 📉",
			description: "Cómo quitar stock de los productos generados.",
			link: "https://www.dropbox.com/scl/fi/kt21fnwldr30aqx6lmk28/06Merma.mp4?rlkey=7ptgd408u1v12f7y2uu88px2q&st=jfxj9lqb&raw=1",
		},
		{
			id: 7,
			title: "Medios de Pago 💳",
			description: "Cómo añadir medios de pago customizables.",
			link: "https://www.dropbox.com/scl/fi/ihfuuxwoyy6wmg5e2jae3/07MediodePago.mp4?rlkey=8fi6ctp67v9dqniitbs3a8795&st=s64jkk1r&raw=1",
		},
		{
			id: 8,
			title: "Pagos Multiples 💱",
			description: "Cómo añadir stock de los productos generados.",
			link: "https://www.dropbox.com/scl/fi/hmlxwihdxbxe9q5xi0poz/08PagoMultiple.mp4?rlkey=4671itnc7w0l61o3kgm9qwnyr&st=it7pk3hy&raw=1",
		},
		{
			id: 9,
			title: "Descuentos 💸",
			description: "Cómo generar descuentos en cada venta.",
			link: "https://www.dropbox.com/scl/fi/f3vcz4l434tf0dupbw1ya/09Descuentos.mp4?rlkey=5ojz3x1vq7fwhvg49oe7c8kc2&st=ib4le43z&raw=1",
		},
		{
			id: 10,
			title: "Modificación de Precios por Lote ✍🏻",
			description: "Cómo modificar precios de productos por lote.",
			link: "https://www.dropbox.com/scl/fi/6wcavj9v7n57kl9d7a6om/10PrecioPorLote.mp4?rlkey=fl9ietgj2tmezv856rqbgfkb6&st=x0ubyc7a&raw=1",
		},
		{
			id: 11,
			title: "Presupuestos 🗒️",
			description: "Podes generar presupuestos sin realizar la venta!",
			link: "https://www.dropbox.com/scl/fi/o6o2htgucdwntz0xaqof6/11Presupuesto.mp4?rlkey=1t4oomsoqh7n69i1t2htw9wiq&st=f7qqiyir&raw=1",
		},
		{
			id: 12,
			title: "Licencias 🪪",
			description: "Protocolo a seguir para activar tu licencia.",
			link: "https://www.dropbox.com/scl/fi/lb94nm6wkskd1z47oow8y/12Licencia.mp4?rlkey=7ef39yr2nn09xrwzbpyz018fn&st=0jyk64q9&raw=1",
		},
	];

	return (
		<>
			<div className="flex flex-col items-center space-y-8 w-full mb-10">
				<h1 className="text-2xl font-bold mb-4">Video-Tutoriales</h1>
				{tutorials.map((tutorial) => (
					<div
						key={tutorial.id}
						id={`video-${tutorial.id}`}
						className="bg-white/30 border-white/50 backdrop-blur-xl w-full p-6 border rounded-3xl shadow-lg"
					>
						<h2 className="text-xl font-semibold mb-2">{tutorial.title}</h2>
						<p className="mb-4">{tutorial.description}</p>

						<video
							src={tutorial.link}
							controls
							className="w-full h-auto rounded-md"
						/>
					</div>
				))}
			</div>
		</>
	);
};
