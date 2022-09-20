import React from "react";
import style from "./newComp.module.css";

type Props = {
  productId: string;
};

export const NewComp: React.FC<Props> = ({ productId }) => {
  return <div className={style.root}>TEST</div>;
};
