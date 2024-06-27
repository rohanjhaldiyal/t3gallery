import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/ff8f7c7b-3818-472a-a8db-1b9203f9c9ab-mev895.jpg",
  "https://utfs.io/f/a73bccd1-1692-4927-982a-b94222b630a8-m6g8z4.jpg",
  "https://utfs.io/f/354b1378-c8b6-4b24-b4db-51dd6cd7cb97-nooonl.jpg",
  "https://utfs.io/f/edc8394b-91d1-4832-b604-d234151a0276-qtng7a.jpeg",
  "https://utfs.io/f/8a499095-509d-4dea-b0b5-5c9fe027c99a-ilberp.jpeg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
