import React from "react"
import './style.css';

export const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
      <div style={{ width: '30px' }}>
        <input className="form-check-input" type="checkbox" ref={resolvedRef} {...rest} />
      </div>
    )
  }
)