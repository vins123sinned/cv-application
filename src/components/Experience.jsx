import { SubForm } from "./SubForm";
import { AddButton } from "./AddButton";
import { EditButton } from "./EditButton";

function Experience() {
  const fields = [
    {
      id: "company",
      name: "company",
      label: "Company",
    },
    {
      id: "position",
      name: "position",
      label: "Position",
    },
    {
      id: "responsibilities",
      name: "responsibilities",
      label: "Responsibilities",
      type: "textarea",
    },
  ];
  return (
    <section className="experience">
      <h2 className="section-heading">Experience</h2>
      <SubForm fields={fields} />
      <EditButton />
      <AddButton text="Add Experience" />
    </section>
  );
}

export { Experience };
