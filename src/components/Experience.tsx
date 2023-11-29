import {
	CameraControls,
	Environment,
	Html,
	MeshPortalMaterial,
	OrbitControls,
	RoundedBox,
	Sky,
	Text,
	useHelper,
	useTexture,
} from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";
import { Suspense, forwardRef, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Volvo } from "./Volvo";
import { VolvoNew } from "./VolvoNew";
import { VolvoCar } from "./VolvoCar";
import { geometry } from "maath";

extend(geometry);
export const Experience = () => {
	const [active, setActive] = useState(null);
	const [hovered, setHovered] = useState(null);
	const [yAngle, setYAngle] = useState(0);

	// useCursor(hovered);
	const controlsRef = useRef();
	const scene = useThree((state) => state.scene);

	useEffect(() => {
		return (window.onscroll = () => {
			const angle =
				document.getElementById("distance-div")!.getBoundingClientRect()
					.top / window.outerHeight;

			setYAngle(angle);
		});
	}, []);

	useEffect(() => {
		if (active) {
			const targetPosition = new THREE.Vector3();
			scene.getObjectByName(active).getWorldPosition(targetPosition);
			controlsRef.current.enabled = true;
			controlsRef.current.setLookAt(
				0,
				0,
				5,
				targetPosition.x,
				targetPosition.y,
				targetPosition.z,
				true
			);
			// camera.position.set(0, 0, 5);
			// camera.lookAt([
			// 	targetPosition.x,
			// 	targetPosition.y,
			// 	targetPosition.z,
			// ]);
		} else {
			// controlsRef.current.setLookAt(0, 0, 6, 0, 0, 0, true);
			// setTimeout(() => {
			// 	controlsRef.current.enabled = false;
			// }, 1000);
			// camera.position.set(0, yAngle, 6);
			// camera.lookAt([0, 0, 0]);
		}
	}, [active, yAngle]);

	return (
		<>
			<ambientLight intensity={0.2} />
			<Environment preset="sunset" />
			{/* <CameraControls
				ref={controlsRef}
				maxPolarAngle={Math.PI / 2}
				minPolarAngle={Math.PI / 6}
			/> */}
			<OrbitControls
				maxPolarAngle={Math.PI / 2}
				minPolarAngle={Math.PI / 6}
				enableZoom={false}
				enablePan={false}
				enableDamping={true}
			/>
			<MonsterStage
				texture={"/textures/dark.webp"}
				name="TOYOTA"
				// position-x={-0.4}
				rotation={[active ? 0 : 0, yAngle, yAngle / 2]}
				active={active}
				setActive={setActive}
				hovered={hovered}
				setHovered={setHovered}
			>
				<Sky />
				<VolvoCar
					scale={0.07}
					position-y={-0.5}
					position-z={-0.5}
					hovered={hovered === "VOLVO"}
					// onClick={() =>
					// 	setActive(active === "VOLVO" ? null : "VOLVO")
					// }
				/>
			</MonsterStage>
			<group rotation={[active ? 0 : 0, yAngle, yAngle / 2]}>
				<VolvoCar clip position={[0, -0.5, -0.5]} scale={0.07} />
			</group>
		</>
	);
};

const MonsterStage = ({
	refrence,
	children,
	texture,
	name,
	color,
	active,
	setActive,
	hovered,
	setHovered,
	...props
}) => {
	const map = useTexture(texture);
	const portalMaterial = useRef();
	const directionalLightRef = useRef();

	useHelper(directionalLightRef, THREE.DirectionalLightHelper);

	useFrame((_state, delta) => {
		const worldOpen = active === name;
		easing.damp(
			portalMaterial.current,
			"blend",
			worldOpen ? 1 : 0,
			0.2,
			delta
		);
	});

	return (
		<group ref={refrence} {...props}>
			<Text
				font="fonts/Clarendon-Regular-Font.ttf"
				fontSize={0.3}
				position={[0, 1, 0.051]}
				anchorY={"bottom"}
				letterSpacing={0.2}
			>
				{name}
				<meshBasicMaterial color={color} toneMapped={false} />
			</Text>
			<group position={[0, -1, 0.051]}>
				<Html
					occlude="blending"
					transform
					geometry={<planeGeometry args={[1, 0.2]} />}
					// style={{ height: "10px", display: "inline-block" }}
				>
					<div className="learn-more-btn">
						<button
							onClick={() => {
								window.open("http://volvo.de", "_blank");
							}}
						>
							Mehr erfahren
						</button>
					</div>
				</Html>
			</group>
			<RoundedBox
				name={name}
				args={[2, 3, 0.1]}
				onPointerEnter={() => setHovered(name)}
				onPointerLeave={() => setHovered(null)}
			>
				<MeshPortalMaterial
					ref={portalMaterial}
					side={THREE.DoubleSide}
				>
					<ambientLight intensity={0.2} />
					<Environment preset="sunset" />
					{/* <ambientLight intensity={1} /> */}
					{/* <spotLight intensity={10} position={[0, 5, 0]} /> */}
					{/* <Environment
						files="/textures/rural_asphalt_road_4k.hdr"
						background
					/> */}
					{children}
					{/* <mesh>
						<sphereGeometry args={[5, 64, 64]} />
						<meshStandardMaterial map={map} side={THREE.BackSide} />
					</mesh> */}
				</MeshPortalMaterial>
			</RoundedBox>
		</group>
	);
};
