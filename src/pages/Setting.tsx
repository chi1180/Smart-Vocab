export function Setting() {
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

      <div className="p-6 min-h-40 rounded-md border-2 mt-12 border-secondary flex items-center justify-center">
        <button
          type="button"
          className="px-2 py-1 rounded-md bg-secondary hover:opacity-60 transition-all duration-300"
          onClick={inputHandler}
        >
          Select a directory
        </button>
      </div>
    </div>
  );
}

function inputHandler() {
  alert("I have to imprement desktop-side function...");
}
