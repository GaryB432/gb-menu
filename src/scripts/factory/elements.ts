export function createElement<K extends keyof HTMLElementTagNameMap>(
  tagName: K
): HTMLElementTagNameMap[K] {
  const elem = document.createElement(tagName);
  elem.classList.add('gbm');
  return elem;
}
export function createElementNS(
  namespaceURI: 'http://www.w3.org/2000/svg',
  qualifiedName: 'svg'
): SVGSVGElement;
export function createElementNS(
  namespaceURI: 'http://www.w3.org/2000/svg',
  qualifiedName: 'path'
): SVGPathElement;
export function createElementNS(
  namespaceURI: string | null,
  qualifiedName: string
): Element {
  return document.createElementNS(namespaceURI, qualifiedName);
}
