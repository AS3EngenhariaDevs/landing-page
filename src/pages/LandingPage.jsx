import { useEffect, useRef, useState } from "react";
import { X, ZoomIn, ZoomOut } from "lucide-react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import TrustedClientsSection from "../components/sections/TrustedClientsSection";
import ProductsSection from "../components/sections/ProductsSection";
import UseCasesSection from "../components/sections/UseCasesSection";
import AcceleratorsSection from "../components/sections/AcceleratorsSection";
import SuccessCasesSection from "../components/sections/SuccessCasesSection";

export default function LandingPage() {
  const [expandedImage, setExpandedImage] = useState(null);
  const [imageZoomed, setImageZoomed] = useState(false);
  const lightboxRef = useRef(null);
  const openImage = (image) => {
    setImageZoomed(false);
    setExpandedImage(image);
  };
  useEffect(() => {
    const dialog = lightboxRef.current;
    if (!dialog) return;
    if (expandedImage && !dialog.open) dialog.showModal();
    if (!expandedImage && dialog.open) dialog.close();
  }, [expandedImage]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <HeroSection />
        <TrustedClientsSection />
        <ProductsSection onOpenImage={openImage} />
        <UseCasesSection />
        <AcceleratorsSection />
        <SuccessCasesSection onOpenImage={openImage} />
      </main>
      <Footer />
      <dialog
        ref={lightboxRef}
        className="image-lightbox"
        aria-labelledby="image-lightbox-title"
        onClose={() => { setExpandedImage(null); setImageZoomed(false); }}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        <div className="image-lightbox__panel">
          <div className="image-lightbox__header">
            <h2 id="image-lightbox-title">{expandedImage?.title}</h2>
            <div className="image-lightbox__actions">
              <button type="button" onClick={() => setImageZoomed(!imageZoomed)} aria-label={imageZoomed ? "Reduzir imagem" : "Aproximar imagem"}>
                {imageZoomed ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
              </button>
              <button type="button" onClick={() => lightboxRef.current?.close()} aria-label="Fechar imagem ampliada">
                <X size={22} />
              </button>
            </div>
          </div>
          <div className={`image-lightbox__viewport${imageZoomed ? " image-lightbox__viewport--zoomed" : ""}`}>
            {expandedImage && <img src={expandedImage.src} alt={expandedImage.alt} />}
          </div>
        </div>
      </dialog>
    </div>
  );
}
