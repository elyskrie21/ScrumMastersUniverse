import { ReactNode } from "react";

export const SecondaryHeader = (props: {title?: string, children?: ReactNode}) => {
  return (
    <section className="bg-cover bg-right bg-no-repeat bg-intro  md:bg-center">
      <div className="px-4 w-full mx-auto max-w-screen-xl text-center py-32 lg:py-48">
        <h1 className="font-trifuno mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-6xl lg:text-7xl">
          {props.title}
        </h1>
        {props.children}
      </div>
    </section>
  );
};
