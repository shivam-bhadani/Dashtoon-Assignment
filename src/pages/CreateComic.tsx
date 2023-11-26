import { Box, Container } from "@mui/joy";
import ComicPanelsGrid from "../components/ComicPanelsGrid";
import DialogBox from "../components/DialogBox";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export default function Create() {
	const [open, setOpen] = useState<boolean>(false);
	const [panelNumber, setPanelNumber] = useState(0);

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