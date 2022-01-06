export interface Data {
  heading: string;
  sidebar: Array<{
    heading: string;
    content: Array<{
      key: string;
      value: string;
    }>;
  }>;
  main: Array<{
    heading: string;
    content: Array<{
      date?: string;
      heading?: string;
      subheading?: string;
      additional?: string;
      items?: Array<string>;
    }>;
  }>;
  clause: string;
}

export interface Config {
  port: number;
  path: {
    src: {
      base: string;
      templates: string;
      styles: string;
      data: string;
    };
    dist: {
      base: string;
      styles: string;
      pdf: string;
    };
  };
}

export enum Task {
  DEFAULT = 'default',
  PDF = 'pdf',
  CLEAN = 'clean',
}
