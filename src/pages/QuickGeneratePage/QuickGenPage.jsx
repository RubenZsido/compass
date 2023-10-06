import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { finalCopy } from "../../shared/recoil.js";

const QuickGenPage = () => {
  const [webPage, setWebPage] = useState("");
  const [finalHtml, setFinalHtml] = useRecoilState(finalCopy);
  const [designModeOn, setDesignModeOn] = useState(false);

  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [emailAddress, setEmailAddress] = useState(
    "mailto:zsruben03@gmail.com"
  );

  const iframeRef = useRef();

  const handleClick = () => {
    const url =
      "http://compassproto-001-site1.ftempurl.com/api/Generate/generate-landing-page";
    // Define the query parameters
    const params = {
      theIdea: "example idea",
      priceAndCurrency: "example price",
      contactLink: "example contact link"
    };
    const requestBody = {};
    const headers = {
      "Content-Type": "application/json"
    };

    axios
      .post(url, requestBody, {
        headers,
        params
      })
      .then(response => {
        // Handle the successful response here
        console.log("Response:", response.data);
        setFinalHtml(response.data);
      })
      .catch(error => {
        // Handle any errors that occur during the request
        console.error("Error:", error);
      });
  };

  const toggleDesignMode = () => {
    // Toggle the designMode property using the iframeRef
    const iframe = iframeRef.current;
    iframe.contentDocument.designMode = designModeOn ? "off" : "on";
    setDesignModeOn(!designModeOn);
  };

  useEffect(() => {
    setWebPage(finalHtml);
  }, [finalHtml]);

  return (
    <div style={{ display: "flex" }}>
      {/* Input Fields */}
      <div style={{ flex: 1 }}>
        <h1>Quick Generate</h1>
        <p>Product Name:</p>
        <input
          value={productName}
          onChange={e => setProductName(e.target.value)}
        />
        <p>Price:</p>
        <input value={price} onChange={e => setPrice(e.target.value)} />
        <p>Email address:</p>
        <input
          value={emailAddress}
          onChange={e => setEmailAddress(e.target.value)}
        />
        <button onClick={handleClick}>Generate</button>
        <button onClick={toggleDesignMode}>
          Toggle design mode ({designModeOn ? "ON" : "OFF"})
        </button>
      </div>

      {/* Display HTML as a Webpage */}
      <div style={{ flex: 2 }}>
        <h2>Preview:</h2>
        <iframe
          ref={iframeRef}
          title="Webpage Preview"
          srcDoc={webPage}
          style={{ width: "100%", height: "500px", border: "1px solid #ccc" }}
        ></iframe>
      </div>
    </div>
  );
};

export default QuickGenPage;
