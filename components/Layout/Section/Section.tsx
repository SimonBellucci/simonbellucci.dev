import { FunctionComponent } from 'react';
import { SectionProps, sectionStyles } from '@components/Layout/Section';
import { Container } from '@components/Layout';
import { cx } from 'class-variance-authority';
import Grid from '@components/Layout/Grid/Grid/Grid';

export const Section: FunctionComponent<SectionProps> = ({
  py,
  container = true,
  className,
  children,
}) => {
  const content = (
    <>
      <Grid.Container>
        <Grid.Col lg={{ start: 2, end: 12 }} xl={{ start: 3, end: 11 }}>
          {children}
        </Grid.Col>
      </Grid.Container>
    </>
  );

  return (
    <section className={cx(className, 'relative overflow-hidden', sectionStyles({ py }))}>
      {container ? <Container>{content}</Container> : content}
    </section>
  );
};
