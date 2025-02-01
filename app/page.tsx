import { Redirect } from "@/redirect";
import LandingPage from "./_components/landing-page";

export default function Home() {
  return (
    <div>
      <Redirect />
      <LandingPage />
    </div>
  );
}
