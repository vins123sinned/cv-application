import { Input } from './Input.jsx'

function FormField({ type = 'text', text, id, name}) {
	return (
		<div className="form-field" key={id}>
			<label htmlFor={id}>{text}</label>
			<Input type={type} id={id} name={name} />
		</div>
	)
}

export { FormField }