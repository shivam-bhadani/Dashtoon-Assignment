import React from "react";
import { Grid, Box, Sheet, Typography } from "@mui/joy";
import { styled } from "@mui/joy/styles";

interface IPanelItemProps {
  comicData: {
    prompt: string | null;
    image: string | null;
    speechBubble: string | null;
  };
  xs: number;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  panelNumber: number;
  setPanelNumber: React.Dispatch<React.SetStateAction<number>>;
}

export default function PanelItem({
  comicData,
  xs,
  setOpen,
  panelNumber,
  setPanelNumber,
}: IPanelItemProps) {
  const Item = styled(Sheet)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography["body-sm"],
    color: "#32383E",
    padding: theme.spacing(0.2),
    textAlign: "center",
    height: "100%",
    border: "1px solid #32383E",
    cursor: "pointer",
  }));
  return (
    <Grid xs={xs}>
      <Item
        sx={{
          backgroundImage: comicData.image
            ? `url(${comicData.image!})`
            : "unset",
          backgroundSize: "cover",
        }}
        onClick={() => {
          setPanelNumber(panelNumber);
          setOpen(true);
        }}
      >
        {comicData.image ? (
          comicData.speechBubble ? (
            <Box
              sx={{
                display: "flex",
                height: "100%",
                flexDirection: "column-reverse",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  paddingX: 0.5,
                  border: "2px solid black",
                  background: "#FFF",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    "@media (max-width:700px)": {
                      fontSize: "0.5rem",
                    },
                    color: "#32383E",
                    fontFamily: "Bangers",
                  }}
                >
                  {comicData.speechBubble}
                </Typography>
              </Box>
            </Box>
          ) : null
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <p>Add Panel Item</p>
          </Box>
        )}
      </Item>
    </Grid>
  );
}