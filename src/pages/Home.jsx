import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import data from "../data";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";


export default function ResponsiveGrid() {
  return (
    <Container sx={{mt:"2rem"}}>
      <Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {data.map((fe) => {
            const { id, name, text, img } = fe;
            return (
              <Grid item xs={12} sm={4} md={4} key={id} sx={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                <Card sx={{ maxWidth: 300, textAlign:"center"}}>
                  <CardMedia component="img" image={img} alt={name} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {text}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
}
