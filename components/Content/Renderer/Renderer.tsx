import { FunctionComponent } from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { Heading, Text } from '@components/Typography';
import { RendererProps } from '@components/Content/Renderer';
import { CodeBlock, CodeInline } from '@components/Content/Code';
import { CodeEditor } from '@components/Content/Code/Editor';

export const Renderer: FunctionComponent<RendererProps> = props => {
  return (
    <MDXRemote
      {...props}
      components={{
        h2: props => (
          <Heading as="h2" variant="display-3" className="mb-6">
            {props.children}
          </Heading>
        ),
        h3: props => (
          <Heading as="h3" variant="display-4" className="mb-6">
            {props.children}
          </Heading>
        ),
        h4: props => (
          <Heading as="h4" variant="display-5" className="mb-6">
            {props.children}
          </Heading>
        ),
        p: props => <Text className="mb-9">{props.children}</Text>,
        pre: props => <CodeBlock className="mb-9">{props.children}</CodeBlock>,
        code: props => <CodeInline>{props.children}</CodeInline>,
        CodeEditor,
      }}
    />
  );
};
