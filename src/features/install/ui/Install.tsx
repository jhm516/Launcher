import { RootState } from "@/app/store";
import { Button } from "@/shared/ui/button";
import { Loader2 } from "lucide-react";
import { useSelector } from "react-redux";

export default function Install() {
  const launcher = useSelector((state: RootState) => state.launcher);

  return (
    <Button
      className="w-44 font-paragraph font-bold bg-yellow-300 hover:bg-yellow-400"
      onClick={() => console.log("There is function for handling installation")}
    >
      {launcher ? (
        <span className="flex flex-row items-center">
          <Loader2 className="animate-spin mr-2" />
          Installing...
        </span>
      ) : (
        "Install"
      )}
    </Button>
  );
}
