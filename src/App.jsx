import { useState } from "react";
import ParagraphForm from "./Form";
import { textData } from "./data";
import DisplayText from "./DisplayText";
import { ToastContainer, toast } from "react-toastify";
const App = () => {
  const [numParagraphs, setNumParagraphs] = useState(1);
  const [text, setText] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(textData.slice(0, numParagraphs));
  };

  const notify = () =>
    toast("Text copied to clipboard!", {
      position: "top-center",
      autoClose: 2000,
    });

  return (
    <main className="p-20">
      <header>
        <h1 className="text-center text-4xl text-secondary">
          Tired of Boring Lorem Ipsum?
        </h1>
      </header>

      <section className="section-container">
        <ParagraphForm
          numParagraphs={numParagraphs}
          setNumParagraphs={setNumParagraphs}
          onSubmit={handleSubmit}
        />
      </section>

      <section className="section-container">
        <DisplayText text={text} notify={notify} />
      </section>

      <ToastContainer />
    </main>
  );
};
export default App;
