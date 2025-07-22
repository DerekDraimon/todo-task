import React from "react";
import styles from "./ImputText.module.css";

interface Props {
  label: string;
  value: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  error?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = ({
  label,
  value,
  name,
  placeholder,
  required = false,
  error = false,
  onChange,
}: Props) => (
  <div className={styles.fieldGroup}>
    <label className={styles.label}>
      {label} {required && <span className={styles.required}>*</span>}
    </label>
    <input
      className={`${styles.input} ${error ? styles.error : ""}`}
      type="text"
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
    {error && <p className={styles.errorMessage}>Este campo es obligatorio</p>}
  </div>
);
