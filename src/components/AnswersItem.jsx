// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it"
};

function ItemsList({ list }) {
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{answersSet[item]}</li>
      ))}
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem({
  // Feel free to change this props names to what suits you best
  // Rememeber here we're destructuring answerItem, which is the prop name that we've passed
  answerItem: { 
    bestFeatures, 
    worstFeatures, 
    username, 
    colorRating, 
    consistencyRating, 
    logoRating, 
    additionalInfo,
    email
  }
}) {
  return (
    <li>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{colorRating}</span>
        </p>
        <p>
          <em>How do you rate your rubber duck consistency?</em>
          <span className="answer__line">{consistencyRating}</span>
        </p>
        <p>
          <em>How do you rate your rubber duck logo?</em>
          <span className="answer__line">{logoRating}</span>
        </p>
        <p>
          <em>What are the best features of your rubber duck?</em>
          <span className="answer__line">{bestFeatures}</span>
        </p>
        <p>
          <em>What are the worst features of your rubber duck?</em>
          <span className="answer__line">{worstFeatures}</span>
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{additionalInfo}</span>
        </p>
        <p>
          <em>Your email adress:</em>
          <span className="answer__line">{email}</span>
        </p>
      </article>
    </li>
  );
}
