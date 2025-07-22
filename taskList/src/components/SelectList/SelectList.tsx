import React from "react";
import styles from "./SelectList.module.css";

export const SelectList = ({
  label,
  name,
  value,
  options,
  onChange,
  required = false,
  error = false,
}: {
  label: string;
  name: string;
  value: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  error?: boolean;
}) => (
  <div className={styles.fieldGroup}>
    <label className={styles.label}>
      {label} {required && <span className={styles.required}>*</span>}
    </label>
    <select
      className={`${styles.select} ${error ? styles.error : ""}`}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    >
      <option value="">-- Selecciona --</option>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    {error && <span className={styles.errorMessage}>Este campo es requerido</span>}
  </div>
);
