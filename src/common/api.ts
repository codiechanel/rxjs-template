import { useEffect, useState } from "react";
let useMedia = query => {
  let [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    let media = window.matchMedia(query);
    let listener = () => setMatches(media.matches);
    media.addListener(listener);
    listener();
    return () => media.removeListener(listener);
  }, [query]);

  return matches;
};

function getHostName(url) {
  var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
  if (
    match != null &&
    match.length > 2 &&
    typeof match[2] === "string" &&
    match[2].length > 0
  ) {
    return match[2];
  } else {
    return null;
  }
}

// not needed
function getDomain(url) {
  var hostName = getHostName(url);
  var domain = hostName;

  if (hostName != null) {
    var parts = hostName.split(".").reverse();

    if (parts != null && parts.length > 1) {
      domain = parts[1] + "." + parts[0];

      if (hostName.toLowerCase().indexOf(".co.uk") != -1 && parts.length > 2) {
        domain = parts[2] + "." + domain;
      }
    }
  }

  return domain;
}

function isScreenSmall() {
  let res = useMedia("(min-width: 600px)");
  return res;
}

// const api = { isScreenSmall };
export default { isScreenSmall, getHostName };
