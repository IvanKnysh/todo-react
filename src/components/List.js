import ListItem from "./ListItem";

const List = ({todos}) => {
	return (
		<div className="todoList">
			<ul className="todo__items">
				{todos.map(item => <ListItem key={item.id} {...item} />)}
			</ul>
		</div>
	);
};

export default List;