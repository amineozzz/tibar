import Image from "next/image";

export default function CircuitEco() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-green-800 mb-6">Circuit écotouristique</h1>
            <div className="bg-white rounded-lg shadow-xl p-8">
                <p className="text-lg text-gray-700 mb-6">
                    Un circuit écotouristique dédié à la valorisation de la race Noire de Thibar permet de promouvoir le patrimoine agricole,
                    la gastronomie locale, et le tourisme durable. Ce circuit valorise la race NT, les pratiques d&apos;élevage traditionnelles, et
                    l&apos;identité culinaire de la région.
                </p>
                <h2 className="text-2xl font-semibold text-green-700 mb-4">Les Organismes/Emplacements à Visiter</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li className="font-bold text-lg">Abattoir mobile de Béja (projet JESMED)</li>
                    <div className="flex justify-start h-96 rounded-lg overflow-hidden mb-6">
                        <Image
                            src="/images/abatt mob.png"
                            alt="Caractéristiques de la Noire de Thibar"
                            height={384}
                            width={512}
                        />
                    </div>
                    <li className="font-bold text-lg">Lycée Agricole de Thibar : Musée dédié à la race NT</li>
                    <div className="flex justify-start h-96 rounded-lg overflow-hidden mb-6">
                        <Image
                            src="/images/Lycée Agricole Thibar.png"
                            alt="Caractéristiques de la Noire de Thibar"
                            height={384}
                            width={512}
                        />
                    </div>
                    <li className="font-bold text-lg">Ferme Torkhani : Élevage extensif et pratiques écologiques</li>
                    <div className="flex justify-start h-96 rounded-lg overflow-hidden mb-6">
                        <Image
                            src="/images/Ferme.png"
                            alt="Caractéristiques de la Noire de Thibar"
                            height={384}
                            width={512}
                        />
                    </div>
                    <li className="font-bold text-lg">Ferme Belle Vue : Dégustation de plats traditionnels</li>
                    <div className="flex justify-start h-96 rounded-lg overflow-hidden mb-6">
                        <Image
                            src="/images/Ferme-Belle-vue-Beja-.jpg"
                            alt="Caractéristiques de la Noire de Thibar"
                            height={384}
                            width={512}
                        />
                    </div>
                    <li className="font-bold text-lg">Borj Lella : Table d&apos;hôte servant des fromages au lait de brebis</li>
                    <div className="flex justify-start h-96 rounded-lg overflow-hidden mb-6">
                        <Image
                            src="/images/Borj lella.png"
                            alt="Caractéristiques de la Noire de Thibar"
                            height={384}
                            width={512}
                        />
                    </div>
                    <li className="font-bold text-lg">Domaine Ben Ismail à Toukaber : Dégustation de viande NT et d&apos;huiles locales</li>
                    <div className="flex justify-start h-96 rounded-lg overflow-hidden mb-6">
                        <Image
                            src="/images/Ben-Ismail-Farm.jpg"
                            alt="Caractéristiques de la Noire de Thibar"
                            height={384}
                            width={512}
                        />
                    </div>
                    <li className="font-bold text-lg">Chaouach : Tourisme durable et gestion des écosystèmes pastoraux</li>
                    <div className="flex justify-start h-96 rounded-lg overflow-hidden mb-6">
                        <Image
                            src="/images/Chouach.jpg"
                            alt="Caractéristiques de la Noire de Thibar"
                            height={384}
                            width={512}
                        />
                    </div>
                    <li className="font-bold text-lg">Montagne Zawya : Randonnées guidées dans les pâturages</li>
                    <div className="flex justify-start h-96 rounded-lg overflow-hidden mb-6">
                        <Image
                            src="/images/Montagne zawya.png"
                            alt="Caractéristiques de la Noire de Thibar"
                            height={384}
                            width={512}
                        />
                    </div>
                </ul>
            </div>
        </div>
    );
}
