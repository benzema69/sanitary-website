
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { TARGET_LOCATIONS, SERVICE_SLUGS } from '../data/zones';
import { Phone, MapPin, Clock, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_HREF } from '../data';
import NotFound from './NotFound';

const LocationPage: React.FC = () => {
    const { serviceSlug, citySlug } = useParams<{ serviceSlug: string; citySlug: string }>();

    const city = TARGET_LOCATIONS.find(l => l.slug === citySlug);
    const service = SERVICE_SLUGS.find(s => s.slug === serviceSlug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [citySlug, serviceSlug]);

    if (!city || !service) {
        return <NotFound />;
    }

    // Dynamic Content Generation based on City Type and Distance
    const isNearby = parseInt(city.travelTime) < 15;
    const locationTypeLabel = city.type === 'ville' ? 'la ville de' : 'le village de';

    const pageTitle = `${service.title} à ${city.name} (${city.zip}) | Intervention ${city.travelTime}`;
    const metaDesc = `Besoin d'un ${service.title.toLowerCase()} à ${city.name} ? Chappuis Sanitaire intervient en ${city.travelTime} pour tout dépannage ou rénovation. Artisan local recommandé à ${city.zip}.`;

    return (
        <div className="bg-slate-50 min-h-screen font-sans text-slate-900 pt-20">
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={metaDesc} />
                <link rel="canonical" href={`https://chappuis-sanitaire.ch/${serviceSlug}/${citySlug}`} />
            </Helmet>

            {/* HERO LOCAL */}
            <section className="relative bg-slate-900 text-white py-20 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
                <div className="container mx-auto max-w-4xl relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-500/30 px-4 py-1.5 rounded-full text-cyan-300 text-sm font-semibold mb-6">
                        <MapPin className="w-4 h-4" />
                        <span>Intervention à {city.name} ({city.zip})</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        {service.title} à <span className="text-cyan-400">{city.name}</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Chappuis Sanitaire Sàrl est votre expert local. Nous intervenons régulièrement dans {locationTypeLabel} <strong className="text-white">{city.name}</strong>.
                        <br />
                        <span className="text-cyan-400 font-semibold">{city.travelTime} de trajet</span> depuis notre atelier.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-3 bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-cyan-500/25">
                            <Phone className="w-5 h-5" />
                            Appeler le {PHONE_DISPLAY}
                        </a>
                        <Link to="/#projets" className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all backdrop-blur-sm">
                            Demander un devis
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* LOCAL TRUST SIGNALS */}
            <section className="py-12 bg-white border-b border-slate-100">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl">
                            <div className="bg-cyan-100 p-3 rounded-xl text-cyan-700">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Rapidité à {city.name}</h3>
                                <p className="text-slate-600 text-sm">
                                    Basés à Rolle, nous sommes à seulement <strong>{city.travelTime}</strong> de chez vous.
                                    {isNearby && " C'est notre zone d'intervention prioritaire."}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl">
                            <div className="bg-cyan-100 p-3 rounded-xl text-cyan-700">
                                <CheckCircle className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Expertise Locale</h3>
                                <p className="text-slate-600 text-sm">
                                    Nous connaissons bien les installations de la région {city.region === 'center' ? 'de La Côte' : city.region === 'north' ? 'du Pied du Jura' : 'Vaudoise'}.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl">
                            <div className="bg-cyan-100 p-3 rounded-xl text-cyan-700">
                                <Star className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Qualité Suisse</h3>
                                <p className="text-slate-600 text-sm">
                                    Artisan diplômé travaillant avec les meilleures marques (Laufen, Geberit) pour vos projets à {city.name}.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEO CONTENT BLOCK */}
            <section className="py-16 px-6">
                <div className="container mx-auto max-w-3xl prose prose-slate prose-lg">
                    <h2>Pourquoi choisir Chappuis Sanitaire pour vos travaux à {city.name} ?</h2>
                    <p>
                        Depuis 2004, Chappuis Sanitaire Sàrl s'est imposé comme une référence en matière de plomberie et d'installations sanitaires sur La Côte.
                        Notre proximité avec <strong>{city.name} ({city.zip})</strong> nous permet d'offrir une réactivité exemplaire pour tous types de besoins :
                    </p>
                    <ul>
                        <li><strong>Dépannage d'urgence :</strong> Fuite d'eau, wc bouché ou panne de boiler à {city.name}.</li>
                        <li><strong>Rénovation :</strong> Transformation complète de salle de bain clé en main.</li>
                        <li><strong>Entretien :</strong> Détartrage de chauffe-eau et adoucisseurs pour lutter contre le calcaire, très présent dans la région de {city.region}.</li>
                    </ul>
                    <p>
                        Que vous habitiez au centre de {city.name} ou dans les environs, nous nous déplaçons rapidement avec un camion atelier entièrement équipé.
                    </p>

                    <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 my-8 rounded-r-xl not-prose">
                        <h4 className="font-bold text-cyan-900 mb-2">Note importante pour les résidents de {city.name}</h4>
                        <p className="text-cyan-800 text-sm">
                            Nous garantissons un tarif transparent et un travail soigné. Pas de sous-traitance, c'est Monsieur Chappuis qui intervient chez vous.
                        </p>
                    </div>

                    <h3>Nos services disponibles à {city.name}</h3>
                    <p>
                        Nous couvrons l'intégralité du spectre sanitaire pour les villas et appartements de {city.name}.
                        Installation de colonnes de lavage, raccordement de cuisine, pose de robinetterie extérieure ou remplacement de conduites en fonte.
                    </p>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="py-20 bg-slate-900 text-center px-6">
                <div className="container mx-auto max-w-2xl">
                    <h2 className="text-3xl font-bold text-white mb-6">Prêt à lancer vos travaux à {city.name} ?</h2>
                    <p className="text-slate-400 mb-10 text-lg">
                        Devis gratuit et sans engagement. Réponse rapide assurée.
                    </p>
                    <Link to="/#projets" className="inline-block bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-4 px-10 rounded-full transition-transform active:scale-95 shadow-xl hover:shadow-cyan-500/30">
                        Contacter Chappuis Sanitaire
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default LocationPage;
