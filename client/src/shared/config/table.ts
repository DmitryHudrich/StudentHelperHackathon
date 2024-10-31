import type { PaginationProps, TableProps } from "antd";

export const paginationLocale: PaginationProps["locale"] = {
  /* eslint-disable @typescript-eslint/naming-convention */
  jump_to: "Перейти на",
  page: "Страницу",
  next_page: "Следующая страница",
  prev_page: "Предыдущая страница",
  next_3: "Следующие 3 страницы",
  prev_3: "Предыдущие 3 страницы",
  next_5: "Следующие 5 страниц",
  prev_5: "Предыдущие 5 страниц",
  page_size: "Размер страницы",
};

export const tableLocale: TableProps["locale"] = {
  filterConfirm: "Ок",
  filterReset: "Сбросить",
  triggerDesc: "Отсортировать по убыванию",
  triggerAsc: "Отсортировать по возрастанию",
  cancelSort: "Сбросить сортировку",
};
