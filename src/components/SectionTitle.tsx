type SectionTitleProps = {
  primary: string;
  secondary: string;
};

export default function SectionTitle({
  primary,
  secondary,
}: SectionTitleProps) {
  return (
    <h4 className="text-4xl text-center font-bold">
      {primary} <span className="text-primary">{secondary}</span>
    </h4>
  );
}
