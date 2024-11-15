import Image from 'next/image';

export default function ZonesElevage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Zones d&apos;élevage</h1>
      <div className="bg-white rounded-lg shadow-xl p-8">
        <p className="text-lg text-gray-700 mb-6">
          Les régions d&apos;élevage de la race NT couvrent neuf gouvernorats représentant 16,65% du territoire national. Ces zones,
          situées dans le nord de la Tunisie, comprennent Bizerte, Ariana, Manouba, Nabeul, Zaghouan, Béja, El Kef, Jendouba et Siliana.
        </p>
        <div className="relative h-96 rounded-lg overflow-hidden">
          <Image
            src="/images/Zones NT.png"
            alt="Carte des zones d&apos;élevage"
            layout="fill"
            objectFit="contain"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}
