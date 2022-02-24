const mdReducer = (state, action) => {
  switch (action.type) {
    case "TEXT_CHANGE":
      return {
        ...state,
        editorText: action.payload.editorText,
        previewerText: action.payload.previewerText,
      };
    default:
      return state;
  }
};

export default mdReducer;
