import React, { useContext, useEffect } from "react"
import Image from "next/image"

import { ModalContext } from "../../contexts/ModalContext"

import s from "./Modal.module.scss"

const ModalCard = () => {
	// const [isModalOpen, setModalIsOpen] = useState(false)
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

		console.log(isModalOpen)
	}, [isModalOpen])

	return (
		<>
			{isModalOpen && card && (
				<div className={s.modal__backdrop}>
					<div className="modal-dialog modal-lg">
						<div className="modal-content">
							<div className="relative w-100 h-10">
								<Image
									src={card.image}
									alt={`Hero Image`}
									objectFit="cover"
									quality={100}
									layout="fill"
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
											<span key={tag} className="me-1 fw-normal rounded-0 badge bg-dark">
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
