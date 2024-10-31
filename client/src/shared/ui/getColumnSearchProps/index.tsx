import React, { useRef } from "react";
import Highlighter from "react-highlight-words";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { type InputRef, theme, Typography } from "antd";
import { Button, Input, Space } from "antd";
import type { FilterDropdownProps } from "antd/es/table/interface";
import type { ColumnType } from "antd/lib/table";
import type { Key } from "antd/lib/table/interface";

import type { UniqueEntity } from "shared/model/interfaces";

interface ColumnSearchFilterProps<T> {
  dataIndex: keyof T;
  setSearchText: (text: string) => void;
  setSearchedColumn: (col: keyof T) => void;
  searchedColumn: keyof T;
  searchText: string;
  linkFunc?: (prefix: boolean, id: number) => string;
}

export const ColumnSearchFilter = <T extends UniqueEntity>({
  dataIndex,
  setSearchText,
  setSearchedColumn,
  searchedColumn,
  searchText,
  linkFunc,
}: ColumnSearchFilterProps<T>): ColumnType<T> => {
  const token = theme.useToken();
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (selectedKeys: string[], confirm: FilterDropdownProps["confirm"], columnKey: keyof T) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(columnKey);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  return {
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }: FilterDropdownProps) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${String(dataIndex)}`}
          style={{ marginBottom: 8, display: "block" }}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
        />
        <Space>
          <Button
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          >
            Найти
          </Button>
          <Button size="small" style={{ width: 90 }} onClick={() => clearFilters && handleReset(clearFilters)}>
            Сбросить
          </Button>
          <Button
            size="small"
            type="link"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Применить фильтр
          </Button>
          <Button
            size="small"
            type="link"
            onClick={() => {
              close();
            }}
          >
            Закрыть
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? token.token.colorPrimary : undefined }} />
    ),
    onFilter: (value: string | Key | boolean, record: T) =>
      (record[dataIndex] as unknown as string)
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible: boolean) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text: string | number, record: T) => {
      const content =
        searchedColumn === dataIndex ? (
          <Highlighter
            autoEscape
            highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
            searchWords={[searchText]}
            textToHighlight={text ? text.toString() : ""}
          />
        ) : (
          text
        );

      return linkFunc ? (
        <Link to={linkFunc(true, record.id)}>
          <Typography.Link>{content}</Typography.Link>
        </Link>
      ) : (
        <Typography.Text>{content}</Typography.Text>
      );
    },
  };
};
