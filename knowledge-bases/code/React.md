- When we have a prop being passed to a child but the prop would be null in the beginning of the render process inside the parent (due to some useEffect or fetch data) then in the child component we can handle the 'prop is possibly null' TS error by doing something like:
```tsx
if (!parentContainerRef.current) {
    return <></>
}
```
- instead of overflow: scroll use overflow: auto, the former always shows a scroll bar even without overflow.

- You must have a label tag when using input, because then everything inside the label is part of the events that occur, for ex:
```tsx
<label>
    <div>
    <input type="checkbox" onChnage{handleInputChange} />
    <div> ... </div>
</label>
```
then you can detect change events on all the sub elements
