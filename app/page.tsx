import { Tutorials } from "./components/Tutorials";
import { VideoIndex } from "./components/VideoIndex";

export default function Home() {
	return (
		<>
			<div className="flex flex-col justify-center items-center px-4 py-5 md:px-8">
				{/* This is the single, consistent content wrapper for all aligned sections. */}
				<div className="w-full max-w-7xl flex flex-col items-center justify-center space-y-8">
					<div className="bg-white/30 backdrop-blur-xl border-white/50 flex flex-col items-center border rounded-2xl shadow-md w-full px-6 py-5 md:px-12">
						<h1 className="text-3xl font-bold">Domo Gestión</h1>
						<br />
						<p className="text-base font-normal">
							Estos tutoriales te servirán para comprender un poco de lo básico
							para poder empezar a usar tu Domo!
						</p>
					</div>
					<Tutorials />
				</div>
			</div>
			<VideoIndex />
		</>
	);
}
