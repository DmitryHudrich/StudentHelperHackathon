import React from "react";
import { MaskedInput } from "antd-mask-input";
import type { MaskedInputProps } from "antd-mask-input/build/module/lib/MaskedInput";

export const PhoneInput = React.memo(function RuPhoneInput({
  mask = "+{7}{[-]}000{[-]}000[-]00[-]00",
  placeholder = "+7-ХХХ-ХХХХХХХ",
  ...props
}: Omit<MaskedInputProps, "mask"> & { mask?: string }) {
  return <MaskedInput mask={mask} placeholder={placeholder} type="tel" {...props} />;
});
