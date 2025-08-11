declare global {
  interface Window {
    electronAPI: {
      call: (channel: string, ...args: string[]) => Promise<string>;
    };
  }
}

// Export an empty object to make this a module
export {};
