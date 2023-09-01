import { useState, useEffect } from "react";
import { Start, Header, Notes, SelectedNote } from "./components";

const App = () => {
	const [start, setStart] = useState(false);
	const [notes, setNotes] = useState("");
	
	return <main>{start ? <Header /> : <Start onClick={() => setStart(!start)} />}</main>;
};

export default App;
