export default function PreloadResources() {
  return (
    <>
      {/* Hero poster loads first */}
      <link
        rel="preload"
        as="image"
        href="/images/Hero/heaven-seeds-hero-poster.jpg"
        fetchPriority="high"
      />

      {/* Hero video hint only. Do not preload all videos. */}
      <link
        rel="preload"
        as="video"
        href="/Video/Hero/heaven-seeds-hero-optimized.mp4"
        type="video/mp4"
      />

      {/* Important logo */}
      <link
        rel="preload"
        as="image"
        href="/images/Logo/logo-heavenseedsacademy.png"
        fetchPriority="high"
      />
    </>
  );
}
