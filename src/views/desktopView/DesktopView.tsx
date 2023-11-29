import MobileView from "../mobileView/MobileView";

const DesktopView = () => {
	return (
		<div className="bg-black h-full relative">
			<div className="absolute w-[250px] top-[50px] left-[50%] translate-x-[-50%] h-[86%] overflow-scroll">
				<MobileView />
			</div>

			<img
				src="/iphone_mockup.png"
				alt="iphone mockup"
				className="mx-auto h-full"
			/>
		</div>
	);
};

export default DesktopView;
