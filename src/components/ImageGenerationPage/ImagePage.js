import React, { useState } from "react";
import "./ImagePage.css";
import { PropagateLoader } from "react-spinners";
function ImagePage() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const handleGenerateImage = async () => {
    setLoading(true);
    await sendPropt().then((result) => {
      //console.log(result);
      //setResult(result.data[0].url);
    });
  };

  const sendPropt = async () => {
    if (!prompt) {
      console.log("Prompt required" + prompt);
      return;
    }
    console.log("Prompt: " + prompt);
    await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + String(process.env.REACT_APP_Open_AI_Key),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: prompt,
        n: 1,
        size: "512x512",
      }),
    })
      .then((data) => {
        //console.log(data);
        return data.json();
      })
      .then((data) => {
        console.log(data.data[0].url);
        setResult(data.data[0].url);
        setLoading(false);
      });
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
        <button onClick={handleGenerateImage}>Generate an Image</button>
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
