import { ReactNode } from "react";

export const SecondaryHeader = (props: {title?: string, children?: ReactNode}) => {
  return (
    <section className="h-32 bg-wizard bg-center bg-contain bg-no-repeat bg-blend-multiply md:bg-cover  md:h-64 lg:h-96">
      <div className="px-4 mx-auto max-w-screen-2xl text-center py-32 lg:py-30">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-6xl lg:text-7xl">
          {props.title}
        </h1>
        {props.children}
      </div>
    </section>
  );
};
