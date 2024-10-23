const TextCard = ({ p, notify }) => {
  const handleCopy = async (e) => {
    try {
      await navigator.clipboard.writeText(e.target.innerText);
      notify();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div
      className="ring-2 ring-primary py-2 px-4 cursor-pointer rounded-3xl"
      onClick={handleCopy}
    >
      {p}
    </div>
  );
};
export default TextCard;
