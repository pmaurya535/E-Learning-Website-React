const QuestionBox = ({ question, options, handleAnswer }) => (
  <div className="bg-white p-6 shadow-lg rounded-lg text-center">
    <h2 className="text-2xl font-bold">{question}</h2>
    <div className="mt-4 flex flex-col space-y-2">
      {options.map((option, index) => (
        <button key={index} 
          className="bg-blue-600 hover:bg-blue-800 text-white py-2 px-5 rounded-lg transition duration-300"
          onClick={() => handleAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  </div>
);
export default QuestionBox;
