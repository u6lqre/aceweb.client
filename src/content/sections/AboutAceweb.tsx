import Header from "@/components/Header";

function AboutAceweb() {
  return (
    <>
      <Header />
      <p>
        Aceweb is a web video player designed to make Acestream accesible
        directly from the browser, without the need to install external
        applications.{" "}
      </p>
      <p>
        Its developed with React and Express, and focuses on providing a simple,
        fast, and modern experience for playing AceStream streams through an
        intuitive web interface.
      </p>
      <p>
        In future versions, Aceweb will incorporate advanced features such as
        user accounts, saved channels, social features, and a system for rating
        the operational status of streams, allowing the community to easily
        identify which content is working properly.
      </p>
    </>
  );
}

export default AboutAceweb;
