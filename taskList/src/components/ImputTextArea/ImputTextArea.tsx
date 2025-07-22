import React from "react";
import styles from "./ImputTextArea.module.css";

export const TextArea = ({
  label,
  value,
  onChange,
  name,
  placeholder,
  error = false,
  required = false,
}: {
  label: string;
  value: string;
  name: string;
  placeholder?: string;
  error?: boolean;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => (
  <div className={styles.fieldGroup}>
    <label className={styles.label}>
      {label} {required && <span className={styles.required}>*</span>}
    </label>
    <textarea
      className={`${styles.textarea} ${error ? styles.error : ""}`}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
    />
    {error && <span className={styles.errorMessage}>Este campo es requerido</span>}
  </div>
);
