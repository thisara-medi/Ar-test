import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
import { FC, Suspense } from "react";

const CanvasApp = () => {
	return (
		<div className=" h-[500px]">
			<div id="distance-div"></div>
			<Canvas
				gl={{ localClippingEnabled: true }}
				shadows
				camera={{
					position: [0, 1, 6],
					fov: 30,
				}}
			>
				<Suspense fallback="Loading...">
					<Experience />
				</Suspense>
			</Canvas>
		</div>
	);
};

export default CanvasApp;
