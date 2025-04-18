import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserAttemptQuiz = () => {
  const { quizId } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/quiz/${quizId}`).then((res) => {
      setQuiz(res.data);
      setAnswers(new Array(res.data.questions.length).fill(null));
    });
  }, [quizId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8080/api/userquiz/submit/${quizId}`, { answers });
      alert(`Your Score: ${res.data.Score} / ${res.data.Total}`);
    } catch (error) {
      console.error("Error submitting quiz:", error);
    }
  };

  if (!quiz) return <h2>Loading...</h2>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold">{quiz.title}</h2>
      <form onSubmit={handleSubmit}>
        {quiz.questions.map((q, index) => (
          <div key={index} className="mb-4 p-4 border rounded">
            <p className="font-semibold">{q.text}</p>
            {q.options.map((opt, i) => (
              <label key={i} className="block">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={i}
                  onChange={() => {
                    let newAnswers = [...answers];
                    newAnswers[index] = i;
                    setAnswers(newAnswers);
                  }}
                />{" "}
                {opt}
              </label>
            ))}
          </div>
        ))}
        <button className="bg-green-500 text-white px-4 py-2 rounded" type="submit">
          Submit Quiz
        </button>
      </form>
    </div>
  );
};

export default UserAttemptQuiz;
