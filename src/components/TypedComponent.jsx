import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedComponent = ({ strings, typeSpeed, backSpeed, loop }) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings,
      typeSpeed,
      backSpeed,
      loop,
    });

    return () => {
      typed.destroy();
    };
  }, [strings, typeSpeed, backSpeed, loop]);

  return <span ref={el} />;
};

export default TypedComponent;