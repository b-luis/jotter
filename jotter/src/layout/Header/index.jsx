import logo from "../../assets/images/light-mode.png";
import { LuSearch } from "react-icons/lu";
import { BsSearchHeart } from "react-icons/bs";

function Header() {
	return (
		<header className="flex w-full flex-row justify-between border-b-2 px-5 py-2">
			<img className="object-fit w-[60px]" src={logo} alt="jotter logo" />
			<input
				className="h-[50px] w-2/5 self-center rounded-md border-2 p-2 "
				type="search"
				placeholder="Search Notes"
			/>
		</header>
	);
}

export default Header;
