import CopyToClipboardButton from "@/ui/CopyToClipboardButton";

function Header() {
  return (
    <header className="w-full mt-[100px] flex justify-between">
      <div className="flex flex-col">
        <h1 className="text-2xl text-black">Aceweb</h1>
        <span className="text-neutral-2 text-sm">Jan 14, 2026 by @herbu</span>
      </div>
      
      <CopyToClipboardButton />
    </header>
  );
}

export default Header;
