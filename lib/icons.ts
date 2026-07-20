import {
  Brain,
  Rocket,
  Layers,
  BarChart2,
  Users,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Brain,
  Rocket,
  Layers,
  BarChart2,
  Users,
  TrendingUp,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Brain;
}
