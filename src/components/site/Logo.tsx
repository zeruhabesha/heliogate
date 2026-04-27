import { Link } from "react-router-dom";
import logoDark from "@/assets/logo1.png";
import logoLight from "@/assets/logolight.png";

export const Logo = ({ className = "" }: { className?: string }) => (
  <Link
    to="/"
    className={`inline-flex min-w-0 items-center ${className}`}
    aria-label="HelioGate Investment Group"
  >
    <img src={logoDark} alt="HelioGate IG" className="h-6 w-auto max-w-[220px] object-contain sm:h-7 md:h-9 md:max-w-none dark:hidden" decoding="async" />
    <img src={logoLight} alt="HelioGate IG" className="hidden h-6 w-auto max-w-[220px] object-contain sm:h-7 md:h-9 md:max-w-none dark:block" decoding="async" />
  </Link>
);
