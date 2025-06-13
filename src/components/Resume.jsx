function Entry({ entryType, entry }) {
  if (entryType === "education") {
    return (
      <div className="entry">
        <h3 className="entry-heading">{entry.study}</h3>
        <p className="entry-subheading">{entry.school}</p>
        <p>
          {entry.startDate} - {entry.ongoing ? "Present" : entry.endDate}
        </p>
      </div>
    );
  } else {
    <div className="entry">
      <h3 className="entry-heading">{entry.position}</h3>
      <p className="entry-subheading">{entry.company}</p>
      <p>{entry.responsibilities}</p>
      <p>
        {entry.startDate} - {entry.ongoing ? "Present" : entry.endDate}
      </p>
    </div>;
  }
}

function Resume({ data, setGenerateCv }) {
  const { general, education, experience } = data;

  return (
    <>
      <button
        type="button"
        className="back-button"
        onClick={() => setGenerateCv(false)}
      >
        Go Back
      </button>
      <h1 className="cv-title">{general.name}</h1>
      <div className="contacts">
        <p>{general.email}</p>
        <p>{general.phoneNumber}</p>
      </div>
      <h2 className="cv-heading">Education</h2>
      {education.length !== 0 ? (
        education.map((entry) => (
          <Entry entryType="education" entry={entry} key={entry.key} />
        ))
      ) : (
        <p>Nothing!</p>
      )}
      <h2 className="cv-heading">Experience</h2>
      {experience.length !== 0 ? (
        experience.map((entry) => (
          <Entry entryType="experience" entry={entry} key={entry.key} />
        ))
      ) : (
        <p>Nothing!</p>
      )}
    </>
  );
}

export { Resume };
