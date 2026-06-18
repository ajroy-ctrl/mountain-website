Screening-status pill from the candidate table — green PASS, red FAIL, amber PENDING, grey SENT.

```jsx
<StatusPill status="pass" />
<StatusPill status="fail" />
<StatusPill status="sent">Sent</StatusPill>
```

Auto-labels from `status`; override with children. `dot` toggles the leading dot.
