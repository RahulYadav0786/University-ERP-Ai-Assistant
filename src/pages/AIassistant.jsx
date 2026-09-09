import { useState } from "react";

function AIAssistant() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askAI = () => {
    if (!question.trim()) {
      setAnswer("Please enter a question.");
      return;
    }

    setAnswer(
      "AI Assistant: Your question has been received. AI response will be connected with the university ERP data."
    );
  };

  return (
    <main className="main-content">

      <div className="page-header">
        <h1>AI Assistant 🤖</h1>
        <p>Ask questions about your university and academic information.</p>
      </div>

      <section className="ai-assistant-card">

        <div className="ai-welcome">
          <div className="ai-icon">🤖</div>

          <div>
            <h2>Hello! How can I help you?</h2>
            <p>
              You can ask about attendance, timetable, results, notices
              and other university information.
            </p>
          </div>
        </div>

        <div className="suggestions">
          <button onClick={() => setQuestion("How is my attendance?")}>
            📊 How is my attendance?
          </button>

          <button onClick={() => setQuestion("What is my timetable today?")}>
            📅 What is my timetable today?
          </button>

          <button onClick={() => setQuestion("Show my latest results")}>
            📝 Show my latest results
          </button>

          <button onClick={() => setQuestion("Show latest university notices")}>
            📢 Show latest notices
          </button>
        </div>

        <div className="ai-chat">

          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask something..."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                askAI();
              }
            }}
          />

          <button onClick={askAI}>
            Ask AI
          </button>

        </div>

        {answer && (
          <div className="ai-answer">
            <strong>🤖 AI Assistant</strong>
            <p>{answer}</p>
          </div>
        )}

      </section>

    </main>
  );
}

export default AIAssistant;