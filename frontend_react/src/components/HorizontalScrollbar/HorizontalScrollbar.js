import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import RightArrowIcon from "../../assets/icon/right-arrow.png";
import LeftArrowIcon from "../../assets/icon/left-arrow.png";

import "./HorizontalScrollbar.scss";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <p onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </p>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <p onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </p>
  );
};

const HorizontalScrollbar = ({ visibleItems, renderItem }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} scrollBy={1}>
      {visibleItems.map((item) => (
        <div className="horizontal__item" key={item._id} itemId={item._id}>
          {renderItem(item)}
        </div>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
