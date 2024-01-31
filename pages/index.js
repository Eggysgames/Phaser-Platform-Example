import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import('../pages/platformer'),
  { ssr: false }
);

export default function Home() {
  return (
    <main>
      <div className="flex justify-center">
        <DynamicComponentWithNoSSR/>
      </div>
    </main>
  );
}