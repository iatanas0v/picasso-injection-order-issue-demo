import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Picasso from "@toptal/picasso-provider";
// Using only barrel imports breaks the injection order
// import { Link, Typography, Button } from "@toptal/picasso";
// Using the following imports fixes the issue
import Link from "@toptal/picasso/Link";
import { Typography, Button } from "@toptal/picasso";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Picasso>
      <Button as={Link} href="https://google.com" variant="positive">
        Open Google
      </Button>

      <Typography>This is some title</Typography>
    </Picasso>
  </StrictMode>
);
