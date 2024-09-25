interface collections {
  name: string;
  overview: string;
}
type collectionsType = {
  data: collections;
};
const HeadersCollections = ({ data }: collectionsType) => {
  return (
    <div className="flex flex-col py-40 px-4 pb-11 image-bg-container">
      <div className="flex flex-col ml-20 gap-5 max-w-[719px]">
        <h1 className="h1-heading text-white">{data?.name}</h1>
        <p className="body-large text-white">{data?.overview}</p>
      </div>
    </div>
  );
};

export default HeadersCollections;
