import dynamic from "next/dynamic";

const MainChart = dynamic(() => import("shared/components/MainChart"), {
  ssr: false,
});

export default function Indicator() {
  return (
    <div>
      <MainChart />
    </div>
  );
}
