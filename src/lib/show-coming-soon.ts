import { createElement } from "react";
import { Info } from "lucide-react";
import { toast } from "sonner";

export function showComingSoon() {
  toast.info("Coming soon", {
    icon: createElement(Info, {
      color: "#1a5780",
      size: 22,
      strokeWidth: 2.5,
    }),
    style: {
      background: "#e0f2fe",
      color: "#0b283b",
      fontSize: "20px",
      fontWeight: 600,
      padding: "20px 24px",
    },
  });
}
