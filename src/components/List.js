import ListItem from "./ListItem";

const List = ({todos}) => {
	if (!todos) {
		return (
			<div className="todoList">
				<h3>Loading...</h3>
			</div>
		);
	}

	return (
		<div className="todoList">
			<ul className="todo__items">
				{Object.keys(todos).map(item => <ListItem key={Date.now()} elem={todos[item]} />)}
			</ul>
		</div>
	);
};

export default List;