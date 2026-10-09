import { Badge } from "../base/Badge";
import { Body } from "./Body";
import { Dot } from "./Dot";

import { Title } from "./Title";
import { Link } from "./Link";
import { RouterLink } from "./RouterLink";
import { Heading } from "./Heading";

export const TypographyDemoContent = () => (
  <div className="space-y-4">
    <div>
      <Body>Body text, simple really.</Body>
    </div>

    <div className="flex flex-col">
      <Dot />
      <Dot symbol="*" />
      <Body>
        Dot se
        <Dot />
        par
        <Dot />
        at
        <Dot />
        or, or really a
        <Dot symbol="*" />
        ny character.
      </Body>
    </div>

    <div>
      <Heading as="h1">Heading h1</Heading>
      <Heading>Heading h2 (default)</Heading>
      <Heading as="h3">Heading h3</Heading>
      <Heading as="h4">Heading h4</Heading>
      <Heading as="h5">Heading h5</Heading>
      <Heading as="h6">Heading h6</Heading>
    </div>

    <div>
      <Title
        text="Title h1"
        as="h1"
      />
      <Title text="Title h2 (default)" />
      <Title
        text="Title h3"
        as="h3"
      />
      <Title
        text="Title h4"
        as="h4"
      />
      <Title
        text="Title h5"
        as="h5"
      />
      <Title
        text="Title h6"
        as="h6"
      />
    </div>

    <div>
      <Title text="Title with children">
        <Badge color="green">Green</Badge>
      </Title>
      <Title
        text="Title with link"
        to="/"
      />
    </div>

    <div>
      <Link href="/">
        Link
      </Link>
    </div>

    <div>
      <RouterLink to="/">Router Link</RouterLink>
    </div>
  </div>
);
