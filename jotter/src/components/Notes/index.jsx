import styles from "./notes.module.css";

function Notes(props) {
	return (
		<main className={`${styles.notes__container}`}>
			<div className={`${styles.notes}`}>
				<h3 className="font-bold">Top 9 UX Trend to Watch Out in 2022</h3>
				<p className="py-3">
					As we roll into another year of new COVID variants, new social distancing rules, and
					constantly updating work from home rules.
				</p>
				<div className={`${styles.details}`}>
					<small>Design</small>
					<small>December 22, 2024</small>
				</div>
			</div>
		</main>
	);
}

export default Notes;
