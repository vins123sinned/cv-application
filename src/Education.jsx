import { SubForm } from "./SubForm";

function Education() {
	const fields = [
		{
			id: 'school',
			name: 'school',
			text: 'School',
		},
		{
			id: 'study',
			name: 'study',
			text: 'Field of Study',
		},
	]
	return (
		<section className="education">
			<SubForm title="Education" fields={fields} />
		</section>
	);
}

export { Education }