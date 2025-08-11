import { app, BrowserWindow, screen } from "electron";
import path from "node:path";
import { applyHandlers } from "./ipc_handler";

const isDev = process.env.NODE_ENV === "development";

function createWindow(): void {
  const screenSize = screen.getPrimaryDisplay().workAreaSize;
  const mainWindow = new BrowserWindow({
    height: screenSize.height,
    width: screenSize.width,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
    autoHideMenuBar: true,
  });

  if (isDev) {
    mainWindow.loadURL("http://localhost:3000");
  } else {
    mainWindow.loadFile(path.join(__dirname, "../dist/index.html"));
  }
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

applyHandlers();
