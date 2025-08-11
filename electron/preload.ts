import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
  call: (channel: string, ...args: any[]) =>
    ipcRenderer.invoke(channel, ...args),
});
