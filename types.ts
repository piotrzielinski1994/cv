export interface Data {
  heading: string;
  sidebar: {
    image?: string;
    summary?: Section<string>;
    sections: Section<FeatureContent | Features>[];
  };
  main: Section<DefaultContent>[];
  clause: string;
}

interface Section<T> {
  heading: string;
  content: T[];
}

interface FeatureContent {
  key: string;
  value: string;
  annotation?: string;
}

interface Features {
  values: string[];
}

interface DefaultContent {
  dates?: string[];
  heading?: string;
  items: {
    heading?: string;
    bullets?: string[];
    additional?: string;
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
