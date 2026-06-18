Styled dropdown for the portal filter bar ("All Dates", "All Status", "All Ratings").

```jsx
<Select label="Status" options={['All Status','Pass','Fail']} />
<Select size="sm" options={[{value:'all',label:'All Ratings'},{value:'hi',label:'High Priority'}]} />
```

Accepts `options` as strings or `{value,label}` objects. Sizes `sm | md`. Custom chevron; matches `Input` borders and focus ring.
