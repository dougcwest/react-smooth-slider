import React, { Dispatch, SetStateAction } from "react";
import * as st from "./Dropdown.Styled";
import * as IoIcons from "react-icons/io";

interface DropdownProps {
  dropdownVisible: boolean;
  setDropdownVisible?: Dispatch<SetStateAction<boolean>>;
  isFilterActive: boolean;
  setIsFilterActive?: Dispatch<SetStateAction<boolean>>;
  arrowUp: boolean;
  setArrowUp?: Dispatch<SetStateAction<boolean>>;
  handleFilterClick: () => void;
  handleDropdown: () => void;
  renderTitle: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  dropdownVisible,
  isFilterActive,
  arrowUp,
  handleFilterClick,
  handleDropdown,
  renderTitle,
}) => {
  const renderDropdown = () => {
    return (
      <st.DropdownMenu>
        <st.DropdownList>
          {!isFilterActive ? (
            <li onClick={handleFilterClick}>Show Active</li>
          ) : (
            <li
              onClick={handleFilterClick}
              style={{ color: "var(--color-blue)" }}
            >
              Show All
            </li>
          )}
          <li>Filter 2</li>
          <li>Filter 3</li>
        </st.DropdownList>
      </st.DropdownMenu>
    );
  };

  return (
    <st.TitleAndDropdownContainer>
      <st.ActiveTitleContainer>
        {renderTitle()}{" "}
        {!arrowUp ? (
          <IoIcons.IoIosArrowDown
            onClick={handleDropdown}
            className="down-arrow"
          />
        ) : (
          <IoIcons.IoIosArrowUp onClick={handleDropdown} className="up-arrow" />
        )}
      </st.ActiveTitleContainer>
      {dropdownVisible ? renderDropdown() : null}
    </st.TitleAndDropdownContainer>
  );
};

export default Dropdown;
