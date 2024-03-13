import { useState, useEffect } from "react";

function App() {
	const [counter, setValue] = useState(0);
	const [keyword, setKeyword] = useState("");
	const onClick = () => setValue((prev) => prev + 1);
	const onChange = (event) => setKeyword(event.target.value);
	useEffect(() => {
		console.log("나는 한 번만 나와!");
	}, []);
	useEffect(() => {
		console.log("나는 키워드가 바뀔 때 작동해");
	}, [keyword]);
	useEffect(() => {
		console.log("나는 카운터가 바뀔 때 작동해");
	}, [counter]);
	useEffect(() => {
		console.log("나는 카운더와 키워드가 바뀔 때 작동해");
	}, [counter, keyword]);
	return (
		<div>
			<input
				value={keyword}
				onChange={onChange}
				type="text"
				placeholder="검색"
			/>
			<h1>Welcome {counter}</h1>
			<button onClick={onClick}>클릭</button>
		</div>
	);
}

export default App;
