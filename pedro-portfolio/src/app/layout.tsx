import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import StarField from "@/components/ui/StarField";

export const metadata: Metadata = {
  title: "Pedro Isaac — Full Stack Developer",
  description:
    "Computer Science student focused on building scalable backend systems and modern full stack applications. Seeking Backend or Full Stack Developer Internship.",
  keywords: ["Pedro Isaac", "Full Stack Developer", "React", "Next.js", "Java", "Spring Boot", "Backend Developer"],
  authors: [{ name: "Pedro Isaac" }],
  openGraph: {
    title: "Pedro Isaac — Full Stack Developer",
    description: "Computer Science student. Backend & Full Stack Developer.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <StarField />
        {children}
      </body>
    </html>
  );
}
