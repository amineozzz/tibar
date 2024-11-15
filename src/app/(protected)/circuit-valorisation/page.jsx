import Image from 'next/image'

export default function CircuitValorisation() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Circuit de valorisation de la viande</h1>
      <div className="bg-white rounded-lg shadow-xl p-8">
        <p className="text-lg text-gray-700 mb-6">
          Ce circuit valorise la viande de la race NT à travers des organismes spécialisés, notamment des abattoirs et des sociétés
          de transformation et de distribution.
        </p>
        <div className="relative h-96 rounded-lg overflow-hidden mb-6">
          <Image
            src="/images/noire de thibar.png"
            alt="Carte de valorisation de la viande NT"
            layout="fill"
            objectFit="contain"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Organismes impliqués</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li className='font-bold text-lg'>Abattoir mobile à Béja</li>
          <div className="flex  justify-start h-96 rounded-lg overflow-hidden mb-6 ">
          <Image
            src="/images/abattoir mobile jesmed.png"
            alt="Caractéristiques de la Noire de Thibar"
            height={384}
            width={512}
          />
        </div>
          <li className='font-bold text-lg'>Société Laabidi des viandes</li>
          <div className="flex  justify-start h-96 rounded-lg overflow-hidden mb-6 ">
          <Image
            src="/images/usine-Labidi-Viandes.webp"
            alt="Caractéristiques de la Noire de Thibar"
            height={384}
            width={512}
          />
        </div>
          <li className='font-bold text-lg'>Société Farah</li>
          <div className="flex  justify-start h-96 rounded-lg overflow-hidden mb-6 ">
          <Image
            src="/images/Société Farah.png"
            alt="Caractéristiques de la Noire de Thibar"
            height={384}
            width={512}
          />
        </div>
          <li className='font-bold text-lg'>Institut national de la normalisation et la propriété industrielle (INNORPI)</li>
          <div className="flex  justify-start h-96 rounded-lg overflow-hidden mb-6 ">
          <Image
            src="/images/OIP.jpg"
            alt="Caractéristiques de la Noire de Thibar"
            height={384}
            width={512}
          />
        </div>
          <li className='font-bold text-lg'>Direction Générale de la Production Agricole (DGPA)</li>
          <div className="flex  justify-start h-96 rounded-lg overflow-hidden mb-6 ">
          <Image
            src="/images/ministère agriculture.jpg"
            alt="Caractéristiques de la Noire de Thibar"
            height={384}
            width={512}
          />
        </div>
          <li className='font-bold text-lg'>Groupement Interprofessionnel des Viandes Rouges et du Lait (GIVLait)</li>
       
        </ul>
      </div>
    </div>
  )
}