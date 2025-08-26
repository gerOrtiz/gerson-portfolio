import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

export default function Home() {
	return (
		<main className="min-h-screen flex flex-col gap-10 px-6 lg:px-4 py-10 lg:py-20">
			<Hero />

			<Projects />

			{/* Experience Section */}
			<section id="about" className="min-h-screen">
				<h2>Experience Section</h2>
			</section>

			{/* Contact Section - Will have React Hook Form */}
			<section id="contact" className="min-h-screen">
				<h1>Contact Section</h1>
			</section>
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
