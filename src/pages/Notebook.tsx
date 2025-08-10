import { useState } from "react";
import { FileTree } from "../components/FileTree";
import { PdfViewer } from "../components/PdfViewer";
import { _LastTimeData } from "../utilities/localStorage";
import { VocabPanel } from "../components/VocabPanel";

export function Notebook() {
  const last_time_data_key = "file";
  const last_target_file = _LastTimeData.get(last_time_data_key);
  const [target, setTarget] = useState<string | null>(
    last_target_file.length > 0 ? last_target_file : null,
  );

  return (
    <div className="h-full flex *:h-full">
      {/*Sidebar, file tree*/}
      <div className="w-1/4">
        <FileTree
          files={[
            "/home/chihiro/Documents/EnglishPrintsForEikenPre-1Glade/Indian IT Elite.pdf",
            "/home/chihiro/Documents/EnglishPrintsForEikenPre-1Glade/Voluntary Human Extinction Movement.pdf",
            "/home/chihiro/Documents/EnglishPrintsForEikenPre-1Glade/Universal Basic Income.pdf",
          ]}
          action={(file) => fileClickHandler(file)}
        />
      </div>

      {/*Notebook content preview*/}
      <div
        className={`w-1/2 px-1 ${target ? "" : "flex items-center justify-center"}`}
      >
        {target ? <PdfViewer src={target} /> : <p>Notebook isn't selected.</p>}
      </div>

      {/*Vocabulary adding form and list*/}
      <div className="w-1/4">
        <VocabPanel />
      </div>
    </div>
  );

  function fileClickHandler(file: string) {
    setTarget(file);
  }
}
