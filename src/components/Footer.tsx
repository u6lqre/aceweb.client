type Props = {};

function Footer({}: Props) {
  return (
    <footer className="w-full flex justify-between items-center text-sm">
      <img src="/coffe.svg" />
      <div className="text-neutral-2">built by @herbu</div>
    </footer>
  );
}

export default Footer;
