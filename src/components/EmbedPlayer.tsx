interface Props {
  url: string;
  type?: "video" | "audio";
}

export function EmbedPlayer({ url, type = "video" }: Props) {
  return (
    <div className={`embed-player ${type}`}> 
      <iframe src={url} allow="autoplay" allowFullScreen />
    </div>
  );
}