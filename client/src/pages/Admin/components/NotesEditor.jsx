import "./NotesEditor.css";
import { useState } from "react";

export default function NotesEditor({ customer }) {
  const [text, setText] = useState("");

  return (
    <div className="notes-editor">
      <h4>Notes for {customer.name}</h4>
      <textarea 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write notes here..."
      />

      <button className="save-btn">Save Notes</button>
    </div>
  );
}
