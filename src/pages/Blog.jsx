import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";

const BlogPage = () => {
  return (
    <Box className="pt-10 pb-40">
      <Typography variant="h3" fontWeight="bold" textAlign="center" mb={6}>
        Blog
      </Typography>

      <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image="https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?auto=format&fit=crop&w=861&h=517"
            alt="worm's-eye view photography of concrete building"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              fontWeight="bold"
            >
              Areka’s “Greencorn” Manifesto
            </Typography>
            <Typography variant="caption" color="text.secondary">
              5/15/2025 · 3 min read
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              The concept we invented to restore the balance of the planet.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default BlogPage;
