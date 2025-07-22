import React from "react";
import styles from "./ImputDate.module.css";

export const DateInput = ({
  label,
  name,
  value,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className={styles.fieldGroup}>
    <label className={styles.label}>{label}</label>
    <input
      className={styles.date}
      type="date"
      name={name}
      value={value}
      onChange={onChange}
    />
  </div>
);
