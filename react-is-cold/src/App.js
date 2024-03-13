import { useState, useEffect } from "react";

function Hello() {
	useEffect(() => {
		console.log("생성 :)");
		return () => console.log("소멸 :(");
	});
	return <h1>HI</h1>;
}

function App() {
	const [showing, setShowing] = useState(false);
	const onClick = () => setShowing((prev) => !prev);
	return (
		<div>
			{showing ? <Hello /> : null}
			<button onClick={onClick}>{showing ? "HIDE" : "SHOW"}</button>
		</div>
	);
}

export default App;
