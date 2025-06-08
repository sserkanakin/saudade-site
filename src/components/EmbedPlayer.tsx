interface Props {
  url: string;
  type?: "video" | "audio";
}

export function EmbedPlayer({ url, type = "video" }: Props) {
  const containerClasses =
    type === "video"
      ? "relative overflow-hidden rounded-lg pt-[56.25%]"
      : "relative overflow-hidden rounded-lg h-[166px]";

  return (
    <div className={containerClasses}>
      <iframe
        src={url}
        allow="autoplay"
        allowFullScreen
        className="absolute inset-0 h-full w-full rounded-lg"
      />
    </div>
  );
}