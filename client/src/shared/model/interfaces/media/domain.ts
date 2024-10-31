import type { UniqueEntity } from "shared/model/interfaces";

export interface MediaFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface Media extends UniqueEntity {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail: MediaFormat | null;
    small: MediaFormat | null;
    medium: MediaFormat | null;
    large: MediaFormat | null;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  createdAt: ISO;
  updatedAt: ISO;
}
