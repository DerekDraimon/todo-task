import React from "react";
import styles from "./ImputDate.module.css";

export const DateInput = ({
  label,
  name,
  value,
  onChange,
  error = false,
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  error?: boolean;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className={styles.fieldGroup}>
    <label className={styles.label}>
      {label} {required && <span className={styles.required}>*</span>}
    </label>
    <input
      className={`${styles.date} ${error ? styles.error : ""}`}
      type="date"
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
    {error && <span className={styles.errorMessage}>Este campo es requerido</span>}
  </div>
);
