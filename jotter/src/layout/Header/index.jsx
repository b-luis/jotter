import logo from "../../assets/images/light-mode.png";

function Header() {
	return (
		<header className="flex w-full flex-row justify-between border-b-2 p-4">
			<div className="flex flex-row ">
				<img className="object-fit w-[50px]" src={logo} alt="jotter logo" />
				<h1 className="self-center text-2xl">Jotter</h1>
			</div>
			<input className="w-2/4 rounded-md border-2 p-1" type="search" placeholder="Search Notes" />
		</header>
	);
}

export default Header;
