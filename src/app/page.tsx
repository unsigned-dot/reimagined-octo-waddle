"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import { useToast } from "@/hooks/use-toast";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Particles from "@/components/Particles";
export default function Home() {
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const services = [
    {
      name: "Planification Stratégique",
      description:
        "Développez des stratégies complètes pour atteindre vos objectifs commerciaux.",
      img: "/assets/business.jpg",
    },
    {
      name: "Analyse Financière",
      description:
        "Évaluations financières approfondies pour optimiser la performance de votre entreprise.",
      img: "/assets/data.jpg",
    },
    {
      name: "Recherche de Marché",
      description:
        "Obtenez des informations précieuses sur votre marché cible et vos concurrents.",
      img: "/assets/dev.jpg",
    },
    {
      name: "Transformation Digitale",
      description:
        "Modernisez vos processus d’entreprise avec des technologies de pointe.",
      img: "/assets/meeting.jpg",
    },
    {
      name: "Développement du Leadership",
      description:
        "Renforcez vos leaders avec les compétences nécessaires pour réussir.",
      img: "/assets/analyse.jpeg",
    },
    {
      name: "Optimisation des Processus",
      description:
        "Rationalisez vos opérations pour une efficacité et une productivité maximales.",
      img: "/assets/support.jpeg",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Développement d'une application mobile",
      description:
        "Création d'une application mobile innovante pour améliorer l'expérience utilisateur.",
      image: "/assets/data.jpg",
      services: ["Développement mobile", "UX/UI Design", "Tests utilisateurs"],
    },
    {
      id: 2,
      title: "Refonte d'un site web e-commerce",
      description:
        "Modernisation d'un site e-commerce pour augmenter les ventes et améliorer la navigation.",
      image: "/assets/meeting.jpg",
      services: ["Web Design", "SEO", "Optimisation des performances"],
    },
    {
      id: 3,
      title: "Mise en place d'un système CRM",
      description:
        "Implémentation d'un système CRM personnalisé pour mieux gérer les relations clients.",
      image: "/assets/business.jpg",
      services: [
        "Développement de logiciels",
        "Intégration de systèmes",
        "Formation",
      ],
    },
    {
      id: 4,
      title: "Analyse de marché pour une nouvelle gamme de produits",
      description:
        "Étude de marché pour aider une entreprise à lancer une nouvelle gamme de produits.",
      image: "/assets/marchandise.jpeg",
      services: [
        "Recherche de marché",
        "Analyse de données",
        "Stratégie marketing",
      ],
    },
    {
      id: 5,
      title: "Création d'une plateforme de réservation en ligne",
      description:
        "Développement d'une plateforme de réservation intuitive pour faciliter les réservations.",
      image: "/assets/formation.jpg",
      services: ["Développement web", "UX/UI Design", "Tests et déploiement"],
    },
    {
      id: 6,
      title: "Développement d'une application mobile",
      description:
        "Création d'une application mobile innovante pour améliorer l'expérience utilisateur.",
      image: "/assets/data.jpg",
      services: ["Développement mobile", "UX/UI Design", "Tests utilisateurs"],
    },
  ];

  return (
    
    <div className="min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen bg-gray-900 flex items-center justify-center overflow-hidden px-16">
        <Particles /> {/* Ajout des particules ici */}
        <div className="relative z-10 text-center">
          <motion.h1
            className="text-6xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            LTM Consulting
          </motion.h1>
          <motion.p
            className="text-2xl mb-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Innovez. Transformez. Réussissez.
          </motion.p>
          <motion.button
            onClick={() => {
              const section = document.getElementById("notre-histoire");
              if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition duration-300 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Commencez la digitalisation
          </motion.button>
        </div>
      </section>
      <section
        className="py-20 bg-white overflow-hidden px-16"
        id="notre-histoire"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              À Propos de Nous
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              variants={fadeInUp}
            >
              
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                Notre Histoire
              </h3>
              <p className="mb-6 text-gray-600 leading-relaxed">
                
                LTM Consulting a été fondée en 2018 avec la vision de
                révolutionner le conseil aux entreprises. Notre équipe d&apos;experts
                apporte des décennies d&apos;expérience dans divers secteurs, ce qui
                nous permet de fournir des idées et des stratégies inégalées à
                nos clients.
              </p>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren}
                className="space-y-4"
              >
                
                {[
                  "Innovation",
                  "Intégrité",
                  "Excellence",
                  "Approche Centrée sur le Client",
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center"
                  >
                    
                    <ArrowRight className="text-blue-600 mr-2" />
                    <span>{value}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              variants={fadeInUp}
              className="relative"
            >
              
              <Carousel
                plugins={[Autoplay({ delay: 2000 })]}
                className=" w-full"
              >
                
                <CarouselContent>
                  
                  <CarouselItem className="flex flex-col items-center justify-center p-4 md:flex-row md:p-8">
  <img
    src="/assets/thomas.png"
    alt="Homme"
    className="h-40 object-contain md:h-48 md:w-auto"
  />
  <div className="mt-4 text-center md:ml-6 md:mt-0 md:text-left">
    <h2 className="text-xl font-bold underline">
      Thomas Bodon
    </h2>
    <p className="text-sm md:text-base mt-2">
      Thomas Bodon, fondateur de LTM Consulting, a toujours cru en une approche collaborative et personnalisée pour chaque client. Sa démarche repose sur l&apos;innovation et la création de solutions sur-mesure adaptées aux besoins spécifiques de chaque entreprise. Avec un engagement inébranlable envers la qualité et le succès, Thomas et son équipe veillent à ce que chaque projet soit une réussite partagée.
    </p>
    <blockquote className="italic text-gray-700 mt-4">
    &quot;Notre plus grand accomplissement est de voir nos clients atteindre des sommets qu&apos;ils n&apos;auraient jamais imaginés.&quot;
    </blockquote>
  </div>
</CarouselItem>

<CarouselItem className="flex flex-col items-center justify-center p-4 md:flex-row md:p-8">
  <img
    src="/assets/lucas.jpg"
    alt="Homme"
    className="h-40 object-contain md:h-48 md:w-auto"
  />
  <div className="mt-4 text-center md:ml-6 md:mt-0 md:text-left">
    <h2 className="text-xl font-bold underline">
      Lucas Dupetit
    </h2>
    <p className="text-sm md:text-base mt-2">
      Lucas Dupetit, co-fondateur de LTM Consulting, est un visionnaire passionné par l&apos;innovation et la technologie. Sa philosophie repose sur l&apos;intégration des dernières avancées technologiques pour offrir à chaque client une solution moderne et pérenne. Lucas croit fermement que la réussite vient de l&apos;écoute et de la capacité à anticiper les besoins futurs des entreprises.
    </p>
    <blockquote className="italic text-gray-700 mt-4">
    &quot;L&apos;innovation n&apos;est pas une option, c&apos;est une nécessité pour les entreprises qui veulent prospérer.&quot;
    </blockquote>
  </div>
</CarouselItem>

                </CarouselContent>
              </Carousel>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-20 bg-gray-50 overflow-hidden px-16">
        
        <div className="container mx-auto px-4">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Nos Services
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-lg p-6 shadow-lg transition-all hover:shadow-xl flex flex-col items-center text-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-blue-600 mb-4">
                  <img src={service.img} alt="logo" className="h-32" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-600">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 bg-white px-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Témoignages Clients
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
  {
    "name": "Pierre Duval",
    "company": "Le Slip Français",
    "sector": "Mode et habillement",
    "rating": 5,
    "testimonial": "LTM Consulting a été un partenaire clé dans notre transformation numérique. Grâce à leur expertise, nous avons pu optimiser notre site e-commerce et renforcer notre présence en ligne. Leur équipe est très réactive et créative.",
    "img": "/assets/pierre_duval.JPG"
  },
  {
    "name": "Marie Lefèvre",
    "company": "La Belle Assiette",
    "sector": "Service de traiteur",
    "rating": 4,
    "testimonial": "Travailler avec LTM Consulting a grandement simplifié la gestion de nos événements. Leurs solutions techniques nous ont permis de mieux organiser nos chefs à domicile. Quelques ajustements ont été nécessaires, mais dans l'ensemble, le service est excellent.",
    "img": "/assets/marie_lefevre.JPG"
  },
  {
    "name": "Nicolas Bernard",
    "company": "Alan",
    "sector": "Assurance santé",
    "rating": 5,
    "testimonial": "LTM Consulting nous a aidés à renforcer nos processus internes avec des solutions innovantes. Leur accompagnement technique nous a permis de mieux structurer notre croissance tout en maintenant une expérience utilisateur fluide. Une équipe professionnelle et attentive.",
    "img": "/assets/nicolas_bernard.JPG"
  },
  {
    "name": "Camille Dubois",
    "company": "Cuvée Privée",
    "sector": "Vin et adoption de vignes",
    "rating": 5,
    "testimonial": "Grâce à LTM Consulting, nous avons modernisé notre site web et simplifié notre gestion des abonnés. Leur équipe a parfaitement compris nos besoins et a su apporter des solutions sur mesure. Nous sommes très satisfaits des résultats.",
    "img": "/assets/camille_dubois.JPG"
  },
  {
    "name": "Thomas Laurent",
    "company": "Deskopolitan",
    "sector": "Coworking",
    "rating": 4,
    "testimonial": "LTM Consulting a su s'adapter à nos demandes spécifiques et nous a aidés à améliorer la gestion de nos espaces de coworking. Il y a eu quelques défis techniques, mais l'équipe a été très proactive dans la résolution des problèmes.",
    "img": "/assets/thomas_laurent.JPG"
  }
]
.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.img}
                    alt="logo"
                    className="w-12 h-12 object-cover rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="mb-4 text-gray-700">
                &quot;{testimonial.testimonial}&quot;
                </p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Branding Section */}
      <section className="py-20 bg-gray-50 px-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Notre Marque
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              variants={fadeInUp}
            >
              <span className="font-bold md:text-6xl text-3xl">LTM Consulting©</span>
              <h3 className="text-2xl font-semibold mb-4 mt-6 text-blue-600">
                Logo
              </h3>
              <p className="mb-6 text-gray-600">
                Notre logo représente la nature dynamique et innovante de LTM
                Consulting. L&apos;efficacité et la simplicité impose les bases d&apos;une
                fondation solide. Réprésentation de la confiance que nous créons
                avec nos clients.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                Palette de Couleurs
              </h3>
              <div className="flex space-x-4 mb-6">
                <div className="w-20 h-20 bg-blue-600 rounded-lg shadow-md"></div>
                <div className="w-20 h-20 bg-gray-800 rounded-lg shadow-md"></div>
                <div className="w-20 h-20 bg-gray-50 rounded-lg shadow-md border border-gray-300"></div>
              </div>
              <p className="mb-6 text-gray-600">
                Notre palette de couleurs combine un bleu professionnel avec des
                gris élégants, représentant notre fiabilité, stabilité et
                sophistication.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                Typographie
              </h3>
              <p className="text-gray-600">
                Nous utilisons une police sans-serif moderne et épurée qui
                incarne notre approche avant-gardiste et garantit la clarté de
                nos communications.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50 flex justify-center">
        <div className="w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Nos Partenaires de confiance
            </h2>
          </motion.div>

          {/* Bordereau de Logos */}
          <motion.div
  className="overflow-hidden relative"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
  variants={fadeInUp}
>
  <div className="flex animate-scroll">
    <img src="/assets/francetech.webp" alt="Marque 1" className="h-24 mx-4" />
    <img src="/assets/Bpifrance_VI_SS_FB_RVB.png" alt="Marque 2" className="h-24 mx-4" />
    <img src="/assets/Logo_TotalEnergies.svg.png" alt="Marque 3" className="h-24 mx-4" />
    <img src="/assets/gd.png" alt="Marque 4" className="h-24 mx-4" />
    <img src="/assets/northrop.png" alt="Marque 5" className="h-24 mx-4" />
    <img src="/assets/lockheed.png" alt="Marque 6" className="h-24 mx-4" />
    <img src="/assets/dassault.svg" alt="Marque 7" className="h-24 mx-4" />
    <img src="/assets/texas_instrument.svg" alt="Marque 8" className="h-24 mx-4" />
    <img src="/assets/francetech.webp" alt="Marque 1" className="h-24 mx-4" />
  <img src="/assets/Bpifrance_VI_SS_FB_RVB.png" alt="Marque 2" className="h-24 mx-4" />
  <img src="/assets/Logo_TotalEnergies.svg.png" alt="Marque 3" className="h-24 mx-4" />
  <img src="/assets/gd.png" alt="Marque 4" className="h-24 mx-4" />
  <img src="/assets/northrop.png" alt="Marque 5" className="h-24 mx-4" />
  <img src="/assets/lockheed.png" alt="Marque 6" className="h-24 mx-4" />
  <img src="/assets/dassault.svg" alt="Marque 7" className="h-24 mx-4" />
  <img src="/assets/texas_instrument.svg" alt="Marque 8" className="h-24 mx-4" />
  </div>
</motion.div>

        </div>
      </section>
      {/* Projets Réalisés */}
      <section className="py-16 px-4 sm:px-8 md:px-16 lg:py-20 bg-white overflow-hidden">
  <div className="container mx-auto">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={fadeInUp}
      className="text-center mb-8 sm:mb-12"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800">
        Nos Réalisations
      </h2>
      <div className="w-16 h-1 sm:w-24 bg-blue-600 mx-auto"></div>
    </motion.div>
    
    <div className="w-full flex">
      <Carousel plugins={[Autoplay({ delay: 4000 })]} className="h-auto w-full">
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem
              key={project.id}
              className="flex justify-center items-center w-full md:basis-1/2"
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={fadeInUp}
                className="flex flex-col md:flex-row items-center p-4 md:p-6 w-full"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-1/2  md:w-1/4  object-cover rounded-lg mb-4 md:mb-0 md:mr-4" // Responsive image size
                />
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-2 text-blue-600">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    {project.description}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">
                    {project.services.join(", ")}
                  </p>
                </div>

              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section className="py-20 bg-white px-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Contactez Nous !
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              variants={fadeInUp}
            >
              <div className="flex flex-col space-y-6">
                <Input type="text" placeholder="Nom" className="w-full" />
                <Input
                  type="email"
                  placeholder="Email"
                  className="w-full"
                />
                <Textarea
                  placeholder="Message"
                  className="w-full"
                  rows={4}
                />
                <Button
                  className="bg-blue-600 text-white px-8 py-3 rounded-sm  hover:bg-blue-700 transition duration-300 shadow-lg"
                  onClick={() => {
                    const currentDate = new Date().toLocaleString("fr-FR", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                    });
                    toast({
                      title: "Statut du Message : Envoyé",
                      description: currentDate,
                    });
                  }}
                >
                  Envoyer
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              variants={fadeInUp}
            >
              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-4 text-blue-600" />
                  <p className="text-gray-600">
                    FRANCE Paris, 75016 (Full Remote)
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4 text-blue-600" />
                  <p className="text-gray-600">+33 1 26 52 85 36</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4 text-blue-600" />
                  <p className="text-gray-600">info@ltmconsulting.com</p>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href=""
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50 px-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Restez informé
            </h2>
            <p className="mb-6 text-gray-600">
              Abonnez-vous à notre newsletter pour recevoir les dernières
              actualités et tendances du secteur.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Email"
                className="flex-grow"
              />
              <Button
                disabled
                type="submit"
                className=" bg-blue-600 text-white px-8 py-3 rounded-full text-lg  hover:bg-blue-700 transition duration-300 shadow-lg"
              >
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 LTM Consulting. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
