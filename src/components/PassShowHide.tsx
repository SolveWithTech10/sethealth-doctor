import { Eye, EyeOff } from "lucide-react";
import React from "react";

type PassShowHideProptype = {
  onClick: () => void;
  isShowing: boolean;
};
const PassShowHide = ({ onClick, isShowing }: PassShowHideProptype) => {
  return (
    <button
    type="button"
      className="absolute right-2 top-1/2 -translate-y-1/2"
      onClick={onClick}
    >
      {isShowing ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
    </button>
  );
};

export default PassShowHide;
