/* global chrome */
import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [text, setText] = useState("");
    const [notes, setNotes] = useState([]);
    // showing from chrome storage
    useEffect(() => {
        if (chrome?.storage?.sync) {
            chrome?.storage?.sync.get({ notes: [] }, (data) => {
                setNotes(data.notes);
            });
        } else {
            const stored = localStorage.getItem("notes");
            if (stored) setNotes(JSON.parse(stored));
        }
    }, []);
    // storing on chrome storage
    useEffect(() => {
        if (!chrome?.storage?.sync) {
            chrome?.storage?.sync.set({ notes });
        } else {
            localStorage.setItem("notes", JSON.stringify(notes));
        }
    }, [notes]);

    const addNote = () => {
        if (!text.trim()) return;
        const newNote = { id: Date.now(), text: text.trim() };
        setNotes((prev) => [newNote, ...prev]);
        setText("");
    };

    const deleteNote = (id) => {
        setNotes((prev) => prev.filter((note) => note.id !== id));
    };

    return (
        <div className="w-72 p-4 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2 text-gray-500">Scribbly</h2>
            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    className="flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Add a note..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button
                    onClick={addNote}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 cursor-pointer"
                >
                    Add
                </button>
            </div>
            <div>
                {notes.length === 0 && <p>No notes yet</p>}
                {notes.map((note) => (
                    <div
                        key={note.id}
                        className="flex justify-between items-center mb-2 p-2 bg-white rounded shadow-sm"
                    >
                        <span className="break-normal">{note.text}</span>
                        <button
                            className="text-red-500 hover:text-red-700 cursor-pointer"
                            onClick={() => deleteNote(note.id)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
