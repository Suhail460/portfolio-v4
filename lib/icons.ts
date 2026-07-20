import {
  Brain,
  Rocket,
  Layers,
  BarChart2,
  Users,
  TrendingUp,
  Compass,
  Map,
  FlaskConical,
  LineChart,
  Sparkles,
  Handshake,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Brain,
  Rocket,
  Layers,
  BarChart2,
  Users,
  TrendingUp,
  Compass,
  Map,
  FlaskConical,
  LineChart,
  Sparkles,
  Handshake,
  Workflow,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Brain;
}
