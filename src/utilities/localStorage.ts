class LastTimeData {
  base_key: string;
  keys: string[];

  constructor(base_key: string, keys: string[]) {
    this.base_key = base_key;
    this.keys = keys;
  }

  getAll(): string {
    return localStorage.getItem(this.base_key) || "{}";
  }

  get(key: string): string {
    const data = this.getAll();
    const parsedData = JSON.parse(data);
    return parsedData[key] || "";
  }

  set(key: string, value: string): void {
    const data = this.getAll();
    const parsedData = JSON.parse(data);
    parsedData[key] = value;
    localStorage.setItem(this.base_key, JSON.stringify(parsedData));
  }
}

/**Instancing */

export const _LastTimeData = new LastTimeData("last_time_data", [
  "tab",
  "file",
]);
