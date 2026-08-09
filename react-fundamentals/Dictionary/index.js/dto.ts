export interface Phonetics {
  text: string;
  audio: string;
}

export interface Definitions {
  definition: string;
  synonyms: unknown[];
  antonyms: unknown[];
}

export interface Meanings {
  partOfSpeech: string;
  definitions: Definitions[];
  synonyms: string[];
  antonyms: unknown[];
}

export interface License {
  name: string;
  url: string;
}

export interface DictionaryApiResponse {
  word: string;
  phonetic: string;
  phonetics: Phonetics[];
  meanings: Meanings[];
  license: License;
  sourceUrls: string[];
}