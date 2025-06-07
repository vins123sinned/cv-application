function Input({ type, id, name, value, data, dataSectionName, setData }) {
	function updateData(event) {
		const newData = {
			...data,
			[dataSectionName]: {
				...data[dataSectionName],
				[name]: event.target.value
			}
		}

		setData(newData)
	}
	
	return (
			<input 
				type={type} 
				id={id} 
				name={name}
				value={value}
				onChange={updateData}
			/>
	);
}

export { Input }