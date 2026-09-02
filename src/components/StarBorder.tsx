import {
  type CSSProperties,
  type ElementType,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import "./StarBorder.css";

type StarBorderProps<T extends ElementType = "div"> = {
  as?: T;
  className?: string;
  contentClassName?: string;
  color?: string;
  speed?: CSSProperties["animationDuration"];
  thickness?: number;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className" | "color">;

const StarBorder = <T extends ElementType = "div">({
  as,
  className = "",
  contentClassName = "",
  color = "#38bdf8",
  speed = "6s",
  thickness = 2,
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = (as || "div") as ElementType;

  return (
    <Component
      className={`star-border-container ${className}`}
      style={{
        padding: `${thickness}px`,
        ...(rest as { style?: CSSProperties }).style,
      }}
      {...rest}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 12%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 12%)`,
          animationDuration: speed,
        }}
      />
      <div className={`star-border-inner ${contentClassName}`}>{children}</div>
    </Component>
  );
};

export default StarBorder;
