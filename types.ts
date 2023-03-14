export interface Data {
  heading: string;
  sidebar: {
    heading: string;
    content: Feature[];
  }[];
  main: Section[];
  clause: string;
}

interface Feature {
  key: string;
  value: string;
  annotation?: string;
}

interface Section {
  heading: string;
  content: {
    dates?: string[];
    heading?: string;
    subheading?: string;
    additional?: string;
    items?: string[];
  }[];
}

export interface Config {
  port: number;
  path: {
    src: {
      base: string;
      templates: string;
      styles: string;
      photo: string;
      examplePhoto: string;
      data: string;
    };
    dist: {
      base: string;
      styles: string;
      photo: string;
      pdf: string;
    };
  };
}

export enum Task {
  DEFAULT = 'default',
  PDF = 'pdf',
  CLEAN = 'clean',
}
