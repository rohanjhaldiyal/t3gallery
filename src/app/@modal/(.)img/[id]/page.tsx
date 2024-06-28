import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = parseInt(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid image ID");
  const image = await getImage(idAsNumber);
  return (
    <div>
      <img src={image.url} className="w-96" alt={image.name} />
    </div>
  );
}
