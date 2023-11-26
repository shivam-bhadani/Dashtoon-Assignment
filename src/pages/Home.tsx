import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import HomePageLayout from "../components/HomePageLayout";
import { Link } from "react-router-dom";

const Home = () => {
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
			<Typography
				level="body-md"
				sx={{
					position: "absolute",
					top: "2rem",
					left: "50%",
					transform: "translateX(-50%)",
				}}
			>
				Dashtoon Assignment for Product Engineer
			</Typography>
			<HomePageLayout>
				<Typography
					level="h1"
					fontWeight="xl"
					fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
				>
					Craft Your Tale in Panels
				</Typography>
				<Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
					Transforming Stories into Comics
				</Typography>
				<Link to="/create-comic">
					<Button size="lg">
						Create Comic
					</Button>
				</Link>
			</HomePageLayout>
		</Box>
	)
}

export default Home