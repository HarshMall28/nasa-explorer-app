import { NEOContainer } from "../features/neo/containers/NEOContainer";

/**
 * NeowsPage
 * Page component for displaying Near-Earth Object (NEO) visualization.
 * Wraps the NEOContainer with a full-page black background.
 */
export default function NeowsPage() {
  return (
    <div className="bg-black min-h-screen overflow-y-auto">
      <NEOContainer />
    </div>
  );
}
