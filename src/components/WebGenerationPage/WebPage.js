import React from "react";
import styles from "./web-page.css";
import { generateOwn, generateTemplate1 } from "./GenerateWebPage";
import { useRecoilState } from "recoil";
import { finalCopy, finalTitle } from "../../shared/recoil";
function WebPage() {
  const [title, setTitle] = useRecoilState(finalTitle);
  const [copy, setCopy] = useRecoilState(finalCopy);
  const [html, css] = generateOwn(title, "slogan", copy);
  const srcDoc = `
  <html>
    <body>${html}</body>
    <style>${css}</style>
  </html>`;
  return <iframe srcDoc={srcDoc}>{copy}</iframe>;
}

export default WebPage;
