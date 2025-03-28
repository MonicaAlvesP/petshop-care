import Image from "next/image";
import about1img from "../../../public/about-1.png"
import about2img from "../../../public/about-2.png"
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <main className="bg-[#FD6ec] py-16">
      <section className="container px-4 mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="relative">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image src={about1img} alt="gatinho e cachorrinho lado a lado"
                fill
                quality={100}
                priority
                className="object-cover hover:scale-110 duration-300"
              />
            </div>

            <div className="absolute w-40 h-40 right-4 bottom-2 border-4 overflow-hidden rounded-lg border-white">
              <Image src={about2img} alt="gatinho esperando petisco"
                fill
                quality={100}
                priority
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 mt-10">
            <h2 className="text-4xl font-semibold">Sobre</h2>
            <p>
              O Petshop Care é um lugar onde a paixão e amor pelos animais se encontram. Aqui, acreditamos que cada pet merece o melhor cuidado, e usamos a inovação para tornar isso possível. Nossa missão é oferecer serviços e produtos de alta qualidade, sempre priorizando o bem-estar dos nossos amigos de quatro patas. Seja bem-vindo ao Petshop Care, onde cuidamos do seu pet com carinho!
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Aberto desde 2023
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                100% pet-friendly
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Atendimento 24h
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Serviços de banho e tosa
              </li>
            </ul>

            <div className="flex gap-2">
              <a href="#"
                className="bg-[#E84C3D] text-white py-2 px-4 rounded-lg flex items-center gap-2 justify-center hover:bg-[#D13A2D]">
                <WhatsappLogo className="w-5 h-5 text-white" />
                contato via whatsapp
              </a>
              <a href="#"
                className="text-black py-2 px-4 rounded-lg flex items-center gap-2 justify-center hover:bg-[#E5E5E5]">
                <MapPin className="w-5 h-5 text-black" />
                endereço da loja
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}