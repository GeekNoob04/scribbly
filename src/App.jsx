/* global chrome */
import { useEffect, useState } from "react";

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
        if (chrome?.storage?.sync) {
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

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            addNote();
        }
    };

    return (
        <div className="w-72 max-h-96 flex flex-col bg-gray-50">
            <div className="px-4 py-3 border-b border-gray-200">
                <h1 className="text-lg font-semibold text-gray-800 tracking-tight text-center">
                    scribbly
                </h1>
            </div>

            <div className="px-4 py-3 border-b border-gray-200">
                <div className="flex gap-2">
                    <input
                        type="text"
                        className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-colors"
                        placeholder="Add a note..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button
                        onClick={addNote}
                        className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700 active:bg-gray-900 transition-colors cursor-pointer"
                    >
                        Add
                    </button>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-3">
                {notes.length === 0 ? (
                    <p className="text-sm text-gray-400 text-center py-6">
                        No notes yet
                    </p>
                ) : (
                    <div className="space-y-2">
                        {notes.map((note) => (
                            <div
                                key={note.id}
                                className="group flex items-start gap-3 p-2.5 border border-gray-200 rounded-md hover:border-gray-300 hover:bg-gray-50 transition-colors"
                            >
                                <span className="flex-1 text-sm text-gray-700 wrap-break-word leading-relaxed">
                                    {note.text}
                                </span>
                                <button
                                    className="text-red-500 hover:text-red-600 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap cursor-pointer"
                                    onClick={() => deleteNote(note.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
