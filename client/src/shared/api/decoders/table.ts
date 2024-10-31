import Decoder, { array, field, number, succeed } from "jsonous";

import type { TableDto } from "shared/model/interfaces";

export const tableDecoder = <T>(decoder: Decoder<T>): Decoder<TableDto<T>> =>
  succeed({})
    .assign("rows", field("items", array(decoder)))
    .assign("totalCount", field("page", field("pageCount", number)));
