export default function CircuitEco() {
    return (
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-green-800 mb-6">Circuit écotouristique</h1>
        <div className="bg-white rounded-lg shadow-xl p-8">
          <p className="text-lg text-gray-700 mb-6">
            Un circuit écotouristique dédié à la valorisation de la race Noire de Thibar permet de promouvoir le patrimoine agricole,
            la gastronomie locale, et le tourisme durable. Ce circuit valorise la race NT, les pratiques d'élevage traditionnelles, et
            l'identité culinaire de la région.
          </p>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Étapes du circuit</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Abattoir mobile de Béja (projet JESMED)</li>
            <li>Lycée Agricole de Thibar : Musée dédié à la race NT</li>
            <li>Ferme Torkhani : Élevage extensif et pratiques écologiques</li>
            <li>Ferme Belle Vue : Dégustation de plats traditionnels</li>
            <li>Borj Lella : Table d'hôte servant des fromages au lait de brebis</li>
            <li>Domaine Ben Ismail à Toukaber : Dégustation de viande NT et d'huiles locales</li>
            <li>Chaouach : Tourisme durable et gestion des écosystèmes pastoraux</li>
            <li>Montagne Zawya : Randonnées guidées dans les pâturages</li>
          </ul>
        </div>
      </div>
    )
  }