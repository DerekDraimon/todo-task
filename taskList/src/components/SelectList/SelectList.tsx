import React from "react";
import styles from "./SelectList.module.css";

export const SelectList = ({
  label,
  name,
  value,
  options,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) => (
  <div className={styles.fieldGroup}>
    <label className={styles.label}>{label}</label>
    <select
      className={styles.select}
      name={name}
      value={value}
      onChange={onChange}
    >
      <option value="">-- Selecciona --</option>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);