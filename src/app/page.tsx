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
      longDescription:
        "Notre service de Planification Stratégique fournit aux entreprises des stratégies sur mesure conçues pour répondre à des objectifs spécifiques. Nous réalisons une analyse approfondie de votre position actuelle, identifions des opportunités et créons une feuille de route qui s’aligne sur votre vision à long terme. Que vous souhaitiez vous développer, entrer sur de nouveaux marchés ou optimiser vos opérations, nous vous aidons à créer des plans clairs et actionnables qui génèrent des résultats.",
      img: "/assets/business.jpg",
    },
    {
      name: "Analyse Financière",
      description:
        "Évaluations financières approfondies pour optimiser la performance de votre entreprise.",
      longDescription:
        "Notre service d’Analyse Financière implique des évaluations détaillées de la santé financière de votre entreprise. Nous examinons vos états financiers, évaluons la rentabilité, identifions les opportunités d’économies et fournissons des recommandations pour améliorer votre résultat net. De la budgétisation à la prévision, nous veillons à ce que vos opérations financières soient en adéquation avec votre stratégie commerciale globale.",
      img: "/assets/data.jpg",
    },
    {
      name: "Recherche de Marché",
      description:
        "Obtenez des informations précieuses sur votre marché cible et vos concurrents.",
      longDescription:
        "Notre service de Recherche de Marché vous aide à comprendre le paysage de votre marché. Nous rassemblons et analysons des données sur le comportement des clients, les tendances du secteur et les concurrents pour fournir des informations exploitables. Avec nos rapports détaillés, vous pouvez prendre des décisions éclairées concernant le développement de produits, les stratégies de prix et le positionnement sur le marché, garantissant que votre entreprise reste en tête de la concurrence.",
      img: "/assets/dev.jpg",
    },
    {
      name: "Transformation Digitale",
      description:
        "Modernisez vos processus d’entreprise avec des technologies de pointe.",
      longDescription:
        "Notre service de Transformation Digitale permet aux entreprises d’exploiter la technologie moderne pour optimiser les opérations. De l’automatisation des flux de travail à l’intégration de solutions cloud, nous vous guidons à chaque étape de la transformation. Notre objectif est d’améliorer l’efficacité, d’améliorer l’expérience client et de garder votre entreprise à la pointe de l’innovation technologique.",
      img: "/assets/meeting.jpg",
    },
    {
      name: "Développement du Leadership",
      description:
        "Renforcez vos leaders avec les compétences nécessaires pour réussir.",
      longDescription:
        "Notre service de Développement du Leadership est conçu pour améliorer les compétences des leaders de votre entreprise. Nous proposons des programmes de formation axés sur l’amélioration de la prise de décision, de la communication et des compétences en travail d’équipe. Que vous prépariez de futurs leaders ou que vous renforciez les capacités des dirigeants actuels, nous aidons à construire une équipe de direction capable de faire progresser votre entreprise.",
      img: "/assets/analyse.jpeg",
    },
    {
      name: "Optimisation des Processus",
      description:
        "Rationalisez vos opérations pour une efficacité et une productivité maximales.",
      longDescription:
        "Notre service d’Optimisation des Processus se concentre sur l’amélioration de l’efficacité de vos processus d’entreprise. Nous analysons les flux de travail, identifions les goulots d’étranglement et mettons en œuvre des solutions qui réduisent les coûts et améliorent la productivité. Que ce soit par l’automatisation, la restructuration ou la formation du personnel, nous veillons à ce que votre entreprise fonctionne de manière fluide et efficace.",
      img: "/assets/support.jpeg",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Développement d&apos;une application mobile",
      description:
        "Création d&apos;une application mobile innovante pour améliorer l&apos;expérience utilisateur.",
      image: "/assets/data.jpg",
      services: ["Développement mobile", "UX/UI Design", "Tests utilisateurs"],
    },
    {
      id: 2,
      title: "Refonte d&apos;un site web e-commerce",
      description:
        "Modernisation d&apos;un site e-commerce pour augmenter les ventes et améliorer la navigation.",
      image: "/assets/meeting.jpg",
      services: ["Web Design", "SEO", "Optimisation des performances"],
    },
    {
      id: 3,
      title: "Mise en place d&apos;un système CRM",
      description:
        "Implémentation d&apos;un système CRM personnalisé pour mieux gérer les relations clients.",
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
      title: "Création d&apos;une plateforme de réservation en ligne",
      description:
        "Développement d&apos;une plateforme de réservation intuitive pour faciliter les réservations.",
      image: "/assets/formation.jpg",
      services: ["Développement web", "UX/UI Design", "Tests et déploiement"],
    },
    {
      id: 6,
      title: "Développement d&apos;une application mobile",
      description:
        "Création d&apos;une application mobile innovante pour améliorer l&apos;expérience utilisateur.",
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
          </motion.div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {" "}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              variants={fadeInUp}
            >
              {" "}
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                Notre Histoire
              </h3>{" "}
              <p className="mb-6 text-gray-600 leading-relaxed">
                {" "}
                LTM Consulting a été fondée en 2010 avec la vision de
                révolutionner le conseil aux entreprises. Notre équipe d&apos;experts
                apporte des décennies d&apos;expérience dans divers secteurs, ce qui
                nous permet de fournir des idées et des stratégies inégalées à
                nos clients.{" "}
              </p>{" "}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerChildren}
                className="space-y-4"
              >
                {" "}
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
                    {" "}
                    <ArrowRight className="text-blue-600 mr-2" />{" "}
                    <span>{value}</span>{" "}
                  </motion.div>
                ))}{" "}
              </motion.div>{" "}
            </motion.div>{" "}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              variants={fadeInUp}
              className="relative"
            >
              {" "}
              <Carousel
                plugins={[Autoplay({ delay: 2000 })]}
                className="h-64 w-full"
              >
                {" "}
                <CarouselContent>
                  {" "}
                  <CarouselItem className="flex items-center justify-center">
                    {" "}
                    <img
                      src="/assets/homme.png"
                      alt="Homme"
                      className="h-50 object-cover rounded-lg"
                    />{" "}
                  </CarouselItem>{" "}
                  <CarouselItem className="flex items-center justify-center">
                    {" "}
                    <img
                      src="/assets/femme.png"
                      alt="Femme"
                      className="rounded-lg"
                    />{" "}
                  </CarouselItem>{" "}
                </CarouselContent>{" "}
              </Carousel>{" "}
            </motion.div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Services Section */}{" "}
      <section className="py-20 bg-gray-50 overflow-hidden px-16">
        {" "}
        <div className="container mx-auto px-4">
          {" "}
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
                name: "Alice Johnson",
                company: "Tech Co",
                rating: 5,
                testimonial:
                  "LTM Consulting a fourni un service exceptionnel et a livré des résultats remarquables. Leur expertise et leur dévouement ont été déterminants dans notre succès.",
                img: "/assets/femme.png",
              },
              {
                name: "Bob Smith",
                company: "Finance Corp",
                rating: 4,
                testimonial:
                  "Une excellente expérience de travail avec LTM Consulting. Leur équipe est compétente et réactive, bien qu&apos;il y ait eu quelques retards mineurs.",
                img: "/assets/homme.png",
              },
              {
                name: "Rémi Chazel",
                company: "Divers Inc",
                rating: 5,
                testimonial:
                  "Je suis extrêmement satisfaite des services fournis par LTM Consulting. Ils ont dépassé nos attentes et nous ont aidés à atteindre nos objectifs.",
                img: "/assets/homme.PNG",
              },
              {
                name: "Elise Brown",
                company: "Healthcare Ltd",
                rating: 5,
                testimonial:
                  "Une collaboration fructueuse avec LTM Consulting. Leur compréhension de nos besoins était impressionnante et le résultat final était au-delà de nos espérances.",
                img: "/assets/femme2.jpg",
              },
            ].map((testimonial, index) => (
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
              <span className="font-bold text-6xl">LTM Consulting ©</span>
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
              Nos Partenaires de confiance
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
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
      <section className="py-20 bg-white px-16 overflow-hidden">
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
              Nos Réalisations
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>
          <div className="w-screen flex">
            <Carousel plugins={[Autoplay({ delay: 4000 })]} className="h-auto">
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
                      className="flex items-center p-4 w-full"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-1/3 md:w-1/4 lg:w-1/3 object-cover rounded-lg mr-4" // Responsive image size
                      />
                      <div className="flex flex-col">
                        {" "}
                        {/* Conteneur pour le texte */}
                        <h3 className="text-xl font-semibold mt-2 text-blue-600">
                          {project.title}
                        </h3>
                        <p className="text-gray-600">{project.description}</p>
                        <p className="text-sm text-gray-500">
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
                  <p className="text-gray-600">+1 (123) 456-7890</p>
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
              Restez informé !
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
