export interface TabbarProps {
  tabs: {
    name: string;
    action: () => void;
    is_selected: boolean;
  }[];
}

export interface FileTreeProps {
  files: Array<string>;
  action: (file: string) => void;
}

export interface PdfViewerProps {
  src: string;
}

export interface VocabPanelProps {
  target: string;
}
