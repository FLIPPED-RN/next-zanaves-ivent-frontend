import AccordionInfo from "@/components/AccordionInfo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PhotoCarusel from "@/components/PhotoCarusel";
import UserForm from "@/components/UserForm";

export default function Home() {
  return (
    <div>
      <header>
        <div className="border-b-1 border-amber-400">
          <Header />
        </div>
      </header>
      <main>
      <section className="mx-3">
          <h1 className="text-4xl text-white text-center mt-10">Аренда</h1>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mx-auto max-w-[1200px] mt-[50px]">
              <UserForm />
          </div>
        </section>
        
        <section>
          <h1 className="text-4xl text-white text-center mb-10 mt-20">Фотографии</h1>
          <div>
            <PhotoCarusel />
          </div>
        </section>

        <section>
          <div className="w-auto mx-auto px-10 py-14 rounded-md max-w-[1200px]">
            <h1 className="text-4xl text-white text-center mb-10 mt-10">Информация</h1>
            <div>
              <AccordionInfo />
            </div>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}