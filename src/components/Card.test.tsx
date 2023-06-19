import { describe, test, beforeEach, expect, vi } from "vitest";

import { render, screen, fireEvent } from "@testing-library/react";
import Card from "./Card";

describe("Card test", () => {
  const fnMock = vi.fn()

  const mockTitle = "Testing";
  const mockImgPath = 'mock-image-path.jpg';
  const mockTags = ["a", "b"];
  const mockOnTagClick = () => fnMock("a");
  const mockOnPlayClick = () => fnMock("play");

  beforeEach(() => {
    render(
      <Card
        title={mockTitle}
        imgPath={mockImgPath}
        description="test description"
        tags={mockTags}
        onTagClick={mockOnTagClick}
        onPlayClick={mockOnPlayClick}
      />
    );
  });

  test("Should show title", () => {
    expect(screen.getByText(/Testing/i)).toBeDefined()
  });

  test("Should contain imgPath", () => {
    const img = screen.getByAltText<HTMLImageElement>(/picture for Testing/i)

    expect(img.src).toContain("mock-image-path.jpg")
    
  });

  test("Should contain description", () => {
    expect(screen.getByText(/test description/i)).toBeDefined()
  })

  test("Shoud render card tags", () => {
    const tagElements = screen.getAllByTestId('tag');

    expect(tagElements.length).toBeDefined()
    expect(tagElements.length).toBe(mockTags.length)
  })

  test("Tag button can be clicked", () => {
    const tagElement = screen.getAllByTestId('tag')[0];

    fireEvent.click(tagElement)

    expect(fnMock.mock.lastCall).toStrictEqual(['a'])
  })

  test("Play button can be clicked", () => {
    const playElement = screen.getByTestId('play-btn');

    fireEvent.click(playElement)

    expect(fnMock.mock.lastCall).toStrictEqual(['play'])
  })
});

