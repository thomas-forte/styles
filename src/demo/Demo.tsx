import { type BreadcrumbItem } from "../layout/Breadcrumbs";
import { Page } from "../layout/Page";
import { Body } from "../typography/Body";
import { Title } from "../typography/Title";
import { Card } from "../cards/Card";

import { BaseDemoContent } from "../base/BaseDemoContent";
import { TypographyDemoContent } from "../typography/TypographyDemoContent";
import { ButtonsDemoContent } from "../buttons/ButtonsDemoContent";
import { CardsDemoContent } from "../cards/CardsDemoContent";
import { DataDemoContent } from "../data/DataDemoContent";
import { FeedbackDemoContent } from "../feedback/FeedbackDemoContent";
import { FormsDemoContent } from "../forms/FormsDemoContent";
import { IconsDemoContent } from "../icons/IconsDemoContent";
import { LayoutDemoContent } from "../layout/LayoutDemoContent";
import { DialogsDemoContent } from "../dialogs/DialogsDemoContent";
import { NavigationDemoContent } from "../navigation/NavigationDemoContent";
import { LinkIcon } from "@heroicons/react/24/solid";

interface DemoProps {
  breadcrumbs: BreadcrumbItem[];
}

export const Demo = ({ breadcrumbs }: DemoProps) => (
  <Page
    breadcrumbs={breadcrumbs}
    processTime={12.345}
  >
    <Title text="Style library" />
    <Body>Demo page of the style library.</Body>

    <Title
      text="Github repository"
      as="h6"
      to="https://github.com/thomas-forte/styles"
    >
      <LinkIcon className="size-4" />
    </Title>

    <Card>
      <Title text="base/" />
      <BaseDemoContent />
    </Card>

    <Card>
      <Title text="typography/" />
      <TypographyDemoContent />
    </Card>

    <Card>
      <Title text="buttons/" />
      <ButtonsDemoContent />
    </Card>

    <Card>
      <Title text="cards/" />
      <CardsDemoContent />
    </Card>

    <Card>
      <Title text="forms/" />
      <FormsDemoContent />
    </Card>

    <Card>
      <Title text="icons/" />
      <IconsDemoContent />
    </Card>

    <Card>
      <Title text="layout/" />
      <LayoutDemoContent />
    </Card>

    <Card>
      <Title text="dialogs/" />
      <DialogsDemoContent />
    </Card>

    <Card>
      <Title text="feedback/" />
      <FeedbackDemoContent />
    </Card>

    <Card>
      <Title text="data/" />
      <DataDemoContent />
    </Card>

    <Card>
      <Title text="navigation/" />
      <NavigationDemoContent />
    </Card>
  </Page>
);
