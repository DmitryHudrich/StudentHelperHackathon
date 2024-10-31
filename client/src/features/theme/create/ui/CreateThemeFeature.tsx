import { useRef } from "react";
import { useParams } from "react-router";
import { useAsyncFn } from "react-use";
import {
  BoldItalicUnderlineToggles,
  CreateLink,
  headingsPlugin,
  imagePlugin,
  InsertImage,
  InsertTable,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  ListsToggle,
  MDXEditor,
  type MDXEditorMethods,
  tablePlugin,
  toolbarPlugin,
  UndoRedo,
} from "@mdxeditor/editor";
import { Button, Flex, Form, Input } from "antd";

import type { CreateThemeDto } from "entities/theme";
import { useUserDetails } from "entities/user";

import { useInjectService } from "shared/lib/useInjectService";
import { FormErrorMessage } from "shared/ui/forms";

import { CreateThemeService } from "../services";

import "@mdxeditor/editor/style.css";

interface Values {
  name: string;
  image: string;
}

export const CreateThemeFeature = () => {

  const { branchId } = useParams();

  const user = useUserDetails()

  const ref = useRef<MDXEditorMethods>(null);

  const [form] = Form.useForm<Values>();

  const service = useInjectService(CreateThemeService);

  const [{ loading, error }, onSubmit] = useAsyncFn(async (body: CreateThemeDto) => {
    await service.createTheme(body)
  }, []);

  return (
    <Flex vertical gap={20}>
      <Form
        autoComplete="off"
        form={form}
        layout="vertical"
        name="createTheme"
        size="middle"
        validateTrigger="onSubmit"
        onFinish={(values) => {
          if (!ref.current) {
            return;
          }

          const body: CreateThemeDto = {
            image: values.image,
            contacts: [],
            title: values.name,
            branchId: Number(branchId),
            content: ref.current.getMarkdown(),
            userId: user.state.id
          }

          void onSubmit(body)
        }}
      >
        <Form.Item label="Название темы" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Изображение" name="image" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        {error && <FormErrorMessage error={error} />}
        <Form.Item>
          <Button htmlType="submit" loading={loading} type="primary">
            Создать
          </Button>
        </Form.Item>
      </Form>
      <MDXEditor
        ref={ref}
        markdown="Распишите свою тему"
        plugins={[
          imagePlugin(),
          linkPlugin(),
          tablePlugin(),
          listsPlugin(),
          linkDialogPlugin(),
          toolbarPlugin({
            // eslint-disable-next-line react/no-unstable-nested-components
            toolbarContents: () => (
              <>
                {" "}
                <UndoRedo />
                <BoldItalicUnderlineToggles />
                <InsertImage />
                <InsertTable />
                <ListsToggle />
                <CreateLink />
              </>
            ),
          }),
          headingsPlugin(),
        ]}
      />
    </Flex>
  );
};
