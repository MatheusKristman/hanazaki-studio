interface AboutCardProps {
  title: string;
  text: string[];
}

export function AboutCard({ title, text }: AboutCardProps) {
  return (
    <div className="h-full bg-gray-secondary px-6 py-9 rounded-md flex flex-col items-center">
      <h3 className="poppins-font text-xl text-gold-primary text-center mb-4 lg:text-2xl">
        {title}
      </h3>

      {text.map((t, index) => (
        <p
          key={index}
          className="manrope-font text-base text-light-primary text-center mb-2"
        >
          {t}
        </p>
      ))}
    </div>
  );
}
