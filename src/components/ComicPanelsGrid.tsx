import React, { useContext } from "react";
import { Box, Grid } from "@mui/joy";
import { AppContext } from "../state/context";
import PanelItem from "./PanelItem";

interface IComicPanelsGridProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setPanelNumber: React.Dispatch<React.SetStateAction<number>>;
}

export default function ComicPanelsGrid({
  setOpen,
  setPanelNumber,
}: IComicPanelsGridProps) {
  const { comicData } = useContext(AppContext);

  const layout = [3.9, 4.3, 3.8, 4.8, 7.2, 7.3, 4.7, 4.1, 3.8, 4.1]
  return (
    <Box
      sx={{
        background: "white",
        border: "1px solid black",
        padding: 0.8,
        maxWidth: 600,
        aspectRatio: 375 / 450,
      }}
    >
      <Grid container spacing={1.5} sx={{ flexGrow: 1, height: "100%" }}>
        {layout.map((item, index) => {
          return (
            <PanelItem
              key={index}
              setOpen={setOpen}
              panelNumber={index + 1}
              setPanelNumber={setPanelNumber}
              comicData={comicData[index + 1]}
              xs={item}
            />
          );
        })}
      </Grid>
    </Box>
  );
}