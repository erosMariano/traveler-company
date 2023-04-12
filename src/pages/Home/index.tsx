import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import { Hero } from "./components/Hero";
import { MotivoParaUsar } from "./components/Motivo";
import { ParaQuandoUsar } from "./components/ParaQuandoUsar";
import { Passos } from "./components/Passos";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <MotivoParaUsar />
      <ParaQuandoUsar />
      <Passos />
      <Footer />
    </>
  );
}

export default Home;
