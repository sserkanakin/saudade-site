interface Props {
  url: string
  height?: number
}

export function EmbedPlayer({ url, height = 166 }: Props) {
  return (
    <div className="embed-player">
      <iframe
        src={url}
        width="100%"
        height={height}
        allow="autoplay"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  )
}
