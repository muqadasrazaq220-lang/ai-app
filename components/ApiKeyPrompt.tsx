import React from "react";

const ApiKeyPrompt = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>🔑 Enter your Gemini API Key</h2>
      <p>
        Please set your <code>GEMINI_API_KEY</code> in the <code>.env.local</code> file.
      </p>
    </div>
  );
};

export default ApiKeyPrompt;
