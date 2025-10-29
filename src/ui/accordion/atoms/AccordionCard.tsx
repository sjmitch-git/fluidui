import React from "react";

import { AccordionCardProps } from "../types";

import { AccordionSection } from "../atoms";

import { Card, CardBody, CardImage, CardFooter } from "../..";

const AccordionCard = ({ src, title, description, link }: AccordionCardProps) => {
  return (
    <AccordionSection>
      <Card layout="row" className="accordion-card p-2" outline={false}>
        {src && <CardImage title={title} src={src} aspect="landscape" />}
        <CardBody>
          <p className="line-clamp-2 max-w-prose">{description}</p>
          <CardFooter link={link} linkLabel={title} />
        </CardBody>
      </Card>
    </AccordionSection>
  );
};

export default AccordionCard;
