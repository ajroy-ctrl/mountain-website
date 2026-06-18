Labelled text field used across the Recruiter Portal for search, filters and forms.

```jsx
<Input label="Email" placeholder="you@company.com" />
<Input placeholder="Search by name, phone, or email…" iconLeft={<SearchIcon/>} />
<Input label="Phone" error="Required field" />
```

Pass `iconLeft` for a leading icon, `hint` for helper text, `error` for the red error state. Sizes `sm | md`. Focus shows the blue ring (`--shadow-focus`).
