const Grid = ({ children }) => {
  return (
    <section className="w-full h-full py-10 px-5">
        <h1 className="text-3xl font-bold py-4">Pro Skater </h1>
              <div className="w-full h-full grid grid-cols-4 gap-5">{children}</div>
    </section>
  );
};

export default Grid;
