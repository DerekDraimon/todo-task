import React from "react";
import styles from "./ImputTextArea.module.css";

export const TextArea = ({
  label,
  value,
  onChange,
  name,
  placeholder,
}: {
  label: string;
  value: string;
  name: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => (
  <div className={styles.fieldGroup}>
    <label className={styles.label}>{label}</label>
    <textarea
      className={styles.textarea}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    ></textarea>
  </div>
);