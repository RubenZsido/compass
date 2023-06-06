import React, { useState } from "react";
import "./ImagePage.css";
import { Configuration, OpenAIApi } from "openai";
import { PropagateLoader } from "react-spinners";
function ImagePage() {
  console.log(process.env.REACT_APP_Open_AI_Key);
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_Open_AI_Key,
  });
  delete configuration.baseOptions.headers["User-Agent"];

  const openai = new OpenAIApi(configuration);

  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const generateImage = async () => {
    setLoading(true);
    const res = await openai
      .createImage({
        prompt: prompt,
        n: 1,
        size: "512x512",
      })
      .then(() => setLoading(false));

    setResult(res.data.data[0].url);
  };
  return (
    <div className="app">
      <>
        <h2>Generate an Image using Open AI API</h2>

        <textarea
          placeholder="Search Bears with Paint Brushes the Starry Night, painted by Vincent Van Gogh.."
          onChange={(e) => setPrompt(e.target.value)}
          rows="10"
          cols="40"
        />
        <button onClick={generateImage}>Generate an Image</button>
        {result.length > 0 && loading ? (
          <PropagateLoader
            color="#4caf50"
            loading
            style={{ padding: "100px" }}
          ></PropagateLoader>
        ) : result.length > 0 ? (
          <img className="result-image" src={result} alt="result" />
        ) : (
          <></>
        )}
      </>
    </div>
  );
}

export default ImagePage;
