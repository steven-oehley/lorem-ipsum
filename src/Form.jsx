const ParagraphForm = ({ numParagraphs, setNumParagraphs, onSubmit }) => {
  return (
    <form
      className="flex justify-center gap-8 items-center"
      onSubmit={onSubmit}
    >
      <label htmlFor="para">Number of Paragraphs:</label>
      <input
        type="number"
        min={1}
        max={8}
        step={1}
        id="para"
        name="para"
        value={numParagraphs}
        onChange={(e) => setNumParagraphs(e.target.value)}
        className="p-2 text-accent bg-black rounded-md"
      />
      <button className="btn btn-active btn-accent">Submit</button>
    </form>
  );
};
export default ParagraphForm;
