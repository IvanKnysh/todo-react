import {useState} from "react";

const Form = ({todos, setTodos, authentication, database}) => {
	const [todoTitle, setTodoTitle] = useState('');

	const sendData = (data) => {
		database.ref('todos').push().set({
			userName: authentication.displayName,
			email: authentication.email,
			title: data.title,
			completed: data.completed
		});
	}

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

			sendData({
				title: todoTitle,
				completed: false
			});
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