import { describe, expect, it } from "vitest";
import { getWellnessGuidance } from "../lib/ai-wellness-plan";

describe("Wellness Search Resilience and Personalized Insights", () => {
  it("returns rich Ayurvedic answers and structured personalized guidance when AI Gateway is unconfigured", async () => {
    delete process.env["AI_GATEWAY_API_KEY"];

    const result = await getWellnessGuidance("acidity and heartburn");

    expect(result).toBeDefined();
    expect(result.answer).toContain("Ayurvedic Understanding");
    expect(result.relatedConditions.length).toBeGreaterThan(0);
    expect(result.relatedConditions.some((c) => c.slug === "acidity-heartburn")).toBe(true);

    // Verify structured personalized guidance
    expect(result.guidance).toBeDefined();
    expect(result.guidance?.title).toContain("Acidity");
    expect(result.guidance?.doshaFocus).toContain("Pitta");
    expect(result.guidance?.remedyTips.length).toBeGreaterThan(0);
    expect(result.guidance?.dinacharya.morning).toBeDefined();
    expect(result.guidance?.dietaryGuidance.favor.length).toBeGreaterThan(0);
  });

  it("handles sleep and insomnia with Vata-pacifying personalized insights", async () => {
    delete process.env["AI_GATEWAY_API_KEY"];

    const result = await getWellnessGuidance("Better sleep and insomnia remedies");

    expect(result).toBeDefined();
    expect(result.guidance).toBeDefined();
    expect(result.guidance?.doshaFocus).toContain("Vata");
    expect(result.guidance?.remedyTips.length).toBeGreaterThan(0);
  });

  it("handles general symptom or herb search gracefully", async () => {
    delete process.env["AI_GATEWAY_API_KEY"];

    const result = await getWellnessGuidance("ashwagandha");

    expect(result).toBeDefined();
    expect(result.answer).toContain("Ashwagandha");
    expect(result.relatedConditions.length).toBeGreaterThan(0);
  });

  it("correctly maps 'vomit' to Nausea instead of Acidity & Heartburn", async () => {
    delete process.env["AI_GATEWAY_API_KEY"];

    const result = await getWellnessGuidance("vomit");

    expect(result).toBeDefined();
    expect(result.guidance).toBeDefined();
    expect(result.guidance?.conditionSlug).toBe("nausea");
    expect(result.guidance?.title).toBe("Nausea");
    expect(result.guidance?.isCustomAi).toBe(false);

    // Verify multilingual guidance for Nausea
    expect(result.guidance?.i18n?.hi.title).toBe("जी मिचलाना (उबकाई)");
    expect(result.guidance?.i18n?.gu.title).toBe("ઉબકા અને ઊલટી જેવું થવું");
    expect(result.guidance?.i18n?.hi.remedyTips[0]).toContain("अदरक का रस व नींबू-शहद");
    expect(result.guidance?.i18n?.gu.remedyTips[0]).toContain("આદુનો રસ અને લીંબુ-મધ");
  });

  it("generates custom AI synthesized guidance for unlisted topics like thyroid", async () => {
    delete process.env["AI_GATEWAY_API_KEY"];

    const result = await getWellnessGuidance("thyroid");

    expect(result).toBeDefined();
    expect(result.guidance).toBeDefined();
    expect(result.guidance?.isCustomAi).toBe(true);
    expect(result.guidance?.conditionSlug).toBe("");
    expect(result.guidance?.title).toContain("Thyroid");
    expect(result.guidance?.doshaFocus).toBeDefined();
    expect(result.guidance?.remedyTips.length).toBe(3);

    // Verify multilingual translations for custom AI guidance
    expect(result.guidance?.i18n?.hi.title).toContain("थायरॉइड");
    expect(result.guidance?.i18n?.gu.title).toContain("થાઇરોઇડ");
    expect(result.guidance?.i18n?.hi.perspective).toContain("थायरॉइड");
    expect(result.guidance?.i18n?.gu.perspective).toContain("થાઈરોઈડ");
    expect(result.guidance?.i18n?.hi.dinacharya.morning).toBeDefined();
    expect(result.guidance?.i18n?.gu.dinacharya.morning).toBeDefined();
    expect(result.guidance?.i18n?.hi.dietary.favor.length).toBeGreaterThan(0);
    expect(result.guidance?.i18n?.gu.dietary.avoid.length).toBeGreaterThan(0);
  });
});
