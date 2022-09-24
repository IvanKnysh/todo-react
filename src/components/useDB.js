import {useEffect, useState} from "react";


const useDb = (database) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		const dbRef = database.ref('todos');

		dbRef.on('value', (snapshot) => {
			setData(snapshot.val());
		});
	}, []);

	return data;
};

export default useDb;