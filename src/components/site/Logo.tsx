import { Link } from "react-router-dom";
import logoDark from "@/assets/logo1.png";
import logoLight from "@/assets/logolight.png";

export const Logo = ({ className = "" }: { className?: string }) => (
  <Link
    to="/"
    className={`inline-flex items-center ${className}`}
    aria-label="HelioGate Investment Group"
  >
    <img src={logoDark} alt="HelioGate IG" className="h-7 w-auto object-contain md:h-9 dark:hidden" decoding="async" />
    <img src={logoLight} alt="HelioGate IG" className="hidden h-7 w-auto object-contain md:h-9 dark:block" decoding="async" />
  </Link>
);
