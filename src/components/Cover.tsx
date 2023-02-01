interface Props {
  text: string;
  size: number;
  fg: string;
  bg: string;
  antialias: boolean;
}
const Cover = ({ text, size, fg, bg, antialias }: Props) => {
  const antialiasStyle = {transform: 'rotate(0.028deg)'};
  return (
    <div
      style={{
        fontSize: size,
        color: fg,
        background: bg,
        width: '100%',
        height: '100%',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1 style={antialias?antialiasStyle:{}}>{text}</h1>
    </div>
  );
};

export default Cover;
