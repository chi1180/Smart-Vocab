import { dialog, ipcMain } from "electron";

const HANDLERS = [
  {
    channel: "select-dir",
    listener: async () => {
      const result = await dialog.showOpenDialog({
        properties: ["openDirectory"],
      });

      if (!result.canceled) return result.filePaths;
      return null;
    },
  },
];

function applyHandlers() {
  HANDLERS.forEach(({ channel, listener }) =>
    ipcMain.handle(channel, listener),
  );
}

export { applyHandlers };
