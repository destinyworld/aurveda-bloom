import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ModalityDetailModal } from "../components/ModalityDetailModal";
import { LanguageProvider } from "../context/language-context";
import { modalitiesData } from "../data/modalities";

describe("16 Wellness Modalities Flash Cards & Detail Modal", () => {
  it("contains exactly 16 modalities with rich structured data", () => {
    expect(modalitiesData).toHaveLength(16);

    const ayurveda = modalitiesData.find((m) => m.id === "ayurveda");
    expect(ayurveda).toBeDefined();
    expect(ayurveda?.content.en.name).toBe("Ayurveda");
    expect(ayurveda?.content.hi.name).toBe("आयुर्वेद");
    expect(ayurveda?.content.gu.name).toBe("આયુર્વેદ");

    // Verify all 16 items have all three languages
    for (const item of modalitiesData) {
      expect(item.content.en.traditionsKeys.length).toBeGreaterThan(0);
      expect(item.content.en.innovationsKeys.length).toBeGreaterThan(0);
      expect(item.content.en.relevanceDailyUse).toBeTruthy();
      expect(item.content.hi.traditionsKeys.length).toBeGreaterThan(0);
      expect(item.content.gu.traditionsKeys.length).toBeGreaterThan(0);
    }
  });

  it("renders ModalityDetailModal with overview, traditions, innovations, and relevance", () => {
    const onClose = vi.fn();
    const sampleModality = modalitiesData[0] ?? null; // Ayurveda

    render(
      <LanguageProvider>
        <ModalityDetailModal modality={sampleModality} onClose={onClose} />
      </LanguageProvider>
    );

    // Check title and tagline
    expect(screen.getByText("Ayurveda")).toBeDefined();
    expect(screen.getByText("The 5,000-Year-Old Vedic Science of Life & Longevity")).toBeDefined();

    // Check sections
    expect(screen.getByText("Overview & Significance in Human Life")).toBeDefined();
    expect(screen.getByText("Ancient Medicinal Traditions")).toBeDefined();
    expect(screen.getByText("Latest Scientific & Clinical Innovations")).toBeDefined();
    expect(screen.getByText("Relevance & Modern Practical Use")).toBeDefined();
    expect(screen.getByText("How to Apply in Daily Life:")).toBeDefined();

    // Check Close button
    const doneButton = screen.getByText("Done");
    fireEvent.click(doneButton);
    expect(onClose).toHaveBeenCalled();
  });

  it("closes modal on Escape key press", () => {
    const onClose = vi.fn();
    const sampleModality = modalitiesData[1] ?? null; // Herbal Traditions

    render(
      <LanguageProvider>
        <ModalityDetailModal modality={sampleModality} onClose={onClose} />
      </LanguageProvider>
    );

    fireEvent.keyDown(window, { key: "Escape" });
    expect(onClose).toHaveBeenCalled();
  });
});
