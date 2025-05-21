import { useEffect, useRef } from "react";

/**
 * ClickOutsideListener
 *
 * Usage:
 * <ClickOutsideListener onClickOutside={handleClose}>
 *   <div> ... </div>
 * </ClickOutsideListener>
 *
 * Calls onClickOutside when a click occurs outside the child element.
 */
export default function ClickOutsideListener({ children, onClickOutside }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClick(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onClickOutside?.(event);
      }
    }

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, [onClickOutside]);

  return <div ref={wrapperRef}>{children}</div>;
}
