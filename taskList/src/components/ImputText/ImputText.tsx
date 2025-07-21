import React from "react";
import styles from "./ImputText.module.css";

export const TextInput = ({
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
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className={styles.fieldGroup}>
    <label className={styles.label}>{label}</label>
    <input
      className={styles.input}
      type="text"
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);