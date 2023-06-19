import React from "react";

// styled components
import { Copy } from "../UI/Copy";
import { Heading } from "../UI/Heading";

const Header = (): JSX.Element => (
  <header>
    <Heading>Startup Generato</Heading>

    <Copy>
      Got developers block? Use this app to generate a random startup, and then get building!
    </Copy>
  </header>
);

export default Header;
