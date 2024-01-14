const Library = () => {
  return (
    <section className="w-full h-screen">
      <h1 className="text-center py-2 text-2xl text-gray-400">Revistas</h1>
      <div className="container flex items-center justify-around pt-10">
        <div className="flex gap-2 items-center justify-center w-[30%]">
        <p className="text-lg text-gray-400">Mostrar:</p>
          <select>
            <option value=""></option>
            <option value="">Revistas</option>
            <option value="">Artigos</option>
          </select>
        </div>

        <dv className="flex items-center justify-center w-[40%] relative">
          <input
            type="text"
            placeholder="Buscar por nome"
            className="outline-none pl-4 h-8 rounded-md border-[1px] border-gray-300 w-full"
          />
        <p> <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-400 -ml-7 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg></p>
        </dv>
        <div className="flex gap-2 items-center justify-center w-[30%]">
          <p className="text-lg text-gray-400">Ordernar:</p>
          <select>
            <option value=""></option>
            <option value="">ASC</option>
            <option value="">DESC</option>
          </select>
        </div>
      </div>
      <h1 className="flex items-center justify-center w-full h-full pt-40">Nenhum livro adicionado a biblioteca.</h1>
    </section>
  );
};

export default Library;
