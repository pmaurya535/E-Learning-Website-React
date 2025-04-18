import { useState } from "react";
import axios from "axios";

const AdminCreateQuiz = () => {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([
    { text: "", options: ["", "", "", ""], correctIndex: 0 },
  ]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { text: "", options: ["", "", "", ""], correctIndex: 0 },
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const quizData = { title, questions };

    try {
      const response = await axios.post("http://localhost:8080/api/quiz", quizData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true, // If authentication is required
      });

      if (response.status === 201 || response.status === 200) {
        alert("Quiz Created Successfully!");
        setTitle("");
        setQuestions([{ text: "", options: ["", "", "", ""], correctIndex: 0 }]);
      } else {
        alert("Something went wrong! Try again.");
      }
    } catch (error) {
      console.error("Error creating quiz:", error.response?.data || error.message);
      alert("Failed to create quiz. Please check the console for details.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Create Quiz</h2>
      <input
        className="border p-2 w-full mb-3"
        type="text"
        placeholder="Quiz Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {questions.map((q, index) => (
        <div key={index} className="mb-4 p-4 border rounded">
          <input
            className="border p-2 w-full"
            type="text"
            placeholder={`Question ${index + 1}`}
            value={q.text}
            onChange={(e) => {
              let newQuestions = [...questions];
              newQuestions[index].text = e.target.value;
              setQuestions(newQuestions);
            }}
          />
          {q.options.map((opt, i) => (
            <input
              key={i}
              className="border p-2 w-full my-1"
              type="text"
              placeholder={`Option ${i + 1}`}
              value={opt}
              onChange={(e) => {
                let newQuestions = [...questions];
                newQuestions[index].options[i] = e.target.value;
                setQuestions(newQuestions);
              }}
            />
          ))}
          <select
            className="border p-2 w-full"
            onChange={(e) => {
              let newQuestions = [...questions];
              newQuestions[index].correctIndex = parseInt(e.target.value);
              setQuestions(newQuestions);
            }}
          >
            {q.options.map((_, i) => (
              <option key={i} value={i}>
                Correct Answer: Option {i + 1}
              </option>
            ))}
          </select>
        </div>
      ))}
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addQuestion}>
        + Add Question
      </button>
      <button className="bg-green-500 text-white px-4 py-2 rounded ml-2" onClick={handleSubmit}>
        Save Quiz
      </button>
    </div>
  );
};

export default AdminCreateQuiz;
