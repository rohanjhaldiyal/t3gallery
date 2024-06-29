import FullPageImageView from "~/common/full-image-page";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = parseInt(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid image ID");
  return <FullPageImageView id={idAsNumber} />;
}
