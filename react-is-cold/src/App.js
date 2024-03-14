import { useState, useEffect } from "react";

function App() {
	const [toDo, setToDo] = useState("");
	const [toDos, setToDos] = useState([]);
	const onChange = (event) => setToDo(event.target.value);
	const onSubmit = (event) => {
		event.preventDefault();
		// console.log(toDo);
		if (toDo === "") return;
		setToDos((currentArray) => [...currentArray, toDo]);
		setToDo("");
	};
	const deleteTodo = (event, index) => {
		// const li = event.target.parentElement;
		setToDos((currentToDos) => {
			return currentToDos.filter((_, todoIndex) => todoIndex !== index);
		});
		// li.remove();
	};
	return (
		<div>
			<h1>나의 ToDos ({toDos.length})</h1>
			<form onSubmit={onSubmit}>
				<input
					onChange={onChange}
					value={toDo}
					type="text"
					placeholder="투두를 적으세요"
				/>
				<button>Add ToDo</button>
			</form>
			<hr />
			<ul>
				{toDos.map((item, index) => (
					<li key={index}>
						{item}
						<button
							onClick={(e) => {
								deleteTodo(e, index);
							}}
						>
							✖️
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
