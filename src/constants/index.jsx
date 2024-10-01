
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";
import { Heart } from 'lucide-react';

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Características", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Precios", href: "#" },
  { label: "Testimonios", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "Estoy extremadamente satisfecho con los servicios brindados. El equipo fue receptivo, profesional y entregó resultados más allá de mis expectativas.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "No podría estar más feliz con el resultado de nuestro proyecto. La creatividad y habilidades para resolver problemas del equipo fueron fundamentales para dar vida a nuestra visión.",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Trabajar con esta empresa fue un placer. Su atención al detalle y compromiso con la excelencia son dignos de elogio. Los recomendaría a cualquiera que busque un servicio de primera calidad.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Trabajar con el equipo de XYZ Company fue un cambio radical para nuestro proyecto. Su atención al detalle y soluciones innovadoras nos ayudaron a alcanzar nuestros objetivos más rápido de lo que pensábamos posible. ¡Estamos agradecidos por su experiencia y profesionalismo!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "Estoy asombrado por el nivel de profesionalismo y dedicación mostrado por el equipo. Fueron capaces de superar nuestras expectativas y entregar resultados excepcionales.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "El equipo fue más allá para asegurar que nuestro proyecto fuera un éxito. Su experiencia y dedicación son incomparables. Espero trabajar con ellos de nuevo en el futuro.",
  },
];

export const features = [
  {
    icon: <Heart />,
    text: "Interfaz de arrastrar y soltar",
    description:
      "Diseñe y organice fácilmente sus entornos de RV con una interfaz de arrastrar y soltar fácil de usar.",
  },
  {
    icon: <Fingerprint />,
    text: "Compatibilidad multiplataforma",
    description:
      "Cree aplicaciones de realidad virtual que funcionen a la perfección en varias plataformas, como móviles, ordenadores de sobremesa y cascos de realidad virtual.",
  },
  {
    icon: <ShieldHalf />,
    text: "Plantillas incorporadas",
    description:
      "Pon en marcha tus proyectos de RV con una gran variedad de plantillas integradas para distintos tipos de aplicaciones y entornos.",
  },
  {
    icon: <BatteryCharging />,
    text: "Vista previa en tiempo real",
    description:
      "Previsualiza tu aplicación de RV en tiempo real a medida que realizas cambios, lo que permite realizar iteraciones y ajustes con rapidez.",
  },
  {
    icon: <PlugZap />,
    text: "Herramientas de colaboración",
    description:
      "Trabaje con su equipo en tiempo real en proyectos de RV, lo que permite una colaboración y un intercambio de ideas fluidos.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Obtenga información valiosa sobre las interacciones y el comportamiento de los usuarios en sus aplicaciones de RV con un panel de análisis integrado.",
  },
];

export const checklistItems = [
  {
    title: "Fusión de código simplificada",
    description:
      "Realice un seguimiento del rendimiento de sus aplicaciones de RV y obtenga información sobre el comportamiento de los usuarios.",
  },
  {
    title: "Revise el código sin preocupaciones",
    description:
      "Realice un seguimiento del rendimiento de sus aplicaciones de RV y obtenga información sobre el comportamiento de los usuarios.",
  },
  {
    title: "Asistencia AI para reducir el tiempo",
    description:
      "Realice un seguimiento del rendimiento de sus aplicaciones de RV y obtenga información sobre el comportamiento de los usuarios.",
  },
  {
    title: "Compartir el trabajo en minutos",
    description:
      "Realice un seguimiento del rendimiento de sus aplicaciones de RV y obtenga información sobre el comportamiento de los usuarios.",
  },
];

export const pricingOptions = [
  {
    title: "Gratis",
    price: "$0",
    features: [
      "Compartir tablero privado",
      "5 Gb de almacenamiento",
      "Analítica web",
      "Modo privado",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Compartir tablero privado",
      "10 Gb de almacenamiento",
      "Analítica web (Avanzada)",
      "Modo privado",
    ],
  },
  {
    title: "Empresarial",
    price: "$200",
    features: [
      "Compartir tablero privado",
      "Almacenamiento ilimitado",
      "Red de alto rendimiento",
      "Modo privado",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
