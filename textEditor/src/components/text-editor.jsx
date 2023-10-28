import React, { Component } from "react";
import "./text-editor.css";
import Options from "./options"; // Import the Options component

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
  }

  handleChange = (e) => {
    handleChange = () => {
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const content = this.editor.innerHTML;
      this.setState({ content }, () => {
        selection.removeAllRanges();
        selection.addRange(range);
      });
    };
    
  };

  handleFormat = (command) => {
    document.execCommand(command);
  };

  handleInsertLink = () => {
    const url = prompt("Enter a URL:");
    if (url) {
      document.execCommand("createLink", false, url);
    }
  };

  render() {
    return (
      <div className="max-w-screen-lg mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Text Editor</h1>
        <Options // Use the Options component
          handleFormat={this.handleFormat}
          handleInsertLink={this.handleInsertLink}
        />
        <div
          className="border shadow-md h-screen p-20"
          contentEditable={true}
          onInput={this.handleChange}
          dangerouslySetInnerHTML={{ __html: this.state.content }}
          style={{ outline: "none" }}
        />
      </div>
    );
  }
}

export default TextEditor;
