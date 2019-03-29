Create paths for elements and navigate the element tree using same path.
The path is a recursive object similar to an XPath in the form of 
```
interface IElementPath{
    tagName: string,
    index: number,
    child: IElementPath | null
}
```

The paths are relative to the html element and always start with the body element.
A null child in the path signifies the end of the path.

# Install

```
npm install @bit-wrangler/dom-nav
```

# Usage

```typescript
document.addEventListener('click', event => {
    const path = createElementPath(event.target as HTMLElement);
    console.log(path);
    console.log(navigateToElementByPath(document.getElementsByTagName('html')[0], path));
});
```

Then click anywhere and check out the console logs.
