import React, {useContext} from "react";
import {Context} from "../Context";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

const ListItem = ({id, title, completed}) => {
	const statusTodoItem = completed ? 'todo__completed' : '';
	const {checkBtn, deleteItem} = useContext(Context);

	return (
		<li className={statusTodoItem}>
			<div className="icon">
				<FontAwesomeIcon icon="fa-solid fa-list-check" />
			</div>
			{title}
			<div className="check" onClick={() => checkBtn(id)}>
				<FontAwesomeIcon icon="fa-solid fa-square-check" />
			</div>
			<div className="remove" onClick={() => deleteItem(id)}>
				<FontAwesomeIcon icon="fa-solid fa-trash" />
			</div>
		</li>
	);
};

export default ListItem;