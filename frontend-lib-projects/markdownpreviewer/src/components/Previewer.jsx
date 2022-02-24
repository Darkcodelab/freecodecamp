import React, { useContext, useEffect, useRef } from "react";
import MDContext from "../context/MDContext";

const Previewer = () => {
  const previewText = useRef(null);
  const { previewerText } = useContext(MDContext);
  useEffect(() => {
    previewText.current.innerHTML = previewerText;
  }, [previewerText]);
  return (
    <div className="previewer">
      <p className="panel__title">Previewer</p>
      <div className="previewer__textarea__container panel__textarea">
        <div ref={previewText} className="preview__textarea" id="preview"></div>
      </div>
    </div>
  );
};

export default Previewer;
