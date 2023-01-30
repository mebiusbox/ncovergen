interface Props {
  text: string;
  size: number,
  fg: string;
  bg: string;
}
const Cover = ({ text, size, fg, bg }: Props) => {
  console.log(text, size, fg, bg)
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
      {text}
    </div>
  );
};

export default Cover;
