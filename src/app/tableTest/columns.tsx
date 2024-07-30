"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Report = {
  hour: string
  code: string
  location: "En tienda" | "Fuera de Tienda"
  anotation: string
  operator: string
}

export type LastReport = {
  hour: string
  code: string
  location: "En tienda" | "Fuera de Tienda"
  anotation: string
  operator: string
}

export const columnsReport: ColumnDef<Report>[] = [
  {
    accessorKey: "hour",
    header: "Hora",
  },
  {
    accessorKey: "code",
    header: "Código",
  },
  {
    accessorKey: "location",
    header: "Ubicación",
  },
  {
    accessorKey: "anotation",
    header: "Anotación",
  },
  {
    accessorKey: "operator",
    header: "Operador",
  },
]

export const columnsLastReport: ColumnDef<Report>[] = [
  {
    accessorKey: "hour",
    header: "Hora",
  },
  {
    accessorKey: "code",
    header: "Código",
  },
  {
    accessorKey: "location",
    header: "Ubicación Actual",
  },
  {
    accessorKey: "anotation",
    header: "Anotación",
  },
  {
    accessorKey: "operator",
    header: "Operador",
  },
]