function Reason({ title, content }: { title: string; content: string }) {
  return (
    <div>
      <h5>{title}</h5>
      <p>{content}</p>
    </div>
  );
}

export default Reason;
