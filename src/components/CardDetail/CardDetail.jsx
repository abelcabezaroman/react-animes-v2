export default function CardDetail({ data }) {
  return (
    <figure>
      {data && (
        <>
          <img
            src={data.attributes.posterImage.large}
            alt={data.attributes.canonicalTitle}
          />
          <figcaption><h2>{data.attributes.canonicalTitle}</h2></figcaption>
          <p>{data.attributes.description}</p>
        </>
      )}
    </figure>
  );
}
