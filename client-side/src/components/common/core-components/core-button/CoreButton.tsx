import { Button, ButtonProps } from "antd";
import styles from "./CoreButton.module.scss";

interface ICoreButtonProps
  extends Pick<
    ButtonProps,
    "loading" | "disabled" | "htmlType" | "icon" | "onClick" | "size"
  > {
  text: string;
  type?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "basic"
    | "primaryHover";
  antType?: "primary" | "text" | "link" | "default" | "dashed" | undefined;
  isFullWidth?: boolean;
}

const CoreButton = (props: ICoreButtonProps) => {
  const {
    type = "",
    antType,
    text,
    isFullWidth = false,
    htmlType,
    size,
    ...others
  } = props;

  return (
    <Button
      type={antType}
      className={`${styles["core-button"]} ${styles[type]} ${
        isFullWidth ? styles["full-width"] : ""
      }`}
      {...others}
      size={size}
      htmlType={htmlType}
    >
      {text}
    </Button>
  );
};

export default CoreButton;
