import { Box, Container } from "@mui/joy";
import ComicPanelsGrid from "../components/ComicPanelsGrid";
import { useRef, useState } from "react";
import DialogBox from "../components/DialogBox";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

export default function Create() {
	const options = [
		{ value: "default", label: "default" },
		{ value: "comic-diffusion", label: "comic-diffusion" },
	];

	// DialogBox state
	const [open, setOpen] = useState(false);
	const [panelNumber, setPanelNumber] = useState(0);

	// ComicStrip ref for image capture
	const comicStripRef = useRef(null);
	
	return (
		<Box
			sx={{
				height: "100vh",
				scrollSnapType: "y mandatory",
				"& > div": {
					scrollSnapAlign: "start",
				},
			}}
		>
			<Container
				sx={{
					minHeight: "100vh",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<ComicPanelsGrid
					ComicPanelsGridRef={comicStripRef}
					setOpen={setOpen}
					setPanelNumber={setPanelNumber}
				/>
			</Container>
			<DialogBox open={open} setOpen={setOpen} panelNumber={panelNumber} />
			<ToastContainer
				position="top-right"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
		</Box>
	);
}