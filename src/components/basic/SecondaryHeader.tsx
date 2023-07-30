export const SecondaryHeader = (props: {title: string}) => {
  return (
    <section className="bg-center bg-no-repeat secondary-header bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-30">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-6xl lg:text-7xl">
          {props.title}
        </h1>
      </div>
    </section>
  );
};
