import TextCard from "./TextCard";

const DisplayText = ({ text, notify }) => {
  if (text === null) return null;

  return (
    <article className="ring-2 ring-secondary space-y-8 p-8 rounded-md">
      {text.map((p, index) => (
        <TextCard notify={notify} key={index + "_" + p} p={p} />
      ))}
    </article>
  );
};
export default DisplayText;
