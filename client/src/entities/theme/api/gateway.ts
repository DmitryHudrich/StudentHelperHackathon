import { StudentHelperWebOpenApi } from "api";
import { Service } from "typedi";

import { applyDecoder } from "../../../shared/lib/applyDecoder";
import type { CreateThemeRequest, GetThemeRequest, Theme } from "../interfaces";

import { themeDecoder } from "./decoders";

@Service()
export class ThemeApi {
  public async getThemeDetails({ urlParams }: GetThemeRequest): Promise<Theme> {
    return StudentHelperWebOpenApi.getTopic({ id: urlParams.id }).then(applyDecoder(themeDecoder));
  }

  public async createTheme({ body }: CreateThemeRequest): Promise<void> {
    await StudentHelperWebOpenApi.postTopic({
      requestBody: {
        userId: body.userId,
        title: body.title,
        content: body.content,
        contacts: [],
        image: body.image,
        branchId: body.branchId,
      },
    });
  }
}
