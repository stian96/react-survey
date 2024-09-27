import { useState } from "react";
import Form from "./formElements/Form";
import AnswersList from "./AnswersList";

const Survey = () => {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answerList, setAnswerList] = useState([]);

  const handleFormSubmit = (answers) => {
    setAnswerList([...answerList, answers]);
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answerList={answerList} />
      </section>
      <section className="survey__form">
        <Form onSubmit={handleFormSubmit}/>
      </section>
    </main>
  );
}

export default Survey;
