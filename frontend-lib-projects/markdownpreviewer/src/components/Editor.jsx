import React, { useContext } from "react";
import MDContext from "../context/MDContext";
import { mdToHTML } from "../context/MDActions";

const Editor = () => {
  const { editorText, dispatch } = useContext(MDContext);
  const handleEditorOnChange = (e) => {
    const parsed = mdToHTML(e.target.value);
    dispatch({
      type: "TEXT_CHANGE",
      payload: {
        editorText: e.target.value,
        previewerText: parsed,
      },
    });
  };

  return (
    <div className="editor">
      <p className="panel__title">Editor</p>
      <div className="editor__textarea__container panel__textarea">
        <textarea
          name="editor"
          id="editor"
          value={editorText}
          onChange={handleEditorOnChange}
          placeholder="Enter Markdown Text"
          className="editor__textarea"
        ></textarea>
      </div>
    </div>
  );
};

export default Editor;
