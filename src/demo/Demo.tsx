import { type BreadcrumbItem } from "../layout/Breadcrumbs";
import { Page } from "../layout/Page";
import { Subtitle } from "../base/Subtitle";
import { Title } from "../base/Title";
import { Card } from "../cards/Card";

import { BaseDemoContent } from "../base/BaseDemoContent";
import { ButtonsDemoContent } from "../buttons/ButtonsDemoContent";
import { CardsDemoContent } from "../cards/CardsDemoContent";
import { DataDemoContent } from "../data/DataDemoContent";
import { FeedbackDemoContent } from "../feedback/FeedbackDemoContent";
import { FormsDemoContent } from "../forms/FormsDemoContent";
import { IconsDemoContent } from "../icons/IconsDemoContent";
import { LayoutDemoContent } from "../layout/LayoutDemoContent";
import { OverlayDemoContent } from "../overlay/OverlayDemoContent";

interface DemoProps {
  breadcrumbs: BreadcrumbItem[];
}

export const Demo = ({ breadcrumbs }: DemoProps) => (
  <Page
    breadcrumbs={breadcrumbs}
    processTime="12.345"
  >
    <Title
      text="Style library"
      size="xl"
    />
    <Subtitle text="Demo page of the style library." />

    <Card>
      <Title text="base/" />
      <BaseDemoContent />
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
      <Title text="overlay/" />
      <OverlayDemoContent />
    </Card>

    <Card>
      <Title text="feedback/" />
      <FeedbackDemoContent />
    </Card>

    <Card>
      <Title text="data/" />
      <DataDemoContent />
    </Card>
  </Page>
);
