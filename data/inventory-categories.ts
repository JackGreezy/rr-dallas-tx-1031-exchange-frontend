import type { InventoryCategory } from "./types";

export const inventoryCategories: InventoryCategory[] = [
  {
    slug: "multifamily",
    name: "Multifamily Properties",
    route: "/inventory/multifamily",
    note: "Stabilized and value-add multifamily communities nationwide.",
  },
  {
    slug: "office",
    name: "Office Properties",
    route: "/inventory/office",
    note: "Class A, B, and C office buildings and business parks.",
  },
  {
    slug: "retail",
    name: "Retail Properties",
    route: "/inventory/retail",
    note: "Single tenant net lease and multi tenant retail centers.",
  },
  {
    slug: "industrial",
    name: "Industrial Properties",
    route: "/inventory/industrial",
    note: "Warehouse, distribution, and manufacturing facilities.",
  },
  {
    slug: "land",
    name: "Land and Development Sites",
    route: "/inventory/land",
    note: "Raw land and entitled development parcels.",
  },
  {
    slug: "mixed-use",
    name: "Mixed Use Properties",
    route: "/inventory/mixed-use",
    note: "Combined residential, commercial, and retail developments.",
  },
  {
    slug: "dst",
    name: "DST Opportunities",
    route: "/inventory/dst",
    note: "DST or TIC may be securities. We do not sell securities. We provide introductions to licensed providers only.",
  },
];

