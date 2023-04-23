import { FunctionComponent } from 'react';
import { MDXRemote } from 'next-mdx-remote';
import { Heading, Text, List, ListItem } from '@components/Typography';
import { RendererProps } from '@components/Content/Renderer';
import { CodeBlock, CodeInline } from '@components/Content/Code';
import { CodeEditor } from '@components/Content/Code/Editor';
import { Link } from '@components/Action/Link/Link';
import { Image } from '@components/Utility/Image';

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
        ol: props => (
          <List as="ol" className="mb-9">
            {props.children}
          </List>
        ),
        ul: props => (
          <List as="ol" className="mb-9">
            {props.children}
          </List>
        ),
        li: props => <ListItem>{props.children}</ListItem>,
        a: props => (
          <Link href={props.href} target={props.target} underline>
            {props.children}
          </Link>
        ),
        Image,
        CodeEditor,
      }}
    />
  );
};
