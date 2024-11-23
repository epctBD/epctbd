import { Button, ButtonProps } from "antd";
import styles from "./CoreButton.module.scss";

interface ICoreButtonProps
  extends Pick<
    ButtonProps,
    | "loading"
    | "disabled"
    | "htmlType"
    | "icon"
    | "onClick"
    | "size"
    | "className"
  > {
  text?: string;
  type?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "basic"
    | "primaryHover";
  antType?: "primary" | "text" | "link" | "default" | "dashed" | undefined;
  isFullWidth?: boolean;
  linkTo?: string;
}

const CoreButton = (props: ICoreButtonProps) => {
  const {
    type = "",
    antType,
    text,
    isFullWidth = false,
    linkTo = undefined,
    htmlType,
    className,
    ...others
  } = props;

  return (
    <Button
      type={antType}
      className={`${styles["core-button"]} ${styles[type]}`}
      {...others}
      htmlType={htmlType}
    >
      {text}
    </Button>
  );
};

export default CoreButton;
