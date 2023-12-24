import { useRef, useState } from "react";
import { motion } from "framer-motion";
import CanvasApp from "../../components/Canvas";
import MainLayout from "../../layouts/MainLayout";
import classNames from "classnames";
import ReactPlayer from "react-player";

const MobileView = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const videoRef = useRef();

	const openDemo = () => {
		window.open("https://o2.unitedspaces.org", "_blank");
	};

	const onVideoEnded = () => {
		setIsPlaying(false);
	};

	return (
		<>
			<div className="flex flex-col gap-4">
				<MainLayout />
				<MainLayout />
				<MainLayout />
				<div className="relative" style={{ overflowX: "hidden" }}>
					{/* <div
						className={classNames(
							{ "fade-out": !isPlaying },
							"h-[500px] absolute left-[50%] translate-x-[-50%]"
						)}
					>
						<ReactPlayer
							url="https://www.youtube.com/watch?v=04Qp-vS9et0"
							autoPlay
							muted={true}
							playing={true}
							playsinline
							height={500}
							onEnded={onVideoEnded}
							controls
						/>
					</div> */}
					<div className="relative">
						{isPlaying && (
							<a
								href={isPlaying ? "/GiftBox.glb" : "#"}
								rel="ar"
								className="block h-[100%] w-[100%] absolute z-[1000]"
							>
								<img src="" alt="" />
							</a>
						)}
						<video
							ref={videoRef}
							// className={classNames(
							// 	{ "fade-out": !isPlaying },
							// 	"h-[500px] absolute left-[50%] translate-x-[-50%]"
							// )}
							className=" mx-[auto] w-[100%]"
							style={{ zIndex: "1000" }}
							autoPlay
							muted
							playsInline
							preload="auto"
							onPlay={() => setIsPlaying(true)}
							// onEnded={() => setIsPlaying(true)}
							 loop={true}
							// controls
						>
							<source src="/giftbox.mp4" type="video/mp4" />
							{/* <source src="CT V_1.2.webm" type="video/webm" /> */}
							Your browser does not support the video tag.
						</video>
					</div>
					{/* <a
						href={isPlaying ? "/toyota.usdz" : "#"}
						rel="ar"
						className={classNames({
							"pointer-events-none": !isPlaying,
						})}
					>
						<video
							ref={videoRef}
							// className={classNames(
							// 	{ "fade-out": !isPlaying },
							// 	"h-[500px] absolute left-[50%] translate-x-[-50%]"
							// )}
							className="h-[500px] mx-[auto] w-[auto]"
							style={{ zIndex: "1000" }}
							autoPlay
							muted
							playsInline
							preload="auto"
							onPlay={() => alert("working")}
							// onEnded={onVideoEnded}
							// controls
						>
							<source src="/ad_video.mp4" type="video/mp4" />
							<source src="ad_video.webm" type="video/webm" />
							Your browser does not support the video tag.
						</video>
					</a> */}
					{/* <div
						className={classNames({ "fade-in": !isPlaying })}
						style={{ opacity: 0 }}
					>
						<CanvasApp />
					</div> */}
				</div>

				{/* <div
					className="parallax min-h-[600px] bg-red-500"
					onClick={openDemo}
				></div> */}
				<MainLayout />
				<MainLayout />
				<MainLayout />
			</div>
		</>
	);
};

export default MobileView;
