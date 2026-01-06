"use client";

import React, { useRef, useState, useEffect, useCallback, forwardRef, FormEvent } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "..";
import { FormProps } from "./types";

const layouts = {
  col: "flex-col",
  row: "flex-row flex-wrap",
} as const;

const actionsLayouts = {
  row: "flex-row justify-end",
  "row-reverse": "flex-row flex-row-reverse justify-end",
  col: "flex-col",
  "col-reverse": "flex-col flex-col-reverse",
} as const;

const Form = forwardRef<HTMLFormElement, FormProps>(
  (
    {
      className = "",
      style,
      name = "form",
      onFormSubmit,
      onCancel,
      layout = "col",
      showCancel = false,
      actions = true,
      children,
      submitLabel = "Submit",
      cancelLabel = "Cancel",
      actionsLayout = "row",
      actionsSpacing = "4",
      submitBackground = "primary",
      submitColor = "light",
      cancelBackground = "transparent",
      cancelColor = "current",
      submitOutline = false,
      submitOutlineColor = "current",
      cancelOutline = false,
      cancelOutlineColor = "current",
      buttonSize = "md",
      buttonTextcase = "normal-case",
      buttonShape = "default",
      buttonIsBold = false,
      separator = false,
    },
    ref
  ) => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isValid, setIsValid] = useState(false);

    const setFormRef = useCallback(
      (node: HTMLFormElement | null) => {
        formRef.current = node;

        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          (ref as React.MutableRefObject<HTMLFormElement | null>).current = node;
        }
      },
      [ref]
    );

    const validateForm = useCallback(() => {
      if (formRef.current) {
        setIsValid(formRef.current.checkValidity());
      }
    }, []);

    useEffect(() => {
      const form = formRef.current;
      if (!form) return;

      const events: (keyof HTMLElementEventMap)[] = ["input", "change", "blur", "keyup"];

      const handler = () => validateForm();

      events.forEach((event) => form.addEventListener(event, handler));

      // Initial validation
      validateForm();

      return () => {
        events.forEach((event) => form.removeEventListener(event, handler));
      };
    }, [validateForm]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const form = formRef.current;
      if (!form || !form.checkValidity()) {
        setIsValid(false);
        return;
      }

      const formData = new FormData(form);

      if (onFormSubmit) {
        onFormSubmit(formData);
      }
    };

    const handleCancel = () => {
      onCancel?.();
    };

    const layoutClasses = layouts[layout];

    return (
      <form
        ref={setFormRef}
        name={name}
        id={name}
        className={twMerge("flex", layoutClasses, "gap-8", className)}
        style={style}
        onSubmit={handleSubmit}
        noValidate
      >
        {children}

        {actions && (
          <>
            {separator && <hr className="col-span-full border-t border-neutral opacity-70" />}

            <div
              className={twMerge("flex", `gap-${actionsSpacing}`, actionsLayouts[actionsLayout])}
            >
              {showCancel && (
                <Button
                  type="button"
                  onClick={handleCancel}
                  btnBackground={cancelBackground}
                  btnColor={cancelColor}
                  outline={cancelOutline}
                  outlineColor={cancelOutlineColor}
                  size={buttonSize}
                  textcase={buttonTextcase}
                  layout={buttonShape}
                  isBold={buttonIsBold}
                  className="flex-grow"
                >
                  {cancelLabel}
                </Button>
              )}

              <Button
                type="submit"
                disabled={!isValid}
                btnBackground={submitBackground}
                btnColor={submitColor}
                outline={submitOutline}
                outlineColor={submitOutlineColor}
                size={buttonSize}
                textcase={buttonTextcase}
                layout={buttonShape}
                isBold={buttonIsBold}
                className="flex-grow"
              >
                {submitLabel}
              </Button>
            </div>
          </>
        )}
      </form>
    );
  }
);

Form.displayName = "Form";

export default Form;
