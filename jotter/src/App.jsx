import { useState, useEffect } from "react";
import { Notes } from "./components";
import { Landing, Header, SelectedNote, NotesContainer } from "./layout";

const App = () => {
	const [start, setStart] = useState(false);
	const [notes, setNotes] = useState("");

	return (
		<main>
			{start ? (
				<NotesContainer>
					<Header />
					<h3 className="px-8 pt-4">List Notes</h3>
					<Notes />
				</NotesContainer>
			) : (
				<Landing onClick={() => setStart(!start)} />
			)}
		</main>
	);
};

export default App;
