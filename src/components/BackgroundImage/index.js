import Image from "next/image"

const BackgroundImage = () => {
	return (
		<div className="absolute w-100 min-vh-50 z-0 top-0">
            <div className="h-100 w-100">
                <div className="absolute h-100 w-100 bg-dark z-5 top-0 opacity-60"></div>
				<Image
					src={`http://herodigital.com/wp-content/uploads/2016/09/circleCi-hero-1140x500.jpg`}
					alt={`Hero Image`}
					objectFit="cover"
					quality={100}
					layout="fill"
				/>
			</div>
		</div>
	)
}

export default BackgroundImage
