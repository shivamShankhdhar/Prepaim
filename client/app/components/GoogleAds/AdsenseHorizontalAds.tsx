"use client";
import React, { useEffect, useState } from "react";

const AdsenseHorizontalAds = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  useEffect(() => {
    ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
  }, []);
  return (
    <>
      {isClient && (
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-1113302487630583"
          data-ad-slot="7957270938"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      )}
    </>
  );
};

export default AdsenseHorizontalAds;
