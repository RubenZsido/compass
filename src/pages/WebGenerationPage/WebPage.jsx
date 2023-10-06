/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { generateOwn } from "./GenerateWebPage";
import { useRecoilState } from "recoil";
import { finalCopy, subtitleAtom, titleAtom } from "../../shared/recoil";
import "./WebPage.scoped.css";
function WebPage() {
  const [templateId, setTemplateId] = useState(0);
  const [title, setTitle] = useRecoilState(titleAtom);
  const [subTitle, setSubtitle] = useRecoilState(subtitleAtom);
  const [copy, setCopy] = useRecoilState(finalCopy);
  const { html, css, templateNumber } = generateOwn(
    templateId,
    title,
    subTitle,
    copy
  );
  const srcDoc = `
  <html>
    <body>${html}</body>
    <style>${css}</style>
  </html>`;
  return (
    <>
      <p>{templateId + 1}</p>
      <button
        onClick={() =>
          setTemplateId((prev) => {
            if (prev === 0) {
              return prev;
            } else {
              return prev - 1;
            }
          })
        }
      >
        back
      </button>
      <button
        onClick={() =>
          setTemplateId((prev) => {
            if (prev === templateNumber - 1) {
              return prev;
            } else {
              return prev + 1;
            }
          })
        }
      >
        forward
      </button>
      <button
        onClick={() => {
          console.log(templateNumber);
        }}
      >
        debug
      </button>
      <iframe className="website" srcDoc={srcDoc}>
        {copy}
      </iframe>
    </>
  );
}

export default WebPage;
