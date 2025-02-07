```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic here.  The function is defined
    // outside the useEffect, which will cause unexpected
    // behavior because it references a stale closure.
    function updateCount() {
      setCount(count + 1);
    }
    const intervalId = setInterval(updateCount, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```