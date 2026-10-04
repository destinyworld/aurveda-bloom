import { render, screen, fireEvent, renderHook, act } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import { ConditionCard } from "../components/ConditionCard";
import { ConditionDetailModal } from "../components/ConditionDetailModal";
import { conditions } from "../data/conditions";
import { useFavorites } from "../hooks/use-wellness-store";

describe("Favorites and Bookmarks functionality", () => {
  const sampleCondition = conditions[0]!;

  beforeEach(() => {
    window.localStorage.clear();
  });

  it("toggles favorites in useFavorites hook and persists to localStorage", () => {
    const { result } = renderHook(() => useFavorites());

    expect(result.current.favorites).toEqual([]);

    act(() => {
      result.current.toggleFavorite("acidity-heartburn");
    });

    expect(result.current.favorites).toContain("acidity-heartburn");
    expect(window.localStorage.getItem("sattva-favorites")).toContain("acidity-heartburn");

    act(() => {
      result.current.toggleFavorite("acidity-heartburn");
    });

    expect(result.current.favorites).not.toContain("acidity-heartburn");
  });

  it("ConditionCard favorite button calls onToggle without triggering onExplore", () => {
    const onToggle = vi.fn();
    const onExplore = vi.fn();

    render(
      <ConditionCard
        condition={sampleCondition}
        saved={false}
        onToggle={onToggle}
        onExplore={onExplore}
      />
    );

    const favButton = screen.getByLabelText(`Save ${sampleCondition.name} to favorites`);
    fireEvent.click(favButton);

    expect(onToggle).toHaveBeenCalledWith(sampleCondition.slug);
    expect(onExplore).not.toHaveBeenCalled();
  });

  it("ConditionDetailModal Save Guide button calls onToggleBookmark", () => {
    const onToggleBookmark = vi.fn();
    const onClose = vi.fn();

    const { rerender } = render(
      <ConditionDetailModal
        condition={sampleCondition}
        onClose={onClose}
        saved={false}
        onToggleBookmark={onToggleBookmark}
      />
    );

    const saveButton = screen.getByText("Save Guide");
    fireEvent.click(saveButton);

    expect(onToggleBookmark).toHaveBeenCalledWith(sampleCondition.slug);

    // Rerender as saved
    rerender(
      <ConditionDetailModal
        condition={sampleCondition}
        onClose={onClose}
        saved={true}
        onToggleBookmark={onToggleBookmark}
      />
    );

    expect(screen.getByText("Saved in Favorites ✓")).toBeDefined();
  });
});
