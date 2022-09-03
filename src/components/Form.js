import {useState} from "react";

const Form = ({todos, setTodos}) => {
	const [todoTitle, setTodoTitle] = useState('');

	const addTodo = (e) => {
		if (e.key === 'Enter' && todoTitle !== '') {
			setTodos([
				...todos,
				{
					id: Date.now(),
					title: todoTitle,
					completed: false
				}
			]);

			setTodoTitle('');
		}
	}

	return (
		<div className="form">
			<input
				type="text"
				placeholder="Введіть завдання"
				value={todoTitle}
				onChange={(e) => setTodoTitle(e.target.value)}
				onKeyDown={addTodo}
			/>
		</div>
	);
};

export default Form;