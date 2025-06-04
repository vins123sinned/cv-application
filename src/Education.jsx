import { SubForm } from "./SubForm";

function Education() {
	const fields = [
		{
			id: 'school',
			name: 'school',
			label: 'School',
		},
		{
			id: 'study',
			name: 'study',
			label: 'Field of Study',
		},
	]
	return (
		<section className="education">
			<SubForm title="Education" fields={fields} />
		</section>
	);
}

export { Education }