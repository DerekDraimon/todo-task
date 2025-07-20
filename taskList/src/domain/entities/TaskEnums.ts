export const Priority = {
  HIGH: "Alta",
  MEDIUM: "Media",
  LOW: "Baja"
} as const;

export type Priority = typeof Priority[keyof typeof Priority];

export const Category = {
  WORK: "Trabajo",
  PERSONAL: "Personal",
  STUDY: "Estudio"
} as const;

export type Category = typeof Category[keyof typeof Category];

export const Status = {
  PENDING: "Pendiente",
  COMPLETED: "Completada"
} as const;

export type Status = typeof Status[keyof typeof Status];
