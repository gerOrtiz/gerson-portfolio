import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

export default function Home() {
	return (
		<main className="min-h-screen flex flex-col gap-10 px-6 lg:px-4 py-10 lg:py-20">
			<Hero />

			<Projects />

			<Experience />
			
			<Contact />
		</main>
	);
}

// export async function generateMetadata({
//   params: { locale }
// }: {
//   params: { locale: string }
// }) {
//   const t = await getTranslations({ locale, namespace: 'metadata' });
  
//   return {
//     title: t('title'),
//     description: t('description'),
//   };
// }
