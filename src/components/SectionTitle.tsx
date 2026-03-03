type SectionTitleProps = {
  firstWord: string;
  secondWord: string;
};

export default function SectionTitle({
  firstWord,
  secondWord,
}: SectionTitleProps) {
  return (
    <h4 className="text-4xl text-center font-bold">
      {firstWord} <span className="text-primary">{secondWord}</span>
    </h4>
  );
}
