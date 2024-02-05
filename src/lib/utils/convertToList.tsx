export const convertTextToList = (text: string): React.ReactNode => {
  const lines = text.split("\n");

  return (
    <ul>
      {lines.map((line, index) =>
        line.trim().startsWith("-") ? (
          <li key={index} className="flex w-full gap-2">
            <span>&#8226;</span>
            <span>{line.trim().substring(1).trim()}</span>
          </li>
        ) : (
          <li key={index}>{line.trim()}</li>
        )
      )}
    </ul>
  );
};
