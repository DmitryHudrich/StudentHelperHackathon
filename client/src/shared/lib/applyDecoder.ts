import type Decoder from "jsonous";

export function applyDecoder<T>(decoder: Decoder<T>): (data: unknown) => T {
  return (data) => {
    const [result, decoderError] = decoder.decodeAny(data).cata<[T, null] | [null, string]>({
      Ok: (val) => [val, null],
      Err: (err) => [null, err],
    });

    if (result) {
      return result;
    }

    throw new Error(`Response parsing error: ${decoderError}`);
  };
}
