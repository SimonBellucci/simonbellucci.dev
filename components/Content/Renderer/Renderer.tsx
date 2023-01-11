import { FunctionComponent } from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { Heading, Text } from '@components/Typography';
import { RendererProps } from '@components/Content/Renderer';

export const Renderer: FunctionComponent<RendererProps> = props => {
  return (
    <MDXRemote
      {...props}
      components={{
        p: props => <Text className="mb-9">{props.children}</Text>,
        h2: props => (
          <Heading as="h2" variant="display-3" className="mb-6">
            {props.children}
          </Heading>
        ),
      }}
    />
  );
};
