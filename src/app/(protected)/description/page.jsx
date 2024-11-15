import Image from 'next/image';

export default function Description() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Description de la race Noire de Thibar</h1>
      <div className="bg-white rounded-lg shadow-xl p-8">
        <p className="text-lg text-gray-700 mb-6">
          La race Noire de Thibar est une race ovine tunisienne créée localement, essentiellement pour faire face aux problèmes
          d&apos;intoxication liés à l&apos;ingestion d&apos;une plante spontanée très répandue dans la Tunisie septentrionale appelée le millepertuis
          (Hyparicum perforatum) ou EL Hamra, nom couramment utilisé par les agriculteurs.
        </p>
        <div className="flex justify-center h-96 rounded-lg overflow-hidden mb-6">
          <Image
            src="/images/thibar-moutons.jpg"
            alt="Caractéristiques de la Noire de Thibar"
            height={384}
            width={512}
          />
        </div>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Caractéristiques Phénotypiques</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li className="font-bold text-lg">Coloration de la toison : robe entièrement noire, sauf la tête, la gorge, la face interne de la queue et le périnée.</li>
          <li className="font-bold text-lg">Tête : allongée, avec un front plein, subconcave, sans cornes.</li>
          <li className="font-bold text-lg">Oreilles : minces, horizontales ou légèrement dressées.</li>
          <li className="font-bold text-lg">Tronc : presque cylindrique.</li>
          <li className="font-bold text-lg">Membres : fins et bien développés, adaptés aux terrains accidentés.</li>
          <li className="font-bold text-lg">Poids moyen à la naissance : 3,4 kg.</li>
          <li className="font-bold text-lg">Poids vif adulte : Mâles de 70 à 75 kg, Femelles de 50 à 60 kg.</li>
          <li className="font-bold text-lg">Rendement en carcasse : de 43 à 50 %.</li>
        </ul>
      </div>
    </div>
  );
}
