function Separator() {
  return (
    <div className="w-full flex justify-center items-center gap-1 my-16">
      {Array.from({ length: 6 }).map((_, id) => (
        <div key={id} className="bg-neutral-3 w-4 h-0.5 rounded-full" />
      ))}
    </div>
  );
}

export default Separator;
