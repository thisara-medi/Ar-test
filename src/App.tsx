import MediaQuery from "react-responsive";
import MobileView from "./views/mobileView/MobileView";
import DesktopView from "./views/desktopView/DesktopView";

function App() {
	return (
		<>
			<MediaQuery maxWidth={640}>
				<MobileView />
			</MediaQuery>
			<MediaQuery minWidth={640}>
				<DesktopView />
			</MediaQuery>
		</>
	);
}

export default App;
