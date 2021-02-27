import NexLink from 'next/link';

type LinkProps = {
  to: string;
  title?: string;
  isExternal?: boolean;
};

const Link: React.FC<LinkProps> = ({ to, isExternal, children, title }) => {
  if (isExternal)
    return (
      <NexLink href={to}>
        <a target="_blank" title={title} rel="noreferrer noopener nofollow">
          {children}
        </a>
      </NexLink>
    );

  return (
    <NexLink href={to}>
      <a target="_self" rel="noreferrer noopener nofollow" title={title}>
        {children}
      </a>
    </NexLink>
  );
};

export default Link;
