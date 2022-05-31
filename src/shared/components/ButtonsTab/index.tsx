import React, { useState, memo } from "react";
import { cloneDeep } from "lodash";

import * as S from "./Styles";
import { ValueType, AtLeast } from "shared/types/core";
import { color } from "shared/utils/styles";

type IdType = {
  id: ValueType;
};

type ButtonItem = {
  name: string;
  disabled?: boolean;
} & IdType;

export type ButtonsTabProps = {
  className?: string;
  items: ButtonItem[];
  width: string;
  height: string;
  tabWidth?: string;
  defaultValue?: ValueType;
  backgroundColor?: string;
  color?: string;
  highlightBackgroundColor?: string;
  highlightColor?: string;
  onClick: (id: ValueType) => void;
};

export type TabOwnProps = AtLeast<ButtonsTabProps, "onClick"> & {
  children: React.ReactNode;
  selected: boolean;
  item: ButtonItem;
  buttonsTabItems: ButtonItem[];
  clickTab: (id: ValueType) => void;
};

export type TabProps = Omit<
  React.ComponentPropsWithoutRef<"button">,
  keyof TabOwnProps
> &
  TabOwnProps;

const defaultProps = {
  items: [],
  width: "216px",
  height: "36px",
  backgroundColor: "transparent",
  color: color.textDarkBlue,
  highlightBackgroundColor: color.grey500,
  highlightColor: color.textWhite,
};

const getTabWidth = (width: string, itemLen: number) => {
  const widthNumber = Number(width.replace("px", ""));
  return `${Math.floor(widthNumber / itemLen) - 5}px`;
};

const ButtonsTab: React.FC<ButtonsTabProps> = ({
  className,
  items,
  width,
  height,
  defaultValue,
  backgroundColor,
  color,
  highlightBackgroundColor,
  highlightColor,
  onClick,
}: ButtonsTabProps) => {
  const [buttonsTabItems] = useState(cloneDeep(items));
  const [selectedTabId, setSelectedTabId] = useState<ValueType>(
    defaultValue || items[0].id
  );

  const clickTab = (id: ValueType) => {
    setSelectedTabId(id);
  };

  return (
    <S.Root className={className} width={width} height={height}>
      {buttonsTabItems?.map((item) => (
        <Tab
          key={item.id}
          item={item}
          buttonsTabItems={buttonsTabItems}
          selected={item.id === selectedTabId}
          tabWidth={getTabWidth(width, buttonsTabItems.length)}
          backgroundColor={backgroundColor}
          color={color}
          highlightBackgroundColor={highlightBackgroundColor}
          highlightColor={highlightColor}
          clickTab={clickTab}
          onClick={onClick}
        >
          {item.name}
        </Tab>
      ))}
      <S.SelectedTabItem
        tabWidth={getTabWidth(width, buttonsTabItems.length)}
      />
    </S.Root>
  );
};

export const Tab: React.FC<TabProps> = ({
  item,
  children,
  selected,
  tabWidth,
  backgroundColor,
  color,
  highlightBackgroundColor,
  highlightColor,
  clickTab,
  onClick,
}: TabProps) => {
  const handleClick = () => {
    clickTab(item.id);
    onClick(item.id);
  };
  return (
    <S.StyledTab
      selected={selected}
      tabWidth={tabWidth}
      backgroundColor={backgroundColor}
      color={color}
      highlightBackgroundColor={highlightBackgroundColor}
      highlightColor={highlightColor}
      onClick={handleClick}
    >
      {children}
    </S.StyledTab>
  );
};

Tab.defaultProps = defaultProps;

export default memo(ButtonsTab);
