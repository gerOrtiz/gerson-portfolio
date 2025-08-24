import Hero from "@/components/sections/Hero";

export default function Home() {
	return (
		<main >
			<Hero />
			{/* About Section */}
			<section id="about" className="min-h-screen">
				<h2>About Section</h2>
			</section>

			{/* Services Section */}
			<section id="services" className="min-h-screen">
				<h2>Services Section</h2>
			</section>

			{/* Projects Section - Will be card-based, expandable */}
			<section id="projects" className="min-h-screen">
				<h1>Projects Section</h1>
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
