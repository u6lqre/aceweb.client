type Props = {};

function Footer({}: Props) {
  return (
    <footer className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-black font-medium">Contact</h1>
        <p className="font">
          In case you have any questions reach me at{" "}
          <a
            href="mailto:alvaro.contact@proton.me"
            className="underline underline-offset-4 decoration-neutral-4 hover:decoration-neutral-1 duration-100"
          >
            alvaro.contact@proton.me
          </a>
          .
        </p>
      </div>
      <div className="w-full flex justify-between items-center text-sm">
        <img src="/coffe.svg" />
        <div className="text-neutral-2">built by @herbu</div>
      </div>
    </footer>
  );
}

export default Footer;
