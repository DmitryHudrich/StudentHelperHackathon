import type { Endpoint, Request } from "shared/model/interfaces";

import type { Media } from "./domain";

export type GetMediaRequest = Request<{ urlParams: { id: Guid } }>;
export type GetMediaBlobRequest = Request<{ urlParams: { url: string } }>;
export type CreateMediaRequest = Request<{ body: File[] }>;
export type DeleteMediaRequest = Request<{ urlParams: { id: Guid } }>;

export interface MediasTransport {
  getMedia: Endpoint<GetMediaRequest, Media>;
  getMediaBlob: Endpoint<GetMediaBlobRequest, Blob>;
  createMedia: Endpoint<CreateMediaRequest, Media[]>;
  deleteMedia: Endpoint<DeleteMediaRequest>;
}
