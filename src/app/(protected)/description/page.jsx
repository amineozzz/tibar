import Image from 'next/image'

export default function Description() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Description de la race Noire de Thibar</h1>
      <div className="bg-white rounded-lg shadow-xl p-8">
        <p className="text-lg text-gray-700 mb-6">
          La race Noire de Thibar est une race ovine tunisienne créée localement, essentiellement pour faire face aux problèmes
          d'intoxication liés à l'ingestion d'une plante spontanée très répandue dans la Tunisie septentrionale appelée le millepertuis
          (Hyparicum perforatum) ou EL Hamra, nom couramment utilisé par les agriculteurs.
        </p>
        <div className="relative h-96 rounded-lg overflow-hidden mb-6">
          <Image
            src="/images/noire de thibar.png"
            alt="Caractéristiques de la Noire de Thibar"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Caractéristiques Phénotypiques</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Coloration de la toison : robe entièrement noire, sauf la tête, la gorge, la face interne de la queue et le périnée.</li>
          <li>Tête : allongée, avec un front plein, subconcave, sans cornes.</li>
          <li>Oreilles : minces, horizontales ou légèrement dressées.</li>
          <li>Tronc : presque cylindrique.</li>
          <li>Membres : fins et bien développés, adaptés aux terrains accidentés.</li>
          <li>Poids moyen à la naissance : 3,4 kg.</li>
          <li>Poids vif adulte : Mâles de 70 à 75 kg, Femelles de 50 à 60 kg.</li>
          <li>Rendement en carcasse : de 43 à 50 %.</li>
        </ul>
      </div>
    </div>
  )
}