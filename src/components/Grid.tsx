import { FC } from "react";

type ColsAndGapRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

type GridProps = {
  cols: ColsAndGapRange;
  gap: ColsAndGapRange;
  children?: string | JSX.Element | JSX.Element[];
};

const Grid: FC<GridProps> = ({ cols, gap, children }) => (
  <div className={`grid grid-cols-${cols} gap-${gap}`}>{children}</div>
);

export default Grid;
