export type Data = {
  heading: string;
  sidebar: {
    image?: string;
    summary?: Section<string>;
    sections: Section<FeatureContent | Features>[];
  };
  main: Section<DefaultContent>[];
  clause: string;
};

export type Section<T> = {
  heading: string;
  content: T[];
};

export type FeatureContent = {
  key: string;
  value: string;
  annotation?: string;
};

export type Features = {
  values: string[];
};

export type DefaultContent = {
  dates?: string[];
  heading?: {
    label: string;
    href?: string;
  };
  items: {
    heading?: {
      label: string;
      annotation: string;
    };
    bullets?: string[];
    additional?: string;
  }[];
};
