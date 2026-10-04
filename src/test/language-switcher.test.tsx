import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import {
  LanguageProvider,
  conditionTranslations,
  useLanguage,
} from "../context/language-context";
import { ConditionDetailModal } from "../components/ConditionDetailModal";
import { conditions } from "../data/conditions";

function LanguageTestComponent() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div>
      <span data-testid="current-lang">{language}</span>
      <h1 data-testid="title">{t("hero_title")}</h1>
      <p data-testid="search-btn">{t("search_button")}</p>
      <button onClick={() => setLanguage("en")}>English</button>
      <button onClick={() => setLanguage("hi")}>हिन्दी</button>
      <button onClick={() => setLanguage("gu")}>ગુજરાતી</button>
    </div>
  );
}

describe("Multilingual Language Switcher", () => {
  it("defaults to English and allows switching between English, Hindi, and Gujarati", () => {
    render(
      <LanguageProvider>
        <LanguageTestComponent />
      </LanguageProvider>
    );

    // Default English
    expect(screen.getByTestId("current-lang").textContent).toBe("en");
    expect(screen.getByTestId("title").textContent).toBe("Your wellness dashboard");
    expect(screen.getByTestId("search-btn").textContent).toBe("Get Guidance");

    // Switch to Hindi
    fireEvent.click(screen.getByText("हिन्दी"));
    expect(screen.getByTestId("current-lang").textContent).toBe("hi");
    expect(screen.getByTestId("title").textContent).toBe("आपका स्वास्थ्य डैशबोर्ड");
    expect(screen.getByTestId("search-btn").textContent).toBe("मार्गदर्शन पाएं");

    // Switch to Gujarati
    fireEvent.click(screen.getByText("ગુજરાતી"));
    expect(screen.getByTestId("current-lang").textContent).toBe("gu");
    expect(screen.getByTestId("title").textContent).toBe("તમારું સ્વાસ્થ્ય ડેશબોર્ડ");
    expect(screen.getByTestId("search-btn").textContent).toBe("માર્ગદર્શન મેળવો");

    // Switch back to English
    fireEvent.click(screen.getByText("English"));
    expect(screen.getByTestId("current-lang").textContent).toBe("en");
    expect(screen.getByTestId("title").textContent).toBe("Your wellness dashboard");
  });

  it("translates condition titles and summaries for all supported conditions", () => {
    const acidityHi = conditionTranslations["acidity-heartburn"]?.hi;
    const acidityGu = conditionTranslations["acidity-heartburn"]?.gu;

    expect(acidityHi?.name).toBe("एसिडिटी और सीने में जलन");
    expect(acidityGu?.name).toBe("એસિડિટી અને છાતીમાં બળતરા");

    const insomniaHi = conditionTranslations["sleep-problems"]?.hi;
    const insomniaGu = conditionTranslations["sleep-problems"]?.gu;

    expect(insomniaHi?.name).toBe("अनिद्रा और नींद की समस्या");
    expect(insomniaGu?.name).toBe("અનિદ્રા અને ઊંઘની સમસ્યા");
  });

  it("renders ConditionDetailModal completely in Hindi and Gujarati", () => {
    const sample = conditions.find((c) => c.slug === "acidity-heartburn")!;

    function ModalTester() {
      const { setLanguage } = useLanguage();
      return (
        <div>
          <button onClick={() => setLanguage("hi")}>Set Hindi</button>
          <button onClick={() => setLanguage("gu")}>Set Gujarati</button>
          <ConditionDetailModal condition={sample} onClose={() => {}} />
        </div>
      );
    }

    render(
      <LanguageProvider>
        <ModalTester />
      </LanguageProvider>
    );

    // Switch to Hindi
    fireEvent.click(screen.getByText("Set Hindi"));
    expect(screen.getByText("एसिडिटी और सीने में जलन")).toBeDefined();
    // Category badge translated
    expect(screen.getByText("पाचन")).toBeDefined();
    // Evidence badge translated
    expect(screen.getByText("सीमित या मिश्रित साक्ष्य")).toBeDefined();
    // Herbal tips translated
    expect(screen.getByText(/सौंफ और मिश्री का ठंडा अर्क/)).toBeDefined();
    // Herb translated
    expect(screen.getByText("यष्टिमधु (मुलेठी)")).toBeDefined();

    // Switch to Gujarati
    fireEvent.click(screen.getByText("Set Gujarati"));
    expect(screen.getByText("એસિડિટી અને છાતીમાં બળતરા")).toBeDefined();
    // Category badge translated
    expect(screen.getByText("પાચન")).toBeDefined();
    // Evidence badge translated
    expect(screen.getByText("મર્યાદિત અથવા મિશ્ર પુરાવા")).toBeDefined();
    // Herbal tips translated
    expect(screen.getByText(/વરિયાળી અને સાકરનું ઠંડું પાણી/)).toBeDefined();
    // Herb translated
    expect(screen.getByText("જેઠીમધ (યષ્ટિમધુક)")).toBeDefined();
  });
});
