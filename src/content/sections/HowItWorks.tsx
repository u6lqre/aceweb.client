function HowItWorks() {
  return (
    <>
      <p>
        Paste your AceStream link into the text field. Supported links have this
        format:
      </p>
      <code className="p-1.5 rounded-lg border border-neutral-3 w-fit self-center text-xs">
        acestream:\\5b776533534b767a84dfda263825ae1...
      </code>
      <p>
        When you click the play button, Aceweb sends the content ID to the
        AceStream engine and begins the stream loading process.
      </p>
      <p>
        The stream may take a few seconds to become available. During this time,
        Aceweb will display a loading indicator while the engine initializes the
        connection and generates the video stream.
      </p>
      <p>
        Once loaded, the player will appear automatically and the video will
        start playing in the browser.
      </p>
      <p>
        If a problem occurs during loading or playback, an error message will be
        displayed. In most cases, this means that the link is invalid or that
        the stream is no longer operational, so you will need to try another
        link.
      </p>
    </>
  );
}

export default HowItWorks;
