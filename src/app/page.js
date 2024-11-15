import Image from 'next/image';
import Link from 'next/link';
import { auth, currentUser } from '@clerk/nextjs/server';
import QgisMapIframe from './components/QgisMapIframe';
import { redirect } from 'next/navigation';
import DynamicHeader from './components/DynamicHeader';
import Footer from './components/Footer';

export default async function Home() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect('/login');
  }

  const user = await currentUser();

  return (
    <div className="flex flex-col min-h-screen">
      <DynamicHeader />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="space-y-8 p-8">
          <section className="bg-white rounded-lg shadow-xl p-8 transition duration-300 ease-in-out hover:shadow-2xl">
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Bienvenue sur Noire de Thibar, {user.firstName}
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Découvrez la race ovine Noire de Thibar, un trésor tunisien unique et précieux. Reconnue pour sa robustesse et sa qualité de viande exceptionnelle, cette race est au cœur de notre patrimoine agricole.
            </p>
            <QgisMapIframe />
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-lg shadow-md p-6 transition duration-300 ease-in-out hover:shadow-xl">
              <h3 className="text-xl font-semibold text-green-700 mb-3">Caractéristiques Uniques</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Robe entièrement noire</li>
                <li>Adaptée aux terrains accidentés</li>
                <li>Résistante aux maladies locales</li>
                <li>Excellente qualité de viande</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg shadow-md p-6 transition duration-300 ease-in-out hover:shadow-xl">
              <h3 className="text-xl font-semibold text-green-700 mb-3">Zones d&apos;élevage</h3>
              <p className="text-gray-700">
                Les régions d&apos;élevage de la race NT s&apos;étendent sur neuf gouvernorats dans le nord de la Tunisie, couvrant une impressionnante superficie de 16,65% du territoire national. Cette distribution géographique témoigne de l&apos;importance et de l&apos;adaptabilité de cette race exceptionnelle.
              </p>
              <div className="mt-6">
                <Link
                  href="/zones-elevage"
                  className="inline-block px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300 ease-in-out text-sm font-medium"
                >
                  Découvrir les zones d&apos;élevage
                </Link>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-xl p-8 transition duration-300 ease-in-out hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">Navigation</h3>
            <nav>
              <ul className="flex flex-wrap justify-center space-x-4">
                {[
                  { name: 'Accueil', href: '/' },
                  { name: 'Description', href: '/description' },
                  { name: "Zones d&apos;élevage", href: '/zones-elevage' },
                  { name: 'Circuit écotouristique', href: '/circuit-eco' },
                  { name: 'Circuit valorisation viande', href: '/circuit-valorisation' },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="inline-block px-4 py-2  rounded-full bg-green-600 hover:bg-green-700 text-white transition duration-300 ease-in-out text-sm font-medium"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
