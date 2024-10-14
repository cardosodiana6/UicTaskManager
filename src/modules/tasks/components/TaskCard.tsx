const TaskCard: React.FC = () => {
  return (
    <article className="max-w-xs shadow-md p-3 rounded p-">
      <section className=""></section>
      <section className="flex flex-col">
        <h3 className="text-xl uppercase text-center text-slate-700 font-bold">
          Titulo
        </h3>
        <p className="text-slate-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium,
          voluptas quidem error magnam vitae unde tenetur ut est minima
          inventore esse corporis dolores possimus sapiente voluptatum et facere
          doloribus dolor!
        </p>
        <div className="flex gap-3 text-slate-400 font-bold justify-between items-center mt-2">
          <p>14/10/2024</p>
          <p>normal</p>
        </div>
      </section>
    </article>
  );
};

export default TaskCard;
