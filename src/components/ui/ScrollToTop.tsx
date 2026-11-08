import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scrolls to the top on page change, or to the matching element when the
// link has a hash (e.g. /services#family from the nav menu).
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1));
    if (target) {
      target.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
