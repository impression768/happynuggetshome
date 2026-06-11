export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface LegalDocData {
  id: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}
