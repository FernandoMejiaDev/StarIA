import React, { useState } from "react";
import type { FormEvent } from "react";
import Arrow from "../../assets/svg/Arrow";

interface ChatBoxProps {
  onSend: (Message: string) => void;
}

const ChatBox: React.FC<ChatBoxProps> = ({ onSend }) => {
  const [Message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (Message.trim() === "") return;
    onSend(Message);
    setMessage("");
  };

  return (
    <div className="relative p-1 rounded-2xl bg-gradient-to-l from-slate-900 via-indigo-900 to-cyan-800">
      <form
        onSubmit={handleSubmit}
        className="max-w-[80rem] text-zinc-950 bg-slate-100 dark:text-slate-100 rounded-xl grid grid-cols-4 gap-2 w-full p-2 dark:bg-zinc-950"
      >
        <div className="relative flex-1 col-span-4 p-1 rounded-2xl bg-gradient-to-l from-slate-900 via-indigo-900 to-cyan-800">
          <textarea
            value={Message}
            onChange={(e) => setMessage(e.target.value)}
            className="block w-full p-2 resize-none min-h-16 max-h-32 adjust-textarea rounded-xl bg-slate-100 dark:bg-zinc-950"
            placeholder="Pregunta lo que quieras"
          ></textarea>
        </div>

        <button
          type="submit"
          className="flex justify-center w-full h-full col-start-4 row-start-2 p-2 rounded-2xl text-slate-100 bg-gradient-to-l from-slate-900 via-indigo-900 to-cyan-800"
        >
          <Arrow width="28" height="28" />
        </button>
      </form>
    </div>
  );
};

export default ChatBox;
