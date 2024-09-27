import AnswersItem from "./AnswersItem";

const AnswersList = (props) => {
  console.log("Inside AnswersList: ", props);

  const { answerList } = props;

  return (
    <ul>
      {answerList.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      ))}
    </ul>
  );
}

export default AnswersList;
