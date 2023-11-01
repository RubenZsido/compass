import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { finalCopy } from "../../shared/recoil.js";
import { Button, CircularProgress, Container, TextField } from "@mui/material";

const QuickGenPage = () => {
  const [webPage, setWebPage] = useState("");
  const [finalHtml, setFinalHtml] = useRecoilState(finalCopy);
  const [designModeOn, setDesignModeOn] = useState(false);

  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [emailAddress, setEmailAddress] = useState(
    "mailto:zsruben03@gmail.com"
  );
  const [isLoading, setIsLoading] = useState(false);

  const iframeRef = useRef();

  const handleClick = () => {
    setIsLoading(true);
    const url =
      "http://compassproto-001-site1.ftempurl.com/api/Generate/generate-landing-page";
    const requestBody = {
      theIdea: productName,
      priceAndCurrency: 12,
      email: "zsruben03@gmail.com",
    };
    const headers = {
      "Content-Type": "application/json",
    };

    axios
      .post(url, requestBody, {
        headers,
      })
      .then((response) => {
        // Handle the successful response here
        console.log("Response:", response.data);
        setFinalHtml(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error("Error:", error);
        setIsLoading(false);
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
    <div style={{ display: "flex", backgroundColor: "white", height: "100%" }}>
      {/* Input Fields */}
      <Container style={{ flex: 1 }}>
        <h1>Quick Generate</h1>
        <TextField
          label="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <TextField
          label="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <p>Email address:</p>
        <TextField
          label="Email Address"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
        />
        <Button variant="contained" onClick={handleClick}>
          Generate
        </Button>
        <Button variant="contained" onClick={toggleDesignMode}>
          Toggle design mode ({designModeOn ? "ON" : "OFF"})
        </Button>
        {isLoading ? <CircularProgress /> : <p></p>}
      </Container>

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
