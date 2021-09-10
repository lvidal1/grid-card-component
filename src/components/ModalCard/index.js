import React, { useContext, useEffect } from "react"
import Image from "next/image"

import { ModalContext } from "../../contexts/ModalContext"

import s from "./Modal.module.scss"

/**
 * Shimmer utility
 */
const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#999" offset="20%" />
      <stop stop-color="#888" offset="50%" />
      <stop stop-color="#999" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#888" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = str =>
	typeof window === "undefined"
		? Buffer.from(str).toString("base64")
		: window.btoa(str)

const ModalCard = () => {
	const { entity: card, isModalOpen, setModalIsOpen } = useContext(ModalContext)

	const onCloseModal = () => {
		setModalIsOpen(false)
		// Enable scolling
		document.body.style.overflow = "visible"
		document.removeEventListener("keydown", onKeyDown)
	}

	const onOpenModal = () => {
		// Prevent scolling
		document.body.style.overflow = "hidden"
		document.addEventListener("keydown", onKeyDown)
	}

	/**
	 * Close the modal when the Escape key is pressed
	 * @param {object} event
	 */
	const onKeyDown = event => {
		if (event.keyCode === 27) {
			onCloseModal()
		}
	}

	useEffect(() => {
		if (isModalOpen) {
			onOpenModal()
		} else {
			onCloseModal()
		}
	}, [isModalOpen])

	return (
		<>
			{isModalOpen && card && (
				<div className={s.modal__backdrop}>
					<div className="modal-dialog modal-lg">
						<div className="modal-content">
							<div className="relative w-100 h-15r">
								<Image
									src={card.image}
									alt={`Modal Card Image`}
									objectFit="cover"
									quality={80}
									layout="fill"
									placeholder="blur"
									blurDataURL={`data:image/svg+xml;base64,${toBase64(
										shimmer(700, 475)
									)}`}
								/>
							</div>
							<div className="absolute top-0 end-0 z-5 p-2 bg-white">
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
									onClick={onCloseModal}
								></button>
							</div>
							<div className="modal-body">
								<div className="pt-2">
									<h5 className="modal-title h4">{card.title}</h5>
									<small>{card.id}</small>
									<div className="mt-2">
										{card.tags.map(tag => (
											<span
												key={tag}
												className="me-1 fw-normal rounded-0 badge bg-dark"
											>
												{tag}
											</span>
										))}
									</div>
									<hr />
									<p className="pt-2">{card.description}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
export default ModalCard
