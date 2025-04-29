import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function AccordionInfo(){
    return (
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>🎧 Безупречный звук, который заставляет сердце биться чаще!</AccordionTrigger>
            <AccordionContent>
                Мощнейшая звуковая система премиум-класса, создающая эффект полного погружения. Каждая нота, каждый бас – будто живой!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>💡 Ослепительное световое шоу – как в лучших клубах мира!</AccordionTrigger>
            <AccordionContent>
                Современное LED-оборудование, лазеры и умная синхронизация с музыкой превратят вашу вечеринку в незабываемое зрелищ
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>🍹 Встроенный бар с авторскими коктейлями и премиальным ассортиментом</AccordionTrigger>
            <AccordionContent>
                Искусные бармены, широкий выбор напитков и стильная подача – ваш вечер станет еще вкуснее!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>🛋️ Уютные раскошные диваны</AccordionTrigger>
            <AccordionContent>
                Комфорт и стиль – для тех, кто ценит атмосферу и комфорт.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>🎛️ Диджейская стойка</AccordionTrigger>
            <AccordionContent>
                Всё необходимое для идеального сета – удобство.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>✨ Где тусуются те, кто знает толк в настоящем отдыхе!</AccordionTrigger>
            <AccordionContent>
                Будь в эпицентре событий – только здесь царит энергия настоящей ночной жизни!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>📍 Ждем тебя в самом крутом клубе Калининграда!</AccordionTrigger>
            <AccordionContent>
                Забронируй самый крутой клуб для ваших корпоративов или для вечеринок 🚀
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )
}