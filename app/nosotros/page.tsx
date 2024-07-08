'use client';

import Image from 'next/image';
import Carousel from 'embla-carousel-react';
import { Dialog, DialogTrigger, DialogContent } from '@radix-ui/react-dialog';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-y-12 px-4 py-8 lg:px-20">
      {/* Hero Section */}
      <section className="w-full flex items-center justify-center text-center bg-gradient-to-b from-green-200 to-green-300 py-12 rounded-lg relative">
        <div className="absolute inset-0">
          <Image
            src="/images/todos.png"
            alt="Hero Image"
            className="object-cover w-full h-full rounded-lg opacity-70"
            layout="fill"
            priority
          />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="hover:animate- mt-8 text-4xl font-bold tracking-tight text-green-50 lg:text-6xl ">
            Bienvenidos a Unidad Funcional de Gestión Ambiental
          </h1>
          <p className="mt-4 text-lg text-white lg:text-xl ">
            Comprometidos con el medio ambiente y la sostenibilidad.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full flex flex-col items-center gap-y-12 lg:flex-row lg:justify-between lg:gap-y-0 lg:gap-x-12">
        <div className="flex flex-col items-center text-center max-w-xs">
          <Image
            src="/images/xde.jpg"
            alt="Feature 1"
            className="rounded-lg"
            width={320}
            height={180}
          />
          <h2 className="mt-4 text-2xl font-semibold text-primary">Innovación Verde</h2>
          <p className="mt-2 text-foreground">
            Tecnologías avanzadas para proteger nuestro planeta.
          </p>
        </div>
        <div className="flex flex-col items-center text-center max-w-xs">
          <Image
            src="/images/22.jpg"
            alt="Feature 2"
            className="rounded-lg"
            width={320}
            height={180}
          />
          <h2 className="mt-4 text-2xl font-semibold text-primary">Energía Renovable</h2>
          <p className="mt-2 text-foreground">
            Soluciones sostenibles para un futuro limpio.
          </p>
        </div>
        <div className="flex flex-col items-center text-center max-w-xs">
          <Image
            src="/images/ecotrueque.jpg"
            alt="Feature 3"
            className="rounded-lg"
            width={320}
            height={180}
          />
          <h2 className="mt-4 text-2xl font-semibold text-primary">Reciclaje Eficiente</h2>
          <p className="mt-2 text-foreground">
            Programas de reciclaje que marcan la diferencia.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full text-center py-12">
        <h2 className="text-3xl font-bold tracking-tight text-primary lg:text-4xl">Nuestros Programas</h2>
        <div className="mt-8 flex flex-col items-center gap-y-8 lg:flex-row lg:justify-around lg:gap-y-0">
          <div className="max-w-xs text-center">
            <Image
              src="/images/voluntariado.jpg"
              alt="Service 1"
              className="rounded-lg"
              width={350}
              height={200}
            />
            <h3 className="mt-4 text-2xl font-semibold text-primary">Voluntariado Ambiental</h3>
            <p className="mt-2 text-foreground">
              Asesoramiento profesional para proyectos sostenibles.
            </p>
          </div>
          <div className="max-w-xs text-center">
            <Image
              src="/images/bolsas_de_plastico.jpeg"
              alt="Service 2"
              className="rounded-lg"
              width={350}
              height={200}
            />
            <h3 className="mt-4 text-2xl font-semibold text-primary">Gestión de Residuos</h3>
            <p className="mt-2 text-foreground">
              Soluciones para una adecuada gestión de desechos.
            </p>
          </div>
          <div className="max-w-xs text-center">
            <Image
              src="/images/23.jpg"
              alt="Service 3"
              className="rounded-lg"
              width={350}
              height={200}
            />
            <h3 className="mt-4 text-2xl font-semibold text-primary">Educación Ambiental</h3>
            <p className="mt-2 text-foreground">
              Programas educativos para fomentar la conciencia ambiental.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full text-center bg-gradient-to-b from-green-600 to-green-400 py-12 rounded-lg">
        <h2 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">Misión</h2>
        <p className="mt-4 text-white max-w-2xl mx-auto">
          La misión de la Oficina de Gestión Ambiental de la Universidad Nacional Hermilio Valdizán es promover y liderar la implementación de prácticas sostenibles dentro de la universidad. Nos dedicamos a educar, sensibilizar y apoyar a nuestra comunidad universitaria en la adopción de medidas ecoeficientes que contribuyan a la protección del medio ambiente y al bienestar de las generaciones futuras.
        </p>
        <div className="mt-8 flex flex-col items-center gap-y-8 lg:flex-row lg:justify-around lg:gap-y-0">
          <div className="max-w-xs bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="italic text-foreground">
              &quot;Gracias a la Oficina de Gestión Ambiental, hemos logrado reducir significativamente nuestra huella de carbono.&quot;
            </p>
            <p className="mt-4 font-semibold text-primary">- Estudiante Satisfecho</p>
          </div>
          <div className="max-w-xs bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="italic text-foreground">
              &quot;Las iniciativas ambientales nos han permitido alcanzar nuestros objetivos de sostenibilidad.&quot;
            </p>
            <p className="mt-4 font-semibold text-primary">- Profesor Comprometido</p>
          </div>
          <div className="max-w-xs bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="italic text-foreground">
              &quot;Recomiendo a todos los miembros de la comunidad universitaria participar en las actividades de gestión ambiental.&quot;
            </p>
            <p className="mt-4 font-semibold text-primary">- Personal Administrativo</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full text-center py-12">
        <h2 className="text-3xl font-bold tracking-tight text-primary lg:text-4xl">¡Actúa Ahora!</h2>
        <p className="mt-4 text-lg text-foreground lg:text-xl">
          Únete a nuestra misión de promover la sostenibilidad en la Universidad Nacional Hermilio Valdizán. Contáctanos para obtener más información sobre nuestras iniciativas ambientales y cómo puedes contribuir.
        </p>
        <a
          href="https://your-link-here.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block px-6 py-3 text-lg font-medium text-white bg-green-500 rounded-lg hover:bg-green-600"
        >
          Contáctanos
        </a>
      </section>
    </main>
  );
}
