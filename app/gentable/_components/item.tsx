import { Id } from "@/convex/_generated/dataModel";
import { LucideIcon } from "lucide-react";

interface ItemProps {
  id?: Id<"documents">;
  documentIcon?: string;
  active?: boolean;
  expanded?: boolean;
  isSearch?: boolean;
  level?: number;
  onExpand?: () => void;
  label: string;
  onClick: () => void;
  icon?: LucideIcon;
}

const Item = ({
  label,
  onClick,
  icon,
  active,
  documentIcon,
  isSearch,
  level = 0,
  onExpand,
  expanded,
}: ItemProps) => {
  const itemStyle = `
    flex items-center p-2 cursor-pointer
    ${active ? "bg-white-500 text-white" : "bg-transparent text-gray-200"} 
    ${expanded ? "font-bold" : ""} 
    hover:bg-blue-100
    ${"pl-" + level * 2}
  `;

  return (
    <div className={itemStyle} onClick={onClick}>
      {label}
    </div>
  );
};

export default Item;
