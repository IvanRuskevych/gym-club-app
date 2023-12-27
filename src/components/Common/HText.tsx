type Props = { children: React.ReactNode; textTransform: string };

const HText = ({ children, textTransform }: Props) => {
  return (
    <h1
      className={`basis-3/5 font-montserrat text-3xl font-bold ${textTransform}`}
    >
      {children}
    </h1>
  );
};

export default HText;
