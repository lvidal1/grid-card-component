/**
 * @jest-environment jsdom
 */

import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import Home from "../pages/index"

describe("Home", () => {
	it("renders a heading", () => {
		render(<Home />)
		const heading = screen.getByRole("heading", { level: 1 })

		expect(heading).toBeInTheDocument()
	})

	it("renders filterBy tag filter", () => {
		render(<Home />)

		const checkboxes = screen.getAllByRole("checkbox", {})
		expect(checkboxes.length).toBeGreaterThan(0)
	})

	it("renders card list", () => {
		render(<Home />)

		const cards = screen.getAllByRole("card", {})
		expect(cards.length).toBeGreaterThan(0)
	})

	it("filters card list", () => {
		render(<Home />)

		const checkboxes = screen.getAllByRole("checkbox", {})
		const cards = screen.getAllByRole("card", {})

		const firstChk = checkboxes[0]
		fireEvent.click(firstChk)
		const filteredCards = screen.getAllByRole("card", {})

		expect(cards.length).toBeGreaterThan(filteredCards.length)
	})
})
