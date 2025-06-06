import { SubForm } from "./SubForm";
import { AddButton } from "./AddButton.jsx";
import { EditButton } from "./EditButton.jsx"

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
			<EditButton />
			<AddButton text="Add Education" />
		</section>
	);
}

export { Education }