import { Input } from './Input.jsx'

function FormField({ type = 'text', label, id, name}) {
	return (
		<div className="form-field">
			<label htmlFor={id}>{label}</label>
			{
				type === 'textarea' ? 
				<textarea id={id} name={name} />
				:
				<Input type={type} id={id} name={name} />
			}
		</div>
	)
}

export { FormField }