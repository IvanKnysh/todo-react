import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

const ListItem = ({id, title, completed}) => {
	const statusTodoItem = completed ? 'todo__completed' : '';

	return (
		<li className={statusTodoItem}><FontAwesomeIcon icon="fa-solid fa-book" /> {title}</li>
	);
};

export default ListItem;