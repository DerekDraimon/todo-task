import React from "react";
import styles from "./SelectList.module.css";

type SelectListProps<T extends string> = {
  label: string;
  name: string;
  value: T;
  options: T[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  disabled?: boolean;
};

export const SelectList = <T extends string>({
  label,
  name,
  value,
  options,
  onChange,
  placeholder = "-- Selecciona --",
  disabled = false,
}: SelectListProps<T>) => (
  <div className={styles.fieldGroup}>
    <label htmlFor={name} className={styles.label}>
      {label}
    </label>
    <select
      id={name}
      name={name}
      className={styles.select}
      value={value}
      onChange={onChange}
      disabled={disabled}
    >
      <option value="">{placeholder}</option>
      {options.map(option => (
        <option value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);
