import { useEffect, useState } from "react";
import type { FileTreeProps } from "../props";
import { _LastTimeData } from "../utilities/localStorage";

export function FileTree({ files, action }: FileTreeProps) {
  const last_time_data_key = "file";
  const last_target_file = _LastTimeData.get(last_time_data_key);
  const [targetFile, settargetFile] = useState(last_target_file);

  useEffect(() => {
    _LastTimeData.set(last_time_data_key, targetFile);
  }, [targetFile]);

  return (
    <div className="h-full w-full bg-secondary border-t-4 border-primary p-4 rounded-tr-lg flex flex-col gap-2">
      {files.map((file) => (
        <button
          type="button"
          key={file}
          onClick={() => {
            settargetFile(file);
            action(file);
          }}
          className={`w-full py-1 pl-2 rounded-md text-start hover:bg-primary transition-all duration-300 ${targetFile === file ? "bg-primary" : ""}`}
        >
          {file.split("/").at(-1)?.replace(/\..*/, "")}
        </button>
      ))}
    </div>
  );
}
