import { useEffect, useRef } from "react";
import { Row, Col, Image } from "react-bootstrap";
import AppSection from "../../components/App/AppSection";

export default function SupportingSection() {
  const images = [
    "./assets/supporting/pan.webp",
    "./assets/supporting/pks.webp",
    "./assets/supporting/demokrat.webp",
    "./assets/supporting/psi.webp",
    "./assets/supporting/perindo.webp",
  ];

  const rowRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (rowRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
        const maxScrollLeft = scrollWidth - clientWidth;

        if (scrollLeft < maxScrollLeft) {
          rowRef.current.scrollBy({ left: clientWidth, behavior: "smooth" });
        } else {
          rowRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 2000);

    return () => clearInterval(scrollInterval); // Cleanup on unmount
  }, []);

  return (
    <AppSection
      id="SupportingSection"
      title="Pengusung"
      icon="bi-arrow-up-square"
    >
      <Row ref={rowRef} className="px-lg-0 px-2 overflow-x-scroll flex-nowrap">
        {images.map((image, index) => (
          <Col key={index} xs={4} className="px-1 mb-3">
            <Image src={image} alt={`Image ${index + 1}`} fluid />
          </Col>
        ))}
      </Row>
    </AppSection>
  );
}
