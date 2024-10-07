export function getUrlDomain(link: string): string {
  const noProtocol = link.replace(/(^\w+:|^)\/\//, '');

  const domain = noProtocol.split('/')[0];

  return domain;
};