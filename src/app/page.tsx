import FAQ from "@/components/FAQ";
import SkillsList from "@/components/SkillsList";


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <FAQ />
      <SkillsList />

    </main>
  );
}
