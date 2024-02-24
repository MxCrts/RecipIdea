import React, { Component } from "react";
import "./NoteBook.css";

class NoteBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      currentEntry: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ currentEntry: event.target.value });
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter" && this.state.currentEntry.trim() !== "") {
      this.setState(
        (prevState) => ({
          entries: [...prevState.entries, prevState.currentEntry.trim()],
          currentEntry: "", // Clear the input field after adding
        }),
        () => {
          // Call the passed updateNotebookInputs method with the new entries
          this.props.updateNotebookInputs(this.state.entries.join(","));
        }
      );
    }
  };

  renderEntries() {
    return this.state.entries.map((entry, index) => (
      <div key={index}>{entry}</div>
    ));
  }

  render() {
    return (
      <div className="notebook">
        <div className="paper">
          {this.renderEntries()}
          <input
            style={{ color: "black" }}
            type="text"
            placeholder="Add an ingredient..."
            value={this.state.currentEntry}
            onChange={this.handleInputChange}
            onKeyPress={this.handleKeyPress}
          />
        </div>
      </div>
    );
  }
}

export default NoteBook;
