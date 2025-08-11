import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export function Setting() {
  const [selectedDir, setSelectedDir] = useState<string>("");

  useEffect(() => {
    if (selectedDir.length > 0) {
      // [TODO] ::: Save the selected directory to the user's settings
      toast.success(`Successfully saved your Notebook vault location`);
    }
  }, [selectedDir]);

  return (
    <div className="min-w-[800] w-1/2 pt-14 pb-7 mx-auto">
      <h1 className="text-3xl pb-2">Notebook vault</h1>
      <p>Select a directory that contains your documents.</p>
      <div className="my-4 rounded-md bg-accent p-4">
        <h3 className="text-xl pb-1"># Caution</h3>
        <p>We only support PDF files as a document for notebook.</p>
      </div>
      <p className="pb-2">
        Please select a directory that contains your documents.
        <br />
        We'll use selected directory as the notebook vault.
      </p>

      <div className="p-6 min-h-40 rounded-md border-2 mt-12 border-secondary flex flex-col items-center justify-center">
        <button
          type="button"
          className="px-2 py-1 rounded-md bg-secondary hover:opacity-60 transition-all duration-300"
          onClick={dirSelectionHandler}
        >
          Select a directory
        </button>

        <span
          className={`pt-2 ${selectedDir ? "text-font" : "text-secondary"}`}
        >
          {selectedDir.length > 0 ? selectedDir : "No directory selected"}
        </span>
      </div>
    </div>
  );

  function dirSelectionHandler() {
    window.electronAPI.call("select-dir").then((result) => {
      console.log(`[--INFO--] Selected directory: ${result}`);
      if (result) setSelectedDir(result);
    });
  }
}
