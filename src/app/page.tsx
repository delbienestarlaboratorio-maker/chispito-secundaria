// Root page for chispito-secundaria micro-frontend
// Redirects to secundaria-1 as the default grade
import { redirect } from "next/navigation";

export default function RootPage() {
    redirect("/secundaria-1");
}
