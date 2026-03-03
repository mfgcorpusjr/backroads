import { LucideTextAlignJustify } from "lucide-react";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import PageLinks from "@/components/header/PageLinks";
import SocialLinks from "@/components/header/SocialLinks";

export default function MobileMenu() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <LucideTextAlignJustify />
        </SheetTrigger>

        <SheetContent className="p-8">
          <SheetHeader>
            <SheetTitle />

            <SheetDescription />
          </SheetHeader>

          <div className="space-y-16">
            <PageLinks className="flex flex-col items-center gap-8" />

            <SocialLinks className="flex justify-center items-center gap-4" />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
