function wrapWithTag(text, tag) {
  return `<${tag}>${text}</${tag}>`;
}

function parseStrong(markdown) {
  const pattern = /__(.+?)__/g;
  return markdown.replace(pattern, (match, text) => wrapWithTag(text, 'strong'));
}

function parseEmphasis(markdown) {
  const pattern = /_(.+?)_/g;
  return markdown.replace(pattern, (match, text) => wrapWithTag(text, 'em'));
}

function parseText(markdown, isInline = false) {
  const parsedText = parseEmphasis(parseStrong(markdown));
  return isInline ? parsedText : wrapWithTag(parsedText, 'p');
}

function parseHeader(line) {
  const match = line.match(/^(#{1,6})\s+(.*)$/);
  if (!match) return null;

  const [ , hashes, text ] = match;
  const headerTag = `h${hashes.length}`;
  return wrapWithTag(text.trim(), headerTag);
}

function parseListItem(line, inList) {
  if (!line.startsWith('* ')) return null;
  const listItem = wrapWithTag(parseText(line.substring(2), true), 'li');
  return inList ? listItem : `<ul>${listItem}`;
}

function parseParagraph(line, inList) {
  const paragraph = parseText(line);
  return inList ? `</ul>${paragraph}` : paragraph;
}

function parseLine(line, inList) {
  let result = parseHeader(line);
  if (result) return { result, inList: false };

  result = parseListItem(line, inList);
  if (result) return { result, inList: true };

  result = parseParagraph(line, inList);
  if (result) return { result, inList: false };

  throw new Error('Invalid markdown line');
}

export function parse(markdown) {
  const lines = markdown.split('\n');
  let result = '';
  let inList = false;

  lines.forEach((line) => {
    const { result: lineResult, inList: newListStatus } = parseLine(line, inList);
    result += lineResult;
    inList = newListStatus;
  });

  if (inList) result += '</ul>';
  return result;
}
