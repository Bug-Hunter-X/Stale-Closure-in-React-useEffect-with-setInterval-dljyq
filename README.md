# Stale Closure in React useEffect with setInterval
This example demonstrates a common error in React's useEffect hook when using setInterval.  The problem arises from a stale closure within the interval callback function.

The `updateCount` function references the `count` variable from its surrounding scope.  However, because this function is defined outside the useEffect, the value of `count` it refers to remains the initial value (0) throughout the interval's lifetime, rather than the updated value.

The solution shows how to correctly update the count variable using a functional update within the setInterval callback.