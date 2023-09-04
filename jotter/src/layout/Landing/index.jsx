import logo from "../../assets/images/night-mode.png";

function Start({ onClick }) {
	return (
		<div className="align-center flex h-screen flex-col justify-center bg-black p-5 text-center">
			<img className="mx-auto object-contain" src={logo} alt="Jotter Logo" />
			<p className="text-gray text-gray-200 sm:text-2xl md:text-3xl lg:text-4xl">
				Where ideas take shape, one note at a time.
			</p>
			<button
				onClick={onClick}
				className="m-10 mx-auto w-[120px] rounded-xl bg-gradient-to-r from-gray-200 to-slate-400 px-5 py-2 opacity-80 drop-shadow-lg backdrop-blur-xl md:w-[200px] md:py-3 md:text-xl"
			>
				<span className="bg-gradient-to-r from-slate-400 to-slate-700 bg-clip-text text-transparent hover:text-black">
					Scribble
				</span>
			</button>
		</div>
	);
}

export default Start;
