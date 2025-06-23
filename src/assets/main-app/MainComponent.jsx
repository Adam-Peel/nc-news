import Sidebar from "./main-component/Sidebar";

function MainComponent() {
  return (
    <>
      <Sidebar userId={userId} />
      {/* Routing here for different pages */}
      <section>Main Page</section>
    </>
  );
}

export default MainComponent;
