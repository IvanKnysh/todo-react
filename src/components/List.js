import ListItem from "./ListItem";

const List = ({todos, checkBtn, deleteItem}) => {
	return (
		<div className="todoList">
			<ul className="todo__items">
				{todos.map(item => <ListItem key={item.id} {...item} checkBtn={checkBtn} deleteItem={deleteItem} />)}
			</ul>
		</div>
	);
};

export default List;