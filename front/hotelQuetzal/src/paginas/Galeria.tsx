import React from "react";
import { Card, CardHeader, Image } from "@nextui-org/react";

// Datos de las imágenes
const imageData = [
  {
    id: 1,
    title: "What to watch",
    description: "Stream the Acme event",
    src: "https://storage.googleapis.com/imageneshotel/img/WhatsApp%20Image%202024-09-24%20at%2012.24.49%20PM.jpeg",
    footer: false,
  },
  {
    id: 2,
    title: "Plant a tree",
    description: "Contribute to the planet",
    src: "https://storage.googleapis.com/imageneshotel/img/WhatsApp%20Unknown%202024-09-24%20at%202.02.30%20PM/WhatsApp%20Image%202024-09-24%20at%201.55.04%20PM%20(3).jpeg",
    footer: false,
  },
  {
    id: 3,
    title: "Supercharged",
    description: "Creates beauty like a beast",
    src: "https://storage.googleapis.com/imageneshotel/img/WhatsApp%20Unknown%202024-09-24%20at%202.02.30%20PM/WhatsApp%20Image%202024-09-24%20at%201.55.06%20PM%20(5).jpeg",
    footer: false,
  },
  {
    id: 4,
    title: "New",
    description: "Acme camera",
    src: "https://storage.googleapis.com/imageneshotel/img/WhatsApp%20Unknown%202024-09-24%20at%202.02.30%20PM/WhatsApp%20Image%202024-09-24%20at%201.55.04%20PM.jpeg",
    footer: true,
    button: "Notify Me",
    footerText: "Available soon. Get notified.",
  },
  {
    id: 5,
    title: "Your day your way",
    description: "Your checklist for better sleep",
    src: "https://storage.googleapis.com/imageneshotel/img/WhatsApp%20Unknown%202024-09-24%20at%202.02.30%20PM/WhatsApp%20Image%202024-09-24%20at%201.55.05%20PM%20(4).jpeg",
    footer: true,
    button: "Get App",
    footerText: "Breathing App. Get a good night's sleep.",
    footerIcon: "https://nextui.org/images/breathing-app-icon.jpeg",
  },
  {
    id: 6,
    title: "What to watch",
    description: "Stream the Acme event",
    src: "https://storage.googleapis.com/imageneshotel/img/WhatsApp%20Unknown%202024-09-24%20at%202.02.30%20PM/WhatsApp%20Image%202024-09-24%20at%201.55.05%20PM%20(2).jpeg",
    footer: false,
  },
  {
    id: 7,
    title: "What to watch",
    description: "Stream the Acme event",
    src: "https://storage.googleapis.com/imageneshotel/img/WhatsApp%20Unknown%202024-09-24%20at%202.02.30%20PM/WhatsApp%20Image%202024-09-24%20at%201.55.05%20PM.jpeg",
    footer: false,
  },
  {
    id: 8,
    title: "What to watch",
    description: "Stream the Acme event",
    src: "https://storage.googleapis.com/imageneshotel/img/WhatsApp%20Unknown%202024-09-24%20at%202.02.30%20PM/WhatsApp%20Image%202024-09-24%20at%201.55.06%20PM%20(3).jpeg",
    footer: false,
  },
  {
    id: 9,
    title: "What to watch",
    description: "Stream the Acme event",
    src: "https://storage.googleapis.com/imageneshotel/img/WhatsApp%20Unknown%202024-09-24%20at%202.02.30%20PM/WhatsApp%20Image%202024-09-24%20at%201.55.07%20PM%20(1).jpeg",
    footer: false,
  },
  {
    id: 10,
    title: "What to watch",
    description: "Stream the Acme event",
    src: "https://storage.googleapis.com/imageneshotel/img/imagenInterior.png",
    footer: false,
  },
  {
    id: 11,
    title: "What to watch",
    description: "Stream the Acme event",
    src: "https://storage.googleapis.com/imageneshotel/img/WhatsApp%20Image%202024-09-24%20at%206.30.19%20PM.jpeg",
    footer: false,
  },
  //
];

function Galeria() {
  return (
    <div className="max-w-[1900px]  m-4 gap-2 grid grid-cols-12 grid-rows-2 px-8">
      {imageData.map((image, index) => (
        <Card
          key={index}
          className={`${
            image.id === 4
              ? "col-span-12 sm:col-span-5"
              : image.id === 5
              ? "col-span-12 sm:col-span-7"
              : image.id === 6 ||
                image.id === 7 ||
                image.id === 8 ||
                image.id === 9
              ? "col-span-12 sm:col-span-3"
              : image.id === 10
              ? "col-span-12 sm:col-span-8"
              : "col-span-12 sm:col-span-4"
          } h-[450px]`}
        >
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              {image.title}
            </p>
            <h4 className="text-white font-medium text-large">
              {image.description}
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt={`Image ${index + 1}`}
            className="z-0 w-full h-full object-cover"
            src={image.src}
          />
        </Card>
      ))}
    </div>
  );
}

export default Galeria;
