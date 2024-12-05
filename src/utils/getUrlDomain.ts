export function getUrlDomain(link: string): string {
  const noProtocol = link.replace(/(^\w+:|^)\/\//, '');

  const domain = noProtocol.split('/')[0].replace('www.', '');

  let result = domain;

  const matchFile = link.match(/\.([a-zA-Z0-9]+)$/);

  const nofiles = ['html'];

  const extension = matchFile && !nofiles.includes(matchFile[1]) ? ` (${matchFile[1]})` : '';

  result = domain + extension;

  return result;
};