import React from 'react';
import ReactMarkdown from 'react-markdown';
import Typography from '@material-ui/core/Typography';


const renderers = {
  /* eslint-disable-next-line react/prop-types */
  heading: ({ level, ...props }) => {
    let variant;
    let paragraph;

    switch (level) {
      case 1:
        variant = 'display1';
        break;
      case 2:
        variant = 'title';
        break;
      case 3:
        variant = 'subheading';
        break;
      case 4:
        variant = 'caption';
        paragraph = true;
        break;
      default:
        variant = 'body';
        break;
    }

    return <Typography {...props} gutterBottom variant={variant} paragraph={paragraph} />;
  },
  paragraph: props => <Typography {...props} paragraph />,
};

export default function Markdown(props) {
  return <ReactMarkdown renderers={renderers} {...props} />;
}