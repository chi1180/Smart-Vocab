import type { TabbarProps } from "../props";

export function Tabbar({ tabs }: TabbarProps) {
  return (
    <div className="h-14 bg-secondary p-2">
      {tabs.map(({ name, action, is_selected }) => (
        <button
          type="button"
          onClick={action}
          key={name}
          className={`h-full w-24 rounded-md ${is_selected ? "bg-primary" : ""}`}
        >
          {name}
        </button>
      ))}
    </div>
  );
}
